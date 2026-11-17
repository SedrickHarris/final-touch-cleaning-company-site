import Link from 'next/link';
import { BLOG_BASE, categoryHref, getPublishedCategories } from '@/lib/constants/blog';

type Props = {
  /** Active category slug, or undefined for "All posts". */
  activeSlug?: string;
};

const base =
  'inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue';

export default function BlogCategoryChips({ activeSlug }: Props) {
  const categories = getPublishedCategories();
  const chip = (active: boolean) =>
    `${base} ${active ? 'bg-brand-blue text-white hover:bg-brand-blue-hover' : 'bg-soft-blue text-brand-blue hover:bg-brand-blue hover:text-white'}`;

  return (
    <nav aria-label="Blog categories">
      <ul className="flex flex-wrap gap-3">
        <li>
          <Link
            href={BLOG_BASE}
            className={`${chip(!activeSlug)} ${!activeSlug ? '!text-white' : ''}`}
            aria-current={!activeSlug ? 'page' : undefined}
          >
            All posts
          </Link>
        </li>
        {categories.map((c) => {
          const active = c.slug === activeSlug;
          return (
            <li key={c.slug}>
              <Link
                href={categoryHref(c.slug)}
                className={`${chip(active)} ${active ? '!text-white' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
