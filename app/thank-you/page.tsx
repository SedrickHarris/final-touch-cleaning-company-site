import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Thanks for reaching out',
  description: `Thanks for contacting ${SITE.name}. We'll be in touch shortly.`,
  alternates: { canonical: '/thank-you' },
  // Thank-you pages should not be indexed. They are confirmation surfaces
  // reached only after a successful form submission.
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="bg-light-gray min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Thanks
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-black">
          We got your request.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
          Thanks for reaching out to {SITE.name}. We&apos;ll follow up to set up a
          short walkthrough and put a real number on the job. No pressure to book.
        </p>

        <div className="mt-10 mx-auto max-w-md rounded-[14px] border border-border-subtle bg-brand-white p-6 text-left">
          <h2 className="font-display text-lg font-semibold text-brand-black">
            What happens next
          </h2>
          <ul className="mt-3 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
            <li className="flex gap-2.5">
              <span aria-hidden="true" className="text-brand-blue">•</span>
              We review your request and reach out to schedule a walkthrough.
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden="true" className="text-brand-blue">•</span>
              You get a real quote after the walkthrough. No templated rates.
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden="true" className="text-brand-blue">•</span>
              Need to reach us sooner? Call{' '}
              <a
                href={SITE.phone.href}
                className="text-brand-blue font-semibold tabular-nums hover:underline"
              >
                {SITE.phone.display}
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-blue-hover transition-colors min-h-[48px]"
          >
            Back to home
          </Link>
          <Link
            href={ROUTES.services}
            className="inline-flex items-center justify-center rounded-[10px] border-2 border-brand-black px-6 py-3.5 text-base font-semibold text-brand-black hover:bg-brand-black hover:text-white transition-colors min-h-[48px]"
          >
            See our services
          </Link>
        </div>

        <p className="mt-10 text-sm text-muted">
          Questions in the meantime?{' '}
          <a
            href={SITE.email.href}
            className="text-brand-blue font-semibold hover:underline"
          >
            {SITE.email.display}
          </a>
        </p>
      </div>
    </section>
  );
}
