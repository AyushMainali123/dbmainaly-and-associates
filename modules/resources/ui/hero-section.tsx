import { H1, Lead, Small } from "@/components/typography";

export default function ResourcesHeroSection() {
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
          COMPLIANCE HUB
        </Small>
        <H1 className="text-white mb-8">Resources &amp; Templates</H1>
        <Lead className="text-primary-fixed/80 max-w-2xl mx-auto">
          Empowering our clients with essential financial tools, regulatory
          templates, and strategic documents for Nepal&apos;s fiscal
          landscape.
        </Lead>
      </div>
    </section>
  );
}

