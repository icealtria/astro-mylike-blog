import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { posts } from '@/scripts/collection-workaround';

export async function get(context) {
	let filtered_posts = posts.sort((a, b) => {
		return b.data.pubDate - a.data.pubDate
	}).slice(0, 10);
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site,
		items: filtered_posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
