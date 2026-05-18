// TODO-VERIFY: Replace placeholder copy with owner-approved legal copy before
// launch. Update the listed cookie categories to reflect the actual cookies
// in use (analytics IDs, session cookies, etc.) once analytics integrations
// are wired. Verify jurisdiction-specific consent requirements with legal
// counsel.
import type { Metadata } from 'next';
import DraftBanner from '@/components/shared/DraftBanner';
import { SITE } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Cookie policy for ${SITE.name}.`,
  alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <>
      <DraftBanner />

      <section className="bg-light-gray border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-black">
            Cookie Policy
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
              This Cookie Policy explains how {SITE.name} uses cookies and
              similar technologies on our website. It works alongside our Privacy
              Policy.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              What cookies are
            </h2>
            <p>
              Cookies are small text files placed on your device when you visit
              a website. They help the site remember your preferences and
              measure how the site is used.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Cookies we use
            </h2>
            <p>
              We use a small number of cookie categories. The specific cookies
              in use will be listed here once site analytics and integrations
              are finalized.
              <br />
              <em>TODO-VERIFY: list the specific cookies once analytics and
                third-party integrations are confirmed.</em>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential cookies</strong> — required for the site to
                function. These do not require consent.
              </li>
              <li>
                <strong>Analytics cookies</strong> — measure how the site is
                used so we can improve it.
              </li>
              <li>
                <strong>Functional cookies</strong> — remember settings such as
                language or display preferences.
              </li>
            </ul>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Managing cookies
            </h2>
            <p>
              You can control cookies through your browser settings — block all
              cookies, accept only certain categories, or delete existing
              cookies. Note that blocking essential cookies may prevent parts of
              the site from working.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Changes to this policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Updated
              versions are posted on this page with a revised &ldquo;Last
              updated&rdquo; date.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Contact
            </h2>
            <p>
              Questions about cookies? Email{' '}
              <a
                href={SITE.email.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {SITE.email.display}
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
