import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts, postUrl } from '../lib/blog';
import { site } from '../config/site';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: post.data.tags,
      author: `${site.email} (${post.data.author})`,
    })),
    customData: `<language>en-in</language>`,
  });
}
