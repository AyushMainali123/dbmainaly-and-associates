import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ResourcesHeroSection from "@/modules/resources/ui/hero-section";
import NewsletterSection from "@/modules/resources/ui/newsletter-section";
import RegulatoryFaqSection from "@/modules/resources/ui/regulatory-faq-section";
import StatutoryFormsSection from "@/modules/resources/ui/statutory-forms-section";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ResourcesHeroSection />
        <StatutoryFormsSection />
        <RegulatoryFaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
