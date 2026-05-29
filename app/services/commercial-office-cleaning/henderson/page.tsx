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
  title: 'Commercial Office Cleaning in Henderson, NV | Final Touch',
  description:
    'Commercial office cleaning in Henderson, NV. Final Touch serves Green Valley Parkway, medical offices, and businesses across Henderson. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/commercial-office-cleaning/henderson`,
  },
  openGraph: {
    title: 'Commercial Office Cleaning in Henderson, NV | Final Touch',
    description:
      'Commercial office cleaning in Henderson, NV. Final Touch serves Green Valley Parkway, medical offices, and businesses across Henderson. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/commercial-office-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does commercial office cleaning include in Henderson?',
    a: 'Commercial office cleaning covers workstation surfaces, lobbies and reception areas, break rooms and kitchen areas, conference rooms, restrooms, high-touch surfaces, floor vacuuming and mopping, and trash removal. Recurring program scope — frequency, specific rooms, access timing — is confirmed during a walkthrough before the first clean.',
  },
  {
    q: 'Does Final Touch serve the Green Valley Parkway commercial corridor?',
    a: `Yes. Final Touch serves offices and commercial spaces along Green Valley Parkway, Sunset Road, and surrounding Henderson business corridors. These are Henderson's primary commercial zones, with a concentration of professional services firms, medical offices, and mixed-use commercial tenants. Call ${SITE.phone.display} to schedule a walkthrough.`,
  },
  {
    q: 'Does Final Touch clean medical offices in Henderson?',
    a: 'Yes. Henderson has a notable concentration of medical offices, specialty clinics, outpatient facilities, and healthcare-adjacent professional services along its commercial corridors. Final Touch serves medical office environments in Henderson; scope and specific requirements are confirmed during the walkthrough based on your practice type.',
  },
  {
    q: 'How often should Henderson offices be cleaned?',
    a: "Depends on foot traffic, office size, and type of business. Henderson offices share the Mojave desert dust load that affects the broader Las Vegas Valley, which means more frequent cleaning passes are often practical compared to wetter climates. Medical offices and high-foot-traffic professional services in Henderson often benefit from more frequent visits than a small low-traffic suite. Contact Final Touch to discuss what frequency fits your operation.",
  },
  {
    q: 'How much does office cleaning cost in Henderson?',
    a: `Pricing depends on office size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting — no rate is given without reviewing your space.`,
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
  areaServed: { '@type': 'City', name: `Henderson, ${SITE.serviceArea.stateAbbr}` },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'City', name: `Henderson, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'ListItem', position: 4, name: 'Henderson', item: `${SITE.url}/services/commercial-office-cleaning/henderson` },
  ],
};

export default function CommercialOfficeCleaningHendersonPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Commercial Office Cleaning · Henderson, NV"
        heading="Commercial Office Cleaning in Henderson, NV"
        sub={`Henderson's commercial sector runs along Green Valley Parkway and the Sunset Road corridor — professional services, medical offices, and retail-adjacent commercial spaces serving the city's large master-planned community base. Final Touch provides recurring commercial office cleaning for businesses across Henderson and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Commercial office cleaning in Henderson is a recurring professional cleaning program
            for offices and commercial spaces — covering workstations, common areas, restrooms,
            and high-touch surfaces on a schedule that fits the business.{' '}
            <Link href="/services/commercial-office-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch commercial cleaning
            </Link>{' '}
            serves Henderson professional services firms, medical offices along Green Valley
            Parkway, and small and mid-size businesses throughout the city. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your space.
          </p>
        </div>
      </section>

      {/* 3. Who hires commercial office cleaning in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires office cleaning in Henderson"
            heading="Professional services, healthcare, and community-serving businesses along Henderson's commercial corridors."
            sub="Henderson's commercial character is suburban and professionally oriented — distinct from Las Vegas's tourism-influenced commercial landscape."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Green Valley Parkway corridor tenants',
                body: "Henderson's primary commercial corridor runs along Green Valley Parkway and Sunset Road. Professional services firms — law offices, financial advisors, real estate companies, insurance agencies — make up a significant portion of the tenants, alongside medical offices and mixed-use commercial spaces.",
              },
              {
                title: 'Medical and healthcare offices',
                body: 'Henderson has a notable concentration of medical offices, specialty clinics, outpatient facilities, and healthcare-adjacent professional services. These businesses require consistent, reliable cleaning that meets the professional standard of a healthcare environment. Scope is confirmed based on practice type during the walkthrough.',
              },
              {
                title: 'Small professional services firms',
                body: "Henderson's suburban business base includes a large number of small professional services offices — accounting firms, title companies, staffing agencies, and similar businesses — that need regular cleaning on a schedule and budget that fits their size.",
              },
              {
                title: 'Retail-adjacent commercial spaces',
                body: 'Businesses in mixed-use commercial formats near Green Valley Ranch and similar Henderson centers often have customer-facing offices alongside retail operations. A consistent commercial clean maintains the professional environment these businesses need.',
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
            sub="Recurring office cleaning keeps your Henderson workspace consistently presentable."
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
            Recurring program scope, frequency, and access timing are confirmed during the
            initial walkthrough. Henderson offices with specific access requirements or
            restricted areas are noted during that conversation.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Commercial cleaning in Henderson"
            heading="What defines the Henderson office cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'A suburban, professionally-oriented commercial base',
                body: "Henderson's commercial sector serves a large, established residential base rather than a tourism economy. The businesses along Green Valley Parkway and Sunset Road are predominantly professional services, healthcare, and community-serving businesses — not hospitality-adjacent or entertainment-adjacent. The cleaning standard expected is professional and consistent, not high-volume or after-hours intensive.",
              },
              {
                heading: 'Medical office concentration',
                body: "Henderson's proximity to healthcare facilities and its established residential base has created a significant concentration of medical offices, specialist practices, and outpatient services along its commercial corridors. Medical offices have specific cleaning requirements beyond standard office cleaning — Final Touch confirms scope during the walkthrough for any healthcare-environment client.",
              },
              {
                heading: 'Mojave dust in Henderson commercial spaces',
                body: 'The same desert dust load that affects Henderson homes affects commercial offices. Fine-particle Mojave dust settles on horizontal surfaces, vents, and window sills in Henderson offices faster than in wetter markets. Many Henderson offices schedule more frequent cleaning passes than they would elsewhere — a practical response to the local climate, particularly for medical and professional environments where a dusty workspace reflects poorly.',
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

      {/* 6. Related services in Henderson */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Henderson"
            heading="Other cleaning services available in Henderson, NV."
            sub="Final Touch provides seven cleaning services across Henderson and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/henderson`}
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
              { label: 'Office Cleaning in North Las Vegas, NV', href: '/services/commercial-office-cleaning/north-las-vegas' },
              { label: 'Office Cleaning in Boulder City, NV', href: '/services/commercial-office-cleaning/boulder-city' },
              { label: 'Office Cleaning in Clark County, NV', href: '/services/commercial-office-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: North Las Vegas, Boulder City, Clark County resolve when those city sets are built */}
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
        heading="Commercial office cleaning in Henderson — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/commercial-office-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Commercial office cleaning services
          </Link>
          <Link href="/locations/henderson" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Henderson
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need office cleaning in Henderson?"
        sub={`Free quotes for commercial office cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
