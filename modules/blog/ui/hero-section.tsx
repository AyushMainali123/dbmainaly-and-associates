import { H1, Lead, Small } from "@/components/typography";

export default function BlogHeroSection() {
  return (
    <header className="mb-12 md:mb-24">
      <div className="max-w-3xl">
        <Small className="text-primary font-bold tracking-[0.1rem] uppercase block mb-4">
          Firm Insights
        </Small>
        <H1 className="text-on-surface mb-8">Insights &amp; Analysis</H1>
        <Lead className="text-on-surface-variant max-w-2xl">
          Critical updates and strategic perspectives on Nepal&apos;s evolving
          financial, regulatory, and corporate landscape from our senior
          advisors.
        </Lead>
      </div>
    </header>
  );
}

