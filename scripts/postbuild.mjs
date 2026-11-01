/**
 * @astrojs/sitemap writes sitemap-index.xml + sitemap-0.xml.
 * Astro requires a site map at /sitemap.xml, so this small build step copies
 * the generated index to that path. It runs after `astro build`.
 */
import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';

const source = 'dist/sitemap-index.xml';
const target = 'dist/sitemap.xml';

try {
  await access(source, constants.F_OK);
  await copyFile(source, target);
  console.log('postbuild: created dist/sitemap.xml (alias of sitemap-index.xml)');
} catch {
  console.error(
    'postbuild: dist/sitemap-index.xml was not found. Check the @astrojs/sitemap integration.',
  );
  process.exit(1);
}
