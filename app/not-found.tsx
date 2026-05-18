import Link from 'next/link';
import type { Metadata } from 'next';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="bg-light-gray min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          404 · Page not found
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-black">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 text-lg text-muted">
          It may have moved or never existed. Try one of these instead, or get in touch.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-6 py-3.5 text-base font-semibold text-brand-white hover:bg-brand-blue-hover transition-colors"
          >
            Back to home
          </Link>
          <Link
            href={ROUTES.freeQuote}
            className="inline-flex items-center justify-center rounded-[10px] border-2 border-brand-black px-6 py-3.5 text-base font-semibold text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors"
          >
            {CTAS.primary}
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted">
          Or call{' '}
          <a href={SITE.phone.href} className="text-brand-blue font-semibold">
            {SITE.phone.display}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
