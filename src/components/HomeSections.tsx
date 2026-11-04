import { Link } from "react-router-dom";
import {
  BUSINESS,
  HERO_IMG,
  HERO_PERKS,
  HOME_SERVICES,
  OWNER_STORY,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  HOME_SERVICE_AREAS,
  HOME_POSTS,
} from "../data";

/* ---------- shared bits ---------- */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`reveal text-[11px] font-bold uppercase tracking-[0.3em] ${
        light ? "text-cream/60" : "text-forest"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHead({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-12">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`reveal mt-3 font-display text-3xl uppercase leading-[1.05] md:text-6xl md:leading-[1.02] ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function CallCtas({ dark = false }: { dark?: boolean }) {
  return (
    <div className="reveal mt-8 flex flex-wrap gap-4">
      <Link
        to="/contact"
        className={`flex min-h-[52px] items-center justify-center rounded-full px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
          dark
            ? "bg-cream text-ink hover:bg-white"
            : "bg-forest text-cream hover:bg-forest-deep"
        }`}
      >
        Book a free estimate
      </Link>
      <a
        href={BUSINESS.phoneHref}
        className={`flex min-h-[52px] items-center justify-center rounded-full border px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
          dark
            ? "border-cream/40 text-cream hover:bg-cream/10"
            : "border-charcoal/25 text-charcoal hover:bg-charcoal/5"
        }`}
      >
        Call {BUSINESS.phone}
      </a>
    </div>
  );
}

/* ---------- 1. hero ---------- */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={HERO_IMG}
        alt="Strong Innovative Structures crew at work in Brooklyn"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-12 md:pb-28 md:pt-44">
        <div className="reveal flex flex-wrap gap-2">
          {["Google 5.0 ★", "Yelp", "BBB Accredited"].map((b) => (
            <span
              key={b}
              className="rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cream"
            >
              {b}
            </span>
          ))}
        </div>
        <h1 className="reveal mt-5 max-w-4xl font-display text-4xl uppercase leading-[1.02] text-cream md:text-7xl">
          General Contractor
          <br />
          in Brooklyn, NY
        </h1>
        <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
          Full interior and exterior home renovations. We specialize in concrete, masonry
          and roofing outside, and bathroom remodeling, kitchen remodeling and home
          additions inside. One licensed and insured local team, start to finish.
        </p>
        <ul className="reveal mt-7 grid max-w-2xl gap-2.5 sm:grid-cols-2">
          {HERO_PERKS.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm font-semibold text-cream/90">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-[11px] text-cream">
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>
        <CallCtas dark />
      </div>
    </section>
  );
}

/* ---------- 3. services ---------- */
export function ServicesGrid() {
  return (
    <section className="bg-cream py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              We serve Brooklyn
              <br />
              homeowners with
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {HOME_SERVICES.map((s) => (
            <article
              key={s.title}
              className="reveal overflow-hidden rounded-3xl border border-charcoal/10 bg-white"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="rounded-full bg-forest px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-forest-deep"
                  >
                    View our work
                  </a>
                  <a
                    href={BUSINESS.phoneHref}
                    className="rounded-full border border-charcoal/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal/5"
                  >
                    Call us
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. about owner ---------- */
export function OwnerStory() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <SectionHead eyebrow="About the owner" title="Meet the owner" />
        <div className="space-y-5">
          {OWNER_STORY.map((p, i) => (
            <p
              key={i}
              className={`reveal leading-relaxed text-charcoal/75 ${
                i === 0 ? "text-lg font-medium text-charcoal md:text-xl" : "text-base"
              }`}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="reveal mt-8">
          <Link
            to="/about"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-forest-deep"
          >
            More about us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. why choose us ---------- */
export function WhyChooseUs() {
  return (
    <section className="bg-forest py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHead
          light
          eyebrow="Why us"
          title={
            <>
              Why Brooklyn homeowners
              <br />
              choose Strong Innovative Structures
            </>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((w, i) => (
            <div
              key={w.title}
              className="reveal rounded-3xl border border-cream/15 bg-cream/5 p-6 md:p-8"
            >
              <p className="font-display text-4xl text-cream/25">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-cream">
                {w.title}
              </h3>
              {w.desc && <p className="mt-2 text-[15px] leading-relaxed text-cream/70">{w.desc}</p>}
            </div>
          ))}
        </div>
        <CallCtas dark />
      </div>
    </section>
  );
}

/* ---------- 7. process ---------- */
export function ProcessSteps() {
  return (
    <section className="bg-cream py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHead eyebrow="How it works" title="4 steps to complete your project" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.title}
              className="reveal rounded-3xl border border-charcoal/10 bg-white p-6 md:p-7"
            >
              <p className="font-display text-5xl text-forest/20">{i + 1}</p>
              <h3 className="mt-3 font-display text-lg uppercase leading-snug tracking-wide text-charcoal">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{s.desc}</p>
            </div>
          ))}
        </div>
        <CallCtas />
      </div>
    </section>
  );
}

/* ---------- 9. service areas ---------- */
export function ServiceAreasStrip() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHead eyebrow="Service areas" title="We work all over Brooklyn" />
        <div className="reveal flex flex-wrap gap-2.5">
          {HOME_SERVICE_AREAS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-charcoal/15 bg-cream px-5 py-2.5 text-sm font-semibold text-charcoal/80"
            >
              {t}
            </span>
          ))}
        </div>
        <CallCtas />
      </div>
    </section>
  );
}

/* ---------- 11. blog preview ---------- */
export function BlogPreview() {
  return (
    <section className="bg-cream py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHead eyebrow="From the blog" title="Brooklyn homeowner guides" />
        <div className="grid gap-6 md:grid-cols-3">
          {HOME_POSTS.map((p) => (
            <article
              key={p.title}
              className="reveal flex flex-col rounded-3xl border border-charcoal/10 bg-white p-6 md:p-8"
            >
              <h3 className="font-display text-xl uppercase leading-snug tracking-wide text-charcoal">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal/65">{p.excerpt}</p>
              <Link
                to="/blog"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-forest hover:underline"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
