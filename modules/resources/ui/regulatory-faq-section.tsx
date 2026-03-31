import { H2, H4, P } from "@/components/typography";

export default function RegulatoryFaqSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <H2 className="text-on-surface mb-4">Regulatory FAQs</H2>
          <P className="text-on-surface-variant mb-0">
            Expert answers to common queries regarding Nepal&apos;s taxation and
            accounting standards.
          </P>
        </div>
        <div className="space-y-6">
          <details className="border-b border-outline-variant/30 pb-6 group cursor-pointer list-none">
            <summary className="flex justify-between items-center group-hover:text-primary transition-colors pr-8">
              <H4 className="mb-0 pr-4">
                What are the current corporate tax rates for manufacturing
                industries?
              </H4>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base bg-surface-container-low p-6 rounded-lg">
              Corporate tax rates for manufacturing industries in Nepal often
              enjoy specific incentives under the Industrial Enterprises Act.
              Generally, the base rate is 20%, but exemptions apply for exports
              and geographical location.
            </div>
          </details>
          <details className="border-b border-outline-variant/30 pb-6 group cursor-pointer list-none" open>
            <summary className="flex justify-between items-center text-primary pr-8">
              <H4 className="mb-0 pr-4">
                Is NFRS compliance mandatory for all SMEs?
              </H4>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base bg-surface-container-low p-6 rounded-lg">
              Nepal Financial Reporting Standards (NFRS) implementation is
              phased. While major public entities must comply, SMEs can use
              NFRS for SMEs, which is a simplified version tailored to smaller
              reporting entities.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

