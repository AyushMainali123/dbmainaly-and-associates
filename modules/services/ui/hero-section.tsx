import { H1, Lead, Small } from "@/components/typography";
import { ServicePage } from "@/payload-types";

export default function ServicesHeroSection({
  data,
}: {
  data: ServicePage["hero"];
}) {
  return (
    <section className="relative pt-24 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-linear-to-br from-primary to-primary-container">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 z-10">
          <Small className="text-tertiary-fixed-dim font-bold tracking-[0.2em] uppercase mb-6 block">
            {data?.badge || "Our Expertise"}
          </Small>
          <H1 className="text-white mb-8">
            {data?.title || (
              <>
                Precision in <br />
                <span className="opacity-80">Every Ledger</span>
              </>
            )}
          </H1>
          <Lead className="text-primary-fixed max-w-2xl opacity-90">
            {data?.description ||
              "Navigating the complexities of Nepalese financial regulations with institutional rigor and deep-sector expertise."}
          </Lead>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none hidden md:block">
        <svg
          fill="none"
          height="400"
          viewBox="0 0 600 400"
          width="600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 400L200 150L400 300L600 0V400H0Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
}


