// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep the site URL in sync with src/config/site.ts.
export default defineConfig({
  site: 'https://socialmagent.online',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // The 404 page should never appear in search results.
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/404'),
    }),
  ],
  build: {
    format: 'directory',
  },
  image: {
    // Astro's built-in Sharp service optimises local images at build time.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
