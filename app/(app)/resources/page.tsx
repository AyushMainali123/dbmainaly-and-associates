import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ResourcesHeroSection from "@/modules/resources/ui/hero-section";
import NewsletterSection from "@/modules/resources/ui/newsletter-section";
import RegulatoryFaqSection from "@/modules/resources/ui/regulatory-faq-section";
import StatutoryFormsSection from "@/modules/resources/ui/statutory-forms-section";
import { getPayloadClient } from "@/utils/payload";

export const revalidate = 60;

export default async function ResourcesPage() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({
    slug: "resource-page",
  });

  return (
    <>
      <Navbar />
      <main>
        <ResourcesHeroSection data={data.hero} />
        <StatutoryFormsSection data={data.statutoryForms} />
        <RegulatoryFaqSection data={data.faqsSection} />
        <NewsletterSection data={data.newsletter} />
      </main>
      <Footer />
    </>
  );
}
