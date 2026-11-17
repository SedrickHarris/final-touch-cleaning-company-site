import Link from 'next/link';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';
import type { BlogPost } from '@/lib/content/blog/types';
import BlogToc from './BlogToc';

export default function BlogSidebar({ post }: { post: BlogPost }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24" aria-label="Article sidebar">
      <BlogToc blocks={post.blocks} />

      <div className="rounded-[16px] bg-soft-blue p-6">
        <p className="font-display text-xl font-semibold text-brand-black">
          Get a free quote
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Tell us about your project and we will walk through the scope with you.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <Link
            href={ROUTES.freeQuote}
            className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-brand-blue px-5 py-3 text-base font-semibold !text-white transition-colors hover:bg-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {CTAS.primary}
          </Link>
          <a
            href={SITE.phone.href}
            className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-brand-black px-5 py-3 text-base font-semibold !text-brand-black tabular-nums transition-colors hover:bg-brand-black hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {CTAS.call} · {SITE.phone.display}
          </a>
        </div>
      </div>

      <div className="rounded-[16px] border border-border-subtle bg-brand-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          Related service
        </p>
        <Link
          href={post.pillar.href}
          className="mt-2 flex min-h-[44px] items-center font-display text-lg font-semibold text-brand-black hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          {post.pillar.label}
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </aside>
  );
}
