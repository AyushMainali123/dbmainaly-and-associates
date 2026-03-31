import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import HeroSection from "@/modules/about/ui/hero-section";
import FoundationSection from "@/modules/about/ui/foundation-section";
import LeadershipSection from "@/modules/about/ui/leadership-section";
import AccreditationsSection from "@/modules/about/ui/accreditations-section";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FoundationSection />
        <LeadershipSection />
        <AccreditationsSection />
      </main>
      <Footer />
    </>
  );
}