import { H2, P, Small } from "@/components/typography";
import { Button } from "@/components/button";
import type { BlogListItem } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdPerson } from "react-icons/md";

type Props = {
  article?: BlogListItem;
};

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function FeaturedArticleSection({ article }: Props) {
  if (!article) return null;

  return (
    <section className="mb-20 md:mb-32 relative">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="relative group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_20px_50px_rgba(0,35,111,0.08)] border border-outline-variant/20 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,35,111,0.12)]">
        <div className="flex flex-col lg:flex-row">
          {/* Image Container */}
          <div className="relative lg:w-3/5 overflow-hidden h-[350px] md:h-[500px]">
            {/* Featured Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-primary/90 backdrop-blur-md text-on-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                Featured Article
              </span>
            </div>

            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Subtle overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Content Container */}
          <div className="lg:w-2/5 p-8 md:p-14 flex flex-col justify-center relative overflow-hidden">
            {/* Subtle accent pattern or glow in content area */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />

            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <Small className="text-primary font-black tracking-[0.15em] uppercase block">
                {article.categoryName}
              </Small>
            </div>

            <H2 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </H2>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs text-outline font-medium uppercase tracking-wider">
                {formatDate(article.publishedAt)}
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
              <span className="text-xs text-outline font-medium uppercase tracking-wider">
                {article.readTime} Min Read
              </span>
            </div>

            <P className="text-on-surface-variant mb-10 text-lg leading-relaxed line-clamp-3">
              {article.excerpt}
            </P>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mt-auto pt-8 border-t border-outline-variant/10">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10 shadow-sm">
                  {article.authorImageUrl ? (
                    <Image
                      src={article.authorImageUrl}
                      alt={article.authorName}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-container flex items-center justify-center">
                      <MdPerson className="text-primary text-xl" />
                    </div>
                  )}
                </div>
                <div>
                  <P className="text-sm font-black text-on-surface mb-0.5">
                    {article.authorName}
                  </P>
                  <P className="text-xs text-on-surface-variant font-medium mb-0">
                    {article.authorDesignation}
                  </P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


