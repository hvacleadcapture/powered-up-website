import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getSession } from "@/lib/calc-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const result = await sql`SELECT * FROM calculations WHERE id = ${parseInt(id)};`;

  if (result.rows.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ calculation: result.rows[0] });
}
