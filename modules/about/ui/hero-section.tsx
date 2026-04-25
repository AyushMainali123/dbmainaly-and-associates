import { H1, Lead, Small } from "@/components/typography";
import type { AboutPage } from "@/payload-types";
import Image from "next/image";

export default function HeroSection({ data }: { data: AboutPage["hero"] }) {
  const backgroundImageUrl = typeof data?.backgroundImage === 'object' && data.backgroundImage?.url
    ? data.backgroundImage.url
    : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative min-h-[500px] md:min-h-[716px] flex items-center overflow-hidden bg-primary py-20 md:py-0">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-linear-to-bl from-primary-container to-transparent"></div>
        <Image priority src={backgroundImageUrl} alt="Hero Background" fill className="object-cover mix-blend-overlay" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <Small className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed tracking-widest uppercase mb-6 font-bold">{data?.badge}</Small>
          <H1 className="text-white mb-8">
            {data?.title}
          </H1>
          <Lead className="text-primary-fixed mb-12 max-w-2xl font-light opacity-90">
            {data?.description}
          </Lead>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-[2px] w-12 bg-tertiary-fixed-dim hidden sm:block"></div>
            <Small className="text-primary-fixed font-semibold tracking-wide uppercase">{data?.highlightText}</Small>
          </div>
        </div>
      </div>
    </section>
  );
}
