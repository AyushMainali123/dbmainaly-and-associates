import { H2 } from "@/components/typography";
import { MdOutlineAdd } from "react-icons/md";

const DEFAULT_FAQ_ITEMS: { id?: string; question: string; answer: string }[] = [
  {
    question: "What documents are required for initial tax consultation?",
    answer:
      "Typically, we require your previous three years of financial statements, current PAN/VAT registration certificates, and details of any outstanding tax liabilities or notices from the Inland Revenue Department.",
  },
  {
    question: "Do you offer virtual consulting for international clients?",
    answer:
      "Yes, we provide secure digital consultation via Microsoft Teams and Zoom for international investors looking to navigate the Nepalese corporate landscape.",
  },
  {
    question: "How do your fees structure work?",
    answer:
      "Our fees are structured based on the complexity and volume of work. We offer both project-based fixed pricing for audits and hourly rates for advisory services.",
  },
  {
    question: "Are you a member of any international accounting networks?",
    answer:
      "We are a proud member of ICAN (The Institute of Chartered Accountants of Nepal) and maintain strong affiliations with global financial networks to ensure international compliance standards.",
  },
];

interface ContactFAQSectionProps {
  data?: {
    title?: string | null;
    items?:
      | {
          id?: string | null;
          question?: string | null;
          answer?: string | null;
        }[]
      | null;
  };
}

export default function ContactFAQSection({ data }: ContactFAQSectionProps) {
  const fromCms =
    data?.items?.filter(
      (row): row is { id?: string | null; question: string; answer: string } =>
        Boolean(row?.question && row?.answer),
    ) ?? [];
  const items = fromCms.length > 0 ? fromCms : DEFAULT_FAQ_ITEMS;

  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <H2 className="text-on-surface text-center mb-12 md:mb-16">
            {data?.title ?? "Frequently Asked Questions"}
          </H2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <details
                key={item.id ?? `faq-${index}`}
                className="group bg-surface-container-lowest p-6 md:p-8 rounded-lg shadow-sm border border-outline-variant/10"
              >
                <summary className="flex justify-between items-center w-full text-left cursor-pointer list-none">
                  <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">
                    {item.question}
                  </span>
                  <span className="text-primary transition-transform group-open:rotate-45">
                    <MdOutlineAdd />
                  </span>
                </summary>
                <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base border-t border-outline-variant/10 pt-6">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
