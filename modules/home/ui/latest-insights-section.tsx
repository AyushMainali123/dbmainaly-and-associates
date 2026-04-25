import { H2, Small } from "@/components/typography";
import { getBlogsByCategory } from "@/utils/blog";
import { ArticleCard } from "@/modules/blog/ui/article-card";
import Link from "next/link";

export default async function LatestInsightsSection() {
    const { articles } = await getBlogsByCategory(undefined, 1, 3);
    return (
        <section className="py-16 md:py-32 bg-surface">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <Small className="text-primary font-bold tracking-[0.15em] uppercase mb-4 block">Financial Intelligence</Small>
                        <H2 className="text-on-surface">Latest Insights</H2>
                    </div>
                    <Link href="/blog" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-container hover:border-primary-container transition-all">View All Publications</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    {
                        articles.map(article => <ArticleCard key={article.id} article={article} />)
                    }

                </div>
            </div>
        </section>
    )
}