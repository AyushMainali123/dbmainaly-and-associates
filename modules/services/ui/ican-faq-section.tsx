import { H2, Lead, P } from "@/components/typography";
import { MdOutlineExpandMore } from "react-icons/md";

export default function IcanFaqSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <H2 className="text-on-surface mb-4">Nepal ICAN Compliance FAQ</H2>
          <P className="text-on-surface-variant mb-0">
            Essential information regarding the Institute of Chartered
            Accountants of Nepal standards.
          </P>
        </div>
        <div className="space-y-4">
          <div className="border-b border-outline-variant/30 py-6">
            <button className="flex justify-between items-center w-full text-left group">
              <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">
                What are the current mandatory NFRS standards for SMEs in Nepal?
              </span>
              <span className="text-primary shrink-0 transition-transform group-focus:rotate-180">
                <MdOutlineExpandMore />
              </span>
            </button>
            <div className="mt-4 text-on-surface-variant leading-relaxed text-sm md:text-base">
              As per ICAN guidelines, SMEs in Nepal must follow the NFRS for
              SMEs which simplifies full NFRS requirements while maintaining
              high transparency for stakeholders.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

