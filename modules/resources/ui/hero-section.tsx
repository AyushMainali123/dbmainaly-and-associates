import { H1, Lead, Small } from "@/components/typography";
import { ResourcePage } from "@/payload-types";

export default function ResourcesHeroSection({
  data,
}: {
  data: ResourcePage["hero"];
}) {
  return (
    <section className="relative py-20 md:py-32 flex items-center bg-linear-to-br from-primary to-primary-container px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Small className="text-primary-fixed font-bold tracking-[0.2em] mb-6 block uppercase">
          {data?.badge || "COMPLIANCE HUB"}
        </Small>
        <H1 className="text-white mb-8">{data?.title || "Resources & Templates"}</H1>
        <Lead className="text-primary-fixed/80 max-w-2xl mx-auto">
          {data?.description || "Empowering our clients with essential financial tools, regulatory templates, and strategic documents for Nepal's fiscal landscape."}
        </Lead>
      </div>
    </section>
  );
}

