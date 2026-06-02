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
  title: 'Law Firm Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Professional cleaning for law firms and legal offices in Las Vegas, NV. After-hours scheduling, owner-led walkthroughs. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/law-firm-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Law Firm Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for law firms and legal offices in Las Vegas, NV. After-hours scheduling, owner-led walkthroughs. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/law-firm-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does law firm cleaning include in Las Vegas?',
    a: `Law firm cleaning by Final Touch covers client-facing and operational areas of legal offices: reception and waiting areas, conference and meeting rooms, partner and associate offices, staff workstations, break rooms, restrooms, and high-touch surfaces throughout including door handles, light switches, and shared equipment. Scope is confirmed per office layout during the initial walkthrough before any program begins. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What areas of a Las Vegas law office does Final Touch clean?',
    a: 'Final Touch cleans the client-facing and operational areas of law offices: reception, waiting rooms, conference rooms, individual offices, hallways, break rooms, restrooms, and common areas. File rooms, secure storage, and any designated restricted areas are noted and excluded at the walkthrough. Scope is confirmed per firm based on your specific layout and access requirements.',
  },
  {
    q: 'Can Final Touch clean a Las Vegas law firm after hours?',
    a: 'Yes. Most law firms in Las Vegas prefer after-hours or early-morning cleaning to avoid disruption during client meetings and depositions. Final Touch schedules cleaning around your office hours. Access timing, building security procedures, and any restricted areas are confirmed at the initial walkthrough before the program begins.',
  },
  {
    q: 'How often should a law office in Las Vegas be cleaned?',
    a: "Most Las Vegas law offices benefit from twice-weekly or daily professional cleaning, depending on firm size, client visit frequency, and conference room use. High-traffic reception and client-facing areas typically need more frequent attention than back-office workspaces. Final Touch confirms the right cadence during the initial walkthrough based on your firm's specific layout and schedule.",
  },
  {
    q: 'What makes law firm cleaning different from standard commercial cleaning?',
    a: 'Law firms have client-facing spaces that set a professional impression from the moment a client walks in, conference rooms used for sensitive meetings that require discretion and consistency, and office environments where confidential files and materials are present. Final Touch cleans around your operations without accessing file storage, secure areas, or materials. Scope and access are confirmed explicitly at the walkthrough.',
  },
  {
    q: 'Is confidentiality a concern when hiring a cleaning service for a Las Vegas law firm?',
    a: 'It is a reasonable concern and one Final Touch addresses directly. Cleaning scope covers surface and facility areas only. File rooms, open case files, client materials, and any areas the firm designates as restricted are excluded from scope and confirmed at the walkthrough. Final Touch does not handle, move, or access documents or materials. Access is limited to the areas explicitly confirmed at scope-setting.',
  },
  {
    q: 'What should I look for in a cleaning service for a Las Vegas law firm?',
    a: `Look for a company that confirms scope per your office layout rather than applying a generic commercial template, schedules around client hours and depositions, and gives you direct access to the ownership rather than a call center. Final Touch is owned and run by ${SITE.owners}, who conduct walkthroughs personally and confirm every scope detail directly with the firm's office manager or administrator.`,
  },
  {
    q: 'How do I get a cleaning quote for my law firm in Las Vegas?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your office, confirm scope, frequency, access requirements, and any restricted areas, and quote based on what the job actually requires. No templated rates and no assumptions about your firm's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Law Firm Cleaning in Las Vegas, NV',
  serviceType: 'Law Firm Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Las Vegas, NV' },
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
      name: 'Law Firm Cleaning in Las Vegas',
      item: `${SITE.url}/industries/law-firm-cleaning/las-vegas`,
    },
  ],
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Downtown and courthouse-adjacent law firms',
    body: 'Las Vegas law firms concentrated near the Regional Justice Center, the federal courthouse, and the downtown civic center operate in multi-story office buildings with shared lobbies, conference suites, and high client foot traffic. These firms need after-hours cleaning that maintains a consistent standard without disrupting courtroom preparation schedules.',
  },
  {
    title: 'Summerlin and corridor-based practices',
    body: "Professional services firms and law offices in Summerlin and along the city's suburban commercial corridors serve clients in professional office park settings. These practices typically maintain well-appointed reception areas and conference rooms for client meetings and need a cleaning standard that matches the office environment they present.",
  },
  {
    title: 'Mid-size and regional law firms',
    body: 'Mid-size firms with multiple attorney offices, paralegal workspaces, conference rooms, and a dedicated reception area need a recurring program that covers every area consistently. Final Touch confirms scope per floor plan and applies the same standard to partner offices and staff workspaces without the need for active supervision.',
  },
  {
    title: 'Solo practitioners and small legal offices',
    body: 'Solo attorneys and small firms with one or two offices and a shared reception area need professional cleaning on a schedule that fits their size and budget. Final Touch serves small legal offices across Las Vegas on recurring programs that maintain the professional standard without the cost structure of a large commercial contract.',
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

// Access exclusions (Section 5), the trust differentiator. The legal-materials
// bullet is worded as an access exclusion, not a compliance claim, per copy rules.
const accessExclusions = [
  'Client files, case files, and open legal documents',
  'File rooms and document storage areas',
  'Secure storage and evidence rooms',
  'Privileged or confidential client materials of any kind',
  'Any area the firm designates as restricted or off-limits',
];

// Law-firm-specific context (Section 6), anti-doorway
const lawContextCards = [
  {
    heading: 'Conference rooms and reception set the client impression',
    body: 'In a law firm, conference rooms and reception areas are where clients form their first and most lasting impressions of the practice. A spotless conference table, clean glass, and a well-maintained reception counter communicate the same attention to detail the firm applies to legal work. These areas require consistent, reliable cleaning on every visit, not an average standard across a week.',
  },
  {
    heading: 'Scheduling around depositions, hearings, and client meetings',
    body: "Law firms operate on schedules driven by court dates, depositions, and client meetings, not standard business hours. A cleaning service that works only 9-to-5 does not fit a firm with early-morning depositions or late client consultations. Final Touch confirms access timing at the walkthrough and schedules cleaning around your firm's actual calendar, not a default commercial window.",
  },
  {
    heading: 'Owner-led walkthrough, confirmed scope, no assumptions',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a law firm administrator comparing cleaning services, the difference between an owner walking your office and confirming every access detail versus a sales rep sending a standard commercial quote is the difference between a program that fits your firm's specific requirements and one that creates problems on day one. Scope, access, restricted areas, and scheduling are all confirmed before the first clean.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Law Firm Cleaning in Henderson', href: '/industries/law-firm-cleaning/henderson' },
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
    name: 'Commercial Office Cleaning in Las Vegas',
    href: '/services/commercial-office-cleaning/las-vegas',
    description:
      'Recurring commercial cleaning for Las Vegas offices and commercial spaces across Clark County.',
    image: commercialOffice?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function LawFirmCleaningLasVegasPage() {
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
        eyebrow="Law Firm Cleaning · Las Vegas, NV"
        heading="Law Firm Cleaning in Las Vegas, NV"
        sub={`Las Vegas has a substantial legal market, with law firms and legal offices concentrated downtown near the courthouse, in Summerlin, and across the city's professional services corridors. Final Touch provides recurring professional cleaning for law firms and legal offices across Las Vegas and ${SITE.serviceArea.county}. Scope confirmed per firm. After-hours scheduling available.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/law-firm-cleaning-las-vegas-nv-hero-image.webp',
          alt: 'Law firm cleaning in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Law firm cleaning in Las Vegas is a recurring professional cleaning program for the
            client-facing and operational areas of legal offices: reception and waiting rooms,
            conference rooms, attorney offices, staff workspaces, restrooms, and high-touch surfaces
            throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves law firms, solo practitioners, and legal offices across Las Vegas and{' '}
            {SITE.serviceArea.county}. Scope is confirmed per firm and scheduled around your client
            hours and depositions. Call{' '}
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
            heading="Law firms and legal offices across Las Vegas."
            sub="Las Vegas's legal market spans downtown courthouse-adjacent practices, suburban professional corridors, and every firm size from solo practitioners to regional offices."
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
            sub="Scope covers client-facing and operational areas of your legal office. Confirmed per firm layout during the initial walkthrough."
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
            from scope and confirmed at the walkthrough. Scope is based on your firm&apos;s specific
            layout, not a generic commercial office template.
          </p>
        </div>
      </section>

      {/* 5. What Final Touch does not access */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Access and scope boundaries"
            heading="What Final Touch does not access in a law firm."
            sub="Clear boundaries protect your clients, your firm, and your confidential materials. Every exclusion is confirmed before the program begins."
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
            scope is limited to surface and facility areas confirmed at the initial walkthrough. If
            your firm has areas with specific access restrictions or security requirements, those are
            part of the scope conversation from day one, not discovered on the first cleaning visit.
          </p>
        </div>
      </section>

      {/* 6. What makes law firm cleaning distinct */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Law firm cleaning in Las Vegas"
            heading="What makes legal office cleaning distinct from standard commercial cleaning."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {lawContextCards.map(({ heading, body }) => (
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
            heading="Law firm cleaning across Las Vegas and Clark County."
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
            heading="Other cleaning services for Las Vegas businesses."
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
        heading="Law firm cleaning in Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need law firm cleaning in Las Vegas?"
        sub={`Free quotes for law firm and legal office cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
