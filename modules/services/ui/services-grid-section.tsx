import { H2, H3, H4, Lead, P, Small } from "@/components/typography";

export default function ServicesGridSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div
            id="audit-assurance"
            className="group bg-surface-container-lowest p-8 md:p-10 flex flex-col h-full border border-outline-variant/15 hover:shadow-[0_20px_40px_rgba(0,35,111,0.06)] transition-all duration-300 rounded-xl"
          >
            <div className="mb-6 md:mb-8">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                account_balance
              </span>
            </div>
            <H3 className="text-on-surface mb-4">Audit &amp; Assurance</H3>
            <P className="text-on-surface-variant mb-8 grow">
              Independent verification services that build investor trust and
              ensure regulatory compliance through meticulous analysis.
            </P>
            <ul className="space-y-4 mb-10 text-sm font-medium text-on-surface-variant">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Statutory Audit
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Internal Control Review
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Forensic Auditing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Risk Management
              </li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all"
              href="#audit-assurance"
            >
              LEARN MORE
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>

          <div
            id="corporate-law"
            className="group bg-surface-container-lowest p-8 md:p-10 flex flex-col h-full border border-outline-variant/15 hover:shadow-[0_20px_40px_rgba(0,35,111,0.06)] transition-all duration-300 rounded-xl"
          >
            <div className="mb-6 md:mb-8">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                gavel
              </span>
            </div>
            <H3 className="text-on-surface mb-4">Corporate Law</H3>
            <P className="text-on-surface-variant mb-8 grow">
              Expert guidance on company formation, compliance filings, and
              complex legal structuring.
            </P>
            <ul className="space-y-4 mb-10 text-sm font-medium text-on-surface-variant">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Company Incorporation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                M&amp;A Legal Support
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Compliance Filings
              </li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all"
              href="#corporate-law"
            >
              LEARN MORE
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>

          <div
            id="management-consulting"
            className="group bg-surface-container-lowest p-8 md:p-10 flex flex-col h-full border border-outline-variant/15 hover:shadow-[0_20px_40px_rgba(0,35,111,0.06)] transition-all duration-300 rounded-xl"
          >
            <div className="mb-6 md:mb-8">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                query_stats
              </span>
            </div>
            <H3 className="text-on-surface mb-4">Management Consulting</H3>
            <P className="text-on-surface-variant mb-8 grow">
              Transformational strategies to scale your operations and improve
              organizational efficiency.
            </P>
            <ul className="space-y-4 mb-10 text-sm font-medium text-on-surface-variant">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Operational Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Financial Restructuring
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Performance Improvement
              </li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all"
              href="#management-consulting"
            >
              LEARN MORE
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>

          <div
            id="tax-advisory"
            className="group bg-surface-container-lowest p-8 md:p-10 flex flex-col h-full border border-outline-variant/15 hover:shadow-[0_20px_40px_rgba(0,35,111,0.06)] transition-all duration-300 rounded-xl"
          >
            <div className="mb-6 md:mb-8">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                payments
              </span>
            </div>
            <H3 className="text-on-surface mb-4">Tax Advisory</H3>
            <P className="text-on-surface-variant mb-8 grow">
              Optimizing tax strategies within the complex landscape of Nepalese
              VAT, Income Tax, and Customs duties.
            </P>
            <ul className="space-y-4 mb-10 text-sm font-medium text-on-surface-variant">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Corporate Tax Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                VAT &amp; Indirect Tax
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                Tax Litigation Support
              </li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all"
              href="#tax-advisory"
            >
              LEARN MORE
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

