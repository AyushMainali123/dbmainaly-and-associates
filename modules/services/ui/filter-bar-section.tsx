export default function ServicesFilterBarSection() {
  return (
    <section className="bg-surface-container py-4 md:py-8 sticky top-[64px] md:top-[88px] z-40 border-b border-outline-variant/10 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-6 md:gap-8 items-center justify-start scrollbar-hide pb-2 md:pb-0">
          <button className="text-primary font-bold border-b-2 border-primary pb-1 text-xs md:text-sm tracking-wide shrink-0">
            ALL SERVICES
          </button>
          <button className="text-on-surface-variant font-medium hover:text-primary transition-colors text-xs md:text-sm tracking-wide shrink-0">
            TAX ADVISORY
          </button>
          <button className="text-on-surface-variant font-medium hover:text-primary transition-colors text-xs md:text-sm tracking-wide shrink-0">
            AUDIT &amp; ASSURANCE
          </button>
          <button className="text-on-surface-variant font-medium hover:text-primary transition-colors text-xs md:text-sm tracking-wide shrink-0">
            CONSULTING
          </button>
        </div>
      </div>
    </section>
  );
}

