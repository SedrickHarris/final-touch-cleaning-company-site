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
  title: { absolute: 'Medical Office Cleaning in Las Vegas, NV | Final Touch' },
  description:
    'Professional cleaning for medical offices, dental practices, and clinics in Las Vegas, NV. Owner-led walkthroughs, after-hours scheduling. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/medical-office-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Medical Office Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for medical offices, dental practices, and clinics in Las Vegas, NV. Owner-led walkthroughs, after-hours scheduling. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/medical-office-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does medical office cleaning include in Las Vegas?',
    a: `Medical office cleaning by Final Touch covers patient-facing and administrative areas of healthcare practices: reception counters and waiting rooms, restrooms, exam room surfaces excluding clinical equipment and clinical fields, hallways, staff break rooms, and high-touch points throughout including door handles, light switches, countertops, and shared surfaces. Scope is confirmed per practice during the initial walkthrough before any program begins. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not clean in a medical office?',
    a: 'Final Touch does not clean clinical equipment, procedure tables, clinical instrument fields, medical waste handling areas, or any zone requiring biomedical or hazardous-material handling protocols. These areas require specialized handling outside the scope of professional office cleaning. Every exclusion is noted and confirmed during the initial walkthrough so there are no surprises on cleaning day.',
  },
  {
    q: 'How often should a medical office in Las Vegas be cleaned?',
    a: 'Most medical offices in Las Vegas benefit from daily or several-times-per-week professional cleaning. Patient volume, the number of exam rooms, and appointment hours determine the right cadence for a specific practice. Final Touch confirms frequency during the initial walkthrough rather than applying a fixed template across every practice type.',
  },
  {
    q: 'Can Final Touch clean a medical office after hours in Las Vegas?',
    a: `Yes. Final Touch schedules cleaning around your appointment hours, including before the practice opens or after it closes. Access timing, any restricted areas, and scheduling preferences are confirmed at the initial walkthrough. After-hours scheduling is available across the Las Vegas and ${SITE.serviceArea.county} service area.`,
  },
  {
    q: 'Does Final Touch clean dental offices in Las Vegas?',
    a: `Yes. Final Touch serves dental practices in Las Vegas and across ${SITE.serviceArea.county}, cleaning patient-facing areas: waiting rooms, reception, restrooms, hallways, and staff areas. Dental office scope is confirmed per practice during the initial walkthrough. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'Is medical office cleaning different from standard commercial cleaning?',
    a: 'Yes. Medical offices have higher foot traffic in patient-facing areas, stricter cleanliness expectations from patients and staff, and scheduling requirements tied to appointment hours rather than standard business hours. Final Touch scopes and schedules medical office cleaning specifically around these requirements, distinct from a standard office program.',
  },
  {
    q: 'What should I look for in a medical office cleaning service in Las Vegas?',
    a: `Look for a cleaning company that confirms scope per your practice layout rather than applying a generic template, schedules around your appointment hours, and gives you direct access to the ownership rather than routing you through a call center. Final Touch is owned and run by ${SITE.owners}, who conduct walkthroughs and confirm every scope personally. Call ${SITE.phone.display}.`,
  },
  {
    q: 'How do I get a cleaning quote for my medical practice in Las Vegas?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your practice, confirm scope, frequency, and access requirements, and quote based on what the job actually involves. No templated rates and no guesswork about your specific practice layout.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Medical Office Cleaning in Las Vegas, NV',
  serviceType: 'Medical Office Cleaning',
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
      name: 'Medical Office Cleaning in Las Vegas',
      item: `${SITE.url}/industries/medical-office-cleaning/las-vegas`,
    },
  ],
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Primary care and specialist practices',
    body: 'General practitioners, internists, cardiologists, dermatologists, and other specialist practices in Las Vegas maintain patient-facing offices that require consistent cleaning aligned with appointment hours. Reception areas and waiting rooms see high daily traffic and set the first impression for every patient who walks in.',
  },
  {
    title: 'Dental offices and orthodontic practices',
    body: 'Las Vegas dental practices ranging from single-dentist offices to multi-chair facilities need recurring cleaning of patient-facing areas: reception, waiting rooms, restrooms, and hallways. Dental practices often run early-morning and late-evening appointment schedules. Final Touch works around your hours, not a standard 9-to-5 window.',
  },
  {
    title: 'Specialist clinics and outpatient facilities',
    body: 'Specialist clinics, vision centers, physical therapy practices, outpatient surgery center common areas, and similar healthcare facilities need a professional cleaning standard in the areas where patients and staff interact daily. Scope is confirmed per facility based on your layout and patient-area footprint.',
  },
  {
    title: 'Multi-practice and shared medical office buildings',
    body: 'Medical office buildings housing multiple practices share lobbies, hallways, and restrooms that require a building-wide recurring cleaning program. Final Touch serves both individual practices and building-level programs for shared medical office space across Las Vegas.',
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

// Medical vs standard commercial (Section 6)
const distinctionCards = [
  {
    heading: 'Patient-facing presentation carries different weight',
    body: 'Patients assess a medical practice’s professionalism partly through its cleanliness. A waiting room, reception counter, or restroom that shows cleaning neglect affects patient confidence in a way that a back-office environment does not. Medical offices require a consistent standard in patient-visible areas on every visit, not an average standard across a week.',
  },
  {
    heading: 'Scheduling around appointment hours, not office hours',
    body: 'Most commercial cleaning can happen during off-hours for any business. Medical practices have a tighter scheduling requirement: cleaning must happen before the first appointment, between sessions, or after the last patient leaves. Final Touch confirms access timing at the walkthrough and does not assume a standard window works for a healthcare practice.',
  },
  {
    heading: 'Owner-led scope confirmation, not a template',
    body: `${SITE.owners} conduct every initial walkthrough personally. This means the people responsible for the standard are the ones who set it. For a medical practice manager comparing cleaning services, the difference between an owner walking your office and a sales rep sending a template quote is the difference between a program that fits and one that does not.`,
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
  { label: 'Medical Office Cleaning in Henderson', href: '/industries/medical-office-cleaning/henderson' },
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

export default function MedicalOfficeCleaningLasVegasPage() {
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
        eyebrow="Medical Office Cleaning · Las Vegas, NV"
        heading="Medical Office Cleaning in Las Vegas, NV"
        sub={`Las Vegas has a large and growing healthcare sector. Final Touch provides recurring professional cleaning for medical offices, dental practices, clinics, and outpatient facilities across Las Vegas and ${SITE.serviceArea.county}. Scope confirmed per practice. Scheduling around your hours.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/medical-office-cleaning-las-vegas-nv-hero-image.webp',
          alt: 'Medical office cleaning in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Medical office cleaning in Las Vegas is a recurring professional cleaning program for
            the patient-facing and administrative areas of healthcare practices: reception, waiting
            rooms, restrooms, hallways, exam room surfaces, and high-touch points throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves medical offices, dental practices, specialist clinics, and outpatient facilities
            across Las Vegas and {SITE.serviceArea.county}. Scope is confirmed per practice and
            scheduled around your appointment hours. Call{' '}
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
            heading="Medical and healthcare offices across Las Vegas."
            sub="Las Vegas's healthcare sector spans a wide range of practice types, each with its own cleaning requirements and scheduling needs."
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
            sub="Scope covers patient-facing and administrative areas of your practice. Confirmed per office during the initial walkthrough."
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
            Every exclusion is noted during the initial walkthrough and confirmed in writing before
            the program begins. If your practice has areas with specific access or handling
            requirements, those are part of the scope conversation from day one.
          </p>
        </div>
      </section>

      {/* 6. What makes medical office cleaning different */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Medical vs standard commercial cleaning"
            heading="What makes healthcare office cleaning distinct from standard commercial cleaning."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {distinctionCards.map(({ heading, body }) => (
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
            heading="Medical office cleaning across the Las Vegas Valley."
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
        heading="Medical office cleaning in Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need medical office cleaning in Las Vegas?"
        sub={`Free quotes for medical, dental, and clinic cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
