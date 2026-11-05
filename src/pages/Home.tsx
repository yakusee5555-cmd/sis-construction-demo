import { useCallback, useState } from "react";
import { RouteFX } from "../components/PageBits";
import {
  AreasSection,
  BlogSection,
  BmcFooter,
  BmcHeader,
  EstimateModal,
  FaqSection,
  FinalCta,
  GallerySection,
  GoogleReviews,
  HeroSection,
  MobileBar,
  OwnerSection,
  ProcessSection,
  ServicesSection,
  WhySection,
  YelpReviews,
  useBmcReveal,
} from "../components/HomeNew";
import "./HomeNew.css";

export default function Home() {
  const [modal, setModal] = useState<{ open: boolean; service: string }>({
    open: false,
    service: "",
  });
  const openEstimate = useCallback((service?: string) => {
    setModal({ open: true, service: service ?? "" });
  }, []);
  const closeEstimate = useCallback(() => {
    setModal((m) => ({ ...m, open: false }));
  }, []);
  const revealRef = useBmcReveal();

  return (
    <div ref={revealRef} className="bmc pb-[72px] md:pb-0">
      <RouteFX
        title="Strong Innovative Structures Inc. | General Contractor in Brooklyn, NY"
        description="Strong Innovative Structures Inc. — general contractor in Brooklyn, NY. Full interior and exterior home renovations: concrete, masonry, roofing, bathroom and kitchen remodeling, and home additions. Free estimates."
      />
      <BmcHeader onEstimate={() => openEstimate()} />
      <main>
        <HeroSection onEstimate={openEstimate} />
        <GoogleReviews />
        <ServicesSection onEstimate={openEstimate} />
        <OwnerSection />
        <WhySection onEstimate={openEstimate} />
        <GallerySection onEstimate={openEstimate} />
        <ProcessSection onEstimate={openEstimate} />
        <AreasSection onEstimate={openEstimate} />
        <YelpReviews />
        <BlogSection />
        <FaqSection />
        <FinalCta onEstimate={openEstimate} />
      </main>
      <BmcFooter />
      <EstimateModal
        open={modal.open}
        service={modal.service}
        onClose={closeEstimate}
        onServiceChange={(s) => setModal((m) => ({ ...m, service: s }))}
      />
      <MobileBar onEstimate={() => openEstimate()} hidden={modal.open} />
    </div>
  );
}
