import { H3, H4, P, Small } from "@/components/typography";

export default function ArticlesAndSidebarSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
      <div className="lg:col-span-12 xl:col-span-8">
        <div className="flex flex-nowrap overflow-x-auto gap-4 mb-12 pb-2 scrollbar-hide">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm transition-all shrink-0">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-all shrink-0">
            Taxation
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-all shrink-0">
            Audit
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-all shrink-0">
            Regulatory
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
          <article className="group">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-surface-container border border-outline-variant/10">
              <img
                src="https://placehold.co/600x400"
                alt="A test blog by ayush"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <Small className="text-primary font-bold tracking-widest uppercase mb-3 block">
              &apos;Accounting &apos;
            </Small>
            <H3 className="text-on-surface mb-4 group-hover:text-primary transition-colors">
              <a href="/blog/blog-detail">A test blog by ayush</a>
            </H3>
            <P className="text-on-surface-variant mb-6 text-sm line-clamp-2">
              A test blog Excerpt
            </P>
            <div className="flex items-center justify-between mt-auto">
              <Small className="text-outline font-medium">
                March 31, 2026
              </Small>
              <a
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                href="/blog/blog-detail"
              >
                Read More
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>

          <article className="group">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-surface-container border border-outline-variant/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy1VabRD_bIwsNacD7xSy4AbLEspzw65D_Ou6IWSF6f0ioLHDPbfV_CMQ_RrKr-eO1b9RZTdHzIHZ-A-1jp1FdmJOYSkxKVzhsvu4TC66dpm0DZ3fVwVdQ3maPfTzcVD1fWWspDeopkSW78IrlGm1c063sigmCjbGKbvGEgtJtrY14oaSq-v7pFNqf3fWrZn8W5HPAMhRtQMjhYLQghYW0x_53ZMhFQPMEiNsf6BAdRfbYG4MEab2qWwRhp2ekmDNJOWKnsd16Py8"
                alt="Navigating the New NFRS Standards for SMEs in Nepal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <Small className="text-primary font-bold tracking-widest uppercase mb-3 block">
              Compliance &amp; Standards
            </Small>
            <H3 className="text-on-surface mb-4 group-hover:text-primary transition-colors">
              <a href="/blog/blog-detail">
                Navigating the New NFRS Standards for SMEs in Nepal
              </a>
            </H3>
            <P className="text-on-surface-variant mb-6 text-sm line-clamp-2">
              The Institute of Chartered Accountants of Nepal (ICAN) has
              recently unveiled a refined framework for Nepal Financial
              Reporting Standards (NFRS) specifically tailored for Small and
              Medium-sized Entities (SMEs).
            </P>
            <div className="flex items-center justify-between mt-auto">
              <Small className="text-outline font-medium">
                October 24, 2023
              </Small>
              <a
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                href="/blog/blog-detail"
              >
                Read More
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>

      <aside className="lg:col-span-12 xl:col-span-4 space-y-12">
        <div className="bg-primary text-white p-8 md:p-10 rounded-xl relative overflow-hidden">
          <div className="relative z-10">
            <H4 className="text-white mb-4">The Ledger Monthly</H4>
            <P className="text-primary-fixed mb-8 text-sm opacity-80">
              Get exclusive regulatory summaries and fiscal updates delivered
              directly to your inbox.
            </P>
            <form className="space-y-4">
              <input
                className="w-full bg-primary-container border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-tertiary-fixed-dim transition-all text-white placeholder:text-primary-fixed/50"
                placeholder="Corporate Email Address"
                type="email"
              />
              <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-surface-dim transition-all active:scale-95">
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
        </div>

        <div className="p-2">
          <H4 className="text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              trending_up
            </span>
            Trending Analysis
          </H4>
          <ul className="space-y-6">
            <li className="border-b border-outline-variant/15 pb-4">
              <a
                className="text-sm font-bold text-on-surface hover:text-primary transition-colors"
                href="#"
              >
                SEBON&apos;s New IPO Pricing Guidelines: What You Need to Know
              </a>
            </li>
            <li className="border-b border-outline-variant/15 pb-4">
              <a
                className="text-sm font-bold text-on-surface hover:text-primary transition-colors"
                href="#"
              >
                Double Taxation Avoidance Agreement (DTAA) with China
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

