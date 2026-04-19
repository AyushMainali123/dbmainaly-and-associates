import { H2, H3, P, Small } from "@/components/typography";
import { MdOutlineFormatQuote } from "react-icons/md";

export default function OurImpactSection() {
    return (
        <section className="py-16 md:py-32 bg-surface-container-lowest">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="relative order-2 md:order-1">
                    <div className="absolute left-0 top-0 w-1 h-full bg-surface-container-high overflow-hidden rounded-full">
                        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-primary transition-all duration-1000"></div>
                    </div>
                    <div className="pl-8 md:pl-12 py-4">
                        <Small className="text-primary font-bold tracking-widest uppercase mb-6 block">Our Trajectory</Small>
                        <H2 className="mb-8">Decades of Fiscal Authority.</H2>
                        <P className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-lg">
                            Since our inception, we have been the standard-bearer for financial integrity in Nepal, guiding organizations from startup to public listing.
                        </P>
                        <div className="grid grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <H3 className="text-primary mb-1">15+</H3>
                                <Small className="text-on-surface font-bold tracking-wide uppercase">Years Excellence</Small>
                            </div>
                            <div>
                                <H3 className="text-primary mb-1">500+</H3>
                                <Small className="text-on-surface font-bold tracking-wide uppercase">Active Clients</Small>
                            </div>
                            <div>
                                <H3 className="text-primary mb-1">1.2B</H3>
                                <Small className="text-on-surface font-bold tracking-wide uppercase">Capital Managed</Small>
                            </div>
                            <div>
                                <H3 className="text-primary mb-1">100%</H3>
                                <Small className="text-on-surface font-bold tracking-wide uppercase">Compliance Rate</Small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-square order-1 md:order-2">
                    <div className="absolute inset-0 bg-primary-container rounded-2xl transform rotate-3 scale-95 opacity-10"></div>
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000" alt="Modern corporate building" />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                            <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/20">
                                <span className="text-tertiary-fixed-dim text-3xl md:text-4xl mb-4 block">
                                    <MdOutlineFormatQuote />
                                </span>
                                <p className="text-white text-base md:text-lg italic mb-6">"DB Mainaly & Associates transformed our corporate governance structure, enabling our transition to a public entity."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary shrink-0">SC</div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Sunil Chaudhary</p>
                                        <Small className="text-white/60">CEO, Apex Infrastructure</Small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}