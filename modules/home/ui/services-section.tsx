import { H2, H3, Lead, P, Small } from "@/components/typography";
import { MdOutlineAccountBalance, MdOutlineArrowForward, MdOutlineGavel, MdOutlinePayments, MdOutlineQueryStats } from "react-icons/md";

export default function ServicesSection() {
    return (
        <section className="py-16 md:py-32 bg-surface">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <Small className="text-primary font-bold tracking-[0.15em] uppercase mb-4 block">Core Competencies</Small>
                        <H2 className="text-on-surface">Strategic Financial Services</H2>
                    </div>
                    <Lead className="text-on-surface-variant max-w-md">
                        A multidisciplinary approach to fiscal health, combining local expertise with international standards.
                    </Lead>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                    <div className="md:col-span-8 group relative overflow-hidden p-8 md:p-12 rounded-xl border border-outline-variant/10 transition-all duration-500 hover:shadow-xl bg-surface-container-lowest">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="text-3xl md:text-4xl mb-6 md:mb-8 text-primary">
                                    <MdOutlineAccountBalance />
                                </span>
                                <H3 className="mb-4 text-on-surface">Audit & Assurance</H3>
                                <P className="text-base md:text-lg mb-8 text-on-surface-variant max-w-lg">
                                    Independent verification services that build investor trust and ensure regulatory compliance through meticulous analysis.
                                </P>
                            </div>
                            <div className="mt-4">

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-on-surface font-medium mb-10">

                                    <li className="flex items-center gap-3 text-sm md:text-base"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Statutory Audit</li>

                                    <li className="flex items-center gap-3 text-sm md:text-base"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Internal Control Review</li>

                                    <li className="flex items-center gap-3 text-sm md:text-base"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Forensic Auditing</li>

                                    <li className="flex items-center gap-3 text-sm md:text-base"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Risk Management</li>

                                </ul>

                                <a href="/services" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-primary">
                                    View Practice Area
                                    <MdOutlineAccountBalance />
                                </a>
                            </div>
                        </div>
                        <div className="absolute -right-20 -bottom-20 opacity-[0.03] scale-100 md:scale-150 pointer-events-none text-primary">
                            <span className="text-[10rem] md:text-[20rem]">
                                <MdOutlineAccountBalance />
                            </span>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-primary text-white group relative overflow-hidden p-8 md:p-12 rounded-xl border border-outline-variant/10 transition-all duration-500 hover:shadow-xl ">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="text-3xl md:text-4xl mb-6 md:mb-8 text-tertiary-fixed-dim">
                                    <MdOutlineGavel />
                                </span>
                                <H3 className="mb-4 text-white">Corporate Law</H3>
                                <P className="text-base md:text-lg mb-8 text-primary-fixed/80 max-w-lg">
                                    Expert guidance on company formation, compliance filings, and complex legal structuring.
                                </P>
                            </div>
                            <div className="mt-4">

                                <a href="/services" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-tertiary-fixed-dim">
                                    Consult Expert
                                    <MdOutlineArrowForward />
                                </a>
                            </div>
                        </div>
                        <div className="absolute -right-20 -bottom-20 opacity-[0.03] scale-100 md:scale-150 pointer-events-none text-white">
                            <span className="text-[10rem] md:text-[20rem]">
                                <MdOutlineGavel />
                            </span>
                        </div>
                    </div>

                    <div className="md:col-span-6 group relative overflow-hidden p-8 md:p-12 rounded-xl border border-outline-variant/10 transition-all duration-500 hover:shadow-xl bg-surface-container-high">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="text-3xl md:text-4xl mb-6 md:mb-8 text-primary">
                                    <MdOutlineQueryStats />
                                </span>
                                <H3 className="mb-4 text-on-surface">Management Consulting</H3>
                                <P className="text-base md:text-lg mb-8 text-on-surface-variant max-w-lg">
                                    Transformational strategies to scale your operations and improve organizational efficiency.
                                </P>
                            </div>
                            <div className="mt-4">

                                <a href="/services" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-primary">
                                    View Practice Area
                                    <MdOutlineArrowForward />

                                </a>
                            </div>
                        </div>
                        <div className="absolute -right-20 -bottom-20 opacity-[0.03] scale-100 md:scale-150 pointer-events-none text-primary">
                            <span className="text-[10rem] md:text-[20rem]">
                                <MdOutlineQueryStats />
                            </span>
                        </div>
                    </div>

                    <div className="md:col-span-6 group relative overflow-hidden p-8 md:p-12 rounded-xl border border-outline-variant/10 transition-all duration-500 hover:shadow-xl bg-surface-container-lowest">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="text-3xl md:text-4xl mb-6 md:mb-8 text-primary">
                                    <MdOutlinePayments />
                                </span>
                                <H3 className="mb-4 text-on-surface">Tax Advisory</H3>
                                <P className="text-base md:text-lg mb-8 text-on-surface-variant max-w-lg">
                                    Optimizing tax strategies within the complex landscape of Nepalese VAT, Income Tax, and Customs duties.
                                </P>
                            </div>
                            <div className="mt-4">

                                <a href="/services" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-primary">
                                    View Practice Area
                                    <MdOutlineArrowForward />
                                </a>
                            </div>
                        </div>
                        <div className="absolute -right-20 -bottom-20 opacity-[0.03] scale-100 md:scale-150 pointer-events-none text-primary">
                            <span className="text-[10rem] md:text-[20rem]">
                                <MdOutlinePayments />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}