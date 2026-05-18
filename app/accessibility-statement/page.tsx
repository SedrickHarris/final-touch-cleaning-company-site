import type { Metadata } from 'next';
import { SITE } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: `Accessibility statement for ${SITE.name}. We aim to meet WCAG 2.1 AA standards across the site.`,
  alternates: { canonical: '/accessibility-statement' },
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className="bg-light-gray border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Accessibility
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-black">
            Accessibility Statement
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: <em>TODO-VERIFY: date of last accessibility audit</em>
          </p>
        </div>
      </section>

      <article className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-6 text-base sm:text-[17px] text-brand-black leading-relaxed">
            <p>
              {SITE.name} is committed to making our website usable for everyone,
              including people with disabilities. We aim to meet the Web Content
              Accessibility Guidelines (WCAG) 2.1 Level AA across the site.
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              What we do
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use semantic HTML and clear heading hierarchy.</li>
              <li>
                Maintain sufficient color contrast (WCAG AA — body text at
                least 4.5:1; large text at least 3:1).
              </li>
              <li>
                Ensure interactive elements are keyboard accessible and show
                visible focus states.
              </li>
              <li>Provide descriptive labels for form fields and controls.</li>
              <li>Respect users&apos; reduced-motion preferences.</li>
              <li>Provide alt text for meaningful images.</li>
              <li>Design touch targets of at least 44 pixels.</li>
            </ul>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Conformance status
            </h2>
            <p>
              We work toward WCAG 2.1 Level AA conformance.
              <br />
              <em>
                TODO-VERIFY: scope of testing, third-party audit details, and
                known limitations. Update this section after a formal
                accessibility review.
              </em>
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Feedback and assistance
            </h2>
            <p>
              If you encounter an accessibility barrier on our site, or if you
              need information from the site in an alternate format, please
              contact us. We treat accessibility feedback as a priority.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Email:{' '}
                <a
                  href={SITE.email.href}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  {SITE.email.display}
                </a>
              </li>
              <li>
                Phone:{' '}
                <a
                  href={SITE.phone.href}
                  className="text-brand-blue font-semibold tabular-nums hover:underline"
                >
                  {SITE.phone.display}
                </a>
              </li>
            </ul>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black pt-6">
              Ongoing improvements
            </h2>
            <p>
              Accessibility is an ongoing effort. We review and improve the site
              as standards evolve and as we hear from people who use it.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
