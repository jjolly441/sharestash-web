import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAiWqGprlFP_Cc1t4_5R-UDJ15Z12fUTGg",
  authDomain: "peerrentalapp.firebaseapp.com",
  projectId: "peerrentalapp",
  storageBucket: "peerrentalapp.firebasestorage.app",
  messagingSenderId: "562667384657",
  appId: "1:562667384657:web:305a11c63eb4e515486d70"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const FUNCTIONS_BASE_URL = 'https://us-central1-peerrentalapp.cloudfunctions.net';
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_51SuwcDCTtFP9wxSLgirWxC3gbmyMbh9QwrKfhxH9XXR5ELxbzez4BpE24mz2NuaBEsOYK8LackswXL8YYOFn4Y0E00j1emDqgm';
export default app;
