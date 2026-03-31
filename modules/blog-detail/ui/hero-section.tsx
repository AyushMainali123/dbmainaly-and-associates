import { H1, H3, Lead, P, Small } from "@/components/typography";

export default function BlogDetailHeroSection() {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-8">
        <Small className="text-white bg-primary px-3 py-1 rounded-full font-bold tracking-widest uppercase">
          Taxation
        </Small>
        <span className="text-outline-variant/50">•</span>
        <Small className="font-bold text-on-surface mb-0">
          May 20, 2024
        </Small>
        <span className="text-outline-variant/50">•</span>
        <Small className="font-bold text-on-surface mb-0 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">schedule</span> 5
          Min Read
        </Small>
      </div>

      <H1 className="text-on-surface mb-8 leading-tight">
        Understanding the 2024 Nepal Finance Act
      </H1>

      <Lead className="text-on-surface-variant max-w-3xl mb-12">
        A comprehensive breakdown of the latest legislative changes affecting
        corporate taxation, profit repatriation, and compliance requirements in
        the Nepalese market.
      </Lead>

      <div className="flex items-center gap-4 py-6 border-y border-outline-variant/20">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp4-WD9FlZmnLW0j81NbrT0Kq-Z1a5yCEkbZlMxIPIQQDGDMRK7i1ziJuWlrHtzOwlk9UCswgn6qDqvN8VFHxJjbWxcFtc8ayk6j42BfxnlBsDogEUqC4S6Wrj0eq3luMLWCz-3AA8bvFDR1tPaLUR8kd5YjDx8Dt7RgazcTTC2nyAka3AHNeIwHLET3OL-Za-c1k_Cox5iq7og49QzMKyqE9iq37hXlGIjxxcx9v7Oy7SqYI1uekt-RI_h9zgTwTcUAw_IcSD58c"
          alt="DB Mainaly"
          className="w-14 h-14 rounded-full object-cover shadow-sm bg-surface-container-high"
        />
        <div>
          <P className="font-bold text-on-surface mb-0">DB Mainaly</P>
          <Small className="text-on-surface-variant mb-0 uppercase tracking-widest font-semibold">
            Managing Partner
          </Small>
        </div>
      </div>
    </header>
  );
}

