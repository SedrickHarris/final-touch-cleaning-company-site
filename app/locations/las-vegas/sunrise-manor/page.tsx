import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { LOCATIONS, NEIGHBORHOODS, ROUTES, SERVICES } from '@/lib/constants/routes';
import Breadcrumb from '@/components/shared/Breadcrumb';

// Parent city derived from this neighborhood's own NEIGHBORHOODS record —
// single source of truth, no hardcoded parent slug.
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'sunrise-manor',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Commercial Cleaning in Sunrise Manor, Las Vegas, NV',
  description:
    'Family-owned commercial cleaning in Sunrise Manor, Las Vegas, NV. Move-in, move-out, deep cleaning, and janitorial. Licensed and insured. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas/sunrise-manor' },
  openGraph: {
    title: 'Commercial Cleaning in Sunrise Manor, Las Vegas, NV | Final Touch',
    description:
      'Family-owned commercial cleaning in Sunrise Manor, Las Vegas, NV. Move-in, move-out, deep cleaning, and janitorial. Licensed and insured. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/sunrise-manor`,
  },
};

// Sunrise Manor is established + rental-dense -> commercial/janitorial first, then turnover-driven move-out/deep. Differentiates from Spring Valley (retail-corridor) and Centennial Hills (new-build) leans.
const SUNRISE_MANOR_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Sunrise Manor in Las Vegas?',
    a: `Yes, Final Touch Cleaning Company serves Sunrise Manor as part of our Las Vegas and Las Vegas Valley service area. We are a family-owned, owner-led commercial cleaning company run by Scott and Nicole Maland, cleaning both homes and businesses across the east side of the Las Vegas Valley. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer in Sunrise Manor?',
    a: 'We offer commercial and office cleaning, janitorial programs, move-out and move-in cleaning, deep cleaning, retail space cleaning, and post-construction cleanup. Both businesses and households in Sunrise Manor can request any of these services. Tell us your property type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'Do you clean apartments and rental turnovers in Sunrise Manor?',
    a: 'Yes. Sunrise Manor has many apartment and rental communities, so we regularly handle move-out and move-in cleans for tenants, landlords, and property managers. We clean kitchens, bathrooms, floors, and fixtures top to bottom so the unit is ready for inspection or the next resident. Ask about recurring turnover cleaning for multiple units.',
  },
  {
    q: 'Can you clean our Sunrise Manor business after hours?',
    a: 'Yes. We can schedule cleaning after hours or overnight so your business day is never interrupted. This works well for the offices, retail spaces, and service businesses across Sunrise Manor that need a consistent, professional clean without disrupting customers or staff during open hours.',
  },
  {
    q: 'How do I get a cleaning quote for Sunrise Manor?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your property type, square footage, and what you need cleaned, and we will provide a free estimate for your Sunrise Manor home or business. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/las-vegas/sunrise-manor`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Sunrise Manor, Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned commercial cleaning company serving Sunrise Manor, Las Vegas, NV.',
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Locations', href: '/locations' },
  { label: 'Las Vegas', href: '/locations/las-vegas' },
  { label: 'Sunrise Manor' },
];

export default function SunriseManorPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        eyebrow="East Las Vegas Valley"
        heading="Commercial Cleaning Services in Sunrise Manor, Las Vegas, NV"
        sub="Family-owned commercial, janitorial, and home cleaning for the east Las Vegas Valley. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/sunrise-manor-las-vegas-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Sunrise Manor, Las Vegas, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides commercial, office, and home cleaning throughout
            Sunrise Manor, a large established community on the east side of the Las Vegas Valley. We
            are a family-owned, owner-led company run by Scott and Nicole Maland, serving Sunrise
            Manor as part of our Las Vegas and Clark County service area. Request a free quote or
            call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Sunrise Manor prose (public knowledge only) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="About Sunrise Manor" heading="Cleaning built for Sunrise Manor." />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Sunrise Manor is one of the largest and most established communities on the east side of
              the Las Vegas Valley, stretching toward the foothills below Frenchman Mountain. It is a
              primarily residential area with a deep mix of long-standing single-family neighborhoods,
              apartment and rental communities, and the local businesses, offices, and retail that
              serve them. The housing stock is mostly established rather than new-build.
            </p>
            <p>
              That mix shapes the cleaning we do here. The area&apos;s many apartment and rental
              communities drive steady demand for move-out and deep cleaning as residents turn over,
              while established households book recurring and seasonal cleans. Local offices, retail
              spaces, and service businesses rely on routine commercial and janitorial programs to
              stay presentation-ready. Whether you are handing back the keys on a rental or keeping a
              storefront clean for customers, Final Touch brings the same detail-focused standard to
              every property.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in Sunrise Manor — ServiceCard grid (commercial/turnover-led) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Commercial cleaning services in Sunrise Manor."
            sub="Every service is available to Sunrise Manor homes and businesses. Reordered by what Sunrise Manor customers request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SUNRISE_MANOR_SERVICES.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard
                  href={s.href}
                  name={s.name}
                  description={s.shortDescription}
                  image={s.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why businesses and families in Sunrise Manor choose Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Sunrise Manor businesses and residents choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Family-owned and local',
                body: 'Final Touch is owned and run by Scott and Nicole Maland. You work with a local team that treats your home or business like its own, not a faceless franchise.',
              },
              {
                heading: 'Detail-focused by name',
                body: 'It is in our name: the final touch. We clean the corners, edges, and finishes other services skip, because small details bring big results.',
              },
              {
                heading: 'Guaranteed and flexible',
                body: 'Every clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or return within 24 hours. We are licensed and insured, and we can schedule after-hours or overnight cleans so your business day is never interrupted.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Serving section — parent city + Tier 2 service links */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Serving Sunrise Manor and the wider Las Vegas Valley."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/las-vegas combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Sunrise Manor is part of our broader Las Vegas and Clark County service area. Explore our{' '}
            <Link href={PARENT_CITY.href} className="text-brand-blue font-semibold hover:underline">
              Las Vegas cleaning services
            </Link>{' '}
            for the full picture, or jump straight to{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              commercial and office cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial services
            </Link>
            ,{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning
            </Link>
            , or{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              deep cleaning
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Request a free quote
            </Link>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ — 5 Sunrise Manor-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in Sunrise Manor."
          />
          <div className="mt-8">
            <FAQSection items={faq} defaultOpenFirst />
          </div>
          <p className="mt-8 text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="text-brand-blue font-semibold hover:underline">
              Read our full FAQ
            </Link>{' '}
            or{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              call {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* 8. Final CTA — no duplicate form */}
      <CTASection
        heading="Ready for a spotless Sunrise Manor home or business?"
        sub="Request a free quote or call our team today. We serve Sunrise Manor and the wider Las Vegas Valley."
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
