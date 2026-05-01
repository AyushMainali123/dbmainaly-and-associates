import { H2, Small } from "@/components/typography";
import { getBlogsByCategory, normalizeBlogPost, type BlogDetailItem } from "@/utils/blog";
import { ArticleCard } from "@/modules/blog/ui/article-card";
import Link from "next/link";
import { Blog } from "@/payload-types";

interface LatestInsightsSectionProps {
  data?: {
    badge?: string | null;
    title?: string | null;
    linkText?: string | null;
    linkUrl?: string | null;
    selectedArticles?: (number | Blog)[] | null;
  };
}

export default async function LatestInsightsSection({ data }: LatestInsightsSectionProps) {
    let articlesToDisplay: BlogDetailItem[] = [];

    // Check if there are selected articles and they are populated objects (not just IDs)
    if (data?.selectedArticles && data.selectedArticles.length > 0) {
        articlesToDisplay = data.selectedArticles
            .filter((item): item is Blog => typeof item === 'object' && item !== null && 'id' in item)
            .map(normalizeBlogPost);
    }

    // Fallback if no selected articles or if they didn't populate properly
    if (articlesToDisplay.length === 0) {
        const { articles } = await getBlogsByCategory(undefined, 1, 3);
        articlesToDisplay = articles;
    }

    return (
        <section className="py-16 md:py-32 bg-surface">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <Small className="text-primary font-bold tracking-[0.15em] uppercase mb-4 block">{data?.badge || "Financial Intelligence"}</Small>
                        <H2 className="text-on-surface">{data?.title || "Latest Insights"}</H2>
                    </div>
                    <Link href={data?.linkUrl || "/blog"} className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-container hover:border-primary-container transition-all">{data?.linkText || "View All Publications"}</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    {
                        articlesToDisplay.map(article => <ArticleCard key={article.id} article={article} />)
                    }

                </div>
            </div>
        </section>
    )
}