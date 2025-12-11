import rss from "@astrojs/rss";
import { SITE } from "../consts";
import { posts } from "@/utils/post";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";

export async function GET(context) {
 let filtered_posts = posts
  .filter((post) => !post.data.encrypted)
  .sort((a, b) => {
   return b.data.pubDate - a.data.pubDate;
  })
  .slice(0, 20);

 const renderers = await loadRenderers([getMDXRenderer()]);
 const container = await AstroContainer.create({ renderers });
 const items = [];
 for (const post of filtered_posts) {
  const { Content } = await post.render();
  const content = await container.renderToString(Content);
  const link = new URL(`/blog/${post.slug}/`, context.url.origin).toString();
  items.push({ ...post.data, link, content });
    }

 return rss({
  title: SITE.title,
  description: SITE.description,
  site: context.site,
  items: items,
 });
}