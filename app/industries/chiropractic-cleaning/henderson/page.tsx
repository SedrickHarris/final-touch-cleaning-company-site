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
  title: { absolute: 'Chiropractic Office Cleaning in Henderson, NV | Final Touch' },
  description:
    'Final Touch provides scheduled cleaning for chiropractic offices and physical therapy clinics in Henderson, NV. Treatment rooms, therapy surfaces, waiting areas, and restrooms. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/chiropractic-cleaning/henderson`,
  },
  openGraph: {
    title: 'Chiropractic Office Cleaning in Henderson, NV | Final Touch Cleaning',
    description:
      'Final Touch provides scheduled cleaning for chiropractic offices and physical therapy clinics in Henderson, NV. Treatment rooms, therapy surfaces, waiting areas, and restrooms. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/chiropractic-cleaning/henderson`,
  },
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Chiropractic and PT practices along the Green Valley Parkway corridor',
    body: "Henderson's primary commercial spine concentrates a notable number of chiropractic offices and physical therapy clinics along Green Valley Parkway, Sunset Road, and the nearby commercial nodes serving Anthem, Seven Hills, MacDonald Highlands, and Green Valley Ranch. Patients from these established, professionally oriented communities expect a consistently clean and well-maintained clinical environment. Final Touch serves practices along this corridor on programs scoped and scheduled per practice.",
  },
  {
    title: 'Active-adult and sports-rehab focused practices',
    body: "Henderson has a significant active-adult residential population concentrated in Anthem, Sun City Anthem, and MacDonald Highlands. This demographic generates above-average demand for chiropractic maintenance care and physical therapy for ongoing orthopedic and mobility conditions. PT and chiropractic practices serving active-adult patients in Henderson typically run consistent recurring schedules that make a before-open or after-close cleaning program straightforward to set up and maintain.",
  },
  {
    title: 'Multi-practitioner group practices in Henderson professional parks',
    body: "Henderson's professional office parks and medical corridors include multi-practitioner chiropractic and PT group practices that operate multiple treatment rooms concurrently. Waiting rooms, reception, shared restrooms, and multiple treatment room surfaces all require a consistent cleaning standard across every room on every visit. Final Touch scopes group practices per room count and confirmed layout at the walkthrough.",
  },
  {
    title: 'Office managers coordinating vendor relationships',
    body: "Most Henderson chiropractic and PT practices have a front-desk lead or office manager who handles vendor coordination and maintains the patient environment. Final Touch works directly with the office manager as the point of contact for scheduling, access, and any scope adjustments. The practitioner does not need to be involved in day-to-day cleaning coordination.",
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
    body: "Henderson chiropractic and PT practices typically open between 8 and 9 AM on predictable schedules without the early-morning flexibility pressure of Las Vegas's extended-hours commercial environment. Pre-open scheduling for Henderson practices is reliable and consistent. Access window and entry logistics are confirmed at the walkthrough and held to the same time each visit.",
  },
  {
    title: 'Between-session windows',
    body: 'Some Henderson practices with a midday break between morning and afternoon sessions can accommodate a targeted clean during that window. Whether a between-session clean is practical depends on your specific schedule and layout. This is evaluated at the walkthrough, not assumed.',
  },
  {
    title: 'After last patient',
    body: "After-close programs are the most common scheduling arrangement for Henderson chiropractic and PT practices. Henderson practices generally close earlier in the evening than comparable Las Vegas practices, which means a wider and more predictable after-close window is typically available. Cleaning begins once the last patient leaves. Access is confirmed at the walkthrough.",
  },
];

// Henderson city context cards (Section 6)
const hendersonContextCards = [
  {
    heading: 'Active-adult community density drives above-average chiropractic and PT demand',
    body: "Henderson has one of the highest concentrations of active-adult residential communities in the Las Vegas Valley. Sun City Anthem, Anthem Country Club, and the established neighborhoods in the southern Henderson foothills are home to a large population of residents in ongoing chiropractic maintenance care and physical therapy for age-related orthopedic and mobility conditions. This is a meaningfully different patient profile and demand driver than the occupational-injury and hospitality-workforce volume that shapes Las Vegas chiropractic demand. Henderson chiropractic and PT practices serving this population run consistent, predictable appointment schedules and benefit from a cleaning program built around that regularity.",
  },
  {
    heading: 'Suburban scheduling and predictable access windows',
    body: "Las Vegas chiropractic practices often deal with variable schedules, extended hours, and access logistics shaped by the city's tourism and service economy. Henderson practices operate on standard suburban healthcare hours. Most open between 8 and 9 AM and close by early evening, five to six days per week. This predictability makes before-open and after-close cleaning windows more reliably available in Henderson than in Las Vegas. Final Touch confirms your specific window at the walkthrough and maintains it consistently across every visit.",
  },
  {
    heading: 'Owner-led walkthrough, not a templated quote',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Henderson office manager comparing cleaning services, the difference between an owner confirming scope and access directly and a sales rep applying a Las Vegas-sized commercial template to a Henderson practice is a cleaning program built for your actual office versus one priced and scoped for a different market. Scope, scheduling window, and access logistics are confirmed before the first clean.`,
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
  { label: 'Chiropractic Cleaning in Las Vegas', href: '/industries/chiropractic-cleaning/las-vegas' },
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
    q: 'What does chiropractic office cleaning include in Henderson?',
    a: 'Chiropractic office cleaning from Final Touch in Henderson covers waiting room and reception surfaces, treatment room tables and surfaces, therapy equipment surfaces, all floor types including rubber and vinyl mat flooring, restrooms, staff areas, high-touch surfaces throughout, and trash removal. Scope is confirmed per practice at the initial walkthrough before the program begins.',
  },
  {
    q: 'Do you clean treatment tables and therapy equipment in Henderson practices?',
    a: 'Yes. Treatment tables, bolster surfaces, and the handles and grips of therapy equipment are included in scope. Final Touch cleans surfaces within normal cleaning access. Any equipment the practice designates as restricted or requiring special handling is excluded and noted at the walkthrough.',
  },
  {
    q: 'What types of flooring do you clean in Henderson chiropractic and PT offices?',
    a: 'Final Touch cleans rubber flooring, vinyl flooring, tile, and hardwood throughout chiropractic and PT offices in Henderson. Rubber mat flooring common in therapy areas is included. Specific products and methods for each floor type are confirmed at the walkthrough.',
  },
  {
    q: 'Why do Henderson chiropractic practices serve a different patient profile than Las Vegas practices?',
    a: "Henderson has a high concentration of active-adult residential communities, including Sun City Anthem and the Anthem foothills. This population generates above-average demand for chiropractic maintenance care and ongoing PT for orthopedic and mobility conditions. Las Vegas chiropractic demand is driven more heavily by the city's occupational-injury volume from hospitality and service-sector workers. These are different patient profiles that shape practice scheduling and patient volume differently.",
  },
  {
    q: 'Are cleaning windows more predictable for Henderson practices than in Las Vegas?',
    a: "Yes. Henderson chiropractic and PT practices typically operate on standard suburban healthcare hours, opening between 8 and 9 AM and closing by early evening. This makes before-open and after-close cleaning windows more predictable and reliably available than in Las Vegas, where extended-hours commercial pressure can compress access windows. Final Touch confirms your specific window at the initial walkthrough.",
  },
  {
    q: 'How do I get a cleaning quote for my chiropractic or PT office in Henderson?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} will follow up to schedule a walkthrough of your Henderson practice, confirm scope and access, and provide a written estimate before any work begins. No quote is given without reviewing your specific office layout.`,
  },
  {
    q: 'Is Final Touch licensed and insured?',
    a: 'Yes. Final Touch is a family-owned commercial cleaning company, licensed in Nevada and fully insured. The Blue Ribbon Guarantee applies to every program: 100% satisfaction or Final Touch returns within 24 hours.',
  },
  {
    q: 'What makes Final Touch different from a general commercial cleaning company for a Henderson chiropractic practice?',
    a: `${SITE.owners} conduct every initial walkthrough personally and confirm scope for your specific Henderson practice before the first clean. A chiropractic or PT office has surface priorities and scheduling constraints that differ from a standard commercial office. Final Touch adapts scope to your practice and maintains a consistent standard on every visit, without applying a Las Vegas commercial template to a Henderson practice.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chiropractic and Physical Therapy Office Cleaning in Henderson, NV',
  serviceType: 'Chiropractic Office Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
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
      item: `${SITE.url}/industries/chiropractic-cleaning/henderson`,
    },
  ],
};

export default function ChiropracticCleaningHendersonPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 1. Hero */}
      {/* TODO-PHOTO: public/images/industries/chiropractic-cleaning-henderson-nv-hero-image.webp */}
      <HeroSection
        eyebrow="Chiropractic and Physical Therapy Cleaning · Henderson, NV"
        heading="Chiropractic and Physical Therapy Office Cleaning in Henderson, NV"
        sub={`Henderson's active-adult communities and professional office corridors generate consistent demand for chiropractic and physical therapy cleaning. Final Touch provides scheduled professional cleaning for practices across Henderson and ${SITE.serviceArea.county}. Treatment rooms, therapy areas, waiting rooms, and restrooms. Scope and scheduling confirmed per practice.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Chiropractic and physical therapy office cleaning in Henderson is a recurring scheduled
            cleaning program for the patient-facing and clinical-support areas of your practice:
            waiting room and reception, treatment rooms, therapy equipment surfaces, all floor
            types, restrooms, and staff areas throughout.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves chiropractic offices and PT clinics across Henderson and{' '}
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
            heading="Chiropractic offices and PT clinics across Henderson."
            sub="Henderson's active-adult communities and professional office corridors create a distinct chiropractic and physical therapy market with predictable scheduling and consistent patient volume."
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
            sub="Scope addresses every patient-facing and staff area of your Henderson practice. Confirmed per office during the initial walkthrough."
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
            heading="Cleaning scheduled around your Henderson practice hours."
            sub="Henderson chiropractic and PT practices run on predictable suburban schedules. Final Touch works within your access window."
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

      {/* 6. Henderson city context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Chiropractic and PT cleaning in Henderson"
            heading="What shapes this market in Henderson."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {hendersonContextCards.map(({ heading, body }) => (
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
            heading="Chiropractic and PT office cleaning across Henderson and the Las Vegas Valley."
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
            heading="Other Final Touch services for your Henderson practice."
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
        heading="Chiropractic and PT office cleaning in Henderson: frequently asked questions."
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
        heading="Ready to set up a cleaning program for your Henderson practice?"
        sub={`${SITE.owners} will walk your office, confirm scope, and provide a written estimate before any work begins. Licensed in Nevada. Fully insured. Blue Ribbon Guarantee on every program.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
