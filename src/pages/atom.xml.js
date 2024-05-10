import rss from "@astrojs/rss";
import { SITE } from "../consts";
import { posts } from "@/scripts/collection-workaround";
import { marked } from "marked";

export async function GET(context) {
	let filtered_posts = posts
		.sort((a, b) => {
			return b.data.pubDate - a.data.pubDate;
		})
		.slice(0, 10);
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site,
		items: filtered_posts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.pubDate),
			description: post.data.description,
			content: marked(post.body),
			link: `/blog/${post.slug}/`,
		})),
		stylesheet: "/rss/styles.xsl",
	});
}
