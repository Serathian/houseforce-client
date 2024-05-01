import { type Payload } from '$cmstypes/common/Payload';
import { type BlogPage } from '$cmstypes//api/blog-page';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('http://localhost:1337/api/blog-pages');
	const payload: Payload<BlogPage[]> = await response.json();
	return {
		summaries: payload.data.map((post) => ({
			slug: post.id,
			title: post.attributes.Title
		}))
	};
};
