import { H1, Lead, Small } from "@/components/typography";

export default function ContactHero() {
    return (
        <header className="relative overflow-hidden bg-primary-container py-20 md:py-32">
            <div className="absolute inset-0 bg-linear-to-br from-primary to-primary-container opacity-90"></div>
            <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-3xl">
                    <Small className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.1rem] text-tertiary-fixed-dim bg-white/10 rounded uppercase">Get in Touch</Small>
                    <H1 className="text-white mb-8">
                        Let's secure your financial future together
                    </H1>
                    <Lead className="text-primary-fixed max-w-2xl opacity-90">
                        Expert financial advisory and corporate legal solutions tailored for Nepal's evolving economic landscape.
                    </Lead>
                </div>
            </div>
        </header>
    );
}
