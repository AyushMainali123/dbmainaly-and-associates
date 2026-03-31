import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { H1, H2, H3, H4, Lead, P, Small } from "@/components/typography";
import ContactFAQSection from "@/modules/contact/ui/contact-faq-section";
import ContactFormSection from "@/modules/contact/ui/contact-form-section";
import ContactHero from "@/modules/contact/ui/contact-hero";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <ContactHero />
                <ContactFormSection />
                <ContactFAQSection />
            </main>
            <Footer />
        </>
    )
}