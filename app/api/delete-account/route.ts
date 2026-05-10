// app/api/delete-account/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminFirestore } from '../../../lib/firebase-admin';

export async function POST(req: NextRequest) {
  const { email, password, reason } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  try {
    // 1. Verify credentials using Firebase Auth REST API
    const signInRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_WEB_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    const signInData = await signInRes.json();

    if (!signInRes.ok || !signInData.localId) {
      const code = signInData.error?.message || 'INVALID_CREDENTIALS';
      if (code.includes('INVALID_PASSWORD') || code.includes('EMAIL_NOT_FOUND') || code.includes('INVALID_LOGIN_CREDENTIALS')) {
        return NextResponse.json({ error: 'Incorrect email or password. Please try again.' }, { status: 401 });
      }
      return NextResponse.json({ error: 'Authentication failed. Please try again.' }, { status: 401 });
    }

    const uid = signInData.localId;
    const adminAuth = getAdminAuth();
    const adminDb = getAdminFirestore();

    // 2. Check for active rentals
    const activeRentals = await adminDb.collection('rentals')
      .where('renterId', '==', uid)
      .where('status', 'in', ['pending', 'active', 'confirmed'])
      .limit(1).get();

    const activeAsOwner = await adminDb.collection('rentals')
      .where('ownerId', '==', uid)
      .where('status', 'in', ['pending', 'active', 'confirmed'])
      .limit(1).get();

    if (!activeRentals.empty || !activeAsOwner.empty) {
      return NextResponse.json({
        error: 'You have active rentals. Please complete or cancel all active rentals before deleting your account.',
      }, { status: 400 });
    }

    // 3. Delete Firestore user document
    try {
      await adminDb.collection('users').doc(uid).delete();
    } catch (e) {
      console.error('Firestore user delete error:', e);
    }

    // 4. Log deletion for compliance
    await adminDb.collection('accountDeletions').add({
      uid,
      email,
      reason: reason || 'not_specified',
      deletedAt: new Date().toISOString(),
      source: 'web',
    });

    // 5. Delete Firebase Auth account
    await adminAuth.deleteUser(uid);

    console.log(`Account deleted: ${email} (${uid}) via web portal`);

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error('Account deletion error:', err);
    return NextResponse.json({
      error: 'An unexpected error occurred. Please contact support@joinsharestash.com',
    }, { status: 500 });
  }
}