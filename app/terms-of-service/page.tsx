// TODO-VERIFY: Replace placeholder copy with owner-approved legal copy before
// launch. Have legal counsel review jurisdiction-specific requirements (Nevada
// state law, federal consumer-protection statutes). The content below is a
// generic structural draft suitable for review, NOT for publication as final.
import type { Metadata } from 'next';
import DraftBanner from '@/components/shared/DraftBanner';
import { SITE } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${SITE.name}.`,
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <>
      <DraftBanner />

      <section className="bg-light-gray border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-black">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: <em>TODO-VERIFY: date of last review</em>
          </p>
        </div>
      </section>

      <article className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-6 text-base sm:text-[17px] text-brand-black leading-relaxed">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the{' '}
              {SITE.name} website and the cleaning services we provide. By
              visiting the site or requesting service, you agree to these Terms.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Services
            </h2>
            <p>
              {SITE.name} provides cleaning services within {SITE.serviceArea.county},{' '}
              {SITE.serviceArea.state}. The scope, schedule, and price of each job
              are agreed in writing or by confirmed email before service begins.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Quotes and pricing
            </h2>
            <p>
              Quotes are based on the information you provide during the
              walkthrough or intake. If the scope changes when we arrive (for
              example, the space is significantly larger or in a different
              condition than described), we will discuss the change with you
              before proceeding or revising the price.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Scheduling and cancellation
            </h2>
            <p>
              Cancellation and rescheduling terms are agreed at the time of
              booking. We ask for reasonable advance notice for changes to
              scheduled jobs.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Property access and safety
            </h2>
            <p>
              You agree to provide safe and reasonable access to the space being
              cleaned. We will treat your home or business with care and respect
              any specific access or handling instructions provided.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Use of this website
            </h2>
            <p>
              You may use the site for personal and business purposes
              consistent with these Terms. Do not interfere with the site or
              attempt unauthorized access.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, our liability for any
              claim related to use of this site or our services is limited as
              described in the service agreement for the specific job.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. Updated versions are
              posted on this page with a revised &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Contact
            </h2>
            <p>
              Questions about these Terms? Email{' '}
              <a
                href={SITE.email.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {SITE.email.display}
              </a>{' '}
              or call{' '}
              <a
                href={SITE.phone.href}
                className="text-brand-blue font-semibold tabular-nums hover:underline"
              >
                {SITE.phone.display}
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
