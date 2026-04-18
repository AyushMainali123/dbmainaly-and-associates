import { H1, P, Small } from "@/components/typography";
import type { BlogDetailItem } from "@/utils/blog";

type Props = {
  post: BlogDetailItem;
};

export default function BlogDetailHeroSection({ post }: Props) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="max-w-4xl mb-12">
      <H1 className="text-on-surface mb-8">
        {post.title}
      </H1>
      
      <div className="flex flex-wrap items-center gap-6 md:gap-8 py-6 border-y border-outline-variant/15">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container shrink-0 border border-outline-variant/10">
            <img 
              className="w-full h-full object-cover" 
              src={post.authorImageUrl} 
              alt={post.authorName} 
            />
          </div>
          <div>
            <P className="text-sm font-bold text-on-surface mb-0">By {post.authorName}</P>
            <P className="text-xs text-on-surface-variant mb-0">{post.authorDesignation}</P>
          </div>
        </div>

        <div className="h-8 w-px bg-outline-variant/20 hidden md:block"></div>

        {/* Published Date */}
        <div className="flex flex-col">
          <Small className="text-on-surface-variant font-medium uppercase mb-0">Published</Small>
          <Small className="font-bold text-on-surface mb-0">{formattedDate}</Small>
        </div>

        {/* Reading Time */}
        <div className="flex flex-col">
          <Small className="text-on-surface-variant font-medium uppercase mb-0">Reading Time</Small>
          <Small className="font-bold text-on-surface mb-0">{post.readTime} Min Read</Small>
        </div>

        {/* Actions */}
        <div className="sm:ml-auto flex space-x-2">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">share</span>
          </button>
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
          </button>
        </div>
      </div>
    </header>
  );
}


