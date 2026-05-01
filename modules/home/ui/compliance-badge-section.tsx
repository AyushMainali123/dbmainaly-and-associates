import { Small } from "@/components/typography";
import { MdOutlineVerified } from "react-icons/md";

interface ComplianceBadgeSectionProps {
  data?: {
    badge?: string | null;
    title?: string | null;
    badges?: { text: string; id?: string | null }[] | null;
  };
}

export default function ComplianceBadgeSection({ data }: ComplianceBadgeSectionProps) {
    return (
        <div className="bg-surface-container-low py-8 md:py-12 border-y border-outline-variant/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 opacity-80">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-surface-container-lowest rounded-full flex items-center justify-center border border-outline-variant/20 shadow-sm shrink-0">
                        <span className="text-primary text-2xl md:text-3xl"><MdOutlineVerified /></span>
                    </div>
                    <div>
                        <Small className="text-primary font-bold tracking-widest uppercase mb-1 block">{data?.badge || "Regulatory Standard"}</Small>
                        <p className="text-on-surface font-semibold text-sm md:text-base">{data?.title || "Institute of Chartered Accountants of Nepal (ICAN) Licensed"}</p>
                    </div>
                </div>
                <div className="h-px w-24 bg-outline-variant/30 hidden md:block"></div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-60">
                    {data?.badges && data.badges.length > 0 ? (
                        data.badges.map((b, i) => (
                            <span key={b.id || i} className="text-base md:text-lg font-extrabold tracking-tighter">{b.text}</span>
                        ))
                    ) : (
                        <>
                            <span className="text-base md:text-lg font-extrabold tracking-tighter">FIN-COMPLY</span>
                            <span className="text-base md:text-lg font-extrabold tracking-tighter">TAX-NEPAL</span>
                            <span className="text-base md:text-lg font-extrabold tracking-tighter">AUDIT-CORP</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}