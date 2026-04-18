import { H4, P } from "@/components/typography";
import { MdOutlineShare, MdOutlineAlternateEmail, MdOutlineLink } from "react-icons/md";
export function SocialConnect() {
    return (
        <div className="md:col-span-2 border-t border-outline-variant/15 mt-4 pt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <H4 className="text-lg font-bold text-on-surface mb-2">
                        Stay Connected
                    </H4>
                    <P className="text-sm text-outline mb-0">
                        Follow our latest updates across social platforms.
                    </P>
                </div>
                <div className="flex gap-4">
                    <a
                        className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm"
                        href="#"
                    >
                        <MdOutlineShare />
                    </a>
                    <a
                        className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm"
                        href="#"
                    >
                        <MdOutlineLink />
                    </a>
                    <a
                        className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm"
                        href="#"
                    >
                        <MdOutlineAlternateEmail />
                    </a>
                </div>
            </div>
        </div>
    )
}