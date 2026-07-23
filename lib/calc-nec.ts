export type CalcInput = {
  squareFootage: number;
  smallApplianceCircuits: number;      // default 2, min 2 per NEC 210.11(C)(1)
  laundryCircuits: number;              // default 1 per NEC 210.11(C)(2)
  dryerVA: number;                      // 0 if no dryer
  rangeVA: number;                      // 0 if no electric range
  waterHeaterVA: number;
  dishwasherVA: number;
  disposalVA: number;
  microwaveVA: number;
  hvacHeatingVA: number;                // use larger of heating vs cooling per 220.60
  hvacCoolingVA: number;
  evChargerVA: number;                  // continuous load, use 125% per 625.42
  hotTubVA: number;
  poolVA: number;
  otherFixedLoads: { name: string; va: number }[];  // additional fixed appliances
};

export type CalcResult = {
  optional: {
    generalLoad: number;
    applianceLoad: number;
    hvacLoad: number;
    totalVA: number;
    amps: number;
    breakdown: string[];
  };
  standard: {
    generalLightingLoad: number;
    generalLightingDemand: number;
    applianceCircuitLoad: number;
    applianceCircuitDemand: number;
    dryerDemand: number;
    rangeDemand: number;
    fixedApplianceLoad: number;
    fixedApplianceDemand: number;
    hvacLoad: number;
    largestMotorAddition: number;
    totalVA: number;
    amps: number;
    breakdown: string[];
  };
  recommendedService: 100 | 200 | 400;  // rounded up with 20% margin
};

// NEC 220.82 — Optional Method for dwelling units
// Step 1: General load = 3 VA/sq ft + 1500 VA per small appliance circuit + 1500 VA per laundry circuit + nameplate of all other appliances
// Step 2: Apply demand: 100% of first 10 kVA, 40% of remainder
// Step 3: Add largest of heating/AC load (100%)
// Step 4: Total = general demand + HVAC

export function calculateOptional(input: CalcInput): CalcResult["optional"] {
  // 3 VA per square foot for general lighting/receptacles (220.82(B)(1))
  const generalLighting = input.squareFootage * 3;

  // 1500 VA per small appliance circuit (220.82(B)(2))
  const smallAppliances = input.smallApplianceCircuits * 1500;

  // 1500 VA per laundry circuit (220.82(B)(2))
  const laundry = input.laundryCircuits * 1500;

  // Sum of nameplate ratings for all other appliances (220.82(B)(3))
  const otherAppliancesTotal =
    input.dryerVA +
    input.rangeVA +
    input.waterHeaterVA +
    input.dishwasherVA +
    input.disposalVA +
    input.microwaveVA +
    input.hotTubVA +
    input.poolVA +
    input.evChargerVA * 1.25 +   // continuous load per 625.42
    input.otherFixedLoads.reduce((sum, l) => sum + l.va, 0);

  const subtotal = generalLighting + smallAppliances + laundry + otherAppliancesTotal;

  // Apply demand: 100% of first 10,000 VA, 40% of remainder (220.82(B))
  let generalLoad: number;
  if (subtotal <= 10000) {
    generalLoad = subtotal;
  } else {
    generalLoad = 10000 + (subtotal - 10000) * 0.4;
  }

  // HVAC — larger of heating or cooling at 100% (220.82(C))
  const hvacLoad = Math.max(input.hvacHeatingVA, input.hvacCoolingVA);

  const totalVA = generalLoad + hvacLoad;
  const amps = totalVA / 240;  // 240V single-phase residential

  const breakdown = [
    `General lighting (3 VA × ${input.squareFootage} sq ft): ${generalLighting} VA`,
    `Small appliance circuits (${input.smallApplianceCircuits} × 1500): ${smallAppliances} VA`,
    `Laundry circuits (${input.laundryCircuits} × 1500): ${laundry} VA`,
    `Other appliances subtotal: ${otherAppliancesTotal} VA`,
    `Subtotal before demand: ${subtotal} VA`,
    `After demand (100% of first 10 kVA, 40% of remainder): ${Math.round(generalLoad)} VA`,
    `HVAC (larger of heating/cooling): ${hvacLoad} VA`,
    `TOTAL DEMAND: ${Math.round(totalVA)} VA / ${Math.round(amps)} A`,
  ];

  return {
    generalLoad: Math.round(generalLoad),
    applianceLoad: otherAppliancesTotal,
    hvacLoad,
    totalVA: Math.round(totalVA),
    amps: Math.round(amps),
    breakdown,
  };
}

// NEC 220.42/220.53 — Standard Method
// Step 1: General lighting/receptacle = 3 VA/sq ft, apply Table 220.42 demand (100% first 3000 VA, 35% next 117,000)
// Step 2: Small appliance + laundry = 1500 VA each, apply Table 220.42 demand
// Step 3: Dryer per 220.54 (5000 VA min or nameplate, whichever is greater)
// Step 4: Range per Table 220.55
// Step 5: Fixed appliances (4+ get 75% demand per 220.53)
// Step 6: HVAC larger of heat/AC at 100%
// Step 7: Add 25% of largest motor per 430.24

export function calculateStandard(input: CalcInput): CalcResult["standard"] {
  // General lighting: 3 VA per sq ft (Table 220.42(A))
  const generalLighting = input.squareFootage * 3;

  // Small appliance + laundry: 1500 VA each (220.52)
  const smallApplianceCircuits = input.smallApplianceCircuits * 1500;
  const laundryCircuits = input.laundryCircuits * 1500;
  const applianceCircuitLoad = smallApplianceCircuits + laundryCircuits;

  // Combined general + appliance circuits for Table 220.42 demand
  const totalGeneralAndAppliance = generalLighting + applianceCircuitLoad;

  // Apply Table 220.42 demand (residential):
  // First 3000 VA @ 100%, next 117,000 VA @ 35%
  let generalDemand: number;
  if (totalGeneralAndAppliance <= 3000) {
    generalDemand = totalGeneralAndAppliance;
  } else {
    generalDemand = 3000 + (totalGeneralAndAppliance - 3000) * 0.35;
  }

  // Dryer per 220.54 — nameplate or 5000 VA minimum, whichever is greater
  const dryerDemand = input.dryerVA > 0 ? Math.max(input.dryerVA, 5000) : 0;

  // Range per Table 220.55 — Column C for one range up to 12 kW
  // For simplicity: use 8000 VA for one range 12 kW or less; nameplate for larger
  let rangeDemand = 0;
  if (input.rangeVA > 0) {
    rangeDemand = input.rangeVA <= 12000 ? 8000 : input.rangeVA * 0.8;
  }

  // Fixed appliances (water heater, dishwasher, disposal, microwave, hot tub, pool)
  // Count 4 or more fixed appliances → 75% demand per 220.53
  const fixedLoads = [
    input.waterHeaterVA,
    input.dishwasherVA,
    input.disposalVA,
    input.microwaveVA,
    input.hotTubVA,
    input.poolVA,
    ...input.otherFixedLoads.map(l => l.va),
  ].filter(va => va > 0);

  const fixedApplianceLoad = fixedLoads.reduce((sum, va) => sum + va, 0);
  const fixedApplianceDemand = fixedLoads.length >= 4 ? fixedApplianceLoad * 0.75 : fixedApplianceLoad;

  // EV charger — continuous, 125% per 625.42
  const evLoad = input.evChargerVA * 1.25;

  // HVAC — larger of heating or cooling at 100% (220.60)
  const hvacLoad = Math.max(input.hvacHeatingVA, input.hvacCoolingVA);

  // Largest motor addition — 25% of largest motor per 430.24
  // For residential, this is usually the AC compressor or the largest 240V motor
  const largestMotorAddition = Math.max(input.hvacCoolingVA, input.disposalVA * 0.25);

  const totalVA =
    generalDemand +
    dryerDemand +
    rangeDemand +
    fixedApplianceDemand +
    evLoad +
    hvacLoad +
    largestMotorAddition;

  const amps = totalVA / 240;

  const breakdown = [
    `General lighting (3 VA × ${input.squareFootage} sq ft): ${generalLighting} VA`,
    `Small appliance + laundry circuits: ${applianceCircuitLoad} VA`,
    `Combined general/appliance after Table 220.42 demand: ${Math.round(generalDemand)} VA`,
    `Dryer (min 5000 VA or nameplate per 220.54): ${dryerDemand} VA`,
    `Range (per Table 220.55): ${rangeDemand} VA`,
    `Fixed appliances (${fixedLoads.length} loads, ${fixedLoads.length >= 4 ? "75%" : "100%"} demand): ${Math.round(fixedApplianceDemand)} VA`,
    `EV charger (125% continuous): ${Math.round(evLoad)} VA`,
    `HVAC (larger of heat/cool): ${hvacLoad} VA`,
    `Largest motor addition (25%): ${Math.round(largestMotorAddition)} VA`,
    `TOTAL DEMAND: ${Math.round(totalVA)} VA / ${Math.round(amps)} A`,
  ];

  return {
    generalLightingLoad: generalLighting,
    generalLightingDemand: Math.round(generalDemand),
    applianceCircuitLoad,
    applianceCircuitDemand: Math.round(generalDemand),
    dryerDemand,
    rangeDemand,
    fixedApplianceLoad,
    fixedApplianceDemand: Math.round(fixedApplianceDemand),
    hvacLoad,
    largestMotorAddition: Math.round(largestMotorAddition),
    totalVA: Math.round(totalVA),
    amps: Math.round(amps),
    breakdown,
  };
}

export function recommendServiceSize(maxAmps: number): 100 | 200 | 400 {
  // Recommend next standard size UP with ~20% headroom
  if (maxAmps < 80) return 100;
  if (maxAmps < 160) return 200;
  return 400;
}

export function calculate(input: CalcInput): CalcResult {
  const optional = calculateOptional(input);
  const standard = calculateStandard(input);
  const maxAmps = Math.max(optional.amps, standard.amps);

  return {
    optional,
    standard,
    recommendedService: recommendServiceSize(maxAmps),
  };
}
