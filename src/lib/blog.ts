/**
 * Small helpers shared by the blog pages.
 * You should not need to edit this file to publish a post.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../config/site';

export type BlogPost = CollectionEntry<'blog'>;

/** Number of posts shown on each blog index page. */
export const POSTS_PER_PAGE = 4;

/** All published posts, newest first. Drafts are always excluded. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

/** The URL-safe identifier Astro gives each Markdown file. */
export function postSlug(post: BlogPost): string {
  return post.id;
}

export function postUrl(post: BlogPost): string {
  return `/blog/${postSlug(post)}/`;
}

/** Format a date consistently, regardless of the build machine's timezone. */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Rough reading time based on the Markdown body, rounded up to whole minutes. */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_~|-]/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Turn a tag such as "Social media" into "social-media". */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function tagUrl(tag: string): string {
  return `/blog/tag/${tagSlug(tag)}/`;
}

/** Unique tags with their original labels and slugs. */
export function collectTags(posts: BlogPost[]) {
  const map = new Map<string, { label: string; slug: string; count: number }>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagSlug(tag);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { label: tag, slug, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) => a.label.localeCompare(b.label));
}

/** Related posts first by shared tags, then by recency. */
export function relatedPosts(current: BlogPost, all: BlogPost[], limit = 3) {
  const currentTags = new Set(current.data.tags.map(tagSlug));
  return all
    .filter((post) => post.id !== current.id)
    .map((post) => ({
      post,
      shared: post.data.tags.filter((tag) => currentTags.has(tagSlug(tag))).length,
    }))
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime(),
    )
    .slice(0, limit)
    .map(({ post }) => post);
}

export const authorName = (post: BlogPost) => post.data.author || site.founder.name;
