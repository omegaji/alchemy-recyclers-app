import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../utils/blog';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} Blog`,
    description: 'Guides on e-waste recycling and precious metal recovery in Vadodara and Gujarat.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: '<language>en-in</language>',
  });
}
