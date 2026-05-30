import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Commercial Cleaning in Clark County, NV | Final Touch',
  description:
    'Commercial office cleaning across Clark County, NV. Final Touch serves businesses in every city: Las Vegas, Henderson, North Las Vegas, and Boulder City. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/commercial-office-cleaning/clark-county`,
  },
  openGraph: {
    title: 'Commercial Cleaning in Clark County, NV | Final Touch',
    description:
      'Commercial office cleaning across Clark County, NV. Final Touch serves businesses in every city: Las Vegas, Henderson, North Las Vegas, and Boulder City. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/commercial-office-cleaning/clark-county`,
  },
};

const faq = [
  {
    q: 'What does commercial office cleaning include in Clark County?',
    a: 'Commercial office cleaning covers workstation surfaces, lobbies and reception areas, break rooms and kitchen areas, conference rooms, restrooms, high-touch surfaces, floor vacuuming and mopping, and trash removal. Recurring program scope, frequency, and access timing are confirmed during a walkthrough, the same process in every Clark County city.',
  },
  {
    q: 'Does Final Touch serve businesses across multiple Clark County cities?',
    a: `Yes. Businesses with offices or commercial spaces in more than one Clark County city can work with Final Touch for all their locations, one cleaning partner, consistent standard, across every city in the county. Call ${SITE.phone.display} to discuss a multi-location arrangement.`,
  },
  {
    q: 'What types of offices does Final Touch clean across Clark County?',
    a: "Clark County's commercial landscape spans every office type in the Las Vegas Valley simultaneously: Las Vegas's tourism-adjacent businesses and large professional services firms; Henderson's suburban medical offices and Green Valley Parkway corridor; North Las Vegas's warehouse facility offices and industrial complex management offices; Boulder City's small historic downtown professional services. Final Touch serves all of them, scope confirmed per business during the walkthrough.",
  },
  {
    q: 'How often should Clark County offices be cleaned?',
    a: 'The entire county sits in the Mojave Desert, which means fine-particle dust accumulates on office surfaces faster than in wetter climates. Most Clark County offices benefit from more frequent cleaning passes than comparable offices in other regions. Frequency depends on the type of business, foot traffic, and location within the county. Contact Final Touch to discuss what schedule fits your operation.',
  },
  {
    q: 'How much does office cleaning cost in Clark County?',
    a: `Pricing depends on office size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting, the same process regardless of which county city the office is in.`,
  },
];

const relatedServices = [
  'janitorial-services',
  'retail-space-cleaning',
  'post-construction-cleanup',
  'deep-cleaning',
  'move-in-cleaning',
  'move-out-cleaning',
] as const;

const relatedServiceCards = relatedServices
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter(Boolean) as typeof SERVICES[number][];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial & Office Cleaning',
  serviceType: 'Commercial Office Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
    ...SITE.serviceArea.cities.map((city) => ({
      '@type': 'City' as const,
      name: `${city}, ${SITE.serviceArea.stateAbbr}`,
    })),
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Commercial & Office Cleaning', item: `${SITE.url}/services/commercial-office-cleaning` },
    { '@type': 'ListItem', position: 4, name: 'Clark County', item: `${SITE.url}/services/commercial-office-cleaning/clark-county` },
  ],
};

export default function CommercialOfficeCleaningClarkCountyPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Commercial Office Cleaning · Clark County, NV"
        heading="Commercial Office Cleaning in Clark County, NV"
        sub={`Clark County's commercial sector spans Las Vegas's large professional and hospitality-adjacent businesses, Henderson's medical and suburban professional corridors, North Las Vegas's industrial facility offices, and Boulder City's historic downtown small businesses. Final Touch provides commercial office cleaning across all of ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Commercial office cleaning in Clark County is a recurring professional cleaning program
            for offices and commercial spaces, covering workstations, common areas, restrooms, and
            high-touch surfaces on a schedule that fits the business.{' '}
            <Link href="/services/commercial-office-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch commercial cleaning
            </Link>{' '}
            serves businesses across every city in the county, from Las Vegas&apos;s large commercial
            corridors to Boulder City&apos;s small downtown offices. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your business.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires office cleaning in Clark County"
            heading="Every commercial office type in the Las Vegas Valley, county-wide."
            sub="Clark County's commercial diversity means office cleaning clients span every industry, size, and city character simultaneously."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Multi-location businesses across county cities',
                body: 'Businesses with offices in more than one Clark County city (a professional services firm with Las Vegas and Henderson locations, a healthcare practice across multiple cities) need a cleaning partner who serves every location at the same standard.',
              },
              {
                title: 'Las Vegas professional and hospitality-adjacent offices',
                body: "Las Vegas's large and diverse commercial sector spans professional services, healthcare, hospitality-adjacent businesses, and the county's largest office corridors. High foot traffic and Mojave dust create consistent commercial cleaning demand.",
              },
              {
                title: 'Henderson suburban professional and medical offices',
                body: "Henderson's commercial corridor (Green Valley Parkway, Sunset Road) concentrates medical offices, professional services, and suburban business tenants who need reliable recurring cleaning programs.",
              },
              {
                title: 'North Las Vegas facility and industrial offices',
                body: "North Las Vegas's industrial and logistics corridor generates facility office and break room cleaning demand unique in the county, heavier-use environments attached to warehouse and distribution operations.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What commercial office cleaning covers."
            sub="Recurring office cleaning keeps your Clark County workspace consistently maintained."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Workstation surfaces and desk areas',
              'Lobbies, reception areas, and waiting rooms',
              'Conference and meeting rooms',
              'Break rooms and kitchen areas',
              'Restrooms: fixtures, tile, mirrors, replenishment setup',
              'High-touch surfaces: door handles, light switches, shared equipment',
              'Floor vacuuming and mopping or hard-floor care',
              'Trash removal and liner replacement',
              'Interior glass and partition surfaces',
              'Common-area surfaces throughout',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Recurring program scope, frequency, and access timing confirmed during the walkthrough,
            the same process for every county city.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Commercial cleaning across Clark County"
            heading="Why Clark County commercial cleaning spans every office type."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'The most commercially diverse county in Nevada',
                body: "Clark County's commercial sector is unlike any other county in Nevada. It combines Las Vegas's tourism-driven, large-scale commercial landscape with Henderson's professional and medical suburban corridors, North Las Vegas's industrial and logistics operations, and Boulder City's small historic-downtown businesses. A cleaning partner who serves all of Clark County serves every one of these commercial types.",
              },
              {
                heading: 'Multi-location businesses need county-wide coverage',
                body: 'Many Clark County businesses operate across more than one city: a professional services firm with Las Vegas and Henderson offices, a healthcare group with multiple locations, a franchise with units in different cities. Final Touch provides county-wide commercial cleaning coverage so multi-location businesses have one partner, one standard, one contact across their entire county footprint.',
              },
              {
                heading: 'Mojave dust affects every county office',
                body: 'Fine-particle Mojave desert dust accumulates on office surfaces across every Clark County city, not just in Las Vegas. Henderson offices, North Las Vegas facility spaces, and Boulder City storefronts all deal with the same desert dust load. A county-wide cleaning partner who understands this environment applies appropriate cleaning frequency and scope regardless of which city the office is in.',
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Clark County"
            heading="Other cleaning services available across Clark County, NV."
            sub="Final Touch provides seven cleaning services county-wide."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/clark-county`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Office cleaning by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Commercial office cleaning by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own commercial character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Office Cleaning in Las Vegas, NV', href: '/services/commercial-office-cleaning/las-vegas' },
              { label: 'Office Cleaning in Henderson, NV', href: '/services/commercial-office-cleaning/henderson' },
              { label: 'Office Cleaning in North Las Vegas, NV', href: '/services/commercial-office-cleaning/north-las-vegas' },
              { label: 'Office Cleaning in Boulder City, NV', href: '/services/commercial-office-cleaning/boulder-city' },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-blue/40 hover:bg-soft-blue transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection
        items={faq}
        heading="Commercial office cleaning in Clark County: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/commercial-office-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Commercial office cleaning services
          </Link>
          <Link href="/locations/clark-county" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Clark County
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need office cleaning anywhere in Clark County?"
        sub={`Free quotes for commercial office cleaning across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
