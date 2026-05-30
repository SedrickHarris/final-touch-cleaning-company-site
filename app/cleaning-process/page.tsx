import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Our Cleaning Process | Final Touch Cleaning | Las Vegas, NV',
  description:
    'See how Final Touch Cleaning works: quote, walkthrough, scope, cleaning visit, and the Blue Ribbon Guarantee. Serving Clark County, NV. (702) 444-5077.',
  alternates: { canonical: '/cleaning-process' },
  openGraph: {
    title: 'Our Cleaning Process | Final Touch Cleaning | Las Vegas, NV',
    description:
      'Every Final Touch job follows the same five-step process. Free quote, owner walkthrough, confirmed scope, cleaning visit, and a 100% satisfaction guarantee.',
    type: 'website',
    url: `${SITE.url}/cleaning-process`,
  },
};

const faq = [
  {
    q: 'What should I do to prepare before Final Touch arrives?',
    a: 'Clear any clutter from the surfaces you want cleaned and make sure the team can access all areas included in the confirmed scope. If you have areas to avoid or specific instructions, share them when confirming the scope before the visit. The team handles all the cleaning.',
  },
  {
    q: 'Does Final Touch use a written checklist on every job?',
    a: `Yes. Every Final Touch job runs on the same finishing checklist covering the surfaces most crews skip: baseboards, vents, switch plates, edges, corners, and glass. A consistent checklist is how the same standard is maintained across every job, every service type, and every city in ${SITE.serviceArea.county}.`,
  },
  {
    q: 'What is the Blue Ribbon Guarantee?',
    a: `The Blue Ribbon Guarantee means that if you are not fully satisfied with the completed job, contact Final Touch within 24 hours and the team will return to correct the issue at no additional charge. Call ${SITE.phone.display} or email ${SITE.email.display} to report anything that needs attention.`,
  },
  {
    q: 'What happens after the cleaning visit is finished?',
    a: 'The team completes the finishing pass and runs a quality review against the checklist before leaving. If anything does not meet the standard, the issue is corrected on the spot. You have 24 hours after the visit to report any concern and the team will return under the Blue Ribbon Guarantee.',
  },
  {
    q: 'Can the cleaning scope be adjusted after the walkthrough?',
    a: `Yes, but adjustments are easiest to make before work begins. Raise any scope questions during the walkthrough or before the team arrives. Changes after work has started depend on timing and may affect the confirmed quote. ${SITE.owners} will discuss any adjustment directly before proceeding.`,
  },
];

const steps = [
  {
    number: '01',
    name: 'Request a Free Quote',
    lead: `Contact Final Touch by phone at ${SITE.phone.display}, by email at ${SITE.email.display}, or through the quote form on this site. Describe the space, the service type, and the preferred timing. No fee, no commitment required to request a quote.`,
  },
  {
    number: '02',
    name: 'Walkthrough and Scope Confirmation',
    lead: `For most jobs, Scott or Nicole will walk through the space before providing a quote. This confirms the exact scope, surfaces anything that needs special attention, and produces an accurate price before work begins. No scope surprises once the job starts.`,
  },
  {
    number: '03',
    name: 'Cleaning Visit',
    lead: 'The Final Touch team arrives and works through the job according to the confirmed scope and checklist. Every visit ends with a finishing pass on the surfaces most crews skip.',
  },
  {
    number: '04',
    name: 'Quality Review',
    lead: 'When the job is complete, the team runs a final quality review against the checklist before leaving. If any surface does not meet the standard, the issue is corrected before the team departs.',
  },
  {
    number: '05',
    name: 'Blue Ribbon Guarantee',
    lead: 'If you are not fully satisfied after the team leaves, contact Final Touch within 24 hours of the completed job and the team will return to correct the issue at no additional charge. The 24-hour window covers after-hours and next-day follow-up. It is not a same-day emergency service.',
  },
];

const finishingChecklist = [
  'Baseboards: wiped, not just dusted',
  'Vents and switch plates: cleaned and clear',
  'Edges and corners: fully addressed',
  'Glass and fixtures: streak-free finish',
];

// HowTo: step names and text match the visible steps array exactly.
// Per pass-fail-page-quality-gates.md: HowTo only when visible numbered
// steps exist and match exactly.
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Final Touch Cleaning Works',
  step: steps.map(({ name, lead }) => ({
    '@type': 'HowToStep',
    name,
    text: lead,
  })),
};

// FAQPage: generated from the faq array above.
// Visible FAQ text and schema text share the same source.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function CleaningProcessPage() {
  return (
    <>
      <HeroSection
        eyebrow="Our Process"
        image={{
          src: '/images/builders/cleaning-process-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning process — Final Touch Cleaning Company, Las Vegas NV',
        }}
        heading="How Final Touch Cleans: A Step-by-Step Process"
        sub="Every Final Touch job follows the same five-step process, from the initial quote request through the final quality review. Owners Scott & Nicole Maland confirm the scope before work begins and back every completed job with a 100% satisfaction guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      {/* Steps */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ol className="space-y-10">
            {steps.map((step, i) => (
              <li key={step.number} className="flex gap-5 sm:gap-6">
                <span
                  aria-hidden="true"
                  className="font-display text-3xl sm:text-4xl font-semibold tabular-nums text-muted shrink-0"
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-black">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-base text-brand-black leading-relaxed">
                    {step.lead}
                  </p>
                  {i === 2 && (
                    <ul className="mt-4 space-y-2 text-base text-brand-black leading-relaxed">
                      {finishingChecklist.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
              Request a free quote →
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link href={ROUTES.ourTeam} className="font-semibold text-brand-blue hover:underline">
              About Scott and Nicole →
            </Link>
          </p>
        </div>
      </section>

      {/* Finishing pass */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="The standard"
            heading="The finishing pass."
            sub="The last portion of every Final Touch job is a pass over the surfaces that separate a cleaned space from a finished one. Baseboards wiped rather than dusted. Vents and switch plates clean. Glass streak-free. Edges and corners addressed. This finishing standard applies across every service type."
          />
          <p className="mt-8 text-sm">
            <Link
              href={ROUTES.services + '/deep-cleaning'}
              className="font-semibold text-brand-blue hover:underline"
            >
              Deep cleaning service →
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link
              href={ROUTES.services + '/post-construction-cleanup'}
              className="font-semibold text-brand-blue hover:underline"
            >
              Post-construction cleanup →
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link
              href={ROUTES.services}
              className="font-semibold text-brand-blue hover:underline"
            >
              See all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="Questions about our process"
        defaultOpenFirst
      />

      {/* FAQ footer link */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="font-semibold text-brand-blue hover:underline">
              Read all frequently asked questions →
            </Link>
          </p>
        </div>
      </div>

      <CTASection
        heading="Ready to get started?"
        sub={`Request a free quote or call ${SITE.phone.display}. No commitment required.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
