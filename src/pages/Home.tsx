import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { BeforeAfter, FullBleed, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Masonry",
  "Brick Pointing",
  "Concrete",
  "Waterproofing",
  "Steps & Stoops",
  "Chimneys",
  "Remodeling",
  "Brooklyn",
  "All 5 Boroughs",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="Strong Innovative Structures INC | Masonry, Concrete & Waterproofing — Brooklyn, NYC"
        description="Strong Innovative Structures INC — masonry, brick pointing, concrete, waterproofing, steps & stoops, chimneys, and remodeling in Brooklyn, NY. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <BeforeAfter />
      <Reviews />
      <Contact />
    </>
  );
}
