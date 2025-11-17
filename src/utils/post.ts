import { getCollection } from "astro:content";

export const all_posts = await getCollection<"blog">("blog");

export const posts = all_posts.filter((entry) =>
  !entry.slug.includes("_") && (import.meta.env.DEV ? true : !entry.data.draft)
);
