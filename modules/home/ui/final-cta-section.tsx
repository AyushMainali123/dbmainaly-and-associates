import { Button } from "@/components/button";
import { H2, Lead } from "@/components/typography";

interface FinalCTASectionProps {
  data?: {
    title?: string | null;
    description?: string | null;
    primaryButton?: { text?: string | null; href?: string | null; } | null;
    secondaryButton?: { text?: string | null; href?: string | null; } | null;
  };
}

export default function FinalCTASection({ data }: FinalCTASectionProps) {
    return (
        <section className="bg-primary text-white py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <H2 className="text-white mb-8">{data?.title || "Ready to secure your financial future?"}</H2>
                <Lead className="text-primary-fixed/70 max-w-2xl mx-auto mb-12">
                    {data?.description || "Schedule a confidential consultation with our principal partners to discuss your corporate advisory or audit requirements."}
                </Lead>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                    <Button href={data?.primaryButton?.href || "/contact"} variant="secondary" size="lg" className="w-full sm:w-auto">{data?.primaryButton?.text || "Contact Principal Partner"}</Button>
                    <Button href={data?.secondaryButton?.href || "/about"} variant="outline" size="lg" className="w-full sm:w-auto">{data?.secondaryButton?.text || "Request Firm Profile"}</Button>
                </div>
            </div>
        </section>
    )
}