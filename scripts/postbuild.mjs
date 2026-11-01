/**
 * @astrojs/sitemap writes sitemap-index.xml + sitemap-0.xml.
 * Astro requires a site map at /sitemap.xml, so this small build step copies
 * the generated index to that path. It runs after `astro build`.
 *
 * Cloudflare's auto-setup can move the Astro output to dist/client, so we
 * check that location as a fallback. A missing sitemap should not fail the
 * deploy.
 */
import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';

const candidates = [
  { source: 'dist/sitemap-index.xml', target: 'dist/sitemap.xml' },
  { source: 'dist/client/sitemap-index.xml', target: 'dist/client/sitemap.xml' },
];

let copied = false;

for (const { source, target } of candidates) {
  try {
    await access(source, constants.F_OK);
    await copyFile(source, target);
    console.log(`postbuild: created ${target} (alias of sitemap-index.xml)`);
    copied = true;
    break;
  } catch {
    // Try the next possible output directory.
  }
}

if (!copied) {
  console.warn(
    'postbuild: warning: sitemap-index.xml was not found in dist/ or dist/client/. Skipping the sitemap alias.',
  );
}
