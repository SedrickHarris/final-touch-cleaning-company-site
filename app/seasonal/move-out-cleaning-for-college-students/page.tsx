import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Move-Out Cleaning for College Students in Las Vegas, NV',
  description: `Student move-out cleaning Las Vegas — deposit-ready cleans aligned with the UNLV academic calendar for landlords, property managers, and student renters. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/move-out-cleaning-for-college-students',
  },
  openGraph: {
    title: 'Move-Out Cleaning for College Students in Las Vegas, NV | Final Touch',
    description: `Student move-out cleaning Las Vegas — deposit-ready cleans aligned with the UNLV academic calendar for landlords, property managers, and student renters. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/move-out-cleaning-for-college-students`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning for college students include in Las Vegas?',
    a: `Move-out cleaning for college students in Las Vegas is a deposit-ready clean of a vacated rental unit: all rooms, kitchen, bathrooms, floors, surfaces, appliances, and any areas specified by the landlord or property manager. Scope is confirmed per unit at the initial walkthrough. Final Touch serves property managers, landlords, and student renters across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display}.`,
  },
  {
    q: 'When do UNLV students typically need move-out cleaning in Las Vegas?',
    a: 'The primary student move-out window in Las Vegas aligns with the UNLV academic calendar: May through mid-June, when the spring semester ends and summer leases begin or annual leases expire. A secondary window occurs in December at the end of the fall semester. Property managers and landlords with UNLV-adjacent properties see the highest move-out volume in May and June.',
  },
  {
    q: 'Does Final Touch help Las Vegas landlords and property managers with student unit turns?',
    a: `Yes. Final Touch works directly with landlords and property managers overseeing rental units near UNLV and other Las Vegas educational institutions. Student unit turns in May–June require deposit-ready cleaning on tight timelines as leases end and new tenants arrive. Final Touch coordinates scheduling around your lease calendar. Call ${SITE.phone.display} to discuss your portfolio.`,
  },
  {
    q: 'Does a move-out clean help get a security deposit back?',
    a: "A professional move-out clean addresses the cleaning conditions that most lease agreements require tenants to meet before vacating. Whether a deposit is returned depends on the landlord's inspection and the specific lease terms — Final Touch cannot guarantee deposit outcomes. What Final Touch can do is provide a thorough, deposit-ready clean that meets standard move-out cleaning expectations. Scope is confirmed at the walkthrough.",
  },
  {
    q: 'Can Final Touch clean a student apartment in Las Vegas on short notice?',
    a: `Scheduling depends on availability at the time of the request. Final Touch does not guarantee same-day or next-day availability — scheduling is confirmed during the booking process. Call ${SITE.phone.display} as early as possible before your move-out date to confirm timing, particularly during the peak May–June move-out window when demand is highest.`,
  },
  {
    q: 'What is included in a deposit-ready move-out clean for a Las Vegas rental unit?',
    a: `A deposit-ready move-out clean for a Las Vegas rental unit typically covers all rooms, kitchen (counters, cabinets, appliances), bathrooms (fixtures, tile, grout, mirrors), floors throughout, interior windows, baseboards, and trash removal. Scope is confirmed per unit at the initial walkthrough and documented before work begins. Call ${SITE.phone.display} to discuss your unit.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Move-Out Cleaning for College Students in Las Vegas, NV',
  serviceType: 'Move-Out Cleaning',
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

const audienceCards = [
  {
    title: 'Landlords and property managers near UNLV',
    body: "Las Vegas landlords and property managers with rental inventory near UNLV see concentrated move-out volume in May and June when the academic year ends. Student unit turns on tight lease-end timelines require reliable, scope-confirmed cleaning that meets the deposit-ready standard without requiring landlord supervision of every visit.",
  },
  {
    title: 'Portfolio managers with multiple student units',
    body: 'Property management companies overseeing multiple student rental units across Las Vegas need a cleaning partner who can coordinate multiple unit turns during the same end-of-semester window. Final Touch works with portfolio managers to schedule unit turns across their inventory.',
  },
  {
    title: 'Student renters vacating Las Vegas apartments',
    body: 'UNLV students and other Las Vegas college renters who want a professional move-out clean before handing back the keys use Final Touch to handle the cleaning that their lease requires. A professionally cleaned unit is in better condition for the landlord inspection than a self-cleaned unit — scope is confirmed per unit at the walkthrough.',
  },
  {
    title: 'Parents coordinating move-out for students',
    body: "Parents helping UNLV students move out of Las Vegas apartments at the end of the academic year often coordinate the cleaning remotely or alongside a move. Final Touch confirms scope at the walkthrough, provides a written estimate, and does the work without requiring the student or parent to be present during the clean.",
  },
];

const checklist = [
  'All bedrooms: floors, surfaces, closets, and interiors',
  'Kitchen: counters, cabinet interiors and exteriors, appliance surfaces',
  'Refrigerator interior cleaning',
  'Oven and stovetop surfaces',
  'Bathrooms: fixtures, tile, grout, mirrors, and hardware',
  'Living areas and common spaces: floors and all surfaces',
  'Interior windows and glass',
  'Baseboards, door frames, and window sills',
  'High-touch surfaces: switches, handles, and cabinet hardware',
  'Trash removal and debris clearance',
  'Any areas specified by the landlord or property manager',
];

const whyTimingCards = [
  {
    heading: 'UNLV academic calendar drives a concentrated move-out window',
    body: 'UNLV spring semester typically ends in mid-May, with most student leases expiring between May 15 and June 30. This creates a short window when a large volume of student rental units in Las Vegas need cleaning simultaneously. Landlords and property managers who schedule early in that window avoid the last-minute availability crunch.',
  },
  {
    heading: 'Deposit disputes often hinge on cleaning condition',
    body: 'Lease agreements generally require tenants to leave the unit in a clean condition comparable to move-in. Professional move-out cleaning documents that the cleaning obligation was met by a third party. Landlords with professionally cleaned units are better positioned for the inspection process, and tenants who use a professional cleaner have documentation of what was done.',
  },
  {
    heading: 'Summer heat makes delayed unit turns harder',
    body: "Units that sit vacant through the Las Vegas summer accumulate dust and heat exposure that compounds the cleaning work needed before re-leasing. A move-out clean at the end of the lease — before summer heat sets in — is easier and more effective than a clean attempted in July or August after weeks of sealed, unoccupied exposure to desert heat and dust.",
  },
];

const relatedLinks = [
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Back-to-School Reset Cleaning', href: '/seasonal/back-to-school-home-reset' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
  { label: 'All Services', href: ROUTES.services },
];

export default function MoveOutCleaningCollegeStudentsPage() {
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

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Seasonal', href: '/seasonal' },
          { label: 'Student Move-Out Cleaning' },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Student Move-Out Cleaning · Las Vegas, NV"
        heading="Move-Out Cleaning for College Students in Las Vegas, NV"
        sub="Deposit-ready move-out cleaning aligned with the UNLV academic calendar. Serving landlords, property managers, and student renters across the Las Vegas Valley."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-out cleaning for college students in Las Vegas is deposit-ready professional cleaning for
            vacated rental units, timed to the UNLV academic calendar. It serves Las Vegas landlords and
            property managers handling end-of-semester unit turns, and student renters meeting their
            lease cleaning obligations before handing back the keys.{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-out cleaning
            </Link>{' '}
            covers rental units across Las Vegas and {SITE.serviceArea.county}. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule a free walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Student move-out cleaning for Las Vegas landlords, managers, and renters."
            sub="Property managers and landlords near UNLV, student renters, and parents coordinating move-out cleans use Final Touch for end-of-semester cleaning."
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

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What student move-out cleaning covers."
            sub="Scope is confirmed per unit at the initial walkthrough. Typical move-out cleaning areas are listed below."
          />
          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why timing matters */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why timing matters"
            heading="Why the May–June window matters for student move-out cleaning in Las Vegas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whyTimingCards.map(({ heading, body }) => (
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

      {/* 6. FAQ */}
      <FAQSection
        items={faq}
        heading="Student move-out cleaning in Las Vegas: frequently asked questions"
      />

      {/* 7. Related links */}
      <section className="bg-light-gray border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Related services
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTASection
        heading="Need student move-out cleaning in Las Vegas?"
        sub={`Free quotes for deposit-ready move-out cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
