import { H2, P } from "@/components/typography";
import { ServicePage } from "@/payload-types";
import { MdOutlineExpandMore } from "react-icons/md";

export default function IcanFaqSection({
  data,
}: {
  data: ServicePage["icanFaq"];
}) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <H2 className="text-on-surface mb-4">
            {data?.title || "Nepal ICAN Compliance FAQ"}
          </H2>
          <P className="text-on-surface-variant mb-0">
            {data?.description ||
              "Essential information regarding the Institute of Chartered Accountants of Nepal standards."}
          </P>
        </div>
        <div className="space-y-4">
          {data?.faqs?.map((item, index) => (
            <details
              key={item.id}
              className="border-b border-outline-variant/30 py-6 group cursor-pointer list-none"
              open={index === 0}
            >
              <summary className="flex justify-between items-center w-full text-left group">
                <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">
                  {item.question}
                </span>
                <span className="text-primary shrink-0 transition-transform group-open:rotate-180">
                  <MdOutlineExpandMore className="text-2xl" />
                </span>
              </summary>
              <div className="mt-4 text-on-surface-variant leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

