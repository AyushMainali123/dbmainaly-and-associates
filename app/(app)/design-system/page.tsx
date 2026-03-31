import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import TypographyFoundationsSection from "@/modules/design-system/ui/typography-foundations-section";

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <TypographyFoundationsSection />
      <Footer />
    </>
  );
}
