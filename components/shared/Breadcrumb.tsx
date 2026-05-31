import Link from 'next/link';
import { SITE } from '@/lib/constants/site';

export type BreadcrumbItem = {
  label: string;
  /** Path (e.g. "/services"). Omit on the current page — it renders as plain text. */
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD.
 *
 * - Renders a `nav > ol` with `aria-label="Breadcrumb"`; the final item gets
 *   `aria-current="page"` and is not a link.
 * - Emits one BreadcrumbList JSON-LD node whose `item` ids are full absolute
 *   URLs built from SITE.url. This is the single source of breadcrumb schema
 *   on the page (per-page schema-only BreadcrumbList blocks were removed).
 * - href values are paths ("/services"); the homepage uses "/".
 */
export default function Breadcrumb({ items }: Props) {
  const absolute = (href: string) =>
    href === '/' ? `${SITE.url}/` : `${SITE.url}${href}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absolute(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="font-body text-sm text-muted">
      <ol className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-2 gap-y-1 px-4 sm:px-6 lg:px-10 xl:px-12 py-3">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-x-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-blue transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className="text-brand-black">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-border-subtle">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
