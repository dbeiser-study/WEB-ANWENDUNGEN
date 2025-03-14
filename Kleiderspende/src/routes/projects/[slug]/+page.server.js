import { error } from '@sveltejs/kit';
import { posts } from '../../projectData.js';

export function load({params}) {
	console.log("ich gehe auch rein!");
	console.log(params.slug);
	const post = posts.find((post)=>post.slug === params.slug);
	

	if(!post) error(404)
	return {post};
}
