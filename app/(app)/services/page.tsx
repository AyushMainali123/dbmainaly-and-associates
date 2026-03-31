import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import IcanFaqSection from "@/modules/services/ui/ican-faq-section";
import ServicesCtaSection from "@/modules/services/ui/cta-section";
import ServicesFilterBarSection from "@/modules/services/ui/filter-bar-section";
import ServicesGridSection from "@/modules/services/ui/services-grid-section";
import ServicesHeroSection from "@/modules/services/ui/hero-section";
import SectorSpecializationSection from "@/modules/services/ui/sector-specialization-section";

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                <ServicesHeroSection />
                <ServicesFilterBarSection />
                <ServicesGridSection />
                <SectorSpecializationSection />
                <IcanFaqSection />
                <ServicesCtaSection />
            </main>
            <Footer />
        </>
    )
}