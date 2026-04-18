import { H3, P, Small } from "@/components/typography";
import { BlogListItem } from "@/utils/blog";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}


export function ArticleCard({ article }: { article: BlogListItem }) {
    return (
        <article className="group">
            <Link href={`/blog/${article.slug}`} className="block">
                <div className="aspect-[16/10] mb-8 overflow-hidden rounded-lg bg-surface-container shadow-sm border border-outline-variant/10">
                    <img
                        alt={article.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={article.imageUrl}
                    />
                </div>
            </Link>
            <Small className="text-primary font-bold tracking-widest uppercase mb-4 block">
                {article.categoryName}
            </Small>
            <H3 className="text-2xl font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </H3>
            <P className="text-on-surface-variant mb-6 text-base leading-relaxed line-clamp-3">
                {article.excerpt}
            </P>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
                <span className="text-xs text-outline font-medium uppercase tracking-wider">
                    {formatDate(article.publishedAt)}
                </span>
                <Link
                    className="text-primary font-bold text-sm flex items-center gap-2 group/link"
                    href={`/blog/${article.slug}`}
                >
                    Read More
                    <span className="text-sm transition-transform group-hover/link:translate-x-1">
                        <MdArrowForward />
                    </span>
                </Link>
            </div>
        </article>
    );
}