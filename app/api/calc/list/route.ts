import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getSession } from "@/lib/calc-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const result = await sql`
    SELECT id, customer_name, job_address, job_date, recommended_service_size, created_at
    FROM calculations
    ORDER BY created_at DESC
    LIMIT 100;
  `;

  return NextResponse.json({ calculations: result.rows });
}
