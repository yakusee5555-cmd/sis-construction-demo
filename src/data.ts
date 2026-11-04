export const BUSINESS = {
  name: "Strong Innovative Structures INC",
  shortName: "S.I.S. Construction",
  phone: "(631) 961-4781",
  phoneHref: "tel:+16319614781",
  address: "Brooklyn, NY — serving all 5 boroughs",
  hours: "Mon–Fri 8:00 AM–6:00 PM · Sat 9:00 AM–5:00 PM · Sun 9:00 AM–4:00 PM",
  emergency: "Fully Licensed & Insured · Free Estimates",
  rating: "5.0",
  reviewCount: "6",
  instagram: "https://www.instagram.com/s.i.s._construction_inc/",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HERO_IMG = "/img/hero.jpg";
export const FULLBLEED_IMG = "/img/house-sunroom.jpg";
export const DARK_BG = "/img/construction-site.jpg";

export const OWNER_QUOTE =
  "Your home is your biggest investment — we treat it with the same care as our own.";

/* Dark numbered list — additional services (section 3 data) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/stucco.jpg",
    title: "Stucco repair",
    desc: "Cracks patched and matched to your existing finish",
  },
  {
    img: "/img/roofing.jpg",
    title: "Roofing",
    desc: "Repairs and replacements that keep water out",
  },
  {
    img: "/img/brick-pad.jpg",
    title: "Pavers & patios",
    desc: "Patios, walkways, and pads built on a solid base",
  },
  {
    img: "/img/pressure-washing.jpg",
    title: "Pressure washing",
    desc: "Brick, concrete, and siding brought back to life",
  },
  {
    img: "/img/concrete-alley.jpg",
    title: "Concrete flatwork",
    desc: "Alleys, pads, and aprons poured and finished clean",
  },
  {
    img: "/img/construction-site.jpg",
    title: "General renovations",
    desc: "Interior and exterior work beyond the core list",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-site quotes with a firm, written price before we start.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Fully licensed and insured on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Workmanship warranty",
    desc: "Free workmanship warranty on the work we do.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "5.0 ★ rated",
    desc: "5.0 on Google — 6 reviews from NYC homeowners.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Recent work gallery — real job photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/stone-veneer.jpg", title: "Stone veneer interior wall", location: "Brooklyn, NY" },
  { img: "/img/front-steps.jpg", title: "Front steps, finished and sealed", location: "Brooklyn, NY" },
  { img: "/img/brick-staircase.jpg", title: "Brick staircase restoration", location: "Brooklyn, NY" },
  { img: "/img/paver-patio.jpg", title: "Paver patio installation", location: "Brooklyn, NY" },
  { img: "/img/stone-balustrade.jpg", title: "Stone balustrade detail", location: "Brooklyn, NY" },
  { img: "/img/brownstone.jpg", title: "Brownstone facade work", location: "Brooklyn, NY" },
  { img: "/img/interior-stairs.jpg", title: "Interior plaster & stairs", location: "Brooklyn, NY" },
  { img: "/img/fence-driveway.jpg", title: "Fence & driveway project", location: "Brooklyn, NY" },
];

/* Before / after pairs */
export interface BeforeAfterPair {
  title: string;
  desc: string;
  before: string;
  after: string;
}

export const BEFORE_AFTER: BeforeAfterPair[] = [
  {
    title: "Basement remodeling",
    desc: "An unfinished basement turned into clean, usable living space.",
    before: "/img/basement-before.jpg",
    after: "/img/basement.jpg",
  },
  {
    title: "Steps rebuilt in stone",
    desc: "Crumbling front steps torn out and rebuilt to last through NY winters.",
    before: "/img/steps-before.jpg",
    after: "/img/steps-stoops.jpg",
  },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/masonry.jpg",
    title: "Masonry & Brickwork",
    desc: "New brickwork, repairs, and stone — built straight, plumb, and to last.",
  },
  {
    img: "/img/brick-pointing.jpg",
    title: "Brick Pointing & Facade Restoration",
    desc: "Failing mortar ground out and repointed; facades brought back to life.",
  },
  {
    img: "/img/concrete.jpg",
    title: "Concrete Work",
    desc: "Driveways, sidewalks, and patios poured and finished clean.",
  },
  {
    img: "/img/waterproofing.jpg",
    title: "Waterproofing",
    desc: "Foundation and basement waterproofing that keeps water out for good.",
  },
  {
    img: "/img/steps-stoops.jpg",
    title: "Steps & Stoops",
    desc: "Brooklyn stoops and steps rebuilt in concrete or stone.",
  },
  {
    img: "/img/chimney.jpg",
    title: "Chimney Repair & Rebuild",
    desc: "From crown repairs to full chimney rebuilds, done safely.",
  },
  {
    img: "/img/kitchen-bath.jpg",
    title: "Kitchen & Bathroom Remodeling",
    desc: "Full remodels handled by one crew, start to finish.",
  },
  {
    img: "/img/basement.jpg",
    title: "Basement Remodeling",
    desc: "Unfinished basements turned into living space you'll actually use.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Cynthia Medina",
    town: "Brooklyn",
    text: "Usman is a great find! Excellent communicator and trustworthy. He explained what needed to be done, outlined when, where and what — and then did what he said he would do. He priced his work fairly and worked quickly. We will hire him and his team for future work.",
  },
  {
    name: "Noman Hussain",
    town: "Brooklyn",
    text: "I had my basement remodeled by Strong Innovative Structures, and I'm very happy with the work. The team was professional, reliable, and trustworthy throughout the entire project. The quality of the work was excellent — I would definitely recommend them.",
  },
  {
    name: "Tom T",
    town: "Brooklyn",
    text: "Usman was great. Gave me a reasonable price to repair a crack in my wall, communicated very well, and did an excellent job. Would definitely recommend and use again.",
  },
];

export const TOWNS = [
  "Park Slope",
  "Sheepshead Bay",
  "Bay Ridge",
  "Williamsburg",
  "Bedford-Stuyvesant",
  "Flatbush",
  "Bensonhurst",
  "Crown Heights",
  "Brooklyn Heights",
  "Dyker Heights",
  "Borough Park",
  "Midwood",
  "Queens",
  "Manhattan",
  "The Bronx",
  "Staten Island",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/masonry.jpg",
    from: "Free Estimate",
    title: "Masonry & Brickwork",
    desc: "New brickwork, lintels, and stone — built straight and made to outlast the building around it.",
  },
  {
    img: "/img/brick-pointing.jpg",
    from: "Free Estimate",
    title: "Brick Pointing & Facade Restoration",
    desc: "Crumbling mortar ground out and repointed with a match for your brick and your building's age.",
  },
  {
    img: "/img/concrete.jpg",
    from: "Free Estimate",
    title: "Concrete Work",
    desc: "Driveways, sidewalks, and patios — properly based, reinforced, and finished clean.",
  },
  {
    img: "/img/waterproofing.jpg",
    from: "Free Estimate",
    title: "Waterproofing",
    desc: "Foundation and basement waterproofing systems that stop water at the source.",
  },
  {
    img: "/img/steps-stoops.jpg",
    from: "Free Estimate",
    title: "Steps & Stoops",
    desc: "The classic Brooklyn stoop, rebuilt in concrete or stone — solid underfoot, sharp to look at.",
  },
  {
    img: "/img/chimney.jpg",
    from: "Free Estimate",
    title: "Chimney Repair & Rebuild",
    desc: "Crowns, flashing, brickwork, and full rebuilds — done from the roof up, safely.",
  },
  {
    img: "/img/kitchen-bath.jpg",
    from: "Free Estimate",
    title: "Kitchen & Bathroom Remodeling",
    desc: "Tiling, fixtures, and full remodels handled by one crew from demo to final walkthrough.",
  },
  {
    img: "/img/basement.jpg",
    from: "Free Estimate",
    title: "Basement Remodeling",
    desc: "Waterproofed first, then finished — living space, storage, or a rental-ready unit.",
  },
];

/* ============ HOME PAGE — real copy (Nov 2026, from supplied website copy) ============ */

export interface HomeService {
  img: string;
  title: string;
  desc: string;
}

export const HOME_SERVICES: HomeService[] = [
  {
    img: "/img/masonry.jpg",
    title: "Masonry",
    desc: "Brooklyn winters are hard on brick. Water gets into the mortar, freezes, and cracks it open. As a masonry contractor, we fix it before it spreads. We handle repointing, brownstone facade repair, stoop repair, brick and block work, stonemasonry and historic stuccos and renders. We also do masonry chimney repair, paver installation and stone retaining walls. Not sure what you need? We'll look at it and tell you straight.",
  },
  {
    img: "/img/concrete.jpg",
    title: "Concrete",
    desc: "In Brooklyn, the sidewalk in front of your house is your job to fix. Get a city violation, and you need a concrete contractor fast. We handle concrete repairs, concrete resurfacing, concrete leveling and concrete cutting. We also do concrete driveway building, stamped concrete services, retaining walls and foundation repairs. Sinking slab or cracked steps? We'll tell you what needs fixing now and what can wait.",
  },
  {
    img: "/img/construction-site.jpg",
    title: "Construction",
    desc: "Empty lots are rare in Brooklyn. When one opens up, or an old house can't be saved, you need a construction company that can build from the ground up. We do custom home building, home construction and home additions, like a new second floor or a rear extension. We work with your architect, handle the permits, and build it right. One licensed team from the first drawing to the final inspection.",
  },
  {
    img: "/img/interior-stairs.jpg",
    title: "Remodeling",
    desc: "Many Brooklyn homes have small, closed-off rooms. We open them up. As a remodeler, we do open concept renovation, wall reconfiguration and load bearing wall removal, with an engineer's plan and the right permits. We also handle basement remodeling, turning damp storage space into a playroom, office or extra bedroom. Tell us how you want the space to feel, and we'll tell you what it takes.",
  },
  {
    img: "/img/kitchen-bath.jpg",
    title: "Kitchen Remodeling",
    desc: "Brooklyn kitchens are small, so every inch counts. As a kitchen renovator, we build the storage and flow you're missing. We do custom kitchen cabinet construction for odd walls, plus kitchen cabinet installation for ready-made lines. On a budget? Kitchen cabinet door replacement gives you a new look without tearing out the boxes. We also handle granite countertop installation and granite countertop repair. Tell us what bugs you about your kitchen, and we'll show you the options.",
  },
  {
    img: "/img/house-sunroom.jpg",
    title: "Bathroom Remodeling",
    desc: "Old Brooklyn bathrooms often have cast-iron tubs that are built to last. You may not need to rip yours out. As a bathroom renovator, we do bathtub refinishing, bathtub reglazing and bathtub resurfacing, plus bathroom tile reglazing and bathroom countertop resurfacing. Ready for something new? We handle bathtub replacement, bathtub installation, bathtub repair and bathtub to walk-in shower conversion. Full bathroom remodeling is here too.",
  },
  {
    img: "/img/roofing.jpg",
    title: "Roofing",
    desc: "Most Brooklyn row houses have flat roofs, and flat roofs hold water. Water finds every small crack. Our roofing service covers roof inspection, roof repair, roof installation and roof damage repair. After nor'easters and summer storms, we handle storm damage roof repair and wind damage roof repair. We also do gutter installation, gutter repairs and gutter cleaning, because clogged gutters can send water straight to your foundation. Spot a leak? Call us before it spreads.",
  },
  {
    img: "/img/waterproofing.jpg",
    title: "Waterproofing",
    desc: "Hurricane Sandy flooded Red Hook, Gerritsen Beach and Coney Island in 2012, and heavy rain still floods basements across the borough. Our waterproofing company starts with basement waterproofing, and we begin by finding where the water gets in. Sometimes it's the gutters, sometimes cracks in the foundation, and sometimes water pushing up from below. We fix the cause, not just the stain on the wall. Wet basement? Call us before the next storm.",
  },
];

export const OWNER_STORY: string[] = [
  "Hey, my name is Usman. The owner of Strong Innovative Structures. I grew up in Bay Ridge, Brooklyn, and went to Fort Hamilton High School. I played soccer, and on weekends I helped my uncle fix stoops and brick walls around the neighborhood. That's where I first learned that good work with your hands is something to be proud of.",
  "At 19, I started working for a masonry and roofing company in Sunset Park. I stayed nine years. Worked on brownstone facades, flat roofs, concrete and full renovations. That's where I learned how the job is supposed to be done: prep the surface first, use the right mortar mix, and get the permits before work starts. My mentor used to say, \u201CThe wall doesn't lie.\u201D If a job was rushed, it showed up a few winters later.",
  "I also saw what happens when it's done wrong. Homeowners got burned by contractors who took a deposit and disappeared, skipped permits, used cheap materials, or left jobs half finished.",
  "So in 2025, I started Strong Innovative Structures to do it differently. I put the price in writing, use my own crew, and stand behind every job.",
  "I take great pride in being on every job site, working alongside my crew. You'll meet me at the estimate, and you'll see me in your home while the work is happening, not just when it's time to collect payment. I'm there to make sure you get the best possible care from the first day to the last.",
];

export interface WhyPoint {
  title: string;
  desc?: string;
}

export const WHY_CHOOSE_US: WhyPoint[] = [
  {
    title: "In-House Expert Team",
    desc: "No subcontractors, no surprises. Our own crew handles your project, so one team answers for the quality.",
  },
  {
    title: "Permits & DOB Compliance",
    desc: "We handle the permits, inspections and DOB requirements, and we know Brooklyn's building codes and rules.",
  },
  {
    title: "Local Brooklyn Knowledge",
    desc: "We know Brooklyn's old brick, soil conditions and historic district requirements.",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, itemized estimates with no hidden fees. Fair rates, without cutting corners on quality or materials.",
  },
  {
    title: "Clear Communication",
  },
];

export interface ProcessStep {
  title: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Call or Book Your Free Estimate",
    desc: "Call us or fill out the form. Usman will meet you at your home and tell you what needs fixing now and what can wait.",
  },
  {
    title: "You Get a Written, Itemized Quote",
    desc: "You get a clear price in writing, with materials, labor and timeline. No hidden fees, and no pressure to sign on the spot.",
  },
  {
    title: "Our Crew Does the Work",
    desc: "Our own crew does the job, and Usman is on site. We keep your home clean and tell you what's happening each step of the way.",
  },
  {
    title: "Final Walkthrough",
    desc: "We walk the finished job with you and fix anything that isn't right.",
  },
];

export const HOME_SERVICE_AREAS: string[] = [
  "Park Slope", "Bay Ridge", "Dyker Heights", "Bensonhurst", "Bed-Stuy",
  "Crown Heights", "Flatbush", "Ditmas Park", "Williamsburg", "Greenpoint",
  "Bushwick", "Brooklyn Heights", "Carroll Gardens", "Cobble Hill",
  "Fort Greene", "Clinton Hill", "Prospect Heights", "Sunset Park",
  "Red Hook", "Marine Park", "Mill Basin", "Sheepshead Bay", "Canarsie",
  "Gerritsen Beach",
];

export interface HomePost {
  title: string;
  excerpt: string;
}

export const HOME_POSTS: HomePost[] = [
  {
    title: "How to Choose a General Contractor in Brooklyn: 7 Questions to Ask",
    excerpt: "Licenses, insurance, permits and written estimates. Here's what to check before you hire anyone for your home.",
  },
  {
    title: "How Much Does Roof Replacement Cost in Brooklyn?",
    excerpt: "Flat roofs, row houses and brownstones all price differently. See what changes the cost and how to compare estimates.",
  },
  {
    title: "Do You Need a Permit for Home Renovations in Brooklyn?",
    excerpt: "Some jobs need a DOB permit and some don't. Find out which is which before the work starts.",
  },
];

export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need a permit for home renovations in Brooklyn?",
    a: "Often, yes. Work on walls, plumbing, gas, roofs or the building's structure usually needs a Department of Buildings (DOB) permit. Small cosmetic jobs, like swapping cabinets or painting, usually don't. We tell you what your job needs at the estimate, and we handle the permit filing for you.",
  },
  {
    q: "How much does a roof replacement cost in Brooklyn?",
    a: "It depends on the roof's size, type and condition. Flat roofs, row houses and brownstones all price differently, and drainage and access change the number too. After we inspect the roof, you get a free written, itemized estimate, so you see exactly what you're paying for.",
  },
  {
    q: "How do I know if my brick needs repointing?",
    a: "Look for crumbling or missing mortar, gaps between bricks, or water stains inside near the wall. If a key pushes easily into the joint, the mortar is failing. Repointing replaces the old mortar before water gets in and cracks the brick. We'll check it for free at your estimate.",
  },
  {
    q: "Who is responsible for fixing the sidewalk in front of my house?",
    a: "In NYC, property owners are generally responsible for the sidewalk in front of their property, including repairs after a city violation. We handle sidewalk concrete repair and replacement. If you get a notice, call us quickly, since violations come with deadlines.",
  },
  {
    q: "Can you remove a load bearing wall in my brownstone?",
    a: "Usually yes, with an engineer's plan and a DOB permit. A steel or wood beam takes over the weight the wall carried. We work with a licensed engineer, file the permit and build it. Never take out a wall without that plan, because it can damage the whole house.",
  },
  {
    q: "What's the best time of year for masonry and concrete work?",
    a: "Spring through fall. Mortar and concrete need mild weather to cure right, and freezing temperatures can ruin a fresh pour. In winter we focus on emergency repairs and indoor work. If you spot damage now, call us and we'll book your spot for spring.",
  },
  {
    q: "Can you work on my house if I live in a landmark district?",
    a: "Yes. In historic districts like Brooklyn Heights, Park Slope and Fort Greene, most exterior work needs approval from the Landmarks Preservation Commission before it starts. We help you prepare the application and match the original materials, color and style.",
  },
  {
    q: "How long does a full renovation take?",
    a: "It depends on the size of the job and the permits. Your written estimate includes a timeline, and we tell you right away if something changes along the way.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Strong Innovative Structures is a licensed and insured NYC home improvement contractor, and we give you the insurance certificates before work starts. You can also look up any contractor's license on the NYC Department of Consumer and Worker Protection website.",
  },
  {
    q: "Is the estimate really free?",
    a: "Yes. Usman visits your home, looks at the problem, takes measurements and photos, and gives you a written, itemized price. There's no charge and no pressure to sign on the spot.",
  },
];

export const HERO_PERKS: string[] = [
  "Locally owned and operated",
  "Owner on every job site",
  "Licensed and insured",
  "Quality work guaranteed",
];
