// TODO-VERIFY: Replace placeholder copy with owner-approved legal copy
// before launch. Have legal counsel review jurisdiction-specific
// requirements (Nevada state law, federal: GLBA, CCPA-equivalent rules
// where applicable). The content below is a generic structural draft
// suitable for review, NOT for publication as final.
import type { Metadata } from 'next';
import DraftBanner from '@/components/shared/DraftBanner';
import { SITE } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${SITE.name}.`,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <DraftBanner />

      <section className="bg-light-gray border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-black">
            Privacy Policy
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
              {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This Privacy Policy describes how we collect,
              use, and protect information when you visit our website or contact
              us for cleaning services.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Information we collect
            </h2>
            <p>
              We may collect information you provide directly, such as your name,
              phone number, email address, service address or service area, and
              details about the cleaning service you request. We may also
              collect non-identifying technical information automatically when
              you visit the site (for example, browser type and page views).
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              How we use information
            </h2>
            <p>
              We use the information you provide to respond to inquiries,
              schedule and deliver cleaning services, send service updates,
              and improve how the site works. We do not sell your information.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Cookies and tracking
            </h2>
            <p>
              We may use cookies and similar technologies to operate the site,
              measure traffic, and improve performance. See our Cookie Policy
              for details.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Third parties
            </h2>
            <p>
              We may share limited information with service providers who help
              us run the business (for example, scheduling software, email
              providers, or analytics). We require them to handle information
              consistent with this policy.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Your choices
            </h2>
            <p>
              You can decline to provide information, request a copy of the
              information we hold about you, ask us to correct or delete it,
              and opt out of marketing communications. Reach us at{' '}
              <a
                href={SITE.email.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {SITE.email.display}
              </a>
              .
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Contact
            </h2>
            <p>
              Questions about this policy? Email{' '}
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

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Updates to this policy
            </h2>
            <p>
              We may update this policy from time to time. Updated versions are
              posted on this page with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
