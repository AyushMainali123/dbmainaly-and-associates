"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import type { BlogCategory } from "@/payload-types";
import { getBlogsByCategoryAction } from "@/modules/blog/lib/actions";
import { ArticleGrid } from "./article-grid";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  categories: BlogCategory[];
  activeCategoryId?: string;
};

export default function ArticlesSection({
  categories,
  activeCategoryId,
}: Props) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const categoryIdNum = activeCategoryId ? Number(activeCategoryId) : undefined;

  const { data, isFetching } = useSuspenseQuery({
    queryKey: ["blogs", categoryIdNum, currentPage],
    queryFn: () => getBlogsByCategoryAction(categoryIdNum, currentPage),
  });

  const blogs = data?.articles || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-12 gap-y-16 lg:gap-y-24 items-start">
        {/* Left Sidebar: Categories Navigation */}
        <aside className="lg:row-span-2 space-y-6 lg:sticky lg:top-32">
          <div>
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-6">
              Categories
            </h4>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
              <Link
                href="/blog"
                scroll={false}
                data-active={!activeCategoryId ? "" : undefined}
                className="text-left px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shrink-0 
                  data-active:bg-primary data-active:text-on-primary data-active:font-bold data-active:shadow-md
                  text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog?category=${category.id}`}
                  scroll={false}
                  data-active={activeCategoryId === String(category.id) ? "" : undefined}
                  className="text-left px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shrink-0 
                    data-active:bg-primary data-active:text-on-primary data-active:font-bold data-active:shadow-md
                    text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Middle Content Area (Single Panel Pattern) */}
        <div className="lg:col-start-2">
          <ArticleGrid
            articles={blogs}
            isLoading={isFetching && blogs.length === 0}
            totalPages={totalPages}
            currentPage={currentPage}
            categoryId={activeCategoryId}
          />
        </div>
      </div>
    </div>
  );
}
