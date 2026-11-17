import Link from 'next/link';
import { categoryHref, formatPostDate, getCategory, getReadTimeMinutes } from '@/lib/constants/blog';
import type { BlogPost } from '@/lib/content/blog/types';

export default function BlogPostHeader({ post }: { post: BlogPost }) {
  const category = getCategory(post.categorySlug);
  const date = formatPostDate(post.publishedAt);
  const minutes = getReadTimeMinutes(post);

  return (
    <header className="bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {category && (
          <Link
            href={categoryHref(category.slug)}
            className="inline-flex min-h-[44px] items-center rounded-full bg-soft-blue px-5 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {category.name}
          </Link>
        )}
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 text-base text-muted">
          By Scott &amp; Nicole Maland
          {date && <> · <time dateTime={post.publishedAt}>{date}</time></>}
          {' · '}
          {minutes} min read
        </p>
        {/* TODO: replace with an owner-supplied project photo (21:9, object-cover). */}
        <div
          aria-hidden="true"
          className="mt-8 aspect-[21/9] w-full overflow-hidden rounded-[16px] border border-border-subtle bg-[radial-gradient(120%_80%_at_30%_20%,var(--color-soft-blue),var(--color-brand-white))]"
        />
      </div>
    </header>
  );
}
