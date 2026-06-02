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
  title: 'Medical Office Cleaning in North Las Vegas, NV | Final Touch',
  description:
    'Professional cleaning for medical offices, dental practices, and clinics in North Las Vegas, NV. Final Touch serves healthcare offices across Clark County. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/medical-office-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Medical Office Cleaning in North Las Vegas, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for medical offices, dental practices, and clinics in North Las Vegas, NV. Final Touch serves healthcare offices across Clark County. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/medical-office-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does medical office cleaning include in North Las Vegas?',
    a: `Medical office cleaning by Final Touch in North Las Vegas covers patient-facing and administrative areas: reception counters and waiting rooms, restrooms, exam room surfaces excluding clinical equipment and clinical procedure areas, hallways, staff break rooms, and high-touch points including door handles, light switches, countertops, and shared surfaces. Scope is confirmed per practice during the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not clean in a North Las Vegas medical office?',
    a: 'Final Touch does not clean clinical equipment, procedure tables, clinical instrument fields, clinical procedure areas, medical waste handling areas, bloodborne pathogen cleanup, or zones requiring biomedical or hazardous-material handling protocols. Every exclusion is noted and confirmed during the initial walkthrough so there are no surprises on cleaning day.',
  },
  {
    q: 'Does Final Touch clean dental offices in North Las Vegas?',
    a: `Yes. Final Touch serves dental practices in North Las Vegas and across ${SITE.serviceArea.county}, cleaning patient-facing areas: waiting rooms, reception, restrooms, and hallways. Dental office scope is confirmed per practice at the initial walkthrough. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'Can Final Touch clean a North Las Vegas medical office after hours?',
    a: `Yes. Final Touch schedules cleaning around your appointment hours, including before the practice opens or after the last patient leaves. Access timing and any restricted areas are confirmed at the initial walkthrough. After-hours scheduling is available across North Las Vegas and the broader ${SITE.serviceArea.county} service area.`,
  },
  {
    q: 'How do I get a cleaning quote for my medical practice in North Las Vegas?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your practice, confirm scope, frequency, and access requirements, and quote based on what the job actually requires. No templated rates and no assumptions about your specific practice layout.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Office Cleaning in North Las Vegas, NV',
  serviceType: 'Medical Office Cleaning',
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Commercial & Office Cleaning',
      item: `${SITE.url}/services/commercial-office-cleaning`,
    },
    // TODO-BATCH-7: update breadcrumb parent to /industries hub when built
    { '@type': 'ListItem', position: 4, name: 'Medical Office Cleaning in North Las Vegas' },
  ],
};

// Audience cards (Section 3), North Las Vegas-specific
const audienceCards = [
  {
    title: 'Primary care and family practices',
    body: 'North Las Vegas has a growing residential population that requires access to primary care, family medicine, and general health services. These practices serve high patient volumes relative to their office size and need consistent cleaning aligned with daily appointment schedules. Reception areas and waiting rooms see heavy use and require frequent attention.',
  },
  {
    title: 'Dental offices and orthodontic practices',
    body: "Dental and orthodontic practices in North Las Vegas serve the city's residential communities along its commercial corridors. These offices need recurring cleaning of patient-facing areas: waiting rooms, reception, restrooms, and hallways. Scope is confirmed per practice at the initial walkthrough.",
  },
  {
    title: 'Specialist clinics and community health offices',
    body: 'Specialist practices, vision centers, and community health clinics in North Las Vegas serve patients across the city and nearby residential areas. Each has patient-facing areas that require consistent cleaning aligned with appointment schedules and practice-specific access requirements.',
  },
  {
    title: 'Small medical and healthcare-adjacent offices',
    body: 'North Las Vegas has small professional offices providing healthcare-adjacent services: physical therapy, chiropractic, optometry, and similar practices. These offices often operate in mixed commercial formats and need professional cleaning on a schedule that fits their operating hours and budget.',
  },
];

// Scope checklist (Section 4)
const scopeChecklist = [
  'Reception desk and front-counter surfaces',
  'Waiting room seating, tables, and patient literature areas',
  'Exam room surfaces: countertops, sinks, door handles (excluding clinical equipment and clinical procedure areas)',
  'Staff break room and kitchen areas',
  'Restrooms: fixtures, tile, mirrors, replenishment setup',
  'Hallways, corridors, and common areas throughout',
  'High-touch surfaces: door handles, light switches, shared equipment surfaces',
  'Floor vacuuming and mopping or hard-floor care',
  'Trash removal and liner replacement',
  'Interior glass and partition surfaces',
];

// Scope exclusions (Section 5), includes confirmed owner exclusion: bloodborne pathogen cleanup
const scopeExclusions = [
  'Clinical equipment and procedure tables',
  'Clinical instrument fields and clinical procedure areas',
  'Medical waste handling areas and biohazard receptacles',
  'Bloodborne pathogen cleanup or biological waste remediation',
  'Areas requiring biomedical or hazardous-material handling protocols',
  'Any zone the practice designates as restricted or off-limits',
];

// North Las Vegas-specific context (Section 6), anti-doorway
const nlvContextCards = [
  {
    heading: 'A growing residential population drives healthcare demand',
    body: "North Las Vegas has been one of the fastest-growing residential areas in the Las Vegas Valley. That growth has brought a steady increase in demand for primary care, dental, and general health services serving the city's residents. The medical offices that serve this population are community-focused practices that operate on predictable schedules and need a cleaning partner who shows up consistently.",
  },
  {
    heading: 'Smaller medical footprint than Las Vegas or Henderson',
    body: "North Las Vegas does not have the same concentration of specialist practices and medical office buildings that Henderson's Green Valley Parkway corridor or Las Vegas's larger commercial zones have. Medical offices here are more often standalone practices or small multi-tenant buildings serving local residents. Final Touch scopes and schedules accordingly, without applying a Las Vegas or Henderson template to a North Las Vegas practice.",
  },
  {
    heading: 'Scheduling around community practice hours',
    body: `North Las Vegas medical practices typically operate on standard community healthcare hours rather than extended or tourism-adjacent schedules. Before-open and after-close cleaning windows are reliably available. ${SITE.owners} confirm access timing at the initial walkthrough and do not assume a standard window fits every practice layout.`,
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
  { label: 'Medical Office Cleaning in Las Vegas', href: '/industries/medical-office-cleaning/las-vegas' },
  { label: 'Medical Office Cleaning in Henderson', href: '/industries/medical-office-cleaning/henderson' },
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
      'Recurring commercial cleaning for North Las Vegas offices, facility workspaces, and businesses across Clark County.',
    image: commercialOffice?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function MedicalOfficeCleaningNorthLasVegasPage() {
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
        eyebrow="Medical Office Cleaning · North Las Vegas, NV"
        heading="Medical Office Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas has medical offices, dental practices, and clinics serving its large residential population alongside its industrial and commercial corridors. Final Touch provides recurring professional cleaning for healthcare practices across North Las Vegas and ${SITE.serviceArea.county}. Scope confirmed per practice. Scheduling around your appointment hours.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/medical-office-cleaning-north-las-vegas-nv-hero-image.webp',
          alt: 'Medical office cleaning in North Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Medical office cleaning in North Las Vegas is a recurring professional cleaning program
            for the patient-facing and administrative areas of healthcare practices: reception,
            waiting rooms, restrooms, hallways, exam room surfaces, and high-touch points
            throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves medical offices, dental practices, and clinics across North Las Vegas and{' '}
            {SITE.serviceArea.county}. Scope is confirmed per practice and scheduled around your
            appointment hours. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your practice.
          </p>
        </div>
      </section>

      {/* 3. Who hires this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Medical and healthcare offices across North Las Vegas."
            sub="North Las Vegas's healthcare sector serves a large residential population that has grown significantly over the last decade."
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
            heading="What medical office cleaning covers."
            sub="Scope covers patient-facing and administrative areas. Confirmed per North Las Vegas practice at the initial walkthrough."
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
            Scope, schedule, and access requirements are confirmed during the initial walkthrough
            before the program begins. Any areas with specialized handling requirements are noted
            and excluded at that stage.
          </p>
        </div>
      </section>

      {/* 5. What Final Touch does not clean */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope exclusions"
            heading="What Final Touch does not clean in a medical office."
            sub="Clear scope boundaries protect your practice and set the right expectations before the first clean."
          />
          <ul className="mt-8 space-y-3">
            {scopeExclusions.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-muted mt-0.5 shrink-0">
                  &#8226;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-brand-black leading-relaxed">
            Every exclusion is noted during the initial walkthrough and confirmed before the
            program begins. If your North Las Vegas practice has areas with specific access or
            handling requirements, those are part of the scope conversation from day one.
          </p>
        </div>
      </section>

      {/* 6. North Las Vegas-specific context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Medical office cleaning in North Las Vegas"
            heading="What shapes the North Las Vegas medical office cleaning market."
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
            heading="Medical office cleaning across North Las Vegas and Clark County."
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
        heading="Medical office cleaning in North Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need medical office cleaning in North Las Vegas?"
        sub={`Free quotes for medical, dental, and clinic cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
