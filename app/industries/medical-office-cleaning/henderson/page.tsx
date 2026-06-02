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
  title: 'Medical Office Cleaning in Henderson, NV | Final Touch',
  description:
    'Professional cleaning for medical offices and clinics along Green Valley Parkway and across Henderson, NV. Owner-led walkthroughs. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/medical-office-cleaning/henderson`,
  },
  openGraph: {
    title: 'Medical Office Cleaning in Henderson, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for medical offices and clinics along Green Valley Parkway and across Henderson, NV. Owner-led walkthroughs. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/medical-office-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does medical office cleaning include in Henderson, NV?',
    a: `Medical office cleaning by Final Touch in Henderson covers patient-facing and administrative areas: reception counters and waiting rooms, restrooms, exam room surfaces excluding clinical equipment and clinical fields, hallways, staff break rooms, and high-touch points including door handles, light switches, countertops, and shared surfaces. Scope is confirmed per practice during the initial walkthrough before any program begins. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not clean in a Henderson medical office?',
    a: 'Final Touch does not clean clinical equipment, procedure tables, clinical instrument fields, medical waste handling areas, or zones requiring biomedical or hazardous-material handling protocols. Every exclusion is noted and confirmed during the initial walkthrough so there are no surprises. Scope covers patient-facing and administrative areas of the office only.',
  },
  {
    q: 'Does Final Touch serve medical offices along Green Valley Parkway in Henderson?',
    a: `Yes. Final Touch serves medical practices, specialist clinics, and healthcare-adjacent professional offices along Green Valley Parkway, Sunset Road, and the surrounding Henderson commercial corridors. Henderson's medical concentration along these corridors is one of the densest in ${SITE.serviceArea.county}. Call ${SITE.phone.display} or request a free quote online to discuss your practice.`,
  },
  {
    q: 'How is Henderson medical office cleaning different from Las Vegas?',
    a: "Henderson's medical sector is concentrated along suburban commercial corridors rather than spread across a large metro. Most practices operate on predictable business-hours schedules. Final Touch schedules Henderson medical office cleaning around your specific hours, typically early morning before opening or after the last appointment of the day, without the extended-hours pressure of the Las Vegas market.",
  },
  {
    q: 'How often should a medical office in Henderson be cleaned?',
    a: 'Most Henderson medical offices benefit from daily or several-times-per-week professional cleaning given the foot traffic and patient-facing expectations of a healthcare environment. The right cadence depends on patient volume, exam room count, and appointment hours. Final Touch confirms frequency during the initial walkthrough based on your practice layout, not a standard template.',
  },
  {
    q: 'Can Final Touch clean a Henderson medical office after hours?',
    a: `Yes. Final Touch schedules cleaning around your appointment hours, including before the practice opens or after the last patient leaves. Access timing and any restricted areas are confirmed at the initial walkthrough. After-hours scheduling is available across Henderson and the broader ${SITE.serviceArea.county} service area.`,
  },
  {
    q: 'Does Final Touch clean dental offices in Henderson?',
    a: `Yes. Final Touch serves Henderson dental practices, cleaning patient-facing areas: waiting rooms, reception, restrooms, and hallways. Dental office scope is confirmed per practice at the initial walkthrough. Henderson has a significant concentration of dental and orthodontic practices along its commercial corridors. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my medical practice in Henderson?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your practice, confirm scope, frequency, and access requirements, and quote based on what the job actually requires. No templated rates and no guesswork about your Henderson practice layout.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Office Cleaning in Henderson, NV',
  serviceType: 'Medical Office Cleaning',
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Commercial & Office Cleaning',
      item: `${SITE.url}/services/commercial-office-cleaning`,
    },
    // TODO-BATCH-7: update breadcrumb parent to /industries hub when built
    { '@type': 'ListItem', position: 4, name: 'Medical Office Cleaning in Henderson' },
  ],
};

// Audience cards (Section 3), Henderson-specific
const audienceCards = [
  {
    title: 'Green Valley Parkway medical practices',
    body: "Henderson's primary commercial corridor concentrates a significant number of medical offices, specialty clinics, and healthcare-adjacent professional services along Green Valley Parkway and Sunset Road. These practices serve a large, established residential base including patients from Anthem, Seven Hills, MacDonald Highlands, and Green Valley Ranch. A consistent professional cleaning standard is a baseline expectation for this patient demographic.",
  },
  {
    title: 'Dental offices and orthodontic practices',
    body: 'Henderson has a notable concentration of dental and orthodontic practices serving its master-planned communities. These offices need recurring cleaning of patient-facing areas: reception, waiting rooms, restrooms, and hallways. Henderson dental practices often run early-morning and after-school appointment windows. Final Touch schedules around your hours, not a standard commercial window.',
  },
  {
    title: 'Specialist clinics and outpatient facilities',
    body: 'Specialist practices, vision centers, physical therapy clinics, and outpatient facilities in Henderson serve a broad suburban patient base. Each has patient-facing areas that require consistent, reliable cleaning aligned with appointment schedules and practice-specific access requirements. Scope is confirmed per facility at the walkthrough.',
  },
  {
    title: 'Multi-practice and shared medical office buildings',
    body: "Henderson medical office buildings housing multiple practices share lobbies, hallways, and restrooms requiring a building-wide recurring program. Final Touch serves both individual practices and building-level janitorial programs for shared medical office space across Henderson's commercial corridors.",
  },
];

// Scope checklist (Section 4)
const scopeChecklist = [
  'Reception desk and front-counter surfaces',
  'Waiting room seating, tables, and patient literature areas',
  'Exam room surfaces: countertops, sinks, door handles (excluding equipment and clinical fields)',
  'Staff break room and kitchen areas',
  'Restrooms: fixtures, tile, mirrors, replenishment setup',
  'Hallways, corridors, and common areas throughout',
  'High-touch surfaces: door handles, light switches, shared equipment surfaces',
  'Floor vacuuming and mopping or hard-floor care',
  'Trash removal and liner replacement',
  'Interior glass and partition surfaces',
];

// Scope exclusions (Section 5)
const scopeExclusions = [
  'Clinical equipment and procedure tables',
  'Clinical instrument fields and clinical preparation zones',
  'Medical waste handling areas and biohazard receptacles',
  'Bloodborne pathogen cleanup or biological waste remediation',
  'Areas requiring biomedical or hazardous-material protocols',
  'Any zone the practice designates as restricted or off-limits',
];

// Henderson-specific context (Section 6), anti-doorway
const hendersonContextCards = [
  {
    heading: "Green Valley Parkway: Henderson's medical corridor",
    body: "Green Valley Parkway and the Sunset Road intersection anchor Henderson's primary commercial zone and its densest concentration of medical offices and specialty practices. This corridor serves patients from the surrounding master-planned communities, including Anthem, Green Valley Ranch, Seven Hills, and MacDonald Highlands. The practices here serve an established, professionally oriented patient base that expects a consistent, presentable office environment.",
  },
  {
    heading: 'Suburban scheduling is more predictable than in Las Vegas',
    body: 'Henderson medical practices run on business-hours appointment schedules without the extended-hours pressure of the Las Vegas tourism economy. Most practices open between 8 and 9 AM and close by early evening. This makes before-open and after-close cleaning windows more predictable and more reliably available than in Las Vegas. Final Touch confirms your specific window at the walkthrough.',
  },
  {
    heading: 'Owner-led walkthrough, not a templated quote',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Henderson practice manager comparing cleaning services, the difference between an owner walking your office and a sales rep sending a template quote is the difference between a cleaning program that fits your specific layout and one built for a generic medical office. Scope, frequency, and access are confirmed based on your actual practice, not an industry average.`,
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
  { label: 'Medical Office Cleaning in Las Vegas', href: '/industries/medical-office-cleaning/las-vegas' },
  { label: 'Medical Office Cleaning in North Las Vegas', href: '/industries/medical-office-cleaning/north-las-vegas' },
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

export default function MedicalOfficeCleaningHendersonPage() {
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
        eyebrow="Medical Office Cleaning · Henderson, NV"
        heading="Medical Office Cleaning in Henderson, NV"
        sub={`Henderson has a notable concentration of medical offices, specialist clinics, and dental practices along Green Valley Parkway and the Sunset Road corridor. Final Touch provides recurring professional cleaning for healthcare practices across Henderson and ${SITE.serviceArea.county}. Scope confirmed per practice. Scheduling around your appointment hours.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/medical-office-cleaning-henderson-nv-hero-image.webp',
          alt: 'Medical office cleaning in Henderson, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Medical office cleaning in Henderson is a recurring professional cleaning program for
            the patient-facing and administrative areas of healthcare practices along the Green
            Valley Parkway corridor and across the city: reception, waiting rooms, restrooms,
            hallways, exam room surfaces, and high-touch points throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves medical offices, dental practices, specialist clinics, and outpatient facilities
            in Henderson and {SITE.serviceArea.county}. Scope is confirmed per practice and
            scheduled around your hours. Call{' '}
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
            heading="Medical and healthcare offices across Henderson's commercial corridors."
            sub="Henderson's healthcare sector is concentrated along Green Valley Parkway and Sunset Road, serving the city's large established residential communities."
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
            sub="Scope covers patient-facing and administrative areas. Confirmed per Henderson practice at the initial walkthrough."
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
            heading="What Final Touch does not clean in a Henderson medical office."
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
            program begins. If your Henderson practice has areas with specific access or handling
            requirements, those are part of the scope conversation from day one.
          </p>
        </div>
      </section>

      {/* 6. Henderson-specific character */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Medical office cleaning in Henderson"
            heading="What shapes Henderson's medical office cleaning market."
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
            heading="Medical office cleaning across Henderson and Clark County."
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
        heading="Medical office cleaning in Henderson: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need medical office cleaning in Henderson?"
        sub={`Free quotes for medical, dental, and clinic cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
