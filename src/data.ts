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
