import { useEffect, useRef } from "react";

/* ---------- 1. Sticky corner brick mark: fixed, bobbing, never clickable ---------- */
export function StickyBadge() {
  return (
    <div
      className="pointer-events-none fixed bottom-24 left-4 z-50 hidden md:block md:bottom-8 md:left-8"
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="badge-bob h-14 w-14 drop-shadow-lg md:h-16 md:w-16">
        <rect x="4" y="4" width="56" height="56" rx="12" fill="#1B4332" />
        <g fill="#FAF6F0">
          <rect x="12" y="14" width="18" height="9" rx="2" />
          <rect x="34" y="14" width="18" height="9" rx="2" />
          <rect x="23" y="27" width="18" height="9" rx="2" />
          <rect x="12" y="40" width="18" height="9" rx="2" />
          <rect x="34" y="40" width="18" height="9" rx="2" />
        </g>
      </svg>
    </div>
  );
}

/* ---------- 2. Edge parallax rings: slow-drifting depth layer ---------- */
export function EdgeRings() {
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (rightRef.current) rightRef.current.style.transform = `translateY(${y * 0.22}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* right: concentric rings, peeking in from the edge */}
      <div
        ref={rightRef}
        className="pointer-events-none fixed -right-28 top-1/3 z-[60] hidden opacity-10 lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="h-[220px] w-auto">
          <g fill="none" stroke="#c8a06a" strokeWidth="4">
            <circle cx="100" cy="100" r="92" />
            <circle cx="100" cy="100" r="74" />
            <circle cx="100" cy="100" r="56" />
            <circle cx="100" cy="100" r="38" />
            <circle cx="100" cy="100" r="20" />
          </g>
          <circle cx="100" cy="100" r="6" fill="#c8a06a" />
        </svg>
      </div>
    </>
  );
}
