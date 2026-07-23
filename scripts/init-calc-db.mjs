import { sql } from "@vercel/postgres";

async function init() {
  await sql`
    CREATE TABLE IF NOT EXISTS calculations (
      id SERIAL PRIMARY KEY,
      customer_name TEXT NOT NULL,
      job_address TEXT NOT NULL,
      job_date DATE NOT NULL,
      notes TEXT,
      square_footage INTEGER NOT NULL,
      small_appliance_circuits INTEGER DEFAULT 2,
      laundry_circuits INTEGER DEFAULT 1,
      dryer_va INTEGER DEFAULT 0,
      range_va INTEGER DEFAULT 0,
      water_heater_va INTEGER DEFAULT 0,
      dishwasher_va INTEGER DEFAULT 0,
      disposal_va INTEGER DEFAULT 0,
      microwave_va INTEGER DEFAULT 0,
      hvac_heating_va INTEGER DEFAULT 0,
      hvac_cooling_va INTEGER DEFAULT 0,
      ev_charger_va INTEGER DEFAULT 0,
      hot_tub_va INTEGER DEFAULT 0,
      pool_va INTEGER DEFAULT 0,
      other_fixed_loads JSONB DEFAULT '[]'::jsonb,
      result_optional_total_va INTEGER,
      result_optional_amps INTEGER,
      result_standard_total_va INTEGER,
      result_standard_amps INTEGER,
      recommended_service_size INTEGER,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_calc_created_at ON calculations(created_at DESC);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_calc_customer ON calculations(customer_name);`;

  console.log("Calculator database initialized.");
}

init().catch((e) => { console.error(e); process.exit(1); });
