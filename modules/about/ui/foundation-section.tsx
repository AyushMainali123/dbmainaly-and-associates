import { H2, H3, H4, P, Small } from "@/components/typography";

export default function FoundationSection() {
  return (
    <section className="py-16 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 relative z-10">
        <div className="lg:col-span-12 xl:col-span-5 max-w-2xl lg:max-w-none">
          <div className="mb-12">
            <Small className="font-bold text-primary tracking-[0.2rem] uppercase mb-4 block animate-in fade-in slide-in-from-bottom-2 duration-700">Foundation of Purpose</Small>
            <H2 className="text-on-surface mb-6 leading-tight">Architecture of a Modern Advisory</H2>
            <div className="h-1.5 w-20 bg-primary/20 rounded-full mb-8">
              <div className="h-full w-1/2 bg-primary rounded-full"></div>
            </div>
            <P className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              Our firm is built upon three pillars that define every audit, advisory, and corporate strategy we execute. We do not just process numbers; we engineer trust.
            </P>
          </div>

          <div className="relative pl-16 md:pl-20 border-l-[0.175rem] border-primary/10 space-y-16 py-4">
            <div className="relative group">
              <div className="absolute -left-[3.125rem] md:-left-[4.125rem] top-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary shadow-[0_8px_16px_rgba(0,35,111,0.2)] flex items-center justify-center text-white transition-all duration-300">
                <span className="material-symbols-outlined text-lg md:text-xl">visibility</span>
              </div>
              <div className="transition-transform duration-300 group-hover:translate-x-2">
                <H4 className="text-primary mb-3 font-bold flex items-center gap-3">
                  Our Vision
                  <span className="h-px flex-1 bg-primary/10 hidden md:block"></span>
                </H4>
                <P className="text-on-surface-variant mb-0 text-lg">To be the most trusted financial vanguard in the region, bridging Nepalese enterprise with global standards.</P>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[3.125rem] md:-left-[4.125rem] top-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-surface-container-high border-2 border-primary/30 flex items-center justify-center text-primary transition-all duration-300">
                <span className="material-symbols-outlined text-lg md:text-xl">rocket_launch</span>
              </div>
              <div className="transition-transform duration-300 group-hover:translate-x-2">
                <H4 className="text-primary mb-3 font-bold flex items-center gap-3">
                  Our Mission
                  <span className="h-px flex-1 bg-primary/10 hidden md:block"></span>
                </H4>
                <P className="text-on-surface-variant mb-0 text-lg">Delivering uncompromising integrity and analytical depth to empower sustainable corporate growth.</P>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="group bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/10 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,35,111,0.08)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl">gavel</span>
            </div>
            <H4 className="text-on-surface mb-6 font-bold">Integrity</H4>
            <P className="text-on-surface-variant leading-[1.6] mb-0">Absolute transparency in all professional engagements, ensuring compliance with the highest ethical mandates.</P>
          </div>

          <div className="group bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/10 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,35,111,0.08)] transition-all duration-500 hover:-translate-y-2 md:mt-12">
            <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
            </div>
            <H4 className="text-on-surface mb-6 font-bold">Precision</H4>
            <P className="text-on-surface-variant leading-[1.6] mb-0">Eliminating ambiguity through rigorous data analysis and methodical cross-verification protocols.</P>
          </div>

          <div className="bg-primary text-white p-10 md:p-14 rounded-3xl md:col-span-2 relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:rotate-12">
                  <span className="material-symbols-outlined text-white text-6xl">hub</span>
                </div>
              </div>
              <div>
                <H3 className="text-white mb-6">Client Stewardship</H3>
                <P className="text-blue-50 leading-relaxed mb-0 text-lg opacity-90 font-light">
                  Our relationships are viewed as decades-long partnerships, prioritizing the long-term stability of the institutions we serve over short-term metrics.
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
