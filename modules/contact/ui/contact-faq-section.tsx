import { H2 } from "@/components/typography";
import { MdOutlineAdd } from "react-icons/md";

export default function ContactFAQSection() {
    return (
        <section className="bg-surface-container-low py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <H2 className="text-on-surface text-center mb-12 md:mb-16">Frequently Asked Questions</H2>
                    <div className="space-y-4">
                        <details className="group bg-surface-container-lowest p-6 md:p-8 rounded-lg shadow-sm border border-outline-variant/10">
                            <summary className="flex justify-between items-center w-full text-left cursor-pointer list-none">
                                <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">What documents are required for initial tax consultation?</span>
                                <span className="text-primary transition-transform group-open:rotate-45">
                                    <MdOutlineAdd />
                                </span>
                            </summary>
                            <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base border-t border-outline-variant/10 pt-6">
                                Typically, we require your previous three years of financial statements, current PAN/VAT registration certificates, and details of any outstanding tax liabilities or notices from the Inland Revenue Department.
                            </div>
                        </details>

                        <details className="group bg-surface-container-lowest p-6 md:p-8 rounded-lg shadow-sm border border-outline-variant/10">
                            <summary className="flex justify-between items-center w-full text-left cursor-pointer list-none">
                                <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">Do you offer virtual consulting for international clients?</span>
                                <span className="text-primary transition-transform group-open:rotate-45">
                                    <MdOutlineAdd />
                                </span>
                            </summary>
                            <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base border-t border-outline-variant/10 pt-6">
                                Yes, we provide secure digital consultation via Microsoft Teams and Zoom for international investors looking to navigate the Nepalese corporate landscape.
                            </div>
                        </details>

                        <details className="group bg-surface-container-lowest p-6 md:p-8 rounded-lg shadow-sm border border-outline-variant/10">
                            <summary className="flex justify-between items-center w-full text-left cursor-pointer list-none">
                                <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">How do your fees structure work?</span>
                                <span className="text-primary transition-transform group-open:rotate-45">
                                    <MdOutlineAdd />
                                </span>
                            </summary>
                            <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base border-t border-outline-variant/10 pt-6">
                                Our fees are structured based on the complexity and volume of work. We offer both project-based fixed pricing for audits and hourly rates for advisory services.
                            </div>
                        </details>

                        <details className="group bg-surface-container-lowest p-6 md:p-8 rounded-lg shadow-sm border border-outline-variant/10">
                            <summary className="flex justify-between items-center w-full text-left cursor-pointer list-none">
                                <span className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors pr-8">Are you a member of any international accounting networks?</span>
                                <span className="text-primary transition-transform group-open:rotate-45">
                                    <MdOutlineAdd />
                                </span>
                            </summary>
                            <div className="mt-6 text-on-surface-variant leading-relaxed text-sm md:text-base border-t border-outline-variant/10 pt-6">
                                We are a proud member of ICAN (The Institute of Chartered Accountants of Nepal) and maintain strong affiliations with global financial networks to ensure international compliance standards.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}
