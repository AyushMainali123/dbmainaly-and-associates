import { Button } from "@/components/button";
import { H1, Lead, Small } from "@/components/typography";
import { Media } from "@/payload-types";

interface HeroSectionProps {
  data?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
    primaryButton?: { text?: string | null; href?: string | null } | null;
    secondaryButton?: { text?: string | null; href?: string | null } | null;
    backgroundImage?: number | Media | null;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
    const bgImageUrl = data?.backgroundImage && typeof data.backgroundImage === 'object' && data.backgroundImage.url
        ? data.backgroundImage.url 
        : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

    return (
        <section className="relative bg-linear-to-br from-primary to-primary-container overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center py-20 md:py-0">
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: `url('${bgImageUrl}')` }}
                ></div>
            </div>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                <div className="md:col-span-8">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-lowest/10 rounded-full border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                        <Small className="text-white tracking-[0.2em] font-bold uppercase">{data?.badge || "Member of ICAN Nepal"}</Small>
                    </div>
                    <H1 className="text-white mb-8">
                        {data?.title || "Professional Financial Excellence."}
                    </H1>
                    <Lead className="text-primary-fixed mb-10 opacity-90 max-w-xl">
                        {data?.description || "Navigating the complexities of Nepalese corporate law and global financial standards with architectural precision and unwavering integrity."}
                    </Lead>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button href={data?.primaryButton?.href || "/services"} variant="surface" size="lg" className="w-full sm:w-auto">{data?.primaryButton?.text || "Explore Advisory"}</Button>
                        <Button href={data?.secondaryButton?.href || "/about"} variant="outline" size="lg" className="w-full sm:w-auto">{data?.secondaryButton?.text || "Our Specializations"}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}