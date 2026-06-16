import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { NEIGHBORHOODS, ROUTES, SERVICES } from '@/lib/constants/routes';
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services in Las Vegas, NV',
  description:
    'Family-owned commercial cleaning in Las Vegas, NV. Office, janitorial, post-construction, and property management. Licensed and insured. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas' },
  openGraph: {
    title: 'Family-Owned Commercial Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Family-owned commercial cleaning in Las Vegas, NV. Office, janitorial, post-construction, and property management. Licensed and insured. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas`,
  },
};

// Las Vegas location page. All 7 services offered city-wide.
// Service card order reflects Las Vegas demand profile:
// move-out first (high renter population), deep cleaning second
// (desert dust / climate resets), commercial third (large commercial sector),
// post-construction fourth (active build pipeline), then remaining services.
const LAS_VEGAS_SERVICES = [
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

// Built Las Vegas neighborhood pages, derived from the NEIGHBORHOODS constant
// by filtering on parentCity. Single source of truth — new neighborhoods appear
// here automatically as they are added to lib/constants/routes.ts.
const LAS_VEGAS_NEIGHBORHOODS = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).filter(
  (n) => n.parentCity === 'las-vegas' && n.built,
);

const faq = [
  {
    q: 'Does Final Touch Cleaning Company serve Las Vegas, NV?',
    a: `Yes. Final Touch serves Las Vegas and the surrounding Las Vegas Valley as part of its ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company, serving commercial, post-construction, and property-managed properties throughout the city, along with move-in and move-out cleans for landlords and renters.`,
  },
  {
    q: 'What areas of Las Vegas does Final Touch cover?',
    a: 'Final Touch covers Las Vegas citywide, from the northwest and southwest valleys to areas near Downtown Las Vegas. As a service-area business, the team comes to the customer\'s location anywhere across the city.',
  },
  {
    q: 'What cleaning services does Final Touch offer in Las Vegas?',
    a: `Final Touch offers seven services in Las Vegas: commercial and office cleaning, janitorial services, and post-construction cleanup are the primary focus — serving businesses, property managers, and landlords across the city. Move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning are also available. Commercial and post-construction work leads the service mix, with residential and rental-turnover cleans available alongside it.`,
  },
  {
    q: 'Does Final Touch provide ongoing commercial cleaning programs for Las Vegas businesses?',
    a: `Yes. Final Touch offers recurring office and janitorial cleaning programs for Las Vegas businesses. Each program is scoped through a free walkthrough — a phone call or a brief on-site visit — so the frequency and scope reflect the actual facility. ${SITE.owners} own and run the company and are licensed and insured. Call ${SITE.phone.display} to discuss your program.`,
  },
  {
    q: 'Does Final Touch handle post-construction cleaning for Las Vegas new builds and renovations?',
    a: 'Yes. Post-construction cleanup is one of the services Final Touch provides throughout Las Vegas. The work covers debris removal, dust and drywall residue, surface detail cleaning, and preparing a new or renovated space for occupancy.',
  },
  {
    q: 'Can Final Touch help with move-out cleaning for Las Vegas apartments and rentals?',
    a: `Yes. Final Touch provides move-out cleaning for apartments, condos, and rental homes throughout Las Vegas. The goal is a deposit-ready clean when you hand back the keys. A walkthrough helps scope the right service before the quote.`,
  },
  {
    q: 'How do I schedule a cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or send a quote request through the website. Final Touch walks through the job before quoting so you get a real estimate, not a templated rate.`,
  },
  {
    q: 'Is Final Touch a local Las Vegas cleaning company or a franchise?',
    a: `Final Touch is a locally owned, family-run commercial cleaning company based in Southern Nevada, not a franchise. ${SITE.owners} own and operate it. When you call, you reach the owners or the team directly.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: '+17024445077',
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  description:
    'Family-owned commercial cleaning company serving Las Vegas, NV. Office cleaning, janitorial, post-construction, and property management cleaning.',
  founder: [
    { '@type': 'Person', name: 'Scott Maland' },
    { '@type': 'Person', name: 'Nicole Maland' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Las Vegas', sameAs: 'https://www.wikidata.org/wiki/Q23768' },
    { '@type': 'AdministrativeArea', name: 'Clark County, Nevada' },
  ],
  serviceType: [
    'Commercial Cleaning',
    'Post-Construction Cleanup',
    'Janitorial Services',
    'Move-In Cleaning',
    'Move-Out Cleaning',
    'Deep Cleaning',
    'Retail Space Cleaning',
    'Residential Cleaning',
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Locations', href: '/locations' },
  { label: 'Las Vegas' },
];

export default function LasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        eyebrow={`Serving ${SITE.serviceArea.county}, NV`}
        heading="Commercial Cleaning Services in Las Vegas, NV"
        sub={`Final Touch provides commercial and post-construction cleaning services across Las Vegas. From recurring office and janitorial programs to post-construction detail work and move-in/move-out cleans for property managers, ${SITE.owners} and the team serve Las Vegas properties with the same standard every time.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/locations/las-vegas-commercial-cleaning-hero.webp',
          alt: 'Commercial cleaning in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* Quick local answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Las Vegas, NV with seven cleaning services: commercial
            and office cleaning, janitorial programs, post-construction cleanup, move-in cleaning,
            move-out cleaning, deep cleaning, and retail space cleaning. The company is family-owned
            and operated by Scott and Nicole Maland, based in Southern Nevada and serving properties
            across Las Vegas and{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of Clark County
            </Link>
            . To request a quote or ask about a specific job, call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Local cleaning needs */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Las Vegas cleaning needs"
            heading="What drives cleaning demand in Las Vegas."
            sub="The city's mix of desert climate, active construction, and high rental turnover creates specific cleaning needs for residents and businesses."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Desert dust and dry climate</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Las Vegas sits in the Mojave Desert, where fine-particle dust accumulates indoors
                faster than in wetter climates. Surfaces near windows, doors, and HVAC returns collect
                particulate continuously. Deep cleaning and regular maintenance programs are a practical
                response to the region&apos;s air quality and dust load, not just an aesthetic preference.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Active construction pipeline</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial and residential construction activity has remained consistent across the
                Las Vegas Valley for years. New builds and renovations create demand for post-construction
                cleanup: clearing drywall dust, construction debris, adhesive residue, and window film
                so a finished space is actually ready for occupancy. Final Touch provides that final
                detail pass{' '}
                <Link
                  href="/services/post-construction-cleanup"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  across the metro
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">High rental turnover</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A significant portion of Las Vegas residents rent rather than own, which creates
                ongoing demand for move-in and{' '}
                <Link
                  href="/services/move-out-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-out cleaning
                </Link>{' '}
                tied to lease cycles. Property managers, landlords, and renters preparing for a
                deposit-return all benefit from a professional clean at turnover.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Commercial and office sector</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Las Vegas has a large commercial sector spanning professional services, retail,
                hospitality-adjacent businesses, and healthcare. Offices and commercial interiors
                require routine maintenance programs that keep workspaces presentable and functional.
                Final Touch provides{' '}
                <Link
                  href="/services/commercial-office-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  commercial and office cleaning
                </Link>{' '}
                and janitorial programs across the city.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Retail storefronts and corridors</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Retail operators in Las Vegas strip malls, shopping corridors, and mixed-use centers
                need customer-ready spaces maintained on a regular schedule. Retail space cleaning
                covers sales floors, fitting rooms, restrooms, and back-of-house areas so the
                customer-facing environment stays clean and welcoming.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Seasonal deep cleans</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The extreme Las Vegas summer heat and dry air accelerate wear on surfaces and increase
                the frequency at which spaces feel overdue for a thorough reset. Periodic{' '}
                <Link
                  href="/services/deep-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  deep cleaning
                </Link>{' '}
                addresses the areas standard maintenance skips: inside appliances, behind fixtures,
                high-dust shelves, and detail surfaces throughout the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Services in Las Vegas"
            heading="Commercial cleaning services for Las Vegas businesses and property managers."
            sub="All seven services available across the city. Cards ordered by local demand."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {LAS_VEGAS_SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                href={`${s.href}/las-vegas`}
                name={s.name}
                description={s.shortDescription}
                image={s.image}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Not sure which service fits your job?{' '}
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              See all cleaning services
            </Link>{' '}
            or call {SITE.phone.display} for a quick walkthrough.
          </p>
        </div>
      </section>

      {/* Why Final Touch */}
      <section className="bg-soft-blue">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="A local team that treats Las Vegas like home."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Family-owned and owner-led</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scott and Nicole Maland own and run Final Touch. This is not a franchise or a
                staffing platform. When you call, you reach the owners or the team directly, not
                a call center. That accountability carries through to every job.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Detail-focused approach</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The company name reflects the standard. Final Touch focuses on the details that
                define whether a space is truly clean: edges, corners, fixtures, and surfaces
                that get skipped during routine maintenance. The goal is a finished result, not
                a checked box.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">Free quote, real estimate</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Final Touch walks through the job before quoting. The walkthrough is a phone call
                or a brief on-site visit if the scope calls for it. What comes back is a real
                estimate based on the actual job, not a templated rate from a form. No pressure,
                no charge for the conversation.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm flex flex-wrap gap-x-5 gap-y-2">
            <Link href={ROUTES.about} className="font-semibold text-brand-blue hover:underline">
              Learn about the team →
            </Link>
            <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
              Request a free quote →
            </Link>
          </p>
        </div>
      </section>

      {/* Nearby neighborhoods */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Las Vegas neighborhoods"
            heading="Neighborhoods we serve in Las Vegas."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {LAS_VEGAS_NEIGHBORHOODS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
              >
                {n.name}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            More Las Vegas neighborhood pages are coming in the next build batch. In the meantime,{' '}
            <a href={SITE.phone.href} className="font-semibold text-brand-blue hover:underline tabular-nums">
              call {SITE.phone.display}
            </a>{' '}
            to confirm coverage for your specific area.
          </p>
        </div>
      </section>

      {/* Related cities */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-4">Also serving nearby</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/locations/henderson"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Henderson
            </Link>
            <Link
              href="/locations/north-las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              North Las Vegas
            </Link>
            <Link
              href="/locations/boulder-city"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Boulder City
            </Link>
            <Link
              href="/locations/clark-county"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Clark County
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Cleaning services in Las Vegas: frequently asked questions"
        items={faq}
        defaultOpenFirst
      />

      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="font-semibold text-brand-blue hover:underline">
              Read all frequently asked questions →
            </Link>
          </p>
        </div>
      </div>

      <CTASection
        heading="Ready to bring the details to Las Vegas?"
        sub={`Free quotes for cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
