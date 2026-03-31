import { Navbar } from "@/components/navbar";
import HeroSection from "@/modules/home/ui/hero-section";
import ComplianceBadgeSection from "@/modules/home/ui/compliance-badge-section";
import ServicesSection from "@/modules/home/ui/services-section";
import OurImpactSection from "@/modules/home/ui/our-impact-section";
import LatestInsightsSection from "@/modules/home/ui/latest-insights-section";
import FinalCTASection from "@/modules/home/ui/final-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ComplianceBadgeSection />
        <ServicesSection />
        <OurImpactSection />
        <LatestInsightsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
