import { Button } from "@/components/button";
import { H2, H3, H4, P, Small } from "@/components/typography";

export default function ContactFormSection() {
    return (
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                <div className="lg:col-span-12 xl:col-span-7 bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(0,35,111,0.04)] border border-outline-variant/10">
                    <H2 className="text-on-surface mb-2">Send us a Message</H2>
                    <P className="text-on-surface-variant mb-10">Briefly outline your requirements and our partners will contact you within 24 business hours.</P>
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Small className="font-bold text-primary uppercase tracking-wider block">Full Name</Small>
                                <input className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant text-on-surface" placeholder="John Doe" type="text" />
                            </div>
                            <div className="space-y-2">
                                <Small className="font-bold text-primary uppercase tracking-wider block">Email Address</Small>
                                <input className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant text-on-surface" placeholder="john@company.com" type="email" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Small className="font-bold text-primary uppercase tracking-wider block">Service Interest</Small>
                                <select className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 text-on-surface-variant">
                                    <option>Tax Advisory</option>
                                    <option>Audit & Assurance</option>
                                    <option>Corporate Law</option>
                                    <option>Financial Consulting</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Small className="font-bold text-primary uppercase tracking-wider block">Phone Number</Small>
                                <input className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant text-on-surface" placeholder="+977 1-XXXXXXX" type="tel" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Small className="font-bold text-primary uppercase tracking-wider block">How can we help?</Small>
                            <textarea className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant resize-none text-on-surface" placeholder="Describe your consultation needs..." rows={4}></textarea>
                        </div>
                        <Button type="submit" size="lg" className="w-full md:w-auto">Submit Inquiry</Button>
                    </form>
                </div>

                <aside className="lg:col-span-12 xl:col-span-5 space-y-8 md:space-y-12">
                    <div className="bg-surface-container p-8 md:p-10 rounded-xl">
                        <H3 className="text-on-surface mb-8 border-l-4 border-primary pl-4">Office Headquarters</H3>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                <div>
                                    <P className="font-bold text-on-surface mb-1">Physical Address</P>
                                    <P className="text-on-surface-variant leading-relaxed mb-0 whitespace-pre-line">DB Mainaly & Associates Building
                                        Level 4, Corporate Plaza
                                        New Baneshwor, Kathmandu
                                        Nepal</P>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary text-2xl">call</span>
                                <div>
                                    <P className="font-bold text-on-surface mb-1">Phone & Fax</P>
                                    <P className="text-on-surface-variant mb-0 whitespace-pre-line">+977 1 4483012
                                        +977 9851000000</P>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                                <div>
                                    <P className="font-bold text-on-surface mb-1">Electronic Mail</P>
                                    <P className="text-on-surface-variant mb-0 whitespace-pre-line">info@dbmainaly.com.np
                                        support@dbmainaly.com.np</P>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full aspect-square md:aspect-video xl:aspect-square rounded-xl overflow-hidden bg-surface-container-high group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-primary/5 z-10 p-6 md:p-12">
                            <div className="w-16 h-16 bg-primary rounded-full    flex items-center justify-center mb-4 shadow-xl">
                                <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pin_drop</span>
                            </div>
                            <H4 className="text-primary mb-2">We are here</H4>
                            <P className="text-sm text-on-secondary-container mb-0 font-medium">Centralized Hub, New Baneshwor</P>
                        </div>
                        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ca?auto=format&fit=crop&q=80&w=800" alt="New Baneshwor Map placeholder" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                </aside>
            </div>
        </section>
    );
}
