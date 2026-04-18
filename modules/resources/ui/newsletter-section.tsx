import { H2, Lead } from "@/components/typography";
import { ResourcePage } from "@/payload-types";

export default function NewsletterSection({
  data,
}: {
  data: ResourcePage["newsletter"];
}) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="bg-primary rounded-2xl p-8 md:p-16 flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-16 relative overflow-hidden max-w-[1440px] mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="max-w-xl xl:max-w-2xl relative z-10 text-center xl:text-left">
          <H2 className="text-white mb-4">{data?.title || "Regulatory Alerts"}</H2>
          <Lead className="text-primary-fixed/70">
            {data?.description || "Stay informed about changes in the Finance Act, circulars from the NRB, and new IFRS/NFRS updates delivered directly to your inbox."}
          </Lead>
        </div>
        <div className="w-full xl:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
          <input
            className="bg-primary-container border-0 text-white placeholder:text-primary-fixed/50 px-6 py-4 rounded-lg focus:ring-2 focus:ring-tertiary-fixed-dim shrink-0 sm:min-w-[300px]"
            placeholder="Professional Email Address"
            type="email"
          />
          <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all shrink-0">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

