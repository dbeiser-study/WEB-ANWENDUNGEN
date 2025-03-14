import { posts } from './projectData.js';

export function load() {
	return {
		projects: posts.map((post) => ({
			slug: post.slug,
			img: post.image,
			title: post.title
		}))
	};
}
