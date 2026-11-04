import { Reviews } from "../components/Sections";
import { BeforeAfter, Work } from "../components/Showcase";
import { CtaBand, Faq, RouteFX } from "../components/PageBits";
import {
  HomeHero,
  ServicesGrid,
  OwnerStory,
  WhyChooseUs,
  ProcessSteps,
  ServiceAreasStrip,
  BlogPreview,
} from "../components/HomeSections";
import { HOME_FAQS } from "../data";

export default function Home() {
  return (
    <>
      <RouteFX
        title="Strong Innovative Structures INC | General Contractor in Brooklyn, NY"
        description="Strong Innovative Structures INC — general contractor in Brooklyn, NY. Masonry, concrete, roofing, waterproofing, kitchen & bathroom remodeling, construction and home additions. Free estimates."
      />
      <HomeHero />
      <Reviews />
      <ServicesGrid />
      <OwnerStory />
      <WhyChooseUs />
      <div id="work">
        <Work />
        <BeforeAfter />
      </div>
      <ProcessSteps />
      <ServiceAreasStrip />
      <BlogPreview />
      <section className="bg-white py-12 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            FAQ
          </p>
          <h2 className="reveal mb-8 mt-3 font-display text-3xl uppercase leading-[1.05] text-charcoal md:mb-12 md:text-6xl md:leading-[1.02]">
            Questions Brooklyn
            <br />
            homeowners often ask us
          </h2>
          <Faq items={HOME_FAQS} />
        </div>
      </section>
      <CtaBand
        title="Get your free estimate from a Brooklyn general contractor"
        sub="Tell us what's going on. Usman will come look at it, give you a clear written price, and tell you what needs fixing now and what can wait. No pressure, no hidden fees."
      />
    </>
  );
}
