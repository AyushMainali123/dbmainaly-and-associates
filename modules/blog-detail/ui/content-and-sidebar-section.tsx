"use client";

import { useActiveAnchor } from "@/hooks/use-active-anchor";
import { H3, Lead, Small } from "@/components/typography";
import type { BlogDetailItem } from "@/utils/blog";
import { cn } from "@/utils";

type Props = {
  post: BlogDetailItem;
};

export default function BlogDetailContentAndSidebarSection({ post }: Props) {
  const anchors = post.tableOfContents?.map((item) => item.anchor) ?? [];
  const activeAnchor = useActiveAnchor(anchors);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
      {/* Sidebar - Contents */}
      {post.tableOfContents && post.tableOfContents.length > 0 && (
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-12">
            <div>
              <Small className="font-bold text-primary tracking-[0.2em] mb-6 uppercase block">
                CONTENTS
              </Small>
              <ul className="relative space-y-4 text-sm font-medium">
                {post.tableOfContents.map((item) => {
                  const isActive = activeAnchor === item.anchor;
                  return (
                    <li key={item.anchor}>
                      <a
                        className={cn(
                          "pl-4 block transition-all duration-300 border-l-2",
                          isActive
                            ? "text-primary border-primary font-bold translate-x-1"
                            : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30"
                        )}
                        href={item.anchor}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      )}

      {/* Main Article Content */}
      <article
        className={
          post.tableOfContents && post.tableOfContents.length > 0
            ? "lg:col-span-9"
            : "lg:col-span-12"
        }
      >
        <div className="prose prose-slate prose-lg max-w-none text-on-surface-variant leading-relaxed dark:prose-invert">
          {/* Replace this with real rendered content if available, or fallback to excerpt/content text */}
          <div dangerouslySetInnerHTML={{ __html: post.contentText }} />
        </div>



        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-outline-variant/20">
          {post.tags.map((tag) => (
            <Small
              key={tag}
              className="px-4 py-1.5 bg-surface-container rounded-full text-on-surface-variant font-bold uppercase"
            >
              {tag}
            </Small>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-16 md:mt-20 p-8 md:p-12 bg-primary rounded-xl text-white relative overflow-hidden group">
          <div className="relative z-10">
            <H3 className="text-white mb-4">Have questions about this update?</H3>
            <Lead className="text-primary-fixed mb-8 max-w-xl opacity-90">
              Our team of certified experts is ready to help you navigate the complexities of NFRS and ensure your business remains compliant and competitive.
            </Lead>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-surface text-primary px-8 py-3.5 rounded-lg font-bold hover:bg-surface-dim transition-all shadow-lg text-center active:scale-95"
              >
                Speak with our experts
              </a>
              <a
                href="/resources"
                className="border border-surface/30 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all text-center active:scale-95"
              >
                Download SME Guide
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-white/5 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
      </article>
    </div>
  );
}
