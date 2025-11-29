import { NextResponse } from "next/server";
import { db } from "../../lib/firebaseAdmin";

export async function GET() {
  const snap = await db.collection("music").get();

  const music = snap.docs.map(doc => ({
    ...doc.data()
  }));

  return NextResponse.json(music);
}
