import { readFileSync } from "node:fs";

// Plain `node` does not read .env.local, so load it ourselves before importing
// anything that needs the Postgres connection string. Existing process.env wins.
function loadEnvFile(path) {
  let raw;
  try {
    raw = readFileSync(path, "utf8");
  } catch {
    return; // file not present — fine, vars may already be in the environment
  }
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    // Strip a single layer of surrounding quotes.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

// Vercel Postgres reads POSTGRES_URL. Accept a plain DATABASE_URL as a fallback.
if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
  process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

if (!process.env.POSTGRES_URL) {
  console.error(
    [
      "",
      "  ✗ No Postgres connection string found.",
      "",
      "  Expected POSTGRES_URL (or DATABASE_URL) in the environment or .env.local.",
      "",
      "  Fix:",
      "    1. In the Vercel dashboard, create/connect a Postgres store to this project",
      "       (Storage tab), which populates POSTGRES_URL.",
      "    2. Run:  vercel env pull .env.local",
      "    3. Confirm it came down:  grep POSTGRES_URL .env.local",
      "    4. Re-run:  node scripts/init-calc-db.mjs",
      "",
    ].join("\n")
  );
  process.exit(1);
}

const { sql } = await import("@vercel/postgres");

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
