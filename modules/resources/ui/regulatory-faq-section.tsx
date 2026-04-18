import { H2, H4, P } from "@/components/typography";
import { ResourcePage } from "@/payload-types";
import { MdOutlineExpandMore } from "react-icons/md";

export default function RegulatoryFaqSection({
  data,
}: {
  data: ResourcePage["faqsSection"];
}) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <H2 className="text-on-surface mb-4">{data?.title || "Regulatory FAQs"}</H2>
          <P className="text-on-surface-variant mb-0">
            {data?.description || "Expert answers to common queries regarding Nepal's taxation and accounting standards."}
          </P>
        </div>
        <div className="space-y-6">
          {data?.questions?.map((item, index) => (
            <details
              key={item.id}
              className="border-b border-outline-variant/30 pb-6 group cursor-pointer list-none"
              open={index === 0}
            >
              <summary className="flex justify-between items-center group-hover:text-primary transition-colors pr-8">
                <H4 className="mb-0 pr-4">{item.question}</H4>
                <span className="transition-transform group-open:rotate-180">
                  <MdOutlineExpandMore className="text-3xl" />
                </span>
              </summary>
              <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base bg-surface-container-low p-6 rounded-lg">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

