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
  title: 'Chiropractic and PT Office Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Final Touch provides scheduled cleaning for chiropractic offices and physical therapy clinics in Las Vegas, NV. Treatment rooms, waiting areas, therapy surfaces, and restrooms. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/chiropractic-cleaning/las-vegas`,
  },
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Solo chiropractors and single-practitioner PT clinics',
    body: 'Las Vegas has a large number of solo chiropractic and physical therapy practitioners operating in strip-mall commercial space. These practices typically see a full patient schedule five to six days a week and need a cleaning program that fits a tight before-open or after-close window without requiring the practitioner to coordinate access personally on each visit.',
  },
  {
    title: 'Multi-practitioner group practices',
    body: 'Group chiropractic and PT practices in Las Vegas operate multiple treatment rooms running concurrent patient schedules. Waiting rooms, reception, shared restrooms, and all treatment surfaces need a consistent standard across every room, every visit. Final Touch scopes group practices per room count and access layout confirmed at the walkthrough.',
  },
  {
    title: 'Sports medicine and rehab-adjacent clinics',
    body: "Las Vegas's hospitality and service-sector workforce generates substantial occupational injury volume, making sports medicine and rehabilitation-adjacent practices a significant part of the city's outpatient health market. These clinics run therapy equipment, rehabilitation areas, and mat or rubber flooring that require specific cleaning attention beyond a standard office program.",
  },
  {
    title: 'Office managers scheduling on behalf of the practice',
    body: 'Most chiropractic and PT practices in Las Vegas have an office manager or front-desk lead responsible for vendor coordination, scheduling, and maintaining the patient environment. Final Touch works directly with the office manager as the operational point of contact for scheduling, access, and any scope adjustments, without requiring the practitioner to be involved in day-to-day coordination.',
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
    body: 'Pre-open scheduling means the clinic is cleaned and ready before the first appointment of the day. This is the most common request from solo practitioners and small practices in Las Vegas who want a clean environment from the first patient in without cleaning during patient hours. Access window and entry logistics are confirmed at the walkthrough.',
  },
  {
    title: 'Between-session windows',
    body: 'Some practices with a break period between morning and afternoon sessions can accommodate a targeted clean during that window. Whether a between-session clean is practical depends on your specific schedule, room layout, and access. This is confirmed at the walkthrough, not assumed.',
  },
  {
    title: 'After last patient',
    body: 'After-close programs are the most common scheduling arrangement for chiropractic and PT practices in Las Vegas. Cleaning begins once the last patient leaves and the office is secured. This keeps cleaning completely outside patient hours and requires no coordination on the day of the clean beyond ensuring access is available.',
  },
];

// Las Vegas city context cards (Section 6)
const lvContextCards = [
  {
    heading: 'High density of independent strip-mall chiropractic practices',
    body: "Las Vegas has one of the highest concentrations of independently owned chiropractic offices in Nevada, most operating as solo or two-practitioner practices in strip-mall commercial space along major corridors including Sahara Avenue, Charleston Boulevard, Flamingo Road, and Tropicana Avenue. This format is distinct from the medical-park and professional-office-building concentration found in Henderson's Green Valley Parkway corridor or the residential-corridor practices in North Las Vegas. Strip-mall practices in Las Vegas typically operate with tight scheduling windows, shared-building access considerations, and a higher visit frequency than practices in lower-density markets.",
  },
  {
    heading: 'Hospitality and service workforce injury volume drives PT demand',
    body: "Las Vegas's hospitality and service economy employs hundreds of thousands of workers in physically demanding roles: hotel housekeeping, food service, convention floor labor, construction trades, and logistics. Occupational injury and repetitive-stress conditions from this workforce create consistent demand for physical therapy and chiropractic treatment in Las Vegas that is distinct from markets without a large service-sector employment base. PT and chiropractic clinics serving this patient profile often run extended scheduling, high appointment volume relative to office size, and frequent table and equipment surface turnover.",
  },
  {
    heading: 'Owner-led walkthrough, not a templated quote',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Las Vegas office manager comparing cleaning services, the difference between an owner confirming scope, access, and scheduling directly and a generic commercial quote is a cleaning program built for your specific strip-mall practice versus one sized for a different market or office format entirely. Scope, access logistics, and scheduling windows are all confirmed before the first clean.`,
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
  { label: 'Chiropractic Cleaning in Henderson', href: '/industries/chiropractic-cleaning/henderson' },
  { label: 'Chiropractic Cleaning in North Las Vegas', href: '/industries/chiropractic-cleaning/north-las-vegas' },
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
    q: 'What does chiropractic office cleaning include in Las Vegas?',
    a: 'Chiropractic office cleaning from Final Touch covers waiting room and reception surfaces, treatment room tables and surfaces, therapy equipment surfaces, all floor types including rubber and vinyl mat flooring, restrooms, staff areas, high-touch surfaces throughout, and trash removal. Scope is confirmed per practice at the initial walkthrough before the program begins.',
  },
  {
    q: 'Do you clean treatment tables and therapy equipment?',
    a: 'Yes. Treatment tables, bolster surfaces, and the handles and grips of therapy equipment are included in the scope. Final Touch cleans surfaces within normal cleaning access. Any equipment the practice designates as restricted or requiring special handling is excluded and noted at the walkthrough.',
  },
  {
    q: 'What types of flooring do you clean in chiropractic and PT offices?',
    a: 'Final Touch cleans rubber flooring, vinyl flooring, tile, and hardwood throughout chiropractic and PT offices. Rubber mat flooring common in therapy areas and rehabilitation spaces is included. Specific products and methods for each floor type are confirmed at the walkthrough.',
  },
  {
    q: 'Why do Las Vegas chiropractic offices need a specialized cleaning program rather than a standard commercial clean?',
    a: "Las Vegas has a high concentration of independent strip-mall chiropractic practices operating on tight daily schedules with consistent patient volume. Standard commercial office cleaning is scoped for desks, conference rooms, and break areas. Chiropractic and PT offices require attention to treatment tables, therapy equipment surfaces, rubber and mat flooring, and high-touch patient areas that a standard commercial program does not prioritize. A cleaning scope built for your practice is different from a generic office program.",
  },
  {
    q: 'Can you clean before the first patient of the day?',
    a: 'Yes. Pre-open scheduling is available for Las Vegas chiropractic and PT practices that want the clinic ready before the first appointment. Access window, entry logistics, and timing are confirmed at the walkthrough. After-close programs are also available and are the most common arrangement.',
  },
  {
    q: 'How do I get a cleaning quote for my chiropractic or PT office in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} will follow up to schedule a walkthrough of your Las Vegas practice, confirm scope and access, and provide a written estimate before any work begins. No quote is given without reviewing your specific office layout.`,
  },
  {
    q: 'Is Final Touch licensed and insured?',
    a: 'Yes. Final Touch Cleaning Company is licensed in Nevada and fully insured. Scott and Nicole Maland own and operate the company directly. The Blue Ribbon Guarantee applies to every program: 100% satisfaction or Final Touch returns within 24 hours.',
  },
  {
    q: 'What makes Final Touch different from a general commercial cleaning company for a chiropractic office?',
    a: `${SITE.owners} conduct every initial walkthrough personally and confirm scope for your specific practice before the first clean. A chiropractic or PT office has surface priorities and scheduling constraints that differ from a standard commercial office. Final Touch adapts scope to your practice rather than applying a generic commercial template. The same standard is maintained on every visit.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chiropractic and Physical Therapy Office Cleaning in Las Vegas, NV',
  serviceType: 'Chiropractic Office Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
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
      item: `${SITE.url}/industries/chiropractic-cleaning/las-vegas`,
    },
  ],
};

export default function ChiropracticCleaningLasVegasPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 1. Hero */}
      {/* TODO-PHOTO: public/images/industries/chiropractic-cleaning-las-vegas-nv-hero-image.webp */}
      <HeroSection
        eyebrow="Chiropractic and Physical Therapy Cleaning · Las Vegas, NV"
        heading="Chiropractic and Physical Therapy Office Cleaning in Las Vegas, NV"
        sub={`Las Vegas has a high concentration of independent chiropractic offices and physical therapy clinics. Final Touch provides scheduled professional cleaning for practices across Las Vegas and ${SITE.serviceArea.county}. Treatment rooms, therapy areas, waiting rooms, and restrooms. Scope and scheduling confirmed per practice.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Chiropractic and physical therapy office cleaning in Las Vegas is a recurring scheduled
            cleaning program for the patient-facing and clinical-support areas of your practice:
            waiting room and reception, treatment rooms, therapy equipment surfaces, all floor types,
            restrooms, and staff areas throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves chiropractic offices and PT clinics across Las Vegas and{' '}
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
            heading="Chiropractic offices and PT clinics across Las Vegas."
            sub="Las Vegas has a large and varied chiropractic and physical therapy market, from solo strip-mall practitioners to multi-room group practices and sports rehab clinics."
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
            sub="Scope addresses every patient-facing and staff area of your practice. Confirmed per office during the initial walkthrough."
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
            heading="Cleaning scheduled around your patient hours."
            sub="Chiropractic and PT practices have specific scheduling constraints. Final Touch works within your access window, not ours."
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

      {/* 6. Las Vegas city context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Chiropractic and PT cleaning in Las Vegas"
            heading="What shapes this market in Las Vegas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {lvContextCards.map(({ heading, body }) => (
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
            heading="Chiropractic and PT office cleaning across the Las Vegas Valley."
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
            heading="Other Final Touch services for your practice."
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
        heading="Chiropractic and PT office cleaning: frequently asked questions."
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
        heading="Ready to set up a cleaning program for your Las Vegas practice?"
        sub={`${SITE.owners} will walk your office, confirm scope, and provide a written estimate before any work begins. Licensed in Nevada. Fully insured. Blue Ribbon Guarantee on every program.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
