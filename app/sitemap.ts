// Generated at build time from app/**/page.tsx.
// - Excludes noindex pages (source contains `index: false`), e.g. /sitemap and /thank-you.
// - Excludes move-out routes. Remove that filter after the move-out deletion lands.
// Output is url only: there is no real per-page date source, so no lastmod.
import type { MetadataRoute } from 'next';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { SITE } from '@/lib/constants/site';

export const dynamic = 'force-static';

const appDir = join(process.cwd(), 'app');

/** Recursively collect every page.tsx under app/. */
function findPageFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...findPageFiles(full));
    } else if (entry.name === 'page.tsx') {
      out.push(full);
    }
  }
  return out;
}

/** Convert an app/.../page.tsx path into a route path ("/" for the root). */
function fileToRoute(file: string): string {
  const segments = relative(appDir, join(file, '..')).split(sep).filter(Boolean);
  return '/' + segments.join('/');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = findPageFiles(appDir)
    .filter((file) => {
      const route = fileToRoute(file);
      // Skip route groups "(group)" and dynamic "[param]" segments.
      if (/[()[\]]/.test(route)) return false;
      // Skip move-out routes (being deleted).
      if (route.includes('move-out')) return false;
      // Skip noindex pages.
      if (/index:\s*false/.test(readFileSync(file, 'utf8'))) return false;
      return true;
    })
    .map(fileToRoute);

  return Array.from(new Set(routes))
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
    .map((route) => ({ url: route === '/' ? `${SITE.url}/` : `${SITE.url}${route}` }));
}
