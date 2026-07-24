import { NextResponse } from "next/server";
import { checkCredentials, createSession } from "@/lib/calc-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!checkCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await createSession(username);
  return NextResponse.json({ success: true });
}
