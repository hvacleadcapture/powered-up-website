export type Town = {
  slug: string;
  townName: string;
  townFull: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSub: string;
  heroPhoto: string;
  bodyParagraphs: string[];
  housingNotes: string;
  faqs: Array<{ q: string; a: string }>;
  metaTitle: string;
  metaDescription: string;
};

export const towns: Town[] = [
  {
    slug: "taunton",
    townName: "Taunton",
    townFull: "Taunton, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Taunton, MA.",
    heroSub:
      "Owner-operated electrical contractor based right here in Taunton. Panel upgrades, EV chargers, new construction, remodels — handled from quote to inspection by the same licensed electrician.",
    heroPhoto: "/photos/work-service-upgrade-white.jpg",
    bodyParagraphs: [
      "Powered Up LLC is headquartered in Taunton. This is our home base, and the vast majority of our work happens within a 30-minute drive of here.",
      "Taunton's housing stock is mixed — pre-war Victorians and farmhouses in the older neighborhoods, mid-century capes and ranches in the post-war developments, and newer construction along the outskirts. That means we see every wiring vintage across this town: knob-and-tube, BX armored cable, early Romex, and the brief aluminum branch wiring window of the late 60s and early 70s.",
      "Common Taunton calls: panel upgrades in older homes that are starting to add EV chargers and heat pumps, Federal Pacific and Zinsco panel replacements (still common in Taunton's mid-century housing), and full remodel wiring as homeowners renovate older properties.",
      "Because we're local, response times are short. Most quote requests in Taunton are returned within 24 hours, and same-day service calls are usually possible for urgent issues.",
    ],
    housingNotes:
      "Taunton has a mix of pre-war Victorian and Colonial homes in older neighborhoods, mid-century capes and ranches in the post-war suburbs, and newer construction along the outskirts.",
    faqs: [
      {
        q: "Are you actually based in Taunton?",
        a: "Yes. Powered Up LLC is headquartered in Taunton, MA. Micah Gentile, the owner and licensed electrician, lives and works in the area. This is our home base.",
      },
      {
        q: "Do you offer emergency electrical service in Taunton?",
        a: "We prioritize same-day calls for Taunton residents whenever possible. Call (508) 622-5919 directly for urgent issues.",
      },
      {
        q: "What's the most common electrical issue you see in Taunton homes?",
        a: "Panel upgrades in older homes. Many Taunton houses still have 100A panels installed in the 1960s-80s, which were sized for the loads of that era and aren't sized for modern heat pumps, EV chargers, or induction ranges.",
      },
    ],
    metaTitle: "Electrician in Taunton, MA | Powered Up LLC | Licensed & Insured",
    metaDescription:
      "Licensed, owner-operated electrician headquartered in Taunton, MA. Panel upgrades, EV chargers, remodels, repairs. Free quotes within 24 hours. Call (508) 622-5919.",
  },
  {
    slug: "brockton",
    townName: "Brockton",
    townFull: "Brockton, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Brockton, MA.",
    heroSub:
      "Owner-operated electrical service for Brockton homeowners and businesses. Panel upgrades, EV chargers, troubleshooting, and remodel wiring across the city.",
    heroPhoto: "/photos/work-service-upgrade-victorian.jpg",
    bodyParagraphs: [
      "Brockton is the largest city in our service area. Its housing stock reflects the city's history as a 19th-century industrial center — block after block of Victorian-era multi-family homes, triple-deckers, and worker housing built between roughly 1880 and 1920.",
      "What that means electrically: many of these homes started with knob-and-tube wiring, then got layered with BX armored cable in the early-to-mid 20th century, then Romex from the 1940s on. Most Brockton homes we walk into have several wiring vintages mixed together by decades of partial upgrades and unit conversions.",
      "Common Brockton calls: panel upgrades and service entrance replacements (often coordinated with insurance and city wiring inspector), knob-and-tube remediation for older multi-family properties, and rewiring projects tied to investor renovations and unit conversions.",
      "We work with both owner-occupants and investor-owners across Brockton. Permits pulled with the City of Brockton Wiring Inspector, inspections coordinated, documentation provided.",
    ],
    housingNotes:
      "Brockton's housing is heavily Victorian-era multi-families and triple-deckers from the late 1800s and early 1900s, with later infill of mid-century single-families and modern developments.",
    faqs: [
      {
        q: "Do you handle multi-family electrical work in Brockton?",
        a: "Yes. Triple-deckers, two-families, and small multi-family conversions are common in Brockton. We handle full rewires, panel separations for unit-level metering, and code compliance work for unit conversions.",
      },
      {
        q: "How quickly can you respond to Brockton service calls?",
        a: "Brockton is well within our daily service radius from Taunton — usually same-day or next-day for non-emergency calls. Emergency calls are prioritized.",
      },
      {
        q: "Do you coordinate with the Brockton Wiring Inspector?",
        a: "Yes. We pull electrical permits with the City of Brockton, schedule inspections, and provide documentation for the inspector and the property owner's records.",
      },
    ],
    metaTitle: "Electrician in Brockton, MA | Powered Up LLC | Multi-Family & Single Family",
    metaDescription:
      "Licensed electrician serving Brockton, MA. Panel upgrades, knob-and-tube remediation, multi-family electrical work. Free quotes within 24 hours. Call (508) 622-5919.",
  },
  {
    slug: "plymouth",
    townName: "Plymouth",
    townFull: "Plymouth, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Plymouth, MA.",
    heroSub:
      "Owner-operated electrical service for Plymouth homeowners — from historic colonial homes near the waterfront to newer construction in the outer neighborhoods.",
    heroPhoto: "/photos/work-service-upgrade-victorian.jpg",
    bodyParagraphs: [
      "Plymouth's housing covers the full range of New England housing history — 18th and 19th century colonial and Cape Cod homes near the historic district and waterfront, post-war ranches and capes in the mid-century neighborhoods, and modern construction in the outer parts of town.",
      "Older Plymouth homes often have layered wiring from decades of partial updates. Many were originally wired with knob-and-tube, then had BX or Romex added in pieces over the years. Insurance reviews and home sales frequently flag legacy K&T as a concern.",
      "Newer construction, especially homes built since 2000, generally has modern panels and wiring — but often needs additions for EV chargers, hot tubs, pools, and other modern loads that weren't part of the original design.",
      "We serve Plymouth regularly and coordinate permits and inspections with the Plymouth Wiring Inspector. From the village historic district to the further-out residential streets, we cover the full town.",
    ],
    housingNotes:
      "Plymouth has historic colonial and Cape Cod homes near the waterfront and downtown, mid-century neighborhoods inland, and modern construction in the outer parts of town.",
    faqs: [
      {
        q: "Do you work on historic Plymouth homes?",
        a: "Yes. We routinely work on pre-1900 colonial and Cape Cod homes in Plymouth, including knob-and-tube remediation, service upgrades, and modern circuit additions without unnecessary wall demolition. Older homes need an electrician who understands the layered wiring history.",
      },
      {
        q: "Can you install hot tub or pool electrical?",
        a: "Yes. Pool and hot tub wiring requires dedicated GFCI-protected circuits, proper bonding, and code-compliant burial depths for underground runs. We handle the full electrical scope including coordination with the Plymouth inspector.",
      },
      {
        q: "Do you serve all of Plymouth or just specific neighborhoods?",
        a: "All of Plymouth, including the village, North Plymouth, Manomet, Cedarville, and the surrounding residential areas. Plymouth is part of our regular daily service radius.",
      },
    ],
    metaTitle: "Electrician in Plymouth, MA | Powered Up LLC | Historic & Modern Homes",
    metaDescription:
      "Licensed electrician serving Plymouth, MA. Historic home wiring, panel upgrades, pool and hot tub circuits, EV chargers. Free quotes within 24 hours. Call (508) 622-5919.",
  },
  {
    slug: "boston",
    townName: "Boston",
    townFull: "Boston, MA",
    heroTitle: "Licensed Electrician Serving",
    heroTitleHighlight: "Boston Area.",
    heroSub:
      "Owner-operated electrical service for qualified projects in Boston and the surrounding neighborhoods. Panel upgrades, EV chargers, remodel wiring, and multi-family electrical work.",
    heroPhoto: "/photos/work-service-upgrade-white.jpg",
    bodyParagraphs: [
      "Boston's housing is unlike anywhere else in New England — triple-deckers in Dorchester, Roxbury, and Jamaica Plain; brownstones in the Back Bay and South End; Victorian single-families in West Roxbury and Roslindale; modern condos throughout. Each housing type has its own electrical history and its own modern demands.",
      "Multi-family electrical work dominates much of Boston. Triple-deckers in particular often need panel separations (when converted from single-meter to per-unit billing), service entrance upgrades, and full or partial rewires as legacy K&T and BX wiring is progressively replaced.",
      "Brownstones and other historic properties come with their own challenges — limited wire pathway space, plaster walls that don't accept easy retrofit, and city wiring inspection requirements that are stricter than many suburban towns.",
      "We take on Boston projects selectively, focused on jobs where the scope justifies the travel and the homeowner or property manager values working with the same licensed electrician from quote to inspection rather than rotating crews.",
    ],
    housingNotes:
      "Boston has triple-deckers in working-class neighborhoods, brownstones in historic districts, single-family Victorians, and modern condos — each requiring different electrical approaches.",
    faqs: [
      {
        q: "Do you serve all Boston neighborhoods?",
        a: "We take on qualified Boston-area projects across the city. Send project details through the quote form or call (508) 622-5919 to discuss your specific location and scope.",
      },
      {
        q: "Do you work on triple-deckers?",
        a: "Yes. Triple-decker electrical work — panel separations, service upgrades, unit-level rewires, and code compliance for conversions — is a common project type for us across Boston and Brockton.",
      },
      {
        q: "Do you handle Boston permit and inspection coordination?",
        a: "Yes. Boston's electrical permits and inspections are coordinated through the City of Boston Inspectional Services Department. We pull permits, schedule inspections, and provide documentation.",
      },
    ],
    metaTitle: "Electrician Serving Boston, MA | Powered Up LLC | Triple-Deckers & Brownstones",
    metaDescription:
      "Licensed electrician serving Boston, MA on qualified projects. Triple-decker panel separations, brownstone wiring, EV chargers, multi-family work. Call (508) 622-5919.",
  },
  {
    slug: "quincy",
    townName: "Quincy",
    townFull: "Quincy, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Quincy, MA.",
    heroSub:
      "Owner-operated electrical service for Quincy homeowners. From triple-deckers and Victorian multi-families to newer construction and condo work.",
    heroPhoto: "/photos/work-service-upgrade-victorian.jpg",
    bodyParagraphs: [
      "Quincy is one of the densest residential markets in our service area, and its housing reflects a long history — triple-deckers and multi-families from the late 1800s and early 1900s, mid-century single-family neighborhoods, and a significant amount of newer condo and townhouse development along the T line and the waterfront.",
      "Common Quincy electrical work: panel upgrades for older multi-families converting to per-unit metering, EV charger installations in single-families and accessible condo parking, and full rewires for properties undergoing renovation.",
      "Quincy's older housing stock often layers multiple wiring vintages — knob-and-tube in attics and basements, BX through the main living levels, and Romex in any space that's been recently remodeled. Diagnosing electrical issues in Quincy homes often means understanding what's actually live versus what's been disconnected over the years.",
      "We work with both owner-occupants and investor-owners in Quincy. Permits coordinated with the City of Quincy Wiring Inspector.",
    ],
    housingNotes:
      "Quincy is dense — triple-deckers and multi-families from the late 1800s and early 1900s, mid-century single-families, and modern condos along the T line and waterfront.",
    faqs: [
      {
        q: "Can you install EV chargers in a Quincy condo?",
        a: "Sometimes — it depends on the condo association rules, your assigned parking, and whether the panel can support the additional load. We assess feasibility as part of the quote, including coordination with the condo HOA where required.",
      },
      {
        q: "How do you handle triple-decker panel separations?",
        a: "Panel separations for multi-family properties involve replacing the existing master service with per-unit panels, often combined with a service entrance upgrade. Pulled with the Quincy Wiring Inspector and coordinated with the utility for metering changes.",
      },
      {
        q: "Do you serve North Quincy, Wollaston, Squantum, and other Quincy neighborhoods?",
        a: "Yes — all Quincy neighborhoods are part of our regular service area. North Quincy, Wollaston, Squantum, Marina Bay, Quincy Center, West Quincy, Houghs Neck, and the surrounding residential areas are all covered.",
      },
    ],
    metaTitle: "Electrician in Quincy, MA | Powered Up LLC | Multi-Family & Single Family",
    metaDescription:
      "Licensed electrician serving Quincy, MA. Triple-decker work, EV chargers, panel upgrades, condo electrical. Free quotes within 24 hours. Call (508) 622-5919.",
  },
  {
    slug: "raynham",
    townName: "Raynham",
    townFull: "Raynham, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Raynham, MA.",
    heroSub:
      "Owner-operated electrical service for Raynham homeowners. Local, responsive, and fully insured. Mostly single-family residential — colonial, ranch, and newer construction.",
    heroPhoto: "/photos/work-service-upgrade-white.jpg",
    bodyParagraphs: [
      "Raynham is right next door to Taunton — for us, it's part of our daily service radius and one of the fastest response times of any town we serve.",
      "Raynham's housing is predominantly single-family residential, with a mix of colonial, ranch, and cape-style homes spread across neighborhoods like North Raynham, the King Philip area, and the newer developments along Route 44. Many homes were built in the mid-century post-war boom and have panel and service ages reflecting that — common candidates for upgrades to support modern loads.",
      "Common Raynham calls: panel upgrades for homes adding EV chargers, heat pumps, or finished basements; remodel wiring as homeowners renovate; and outdoor lighting projects in the larger residential lots common to the area.",
      "Free quotes returned within 24 hours, and most service calls in Raynham are same-day or next-day.",
    ],
    housingNotes:
      "Raynham is mostly single-family residential — mid-century colonial, ranch, and cape-style homes plus newer construction along Route 44.",
    faqs: [
      {
        q: "How fast can you respond to Raynham calls?",
        a: "Raynham is part of our home territory — usually same-day or next-day for non-emergency calls, and most quote requests are returned within 24 hours.",
      },
      {
        q: "Do you do outdoor and landscape lighting in Raynham?",
        a: "Yes. Raynham's larger residential lots make outdoor lighting a popular service. Path lighting, uplighting on the house and trees, motion security, and low-voltage landscape systems on transformers.",
      },
      {
        q: "Are you licensed in Massachusetts?",
        a: "Yes. Powered Up LLC is licensed by the Commonwealth of Massachusetts and fully insured. License and insurance documentation can be provided at the time of quote.",
      },
    ],
    metaTitle: "Electrician in Raynham, MA | Powered Up LLC | Local & Responsive",
    metaDescription:
      "Licensed electrician serving Raynham, MA. Same-day service available. Panel upgrades, EV chargers, outdoor lighting, remodel wiring. Call (508) 622-5919.",
  },
  {
    slug: "bridgewater",
    townName: "Bridgewater",
    townFull: "Bridgewater, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Bridgewater, MA.",
    heroSub:
      "Owner-operated electrical service for Bridgewater homeowners and rentals. Single-family residential and student housing electrical work, panel upgrades, and EV chargers.",
    heroPhoto: "/photos/work-solar-enphase.jpg",
    bodyParagraphs: [
      "Bridgewater's housing reflects both the historic town center and the significant student rental market driven by Bridgewater State University. We see two distinct types of electrical work in Bridgewater: owner-occupied single-family work and rental property turnaround and code compliance work.",
      "Owner-occupied work in Bridgewater is similar to surrounding towns — panel upgrades for homes adding EV chargers, heat pumps, or pool circuits; kitchen and bath remodel wiring; and outdoor lighting for the larger residential lots.",
      "Rental property work includes per-unit code compliance, panel separations and metering changes for multi-tenant properties, and routine wiring repairs between tenant turnover. We work with landlords across Bridgewater on both one-off jobs and recurring property maintenance.",
      "Permits coordinated with the Bridgewater Wiring Inspector, inspections scheduled, documentation provided.",
    ],
    housingNotes:
      "Bridgewater is single-family residential mixed with a significant student rental market near Bridgewater State University.",
    faqs: [
      {
        q: "Do you work on student rental properties in Bridgewater?",
        a: "Yes. Rental property electrical work — code compliance between tenants, panel separations for per-unit metering, and routine repairs — is common in Bridgewater. We work with landlords on both individual jobs and ongoing property maintenance.",
      },
      {
        q: "Can you install EV chargers in Bridgewater?",
        a: "Yes. Bridgewater EV charger installations follow the same scope as anywhere else: vehicle-matched circuit sizing, panel load calc, permit pulled, installed in one day.",
      },
      {
        q: "How quickly can you respond to Bridgewater?",
        a: "Bridgewater is within our daily service radius — usually same-day or next-day response.",
      },
    ],
    metaTitle: "Electrician in Bridgewater, MA | Powered Up LLC | Residential & Rental",
    metaDescription:
      "Licensed electrician serving Bridgewater, MA. Single-family residential, student rental properties, panel upgrades, EV chargers. Call (508) 622-5919.",
  },
  {
    slug: "easton",
    townName: "Easton",
    townFull: "Easton, MA",
    heroTitle: "Licensed Electrician in",
    heroTitleHighlight: "Easton, MA.",
    heroSub:
      "Owner-operated electrical service for Easton homeowners — from historic estates in North Easton to newer construction throughout the town. Panel upgrades, EV chargers, and high-end remodel wiring.",
    heroPhoto: "/photos/work-service-upgrade-victorian.jpg",
    bodyParagraphs: [
      "Easton's housing stock skews toward larger single-family homes on substantial lots, with strong historic character in the North Easton village (much of it tied to the Ames family legacy) and newer high-end construction throughout South Easton and the outer parts of town.",
      "Common Easton electrical work tends to be larger in scope than in surrounding towns — full panel upgrades to 200A or 400A, EV charger installations in multi-bay garages, hot tub and pool circuits, finished basement and home office wiring, and significant outdoor and landscape lighting projects.",
      "Historic North Easton homes occasionally require careful coordination with town historic preservation requirements when working on visible elements. We handle those constraints as part of normal scope.",
      "Permits coordinated with the Easton Wiring Inspector, inspections scheduled, documentation provided.",
    ],
    housingNotes:
      "Easton has larger single-family homes on substantial lots — historic estates in North Easton and newer high-end construction throughout South Easton.",
    faqs: [
      {
        q: "Do you handle high-end home electrical projects in Easton?",
        a: "Yes. Larger panel upgrades (400A), pool and hot tub circuits, finished basement and home office buildouts, extensive landscape lighting, and full remodel wiring are common Easton projects for us.",
      },
      {
        q: "Can you work on historic North Easton homes?",
        a: "Yes. Older homes throughout North Easton frequently need careful work that respects historic character — we handle wiring updates that don't require unnecessary demolition or visible exterior changes.",
      },
      {
        q: "Do you do outdoor and landscape lighting in Easton?",
        a: "Yes. Easton's larger lots and landscaped properties are well-suited to layered outdoor lighting designs — path lighting, uplighting, down-lighting, and low-voltage landscape systems on transformers.",
      },
    ],
    metaTitle: "Electrician in Easton, MA | Powered Up LLC | High-End Residential",
    metaDescription:
      "Licensed electrician serving Easton, MA. Panel upgrades, EV chargers, pool/hot tub circuits, landscape lighting, historic home work. Call (508) 622-5919.",
  },
];
