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
  (n) => n.slug === 'summerlin',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Summerlin Cleaning Services | Las Vegas, NV',
  description:
    'Family-owned cleaning services in Summerlin, Las Vegas, NV. Deep cleaning, move-in, move-out, and more. Call (702) 444-5077 for a free quote.',
  alternates: { canonical: '/locations/las-vegas/summerlin' },
  openGraph: {
    title: 'Summerlin Cleaning Services | Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Summerlin and all of Las Vegas, NV. Deep cleaning, move-in, move-out, post-construction, and more. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/summerlin`,
  },
};

// Summerlin neighborhood page. Service card order reflects Summerlin demand:
// deep cleaning first (established homeowners + desert dust from Spring Mountains
// proximity), move-in second (active new-build buyer volume in outer villages),
// move-out third (seller prep), post-construction fourth (ongoing phased
// development), then commercial, janitorial, retail.
const SUMMERLIN_SERVICES = [
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Summerlin, Las Vegas, NV?',
    a: `Yes. Final Touch serves Summerlin as part of its Las Vegas and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes and businesses throughout Summerlin's villages, from established neighborhoods near the I-215 corridor to newer phases along the community's western edge.`,
  },
  {
    q: 'Why do Summerlin homes need more frequent deep cleaning than other parts of Las Vegas?',
    a: "Summerlin sits at the base of the Spring Mountains, putting homes closer to desert dust sources and seasonal wind events. Fine particulate from the surrounding terrain settles on surfaces throughout the home, especially in window tracks, vents, baseboards, and high ledges. A periodic deep clean addresses the buildup that regular maintenance misses.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Summerlin?',
    a: `Final Touch offers deep cleaning, move-in cleaning, move-out cleaning, post-construction cleanup, commercial and office cleaning, janitorial services, and retail space cleaning throughout Summerlin. Call ${SITE.phone.display} to discuss which service fits your home or business.`,
  },
  {
    q: 'Do you clean newly built homes in Summerlin after construction?',
    a: `Yes. New builds and renovation projects in Summerlin's active development phases leave behind dust, debris, and construction residue. Final Touch's post-construction cleanup service handles that detail work so the space is ready to move into. Call ${SITE.phone.display} or request a quote online.`,
  },
  {
    q: 'Is Final Touch a local company or a national franchise?',
    a: `Final Touch is a family-owned, owner-operated cleaning company based in Southern Nevada, not a franchise or national chain. ${SITE.owners} own and run the business. When you call ${SITE.phone.display}, you reach the owners or the team directly.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/las-vegas/summerlin`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Summerlin, Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Summerlin, Las Vegas, and Clark County, NV.',
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
  { label: 'Summerlin' },
];

export default function SummerlinPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero — split layout with quote form over a local Summerlin photo. */}
      <HeroSection
        eyebrow="Master-Planned Community"
        heading="Summerlin Cleaning Services | Las Vegas, NV"
        sub={`Final Touch serves homes and businesses throughout Summerlin, Las Vegas. Deep cleaning, move-in, move-out, post-construction, and commercial cleaning across every village. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/summerlin-las-vegas-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Summerlin, Las Vegas, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Summerlin, Las Vegas as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business.
            Their team provides deep cleaning, move-in cleaning, move-out cleaning, and
            post-construction cleanup for homes and businesses throughout Summerlin&apos;s established
            villages and active new-build phases. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Summerlin home or business.
          </p>
        </div>
      </section>

      {/* 3. Local context — Summerlin-specific public-knowledge characteristics */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Summerlin"
            heading="Cleaning in a community built for detail."
            sub="Summerlin's location, housing mix, and active development create specific cleaning needs."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Master-planned from the ground up',
                body: 'Summerlin was developed by the Howard Hughes Corporation beginning in the late 1980s and has expanded through multiple villages over subsequent decades. The community spans a broad range of housing types, from entry-level single-family homes to guard-gated luxury enclaves, all within a planned layout that prioritizes residential character.',
              },
              {
                heading: 'Desert dust from the Spring Mountains',
                body: "Summerlin sits at the base of the Spring Mountains, directly adjacent to Red Rock Canyon National Conservation Area. This positioning puts homes closer to desert dust sources and seasonal wind events. Fine particulate settles on window tracks, vents, baseboards, ceiling fans, and high ledges throughout the year, making periodic deep cleaning essential for Summerlin homes.",
              },
              {
                heading: 'Active development in the outer villages',
                body: 'Summerlin continues to grow through new phases in its outer villages. Active construction and new-buyer activity mean post-construction cleanup and move-in cleaning are recurring needs. At the same time, established inner villages have long-term homeowners who benefit from consistent deep cleaning and periodic detail resets.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular services in Summerlin — ServiceCard grid */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in Summerlin."
            sub="Every service is available to Summerlin homes and businesses. Reordered by what Summerlin customers request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SUMMERLIN_SERVICES.map((s) => (
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

      {/* 5. Why families and businesses in Summerlin choose Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Summerlin property owners and businesses choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows this area and focuses entirely on it.`,
              },
              {
                heading: 'Detail-focused work',
                body: 'Every clean is thorough. Spring Mountains dust, post-construction residue, and routine buildup all get addressed, not skipped over.',
              },
              {
                heading: 'Homes and businesses',
                body: 'Final Touch serves both residential properties and businesses in Summerlin. One team, one standard, across every type of space.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">
                  {heading}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Parent city and related areas — back-links and sibling neighborhood links */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-14 sm:py-18 lg:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Summerlin and the greater Las Vegas area."
            sub="Final Touch serves Summerlin as part of a broader Las Vegas and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Summerlin is a community in the Las Vegas Valley. Final Touch serves it as part of the
              broader{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>{' '}
              and Clark County service area, covering Summerlin and neighboring areas across the
              valley.
            </p>
            <p>
              The team also serves{' '}
              <Link
                href="/locations/henderson"
                className="text-brand-blue font-semibold hover:underline"
              >
                Henderson
              </Link>
              ,{' '}
              <Link
                href="/locations/north-las-vegas"
                className="text-brand-blue font-semibold hover:underline"
              >
                North Las Vegas
              </Link>
              ,{' '}
              <Link
                href="/locations/boulder-city"
                className="text-brand-blue font-semibold hover:underline"
              >
                Boulder City
              </Link>
              , and all of{' '}
              <Link
                href="/locations/clark-county"
                className="text-brand-blue font-semibold hover:underline"
              >
                Clark County
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {/* TODO-BATCH-5: Add sibling Las Vegas neighborhood links here as
                Southern Highlands and Downtown Las Vegas pages are built. */}
            <Link
              href="/services/deep-cleaning/las-vegas"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Deep Cleaning in Las Vegas, NV
            </Link>
            <Link
              href="/services/move-in-cleaning/las-vegas"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning in Las Vegas, NV
            </Link>
            <Link
              href="/services/move-out-cleaning/las-vegas"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-Out Cleaning in Las Vegas, NV
            </Link>
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Request a free quote
            </Link>
            <Link
              href={ROUTES.services}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ — 5 neighborhood-specific FAQs from approved AEO map */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in Summerlin."
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
        heading="Ready to book a cleaning in Summerlin?"
        sub={`Free quotes for homes and businesses throughout Summerlin, Las Vegas. Call ${SITE.phone.display} or request a quote online.`}
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
