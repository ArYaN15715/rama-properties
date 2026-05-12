import { CTASection } from "@/components/CTASection";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ConsultationProcess } from "@/components/ConsultationProcess";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarketInsights } from "@/components/MarketInsights";
import { Navbar } from "@/components/Navbar";
import { PropertyCategories } from "@/components/PropertyCategories";
import { Testimonials } from "@/components/Testimonials";
import { WhyRamaProperties } from "@/components/WhyRamaProperties";
import { useState } from "react";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const openConsultation = () => setConsultationOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onConsultationOpen={openConsultation} />
      <Hero onConsultationOpen={openConsultation} />
      <PropertyCategories onConsultationOpen={openConsultation} />
      <FeaturedProperties />
      <WhyRamaProperties />
      <ConsultationProcess />
      <Testimonials />
      <MarketInsights />
      <CTASection onConsultationOpen={openConsultation} />
      <Footer />
      <ConsultationModal
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <FloatingActions onConsultationOpen={openConsultation} />
    </div>
  );
}
