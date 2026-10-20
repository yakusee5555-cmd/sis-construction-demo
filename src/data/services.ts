export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "masonry-brickwork",
    title: "Masonry & Brickwork",
    tagline: "Built straight. Built to last.",
    img: "/img/masonry.jpg",
    description: [
      "Brick and stone are the bones of Brooklyn housing — and when they're done right, they outlive everyone. We handle new masonry, structural brick repairs, lintels, and stonework for brownstones, row houses, and everything in between.",
      "You deal directly with the owner, Usman T., from the first look to the final cleanup. Honest communication, transparent pricing, and work we're proud to put our name on.",
    ],
    included: [
      "New brick & block work",
      "Structural brick repair",
      "Lintel replacement",
      "Stone veneer installation",
      "Parapet repair & rebuilding",
      "Full site cleanup on completion",
    ],
    steps: [
      { title: "On-site estimate", desc: "We look at the wall, the mortar, and what's causing the damage — then quote firm and free." },
      { title: "Match & prep", desc: "Brick and mortar matched to your building so repairs blend in, not stand out." },
      { title: "Build", desc: "Clean lines, proper bonding, and joints tooled the way they should be." },
      { title: "Walkthrough", desc: "We walk the finished work with you and back it with our workmanship warranty." },
    ],
    pricingHint: "Every masonry job is quoted free on-site — the price depends on access, materials, and how much wall we're touching. You get a firm written number before we start, and that's the number you pay.",
    faqs: [
      { q: "How much does brickwork cost?", a: "It depends on the scope — a small repair and a full parapet rebuild are very different jobs. Estimates are free and on-site, and the quote we give you is firm." },
      { q: "Can you match my existing brick?", a: "Yes. Matching brick and mortar color is a core part of masonry repair, especially on brownstones and older Brooklyn homes." },
      { q: "Do you handle DOB violations?", a: "We regularly repair the facade and sidewalk conditions behind common violations. Bring us the notice and we'll tell you straight what it takes to fix it." },
      { q: "Are you licensed and insured?", a: "Yes — fully licensed and insured, and every job carries our free workmanship warranty." },
    ],
    meta: "Masonry & brickwork in Brooklyn, NY. New brick, lintels, stone veneer, parapet repair. Free estimates — (631) 961-4781.",
  },
  {
    slug: "brick-pointing-facade-restoration",
    title: "Brick Pointing & Facade Restoration",
    tagline: "Stop water before it starts.",
    img: "/img/brick-pointing.jpg",
    description: [
      "Mortar is the sacrificial layer of your facade — it's supposed to wear out so the brick doesn't. When joints crack, crumble, or wash out, water gets behind the brick and the real damage starts: spalling, leaks, and interior plaster failure.",
      "We grind out failing mortar to the right depth, repoint with a mortar matched to your building's age and brick type, and restore the facade so it sheds water the way it was built to.",
    ],
    included: [
      "Full & spot repointing",
      "Mortar matched to brick & era",
      "Spalled brick replacement",
      "Facade cleaning & sealing options",
      "Parapet & cornice repair",
      "Scaffold-ready for multi-story work",
    ],
    steps: [
      { title: "Facade inspection", desc: "We check joints, brick condition, and where water is getting in." },
      { title: "Grind out", desc: "Failed mortar removed to sound material — never skim-coated over." },
      { title: "Repoint", desc: "New mortar packed in lifts and tooled to match the original joints." },
      { title: "Cure & clean", desc: "Joints cured properly and the facade left clean." },
    ],
    pricingHint: "Pointing is quoted free on-site by the area and condition of the facade. Spot repairs and full elevations are very different scopes — we'll measure, explain, and give you a firm written price.",
    faqs: [
      { q: "How do I know if I need pointing?", a: "Mortar that's recessed, cracked, sandy, or falling out in chunks — plus interior leaks or white efflorescence on brick — are the classic signs. We confirm with a free on-site look." },
      { q: "How long does repointing last?", a: "Done with the right mortar and proper depth, pointing should last decades. The wrong (too-hard) mortar can damage brick within a few winters, which is why matching matters." },
      { q: "Can you point just one wall?", a: "Yes. Spot pointing is common — we repoint the elevations that need it and leave sound joints alone." },
    ],
    meta: "Brick pointing & facade restoration in Brooklyn, NY. Mortar repair, spalled brick replacement. Free estimates — (631) 961-4781.",
  },
  {
    slug: "concrete-work",
    title: "Concrete Work",
    tagline: "Poured right. Finished clean.",
    img: "/img/concrete.jpg",
    description: [
      "Concrete fails for boring reasons: a thin base, no reinforcement, water pitched the wrong way. We pour driveways, sidewalks, patios, and pads the un-boring way — excavated, based, reinforced, and finished so water runs off and the slab survives freeze-thaw winters.",
      "That includes NYC sidewalk work, where a Notice of Violation comes with a 75-day clock. If DOT repairs it for you, they bill you — and unpaid bills can become a lien on the property. Fixing it yourself, on your schedule, is almost always the better deal.",
    ],
    included: [
      "Driveways & parking pads",
      "Sidewalks (incl. DOT violation repairs)",
      "Patios & backyard slabs",
      "Concrete steps & landings",
      "Demo & haul-away of old concrete",
      "Expansion joints & proper grading",
    ],
    steps: [
      { title: "Measure & quote", desc: "We measure, check the base and drainage, and quote firm and free." },
      { title: "Demo & base", desc: "Old concrete out, sub-base compacted — the part nobody sees is the part that matters." },
      { title: "Pour & finish", desc: "Reinforced pour, finished and jointed so cracks go where we tell them to." },
      { title: "Cure", desc: "Proper curing and a straight answer on when you can park on it." },
    ],
    pricingHint: "Concrete is quoted free on-site by square footage, thickness, and access. No per-yard surprises — you get one firm written price covering demo, materials, pour, and cleanup.",
    faqs: [
      { q: "I got a sidewalk violation. How fast can you fix it?", a: "Call us as soon as you get the notice — the DOT clock runs 75 days. We prioritize violation repairs and handle the full replacement." },
      { q: "How thick do you pour?", a: "Sidewalks and patios typically 4 inches, driveways heavier with reinforcement — set by the job, not by a one-size rule." },
      { q: "How long before I can use it?", a: "Foot traffic in about a day, vehicles after a proper cure — we'll give you exact timing for your pour." },
      { q: "Do you remove the old concrete?", a: "Yes. Demo and haul-away are part of the quote, not an add-on." },
    ],
    meta: "Concrete work in Brooklyn, NY — driveways, sidewalks, patios, DOT violation repairs. Free estimates — (631) 961-4781.",
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    tagline: "Dry basements start outside.",
    img: "/img/waterproofing.jpg",
    description: [
      "A wet basement is rarely a mystery — it's water finding the path of least resistance through foundation walls, floor joints, or cracks. Paint-on sealers hide the symptom for a season; real waterproofing stops water where it enters.",
      "We waterproof foundations and basements with membrane systems and proper drainage, then finish the job so the space is usable — not just less damp. It's also the first step before any basement remodel: finish over a water problem and you'll be opening walls twice.",
    ],
    included: [
      "Exterior foundation membranes",
      "Basement waterproofing systems",
      "Foundation crack repair",
      "Drainage & grading corrections",
      "Interior water management",
      "Pre-remodel moisture proofing",
    ],
    steps: [
      { title: "Find the source", desc: "We trace where water actually enters — most 'mystery leaks' have a specific entry point." },
      { title: "System plan", desc: "You get the fix explained in plain language with a firm price." },
      { title: "Install", desc: "Membrane and drainage installed, detailed at every joint and penetration." },
      { title: "Backfill & test", desc: "Restored, graded away from the house, and checked." },
    ],
    pricingHint: "Waterproofing is quoted free after an on-site inspection — the right system depends on where your water comes in. We'll show you the entry point and price the fix, not a guess over the phone.",
    faqs: [
      { q: "Will waterproofing fix my wet basement permanently?", a: "A properly installed membrane and drainage system addresses the source, not the symptom — that's the difference between waterproofing and a coat of sealer paint." },
      { q: "Do I need waterproofing before finishing my basement?", a: "Yes. Finishing over an active water problem traps moisture behind new walls. We waterproof first, then build." },
      { q: "Interior or exterior waterproofing — which do I need?", a: "It depends on the entry point and access. We inspect first and recommend the system that fits your house — sometimes interior drainage is the practical answer." },
    ],
    meta: "Foundation & basement waterproofing in Brooklyn, NY. Membrane systems, crack repair, drainage. Free estimates — (631) 961-4781.",
  },
  {
    slug: "steps-stoops",
    title: "Steps & Stoops",
    tagline: "The Brooklyn stoop, rebuilt right.",
    img: "/img/steps-stoops.jpg",
    description: [
      "The stoop is the handshake of a Brooklyn home — and the first thing to suffer from salt, freeze-thaw, and a hundred years of feet. Crumbling treads, rocking steps, and spalling concrete aren't just ugly; they're a trip hazard and a liability.",
      "We rebuild steps and stoops in concrete or stone: demolished to a sound base, formed and poured (or set) with proper pitch so water sheds, and finished to match the character of the house.",
    ],
    included: [
      "Full stoop rebuilds",
      "Concrete step repair & replacement",
      "Stone steps & treads",
      "Railing-ready rebuilds",
      "Landing & walkway tie-ins",
      "Demo & haul-away included",
    ],
    steps: [
      { title: "Assess", desc: "We check what's salvageable and what's past saving — honestly." },
      { title: "Demo", desc: "Failed material out, down to a sound base." },
      { title: "Rebuild", desc: "Formed, reinforced, and built with correct rise, run, and pitch." },
      { title: "Finish", desc: "Cured, cleaned, and ready for decades of foot traffic." },
    ],
    pricingHint: "Steps and stoops are quoted free on-site — repair vs. rebuild is a judgment call we'll make with you standing there, looking at the same damage. Firm written price either way.",
    faqs: [
      { q: "Can my steps be repaired instead of rebuilt?", a: "Sometimes — surface spalling and small cracks can be patched. If the base is moving or treads are rocking, a rebuild is the honest recommendation and cheaper in the long run." },
      { q: "Concrete or stone — which lasts longer?", a: "Both outlast patch jobs by decades when built right. Stone wins on looks and longevity; concrete wins on budget. Our blog breaks down the comparison." },
      { q: "How long does a stoop rebuild take?", a: "Most rebuilds run a few days including cure time. We'll give you the schedule up front." },
    ],
    meta: "Steps & stoop rebuilding in Brooklyn, NY — concrete and stone. Free estimates — (631) 961-4781.",
  },
  {
    slug: "chimney-repair-rebuild",
    title: "Chimney Repair & Rebuild",
    tagline: "From the crown down.",
    img: "/img/chimney.jpg",
    description: [
      "Chimneys live the hardest life on the house — full weather on all four sides, freeze-thaw every winter, and no roof protecting them. Cracked crowns, failed flashing, and crumbling mortar let water straight into the structure.",
      "We repair and rebuild chimneys from the roofline up: crowns, flashing, pointing, brick replacement, and full rebuilds when the stack is too far gone to save.",
    ],
    included: [
      "Chimney crown repair & replacement",
      "Flashing repair",
      "Chimney repointing",
      "Spalled brick replacement",
      "Full chimney rebuilds",
      "Cap installation",
    ],
    steps: [
      { title: "Roofline inspection", desc: "We get up there and look — crown, flashing, joints, and brick." },
      { title: "Straight assessment", desc: "Repair vs. rebuild, explained with photos of your actual chimney." },
      { title: "The work", desc: "Done safely, with the roof and yard protected below." },
      { title: "Seal & finish", desc: "Crowned, flashed, and pointed to shed water for years." },
    ],
    pricingHint: "Chimney work is quoted free after inspection — pricing depends on height, access, and how much of the stack needs work. You'll see photos of the damage and a firm price before deciding.",
    faqs: [
      { q: "How do I know if my chimney needs a rebuild?", a: "Leaning, deep mortar loss, and bricks spalling across the whole stack point to rebuild. Localized crown or joint failure is usually a repair. We'll show you photos and tell you which one you have." },
      { q: "My chimney leaks into the house. Is it the flashing?", a: "Often — flashing failure and cracked crowns are the two most common leak sources. Both are standard repairs for us." },
      { q: "Do you install chimney caps?", a: "Yes. A cap keeps water, animals, and debris out — cheap insurance for the masonry below it." },
    ],
    meta: "Chimney repair & rebuilds in Brooklyn, NY — crowns, flashing, pointing, full rebuilds. Free estimates — (631) 961-4781.",
  },
  {
    slug: "kitchen-bathroom-remodeling",
    title: "Kitchen & Bathroom Remodeling",
    tagline: "One crew. Start to finish.",
    img: "/img/kitchen-bath.jpg",
    description: [
      "Kitchen and bath remodels fail on coordination — five trades blaming each other while your house is torn up. We handle remodeling as one crew: demo, rough work, tiling, fixtures, and finishes under one roof and one point of contact — the owner.",
      "From a bathroom refresh to a full kitchen build-out, you get a written scope, transparent pricing, and a schedule we actually communicate about.",
    ],
    included: [
      "Full kitchen remodels",
      "Bathroom renovations",
      "Tiling — floors, walls, showers",
      "Fixture & vanity installation",
      "Waterproofing for wet areas",
      "Demo & debris removal",
    ],
    steps: [
      { title: "Design & scope", desc: "We walk the space, talk through layout and finishes, and write a real scope." },
      { title: "Firm quote", desc: "Transparent line-by-line pricing before demo starts." },
      { title: "Build", desc: "One crew, sequenced properly — waterproofing before tile, always." },
      { title: "Final walkthrough", desc: "We don't call it done until you've walked it with us." },
    ],
    pricingHint: "Remodels are quoted free after an in-home visit — scope and finishes drive the number, and we'll price options at different levels so you can choose with eyes open.",
    faqs: [
      { q: "Do you handle tiling too?", a: "Yes — tiling is in-house, including shower waterproofing done properly before the first tile goes up." },
      { q: "How long does a bathroom remodel take?", a: "Most full baths run two to three weeks depending on scope. You get the schedule before we start, and updates as we go." },
      { q: "Can you work with my fixtures and materials?", a: "Yes. Many clients pick their own fixtures and tile; we handle installation and everything behind the walls." },
    ],
    meta: "Kitchen & bathroom remodeling in Brooklyn, NY — tiling, fixtures, full renovations. Free estimates — (631) 961-4781.",
  },
  {
    slug: "basement-remodeling",
    title: "Basement Remodeling",
    tagline: "Space you're already paying for.",
    img: "/img/basement.jpg",
    description: [
      "Your basement is the cheapest square footage you'll ever add — the structure is already there. But a finished basement built over moisture problems is money thrown away, which is why we start every basement remodel with waterproofing and moisture control.",
      "Then we build it out properly: framing, insulation, drywall, flooring, and finishes that turn storage-and-spiders into living space, a home office, or a rental-ready unit.",
    ],
    included: [
      "Waterproofing before finishing",
      "Framing & insulation",
      "Drywall & finishing",
      "Flooring installation",
      "Egress & code-aware planning",
      "Full finishing & trim",
    ],
    steps: [
      { title: "Moisture check", desc: "We assess water entry and moisture first — and fix it before building over it." },
      { title: "Plan & quote", desc: "Layout, finishes, and a firm written price." },
      { title: "Build-out", desc: "Framing through finishes, one crew, owner-supervised." },
      { title: "Walkthrough", desc: "Final walk with the owner before we call it done." },
    ],
    pricingHint: "Basement remodels are quoted free after an in-home visit. The honest number depends on moisture conditions and finish level — we'll show you both and price it in writing.",
    faqs: [
      { q: "My basement gets damp. Can it still be finished?", a: "In most cases, yes — after waterproofing. Skipping that step is how finished basements end up torn out. We handle both, in the right order." },
      { q: "How long does a basement remodel take?", a: "Typical build-outs run several weeks depending on size and finishes. You get a real schedule up front." },
      { q: "Will a finished basement add value?", a: "Finished, dry, legal living space is one of the most reliable value-adds in NYC housing — especially compared to the cost per square foot of any addition." },
    ],
    meta: "Basement remodeling in Brooklyn, NY — waterproofed first, then finished. Free estimates — (631) 961-4781.",
  },
];
