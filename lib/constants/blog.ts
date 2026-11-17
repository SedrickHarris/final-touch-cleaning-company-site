import { posts } from '@/lib/content/blog/posts';
import { stripInline } from '@/lib/content/blog/render';
import type { BlogCategorySlug, BlogPost } from '@/lib/content/blog/types';

export const BLOG_BASE = '/blog';

export const BLOG_CATEGORIES: ReadonlyArray<{
  slug: BlogCategorySlug;
  name: string;
  description: string;
}> = [
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    description:
      'Guides to cleaning after construction, tenant improvements, and remodels, from rough cleans to final handover.',
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    description:
      'Practical guidance on cleaning offices, retail spaces, and other commercial properties.',
  },
  {
    slug: 'cleaning-faqs',
    name: 'Cleaning FAQs',
    description: 'Straightforward answers to common questions about professional cleaning.',
  },
  {
    slug: 'neighborhood-cleaning-guides',
    name: 'Neighborhood Guides',
    description: 'Cleaning guides for specific Southern Nevada neighborhoods.',
  },
];

export const categoryHref = (slug: string) => `${BLOG_BASE}/${slug}`;
export const postHref = (slug: string) => `${BLOG_BASE}/${slug}`;

/** Newest first when dates exist; undated posts keep source order after dated ones. */
export function getPublishedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getPublishedPosts().filter((p) => p.categorySlug === categorySlug);
}

/** Only categories with at least one published post. */
export function getPublishedCategories() {
  return BLOG_CATEGORIES.filter((c) => posts.some((p) => p.categorySlug === c.slug));
}

export function getCategory(slug: string) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  const published = getPublishedPosts();
  return published.find((p) => p.featured) ?? published[0];
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => !!p && p.slug !== post.slug)
    .slice(0, 3);
}

export type BlogRoute = {
  kind: 'hub' | 'category' | 'post';
  label: string;
  href: string;
  /** updatedAt, else publishedAt. Omitted when the post has neither. */
  lastModified?: string;
};

/**
 * Every published blog URL: the hub, categories with at least one published
 * post, and published posts. Single source for sitemap.xml and /sitemap.
 */
export function getBlogRoutes(): BlogRoute[] {
  return [
    { kind: 'hub', label: 'Blog', href: BLOG_BASE },
    ...getPublishedCategories().map((c) => ({
      kind: 'category' as const,
      label: c.name,
      href: categoryHref(c.slug),
    })),
    ...getPublishedPosts().map((p) => ({
      kind: 'post' as const,
      label: p.title,
      href: postHref(p.slug),
      lastModified: p.updatedAt ?? p.publishedAt,
    })),
  ];
}

/** Derived at build time: ~200 words per minute, rounded up. */
export function getReadTimeMinutes(post: BlogPost): number {
  let text = `${post.title} `;
  for (const b of post.blocks) {
    if (b.type === 'h2' || b.type === 'h3' || b.type === 'p') text += `${stripInline(b.text)} `;
    else if (b.type === 'ul') text += b.items.map(stripInline).join(' ') + ' ';
    else if (b.type === 'faq') text += b.items.map((i) => `${i.q} ${i.a}`).join(' ') + ' ';
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatPostDate(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Build guard: a post slug must never equal a category slug, because both
// resolve at /blog/[slug]. Throws at module load, which fails the build.
const categorySlugs = new Set<string>(BLOG_CATEGORIES.map((c) => c.slug));
for (const p of posts) {
  if (categorySlugs.has(p.slug)) {
    throw new Error(`Blog post slug "${p.slug}" collides with a category slug.`);
  }
}
const seen = new Set<string>();
for (const p of posts) {
  if (seen.has(p.slug)) throw new Error(`Duplicate blog post slug "${p.slug}".`);
  seen.add(p.slug);
}
