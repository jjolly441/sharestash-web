// lib/firebase-admin.ts
// Firebase Admin SDK singleton for Next.js API routes.
//
// SETUP:
// 1. npm install firebase-admin
// 2. Add to .env.local in your Next.js project:
//
//    FIREBASE_PROJECT_ID=peerrentalapp
//    FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@peerrentalapp.iam.gserviceaccount.com
//    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
//    FIREBASE_WEB_API_KEY=AIzaSyAiWqGprlFP_Cc1t4_5R-UDJ15Z12fUTGg
//
// Get FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY from:
// Firebase Console → Project Settings → Service accounts → Generate new private key

import * as admin from 'firebase-admin';

let app: admin.app.App;

function getAdminApp(): admin.app.App {
  if (!app) {
    // Prevent duplicate initialization in Next.js hot reload
    if (admin.apps.length > 0) {
      app = admin.apps[0]!;
    } else {
      app = admin.initializeApp({
        credential: admin.credential.cert({
          projectId:   process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Next.js env vars escape newlines — replace \\n with actual \n
          privateKey:  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    }
  }
  return app;
}

export function getAdminAuth(): admin.auth.Auth {
  return getAdminApp().auth();
}

export function getAdminFirestore(): admin.firestore.Firestore {
  return getAdminApp().firestore();
}