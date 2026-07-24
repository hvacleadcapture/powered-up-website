import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getSession } from "@/lib/calc-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await req.json();

  const result = await sql`
    INSERT INTO calculations (
      customer_name, job_address, job_date, notes,
      square_footage, small_appliance_circuits, laundry_circuits,
      dryer_va, range_va, water_heater_va, dishwasher_va, disposal_va, microwave_va,
      hvac_heating_va, hvac_cooling_va, ev_charger_va, hot_tub_va, pool_va,
      other_fixed_loads,
      result_optional_total_va, result_optional_amps,
      result_standard_total_va, result_standard_amps,
      recommended_service_size
    ) VALUES (
      ${data.customerName}, ${data.jobAddress}, ${data.jobDate}, ${data.notes || ""},
      ${data.squareFootage}, ${data.smallApplianceCircuits}, ${data.laundryCircuits},
      ${data.dryerVA}, ${data.rangeVA}, ${data.waterHeaterVA}, ${data.dishwasherVA}, ${data.disposalVA}, ${data.microwaveVA},
      ${data.hvacHeatingVA}, ${data.hvacCoolingVA}, ${data.evChargerVA}, ${data.hotTubVA}, ${data.poolVA},
      ${JSON.stringify(data.otherFixedLoads || [])},
      ${data.result.optional.totalVA}, ${data.result.optional.amps},
      ${data.result.standard.totalVA}, ${data.result.standard.amps},
      ${data.result.recommendedService}
    ) RETURNING id;
  `;

  return NextResponse.json({ id: result.rows[0].id });
}
