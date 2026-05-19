import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'MacDonald Highlands Cleaning Services | Henderson, NV | Final Touch',
  description:
    'Family-owned cleaning services in MacDonald Highlands, Henderson, NV. Deep cleaning and move-in for luxury custom homes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/macdonald-highlands' },
  openGraph: {
    title: 'MacDonald Highlands Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve MacDonald Highlands and all of Henderson, NV. Detail-focused deep cleaning and move-in for luxury hillside homes. Free quotes.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/macdonald-highlands`,
  },
};

// MacDonald Highlands neighborhood page. Service card order reflects demand:
// deep cleaning first (high-end custom homes with premium finishes require
// the most thorough and detail-intensive periodic resets of any neighborhood
// in this batch -- this is the luxury positioning anchor), move-in second
// (buyers at this price point purchasing custom or semi-custom builds need a
// professional clean that matches the finish level of the home), move-out
// third (seller prep at the luxury tier demands a presentation-ready result),
// then commercial, post-construction, janitorial, retail.
const MH_SERVICES = [
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve MacDonald Highlands, Henderson, NV?',
    a: `Yes. Final Touch serves MacDonald Highlands as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes throughout MacDonald Highlands, including custom and semi-custom residences in this guard-gated luxury community in Henderson's elevated eastern terrain.`,
  },
  {
    q: 'How does Final Touch approach cleaning in a luxury custom home like those in MacDonald Highlands?',
    a: "Custom homes in MacDonald Highlands feature premium finish materials -- natural stone, marble, polished concrete, custom cabinetry, and large-format tile -- that require surface-appropriate cleaning methods. The wrong product or technique on natural stone or polished surfaces causes damage that is expensive to correct. Final Touch's detail-focused approach means surfaces are cleaned correctly, not just quickly, with attention to the specific materials in each home rather than a one-method-fits-all routine.",
  },
  {
    q: 'What cleaning services does Final Touch offer in MacDonald Highlands?',
    a: `Final Touch offers deep cleaning, move-in cleaning, move-out cleaning, commercial and office cleaning, post-construction cleanup, janitorial services, and retail space cleaning throughout MacDonald Highlands. Call ${SITE.phone.display} to discuss the right service for your home.`,
  },
  {
    q: 'Can Final Touch handle post-construction cleanup for a custom build in MacDonald Highlands?',
    a: `Yes. Custom home builds in MacDonald Highlands leave behind the same construction residue as any new build -- fine dust in vents, grout haze on stone and tile, adhesive residue, and debris in cabinet interiors -- but at a larger scale and with materials that require more care. Final Touch's post-construction cleanup service handles that detail work before move-in. Call ${SITE.phone.display} to discuss the scope of your project.`,
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
  url: `${SITE.url}/locations/henderson/macdonald-highlands`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'Place', name: 'MacDonald Highlands, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving MacDonald Highlands, Henderson, and Clark County, NV.',
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
      name: 'Henderson',
      item: `${SITE.url}/locations/henderson`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'MacDonald Highlands',
      item: `${SITE.url}/locations/henderson/macdonald-highlands`,
    },
  ],
};

export default function MacdonaldHighlandsPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Guard-Gated Luxury Enclave"
        heading="MacDonald Highlands Cleaning Services | Henderson, NV"
        sub={`Final Touch serves custom and semi-custom homes throughout MacDonald Highlands, Henderson. Detail-focused deep cleaning and move-in cleaning for luxury residences in Henderson's premier hillside enclave. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves MacDonald Highlands, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides detail-focused deep cleaning and move-in cleaning for custom and
            semi-custom luxury homes throughout MacDonald Highlands, Henderson&apos;s guard-gated
            hillside enclave above the Las Vegas Valley. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your MacDonald Highlands home.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About MacDonald Highlands"
            heading="Henderson's highest-end hillside community."
            sub="MacDonald Highlands occupies a distinct tier above the broader Henderson market -- custom home sizes, luxury finish materials, and guard-gated access set it apart from every other neighborhood in this batch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Guard-gated luxury community above the valley floor',
                body: "MacDonald Highlands sits on elevated terrain in Henderson's eastern hills, positioned above the Las Vegas Valley with views that extend across the metro. It is a guard-gated community with custom and semi-custom homes on larger lots, attracting buyers at the upper end of the Henderson market. The combination of elevation, exclusivity, and lot size makes it the most distinctly high-end residential neighborhood Final Touch serves in Henderson.",
              },
              {
                heading: 'Custom homes with premium finish materials',
                body: 'Homes in MacDonald Highlands are typically custom or semi-custom builds with premium interior finishes including natural stone, marble, polished concrete, custom millwork, and large-format tile throughout. These materials require surface-appropriate cleaning methods. Natural stone, polished surfaces, and custom cabinetry react differently to cleaning products than standard residential finishes, and incorrect technique causes damage that is costly to repair.',
              },
              {
                heading: 'Larger square footage requires more time and precision',
                body: 'MacDonald Highlands homes are among the largest in Henderson, with floor plans that span multiple levels and include spaces -- home theaters, wine rooms, outdoor living areas, pool surrounds -- that standard residential cleaning does not typically address. A full deep clean or move-in service here is a longer, more precise engagement than in any other neighborhood in this batch, and the finish standard expected matches the investment in the home.',
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

      {/* 4. Popular services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in MacDonald Highlands."
            sub="Deep cleaning leads because MacDonald Highlands homeowners expect the highest detail standard. Every service is available across the community."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {MH_SERVICES.map((s) => (
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

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why MacDonald Highlands homeowners choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows Henderson's hillside communities and focuses entirely on this region.`,
              },
              {
                heading: 'Surface-appropriate methods',
                body: 'Natural stone, polished concrete, marble, and custom cabinetry require the right cleaning approach. Final Touch matches methods to materials rather than applying a standard residential routine to premium surfaces.',
              },
              {
                heading: 'Custom home experience',
                body: 'Larger floor plans, multiple levels, specialty rooms, and outdoor living spaces are part of the scope in MacDonald Highlands. Final Touch accounts for that complexity in every quote and every clean.',
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

      {/* 6. Parent city and related areas */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-14 sm:py-18 lg:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="MacDonald Highlands and the greater Henderson area."
            sub="Final Touch serves MacDonald Highlands as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              MacDonald Highlands is a community within{' '}
              <Link
                href="/locations/henderson"
                className="text-brand-blue font-semibold hover:underline"
              >
                Henderson, NV
              </Link>
              . Final Touch serves all of Henderson, including MacDonald Highlands and
              neighboring hillside and valley communities across the city.
            </p>
            <p>
              The team also serves neighborhoods across{' '}
              <Link
                href="/locations/las-vegas"
                className="text-brand-blue font-semibold hover:underline"
              >
                Las Vegas
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
            <Link
              href="/locations/henderson/seven-hills"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Seven Hills
            </Link>
            <Link
              href="/locations/henderson/anthem"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Anthem
            </Link>
            <Link
              href="/locations/henderson/green-valley-ranch"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Green Valley Ranch
            </Link>
            {/* TODO-BATCH-5: Add Lake Las Vegas pill link once that page is built. */}
            <Link
              href="/services/deep-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Deep Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/move-in-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/commercial-office-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Commercial Office Cleaning in Henderson, NV
            </Link>
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Request a free quote
            </Link>
            <Link
              href={ROUTES.services}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in MacDonald Highlands."
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

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready to book a cleaning in MacDonald Highlands?"
        sub={`Free quotes for homes throughout MacDonald Highlands, Henderson. Call ${SITE.phone.display} or request a quote online.`}
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
