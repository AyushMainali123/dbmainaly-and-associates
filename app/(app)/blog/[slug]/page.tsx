import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BlogDetailContentAndSidebarSection from "@/modules/blog-detail/ui/content-and-sidebar-section";
import BlogDetailHeroSection from "@/modules/blog-detail/ui/hero-section";

export default function BlogDetail() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <BlogDetailHeroSection />
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 md:mb-20 shadow-lg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoiChS4yBA8oyEBwkpdBk2l6njBChMUbhfeK7z9uuZcOC_U6sxihH0TFuM2Z21cDB0bEn6Y1fzqKII6ujR_XXp4TGja5LkPprxCdgv5CdCbe5OwK8zQ4MhQPw5y7tsDlfhhskcrOkWvz-OobklTNHnVH98WDA45xSrhDEYlS4YdEZDKLveoy_Ey0rUw0x6QGkCNeThh8_ovgSCN0P7A0md82IBk_rCsGxI5c59WzSZttRyGVzMu1jWUafjeWCuCTYL9_72_o5rjWU"
            alt="Understanding the 2024 Nepal Finance Act"
            className="w-full h-full object-cover"
          />
        </div>
        <BlogDetailContentAndSidebarSection />
      </main>
      <Footer />
    </>
  );
}
