import { Button } from "@/components/button";
import { H2, H3, H4, P, Small } from "@/components/typography";

export default function StatutoryFormsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 md:mb-16">
          <H2 className="text-on-surface mb-4">Statutory Forms &amp; Templates</H2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-[0_20px_40px_rgba(0,35,111,0.04)] border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/20 transition-all">
            <div>
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-primary">
                  description
                </span>
                <Small className="font-bold text-outline-variant bg-surface-container-low px-3 py-1 rounded-full uppercase tracking-widest">
                  v2.4 (2024)
                </Small>
              </div>
              <H3 className="text-on-surface mb-4">VAT Registration Package</H3>
              <P className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-2xl">
                The complete guide and application package for Value Added Tax
                registration under the Inland Revenue Department (IRD) of Nepal.
              </P>
            </div>
            <div className="mt-auto">
              <Button
                href="#"
                className="flex items-center gap-3 font-semibold group-hover:gap-5 transition-all w-full sm:w-auto justify-center"
              >
                Download Complete Package
                <span className="material-symbols-outlined">download</span>
              </Button>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-4 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:bg-surface-container-lowest transition-colors group flex flex-col h-full">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
              analytics
            </span>
            <H4 className="text-on-surface mb-3">Audit Checklists</H4>
            <P className="text-on-surface-variant text-sm mb-8 leading-relaxed">
              Comprehensive internal audit checklists for manufacturing and
              service-based entities to ensure financial health.
            </P>
            <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto text-sm md:text-base">
              Get Templates
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>

          <div className="md:col-span-12 bg-surface-container-low p-8 md:p-10 rounded-xl border border-outline-variant/10 mt-8 md:mt-0">
            <H3 className="text-on-surface mb-8">Additional Downloads</H3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  picture_as_pdf
                </span>
                <span className="font-medium text-on-surface text-sm md:text-base">
                  TDS Rate Chart 2081/82
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  picture_as_pdf
                </span>
                <span className="font-medium text-on-surface text-sm md:text-base">
                  SSF Compliance Guide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

