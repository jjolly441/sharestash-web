// pages/api/delete-account.ts
// API route that handles account deletion requests from the web page.
// Uses Firebase Admin SDK to authenticate and delete the user.
//
// SETUP REQUIRED:
// 1. Install firebase-admin: npm install firebase-admin
// 2. Download your Firebase service account key from:
//    Firebase Console → Project Settings → Service accounts → Generate new private key
// 3. Save it as: lib/firebase-admin.ts (see below)
// 4. Add to .env.local:
//    FIREBASE_PROJECT_ID=peerrentalapp
//    FIREBASE_CLIENT_EMAIL=your-service-account@peerrentalapp.iam.gserviceaccount.com
//    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."

import type { NextApiRequest, NextApiResponse } from 'next';
import { getAdminAuth, getAdminFirestore } from '../../lib/firebase-admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password, reason } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // 1. Verify credentials using Firebase Auth REST API
    const signInRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_WEB_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const signInData = await signInRes.json();

    if (!signInRes.ok || !signInData.localId) {
      const code = signInData.error?.message || 'INVALID_CREDENTIALS';
      if (code.includes('INVALID_PASSWORD') || code.includes('EMAIL_NOT_FOUND') || code.includes('INVALID_LOGIN_CREDENTIALS')) {
        return res.status(401).json({ error: 'Incorrect email or password. Please try again.' });
      }
      return res.status(401).json({ error: 'Authentication failed. Please try again.' });
    }

    const uid = signInData.localId;
    const adminAuth = getAdminAuth();
    const adminDb   = getAdminFirestore();

    // 2. Check for active rentals before deleting
    const activeRentals = await adminDb
      .collection('rentals')
      .where('renterId', '==', uid)
      .where('status', 'in', ['pending', 'active', 'confirmed'])
      .limit(1)
      .get();

    const activeAsOwner = await adminDb
      .collection('rentals')
      .where('ownerId', '==', uid)
      .where('status', 'in', ['pending', 'active', 'confirmed'])
      .limit(1)
      .get();

    if (!activeRentals.empty || !activeAsOwner.empty) {
      return res.status(400).json({
        error: 'You have active rentals. Please complete or cancel all active rentals before deleting your account.',
      });
    }

    // 3. Delete Firestore user document
    try {
      await adminDb.collection('users').doc(uid).delete();
    } catch (e) {
      console.error('Firestore user delete error:', e);
    }

    // 4. Log deletion request for compliance records
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

    return res.status(200).json({ success: true });

  } catch (err: any) {
    console.error('Account deletion error:', err);
    return res.status(500).json({
      error: 'An unexpected error occurred. Please contact support@joinsharestash.com',
    });
  }
}