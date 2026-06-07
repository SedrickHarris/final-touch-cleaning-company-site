// Emits the site's public, indexable URLs as a JSON array on stdout.
//
// Source of truth is the App Router file tree (app/**/page.tsx), NOT the static
// public/sitemap.xml — the sitemap is hand-maintained and lags behind new pages,
// so deriving from the route tree keeps IndexNow submissions automatically in sync.
//
// A route is excluded when its page sets `robots: { index: false }` (noindex),
// or when it contains a route group `(group)` or dynamic `[param]` segment.
//
// Usage: node scripts/generate-indexnow-urls.mjs > urls.json

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, sep } from "node:path";

const BASE_URL = "https://www.finaltouchcleaningteam.com";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const appDir = join(scriptDir, "..", "app");

/** Recursively collect every page.tsx under app/. */
function findPageFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...findPageFiles(full));
    } else if (entry.name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

/** Convert an app/.../page.tsx path into a route path ("/" for the root). */
function fileToRoute(file) {
  const segments = relative(appDir, dirname(file)).split(sep).filter(Boolean);
  return "/" + segments.join("/");
}

const routes = findPageFiles(appDir)
  .filter((file) => {
    const route = fileToRoute(file);
    // Skip route groups "(group)" and dynamic "[param]" segments.
    if (/[()[\]]/.test(route)) return false;
    // Skip noindex pages.
    if (/index:\s*false/.test(readFileSync(file, "utf8"))) return false;
    return true;
  })
  .map(fileToRoute);

// Homepage first, then the rest alphabetically — stable, readable output.
const urls = routes
  .map((route) => (route === "/" ? BASE_URL + "/" : BASE_URL + route))
  .sort((a, b) => (a === BASE_URL + "/" ? -1 : b === BASE_URL + "/" ? 1 : a.localeCompare(b)));

process.stdout.write(JSON.stringify(urls, null, 2) + "\n");
