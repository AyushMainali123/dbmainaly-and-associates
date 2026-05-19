import type { Metadata } from "next";

export const DEFAULT_TITLE = "DB Mainaly & Associates | Professional Financial Excellence";
export const DEFAULT_DESCRIPTION = "Leading chartered accountancy firm providing elite audit, tax, and legal advisory across Nepal and South Asia.";

export interface PayloadSeoFields {
  title?: string | null;
  description?: string | null;
  image?: any | null; // Media object or ID/number
  noindex?: boolean | null;
}

export function constructMetadata(
  seo: PayloadSeoFields | undefined | null,
  fallback: { title: string; description: string } = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  }
): Metadata {
  const title = seo?.title || fallback.title;
  const description = seo?.description || fallback.description;

  // Resolve the image URL safely (supporting nested Media object or relative path)
  let imageUrl: string | undefined;
  if (seo?.image) {
    if (typeof seo.image === "object" && seo.image !== null && seo.image.url) {
      imageUrl = seo.image.url;
    } else if (typeof seo.image === "string") {
      imageUrl = seo.image;
    }
  }

  // Convert to absolute URL for social scrapers if needed
  const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://dbmainaly.com";
  const makeAbsolute = (url: string | undefined | null): string | undefined => {
    if (!url) return undefined;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  const absoluteImageUrl = makeAbsolute(imageUrl);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(absoluteImageUrl ? { images: [{ url: absoluteImageUrl }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(absoluteImageUrl ? { images: [absoluteImageUrl] } : {}),
    },
    ...(seo?.noindex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}
