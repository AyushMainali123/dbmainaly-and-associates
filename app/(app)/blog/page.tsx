import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ArticlesSection from "@/modules/blog/ui/articles-section";
import FeaturedArticleSection from "@/modules/blog/ui/featured-article-section";
import BlogHeroSection from "@/modules/blog/ui/hero-section";
import { Newsletter } from "@/modules/blog/ui/newsletter";
import { SocialConnect } from "@/modules/blog/ui/social-connect";
import { TrendingAnalysis } from "@/modules/blog/ui/trending-analysis";
import { getBlogCategories, getBlogsByCategory, getFeaturedBlogs, getTrendingBlogs } from "@/utils/blog";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export const revalidate = 60;

export default async function BlogPage({ searchParams }: PageProps<"/blog">) {

  const query = await searchParams;
  const page = query.page ? Number(query.page) : 1;
  const category = query.category ? Number(query.category) : undefined;

  const trending = await getTrendingBlogs();
  const featuredBlogs = await getFeaturedBlogs();
  const categories = await getBlogCategories();


  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blogs", category, page],
    queryFn: () => getBlogsByCategory(category, page),
  });

  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <BlogHeroSection />
        <FeaturedArticleSection article={featuredBlogs?.[0]} />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense>
            <ArticlesSection categories={categories} activeCategoryId={category ? category.toString() : undefined} />
          </Suspense>
        </HydrationBoundary>
        <aside className="lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mt-8 lg:mt-12">
          <Newsletter />
          {trending.length && (
            <TrendingAnalysis trendingBlogs={trending || []} />
          )}
          <SocialConnect />
        </aside>
      </main>
      <Footer />
    </>
  );
}
