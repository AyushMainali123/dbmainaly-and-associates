import { MdOutlineAlternateEmail, MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";
export function Footer() {
    return (
        <footer
            className="w-full border-t border-outline-variant/15 bg-surface-container font-sans text-sm leading-relaxed mt-auto"
        >
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto px-6 md:px-16 py-20"
            >
                <div className="space-y-6">
                    <div className="text-lg font-bold text-primary">DB Mainaly & Associates</div>
                    <p className="text-on-surface-variant max-w-xs">
                        Leading chartered accountancy firm providing elite audit, tax, and legal
                        advisory across Nepal and South Asia.
                    </p>
                    <div className="flex gap-2">
                        <MdOutlineAlternateEmail className="text-primary text-lg" />
                        <MdOutlineCall className="text-primary text-lg" />
                        <MdOutlineLocationOn className="text-primary text-lg" />
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-primary tracking-wide uppercase text-xs">
                        Services
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/services">Tax Advisory</a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/services">Audit & Assurance</a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/services">Corporate Law</a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/services">Financial Consulting</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-primary tracking-wide uppercase text-xs">
                        Resources
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/resources">Privacy Policy</a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/resources">Compliance</a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/resources">Client Portal</a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-primary transition-all"
                                href="/resources">Annual Reports</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-primary tracking-wide uppercase text-xs">
                        Headquarters
                    </h4>
                    <p className="text-on-surface-variant">
                        Lalitpur-03, Kathmandu, Nepal<br />
                        Professional Building, 4th Floor
                    </p>
                    <div className="pt-4 border-t border-outline-variant/20">
                        <p className="text-on-surface-variant font-medium">
                            Licensed by ICAN Nepal
                        </p>

                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-16 pb-12">
                <div
                    className="pt-8 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant/60 text-xs"
                >
                    <p>© {new Date().getFullYear()} DB Mainaly & Associates. Member of ICAN.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-primary" href="#">LinkedIn</a>
                        <a className="hover:text-primary" href="/blog">Financial Intelligence</a>
                        <a className="hover:text-primary" href="#">Careers</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
