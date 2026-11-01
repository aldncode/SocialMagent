/**
 * BLOG CONTENT SETTINGS
 * ---------------------------------------------------------------------------
 * Blog posts are Markdown files in src/content/blog/. The schema below checks
 * every post's frontmatter at build time, so a typo produces a clear error.
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { site } from './config/site';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // If no author is given, the founder is used automatically.
      author: z.string().default(site.founder.name),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      // Set to true to keep a post out of the build entirely.
      draft: z.boolean().default(false),
      sources: z
        .array(
          z.object({
            title: z.string(),
            url: z.url(),
          }),
        )
        .optional(),
    }),
});

export const collections = { blog };
