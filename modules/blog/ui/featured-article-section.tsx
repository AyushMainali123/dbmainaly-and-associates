import { H2, P, Small } from "@/components/typography";
import type { BlogListItem } from "@/utils/blog";
import { MdPerson } from "react-icons/md";
type Props = {
  article?: BlogListItem;
};

export default function FeaturedArticleSection({ article }: Props) {
  if (!article) return null;

  return (
    <section className="mb-16 md:mb-24">
      <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,35,111,0.04)] border border-outline-variant/10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12 overflow-hidden h-[300px] md:h-[450px]">
            <img
              src={article.imageUrl}
              alt={article.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center">
            <Small className="text-primary font-bold tracking-widest mb-4 uppercase block">
              {article.categoryName} • {article.readTime} Min Read
            </Small>
            <H2 className="text-on-surface mb-6 hover:text-primary transition-colors">
              <a href={`/blog/${article.slug}`}>{article.title}</a>
            </H2>
            <P className="text-on-surface-variant mb-8 line-clamp-3">
              {article.excerpt}
            </P>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="text-primary">
                  <MdPerson />
                </span>
              </div>
              <div>
                <P className="text-sm font-bold text-on-surface mb-0">
                  By {article.authorName}
                </P>
                <P className="text-xs text-on-surface-variant mb-0">
                  {article.authorDesignation}
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

