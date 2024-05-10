import { posts } from "./collection-workaround";

export function getTagsInfo() {
	const tagsInfo = new Map<string, number>();
	posts.map((post) => {
		if (!post.data.tags) return;
		if (typeof post.data.tags === "string") {
			tagsInfo.set(post.data.tags, (tagsInfo.get(post.data.tags) || 0) + 1);
		} else {
			(post.data.tags as string[]).forEach((tag) => {
				tagsInfo.set(tag, (tagsInfo.get(tag) || 0) + 1);
			});
		}
	});
	return tagsInfo;
}
