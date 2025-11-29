import "server-only";

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: process.env.NEXT_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const db = getFirestore();
