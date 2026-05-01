import { H2, H3, Lead, P, Small } from "@/components/typography";
import { MdOutlineAccountBalance, MdOutlineArrowForward, MdOutlineGavel, MdOutlinePayments, MdOutlineQueryStats } from "react-icons/md";
import clsx from "clsx";

interface ServicesSectionProps {
  data?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
    items?: {
      icon: 'MdOutlineAccountBalance' | 'MdOutlineGavel' | 'MdOutlineQueryStats' | 'MdOutlinePayments';
      title: string;
      description: string;
      points?: { text: string; id?: string | null; }[] | null;
      buttonText: string;
      buttonLink: string;
      id?: string | null;
    }[] | null;
  };
}

const icons = {
    MdOutlineAccountBalance,
    MdOutlineGavel,
    MdOutlineQueryStats,
    MdOutlinePayments
};

export default function ServicesSection({ data }: ServicesSectionProps) {
    const items = data?.items || [];
    
    // Fallback if empty
    if (!items.length) {
        return null;
    }

    return (
        <section className="py-16 md:py-32 bg-surface">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <Small className="text-primary font-bold tracking-[0.15em] uppercase mb-4 block">{data?.badge || "Core Competencies"}</Small>
                        <H2 className="text-on-surface">{data?.title || "Strategic Financial Services"}</H2>
                    </div>
                    <Lead className="text-on-surface-variant max-w-md">
                        {data?.description || "A multidisciplinary approach to fiscal health, combining local expertise with international standards."}
                    </Lead>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {items.map((item, index) => {
                        const Icon = icons[item.icon] || MdOutlineArrowForward;
                        
                        // Apply specific classes based on index (0, 1, 2, 3) like the original static design
                        let cardClass = "group relative overflow-hidden p-8 md:p-12 rounded-xl border border-outline-variant/10 transition-all duration-500 hover:shadow-xl ";
                        let iconColor = "text-primary";
                        let titleColor = "text-on-surface";
                        let descColor = "text-on-surface-variant";
                        let linkColor = "text-primary";
                        let bgIconColor = "text-primary";

                        if (index % 4 === 0) {
                            cardClass += "md:col-span-8 bg-surface-container-lowest";
                        } else if (index % 4 === 1) {
                            cardClass += "md:col-span-4 bg-primary text-white";
                            iconColor = "text-tertiary-fixed-dim";
                            titleColor = "text-white";
                            descColor = "text-primary-fixed/80";
                            linkColor = "text-tertiary-fixed-dim";
                            bgIconColor = "text-white";
                        } else if (index % 4 === 2) {
                            cardClass += "md:col-span-6 bg-surface-container-high";
                        } else {
                            cardClass += "md:col-span-6 bg-surface-container-lowest";
                        }

                        return (
                            <div key={item.id || index} className={cardClass}>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <span className={clsx("text-3xl md:text-4xl mb-6 md:mb-8 block", iconColor)}>
                                            <Icon />
                                        </span>
                                        <H3 className={clsx("mb-4", titleColor)}>{item.title}</H3>
                                        <P className={clsx("text-base md:text-lg mb-8 max-w-lg", descColor)}>
                                            {item.description}
                                        </P>
                                    </div>
                                    <div className="mt-4">
                                        {item.points && item.points.length > 0 && (
                                            <ul className={clsx("grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 font-medium mb-10", titleColor)}>
                                                {item.points.map((pt, i) => (
                                                    <li key={pt.id || i} className="flex items-center gap-3 text-sm md:text-base">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> {pt.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <a href={item.buttonLink} className={clsx("inline-flex items-center gap-2 font-bold hover:gap-4 transition-all", linkColor)}>
                                            {item.buttonText}
                                            {index % 4 === 0 ? <Icon /> : <MdOutlineArrowForward />}
                                        </a>
                                    </div>
                                </div>
                                <div className={clsx("absolute -right-20 -bottom-20 opacity-[0.03] scale-100 md:scale-150 pointer-events-none", bgIconColor)}>
                                    <span className="text-[10rem] md:text-[20rem]">
                                        <Icon />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}