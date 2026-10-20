import { BUSINESS, HERO_IMG } from "../data";
import { ScrollCue } from "./MotionBits";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0b100d]">
      {/* BACK LAYER — atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#18261c_0%,#0b100d_70%)]" />
      </div>

      {/* FRONT LAYER — static brownstone masonry photo */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={HERO_IMG}
          alt="Brownstone masonry work by Strong Innovative Structures in Brooklyn"
          draggable={false}
          className="h-full w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, black 50%)",
            maskImage: "linear-gradient(to bottom, transparent 20%, black 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      {/* WORDMARK — sits on top of the photo so both lines stay fully visible */}
      <div className="pointer-events-none absolute inset-x-0 top-[11%] z-10 flex justify-center px-4 md:top-[13%]">
        <h1 className="text-center font-display font-black text-[#f4efe4] leading-[0.95] tracking-tight select-none text-[clamp(2.6rem,9vw,10.5rem)] [text-shadow:0_4px_24px_rgba(0,0,0,0.85),0_2px_60px_rgba(0,0,0,0.65)]">
          Strong
          <br />
          Innovative
        </h1>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-1 flex-col justify-between px-6 md:px-12 pt-28 pb-10">
        <div className="hero-fade flex justify-end" style={{ animationDelay: "0.9s" }}>
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
                CALL ME
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
