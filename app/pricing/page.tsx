import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Cleaning Service Pricing | Final Touch | Las Vegas, NV',
  description:
    'Final Touch provides custom quotes for every cleaning job. No published rate card. Request a free, no-obligation estimate for your space. Call (702) 444-5077.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Cleaning Service Pricing | Final Touch | Las Vegas, NV',
    description:
      'Final Touch prices every cleaning job by confirmed scope. No flat rates, no hourly guesses. Request a free estimate for your space across Clark County, NV.',
    type: 'website',
    url: `${SITE.url}/pricing`,
  },
};

const pricingFactors = [
  'Size of the space (total square footage)',
  'Service type requested (deep clean, post-construction, recurring janitorial, move-out)',
  'Current condition of the space',
  'Frequency of service (one-time or recurring)',
  'Scheduling and access requirements',
];

const services = [
  { label: 'Commercial office cleaning', href: `${ROUTES.services}/commercial-office-cleaning` },
  { label: 'Janitorial services',        href: `${ROUTES.services}/janitorial-services` },
  { label: 'Post-construction cleanup',  href: `${ROUTES.services}/post-construction-cleanup` },
  { label: 'Move-in cleaning',           href: `${ROUTES.services}/move-in-cleaning` },
  { label: 'Move-out cleaning',          href: `${ROUTES.services}/move-out-cleaning` },
  { label: 'Deep cleaning',              href: `${ROUTES.services}/deep-cleaning` },
  { label: 'Retail space cleaning',      href: `${ROUTES.services}/retail-space-cleaning` },
];

const faq = [
  {
    q: 'Does Final Touch charge by the hour or by the job?',
    a: 'Final Touch prices by confirmed job scope, not by the hour. The quote is based on the specific space, service type, and condition confirmed during the walkthrough. This means the price agreed to before the job starts is the price for the completed work, not an estimate that grows as hours accumulate.',
  },
  {
    q: 'Is the quote free and does it require a commitment?',
    a: `Yes, the quote is free and no commitment is required to receive one. Scott or Nicole will walk through the space, confirm the scope, and provide a price. You decide whether to proceed. There is no charge for the estimate and no obligation to book.`,
  },
  {
    q: 'What factors most affect the cost of a cleaning job?',
    a: 'The main factors are the size of the space, the type of service, and the current condition of the space. A post-construction cleanup on a large new build requires more time and materials than a routine office visit. Frequency also matters: recurring service is typically scoped differently from a single one-time visit.',
  },
  {
    q: 'Is the quoted price the final price?',
    a: `Yes, for the scope confirmed during the walkthrough. Final Touch does not add charges for items that were part of the agreed scope. If conditions in the space differ significantly from the walkthrough, ${SITE.owners} will discuss any scope adjustment before work begins, not after it is completed.`,
  },
  {
    q: 'Does pricing vary by location within Clark County?',
    a: `Final Touch serves Las Vegas, Henderson, North Las Vegas, and Boulder City at the same rate structure. Location within ${SITE.serviceArea.county} is not a pricing factor. The scope of work and the service type are the primary inputs into every quote.`,
  },
];

// FAQPage: generated from the faq array above.
// No Offer schema: no dollar amounts confirmed per no-fake-data-policy.md.
// No AggregateRating/Review schema.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Pricing"
        image={{
          src: '/images/builders/pricing-commercial-cleaning-hero-image.webp',
          alt: 'Free cleaning quote and walkthrough — Final Touch Cleaning Company, Las Vegas NV',
        }}
        heading="How Cleaning Service Pricing Works at Final Touch"
        sub="Final Touch Cleaning Company prices every job based on the confirmed scope of work, the type of service, and the condition of the space. There is no standard rate card because no two jobs are identical. The fastest way to get an accurate price is to request a free quote."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      {/* Section 1: Why scope-based pricing */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why scope-based pricing"
            heading="Why cleaning jobs are priced by scope."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            The size of a space, the service type, the current condition, and the scheduling
            requirements all affect how long a job takes and what it requires. A published hourly
            rate or flat fee cannot account for these differences without either overcharging
            straightforward jobs or underpricing complex ones. Scope-based pricing keeps every quote
            accurate and honest.
          </p>
        </div>
      </section>

      {/* Section 2: What affects the price */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What goes into a quote"
            heading="What affects the price of a cleaning job."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            Five factors go into every Final Touch quote. Scott or Nicole will walk through all five
            during the free walkthrough. Nothing is estimated blindly.
          </p>
          <ul className="mt-6 space-y-3 text-base text-brand-black leading-relaxed">
            {pricingFactors.map((factor) => (
              <li key={factor} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: What the quote covers */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="No surprises" heading="What the quote covers." />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            The Final Touch quote covers the full scope confirmed during the walkthrough. There are
            no add-on charges for items that were part of the agreed scope. If the scope changes
            after the walkthrough, the quote is updated before work begins, not added to the invoice
            afterward.
          </p>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.cleaningProcess} className="font-semibold text-brand-blue hover:underline">
              How our cleaning process works →
            </Link>
          </p>
        </div>
      </section>

      {/* Mid-page inline CTA */}
      <div className="bg-[#EAF3FF]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-base font-semibold text-brand-black">
            Ready to get an accurate price for your space?
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-[#164F96] transition-colors"
            >
              {CTAS.estimate}
            </Link>
            <a
              href={SITE.phone.href}
              className="inline-flex items-center justify-center rounded-[10px] border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
            >
              {CTAS.call} · {SITE.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Section 4: Services with custom quotes */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="All seven services"
            heading="Services with custom quotes."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides custom quotes for all seven services. Each has different scope and
            time requirements, which is why pricing is confirmed per job rather than published as a
            flat rate.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="font-semibold text-brand-blue hover:underline text-base"
                >
                  {s.label} →
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              See all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      {/* Section 5: How to request a price */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Get started"
            heading="How to request a price for your space."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            Call (702) 444-5077, email info@finaltouchcleaningteam.com, or complete the quote form on
            this site. Describe the space, the service type, and the preferred timing. Scott or
            Nicole will follow up to schedule a walkthrough and confirm the quote before any work
            begins.
          </p>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.ourTeam} className="font-semibold text-brand-blue hover:underline">
              Meet Scott and Nicole →
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link href={ROUTES.contact} className="font-semibold text-brand-blue hover:underline">
              Contact the team →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="Pricing questions answered"
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
        heading="Get an accurate price for your space."
        sub={`Request a free, no-obligation quote or call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
