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
  title: 'Commercial Office Cleaning in North Las Vegas, NV | Final Touch',
  description:
    'Commercial office cleaning in North Las Vegas, NV. Serving warehouse offices, facility break rooms, and businesses citywide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/commercial-office-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Commercial Office Cleaning in North Las Vegas, NV | Final Touch',
    description:
      'Commercial office cleaning in North Las Vegas, NV. Serving warehouse offices, facility break rooms, and businesses citywide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/commercial-office-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does commercial office cleaning include in North Las Vegas?',
    a: 'Commercial office cleaning covers workstation surfaces, lobbies and reception areas, break rooms and kitchen areas, conference rooms, restrooms, high-touch surfaces, floor vacuuming and mopping, and trash removal. Recurring program scope, frequency, and access timing are confirmed during a walkthrough before the first clean.',
  },
  {
    q: 'Does Final Touch clean facility offices in North Las Vegas warehouses?',
    a: "Yes. North Las Vegas has a large industrial and logistics corridor. Final Touch serves the office, break room, and common-area cleaning needs of warehouse and distribution facilities in North Las Vegas — facility offices attached to warehouse operations, employee break rooms, and shared spaces within industrial complexes. This is a service type specifically relevant to North Las Vegas's industrial base and less common at the same scale in Henderson or Las Vegas proper.",
  },
  {
    q: 'How often should North Las Vegas offices be cleaned?',
    a: 'Depends on foot traffic, type of business, and working conditions. Warehouse facility offices and industrial break rooms in North Las Vegas often require more frequent cleaning than a standard professional services office because of the working environment — more foot traffic, heavier use, and higher dust load from adjacent operations. Contact Final Touch to discuss what frequency fits your facility.',
  },
  {
    q: 'Does Final Touch serve small businesses in North Las Vegas?',
    a: `Yes. Final Touch serves commercial spaces of all sizes across North Las Vegas, including small offices, single-suite businesses, and commercial units along the city's main corridors. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'How much does office cleaning cost in North Las Vegas?',
    a: `Pricing depends on office size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting — no rate is given without reviewing your space.`,
  },
];

const relatedServices = [
  'janitorial-services',
  'post-construction-cleanup',
  'retail-space-cleaning',
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
  areaServed: { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'ListItem', position: 4, name: 'North Las Vegas', item: `${SITE.url}/services/commercial-office-cleaning/north-las-vegas` },
  ],
};

export default function CommercialOfficeCleaningNorthLasVegasPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Commercial Office Cleaning · North Las Vegas, NV"
        heading="Commercial Office Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas has a large industrial and logistics corridor alongside its commercial and residential corridors. Final Touch provides commercial office cleaning for warehouse facility offices, small businesses, and commercial tenants across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Commercial office cleaning in North Las Vegas covers offices of all types —
            professional services suites, facility offices attached to warehouse operations,
            and small businesses along the city&apos;s commercial corridors.{' '}
            <Link href="/services/commercial-office-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch commercial cleaning
            </Link>{' '}
            serves North Las Vegas businesses on a recurring schedule suited to the space.
            Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your space.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires office cleaning in North Las Vegas"
            heading="Warehouse facility offices, small businesses, and industrial complex operators."
            sub="North Las Vegas commercial cleaning is uniquely shaped by its industrial corridor — a segment that creates cleaning demand not found in Henderson or Las Vegas proper at the same scale."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Warehouse and logistics facility offices',
                body: "North Las Vegas's industrial corridor generates demand for cleaning of facility offices, employee break rooms, and common areas within warehouse and distribution complexes. These are functional working environments with heavier use patterns than a professional services office.",
              },
              {
                title: 'Small professional services businesses',
                body: 'Auto services, insurance offices, tax preparers, staffing agencies, and similar businesses along NLV commercial corridors need regular office cleaning on a schedule that fits their size and budget.',
              },
              {
                title: 'Retail-adjacent commercial spaces',
                body: 'North Las Vegas commercial corridors include retail-adjacent offices serving the local residential population. These spaces have customer-facing areas that require a consistent, presentable clean.',
              },
              {
                title: 'Industrial complex management offices',
                body: 'Large industrial facilities in North Las Vegas have management offices, visitor reception areas, and conference rooms separate from the warehouse floor. These spaces serve a professional function within an industrial setting.',
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
            sub="Recurring office cleaning keeps your North Las Vegas workspace consistently maintained."
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
            Recurring program scope, frequency, and access timing confirmed during the walkthrough.
            For warehouse facility offices, access coordination around operational hours is
            addressed during that conversation.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Commercial cleaning in North Las Vegas"
            heading="What defines NLV's commercial cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Industrial corridor creates a unique office type',
                body: 'North Las Vegas has a large industrial and logistics corridor that creates a type of office cleaning demand not found at the same scale in Henderson or Las Vegas proper. Facility offices attached to warehouses and distribution centers are functional working spaces — not professional services suites — and they have different cleaning requirements: heavier use, more foot traffic, and closer proximity to industrial operations that increase dust load.',
              },
              {
                heading: 'Working-class commercial corridors',
                body: "NLV's commercial corridors along Lamb Boulevard, Craig Road, and Cheyenne Avenue serve a working-class residential population with a mix of auto services, food, insurance offices, and similar businesses. The cleaning standard expected here is practical and consistent — businesses need to be presentable for customers without the premium-positioning expectations of Henderson's professional corridors.",
              },
              {
                heading: 'Mojave dust in commercial spaces',
                body: 'Like all of the Las Vegas Valley, North Las Vegas commercial offices deal with Mojave desert dust accumulation on surfaces, vents, and window sills. In industrial areas, construction activity and vehicle traffic add to the dust load. Regular commercial cleaning is a practical response to the local environment.',
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
            eyebrow="More services in North Las Vegas"
            heading="Other cleaning services available in North Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across North Las Vegas and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/north-las-vegas`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Related cities */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Commercial office cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves commercial clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Office Cleaning in Las Vegas, NV', href: '/services/commercial-office-cleaning/las-vegas' },
              { label: 'Office Cleaning in Henderson, NV', href: '/services/commercial-office-cleaning/henderson' },
              { label: 'Office Cleaning in Boulder City, NV', href: '/services/commercial-office-cleaning/boulder-city' },
              { label: 'Office Cleaning in Clark County, NV', href: '/services/commercial-office-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: Boulder City and Clark County resolve when those city sets are built */}
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
        heading="Commercial office cleaning in North Las Vegas — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/commercial-office-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Commercial office cleaning services
          </Link>
          <Link href="/locations/north-las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in North Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need office cleaning in North Las Vegas?"
        sub={`Free quotes for commercial office cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
