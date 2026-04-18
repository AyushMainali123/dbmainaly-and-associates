"use server";

import { getBlogsByCategory as getBlogsByCategoryUtil } from "@/utils/blog";

export async function getBlogsByCategoryAction(categoryId?: number, page?: number) {
  return await getBlogsByCategoryUtil(categoryId, page);
}
