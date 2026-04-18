import { BlogListItem } from "@/utils/blog";
import { ArticleCard } from "./article-card";
import { P } from "@/components/typography";
import Link from "next/link";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

export function ArticleGrid({
    articles,
    isLoading = false,
    totalPages = 1,
    currentPage = 1,
    categoryId
}: {
    articles: BlogListItem[];
    isLoading?: boolean;
    totalPages?: number;
    currentPage?: number;
    categoryId?: string;
}) {
    if (articles.length === 0) {
        if (isLoading) {
            return (
                <div className="py-20 flex justify-center items-center">
                    <div className="animate-pulse flex flex-col items-center gap-4">
                        <div className="h-6 w-64 bg-surface-container-high rounded-lg" />
                        <div className="h-4 w-48 bg-surface-container rounded-lg" />
                    </div>
                </div>
            );
        }
        return (
            <div className="py-20 text-center">
                <P className="text-outline">No articles found in this category.</P>
            </div>
        );
    }

    const createPageUrl = (page: number) => {
        const params = new URLSearchParams();
        if (categoryId) params.set("category", categoryId);
        if (page > 1) params.set("page", String(page));
        const queryString = params.toString();
        return `/blog${queryString ? `?${queryString}` : ""}`;
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 pt-12 border-t border-outline-variant/20">
                    <nav className="flex items-center justify-between">
                        <div className="-mt-px flex w-0 flex-1">
                            {currentPage > 1 && (
                                <Link
                                    className="inline-flex items-center pt-4 pr-1 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
                                    href={createPageUrl(currentPage - 1)}
                                    scroll={false}
                                >
                                    <span className="mr-2 text-sm transition-transform group-hover:-translate-x-1">
                                        <MdArrowBack />
                                    </span>
                                    Previous
                                </Link>
                            )}
                        </div>
                        <div className="hidden md:-mt-px md:flex">
                            {pages.map((p) => (
                                <Link
                                    key={p}
                                    href={createPageUrl(p)}
                                    scroll={false}
                                    aria-current={p === currentPage ? "page" : undefined}
                                    className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-bold transition-all ${p === currentPage
                                        ? "border-primary text-primary"
                                        : "border-transparent text-on-surface-variant hover:border-outline-variant hover:text-on-surface"
                                        }`}
                                >
                                    {p}
                                </Link>
                            ))}
                        </div>
                        <div className="-mt-px flex w-0 flex-1 justify-end">
                            {currentPage < totalPages && (
                                <Link
                                    className="inline-flex items-center pt-4 pl-1 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
                                    href={createPageUrl(currentPage + 1)}
                                    scroll={false}
                                >
                                    Next
                                    <span className="ml-2 text-sm transition-transform group-hover:translate-x-1">
                                        <MdArrowForward />
                                    </span>
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
