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
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: { absolute: 'Commercial Move-Out Cleaning in Las Vegas, NV | Final Touch' },
  description:
    'Move-out cleaning in Las Vegas, Henderson, and the Las Vegas Valley. Deposit-ready unit turns and end-of-lease cleans. Licensed and insured. (702) 444-5077.',
  alternates: { canonical: '/services/move-out-cleaning' },
  openGraph: {
    title: 'Commercial Move-Out Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Move-out cleaning in Las Vegas, Henderson, and the Las Vegas Valley. Deposit-ready standard on every unit turn. Licensed and insured. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-out-cleaning`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning include?',
    a: 'Move-out cleaning covers the full interior of your space: inside cabinets, appliances, bathrooms, baseboards, light fixtures, vents, window sills, and all flooring. Property managers and landlords rely on this service to reset units to the standard the next occupant expects. Scope is confirmed during your booking.',
  },
  {
    q: 'Will a move-out clean help me get my deposit back?',
    a: 'A thorough move-out clean addresses the surfaces and areas landlords inspect. We do not guarantee deposit outcomes, as that depends on your lease terms and your landlord assessment. What we do is clean the space to a standard that removes cleaning as a reason to withhold your deposit.',
  },
  {
    q: 'How is move-out cleaning different from move-in cleaning?',
    a: 'Move-out cleaning is for the person leaving and focuses on returning the space to the condition expected by the landlord or next occupant. Move-in cleaning is for the person arriving and focuses on starting fresh before settling in. The scope is similar, but the context and priority differ.',
  },
  {
    q: 'How long does a move-out clean take?',
    a: 'It depends on the size of the space and its condition. A studio or one-bedroom apartment takes less time than a three-bedroom house with heavy use. We confirm timing during the booking. If you have a hard move-out deadline, let us know so we can schedule accordingly.',
  },
  {
    q: 'Can you do move-out cleaning in Las Vegas after I have already moved out?',
    a: 'Yes. Empty spaces are often easier to clean thoroughly because there is full access to all surfaces. If the space is already empty when we arrive, we can work room by room without working around furniture or boxes.',
  },
  {
    q: 'Do you clean appliances during move-out service?',
    a: 'Inside and outside of appliances is typically included in a move-out clean. This includes the oven, refrigerator, dishwasher, and microwave. Confirm appliance scope during your booking to ensure it is included in your quote.',
  },
  {
    q: 'How do I book move-out cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. We recommend booking as early as possible, especially if you have a specific move-out date or lease-end deadline to meet.`,
  },
  {
    q: "What if my move-out clean doesn't meet my expectations?",
    a: `Every move-out clean from Final Touch — a family-owned commercial cleaning company — is backed by the Blue Ribbon Guarantee: 100% satisfaction or we return within 24 hours to fix what fell short. You reach ${SITE.owners} directly, not a call center. If something was missed or not done to the agreed scope, we come back and make it right.`,
  },
];

const current = SERVICES.find((s) => s.slug === 'move-out-cleaning')!;
const siblings = SERVICES.filter((s) => s.slug !== 'move-out-cleaning');

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Move-Out Cleaning',
  serviceType: 'Move-Out Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map(
    (name) => ({ '@type': 'City', name: `${name}, ${SITE.serviceArea.stateAbbr}` })
  ),
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Move-Out Cleaning' },
];

export default function MoveOutCleaningPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Move-Out Cleaning"
        heading="Commercial Move-Out Cleaning Services in Las Vegas, NV"
        sub={`Professional move-out cleaning for property managers, landlords, and renters across ${SITE.serviceArea.county}. Unit turns, portfolio resets, and end-of-lease cleans to the standard your next occupant expects.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={current.image}
      />

      {/* 2. Quick Answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue font-body">
            What it is
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
            Move-out cleaning in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides move-out cleaning for apartments and homes across{' '}
            {SITE.serviceArea.county}, Nevada. Move-out cleaning covers the full interior of your
            space: inside cabinets, appliances, bathrooms, baseboards, vents, window sills, and
            all flooring. The goal is to hand the space back in the condition your landlord or
            next occupant expects, with cleaning removed as a point of dispute. We serve Las
            Vegas, Henderson, North Las Vegas, and Boulder City. Final Touch is licensed and
            insured in Nevada, and every move-out clean is backed by the Blue Ribbon Guarantee:
            100% satisfaction or we return within 24 hours. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Property managers, landlords, and renters across the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Property managers',
                body: 'Turn units over efficiently with a thorough move-out clean between tenants. Same standard on every property, every turn.',
              },
              {
                title: 'Landlords',
                body: 'Tenant moved out and left the place in rough shape? We reset it to the condition needed for the next occupant.',
              },
              {
                title: 'Renters',
                body: 'Moving out at the end of a lease? A professional clean addresses the surfaces and areas your landlord inspects without you spending your last weekend with a mop.',
              },
              {
                title: 'Home sellers and real estate agents',
                body: 'A clean property before listing, showings, or final handoff creates the right impression. We clean to the standard a buyer or agent expects.',
              },
            ].map((item) => (
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
            heading="What move-out cleaning covers."
            sub="A move-out clean goes into the areas that get neglected over time. These are the surfaces we address."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside cabinets, drawers, and pantry shelving',
              'Appliance interiors: oven, refrigerator, microwave, dishwasher',
              'Appliance exteriors and range hood',
              'Bathrooms: fixtures, tile, grout, mirrors, toilet',
              'Baseboards, window sills, and ledges',
              'Light fixtures and ceiling fans',
              'Vents and air returns',
              'All floor surfaces: vacuuming and mopping',
              'Interior windows and glass',
              'Closet interiors',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Specific scope is confirmed during booking. If your landlord has a specific checklist,
            share it with us when you schedule.
          </p>
          <p className="mt-4 text-sm">
            Moving into your next place at the same time?{' '}
            <Link href={ROUTES.services + '/move-in-cleaning'} className="text-brand-blue font-semibold hover:underline">
              See our move-in cleaning service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="No corners skipped, no surfaces forgotten."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'The areas landlords inspect',
                body: 'Inside appliances, baseboards, vents, and cabinet interiors are the surfaces that trigger deposit deductions. Those are on our standard checklist.',
              },
              {
                title: 'Blue Ribbon Guarantee',
                body: `Every move-out clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or we return within 24 hours. ${SITE.owners} are the owners and the accountability. If anything falls short, you call them directly.`,
              },
              {
                title: 'Works around your move-out schedule',
                body: 'We work with your lease-end deadline. Book early if you have a fixed move-out date and we will hold your spot.',
              },
            ].map((item) => (
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

      {/* 6. Process */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="How it works" heading="From booking to keys-back clean." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about the space',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know the size of the space, your move-out date, and any specific requirements from your landlord.`,
              },
              {
                n: '02',
                title: 'Booking confirmed',
                body: 'We confirm your date and time. If you have a hard lease-end deadline, book early to lock in the right slot.',
              },
              {
                n: '03',
                title: 'Full-access clean',
                body: 'Ideally after your belongings are out so we have unobstructed access to all surfaces, cabinets, and floors.',
              },
              {
                n: '04',
                title: 'Done and ready for inspection',
                body: 'We work through every room on the checklist. When we are finished, the space is ready for landlord inspection or the next occupant.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-6">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-soft-blue text-brand-blue font-semibold text-sm font-body"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">{step.title}</h3>
                  <p className="mt-1.5 text-base text-muted leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Service areas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Service area"
            heading="Move-out cleaning across the Las Vegas Valley."
            sub={`We serve move-out cleans throughout ${SITE.serviceArea.county}, Nevada.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: '/services/move-out-cleaning/las-vegas' },
              { name: 'Henderson, NV', href: '/services/move-out-cleaning/henderson' },
              { name: 'North Las Vegas, NV', href: '/services/move-out-cleaning/north-las-vegas' },
              { name: 'Boulder City, NV', href: '/services/move-out-cleaning/boulder-city' },
              { name: 'Clark County, NV', href: '/services/move-out-cleaning/clark-county' },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Other services"
            heading="More cleaning services from Final Touch."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {siblings.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard href={s.href} name={s.name} description={s.shortDescription} image={s.image} />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              View all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        heading="Move-out cleaning questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Get your move-out cleaning quote."
        sub={`Free quotes across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request. Book early if you have a hard move-out deadline.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
