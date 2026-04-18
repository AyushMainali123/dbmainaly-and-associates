import { H4, P } from "@/components/typography";

export function Newsletter() {
    return (
        <div className="bg-primary-fixed p-8 lg:p-10 rounded-xl relative overflow-hidden shadow-lg border border-primary/10 h-full">
            <div className="relative z-10">
                <H4 className="text-2xl font-bold text-on-primary-fixed mb-4">
                    The Ledger Monthly
                </H4>
                <P className="text-on-primary-fixed-variant mb-6 text-sm leading-relaxed">
                    Get exclusive regulatory summaries and fiscal updates delivered
                    directly to your inbox.
                </P>
                <form className="space-y-4">
                    <input
                        className="w-full bg-surface-container-lowest border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Corporate Email Address"
                        type="email"
                    />
                    <button className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg hover:bg-primary-container transition-all shadow-md active:scale-[0.98]">
                        Subscribe Now
                    </button>
                </form>
            </div>
        </div>
    )
}