import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ContactFAQSection from "@/modules/contact/ui/contact-faq-section";
import ContactFormSection from "@/modules/contact/ui/contact-form-section";
import ContactHero from "@/modules/contact/ui/contact-hero";
import { getPayloadClient } from "@/utils/payload";

export const revalidate = 60;

export default async function ContactPage() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({
    slug: "contact-page",
  });

  return (
    <>
      <Navbar />
      <main>
        <ContactHero data={data.hero} />
        <ContactFormSection
          inquiryForm={data.inquiryForm}
          office={data.office}
          mapCard={data.mapCard}
        />
        <ContactFAQSection data={data.faq} />
      </main>
      <Footer />
    </>
  );
}
