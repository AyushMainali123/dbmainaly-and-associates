import type { Author, Blog, BlogCategory, Media } from "@/payload-types";
import { getPayloadClient } from "@/utils/payload";

export type BlogListItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  authorName: string;
  authorDesignation: string;
  authorImageUrl: string;
  categoryName: string;
  categoryId: string | number;
  publishedAt: string;
  readTime: number;
  isTrending: boolean;
  tags: string[];
};

export type BlogDetailItem = BlogListItem & {
  contentText: string;
  tableOfContents: { label: string; anchor: string }[];
};

const FALLBACK_IMAGE = "https://placehold.co/1200x800";
const FALLBACK_AUTHOR_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_hwUFdLPZHuo1qZ139khpVptrEe3uYE_WSmAoZ_2ZJvZRXFag0az1QsDrF_vlBzNamrAx2TtlIApixz-zqADG4EH7G0dtUmnucaRWKclKtLrd8EU2R3NkI3fmK0r47p_9F2RexetaZH0SDih9dCecTol0eFr6AhqgwyQi8LYRaEjRthLONDQ6hWuLErtqsIXvQs5MbGGMFge9lQhAxGsCK3-1EORGYhiy2DmYwSWHoyD4mE1HlWqyWm0YtThvk7b0bvpBJ3CO5A";

function asMedia(value: number | Media | undefined | null): Media | null {
  return value && typeof value === "object" ? value : null;
}

function asAuthor(value: number | Author | undefined | null): Author | null {
  return value && typeof value === "object" ? value : null;
}

function firstCategoryName(categories: Blog["categories"]): string {
  if (!categories?.length) return "Uncategorized";
  const first = categories[0];
  if (first && typeof first === "object") {
    return (first as BlogCategory).name;
  }
  return "Uncategorized";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function lexicalToHtml(value: Blog["content"]): string {
  if (!value || !value.root || !Array.isArray(value.root.children)) return "";

  const renderNodes = (nodes: any[]): string => {
    return nodes
      .map((node) => {
        if (node.type === "text") {
          let text = node.text || "";
          if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
          if (node.format & 2) text = `<em>${text}</em>`; // Italic
          if (node.format & 4) text = `<u>${text}</u>`; // Underline
          if (node.format & 8) text = `<strike>${text}</strike>`; // Strikethrough
          return text;
        }

        if (Array.isArray(node.children)) {
          const childrenHtml = renderNodes(node.children);
          switch (node.type) {
            case "paragraph":
              return `<p>${childrenHtml}</p>`;
            case "heading": {
              const textContent = node.children
                .map((child: any) => child.text || "")
                .join("");
              const id = slugify(textContent);
              const Tag = node.tag || "h1";
              return `<${Tag} id="${id}">${childrenHtml}</${Tag}>`;
            }
            case "list": {
              const Tag = node.listType === "bullet" ? "ul" : "ol";
              return `<${Tag}>${childrenHtml}</${Tag}>`;
            }
            case "listitem":
              return `<li>${childrenHtml}</li>`;
            case "quote":
              return `<blockquote>${childrenHtml}</blockquote>`;
            case "link":
              return `<a href="${node.url}">${childrenHtml}</a>`;
            default:
              return childrenHtml;
          }
        }
        return "";
      })
      .join("");
  };

  return renderNodes(value.root.children);
}


export function normalizeBlogPost(post: Blog): BlogDetailItem {
  const image = asMedia(post.featuredImage);
  const author = asAuthor(post.author);
  const authorImage = author ? asMedia(author.image) : null;

  // Helper to make URLs relative to avoid Next.js "private ip" security error
  const makeRelative = (url: string | undefined | null) => {
    if (!url) return url;
    const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL;
    if (baseUrl && url.startsWith(baseUrl)) {
      return url.replace(baseUrl, "");
    }
    if (url.startsWith("http://localhost:3000")) {
      return url.replace("http://localhost:3000", "");
    }
    return url;
  };

  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    imageUrl: makeRelative(image?.url) ?? FALLBACK_IMAGE,
    imageAlt: image?.alt ?? post.title,
    authorName: author?.name ?? "Unknown Author",
    authorDesignation: author?.designation ?? "Author",
    authorImageUrl: makeRelative(authorImage?.url) ?? FALLBACK_AUTHOR_IMAGE,
    categoryName: firstCategoryName(post.categories),
    isTrending: post.isTrending ?? false,
    categoryId: typeof post.categories?.[0] === 'object' ? post.categories[0].id : (post.categories?.[0] ?? 'uncategorized'),
    publishedAt: post.publishedAt,
    readTime: post.readTime ?? 5,
    tags: post.tags?.map((item) => item.tag).filter(Boolean) ?? [],
    contentText: lexicalToHtml(post.content),
    tableOfContents:
      post.tableOfContents?.map((item) => ({
        label: item.label,
        anchor: item.anchor,
      })) ?? [],
  };
}

export async function getBlogCategories() {
  const payload = await getPayloadClient();

  const categoryResult = await payload.find({
    collection: "blog-categories",
    limit: 20,
    sort: "name",
  });

  return categoryResult.docs;
}


export async function getBlogPageData() {
  const payload = await getPayloadClient();

  const [blogResult, categoryResult] = await Promise.all([
    payload.find({
      collection: "blogs",
      depth: 2,
      limit: 20,
      sort: "-publishedAt",
    }),
    payload.find({
      collection: "blog-categories",
      limit: 20,
      sort: "name",
    }),
  ]);

  const posts = blogResult.docs.map(normalizeBlogPost);
  const featuredSource =
    blogResult.docs.find((post) => Boolean(post.isFeatured)) ?? blogResult.docs[0];
  const featured = featuredSource ? normalizeBlogPost(featuredSource) : undefined;

  return {
    featured,
    posts: posts.filter((post) => post.id !== featured?.id),
    categories: categoryResult.docs,
  };
}


export async function getTrendingBlogs(limit: number = 100, page: number = 1, depth: number = 2) {
  const payload = await getPayloadClient();
  const blogResult = await payload.find({
    collection: "blogs",
    depth,
    limit,
    page,
    sort: "-publishedAt",
    where: {
      isTrending: {
        equals: true,
      },
    },
  });

  return blogResult.docs.map(normalizeBlogPost);
}

export async function getBlogsByCategory(categoryId: number | undefined, page: number = 1, limit: number = 20, depth: number = 2) {
  const payload = await getPayloadClient();
  const where: any = {};

  if (categoryId) {
    where.categories = {
      equals: categoryId,
    };
  }

  const blogResult = await payload.find({
    collection: "blogs",
    depth,
    limit,
    page,
    sort: "-publishedAt",
    where
  });

  return {
    articles: blogResult.docs.map(normalizeBlogPost),
    totalPages: blogResult.totalPages
  };
}


export async function getFeaturedBlogs(page: number = 1, limit: number = 2, depth: number = 2) {
  const payload = await getPayloadClient();
  const blogResult = await payload.find({
    collection: "blogs",
    depth,
    limit,
    page,
    sort: "-publishedAt",
    where: {
      isFeatured: {
        equals: true,
      },
    },
  });
  return blogResult.docs.map(normalizeBlogPost);
}


export async function getBlogBySlug(slug: string) {
  const payload = await getPayloadClient();
  const blogResult = await payload.find({
    collection: "blogs",
    depth: 2,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const first = blogResult.docs[0];
  return first ? normalizeBlogPost(first) : null;
}
