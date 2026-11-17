import Link from 'next/link';
import { CTAS } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export default function BlogInlineCta() {
  return (
    <aside
      aria-label="Request a quote"
      className="my-10 flex flex-col gap-4 rounded-[16px] bg-soft-blue p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <p className="font-display text-xl font-semibold text-brand-black sm:text-2xl">
        Planning a post-construction clean?
      </p>
      <Link
        href={ROUTES.freeQuote}
        className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-[10px] bg-brand-blue px-6 py-3 text-base font-semibold !text-white transition-colors hover:bg-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        {CTAS.primary}
        <span aria-hidden="true" className="ml-2">→</span>
      </Link>
    </aside>
  );
}
