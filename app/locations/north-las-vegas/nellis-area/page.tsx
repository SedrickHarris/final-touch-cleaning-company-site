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

// Parent city derived from this neighborhood's own NEIGHBORHOODS record —
// single source of truth, no hardcoded parent slug.
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'nellis-area',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Nellis Area Cleaning | North Las Vegas, NV | Final Touch',
  description:
    'Family-owned home and commercial cleaning near Nellis AFB in North Las Vegas, NV. Move-in, move-out, and deep cleaning. Free quotes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/north-las-vegas/nellis-area' },
  openGraph: {
    title: 'Nellis Area Cleaning Services | North Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve the Nellis area near Nellis Air Force Base in North Las Vegas. Move-in, move-out, home, and commercial cleaning. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/north-las-vegas/nellis-area`,
  },
};

// Nellis area has real commercial corridors (Nellis Blvd, Craig Rd) -> commercial/janitorial first, then move-out AND move-in elevated to #3/#4 for the relocation- and rental-turnover-heavy character near the base. Differentiates from Sunrise Manor (move-out #3 then deep) and Aliante NLV (move-in #3 then deep).
const NELLIS_AREA_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
];

const faq = [
  {
    q: 'Does Final Touch serve the Nellis area in North Las Vegas?',
    a: `Yes, Final Touch Cleaning Company serves the Nellis area as part of our North Las Vegas and Clark County service area. We are a family-owned, owner-led company run by Scott and Nicole Maland, cleaning homes and businesses throughout the community near Nellis Air Force Base. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer in the Nellis area?',
    a: 'We offer move-out and move-in cleaning, home and deep cleaning, commercial and office cleaning, janitorial programs, retail space cleaning, and post-construction cleanup. Both households and businesses in the Nellis area can request any of these services. Tell us your property type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'Do you handle move-out and move-in cleaning for relocations near Nellis Air Force Base?',
    a: 'Yes. With many families near Nellis relocating regularly, move-out and move-in cleaning is some of our most-requested work in the area. We clean kitchens, bathrooms, floors, baseboards, and fixtures top to bottom so a home is ready for inspection at move-out, or fresh and ready when you arrive. Tell us your timeline and we will work around your move.',
  },
  {
    q: 'Do you clean rental turnovers in the Nellis area?',
    a: 'Yes. The Nellis area has many apartment and rental homes, so we regularly handle turnover cleans for tenants, landlords, and property managers. We clean the full unit top to bottom so it is ready for inspection or the next resident. Ask about recurring turnover cleaning if you manage multiple units.',
  },
  {
    q: 'How do I get a cleaning quote for the Nellis area?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your property type, square footage, and what you need cleaned, and we will provide a free estimate for your Nellis area home or business. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/north-las-vegas/nellis-area`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'Place', name: 'Nellis Area, North Las Vegas, NV' },
    { '@type': 'Place', name: 'North Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving the Nellis area, North Las Vegas, and Clark County, NV.',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Locations',
      item: `${SITE.url}${ROUTES.locations}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'North Las Vegas',
      item: `${SITE.url}/locations/north-las-vegas`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Nellis Area',
      item: `${SITE.url}/locations/north-las-vegas/nellis-area`,
    },
  ],
};

export default function NellisAreaPage() {
  return (
    <>
      {/* 1. Hero — split layout with quote form. No-photo pattern: HeroSection
          renders its gradient background when no image prop is passed. */}
      {/* TODO-PHOTO: wire hero image when public/images/locations/nellis-area-north-las-vegas-*.webp exists */}
      <HeroSection
        eyebrow="Near Nellis Air Force Base"
        heading="Cleaning Services in the Nellis Area, North Las Vegas, NV"
        sub="Family-owned move-in, move-out, and home cleaning near Nellis Air Force Base. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides home and commercial cleaning throughout the Nellis
            area, the residential community near Nellis Air Force Base in North Las Vegas. We are a
            family-owned, owner-led company run by Scott and Nicole Maland, serving the Nellis area as
            part of our North Las Vegas and Clark County service area. Request a free quote or call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Nellis area prose (Nellis AFB as public landmark only) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="About the Nellis area" heading="Cleaning built for the Nellis area." />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              The Nellis area sits in the northeast part of the Las Vegas Valley, anchored by Nellis
              Air Force Base in North Las Vegas. It is a primarily residential area of established
              single-family neighborhoods, apartment communities, and rentals, along with commercial
              corridors such as Nellis Boulevard and Craig Road that serve the surrounding community.
              Many residents are connected to the base, including active-duty families, veterans, and
              the businesses that support them.
            </p>
            <p>
              That relocation-heavy character shapes the cleaning we do here. Frequent moves mean
              steady demand for move-out cleaning when families relocate and move-in cleaning when
              they arrive, along with deep cleaning and rental turnover work for the area&apos;s many
              apartment and rental homes. Local offices, retail, and service businesses along the
              corridors rely on routine commercial and janitorial programs to stay presentation-ready.
              Whether you are handing back the keys before a move or settling into a new place near
              the base, Final Touch brings the same detail-focused standard to every property.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in the Nellis area — ServiceCard grid (commercial/relocation-led) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in the Nellis area."
            sub="Every service is available to Nellis area homes and businesses. Reordered by what customers near the base request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {NELLIS_AREA_SERVICES.map((s) => (
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

      {/* 5. Why the Nellis area chooses Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="Why Final Touch" heading="Why the Nellis area chooses Final Touch." />
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
                body: 'Every clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or return within 24 hours. We are licensed and insured, and we can schedule around your move or your business hours, including after-hours cleans.',
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
            heading="Serving the Nellis area and all of North Las Vegas."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/north-las-vegas combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            The Nellis area is part of our broader North Las Vegas and Clark County service area.
            Explore our{' '}
            <Link href={PARENT_CITY.href} className="text-brand-blue font-semibold hover:underline">
              North Las Vegas cleaning services
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
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/move-in-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-in cleaning
            </Link>
            , or{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial services
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

      {/* 7. FAQ — 5 Nellis area-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in the Nellis area."
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
        heading="Ready for a spotless Nellis area home or business?"
        sub="Request a free quote or call our team today. We serve the Nellis area and all of Clark County."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
