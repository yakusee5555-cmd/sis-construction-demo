import { Link } from "react-router-dom";
import { BUSINESS, GLASS_CARDS, REVIEWS } from "../data";
import { CtaBand, Faq, PageHero, RouteFX } from "../components/PageBits";
import { CountUp } from "../components/MotionBits";

const VALUES = [
  {
    title: "You talk to the owner",
    desc: "Owner-operated means Usman T. answers, quotes, and stands behind the work. No sales reps, no call center, no handoffs.",
  },
  {
    title: "Priced in writing",
    desc: "Free on-site estimates with a firm written number before we start. Transparent pricing — the price we quote is the price you pay.",
  },
  {
    title: "Built to outlast",
    desc: "Proper bases, matched mortar, real waterproofing — the unglamorous details that decide whether work lasts five years or fifty.",
  },
  {
    title: "Warranty on the work",
    desc: "Every job carries our free workmanship warranty. If our work fails, we come back and make it right.",
  },
];

const PROCESS = [
  { step: "01", text: "Call or send the form. You talk directly to the owner about what your home needs." },
  { step: "02", text: "Free on-site estimate. We look at the actual conditions and give you a firm written price." },
  { step: "03", text: "The work gets done — one accountable crew, honest communication the whole way through." },
  { step: "04", text: "Final walkthrough together, backed by our free workmanship warranty." },
];

export default function About() {
  return (
    <>
      <RouteFX
        title="About Strong Innovative Structures INC | Brooklyn, NY Construction & Masonry"
        description="Meet Strong Innovative Structures INC — owner-operated masonry, concrete, waterproofing, and remodeling in Brooklyn, NY. Fully licensed & insured. Free estimates."
      />
      <PageHero
        eyebrow="About us"
        title={
          <>
            Owner-operated.
            <br />
            Not a call center.
          </>
        }
        sub="Strong Innovative Structures INC is a Brooklyn construction company run by its owner, Usman T. When you call, you talk directly to the person responsible for your job."
        img="/img/concrete-alley.jpg"
      />

      {/* story */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
              Our story
            </p>
            <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
              Brick. Concrete.
              <br />
              Waterproofing. Done right.
            </h2>
          </div>
          <div className="reveal space-y-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
            <p>
              S.I.S. Construction — Strong Innovative Structures INC — handles the work
              that holds a New York home together: masonry and brickwork, brick pointing
              and facade restoration, concrete, foundation and basement waterproofing,
              steps and stoops, chimneys, and interior remodeling.
            </p>
            <p>
              The company is owner-operated. You talk directly to the owner, Usman T. —
              honest communication, transparent pricing, and no surprises between the
              quote and the finished job. That's how we've earned a 5.0 rating on Google
              from the homeowners we've worked for.
            </p>
            <p>
              As Usman puts it: &ldquo;Your home is your biggest investment — we treat it
              with the same care as our own.&rdquo; We're fully licensed and insured,
              locally owned in Brooklyn, and every job is backed by a free workmanship
              warranty.
            </p>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {[
            { n: <CountUp to={5} decimals={1} />, l: "Google rating" },
            { n: <CountUp to={5} />, l: "Boroughs served" },
            { n: <CountUp to={8} />, l: "Core services" },
            { n: <CountUp to={7} />, l: "Days a week we're open" },
          ].map((s) => (
            <div key={s.l} className="reveal text-center md:text-left">
              <p className="font-display text-4xl text-cream md:text-6xl">{s.n}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-cream/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            How we work
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Four rules. No exceptions.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="reveal rounded-3xl border border-charcoal/10 bg-white p-7 md:p-9"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-display text-sm text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal md:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/65">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="bg-forest py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
            How it works
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-5xl">
            Four steps. Zero drama.
          </h2>
          <div className="mt-8 space-y-0 md:mt-12">
            {PROCESS.map((t) => (
              <div
                key={t.step}
                className="reveal flex items-baseline gap-5 border-t border-cream/15 py-5 md:gap-10 md:py-6"
              >
                <span className="font-display text-xl text-cream/90 md:text-3xl">{t.step}</span>
                <p className="text-base text-cream/70 md:text-lg">{t.text}</p>
              </div>
            ))}
            <div className="border-t border-cream/15" />
          </div>
        </div>
      </section>

      {/* why cards reuse */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Why homeowners pick us.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {GLASS_CARDS.map((c, i) => (
              <div
                key={c.title}
                className="reveal rounded-3xl bg-ink p-6 md:p-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="font-display text-lg uppercase text-cream">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2">
            {REVIEWS.slice(0, 2).map((r) => (
              <figure key={r.name} className="rounded-3xl border border-charcoal/10 bg-white p-7">
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-3 text-base leading-relaxed text-charcoal/80">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-charcoal">
                  {r.name} <span className="font-normal text-charcoal/55">— {r.town}, NY</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Meet us at your home."
        sub={`Free on-site estimates across Brooklyn and the five boroughs. Call ${BUSINESS.phone} — you'll talk to the owner, not a sales rep.`}
      />

      {/* FAQ */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase text-charcoal md:text-4xl">
            Quick answers.
          </h2>
          <div className="mt-6">
            <Faq
              items={[
                {
                  q: "Are you licensed and insured?",
                  a: "Yes. Fully licensed and insured on every job — and happy to show you the paperwork before we start.",
                },
                {
                  q: "Do you give free estimates?",
                  a: "Always. We come out, look at the work, and give you a firm written price. No fee, no pressure.",
                },
                {
                  q: "Do you warranty your work?",
                  a: "Yes — every job carries our free workmanship warranty. If our work fails, we come back and make it right.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
