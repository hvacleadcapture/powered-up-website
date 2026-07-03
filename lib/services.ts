export type Service = {
  slug: string;
  serviceName: string;
  serviceValue: string;
  // Homepage services-grid tile copy (single-sourced here, rendered on the home page).
  homepageLabel: string;
  homepageTitle: string;
  homepageDesc: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSub: string;
  heroPhoto: string;
  bodyParagraphs: string[];
  faqs: Array<{ q: string; a: string }>;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "panel-upgrades",
    serviceName: "Panel Upgrades & Replacements",
    serviceValue: "Panel upgrade or replacement",
    homepageLabel: "01 — Panel Work",
    homepageTitle: "Panel Upgrades & Replacements",
    homepageDesc:
      "Full upgrades from 100A to 200A or 400A. Federal Pacific and Zinsco replacements brought up to current MA code. Permits pulled, inspections coordinated.",
    heroTitle: "Electrical Panel Upgrades.",
    heroTitleHighlight: "Done Right.",
    heroSub:
      "100A, 200A, and 400A panel upgrades. Federal Pacific and Zinsco replacements. Permit pulled, inspection coordinated, documentation provided. Across the Greater Boston area and the South Shore.",
    heroPhoto: "/photos/work-service-upgrade-white.jpg",
    bodyParagraphs: [
      "An electrical panel is the most important system in your house. Every circuit, every appliance, every outlet runs through it. When it fails, it doesn't fail quietly — it fails by overheating, by tripping under load, or, in the worst case, by causing an electrical fire.",
      "Most homes built before 1990 in Massachusetts have a panel that wasn't designed for how we live now. Heat pumps, EV chargers, induction ranges, hot tubs, finished basements with home gyms — none of it existed when your 100A panel was installed. We do the load calculation honestly, not optimistically.",
      "Federal Pacific Stab-Lok and Zinsco panels are documented fire hazards. Both have decades of independent testing showing they fail to trip during overload conditions. Many Massachusetts homeowner's insurance companies refuse to write or renew policies on homes with these panels installed. Replacement is the only real fix.",
      "Every panel upgrade we do includes pulling the permit from the local town wiring inspector, performing the work to current Massachusetts Electrical Code (527 CMR 12, NEC 2023), coordinating the inspection, and providing you with documentation for your insurance file.",
      "Powered Up LLC is owner-operated. When you call, you talk to Micah — the same licensed electrician who will quote the job, install the panel, and stand behind the work.",
    ],
    faqs: [
      {
        q: "How do I know if my panel needs to be replaced?",
        a: "Common signs include breakers that trip when multiple appliances run simultaneously, scorched or rusted breakers, panels labeled Federal Pacific or Zinsco, or panels rated 100A or less when you have modern high-load appliances like an EV charger, heat pump, or induction range. A quick photo of the panel sent to (508) 622-5919 is often all we need to give you an honest assessment.",
      },
      {
        q: "What size panel do I need?",
        a: "Most modern Massachusetts homes are best served by a 200A panel. Larger homes or properties with EV chargers, heat pumps, and electric ranges may need 400A. We perform a load calculation based on your actual usage and planned additions — not just the square footage. Sizing too small means you'll outgrow it; sizing too large is wasted money.",
      },
      {
        q: "How long does a panel upgrade take?",
        a: "Most residential panel replacements complete in one day. Service entrance upgrades that involve coordination with the utility company (Eversource, National Grid) may require a second day for the meter cutover. We handle utility coordination and inspection scheduling as part of the job.",
      },
      {
        q: "Do I need a permit?",
        a: "Yes. Massachusetts requires an electrical permit for any panel upgrade, replacement, or service change. We pull the permit, perform the work to current code, and coordinate the inspection with the local town wiring inspector.",
      },
    ],
    metaTitle: "Electrical Panel Upgrades & Replacements | Powered Up LLC | Greater Boston Area",
    metaDescription:
      "Licensed electrical panel upgrades, replacements, and Federal Pacific / Zinsco panel swaps across the Greater Boston area and the South Shore. 100A, 200A, 400A. Permits pulled, inspections coordinated. Owner-operated.",
  },
  {
    slug: "ev-chargers",
    serviceName: "EV Charger Installation",
    serviceValue: "EV charger installation",
    homepageLabel: "02 — Vehicles",
    homepageTitle: "EV Charger Installation",
    homepageDesc:
      "Level 2 home installs for Tesla, ChargePoint, Wallbox, JuiceBox, and other brands. Dedicated circuit sized properly for your vehicle, code-compliant, tested before we leave.",
    heroTitle: "Level 2 EV Chargers.",
    heroTitleHighlight: "Installed Right.",
    heroSub:
      "Tesla, ChargePoint, Wallbox, JuiceBox, Grizzl-E, and every other Level 2 charger brand. Sized to your vehicle, permit pulled, installed in one day. Across the Greater Boston area and the South Shore.",
    heroPhoto: "/photos/work-service-upgrade-white.jpg",
    bodyParagraphs: [
      "You bought the EV. The dealership recommended a Level 2 charger. Now your electrician needs to install it — and most installs get one of three things wrong.",
      "First, the circuit has to match your specific vehicle. A Tesla Model Y, a Ford Lightning, and a Chevy Bolt all pull different amperage. Installing a generic 40A circuit when your truck wants 48A means slower charging or a tripping breaker every time the battery's near empty.",
      "Second, your existing electrical panel has to handle the load. Most older homes in Massachusetts weren't sized for an EV charger plus a heat pump plus the dryer running simultaneously. We run a load calculation BEFORE the install — not after the first time everything trips at 6pm on a Tuesday.",
      "Third, the wire run matters. Long runs need bigger conductors to avoid voltage drop. Basement panel to a detached garage charger isn't a 30-foot run, it's an 80-foot run with code-mandated wire sizing. We pick the right wire for the actual distance, not the easy one.",
      "Permit is pulled, inspection coordinated, and most Level 2 installations complete in one day. Every install is performed to current Massachusetts Electrical Code (527 CMR 12, NEC 2023).",
    ],
    faqs: [
      {
        q: "Which EV charger brand do you recommend?",
        a: "It depends on your vehicle and what features matter to you. Tesla Wall Connector is the cleanest fit if you have a Tesla. ChargePoint Home Flex is the most versatile if you have multiple EVs or might switch brands. Wallbox Pulsar Plus is the smallest. JuiceBox is reliable and good value. We install all major brands — we don't push one over another.",
      },
      {
        q: "Do I need a panel upgrade to install an EV charger?",
        a: "Often, but not always. Many 200A panels can handle a Level 2 EV charger without an upgrade. Smaller 100A panels usually need an upgrade or a smart load management device (like a Wallbox Power Boost or Span panel) to safely add an EV charger. We perform the load calc as part of the quote.",
      },
      {
        q: "How fast will my EV charge with Level 2?",
        a: "A 40-amp Level 2 charger adds roughly 25-30 miles of range per hour of charging. A 48-amp circuit adds 35-40 miles per hour. For most daily commutes, an overnight Level 2 charge fully tops off the battery.",
      },
      {
        q: "Are there Massachusetts rebates for EV charger installations?",
        a: "Yes. Eversource and National Grid have rebate programs for residential EV charger installation in Massachusetts. The Mass Save program also offers home electrification rebates that sometimes apply. We can point you to the current rebate programs at the time of quote.",
      },
    ],
    metaTitle:
      "EV Charger Installation | Tesla, ChargePoint, Wallbox | Powered Up LLC | Greater Boston Area",
    metaDescription:
      "Level 2 EV charger installation for all major brands across the Greater Boston area and the South Shore. Sized to your vehicle, panel load calc included, permit pulled, installed in one day.",
  },
  {
    slug: "new-construction",
    serviceName: "New Construction Wiring",
    serviceValue: "New construction / addition",
    homepageLabel: "03 — Builds",
    homepageTitle: "New Construction & Additions",
    homepageDesc:
      "Rough-in through trim. Load planning done up front so the system supports what you're actually running. Coordination with GCs, framers, and inspectors.",
    heroTitle: "New Construction.",
    heroTitleHighlight: "Wired to Code.",
    heroSub:
      "Full electrical rough-in through trim for new builds and additions. Load planning done up front so the system supports what you're actually running. Across the Greater Boston area and the South Shore.",
    heroPhoto: "/photos/work-service-upgrade-victorian.jpg",
    bodyParagraphs: [
      "New construction is where electrical work either gets done right or gets done fast. We do it right.",
      "Most issues we troubleshoot in finished homes started during rough-in: undersized circuits, insufficient panel capacity, lighting layouts that don't make sense, outlet placement that misses how people actually use rooms. By the time the drywall's up, those mistakes cost ten times more to fix.",
      "We do the load planning BEFORE wire is pulled. Heat pumps, EV chargers, induction ranges, finished basements with home offices and gyms — we size the service for what you're actually going to run, not the minimum that passes inspection.",
      "Coordination matters. We work with general contractors, framers, plumbers, HVAC, and inspectors on a normal schedule — not as the bottleneck that holds up your project. Rough-in done when framing is ready, trim done when drywall is finished, final inspection coordinated with the town.",
      "Every job is permitted, performed to current Massachusetts Electrical Code (527 CMR 12, NEC 2023), and documented for your records. Whether it's a single-family new build or an addition to an existing home, the standard is the same.",
    ],
    faqs: [
      {
        q: "Do you work with general contractors?",
        a: "Yes. A significant portion of our new construction work comes from GCs across the Greater Boston area and the South Shore. We coordinate scheduling, pull our own permit and inspection, and work alongside framers, plumbers, and HVAC crews on a normal job site rhythm.",
      },
      {
        q: "How early in the project should I bring in an electrician?",
        a: "Before framing if possible, or at minimum before insulation. The load calc and panel sizing decisions need to happen at the planning stage — adding a 400A service after framing is much more expensive than planning for it from day one.",
      },
      {
        q: "Do you handle additions and renovations, not just new builds?",
        a: "Yes. Additions, second-story builds, dormer additions, in-law units, and gut renovations are all standard for us. The same load planning and code compliance applies whether it's a new house or a 200 sq ft addition.",
      },
      {
        q: "Do you provide permit and inspection documentation?",
        a: "Yes. We pull the electrical permit from the local town wiring inspector, perform the work to current Massachusetts code, schedule the inspection, and provide documentation for your records and your GC's files.",
      },
    ],
    metaTitle:
      "New Construction Electrical Wiring | Builders & Additions | Powered Up LLC | Greater Boston Area",
    metaDescription:
      "Full electrical rough-in through trim for new builds and additions across the Greater Boston area and the South Shore. Load planning, permits, inspections coordinated. GC-friendly.",
  },
  {
    slug: "remodel-wiring",
    serviceName: "Kitchen & Bath Remodel Wiring",
    serviceValue: "Kitchen or bath remodel wiring",
    homepageLabel: "04 — Remodels",
    homepageTitle: "Kitchen & Bath Remodel Wiring",
    homepageDesc:
      "Outlet relocations, recessed lighting, vanity circuits, GFCI / AFCI work, exhaust hookups. Clean drywall cut-ins and finish work.",
    heroTitle: "Kitchen & Bath Remodels.",
    heroTitleHighlight: "Wired Right.",
    heroSub:
      "Outlet relocations, recessed lighting, vanity circuits, GFCI / AFCI compliance, exhaust hookups. We coordinate with your GC and designer. Across the Greater Boston area and the South Shore.",
    heroPhoto: "/photos/work-service-upgrade-victorian.jpg",
    bodyParagraphs: [
      "Kitchen and bathroom remodels are the two most electrically demanding projects most homeowners undertake. They're also the two projects where most general contractors discover, mid-build, that the existing wiring can't support what the homeowner wants.",
      "Modern kitchens pull far more power than the ones they replace. An induction range alone wants a dedicated 240V circuit, typically 40-50 amps depending on the model. Double ovens, built-in microwaves, dishwashers — each needs a dedicated circuit. Garbage disposals and refrigerators are best installed on dedicated circuits too.",
      "Kitchen and bathroom receptacles require GFCI protection. Kitchen branch wiring requires AFCI protection per current Massachusetts code. If your contractor wires modern appliances onto an existing 1970s circuit, you'll either trip breakers, fail inspection, or both.",
      "Bathrooms add their own complexity: receptacles within 6 feet of water need GFCI protection. Heated floors, towel warmers, and steam shower controls need dedicated circuits. Vent fans need proper switching and exterior venting.",
      "We work with your GC, designer, and inspector during the planning phase — not as the trade that holds up your project. Load calc done up front, rough-in done when framing is ready, finish work done clean. Every job permitted and inspected.",
    ],
    faqs: [
      {
        q: "How many circuits does a modern kitchen need?",
        a: "A typical kitchen remodel needs 6-9 circuits: range/cooktop (dedicated 240V), oven (dedicated, if separate from cooktop), microwave (dedicated 20A), dishwasher (dedicated), garbage disposal (best practice dedicated), refrigerator (best practice dedicated), at least two 20A small-appliance counter circuits, and a separate lighting circuit.",
      },
      {
        q: "Can my existing panel handle a kitchen or bath remodel?",
        a: "It depends on the existing panel's capacity and what's already drawn on it. We perform a load calc before quoting — if the panel can't handle the new load, a panel upgrade gets factored in. Sometimes a remodel and panel upgrade are best done together.",
      },
      {
        q: "Do you work with interior designers and GCs?",
        a: "Yes. We coordinate directly with designers on lighting plans (recessed cans, vanity sconces, accent lighting, dimming), and with GCs on scheduling and rough-in timing. We pull our own permits and inspections so you don't have to.",
      },
      {
        q: "Is AFCI protection required for kitchen circuits?",
        a: "Yes. Per NEC 210.12 — adopted by Massachusetts code — all 120V, single-phase, 15- and 20-amp circuits supplying outlets in residential kitchens require AFCI protection. This includes the lighting circuits and the refrigerator circuit.",
      },
    ],
    metaTitle: "Kitchen & Bath Remodel Wiring | Powered Up LLC | Greater Boston Area",
    metaDescription:
      "Kitchen and bathroom remodel electrical wiring across the Greater Boston area and the South Shore. Outlet relocation, recessed lighting, GFCI/AFCI compliance, GC and designer coordination.",
  },
  {
    slug: "wiring-repair",
    serviceName: "Wiring Repair & Troubleshooting",
    serviceValue: "Wiring repair / troubleshooting",
    homepageLabel: "05 — Diagnostics",
    homepageTitle: "Wiring Repair & Troubleshooting",
    homepageDesc:
      "Tripping breakers, dead outlets, scorched receptacles, hot spots, knob-and-tube replacement, aluminum wiring remediation. We document what we find.",
    heroTitle: "Wiring Problems.",
    heroTitleHighlight: "Diagnosed and Fixed.",
    heroSub:
      "Tripping breakers, dead outlets, scorched receptacles, knob-and-tube remediation, aluminum wiring fixes. We document what we find. Across the Greater Boston area and the South Shore.",
    heroPhoto: "/photos/work-solar-enphase.jpg",
    bodyParagraphs: [
      "Most electrical problems homeowners run into aren't dramatic. They're a breaker that trips every time the microwave and toaster run together. An outlet that worked yesterday and doesn't today. A flickering light. A receptacle that feels warm or smells faintly burnt.",
      "These are diagnostic problems, not catastrophic ones — IF you catch them before they escalate. A breaker tripping repeatedly is a circuit telling you it's overloaded. A warm outlet is a connection problem somewhere in the path. A flickering light might be a loose neutral. Each has a real cause, and a real fix.",
      "Older homes across the Greater Boston area and the South Shore add their own complications. Knob-and-tube wiring (common in homes built before 1940) was never designed for modern electrical loads. Aluminum branch circuit wiring (common in homes built 1965-1975) has a long-documented failure pattern at connections. Both can be remediated — but it has to be done by someone who knows what they're looking at.",
      "Most importantly, we document what we find. After every troubleshooting visit, you get a clear report of what was wrong, what we fixed, what we found that's still a concern, and what we'd recommend addressing next. No vague 'all set' — just facts you can use to plan future work or share with your insurance.",
      "Same-day and next-day appointments available for most diagnostic calls.",
    ],
    faqs: [
      {
        q: "My breaker keeps tripping. Is it dangerous?",
        a: "A breaker tripping is the system protecting you — that part is doing its job. The question is why it's tripping. If it trips under specific loads (microwave + toaster, for example), the circuit is undersized for the load. If it trips randomly, there may be a short or a loose connection somewhere. Either case needs a diagnostic visit. Don't repeatedly reset a breaker that keeps tripping — that defeats the safety mechanism.",
      },
      {
        q: "What does knob-and-tube remediation involve?",
        a: "It depends on how much knob-and-tube is still live. Some homes have just a few legacy K&T runs that can be disconnected; others have most of the home's wiring still on K&T and need a full or partial rewire. We do a survey first, identify what's live versus disconnected, and quote based on actual scope. Many insurance carriers require K&T remediation before renewing — we provide documentation for your insurance file.",
      },
      {
        q: "How do I know if I have aluminum wiring?",
        a: "If your home was built between 1965 and 1975, there's a real chance. Aluminum branch circuit wiring is silver-colored (vs. copper, which is reddish-brown) and is usually marked 'AL' on the cable jacket. Common signs of aluminum wiring problems include warm or discolored outlets and switches, flickering lights, or a burning plastic smell at receptacles. If you suspect aluminum wiring, get it evaluated — there are proven remediation methods that don't require a full rewire.",
      },
      {
        q: "Do you handle emergency calls?",
        a: "Same-day and next-day calls for most issues. For true emergencies (active sparking, burning smell, partial power loss), call (508) 622-5919 directly and we'll work it into the day's schedule whenever possible.",
      },
    ],
    metaTitle:
      "Wiring Repair & Troubleshooting | Knob-and-Tube, Aluminum, Diagnostics | Powered Up LLC | Greater Boston Area",
    metaDescription:
      "Electrical wiring diagnostics and repair across the Greater Boston area and the South Shore. Tripping breakers, knob-and-tube remediation, aluminum wiring fixes. Documented findings.",
  },
  {
    slug: "lighting",
    serviceName: "Lighting Installation & Design",
    serviceValue: "Lighting / fixtures",
    homepageLabel: "06 — Light",
    homepageTitle: "Fixtures & Outdoor Lighting",
    homepageDesc:
      "Chandeliers, ceiling fans, recessed cans, vanity lights, floodlights, security lighting, landscape lighting. Weatherproof installs with outdoor-rated wiring.",
    heroTitle: "Lighting That Actually Works.",
    heroTitleHighlight: "Inside and Out.",
    heroSub:
      "Recessed lighting, chandeliers, ceiling fans, vanity lighting, outdoor and landscape lighting. Wired correctly, switched correctly, dimmed correctly. Across the Greater Boston area and the South Shore.",
    heroPhoto: "/photos/work-solar-enphase.jpg",
    bodyParagraphs: [
      "Good lighting is the difference between a room that feels finished and one that feels like a contractor walked off the job. It's also the work most electricians do worst — because the technical install is easy, but the design thinking gets skipped.",
      "Every well-lit space has three layers: task lighting (where you actually need to see — countertops, vanities, work surfaces), ambient lighting (the general fill light for the room), and accent lighting (the layer that makes a space feel intentional). Most homes have one layer — usually a single overhead — and homeowners wonder why the room doesn't feel right.",
      "We do the wiring AND the switching correctly. Dimmer compatibility matters: LED dimmers, smart switches, three-way and four-way switching, scene controls. A $20 dimmer paired with the wrong LED bulb means flickering, buzzing, or just an on/off switch with no actual dimming range.",
      "Outdoor lighting is its own category. Path lights, uplighting on the house and trees, down-lighting from eaves and tree-mounted fixtures, low-voltage landscape systems on transformers. We design the layout before we trench a single foot of wire — most outdoor lighting fails because nobody planned where the light should actually go.",
      "Every job permitted and performed to current Massachusetts Electrical Code.",
    ],
    faqs: [
      {
        q: "Can I add recessed lighting to my existing ceiling without major reno?",
        a: "Often yes. Most retrofit recessed cans install through 4-6 inch holes cut directly into existing ceilings, with wiring fished through the attic or ceiling cavity. Some ceilings (drop ceilings, certain joist orientations) make this harder, but for most rooms with attic access above, retrofit recessed lighting is a clean one-day job.",
      },
      {
        q: "Why do my dimmers buzz or flicker with LED bulbs?",
        a: "Almost always a compatibility issue. Older dimmers were designed for incandescent bulbs (resistive load) and don't work properly with LED drivers (electronic load). The fix is matching LED-rated dimmers to LED bulbs, or installing smart switches that handle either. We can swap dimmers as part of the install.",
      },
      {
        q: "Do you install smart lighting systems like Lutron Caseta?",
        a: "Yes. Lutron Caseta, Lutron RadioRA, Leviton Decora Smart, and similar systems are increasingly common in remodels. We wire neutral wires to all switch locations during rough-in (required for most smart switches) and configure scenes, schedules, and three-way virtual switching.",
      },
      {
        q: "Do you do outdoor and landscape lighting?",
        a: "Yes. Path lighting, uplighting on trees and architectural features, down-lighting from eaves or trees, low-voltage landscape systems on transformers, deck and patio lighting, motion-activated security lights. Design done in collaboration with the homeowner before any trenching.",
      },
    ],
    metaTitle: "Lighting Installation & Design | Indoor & Outdoor | Powered Up LLC | Greater Boston Area",
    metaDescription:
      "Recessed lighting, chandeliers, ceiling fans, smart switches, outdoor and landscape lighting installation across the Greater Boston area and the South Shore. Layered lighting design.",
  },
];
