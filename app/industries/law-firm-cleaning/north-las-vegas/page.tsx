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
  title: 'Law Firm Cleaning in North Las Vegas, NV | Final Touch',
  description:
    'Professional cleaning for law firms and legal offices in North Las Vegas, NV. Owner-led walkthroughs, after-hours scheduling across Clark County. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/law-firm-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Law Firm Cleaning in North Las Vegas, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for law firms and legal offices in North Las Vegas, NV. Owner-led walkthroughs, after-hours scheduling across Clark County. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/law-firm-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does law firm cleaning include in North Las Vegas?',
    a: `Law firm cleaning by Final Touch in North Las Vegas covers client-facing and operational areas of legal offices: reception and waiting areas, conference and meeting rooms, attorney offices, staff workstations, break rooms, restrooms, and high-touch surfaces throughout. Scope is confirmed per office layout at the initial walkthrough before any program begins. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not access in a North Las Vegas law firm?',
    a: 'Final Touch does not access client files, case files, open legal documents, file rooms, secure storage, or any area the firm designates as restricted. Cleaning scope covers surface and facility areas only, confirmed explicitly at the walkthrough. Final Touch does not handle, move, or access documents or materials of any kind.',
  },
  {
    q: 'Can Final Touch clean a North Las Vegas law office after hours?',
    a: `Yes. Final Touch schedules cleaning around your office hours, including before the practice opens or after it closes. Access timing, building security requirements, and any restricted areas are confirmed at the initial walkthrough before the program begins. After-hours scheduling is available across North Las Vegas and the broader ${SITE.serviceArea.county} service area.`,
  },
  {
    q: 'Does Final Touch serve small law firms and solo practitioners in North Las Vegas?',
    a: `Yes. Final Touch serves law offices of all sizes in North Las Vegas, including solo practitioners and small firms with one or two offices and a shared reception area. Scope and schedule are confirmed per office at the initial walkthrough. No minimum size requirement and no templated rates. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my law firm in North Las Vegas?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your office, confirm scope, frequency, access requirements, and any restricted areas, and quote based on what the job actually requires. No assumptions about your North Las Vegas firm's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm Cleaning in North Las Vegas, NV',
  serviceType: 'Law Firm Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'North Las Vegas, NV' },
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
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE.url}/industries` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Law Firm Cleaning in North Las Vegas',
      item: `${SITE.url}/industries/law-firm-cleaning/north-las-vegas`,
    },
  ],
};

// Audience cards (Section 3), North Las Vegas-specific
const audienceCards = [
  {
    title: 'Community-serving legal practices',
    body: "North Las Vegas's large and growing residential population creates consistent demand for community-serving legal practices: family law, immigration, personal injury, criminal defense, and real estate law. These firms serve high client volumes from the surrounding residential communities and need a professional office environment maintained on a consistent schedule.",
  },
  {
    title: 'Commercial corridor law offices',
    body: 'Law offices along Lamb Boulevard, Craig Road, and Cheyenne Avenue serve North Las Vegas residents in accessible commercial corridor locations. These practices prioritize a clean, professional reception and waiting area as the first impression for clients visiting their office.',
  },
  {
    title: 'Solo practitioners and small legal offices',
    body: 'Solo attorneys and small NLV firms with one or two offices and a shared reception area need professional cleaning on a schedule that fits their size and budget. Final Touch serves small legal offices in North Las Vegas on recurring programs without a large commercial contract minimum.',
  },
  {
    title: 'Multi-attorney practices and professional office suites',
    body: 'North Las Vegas multi-attorney firms with dedicated conference rooms, paralegal workspaces, and reception areas need a recurring program covering every area on a consistent standard. Scope and frequency confirmed per layout at the initial walkthrough.',
  },
];

// Scope checklist (Section 4)
const scopeChecklist = [
  'Reception desk and front-counter surfaces',
  'Client waiting area seating and surfaces',
  'Conference and meeting rooms: tables, chairs, surfaces, boards',
  'Partner and associate office surfaces and workstations',
  'Paralegal and staff workstation areas',
  'Break rooms and kitchen areas',
  'Restrooms: fixtures, tile, mirrors, replenishment setup',
  'Hallways, corridors, and common areas',
  'High-touch surfaces: door handles, light switches, shared equipment',
  'Floor vacuuming and mopping or hard-floor care',
  'Trash removal and liner replacement',
  'Interior glass and partition surfaces',
];

// Access exclusions (Section 5), the trust differentiator. Legal-materials bullet
// is worded as an access exclusion, not a compliance claim, per copy rules.
const accessExclusions = [
  'Client files, case files, and open legal documents',
  'File rooms and document storage areas',
  'Secure storage areas',
  'Privileged or confidential client materials of any kind',
  'Any area the firm designates as restricted or off-limits',
];

// North Las Vegas-specific context (Section 6), anti-doorway
const nlvContextCards = [
  {
    heading: 'Community-focused practices on accessible corridors',
    body: "North Las Vegas law offices primarily serve the city's large residential population rather than corporate or downtown-corridor clients. Practices along Lamb Boulevard, Craig Road, and Cheyenne Avenue are accessible, community-oriented offices where the reception area and waiting room set the client's impression of the firm. A consistently clean office signals the same reliability clients want from their legal representation.",
  },
  {
    heading: 'Smaller legal footprint than Las Vegas or Henderson',
    body: 'North Las Vegas does not have the concentration of large law firms, courthouse-adjacent practices, or Summerlin-style professional office parks that Las Vegas and Henderson have. Legal offices here are more often small practices or solo practitioners serving local clients. Final Touch scopes and prices accordingly, without applying a large-firm template to a North Las Vegas practice.',
  },
  {
    heading: 'Owner-led walkthrough, confirmed scope, no assumptions',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a North Las Vegas firm administrator or solo attorney comparing cleaning services, the difference between an owner confirming scope and access directly and a generic commercial quote is a program that fits your specific office versus one sized for a different market entirely. Scope, access, and scheduling are all confirmed before the first clean.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Law Firm Cleaning in Las Vegas', href: '/industries/law-firm-cleaning/las-vegas' },
  { label: 'Law Firm Cleaning in Henderson', href: '/industries/law-firm-cleaning/henderson' },
];

// Related services (Section 8)
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services');

const relatedServiceCards = [
  commercialOffice && {
    name: commercialOffice.name,
    href: commercialOffice.href,
    description: commercialOffice.shortDescription,
    image: commercialOffice.image,
  },
  janitorial && {
    name: janitorial.name,
    href: janitorial.href,
    description: janitorial.shortDescription,
    image: janitorial.image,
  },
  {
    name: 'Commercial Office Cleaning in North Las Vegas',
    href: '/services/commercial-office-cleaning/north-las-vegas',
    description:
      'Recurring commercial cleaning for North Las Vegas offices and businesses across Clark County.',
    image: commercialOffice?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function LawFirmCleaningNorthLasVegasPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Law Firm Cleaning · North Las Vegas, NV"
        heading="Law Firm Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas has law offices and legal practices serving its large and growing residential population along its commercial corridors. Final Touch provides recurring professional cleaning for law firms and legal offices across North Las Vegas and ${SITE.serviceArea.county}. Scope confirmed per firm. After-hours scheduling available.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/law-firm-cleaning-north-las-vegas-nv-hero-image.webp',
          alt: 'Law firm cleaning in North Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Law firm cleaning in North Las Vegas is a recurring professional cleaning program for
            client-facing and operational areas of legal offices: reception and waiting rooms,
            conference rooms, attorney offices, staff workspaces, restrooms, and high-touch surfaces
            throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves law firms, solo practitioners, and legal offices across North Las Vegas and{' '}
            {SITE.serviceArea.county}. Scope is confirmed per firm and scheduled around your client
            hours. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your office.
          </p>
        </div>
      </section>

      {/* 3. Who hires this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Law firms and legal offices serving North Las Vegas."
            sub="North Las Vegas's legal market primarily serves its large residential population with community-focused practices along the city's commercial corridors."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audienceCards.map((item) => (
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

      {/* 4. What is included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What law firm cleaning covers."
            sub="Scope covers client-facing and operational areas. Confirmed per North Las Vegas firm layout at the initial walkthrough."
          />
          <ul className="mt-8 space-y-3">
            {scopeChecklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            File rooms, secure storage, and any areas the firm designates as restricted are excluded
            from scope and confirmed at the walkthrough. Scope is based on your North Las Vegas
            firm&apos;s specific layout.
          </p>
        </div>
      </section>

      {/* 5. What Final Touch does not access */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Access and scope boundaries"
            heading="What Final Touch does not access in a North Las Vegas law firm."
            sub="Clear boundaries confirmed before the program begins."
          />
          <ul className="mt-8 space-y-3">
            {accessExclusions.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-muted mt-0.5 shrink-0">
                  &#8226;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-brand-black leading-relaxed">
            Final Touch does not handle, move, or access documents or materials of any kind. Cleaning
            scope is limited to surface and facility areas confirmed at the initial walkthrough.
            Access restrictions specific to your North Las Vegas firm are part of the scope
            conversation from day one.
          </p>
        </div>
      </section>

      {/* 6. North Las Vegas-specific context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Law firm cleaning in North Las Vegas"
            heading="What shapes the North Las Vegas legal office cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {nlvContextCards.map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service area chips */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Law firm cleaning across North Las Vegas and Clark County."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {serviceAreaChips.map(({ label, href }) => (
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

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Other cleaning services for North Las Vegas businesses."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.href} className="h-full">
                <ServiceCard
                  href={card.href}
                  name={card.name}
                  description={card.description}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        items={faq}
        heading="Law firm cleaning in North Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need law firm cleaning in North Las Vegas?"
        sub={`Free quotes for law firm and legal office cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
