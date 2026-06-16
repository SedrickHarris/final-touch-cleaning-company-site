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
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Commercial Office Cleaning in Las Vegas, NV',
  description:
    'Commercial office cleaning service in Las Vegas, NV. Final Touch cleans workspaces, common areas, and restrooms on a recurring schedule. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/commercial-office-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Commercial Office Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Commercial office cleaning service in Las Vegas, NV. Final Touch cleans workspaces, common areas, and restrooms on a recurring schedule. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/commercial-office-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does commercial office cleaning include in Las Vegas?',
    a: 'Commercial office cleaning covers workstation surfaces, lobbies and reception areas, break rooms and kitchen areas, conference rooms, restrooms, high-touch surfaces, floor vacuuming and mopping, and trash removal. Recurring program scope (frequency, specific rooms, access timing) is confirmed during a walkthrough before the first clean.',
  },
  {
    q: 'How often should offices be cleaned in Las Vegas?',
    a: 'Las Vegas sits in the Mojave Desert, where fine-particle dust accumulates on surfaces faster than in wetter climates. Many Las Vegas offices schedule more frequent cleaning passes than they would in other cities for this reason. The right frequency depends on foot traffic, office size, and type of business. Contact Final Touch to discuss what schedule fits your space.',
  },
  {
    q: 'Does Final Touch serve small businesses in Las Vegas?',
    a: `Yes. Final Touch is a family-owned commercial cleaning company serving offices and commercial spaces of all sizes across Las Vegas and ${SITE.serviceArea.county}, from single-suite operations to multi-tenant floors and standalone commercial buildings. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'Can Final Touch clean healthcare or medical offices in Las Vegas?',
    a: 'Yes. Final Touch serves professional office environments including healthcare and medical offices in Las Vegas. Scope and specific requirements are confirmed during the walkthrough. Contact us with details about your practice type when requesting a quote.',
  },
  {
    q: 'How much does office cleaning cost in Las Vegas?',
    a: `Pricing depends on office size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote online. A walkthrough is scheduled before quoting. No rate is given without reviewing your space.`,
  },
];

// Related services: ordered by relevance for Las Vegas commercial office page
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
    '@type': 'City',
    name: `Las Vegas, ${SITE.serviceArea.stateAbbr}`,
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
    { '@type': 'City', name: `Las Vegas, ${SITE.serviceArea.stateAbbr}` },
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Commercial & Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Las Vegas' },
];

export default function CommercialOfficeCleaningLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Commercial Office Cleaning · Las Vegas, NV"
        heading="Commercial Office Cleaning in Las Vegas, NV"
        sub={`Las Vegas has a large and diverse commercial sector spanning professional services, healthcare, hospitality-adjacent businesses, and retail. Final Touch provides recurring commercial office cleaning for offices and commercial spaces across Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Commercial office cleaning in Las Vegas is a recurring professional cleaning program
            for offices and commercial interiors, covering workstations, common areas, restrooms,
            and high-touch surfaces on a schedule suited to the space and its foot traffic.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves professional services firms, healthcare offices, small and mid-size businesses,
            and commercial tenants across Las Vegas. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your space.
          </p>
        </div>
      </section>

      {/* 3. Who hires commercial office cleaning in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires office cleaning in Las Vegas"
            heading="Las Vegas businesses across professional services, healthcare, and more."
            sub="The Las Vegas commercial sector is more diverse than the city's tourism identity suggests. A wide range of professional businesses need reliable office cleaning."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Professional services firms',
                body: 'Law firms, financial services, insurance offices, real estate brokerages, and accounting firms concentrated in commercial corridors across Las Vegas need a cleaning standard that matches the professional environment they maintain for clients.',
              },
              {
                title: 'Healthcare and medical offices',
                body: 'Las Vegas has a substantial healthcare sector. Medical offices and clinics require thorough, consistent cleaning that meets the standards of a professional healthcare environment. Scope is confirmed during the walkthrough based on your specific practice.',
              },
              {
                title: 'Hospitality-adjacent businesses',
                body: "Las Vegas's tourism economy creates a large category of businesses (event companies, staffing agencies, media production, consulting) that maintain office environments connected to the hospitality industry. Many have high-traffic reception and meeting areas that require frequent cleaning.",
              },
              {
                title: 'Small and mid-size businesses',
                body: 'The Las Vegas SMB sector includes retail-adjacent offices, service businesses, and mixed-use commercial spaces. Many have 1–5 room office setups that need regular cleaning on a schedule that fits their business hours and budget.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
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
            sub="Recurring office cleaning addresses the surfaces that affect how your workspace looks and functions."
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
            Recurring program scope, frequency, and access timing are confirmed during a walkthrough.
            If you have specific room priorities or access restrictions, let us know during the
            initial consultation.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Commercial cleaning in the Las Vegas market"
            heading="What shapes office cleaning demand in Las Vegas."
            sub="Las Vegas offices face cleaning demands that differ from a typical commercial market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Mojave dust in commercial spaces',
                body: 'Fine-particle desert dust accumulates on horizontal surfaces, vents, and window sills in Las Vegas commercial spaces faster than in wetter climates. Many Las Vegas offices schedule cleaning passes more frequently than they would in other cities specifically because of the dust load.',
              },
              {
                heading: 'Diverse commercial sector',
                body: "Las Vegas has a commercial sector that extends well beyond the Strip. Professional services corridors, medical office parks, and mixed-use commercial developments across the valley house thousands of businesses that need reliable, recurring cleaning programs independent of the city's tourism activity.",
              },
              {
                heading: 'Tourism-driven business activity',
                body: "Businesses adjacent to Las Vegas's hospitality and events economy (event production companies, talent agencies, marketing firms, catering operations) often have irregular schedules and high-traffic meeting areas. Cleaning programs need to be flexible to match those hours.",
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

      {/* 6. Related services in Las Vegas */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Las Vegas"
            heading="Other cleaning services available in Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across Las Vegas and the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/las-vegas`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Related cities for commercial office cleaning */}
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
              { label: 'Office Cleaning in Henderson, NV', href: '/services/commercial-office-cleaning/henderson' },
              { label: 'Office Cleaning in North Las Vegas, NV', href: '/services/commercial-office-cleaning/north-las-vegas' },
              { label: 'Office Cleaning in Boulder City, NV', href: '/services/commercial-office-cleaning/boulder-city' },
              { label: 'Office Cleaning in Clark County, NV', href: '/services/commercial-office-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: link resolves when that city set is built */}
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
        heading="Commercial office cleaning in Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/commercial-office-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Commercial office cleaning services
          </Link>
          <Link href="/locations/las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need office cleaning in Las Vegas?"
        sub={`Free quotes for commercial office cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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
