import { H2, H4, P, Small } from "@/components/typography";

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <Small className="font-bold text-primary tracking-[0.1rem] uppercase mb-4 block">Executive Leadership</Small>
            <H2 className="text-on-surface">Managed by Experts, <br className="hidden md:block"/>Driven by Excellence.</H2>
          </div>
          <P className="text-on-surface-variant text-lg max-w-sm mb-0">Our partners bring over 60 years of combined experience across auditing, taxation, and law.</P>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 md:mb-8 aspect-[3/4] bg-surface-container-high">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp4-WD9FlZmnLW0j81NbrT0Kq-Z1a5yCEkbZlMxIPIQQDGDMRK7i1ziJuWlrHtzOwlk9UCswgn6qDqvN8VFHxJjbWxcFtc8ayk6j42BfxnlBsDogEUqC4S6Wrj0eq3luMLWCz-3AA8bvFDR1tPaLUR8kd5YjDx8Dt7RgazcTTC2nyAka3AHNeIwHLET3OL-Za-c1k_Cox5iq7og49QzMKyqE9iq37hXlGIjxxcx9v7Oy7SqYI1uekt-RI_h9zgTwTcUAw_IcSD58c" alt="Dhruba B. Mainaly" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                <p className="text-white text-sm italic">"Precision is the cornerstone of sustainable enterprise."</p>
              </div>
            </div>
            <H4 className="text-on-surface mb-1">Dhruba B. Mainaly</H4>
            <Small className="text-primary font-bold tracking-widest uppercase mb-4 block">Senior Partner &amp; Founder</Small>
            <P className="text-on-surface-variant leading-relaxed">Fellow Chartered Accountant with 25 years of experience in statutory audits and strategic tax planning for multinational corporations.</P>
          </div>
        
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 md:mb-8 aspect-[3/4] bg-surface-container-high">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBI_CIF7sVEp2e8Wrru1sJZtn3t59Lug-g12ZK9imdAf5WczKu-hW01G3Hc55jTC9ERg4NvJr4v_VKDCAYzs-a7AQJmWPpHoF9iaHP3YixpH1BrosmnnbhC0rs4I5GB0BvfajQJfqw7IaPCdq8bFTJf-zHADsVbIApd-hU2C3QNQ_Wv_bTHPRpAp_kNck80oV1VK3iQjbRjiz7I9nLxd-fJS3WA_ljFwHrjlYUnq_rxZ1svpA2jVSo9Ki3pPXAyBztfa8Nj3aGnjQ" alt="Sunita K. Shrestha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                <p className="text-white text-sm italic">"Regulatory compliance is an opportunity for clarity."</p>
              </div>
            </div>
            <H4 className="text-on-surface mb-1">Sunita K. Shrestha</H4>
            <Small className="text-primary font-bold tracking-widest uppercase mb-4 block">Partner - Tax Advisory</Small>
            <P className="text-on-surface-variant leading-relaxed">Specializing in indirect taxation and compliance frameworks, ensuring institutional resilience in a volatile regulatory landscape.</P>
          </div>
        
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 md:mb-8 aspect-[3/4] bg-surface-container-high">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmAsukcFXtsTJ6VgOwNX0cPojXvY1ysWIrh0Qzl1Zwn85ILg27MTuXtRc-LkYEGqvwhYRyNmyBf2kuFlVaQ9EoL-hkgDak10b48Np-0DQD_by5h7nskNtCnSNAk3EaT4IizfUryTPo-GC5hdRcUH9SJeIG2Xx_2JZTnMMwHQ5Lei3DXrxYXm_LJ3Y2px8yTwk4q3DdZF1DxhZchEXyQaWURZRrBR-oLA-xkikSHlPkuggiHmn3c5diYeihdADloJYxQWyVDsDKCek" alt="Ramesh P. Adhikari" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                <p className="text-white text-sm italic">"Protecting corporate integrity through rigorous legal oversight."</p>
              </div>
            </div>
            <H4 className="text-on-surface mb-1">Ramesh P. Adhikari</H4>
            <Small className="text-primary font-bold tracking-widest uppercase mb-4 block">Head of Corporate Law</Small>
            <P className="text-on-surface-variant leading-relaxed">Advising on mergers, acquisitions, and restructuring with a focus on mitigating institutional risk and maximizing valuation.</P>
          </div>
        
        </div>
      </div>
    </section>
  );
}
