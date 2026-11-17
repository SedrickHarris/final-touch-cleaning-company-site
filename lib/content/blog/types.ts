export type BlogCategorySlug =
  | 'post-construction-cleaning'
  | 'commercial-cleaning'
  | 'cleaning-faqs'
  | 'neighborhood-cleaning-guides';

export type BlogFaqItem = { q: string; a: string };

/**
 * Inline text in `p` and `ul` items supports two patterns only:
 *   [label](/internal-path)  -> next/link
 *   **bold**                 -> <strong>
 * Everything else is escaped. No raw HTML.
 */
export type BlogBlock =
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: ReadonlyArray<string> }
  | { type: 'cta' }
  | {
      type: 'faq';
      heading: string;
      /** Optional line under the FAQ; supports the inline link pattern. */
      footer?: string;
      items: ReadonlyArray<BlogFaqItem>;
    };

export type BlogPost = {
  slug: string;
  categorySlug: BlogCategorySlug;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  /** Only published posts live in code. */
  status: 'published';
  featured?: boolean;
  /** ISO date (YYYY-MM-DD). Omit when not owner-confirmed. */
  publishedAt?: string;
  updatedAt?: string;
  /** Owner-supplied article image. Falls back to the placeholder when omitted. */
  image?: { src: string; alt: string };
  pillar: { label: string; href: string };
  /** Published post slugs only. */
  relatedSlugs: ReadonlyArray<string>;
  blocks: ReadonlyArray<BlogBlock>;
};
