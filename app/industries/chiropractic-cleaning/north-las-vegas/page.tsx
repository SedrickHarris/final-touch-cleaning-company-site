import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: { absolute: 'Chiropractic Office Cleaning in North Las Vegas | Final Touch' },
  description:
    'Final Touch provides scheduled cleaning for chiropractic offices and physical therapy clinics in North Las Vegas, NV. Treatment rooms, therapy surfaces, waiting areas, and restrooms. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/chiropractic-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Chiropractic Office Cleaning in North Las Vegas, NV | Final Touch Cleaning',
    description:
      'Final Touch provides scheduled cleaning for chiropractic offices and physical therapy clinics in North Las Vegas, NV. Treatment rooms, therapy surfaces, waiting areas, and restrooms. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/chiropractic-cleaning/north-las-vegas`,
  },
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Solo chiropractors and single-practitioner PT clinics',
    body: 'North Las Vegas has a higher concentration of solo chiropractic and physical therapy practitioners relative to its commercial office inventory than Henderson or the larger Las Vegas commercial corridors. Affordable commercial rent along Lamb Boulevard, Craig Road, and Cheyenne Avenue makes North Las Vegas accessible for solo practitioners who could not establish independently in Henderson or Las Vegas. These practices need a cleaning program that fits a solo-operator budget and schedule without cutting scope.',
  },
  {
    title: 'Practices serving the construction and logistics workforce',
    body: "North Las Vegas has a large industrial and logistics employment base. Construction tradespeople, warehouse workers, and logistics operators sustain higher rates of occupational musculoskeletal injury than office-based workers, generating consistent demand for chiropractic and PT treatment in the practices that serve them. Clinics with this patient profile often see high daily visit volume relative to their office footprint and need a cleaning program that reliably resets the space before the next day's schedule.",
  },
  {
    title: 'Multi-practitioner practices along commercial corridors',
    body: 'North Las Vegas multi-practitioner chiropractic and PT practices operate along the city\'s commercial corridors and in mixed-use professional buildings. These offices run multiple treatment rooms concurrently and need a consistent standard across every patient-facing area on every visit. Final Touch scopes multi-room practices per layout and room count confirmed at the walkthrough.',
  },
  {
    title: 'Office managers coordinating vendor relationships',
    body: 'Most North Las Vegas chiropractic and PT practices have a front-desk lead or office manager who handles scheduling, vendor coordination, and maintaining the patient environment. Final Touch works directly with the office manager as the operational point of contact, without requiring the practitioner to be involved in day-to-day cleaning coordination.',
  },
];

// Scope checklist (Section 4)
const scopeChecklist = [
  'Waiting room and reception: seating, tables, patient literature areas, front desk surfaces',
  'Treatment rooms: tables and headrest covers (surface wipe), bolster surfaces, door handles, light switches, countertops',
  'Therapy areas: equipment surfaces, resistance equipment handles and grips, balance equipment',
  'Rubber, vinyl, and mat flooring: sweep, mop, and surface clean',
  'Tile and hard flooring throughout',
  'Restrooms: fixtures, tile, mirrors, replenishment setup',
  'Staff areas: break room, back office, staff restrooms',
  'High-touch surfaces throughout: door handles, light switches, counter edges',
  'Interior glass and partition surfaces',
  'Trash removal and liner replacement in all areas',
];

// Scheduling cards (Section 5)
const schedulingCards = [
  {
    title: 'Before first patient',
    body: 'Pre-open scheduling is well-suited to North Las Vegas chiropractic and PT practices that run full patient schedules from early morning. Practices serving the construction and logistics workforce often start early to catch patients before their work shift. Access window and entry logistics are confirmed at the walkthrough and held consistently across every visit.',
  },
  {
    title: 'Between-session windows',
    body: 'Some North Las Vegas practices with a midday break can accommodate a targeted clean during that window. Whether this is practical depends on your specific schedule, room count, and access. This is evaluated at the walkthrough, not assumed, and is more common in multi-room practices than solo offices.',
  },
  {
    title: 'After last patient',
    body: 'After-close programs are the most common scheduling arrangement for North Las Vegas practices. Cleaning begins once the last patient leaves and the office is secured. For solo practitioners, this removes the need for any day-of coordination. For practices with office managers, it keeps cleaning entirely outside operational hours. Access is confirmed at the walkthrough.',
  },
];

// North Las Vegas city context cards (Section 6)
const nlvContextCards = [
  {
    heading: 'Construction and logistics workforce drives occupational injury demand',
    body: "North Las Vegas has one of the largest industrial and logistics employment bases in the Las Vegas Valley. Its warehouse corridors, distribution centers, and active construction trades employ a large workforce with above-average rates of occupational musculoskeletal injury. This population generates consistent chiropractic and physical therapy demand in North Las Vegas practices that is structurally different from both Henderson's active-adult orthopedic profile and Las Vegas's hospitality and service-worker injury pattern. NLV chiropractic and PT clinics serving this workforce often run high daily visit volumes relative to their office size, which makes the cleaning demand per square foot higher than in lower-volume practice formats.",
  },
  {
    heading: 'Affordable commercial rent supports a higher concentration of solo practitioners',
    body: "North Las Vegas commercial rents are lower than comparable spaces in Henderson and Las Vegas proper. That affordability makes NLV accessible for solo chiropractors and solo PT practitioners who could not independently establish in the Green Valley Parkway corridor or the Las Vegas commercial zones. The result is a higher share of solo and small practices relative to the overall office market than either sibling city. Solo practitioners have different cleaning needs than group practices: tighter budgets, smaller footprints, and often a single point of contact who is also the practitioner. Final Touch scopes and prices for the NLV solo-practice market, not a large-group template.",
  },
  {
    heading: 'Owner-led walkthrough, not a Las Vegas or Henderson template',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a North Las Vegas office manager or solo practitioner comparing cleaning services, the difference between an owner confirming scope and access for your specific NLV practice and a vendor applying a Las Vegas commercial template to a North Las Vegas solo office is a program that fits your actual footprint versus one built for a different market entirely. Scope, access, and scheduling are confirmed before the first clean.`,
  },
];

// Service area chips (Section 7): both sibling chips live; last page in the cluster
const serviceAreaChips = [
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Chiropractic Cleaning in Las Vegas', href: '/industries/chiropractic-cleaning/las-vegas' },
  { label: 'Chiropractic Cleaning in Henderson', href: '/industries/chiropractic-cleaning/henderson' },
  { label: 'All Industries', href: '/industries' },
];

// Related services (Section 8)
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services');
const deepClean = SERVICES.find((s) => s.slug === 'deep-cleaning');

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
  deepClean && {
    name: deepClean.name,
    href: deepClean.href,
    description: deepClean.shortDescription,
    image: deepClean.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

// FAQ array (Section 9). Drives both the visible FAQSection and the FAQPage JSON-LD.
const faq = [
  {
    q: 'What does chiropractic office cleaning include in North Las Vegas?',
    a: 'Chiropractic office cleaning from Final Touch in North Las Vegas covers waiting room and reception surfaces, treatment room tables and surfaces, therapy equipment surfaces, all floor types including rubber and vinyl mat flooring, restrooms, staff areas, high-touch surfaces throughout, and trash removal. Scope is confirmed per practice at the initial walkthrough before the program begins.',
  },
  {
    q: 'Do you clean treatment tables and therapy equipment in North Las Vegas practices?',
    a: 'Yes. Treatment tables, bolster surfaces, and the handles and grips of therapy equipment are included in scope. Final Touch cleans surfaces within normal cleaning access. Any equipment the practice designates as restricted or requiring special handling is excluded and noted at the walkthrough.',
  },
  {
    q: 'What types of flooring do you clean in North Las Vegas chiropractic and PT offices?',
    a: 'Final Touch cleans rubber flooring, vinyl flooring, tile, and hardwood throughout chiropractic and PT offices in North Las Vegas. Rubber mat flooring common in therapy and rehabilitation areas is included. Specific products and methods for each floor type are confirmed at the walkthrough.',
  },
  {
    q: 'Why do North Las Vegas chiropractic practices serve a different patient profile than Henderson practices?',
    a: "North Las Vegas has a large construction trades and logistics workforce that generates above-average occupational musculoskeletal injury rates. Chiropractic and PT practices in North Las Vegas serve this workforce alongside the city's residential population. Henderson's chiropractic demand is driven primarily by active-adult orthopedic and mobility care in its master-planned communities. These are structurally different patient profiles that shape practice volume and scheduling differently.",
  },
  {
    q: 'Does Final Touch work with solo practitioners in North Las Vegas?',
    a: `Yes. Final Touch serves solo chiropractic and PT practitioners in North Las Vegas. Solo practitioners typically have smaller offices, tighter budgets, and different scheduling needs than multi-room group practices. Scope and pricing are confirmed at the walkthrough for your specific office, not based on a group-practice template. Call ${SITE.phone.display} to discuss your practice.`,
  },
  {
    q: 'How do I get a cleaning quote for my chiropractic or PT office in North Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} will follow up to schedule a walkthrough of your North Las Vegas practice, confirm scope and access, and provide a written estimate before any work begins. No quote is given without reviewing your specific office layout.`,
  },
  {
    q: 'Is Final Touch licensed and insured?',
    a: 'Yes. Final Touch is a family-owned commercial cleaning company, licensed in Nevada and fully insured. The Blue Ribbon Guarantee applies to every program: 100% satisfaction or Final Touch returns within 24 hours.',
  },
  {
    q: 'What makes Final Touch different from a general commercial cleaning company for a North Las Vegas chiropractic practice?',
    a: `${SITE.owners} conduct every initial walkthrough personally and confirm scope for your specific North Las Vegas practice before the first clean. A chiropractic or PT office has surface priorities and scheduling constraints that differ from a standard commercial office, and a solo practice in North Las Vegas has different needs than a group practice in Henderson or Las Vegas. Final Touch adapts scope to your practice and maintains a consistent standard on every visit.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chiropractic and Physical Therapy Office Cleaning in North Las Vegas, NV',
  serviceType: 'Chiropractic Office Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'City', name: 'North Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'AdministrativeArea', name: 'Clark County' },
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
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE.url}/industries` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Chiropractic and Physical Therapy Cleaning',
      item: `${SITE.url}/industries/chiropractic-cleaning/north-las-vegas`,
    },
  ],
};

export default function ChiropracticCleaningNorthLasVegasPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 1. Hero */}
      {/* TODO-PHOTO: public/images/industries/chiropractic-cleaning-north-las-vegas-nv-hero-image.webp */}
      <HeroSection
        eyebrow="Chiropractic and Physical Therapy Cleaning · North Las Vegas, NV"
        heading="Chiropractic and Physical Therapy Office Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas has a growing number of chiropractic and physical therapy practices serving its construction, logistics, and residential workforce. Final Touch provides scheduled professional cleaning across North Las Vegas and ${SITE.serviceArea.county}. Treatment rooms, therapy areas, waiting rooms, and restrooms. Scope and scheduling confirmed per practice.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Chiropractic and physical therapy office cleaning in North Las Vegas is a recurring
            scheduled cleaning program for the patient-facing and clinical-support areas of your
            practice: waiting room and reception, treatment rooms, therapy equipment surfaces, all
            floor types, restrooms, and staff areas throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves chiropractic offices and PT clinics across North Las Vegas and{' '}
            {SITE.serviceArea.county}. Scope is confirmed per practice and scheduling is arranged
            around your patient hours. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your practice.
          </p>
        </div>
      </section>

      {/* 3. Who we serve */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Chiropractic offices and PT clinics across North Las Vegas."
            sub="North Las Vegas's construction and logistics workforce, affordable commercial rents, and growing residential population create a distinct chiropractic and PT market."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audienceCards.map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Scope checklist */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What chiropractic and PT office cleaning covers."
            sub="Scope addresses every patient-facing and staff area of your North Las Vegas practice. Confirmed per office during the initial walkthrough."
          />
          <ul className="mt-8 space-y-3">
            {scopeChecklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope, schedule, and access requirements are confirmed during the initial walkthrough
            before the program begins. Any areas with specific handling requirements are noted and
            confirmed at that stage.
          </p>
        </div>
      </section>

      {/* 5. Scheduling */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scheduling"
            heading="Cleaning scheduled around your North Las Vegas practice hours."
            sub="Final Touch works within your access window. Scheduling options are confirmed at the walkthrough based on your specific practice hours."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {schedulingCards.map(({ title, body }) => (
              <div key={title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. North Las Vegas city context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Chiropractic and PT cleaning in North Las Vegas"
            heading="What shapes this market in North Las Vegas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {nlvContextCards.map(({ heading, body }) => (
              <div key={heading} className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
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
            heading="Chiropractic and PT office cleaning across North Las Vegas and the Las Vegas Valley."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {serviceAreaChips.map((chip) => (
              <li key={chip.label}>
                <Link
                  href={chip.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {chip.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            Not sure if we cover your practice location?{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              Call {SITE.phone.display}
            </a>{' '}
            to confirm.
          </p>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Other Final Touch services for your North Las Vegas practice."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.href}>
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
        heading="Chiropractic and PT office cleaning in North Las Vegas: frequently asked questions."
        items={faq}
      />
      <div className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-10">
          <p className="text-sm text-muted">
            More questions?{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              Call {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>
            .
          </p>
        </div>
      </div>

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready to set up a cleaning program for your North Las Vegas practice?"
        sub={`${SITE.owners} will walk your office, confirm scope, and provide a written estimate before any work begins. Licensed in Nevada. Fully insured. Blue Ribbon Guarantee on every program.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
