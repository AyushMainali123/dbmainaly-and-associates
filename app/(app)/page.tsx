import { Navbar } from "@/components/navbar";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import HeroSection from "@/modules/home/ui/hero-section";
import ComplianceBadgeSection from "@/modules/home/ui/compliance-badge-section";
import ServicesSection from "@/modules/home/ui/services-section";
import OurImpactSection from "@/modules/home/ui/our-impact-section";
import LatestInsightsSection from "@/modules/home/ui/latest-insights-section";
import FinalCTASection from "@/modules/home/ui/final-cta-section";
import { Footer } from "@/components/footer";

export default async function Home() {
  const payload = await getPayloadHMR({ config });
  const homePage = await payload.findGlobal({
    slug: "home-page" as any,
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroSection data={homePage.hero} />
        <ComplianceBadgeSection data={homePage.complianceBadge} />
        <ServicesSection data={homePage.services} />
        <OurImpactSection data={homePage.ourImpact} />
        <LatestInsightsSection data={homePage.latestInsights} />
        <FinalCTASection data={homePage.finalCta} />
      </main>
      <Footer />
    </>
  );
}
