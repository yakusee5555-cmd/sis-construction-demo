import { BUSINESS, HERO_IMG } from "../data";
import { ScrollCue } from "./MotionBits";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0b100d]">
      {/* BACK LAYER — atmosphere + giant wordmark */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#18261c_0%,#0b100d_70%)]" />
        <div className="absolute inset-0 flex items-start justify-center px-4 pt-[15vh] md:items-center md:pt-0">
          <h1 className="text-center font-display font-black text-[#f4efe4] leading-[0.95] tracking-tight select-none text-[clamp(2.2rem,9vw,11rem)] [text-shadow:0_2px_60px_rgba(0,0,0,0.65)]">
            Strong
            <br />
            Innovative
          </h1>
        </div>
      </div>

      {/* FRONT LAYER — static brownstone masonry photo overlapping the wordmark */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={HERO_IMG}
          alt="Brownstone masonry work by Strong Innovative Structures in Brooklyn"
          draggable={false}
          className="h-full w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 34%, black 66%)",
            maskImage: "linear-gradient(to bottom, transparent 34%, black 66%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-1 flex-col justify-end px-6 pb-10 pt-[36vh] md:justify-between md:px-12 md:pt-28">
        <div className="hero-fade hidden justify-end md:flex" style={{ animationDelay: "0.9s" }}>
          <p className="text-right text-[11px] md:text-xs font-bold tracking-[0.35em] text-white/95 leading-loose">
            BRICK
            <br />
            CONCRETE
            <br />
            WATERPROOFING
          </p>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p
              className="hero-fade text-center text-xs md:text-sm font-bold tracking-[0.5em] text-white lg:text-left"
              style={{ animationDelay: "1.1s" }}
            >
              STRONG INNOVATIVE STRUCTURES INC
            </p>
            <p
              className="hero-fade mt-3 text-center text-sm text-white/85 lg:text-left"
              style={{ animationDelay: "1.15s" }}
            >
              Brick • Concrete • Waterproofing • Masonry • Interior, Exterior &amp; More
              <br />
              <span className="font-semibold text-white">
                {BUSINESS.rating} ★ on Google · Fully Licensed &amp; Insured · Free Estimates
              </span>
            </p>
            <div
              className="hero-fade mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="#contact"
                className="btn-shine flex min-h-[48px] items-center justify-center rounded-full bg-[#f4efe4] px-8 py-4 text-center text-sm font-bold tracking-widest text-[#0b100d] hover:bg-white transition-colors"
              >
                FREE ESTIMATE
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="btn-shine flex min-h-[48px] items-center justify-center rounded-full border border-white/60 px-8 py-4 text-center text-sm font-bold tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                CALL NOW
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
