import { H2, H3, P, Small } from "@/components/typography";
import { MdOutlineArrowForward } from "react-icons/md";

export default function LatestInsightsSection() {
    return (
        <section className="py-16 md:py-32 bg-surface">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <Small className="text-primary font-bold tracking-[0.15em] uppercase mb-4 block">Financial Intelligence</Small>
                        <H2 className="text-on-surface">Latest Insights</H2>
                    </div>
                    <a href="/blog" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-container hover:border-primary-container transition-all">View All Publications</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    <article className="group">
                        <div className="aspect-[16/10] bg-surface-container-high rounded-xl overflow-hidden mb-6 md:mb-8">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoiChS4yBA8oyEBwkpdBk2l6njBChMUbhfeK7z9uuZcOC_U6sxihH0TFuM2Z21cDB0bEn6Y1fzqKII6ujR_XXp4TGja5LkPprxCdgv5CdCbe5OwK8zQ4MhQPw5y7tsDlfhhskcrOkWvz-OobklTNHnVH98WDA45xSrhDEYlS4YdEZDKLveoy_Ey0rUw0x6QGkCNeThh8_ovgSCN0P7A0md82IBk_rCsGxI5c59WzSZttRyGVzMu1jWUafjeWCuCTYL9_72_o5rjWU" alt="Understanding the 2024 Nepal Finance Act" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <Small className="text-primary font-bold tracking-widest uppercase mb-4 block">
                            Taxation • May 2024
                        </Small>
                        <H3 className="mb-4 group-hover:text-primary transition-colors text-xl md:text-2xl">
                            <a href="/blog/blog-detail">Understanding the 2024 Nepal Finance Act</a>
                        </H3>
                        <P className="text-on-surface-variant mb-6 line-clamp-2">
                            A comprehensive breakdown of the latest legislative changes affecting corporate taxation, profit repatriation, and compliance requirements in the Nepalese market.
                        </P>
                        <a href="/blog/blog-detail" className="text-primary group-hover:translate-x-2 transition-transform">
                            <MdOutlineArrowForward />
                        </a>
                    </article>

                </div>
            </div>
        </section>
    )
}