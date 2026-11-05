import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ================= demo constants (per spec — placeholders, flagged) ================= */
export const DEMO_PHONE = "999 999 9999";
export const DEMO_PHONE_HREF = "tel:9999999999";

/* ================= reveal-on-scroll ================= */
export function useBmcReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".bmc-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    els.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="bmc-eyebrow bmc-reveal">{children}</p>;
}

function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 md:mb-12 ${center ? "text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="bmc-serif bmc-reveal mt-3 text-3xl leading-[1.1] text-[#171C1B] md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className={`bmc-reveal mt-4 max-w-2xl text-base leading-relaxed text-[#171C1B]/70 ${center ? "mx-auto" : ""}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

function DemoTag({ children }: { children: React.ReactNode }) {
  return <span className="bmc-demo-tag">◐ {children}</span>;
}

function Ctas({
  onEstimate,
  light = false,
  service,
}: {
  onEstimate: (service?: string) => void;
  light?: boolean;
  service?: string;
}) {
  return (
    <div className="bmc-reveal mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onEstimate(service)}
        className="bmc-btn bmc-btn-primary"
      >
        Book a free estimate
      </button>
      <a href={DEMO_PHONE_HREF} className={`bmc-btn ${light ? "bmc-btn-ghost-light" : "bmc-btn-ghost"}`}>
        Call us — {DEMO_PHONE}
      </a>
    </div>
  );
}

/* ================= header ================= */
export function BmcMark({ light = false }: { light?: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
      <rect x="2" y="2" width="36" height="36" rx="6" fill={light ? "#F4EFE7" : "#171C1B"} />
      <g stroke={light ? "#AE593B" : "#D2A44C"} strokeWidth="2.4" strokeLinecap="round">
        <path d="M11 14h18" />
        <path d="M11 20h12" />
        <path d="M11 26h18" />
        <path d="M23 20h6" />
      </g>
      <rect x="11" y="30" width="18" height="3" rx="1.5" fill="#AE593B" />
    </svg>
  );
}

export function BmcHeader({ onEstimate }: { onEstimate: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[#171C1B]/10 bg-[#F4EFE7]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Strong Innovative Structures Inc. — home">
          <BmcMark />
          <span className="min-w-0 leading-tight">
            <span className="bmc-serif block text-[15px] leading-[1.15] text-[#171C1B] md:text-lg">
              Strong Innovative Structures
            </span>
            <span className="mt-0.5 hidden text-[10px] font-bold uppercase tracking-[0.24em] text-[#AE593B] sm:block">
              Inc. · Brooklyn, NY
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#171C1B]/75 transition-colors hover:text-[#AE593B]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={DEMO_PHONE_HREF}
            className="bmc-btn bmc-btn-primary !min-h-[44px] !px-5 !py-2.5 md:!px-6"
          >
            <span className="md:hidden">Call</span>
            <span className="hidden md:inline">Call {DEMO_PHONE}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#171C1B]/20 text-[#171C1B] lg:hidden"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="bmc-fade-in border-t border-[#171C1B]/10 bg-[#F4EFE7] px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-[#171C1B] hover:bg-[#171C1B]/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onEstimate();
                }}
                className="bmc-btn bmc-btn-primary mt-3 w-full"
              >
                Book a free estimate
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ================= hero ================= */
const HERO_TRUST = [
  "Locally owned and operated",
  "Owner on every job site",
  "Licensed and insured",
  "Quality work guaranteed",
];

export function HeroSection({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#171C1B]">
      <img
        src="/img/bmc-hero.webp"
        alt="A row of historic brownstone townhouses with stoops on a tree-lined Brooklyn street"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171C1B]/90 via-[#171C1B]/65 to-[#171C1B]/30" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D2A44C]">
          Strong Innovative Structures
        </p>
        <h1 className="bmc-serif mt-4 max-w-3xl text-4xl leading-[1.05] text-[#F4EFE7] md:text-6xl">
          General Contractor in Brooklyn NY
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F4EFE7]/85 md:text-lg">
          Full interior and exterior home renovations. We specialize in concrete, masonry and
          roofing outside, and bathroom remodeling, kitchen remodeling and home additions inside.
          One licensed and insured local team, start to finish.
        </p>
        <ul className="mt-7 grid max-w-2xl gap-2.5 sm:grid-cols-2">
          {HERO_TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2.5 text-sm font-semibold text-[#F4EFE7]/90">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#AE593B] text-[11px] text-white">
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => onEstimate()} className="bmc-btn bmc-btn-primary">
            Book a free estimate
          </button>
          <a href={DEMO_PHONE_HREF} className="bmc-btn bmc-btn-ghost-light">
            Call us — {DEMO_PHONE}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F4EFE7]">
            ★★★★★ Google
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F4EFE7]">
            ★★★★★ Yelp
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F4EFE7]">
            BBB Accredited Business
          </span>
          <DemoTag>Demo placeholders — confirm profiles &amp; accreditation before launch</DemoTag>
        </div>
      </div>
    </section>
  );
}

/* ================= reviews ================= */
interface SampleReview {
  quote: string;
  who: string;
}

const GOOGLE_SAMPLES: SampleReview[] = [
  {
    quote: "They rebuilt our front stoop and repointed the brick — it looks like it was always there. Usman was on site every day.",
    who: "Homeowner · Park Slope",
  },
  {
    quote: "Clear written price before they started, no surprises after. The crew kept the house clean and finished on the timeline they gave us.",
    who: "Homeowner · Bay Ridge",
  },
  {
    quote: "Our basement stayed dry through the first big storm after the waterproofing. Straightforward people, easy to reach, honest about what could wait.",
    who: "Homeowner · Flatbush",
  },
];

const YELP_SAMPLES: SampleReview[] = [
  {
    quote: "Small kitchen, big difference. They found storage we didn't know we had and the cabinets fit our odd walls perfectly.",
    who: "Homeowner · Williamsburg",
  },
  {
    quote: "Flat roof was leaking for two winters. They found the source, fixed it, and the gutters finally drain away from the house.",
    who: "Homeowner · Crown Heights",
  },
  {
    quote: "Opened up our closed-off living room and took out the wall properly, permits and engineer included. The place feels twice as big.",
    who: "Homeowner · Bed-Stuy",
  },
];

function ReviewCard({ r, tag }: { r: SampleReview; tag: string }) {
  return (
    <article className="bmc-card flex flex-col p-6 md:p-7">
      <p className="text-lg leading-snug text-[#D2A44C]" aria-hidden="true">
        ★★★★★
      </p>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-[#171C1B]/80">
        “{r.quote}”
      </blockquote>
      <p className="mt-4 text-sm font-bold text-[#171C1B]">{r.who}</p>
      <p className="mt-3">
        <DemoTag>{tag}</DemoTag>
      </p>
    </article>
  );
}

export function GoogleReviews() {
  return (
    <section className="bg-[#F4EFE7] py-12 md:py-20" aria-labelledby="google-reviews-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Reviews"
          title={<span id="google-reviews-h">Google Reviews</span>}
          sub="What Brooklyn homeowners say about working with us. Sample cards below show the layout — connect the real Google profile before launch."
        />
        <div className="bmc-scroll-row bmc-reveal">
          {GOOGLE_SAMPLES.map((r) => (
            <ReviewCard key={r.quote.slice(0, 24)} r={r} tag="Sample review — demo only" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= services ================= */
export interface BmcService {
  title: string;
  cat: "Exterior" | "Interior";
  img: string;
  desc: string;
}

export const BMC_SERVICES: BmcService[] = [
  {
    title: "Masonry",
    cat: "Exterior",
    img: "/img/masonry.jpg",
    desc: "Brooklyn winters are hard on brick. Water gets into the mortar, freezes, and cracks it open. As a masonry contractor, we fix it before it spreads. We handle repointing, brownstone facade repair, stoop repair, brick and block work, stonemasonry and historic stuccos and renders. We also do masonry chimney repair, paver installation and stone retaining walls. Not sure what you need? We'll look at it and tell you straight.",
  },
  {
    title: "Concrete",
    cat: "Exterior",
    img: "/img/concrete.jpg",
    desc: "In Brooklyn, the sidewalk in front of your house is your job to fix. Get a city violation, and you need a concrete contractor fast. We handle concrete repairs, concrete resurfacing, concrete leveling and concrete cutting. We also do concrete driveway building, stamped concrete services, retaining walls and foundation repairs. Sinking slab or cracked steps? We'll tell you what needs fixing now and what can wait.",
  },
  {
    title: "Construction",
    cat: "Exterior",
    img: "/img/construction-site.jpg",
    desc: "Empty lots are rare in Brooklyn. When one opens up, or an old house can't be saved, you need a construction company that can build from the ground up. We do custom home building, home construction and home additions, like a new second floor or a rear extension. We work with your architect, handle the permits, and build it right. One licensed team from the first drawing to the final inspection.",
  },
  {
    title: "Remodeling",
    cat: "Interior",
    img: "/img/interior-stairs.jpg",
    desc: "Many Brooklyn homes have small, closed-off rooms. We open them up. As a remodeler, we do open concept renovation, wall reconfiguration and load bearing wall removal, with an engineer's plan and the right permits. We also handle basement remodeling, turning damp storage space into a playroom, office or extra bedroom. Tell us how you want the space to feel, and we'll tell you what it takes.",
  },
  {
    title: "Kitchen Remodeling",
    cat: "Interior",
    img: "/img/kitchen-bath.jpg",
    desc: "Brooklyn kitchens are small, so every inch counts. As a kitchen renovator, we build the storage and flow you're missing. We do custom kitchen cabinet construction for odd walls, plus kitchen cabinet installation for ready-made lines. On a budget? Kitchen cabinet door replacement gives you a new look without tearing out the boxes. We also handle granite countertop installation and granite countertop repair. Tell us what bugs you about your kitchen, and we'll show you the options.",
  },
  {
    title: "Bathroom Remodeling",
    cat: "Interior",
    img: "/img/house-sunroom.jpg",
    desc: "Old Brooklyn bathrooms often have cast-iron tubs that are built to last. You may not need to rip yours out. As a bathroom renovator, we do bathtub refinishing, bathtub reglazing and bathtub resurfacing, plus bathroom tile reglazing and bathroom countertop resurfacing. Ready for something new? We handle bathtub replacement, bathtub installation, bathtub repair and bathtub to walk-in shower conversion. Full bathroom remodeling is here too.",
  },
  {
    title: "Roofing",
    cat: "Exterior",
    img: "/img/roofing.jpg",
    desc: "Most Brooklyn row houses have flat roofs, and flat roofs hold water. Water finds every small crack. Our roofing service covers roof inspection, roof repair, roof installation and roof damage repair. After nor'easters and summer storms, we handle storm damage roof repair and wind damage roof repair. We also do gutter installation, gutter repairs and gutter cleaning, because clogged gutters can send water straight to your foundation. Spot a leak? Call us before it spreads.",
  },
  {
    title: "Waterproofing",
    cat: "Exterior",
    img: "/img/waterproofing.jpg",
    desc: "Hurricane Sandy flooded Red Hook, Gerritsen Beach and Coney Island in 2012, and heavy rain still floods basements across the borough. Our waterproofing company starts with basement waterproofing, and we begin by finding where the water gets in. Sometimes it's the gutters, sometimes cracks in the foundation, and sometimes water pushing up from below. We fix the cause, not just the stain on the wall. Wet basement? Call us before the next storm.",
  },
];

function ServiceActions({
  s,
  onEstimate,
}: {
  s: BmcService;
  onEstimate: (service?: string) => void;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      <a
        href="#projects"
        className="bmc-btn !min-h-[46px] !px-6 !py-2.5 !text-[0.72rem] bmc-btn-primary"
      >
        View our work
      </a>
      <a
        href={DEMO_PHONE_HREF}
        className="bmc-btn bmc-btn-ghost !min-h-[46px] !px-6 !py-2.5 !text-[0.72rem]"
      >
        Call us
      </a>
      <button
        type="button"
        onClick={() => onEstimate(s.title)}
        className="bmc-btn !min-h-[46px] !px-6 !py-2.5 !text-[0.72rem] border-[1.5px] border-[#AE593B] text-[#AE593B] hover:bg-[#AE593B] hover:text-white"
      >
        Book a free {s.title.toLowerCase()} estimate
      </button>
    </div>
  );
}

export function ServicesSection({ onEstimate }: { onEstimate: (service?: string) => void }) {
  const [panel, setPanel] = useState(BMC_SERVICES[0].title);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const [tab, setTab] = useState<"Exterior" | "Interior">("Exterior");
  const current = BMC_SERVICES.find((s) => s.title === panel) ?? BMC_SERVICES[0];
  const shown = BMC_SERVICES.filter((s) => s.cat === tab);

  return (
    <section id="services" className="bg-white py-12 md:py-20" aria-labelledby="services-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Services"
          title={<span id="services-h">We serve Brooklyn homeowners with</span>}
          sub="Pick a service to see what it covers. One team, one written price, Usman on site."
        />

        {/* desktop: selector + detail panel */}
        <div className="bmc-reveal hidden gap-8 lg:grid lg:grid-cols-[340px_1fr]">
          <div className="space-y-2" role="tablist" aria-label="Services">
            {BMC_SERVICES.map((s) => {
              const isActive = s.title === panel;
              return (
                <button
                  key={s.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setPanel(s.title)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors ${
                    isActive
                      ? "border-[#AE593B] bg-[#AE593B] text-white"
                      : "border-[#171C1B]/12 bg-[#F4EFE7] text-[#171C1B] hover:border-[#AE593B]/60"
                  }`}
                >
                  <span>
                    <span className="block font-serif text-lg leading-tight" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
                      {s.title}
                    </span>
                    <span className={`mt-0.5 block text-[11px] font-bold uppercase tracking-[0.18em] ${isActive ? "text-white/70" : "text-[#AE593B]"}`}>
                      {s.cat}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-lg">{isActive ? "→" : "›"}</span>
                </button>
              );
            })}
          </div>
          <article className="bmc-card overflow-hidden" key={current.title}>
            <div className="aspect-[16/8] overflow-hidden">
              <img src={current.img} alt={`${current.title} work in Brooklyn`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-7 md:p-9">
              <p className="bmc-eyebrow">{current.cat}</p>
              <h3 className="bmc-serif mt-2 text-2xl text-[#171C1B] md:text-3xl">{current.title}</h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#171C1B]/75">{current.desc}</p>
              <ServiceActions s={current} onEstimate={onEstimate} />
            </div>
          </article>
        </div>

        {/* mobile: tabs + accordion rows */}
        <div className="lg:hidden">
          <div className="bmc-reveal mb-4 flex rounded-full border border-[#171C1B]/15 bg-[#F4EFE7] p-1" role="tablist" aria-label="Service type">
            {(["Exterior", "Interior"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`flex-1 rounded-full py-3 text-sm font-bold uppercase tracking-[0.14em] transition-colors ${
                  tab === t ? "bg-[#171C1B] text-[#F4EFE7]" : "text-[#171C1B]/60"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {shown.map((s) => {
              const isOpen = openRow === s.title;
              return (
                <div key={s.title} className="bmc-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenRow(isOpen ? null : s.title)}
                    aria-expanded={isOpen}
                    className="flex min-h-[60px] w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="bmc-serif text-xl text-[#171C1B]">{s.title}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#AE593B] text-lg text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div className={`bmc-expand ${isOpen ? "open" : ""}`}>
                    <div>
                      <div className="px-5 pb-6">
                        <img src={s.img} alt={`${s.title} work in Brooklyn`} loading="lazy" className="mb-4 aspect-[16/9] w-full rounded-xl object-cover" />
                        <p className="text-[15px] leading-relaxed text-[#171C1B]/75">{s.desc}</p>
                        <ServiceActions s={s} onEstimate={onEstimate} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= owner ================= */
const OWNER_STORY = [
  "Hey, my name is Usman, and I'm the owner of Strong Innovative Structures. I grew up in Bay Ridge, Brooklyn, and went to Fort Hamilton High School. I played soccer, and on weekends I helped my uncle fix stoops and brick walls around the neighborhood. That's where I first learned that good work with your hands is something to be proud of.",
  "At 19, I started working for a masonry and roofing company in Sunset Park. I stayed nine years and worked on brownstone facades, flat roofs, concrete and full renovations. That's where I learned how the job is supposed to be done: prep the surface first, use the right mortar mix, and get the permits before work starts. My mentor used to say, 'The wall doesn't lie.' If a job was rushed, it showed up a few winters later.",
  "I also saw what happens when it's done wrong. Homeowners got burned by contractors who took a deposit and disappeared, skipped permits, used cheap materials, or left jobs half finished.",
  "So in 2025, I started Strong Innovative Structures to do it differently. I put the price in writing, use my own crew, and stand behind every job.",
  "I take great pride in being on every job site, working alongside my crew. You'll meet me at the estimate, and you'll see me in your home while the work is happening, not just when it's time to collect payment. I'm there to make sure you get the best possible care from the first day to the last.",
];

export function OwnerSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="about" className="bg-[#F4EFE7] py-12 md:py-20" aria-labelledby="about-h">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[380px_1fr] lg:gap-16">
        <div className="bmc-reveal">
          <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#CBB9A3] bg-white p-8 text-center">
            <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
              <rect x="6" y="6" width="60" height="60" rx="10" fill="#F4EFE7" stroke="#CBB9A3" strokeWidth="2" />
              <g stroke="#AE593B" strokeWidth="3" strokeLinecap="round">
                <path d="M20 26h32" />
                <path d="M20 36h22" />
                <path d="M20 46h32" />
                <path d="M42 36h10" />
              </g>
              <rect x="20" y="54" width="32" height="4" rx="2" fill="#D2A44C" />
            </svg>
            <p className="bmc-serif mt-5 text-xl text-[#171C1B]">Add owner photo</p>
            <p className="mt-2 text-sm leading-relaxed text-[#171C1B]/60">
              Usman, owner — Bay Ridge born and raised. Drop in a real photo here before launch.
            </p>
          </div>
        </div>
        <div>
          <SectionHead eyebrow="About" title={<span id="about-h">Meet the owner</span>} />
          <p className="bmc-reveal text-lg leading-relaxed text-[#171C1B]/85">{OWNER_STORY[0]}</p>
          <div className={`bmc-expand ${expanded ? "open" : ""}`}>
            <div>
              <div className="space-y-4 pt-4">
                {OWNER_STORY.slice(1).map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-[#171C1B]/75">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="bmc-btn bmc-btn-ghost mt-7"
          >
            {expanded ? "Show less" : "More about us"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= why choose us ================= */
const WHY_ITEMS = [
  {
    icon: "👷",
    title: "In-House Expert Team",
    desc: "No subcontractors, no surprises. Our own crew handles your project, so one team answers for the quality.",
  },
  {
    icon: "📋",
    title: "Permits & DOB Compliance",
    desc: "We handle the permits, inspections and DOB requirements, and we know Brooklyn's building codes and rules.",
  },
  {
    icon: "📍",
    title: "Local Brooklyn Knowledge",
    desc: "We know Brooklyn's old brick, soil conditions and historic district requirements.",
  },
  {
    icon: "💲",
    title: "Transparent Pricing",
    desc: "Clear, itemized estimates with no hidden fees. Fair rates, without cutting corners on quality or materials.",
  },
  {
    icon: "💬",
    title: "Clear communication",
    desc: "You always know what's happening, when, and what it costs — from the first estimate to the final walkthrough.",
  },
];

export function WhySection({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section className="bg-[#171C1B] py-12 md:py-20" aria-labelledby="why-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-8 md:mb-12">
          <p className="bmc-eyebrow bmc-reveal !text-[#D2A44C]">Why us</p>
          <h2 id="why-h" className="bmc-serif bmc-reveal mt-3 text-3xl leading-[1.1] text-[#F4EFE7] md:text-5xl">
            Why Brooklyn Homeowners Choose Strong Innovative Structures
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_ITEMS.map((w) => (
            <div key={w.title} className="bmc-reveal rounded-3xl border border-white/12 bg-white/[0.04] p-6">
              <p className="text-3xl" aria-hidden="true">
                {w.icon}
              </p>
              <h3 className="bmc-serif mt-4 text-lg leading-snug text-[#F4EFE7]">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F4EFE7]/70">{w.desc}</p>
            </div>
          ))}
        </div>
        <Ctas onEstimate={onEstimate} light />
      </div>
    </section>
  );
}

/* ================= gallery (before / after) ================= */
const GALLERY_PROJECTS = [
  {
    name: "Stoop & facade restoration",
    before: "/img/bmc-before-stoop.webp",
    after: "/img/bmc-after-stoop.webp",
    beforeAlt: "Weathered brownstone stoop and brick facade before restoration",
    afterAlt: "Restored brownstone stoop and repointed brick facade after restoration",
  },
  {
    name: "Bathroom remodel",
    before: "/img/bmc-before-bath.webp",
    after: "/img/bmc-after-bath.webp",
    beforeAlt: "Old worn bathroom with cast-iron tub before remodeling",
    afterAlt: "Newly remodeled bathroom with walk-in shower after remodeling",
  },
];

function BeforeAfter({ p }: { p: (typeof GALLERY_PROJECTS)[number] }) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (x: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((x - r.left) / r.width) * 100)));
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="bmc-ba aspect-[16/10] cursor-ew-resize"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && updateFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        role="group"
        aria-label={`${p.name} — before and after comparison`}
      >
        <img src={p.after} alt={p.afterAlt} loading="lazy" />
        <div className="bmc-ba-top" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={p.before} alt={p.beforeAlt} loading="lazy" />
        </div>
        <span className="bmc-ba-tag left-3">Before</span>
        <span className="bmc-ba-tag right-3">After</span>
        <div className="bmc-ba-handle" style={{ left: `${pos}%` }}>
          <span className="bmc-ba-knob" aria-hidden="true">
            ↔
          </span>
        </div>
      </div>
      <label className="mt-3 block">
        <span className="sr-only">Drag to compare before and after for {p.name}</span>
        <input
          type="range"
          min={4}
          max={96}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[#AE593B]"
          aria-label={`Before and after slider — ${p.name}`}
        />
      </label>
    </div>
  );
}

export function GallerySection({ onEstimate }: { onEstimate: () => void }) {
  const [active, setActive] = useState(0);
  const p = GALLERY_PROJECTS[active];
  return (
    <section id="projects" className="bg-white py-12 md:py-20" aria-labelledby="projects-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Projects"
          title={<span id="projects-h">Projects we have completed</span>}
          sub="Real Brooklyn transformations. Done Right the First Time."
        />
        <div className="bmc-reveal mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Projects">
          {GALLERY_PROJECTS.map((g, i) => (
            <button
              key={g.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                active === i ? "bg-[#171C1B] text-[#F4EFE7]" : "border border-[#171C1B]/20 text-[#171C1B]/70 hover:border-[#171C1B]"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>
        <div className="bmc-reveal">
          <BeforeAfter key={p.name} p={p} />
          <p className="mt-4">
            <DemoTag>Illustrative demo image — replace with actual project photo</DemoTag>
          </p>
        </div>
        <Ctas onEstimate={onEstimate} />
      </div>
    </section>
  );
}

/* ================= process ================= */
const PROCESS = [
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

export function ProcessSection({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section className="bg-[#F4EFE7] py-12 md:py-20" aria-labelledby="process-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="How it works" title={<span id="process-h">4 steps to complete your project</span>} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <li key={s.title} className="bmc-card bmc-reveal p-6 md:p-7">
              <p className="bmc-serif text-5xl text-[#AE593B]/25">{i + 1}</p>
              <h3 className="bmc-serif mt-3 text-xl leading-snug text-[#171C1B]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#171C1B]/70">{s.desc}</p>
            </li>
          ))}
        </ol>
        <Ctas onEstimate={onEstimate} />
      </div>
    </section>
  );
}

/* ================= service areas ================= */
const AREAS = [
  "Park Slope", "Bay Ridge", "Dyker Heights", "Bensonhurst", "Bed-Stuy",
  "Crown Heights", "Flatbush", "Ditmas Park", "Williamsburg", "Greenpoint",
  "Bushwick", "Brooklyn Heights", "Carroll Gardens", "Cobble Hill",
  "Fort Greene", "Clinton Hill", "Prospect Heights", "Sunset Park",
  "Red Hook", "Marine Park", "Mill Basin", "Sheepshead Bay", "Canarsie",
  "Gerritsen Beach",
];

export function AreasSection({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section className="bg-white py-12 md:py-20" aria-labelledby="areas-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="Service areas" title={<span id="areas-h">We work all over Brooklyn</span>} />
        <div className="bmc-reveal flex flex-wrap gap-2.5">
          {AREAS.map((a) => (
            <span key={a} className="bmc-chip">
              {a}
            </span>
          ))}
        </div>
        <Ctas onEstimate={onEstimate} />
      </div>
    </section>
  );
}

/* ================= yelp reviews ================= */
export function YelpReviews() {
  return (
    <section className="bg-[#F4EFE7] py-12 md:py-20" aria-labelledby="yelp-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Reviews"
          title={<span id="yelp-h">Yelp Reviews</span>}
          sub="Sample cards below show the layout — connect the real Yelp profile before launch."
        />
        <div className="bmc-scroll-row bmc-reveal">
          {YELP_SAMPLES.map((r) => (
            <ReviewCard key={r.quote.slice(0, 24)} r={r} tag="Sample review — demo only; replace before launch" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= blog ================= */
const BLOG_POSTS = [
  {
    img: "/img/bmc-blog-contractor.webp",
    title: "How to Choose a General Contractor in Brooklyn: 7 Questions to Ask",
    excerpt: "Licenses, insurance, permits and written estimates. Here's what to check before you hire anyone for your home.",
  },
  {
    img: "/img/bmc-blog-roof.webp",
    title: "How Much Does Roof Replacement Cost in Brooklyn?",
    excerpt: "Flat roofs, row houses and brownstones all price differently. See what changes the cost and how to compare estimates.",
  },
  {
    img: "/img/bmc-blog-permit.webp",
    title: "Do You Need a Permit for Home Renovations in Brooklyn?",
    excerpt: "Some jobs need a DOB permit and some don't. Find out which is which before the work starts.",
  },
];

export function BlogSection() {
  return (
    <section className="bg-white py-12 md:py-20" aria-labelledby="blog-h">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="From the blog" title={<span id="blog-h">Brooklyn homeowner guides</span>} />
        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <article key={p.title} className="bmc-card bmc-reveal flex flex-col overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="bmc-serif text-xl leading-snug text-[#171C1B]">{p.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#171C1B]/70">{p.excerpt}</p>
                <Link
                  to="/blog"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#AE593B] hover:underline"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
const FAQS = [
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
    a: "It depends on the size of the job and the permits. [ADD REAL RANGES: roof repair, bathroom, kitchen, addition.] Your written estimate includes a timeline, and we tell you right away if something changes along the way.",
    flag: "Placeholder kept visible — add real time ranges before publishing.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Strong Innovative Structures holds NYC Home Improvement Contractor license #[ADD VERIFIED LICENSE NUMBER] and carries liability and workers' comp insurance. We give you the insurance certificates before work starts. You can also look up any contractor's license on the NYC Department of Consumer and Worker Protection website.",
    flag: "Draft answer — owner confirmation needed before publishing. Never publish a license number that hasn't been verified.",
  },
  {
    q: "Is the estimate really free?",
    a: "Yes. Usman visits your home, looks at the problem, takes measurements and photos, and gives you a written, itemized price. There's no charge and no pressure to sign on the spot.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-[#F4EFE7] py-12 md:py-20" aria-labelledby="faq-h">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <SectionHead eyebrow="FAQ" title={<span id="faq-h">Questions Brooklyn Homeowners often Ask Us</span>} />
        <div className="bmc-reveal divide-y divide-[#171C1B]/10 rounded-3xl border border-[#171C1B]/10 bg-white">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="bmc-serif text-lg leading-snug text-[#171C1B] md:text-xl">{f.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#AE593B] text-xl text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} className={`bmc-expand ${isOpen ? "open" : ""}`}>
                  <div>
                    <div className="px-6 pb-6">
                      <p className="text-base leading-relaxed text-[#171C1B]/70">{f.a}</p>
                      {f.flag && (
                        <p className="mt-3">
                          <DemoTag>{f.flag}</DemoTag>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= final CTA ================= */
export function FinalCta({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section id="contact" className="bg-[#171C1B] py-14 md:py-24" aria-labelledby="cta-h">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <h2 id="cta-h" className="bmc-serif bmc-reveal text-3xl leading-[1.1] text-[#F4EFE7] md:text-5xl">
          Get Your Free Estimate from a Brooklyn General Contractor
        </h2>
        <p className="bmc-reveal mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#F4EFE7]/75 md:text-lg">
          Tell us what's going on. Usman will come look at it, give you a clear written price, and
          tell you what needs fixing now and what can wait. No pressure, no hidden fees.
        </p>
        <div className="bmc-reveal mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => onEstimate()} className="bmc-btn bmc-btn-primary">
            Book a free estimate
          </button>
          <a href={DEMO_PHONE_HREF} className="bmc-btn bmc-btn-ghost-light">
            Call us — {DEMO_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= footer ================= */
const FOOTER_SERVICES = [
  "Concrete", "Masonry", "Remodeling", "Kitchen remodeling", "Bathroom remodeling",
  "Construction", "Waterproofing", "Roofing",
];

export function BmcFooter() {
  return (
    <footer className="bg-[#171C1B] pb-24 pt-14 text-[#F4EFE7] md:pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <BmcMark light />
              <span className="bmc-serif text-lg leading-tight">Strong Innovative Structures Inc.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F4EFE7]/65">
              Full interior and exterior home renovations in Brooklyn — concrete, masonry and
              roofing outside, bathroom and kitchen remodeling and home additions inside. One
              licensed and insured local team, start to finish.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D2A44C]">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#home" className="text-[#F4EFE7]/75 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-[#F4EFE7]/75 hover:text-white">About us</a></li>
              <li><a href="#contact" className="text-[#F4EFE7]/75 hover:text-white">Contact us</a></li>
              <li><a href="#home" className="text-[#F4EFE7]/75 hover:text-white">Privacy policy</a></li>
              <li><Link to="/blog" className="text-[#F4EFE7]/75 hover:text-white">Blog</Link></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D2A44C]">Our services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#F4EFE7]/75 hover:text-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D2A44C]">Contact us</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#F4EFE7]/75">
              <li>
                Phone: <a href={DEMO_PHONE_HREF} className="font-semibold text-[#F4EFE7] hover:underline">{DEMO_PHONE}</a>{" "}
                <span className="text-[#D2A44C]">(confirm before launch)</span>
              </li>
              <li>Email: [Add email]</li>
              <li>Address: [Add address]</li>
              <li>Service hours: [Add service hours]</li>
            </ul>
            <div className="mt-5 flex min-h-[140px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/25 bg-white/[0.03] p-5 text-center">
              <p className="text-sm font-bold text-[#F4EFE7]/80">Google Map — placeholder</p>
              <p className="mt-1 text-xs leading-relaxed text-[#F4EFE7]/50">
                Add the business address to embed the map here.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#F4EFE7]/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Strong Innovative Structures Inc. — Brooklyn, NY</p>
          <p>Demo preview — phone, reviews, badges, license and hours pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}

/* ================= estimate modal ================= */
export function EstimateModal({
  open,
  service,
  onClose,
  onServiceChange,
}: {
  open: boolean;
  service: string;
  onClose: () => void;
  onServiceChange: (s: string) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) {
      setErrors({});
      setDone(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = "Please add your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) errs.phone = "Please add a valid phone number (10 digits).";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
  };

  return (
    <div
      className="bmc-fade-in fixed inset-0 z-50 flex items-end justify-center bg-[#171C1B]/70 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Book a free estimate"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bmc-modal-card w-full max-w-lg rounded-3xl bg-[#F4EFE7] p-6 shadow-2xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="bmc-serif text-2xl text-[#171C1B]">Book a free estimate</h2>
            <p className="mt-1 text-sm text-[#171C1B]/65">
              Tell us about the job — Usman will come look at it in person.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#171C1B]/20 text-lg text-[#171C1B] hover:bg-[#171C1B]/5"
          >
            ✕
          </button>
        </div>
        {done ? (
          <div className="mt-6 rounded-2xl border border-[#D2A44C]/50 bg-[#D2A44C]/10 p-5">
            <p className="bmc-serif text-xl text-[#171C1B]">Thanks, {name.trim().split(" ")[0]} — request noted.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#171C1B]/75">
              This demo form isn't connected to an inbox yet, so nothing was sent. Add a recipient
              email and a submission method to start receiving estimates.
            </p>
            <button type="button" onClick={onClose} className="bmc-btn bmc-btn-primary mt-5">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="est-name" className="mb-1.5 block text-sm font-bold text-[#171C1B]">
                Name *
              </label>
              <input
                id="est-name"
                className="bmc-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!errors.name}
                autoComplete="name"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm font-semibold text-[#b3261e]">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="est-phone" className="mb-1.5 block text-sm font-bold text-[#171C1B]">
                Phone *
              </label>
              <input
                id="est-phone"
                className="bmc-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={!!errors.phone}
                autoComplete="tel"
                inputMode="tel"
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="mt-1 text-sm font-semibold text-[#b3261e]">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="est-service" className="mb-1.5 block text-sm font-bold text-[#171C1B]">
                Service
              </label>
              <select
                id="est-service"
                className="bmc-input"
                value={service}
                onChange={(e) => onServiceChange(e.target.value)}
              >
                <option value="">Not sure yet — help me decide</option>
                {BMC_SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="est-details" className="mb-1.5 block text-sm font-bold text-[#171C1B]">
                Project details
              </label>
              <textarea
                id="est-details"
                className="bmc-input min-h-[100px] resize-y"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="What's going on? Where's the house, and what needs doing?"
              />
            </div>
            <button type="submit" className="bmc-btn bmc-btn-primary w-full">
              Request my free estimate
            </button>
            <p className="text-center text-xs leading-relaxed text-[#171C1B]/55">
              Demo form — not connected to an inbox yet. No information is sent anywhere.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

/* ================= mobile sticky bar ================= */
export function MobileBar({ onEstimate, hidden }: { onEstimate: () => void; hidden: boolean }) {
  if (hidden) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-[#171C1B]/10 bg-[#F4EFE7]/97 p-3 backdrop-blur md:hidden">
      <button type="button" onClick={() => onEstimate()} className="bmc-btn bmc-btn-primary flex-1 !min-h-[48px]">
        Book a free estimate
      </button>
      <a href={DEMO_PHONE_HREF} className="bmc-btn bmc-btn-ghost flex-1 !min-h-[48px]">
        Call us
      </a>
    </div>
  );
}
