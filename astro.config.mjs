// @ts-check
import { defineConfig } from 'astro/config';

// Fully static site. No adapter: output goes to ./dist for Cloudflare Pages assets.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
});
