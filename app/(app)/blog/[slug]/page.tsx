import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BlogDetailContentAndSidebarSection from "@/modules/blog-detail/ui/content-and-sidebar-section";
import BlogDetailHeroSection from "@/modules/blog-detail/ui/hero-section";
import { getBlogBySlug } from "@/utils/blog";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs md:text-sm text-on-surface-variant mb-8 uppercase tracking-widest font-bold">
          <a className="hover:text-primary transition-colors" href="/blog">
            Insights
          </a>
          <span className="material-symbols-outlined text-[10px] md:text-xs">
            chevron_right
          </span>
          <span className="text-primary">{post.categoryName}</span>
        </div>

        <BlogDetailHeroSection post={post} />

        {/* Featured Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden mb-12 md:mb-16 shadow-2xl shadow-primary/5 border border-outline-variant/10">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        <BlogDetailContentAndSidebarSection post={post} />
      </main>
      <Footer />
    </>
  );
}

