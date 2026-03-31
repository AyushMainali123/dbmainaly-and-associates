import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ArticlesAndSidebarSection from "@/modules/blog/ui/articles-and-sidebar-section";
import FeaturedArticleSection from "@/modules/blog/ui/featured-article-section";
import BlogHeroSection from "@/modules/blog/ui/hero-section";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <BlogHeroSection />
        <FeaturedArticleSection />
        <ArticlesAndSidebarSection />
      </main>
      <Footer />
    </>
  );
}
