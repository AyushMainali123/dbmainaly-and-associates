import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    category: z.enum(["Tax", "Audit", "Consulting", "Law"]),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorImage: z.string().optional(),
    date: z.date(),
    category: z.string(),
    readTime: z.string(),
    image: z.string(),
    featured: z.boolean().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["PDF", "Excel", "Package"]),
    category: z.string(),
    version: z.string().optional(),
    downloadUrl: z.string(),
    icon: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { services, blog, resources };
