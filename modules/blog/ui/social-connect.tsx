"use client";

import { useState } from "react";
import { H4, P } from "@/components/typography";
import { MdOutlineShare, MdCheck } from "react-icons/md";

export function SocialConnect() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: "DB Mainaly & Associates Blog",
            text: "Follow the latest updates and regulatory insights from DB Mainaly & Associates.",
            url: "https://dbmainaly.com/blog",
        };

        if (typeof window !== "undefined" && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
                return;
            } catch (err) {
                // If sharing is cancelled or fails, fallback to copying to clipboard
                console.log("Web Share failed or was cancelled, using clipboard fallback:", err);
            }
        }

        try {
            await navigator.clipboard.writeText(shareData.url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link:", err);
        }
    };

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
                <div className="flex items-center gap-3">
                    {copied && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1.5 rounded-md transition-all duration-300">
                            Link copied!
                        </span>
                    )}
                    <button
                        onClick={handleShare}
                        className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm cursor-pointer active:scale-95 duration-200"
                        title="Share Blog Link"
                        aria-label="Share Blog Link"
                    >
                        {copied ? (
                            <MdCheck className="text-xl" />
                        ) : (
                            <MdOutlineShare className="text-xl" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
