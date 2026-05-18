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
  title: 'Move-In Cleaning Service in Las Vegas, NV | Final Touch',
  description:
    'Move-in cleaning for new homes and apartments in Las Vegas, Henderson, and Clark County, NV. Top-to-bottom clean before you settle in. Call (702) 444-5077.',
  alternates: { canonical: '/services/move-in-cleaning' },
  openGraph: {
    title: 'Move-In Cleaning Service in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Top-to-bottom move-in cleaning before you settle into your new space. Serving Clark County, NV. Family-owned. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-in-cleaning`,
  },
};

const faq = [
  {
    q: 'What does move-in cleaning include?',
    a: 'Move-in cleaning covers a top-to-bottom clean of your new space before you settle in. That includes the inside of cabinets and drawers, appliance interiors, bathrooms, baseboards, light fixtures, vents, window sills, and all floor surfaces. The goal is a genuinely clean start before your furniture and belongings arrive.',
  },
  {
    q: 'Do I need move-in cleaning if the space is brand new?',
    a: 'Yes, if there was construction involved. New builds often have construction dust, fine grit, adhesive, and compound residue on surfaces that are not obvious until you look closely. A proper move-in clean after a new build goes one step beyond what the builder cleans before handoff.',
  },
  {
    q: 'How is move-in cleaning different from a standard clean?',
    a: 'Move-in cleaning is more thorough than a routine maintenance clean. It covers the inside of cabinets, appliance interiors, vents, baseboards, and all the areas that get skipped in a recurring clean. It is a one-time reset before occupancy.',
  },
  {
    q: 'How is move-in cleaning different from move-out cleaning?',
    a: 'Move-in cleaning is for the person arriving in a new space and is focused on a clean start. Move-out cleaning is for the person leaving and is focused on returning the space to the condition the landlord or buyer expects. The scope is similar but the purpose differs.',
  },
  {
    q: 'Who hires move-in cleaning in Las Vegas?',
    a: 'Homebuyers, renters moving into a new apartment or house, property managers turning over a unit, and families relocating to the Las Vegas area. We serve move-in cleans across Las Vegas, Henderson, North Las Vegas, and Boulder City.',
  },
  {
    q: 'When should I schedule my move-in clean?',
    a: `Schedule it before your furniture arrives and ideally before you unpack boxes. This gives the crew full access to floors, cabinets, and all surfaces without working around your belongings. Call ${SITE.phone.display} or request a quote online to lock in your date.`,
  },
  {
    q: 'How do I get a move-in cleaning quote in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. We confirm the size and condition of the space during a brief phone consultation or walkthrough before giving you a quote.`,
  },
];

const siblings = SERVICES.filter((s) => s.slug !== 'move-in-cleaning');

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Move-In Cleaning',
  serviceType: 'Move-In Cleaning',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Move-In Cleaning',
      item: `${SITE.url}/services/move-in-cleaning`,
    },
  ],
};

export default function MoveInCleaningPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Move-In Cleaning"
        heading="Move-In Cleaning in Las Vegas, NV"
        sub={`Top-to-bottom cleaning before you settle into your new space. We serve homebuyers, renters, and property managers across ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Quick Answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue font-body">
            What it is
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
            Move-in cleaning in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides move-in cleaning for homes and apartments across{' '}
            {SITE.serviceArea.county}, Nevada. A move-in clean is a thorough, top-to-bottom clean
            of your new space before your furniture and belongings arrive: inside cabinets,
            appliance interiors, bathrooms, baseboards, vents, and all floor surfaces. Whether
            you are moving into a previously occupied home or a new build, we clean to a standard
            that gives you a genuinely fresh start. Call{' '}
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
            heading="Homebuyers, renters, and property managers across Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Homebuyers',
                body: 'Moving into a previously owned home? A move-in clean addresses what the sellers left behind, regardless of what the listing said about condition.',
              },
              {
                title: 'Renters',
                body: 'A professionally cleaned apartment or house on day one sets the right standard before you unpack. Do not rely on what the previous tenant left behind.',
              },
              {
                title: 'Property managers',
                body: 'Turn a unit over to its next resident with a thorough clean that covers every surface, not just the obvious ones.',
              },
              {
                title: 'New build owners',
                body: 'Construction dust and residue survive the builder handoff. A post-construction move-in clean addresses what the site sweep misses.',
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
            heading="What move-in cleaning covers."
            sub="A move-in clean goes deeper than a routine maintenance clean. These are the areas we address."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside cabinets, drawers, and shelving',
              'Appliance interiors: oven, refrigerator, microwave, dishwasher',
              'Bathrooms: fixtures, tile, grout, mirrors',
              'Baseboards, window sills, and ledges',
              'Light fixtures and ceiling fans',
              'Vents and air returns',
              'All floor surfaces: vacuuming and mopping',
              'Kitchen countertops and backsplash',
              'Interior windows and glass',
              'Closet interiors and track areas',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is confirmed before we begin. If your space has specific requirements, let us
            know during the booking and we will account for them.
          </p>
          <p className="mt-4 text-sm">
            Moving out of your current home too?{' '}
            <Link href={ROUTES.services + '/move-out-cleaning'} className="text-brand-blue font-semibold hover:underline">
              See our move-out cleaning service
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
            heading="A clean start, not a surface sweep."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Deeper than a routine clean',
                body: 'Move-in cleaning covers the surfaces and spaces that get skipped in a recurring maintenance clean: inside appliances, vents, baseboards, and cabinet interiors.',
              },
              {
                title: 'Family-owned and local',
                body: `${SITE.owners} run Final Touch from Southern Nevada. You are working directly with the owners, not booking through a national platform.`,
              },
              {
                title: 'Scheduled around your move',
                body: 'We work with your move-in timeline. The best time for a move-in clean is before your furniture arrives, and we plan accordingly.',
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
          <SectionHeader eyebrow="How it works" heading="From booking to move-in ready." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about the space',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know the size of the home or apartment and your target move-in date.`,
              },
              {
                n: '02',
                title: 'Phone consultation or walkthrough',
                body: 'For most move-in cleans we can scope over the phone with a few questions. For larger or more complex spaces, we may recommend a quick walkthrough.',
              },
              {
                n: '03',
                title: 'Schedule before furniture arrives',
                body: 'We confirm the date and time. The ideal window is after keys transfer but before your belongings arrive, so we have full access to every surface.',
              },
              {
                n: '04',
                title: 'Top-to-bottom clean',
                body: 'We work through the space room by room: cabinets, appliances, bathrooms, floors, and every finishing surface. Done when the checklist is clear.',
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
            heading="Move-in cleaning across Clark County."
            sub={`We serve move-in cleans throughout ${SITE.serviceArea.county}, Nevada, including Las Vegas, Henderson, North Las Vegas, and Boulder City.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: ROUTES.locations },
              { name: 'Henderson, NV', href: ROUTES.locations },
              { name: 'North Las Vegas, NV', href: ROUTES.locations },
              { name: 'Boulder City, NV', href: ROUTES.locations },
              { name: 'Clark County, NV', href: ROUTES.locations },
            ].map((city) => (
              <li key={city.name}>
                {/* TODO-BATCH-4: Replace ROUTES.locations with per-city href once city pages are built */}
                <Link
                  href={city.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
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
                <ServiceCard href={s.href} name={s.name} description={s.shortDescription} />
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
        heading="Move-in cleaning questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Schedule your move-in clean."
        sub={`Free quotes across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request and we will confirm your date.`}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
