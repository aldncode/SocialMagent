// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fully static site. No adapter: output goes to ./dist for Cloudflare Pages assets.
export default defineConfig({
  site: 'https://socialmagent.online',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
