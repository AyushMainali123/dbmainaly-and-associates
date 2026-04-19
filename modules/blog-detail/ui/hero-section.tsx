import { H1, P, Small } from "@/components/typography";
import type { BlogDetailItem } from "@/utils/blog";
import { MdOutlineBookmark, MdOutlineShare } from "react-icons/md";

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

        <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
          <span className="text-on-surface-variant">
            <MdOutlineShare />
          </span>
        </button>

      </div>
    </header>
  );
}


