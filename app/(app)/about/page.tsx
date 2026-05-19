import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import HeroSection from "@/modules/about/ui/hero-section";
import FoundationSection from "@/modules/about/ui/foundation-section";
import LeadershipSection from "@/modules/about/ui/leadership-section";
import AccreditationsSection from "@/modules/about/ui/accreditations-section";
import { getPayloadClient } from "@/utils/payload";
import { constructMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({
    slug: "about-page",
  });
  return constructMetadata((data as any).seo);
}

export const revalidate = 60;

export default async function AboutPage() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({
    slug: "about-page",
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroSection data={data.hero} />
        <FoundationSection data={data.foundation} />
        <LeadershipSection data={data.leadership} />
        <AccreditationsSection data={data.accreditations} />
      </main>
      <Footer />
    </>
  );
}