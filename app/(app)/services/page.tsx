import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import IcanFaqSection from "@/modules/services/ui/ican-faq-section";
import ServicesCtaSection from "@/modules/services/ui/cta-section";
import ServicesGridSection from "@/modules/services/ui/services-grid-section";
import ServicesHeroSection from "@/modules/services/ui/hero-section";
import SectorSpecializationSection from "@/modules/services/ui/sector-specialization-section";
import { getPayloadClient } from "@/utils/payload";

export const revalidate = 60;


export default async function ServicesPage() {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({
        slug: "service-page",
    });

    return (
        <>
            <Navbar />
            <main>
                <ServicesHeroSection data={data.hero} />
                <ServicesGridSection data={data.servicesGrid} />
                <SectorSpecializationSection data={data.sectorSpecialization} />
                <IcanFaqSection data={data.icanFaq} />
                <ServicesCtaSection data={data.cta} />
            </main>
            <Footer />
        </>
    )
}
