import { H4 } from "@/components/typography";
import type { BlogListItem } from "@/utils/blog";
import Link from "next/link";
import { MdOutlineTrendingUp } from "react-icons/md";
interface ITrendingAnalysisProps {
    trendingBlogs: BlogListItem[];
}

export function TrendingAnalysis({ trendingBlogs }: ITrendingAnalysisProps) {
    return (
        <div className="p-8 lg:p-10 bg-surface-container-low rounded-xl h-full border border-outline-variant/10">
            <H4 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                    <MdOutlineTrendingUp />
                </span>{" "}
                Trending Analysis
            </H4>
            <ul className="space-y-6">
                {
                    trendingBlogs.map((blog) => (
                        <li key={blog.id} className="border-b border-outline-variant/30 pb-4 last:border-0 last:pb-0">
                            <Link
                                className="text-sm font-semibold text-on-surface hover:text-primary transition-colors block leading-snug"
                                href={`/blog/${blog.slug}`}
                            >
                                {blog.title}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}