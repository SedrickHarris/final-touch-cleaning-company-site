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
  title: 'Law Firm Cleaning in Henderson, NV | Final Touch',
  description:
    'Professional cleaning for law firms and legal offices in Henderson, NV. Green Valley Parkway corridor and citywide. Owner-led walkthroughs. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/law-firm-cleaning/henderson`,
  },
  openGraph: {
    title: 'Law Firm Cleaning in Henderson, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for law firms and legal offices in Henderson, NV. Green Valley Parkway corridor and citywide. Owner-led walkthroughs. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/law-firm-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does law firm cleaning include in Henderson, NV?',
    a: `Law firm cleaning by Final Touch in Henderson covers client-facing and operational areas of legal offices: reception and waiting areas, conference and meeting rooms, attorney offices, staff workstations, break rooms, restrooms, and high-touch surfaces throughout. Scope is confirmed per office layout at the initial walkthrough before any program begins. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not access in a Henderson law firm?',
    a: 'Final Touch does not access client files, case files, open legal documents, file rooms, secure storage, or any area the firm designates as restricted. Cleaning scope covers surface and facility areas only, confirmed explicitly at the walkthrough. Final Touch does not handle, move, or access documents or materials of any kind.',
  },
  {
    q: 'Can Final Touch clean a Henderson law office after hours?',
    a: 'Yes. Most Henderson law firms prefer after-hours or early-morning cleaning to avoid disruption during client meetings and consultations. Final Touch schedules cleaning around your office hours. Access timing, building security procedures, and any restricted areas are all confirmed at the initial walkthrough before the program begins.',
  },
  {
    q: 'Does Final Touch serve law firms along Green Valley Parkway in Henderson?',
    a: `Yes. Final Touch serves law firms, legal offices, and professional services firms along Green Valley Parkway, Sunset Road, and the surrounding Henderson commercial corridors. Henderson's suburban professional character makes it a strong market for recurring legal office cleaning programs. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my law firm in Henderson?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your office, confirm scope, frequency, access requirements, and any restricted areas, and quote based on what the job actually requires. No templated rates and no assumptions about your Henderson firm's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm Cleaning in Henderson, NV',
  serviceType: 'Law Firm Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Henderson, NV' },
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
      name: 'Law Firm Cleaning in Henderson',
      item: `${SITE.url}/industries/law-firm-cleaning/henderson`,
    },
  ],
};

// Audience cards (Section 3), Henderson-specific
const audienceCards = [
  {
    title: 'Green Valley Parkway law offices and professional services firms',
    body: "Henderson's primary commercial corridor along Green Valley Parkway and Sunset Road includes a concentration of law offices and professional services firms serving the surrounding master-planned communities. These firms operate in office park settings with client-facing reception areas and conference rooms that require a consistent professional cleaning standard.",
  },
  {
    title: 'Family law, estate planning, and community-serving practices',
    body: "Henderson's large, established residential population generates strong demand for family law, estate planning, real estate, and similar community-serving legal practices. These firms see a consistent client flow and need a cleaning program that maintains a professional, welcoming office environment on every visit.",
  },
  {
    title: 'Multi-attorney firms and professional office suites',
    body: 'Henderson mid-size firms with multiple attorney offices, paralegal workspaces, conference rooms, and a dedicated reception area need a recurring program covering every area consistently. Scope and frequency are confirmed per floor plan at the initial walkthrough.',
  },
  {
    title: 'Solo practitioners and small legal offices',
    body: 'Solo attorneys and small Henderson firms with one or two offices and a shared reception area need professional cleaning on a schedule that fits their size and budget. Final Touch serves small legal offices across Henderson on recurring programs without the cost structure of a large commercial contract.',
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

// Henderson-specific context (Section 6), anti-doorway
const hendersonContextCards = [
  {
    heading: 'Suburban professional corridors, predictable client schedules',
    body: 'Henderson law firms serve a residential client base on predictable business-hours schedules. Unlike Las Vegas firms near the courthouse with early-morning deposition pressure, most Henderson legal offices operate on standard professional schedules. This makes before-open and after-close cleaning windows reliably available and straightforward to schedule around client appointments.',
  },
  {
    heading: 'Conference rooms and reception are the client impression',
    body: 'In a law firm, the reception area and conference room are where clients form their lasting impression of the practice. A clean conference table, spotless glass, and a well-maintained reception counter reflect the same attention to detail the firm applies to legal work. Final Touch covers these areas on every visit, not on request.',
  },
  {
    heading: 'Owner-led walkthrough, confirmed scope',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Henderson firm administrator comparing cleaning services, the difference between an owner walking your office and confirming access and scope directly versus a template quote is the difference between a program that fits and one that creates problems on day one. Scope, restricted areas, and scheduling are confirmed before the first clean.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Law Firm Cleaning in Las Vegas', href: '/industries/law-firm-cleaning/las-vegas' },
  { label: 'Law Firm Cleaning in North Las Vegas', href: '/industries/law-firm-cleaning/north-las-vegas' },
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
    name: 'Commercial Office Cleaning in Henderson',
    href: '/services/commercial-office-cleaning/henderson',
    description:
      'Recurring commercial cleaning for Henderson offices along Green Valley Parkway and across Clark County.',
    image: commercialOffice?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function LawFirmCleaningHendersonPage() {
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
        eyebrow="Law Firm Cleaning · Henderson, NV"
        heading="Law Firm Cleaning in Henderson, NV"
        sub={`Henderson law firms and legal offices are concentrated along Green Valley Parkway and the Sunset Road corridor, serving the city's established professional and residential base. Final Touch provides recurring professional cleaning for law firms and legal offices across Henderson and ${SITE.serviceArea.county}. Scope confirmed per firm. After-hours scheduling available.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/law-firm-cleaning-henderson-nv-hero-image.webp',
          alt: 'Law firm cleaning in Henderson, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Law firm cleaning in Henderson is a recurring professional cleaning program for
            client-facing and operational areas of legal offices: reception and waiting rooms,
            conference rooms, attorney offices, staff workspaces, restrooms, and high-touch surfaces
            throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves law firms and legal offices along Green Valley Parkway and across Henderson and{' '}
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
            heading="Law firms and legal offices across Henderson's professional corridors."
            sub="Henderson's legal market is concentrated along suburban commercial corridors serving the city's large established residential communities."
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
            sub="Scope covers client-facing and operational areas. Confirmed per Henderson firm layout at the initial walkthrough."
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
            from scope and confirmed at the walkthrough. Scope is based on your Henderson firm&apos;s
            specific layout, not a generic commercial template.
          </p>
        </div>
      </section>

      {/* 5. What Final Touch does not access */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Access and scope boundaries"
            heading="What Final Touch does not access in a Henderson law firm."
            sub="Clear boundaries confirmed before the program begins. No surprises on day one."
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
            Access restrictions and security requirements specific to your Henderson firm are part of
            the scope conversation from day one.
          </p>
        </div>
      </section>

      {/* 6. Henderson-specific character */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Law firm cleaning in Henderson"
            heading="What shapes Henderson's legal office cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {hendersonContextCards.map(({ heading, body }) => (
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
            heading="Law firm cleaning across Henderson and Clark County."
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
            heading="Other cleaning services for Henderson businesses."
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
        heading="Law firm cleaning in Henderson: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need law firm cleaning in Henderson?"
        sub={`Free quotes for law firm and legal office cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
