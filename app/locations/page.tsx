import type { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { LOCATIONS, ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Service Area',
  description: `Final Touch serves all of ${SITE.serviceArea.county}, Nevada, including ${SITE.serviceArea.cities.join(', ')}. Local team, free quotes. Call ${SITE.phone.display}.`,
  alternates: { canonical: '/locations' },
};

const faq = [
  {
    q: 'What areas does Final Touch serve?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}.`,
  },
  {
    q: 'Does Final Touch serve Las Vegas?',
    a: 'Yes. Las Vegas is one of our primary service cities. Homes, offices, retail, post-construction sites, and ongoing janitorial routes across the city.',
  },
  {
    q: 'Does Final Touch serve Henderson?',
    a: 'Yes. Henderson is one of our primary service cities. Same team and same finishing standard across Henderson neighborhoods and business corridors.',
  },
  {
    q: 'Does Final Touch serve North Las Vegas?',
    a: 'Yes. North Las Vegas is in our primary service area. Residential and commercial cleaning, on the same schedule and finishing checklist as the rest of the county.',
  },
  {
    q: 'Does Final Touch serve Boulder City?',
    a: 'Yes. Boulder City is in our primary service area. Local cleaning for Boulder City homes and storefronts.',
  },
  {
    q: 'Does Final Touch serve all of Clark County?',
    a: `Yes. We work across ${SITE.serviceArea.county}, with the same team and the same finishing standard regardless of which part of the county you're in.`,
  },
  {
    q: 'How does Final Touch handle service areas without a public storefront?',
    a: 'Final Touch is a service-area business. We come to you. There is no public storefront to visit, but our team is based in Southern Nevada and we cover every part of Clark County on the same schedule.',
  },
  {
    q: 'Do you have a separate team for each city?',
    a: 'No. We run one team across the whole county. Crew scheduling is based on location and timing, but the standards, training, and finishing checklist are the same everywhere.',
  },
  {
    q: 'Do you travel outside Clark County?',
    a: `${SITE.serviceArea.county} is our verified service area. If you have a job just outside the county and want to ask, call ${SITE.phone.display} and we'll talk through it.`,
  },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Service Area', item: `${SITE.url}/locations` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function LocationsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Service area"
        heading={`Cleaning across ${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}.`}
        sub={`Final Touch serves every part of ${SITE.serviceArea.county}: ${SITE.serviceArea.cities.join(', ')}. Same team, same finishing standard, regardless of where you are in the county.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Where we work"
            heading="Five service areas. One standard."
            sub={`We cover every corner of ${SITE.serviceArea.county}, Nevada, from new-build communities in the southwest to downtown corridors and Boulder City.`}
          />

          {/* TODO-BATCH-4: Per-city pages at /locations/<city> are not yet
              built. Cards link to those routes. They will 404 until Batch 4
              ships. */}
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug} className="h-full">
                <ServiceCard
                  href={loc.href}
                  name={loc.name}
                  description={loc.shortDescription}
                />
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm text-muted">
            Not sure if you&apos;re in our service area? Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold tabular-nums hover:underline"
            >
              {SITE.phone.display}
            </a>{' '}
            and we&apos;ll let you know.
          </p>
        </div>
      </section>

      {/* One team, county-wide */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How we cover the county"
            heading="One team. County-wide."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Final Touch isn&apos;t a franchise pool of independent contractors
              or a marketplace of subcontractors. {SITE.owners} run one team
              across all of {SITE.serviceArea.county}: the same training, the
              same finishing checklist, the same owner-checked standards.
            </p>
            <p>
              Crew scheduling shifts based on where the jobs are on a given day.
              A house in {SITE.serviceArea.cities[0]} in the morning, an office
              in {SITE.serviceArea.cities[1]} in the afternoon, a
              post-construction site in {SITE.serviceArea.cities[2]} the next
              day. What doesn&apos;t shift is what a finished space looks like
              when we&apos;re done.
            </p>
            <p>
              Final Touch is a service-area business, so we come to you. There
              isn&apos;t a public storefront to visit, but if you&apos;re in{' '}
              {SITE.serviceArea.county}, we&apos;re in your service area.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faq} heading="Questions about our service area" defaultOpenFirst />

      <CTASection
        heading={`Ready to bring the details to your part of ${SITE.serviceArea.county}?`}
        sub={`Free quotes for cleaning across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
