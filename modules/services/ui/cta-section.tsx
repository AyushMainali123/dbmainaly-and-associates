import { H2, Lead } from "@/components/typography";

export default function ServicesCtaSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto bg-primary rounded-xl p-8 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <H2 className="text-white mb-6">
            Ready to align your financial strategy?
          </H2>
          <Lead className="text-primary-fixed mb-10 opacity-80 max-w-2xl mx-auto">
            Consult with our lead partners today and ensure your enterprise meets
            the highest standards of fiscal integrity.
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-surface text-primary font-bold px-10 py-4 rounded-lg hover:bg-surface-dim transition-all active:scale-95 text-sm md:text-base"
            >
              Schedule a Meeting
            </a>
            <a
              href="/about"
              className="border border-surface/30 text-white font-bold px-10 py-4 rounded-lg hover:bg-white/10 transition-all text-sm md:text-base"
            >
              View Firm Profile
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      </div>
    </section>
  );
}

