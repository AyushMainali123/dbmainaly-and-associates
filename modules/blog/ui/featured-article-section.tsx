import { H2, P, Small } from "@/components/typography";

export default function FeaturedArticleSection() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,35,111,0.04)] border border-outline-variant/10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12 overflow-hidden h-[300px] md:h-[450px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoiChS4yBA8oyEBwkpdBk2l6njBChMUbhfeK7z9uuZcOC_U6sxihH0TFuM2Z21cDB0bEn6Y1fzqKII6ujR_XXp4TGja5LkPprxCdgv5CdCbe5OwK8zQ4MhQPw5y7tsDlfhhskcrOkWvz-OobklTNHnVH98WDA45xSrhDEYlS4YdEZDKLveoy_Ey0rUw0x6QGkCNeThh8_ovgSCN0P7A0md82IBk_rCsGxI5c59WzSZttRyGVzMu1jWUafjeWCuCTYL9_72_o5rjWU"
              alt="Understanding the 2024 Nepal Finance Act"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center">
            <Small className="text-primary font-bold tracking-widest mb-4 uppercase block">
              Taxation • 5 Min Read
            </Small>
            <H2 className="text-on-surface mb-6 hover:text-primary transition-colors">
              <a href="/blog/blog-detail">Understanding the 2024 Nepal Finance Act</a>
            </H2>
            <P className="text-on-surface-variant mb-8 line-clamp-3">
              A comprehensive breakdown of the latest legislative changes
              affecting corporate taxation, profit repatriation, and compliance
              requirements in the Nepalese market.
            </P>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
              </div>
              <div>
                <P className="text-sm font-bold text-on-surface mb-0">
                  By DB Mainaly
                </P>
                <P className="text-xs text-on-surface-variant mb-0">
                  Managing Partner
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

