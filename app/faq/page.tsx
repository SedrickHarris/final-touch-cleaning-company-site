import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: { absolute: 'Commercial Cleaning FAQ | Final Touch | Las Vegas, NV' },
  description:
    'Answers about Final Touch Cleaning Company, a commercial cleaning company in Las Vegas & Clark County, NV: services, scheduling & quotes. Call (702) 444-5077.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Commercial Cleaning FAQ | Final Touch | Las Vegas, NV',
    description:
      'Answers to questions about Final Touch Cleaning Company, a commercial cleaning company serving Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County, NV. Services, scheduling, quotes, and more. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/faq`,
  },
};

// ─── Category 1 — About Final Touch Cleaning Company (new) ───────────────────
const companyIdentityFaq = [
  {
    q: 'Who owns Final Touch Cleaning Company?',
    a: 'Final Touch Cleaning Company is owned and operated by Scott and Nicole Maland, a husband-and-wife team based in Southern Nevada. They personally oversee every commercial account across Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County.',
  },
  {
    q: 'Is Final Touch a franchise or locally owned?',
    a: 'Final Touch is a locally owned, family-operated business, not a franchise. Scott and Nicole Maland run the company directly. Every account is owner-led, not passed to a subcontractor rotation or managed through a staffing platform.',
  },
  {
    q: 'What is Final Touch Cleaning Company?',
    a: `Final Touch Cleaning Company is a commercial cleaning company serving offices, retail spaces, post-construction sites, and commercial properties across ${SITE.serviceArea.county}, Nevada. The company provides seven services: commercial and office cleaning, janitorial services, post-construction cleanup, retail space cleaning, move-in cleaning, move-out cleaning, and deep cleaning.`,
  },
  {
    q: "What is Final Touch Cleaning Company's mission?",
    a: 'Final Touch exists to provide commercial cleaning that business owners and property managers can rely on without supervising every visit. Every job ends with a finishing pass on the surfaces most crews skip: baseboards, vents, edges, glass, and hardware. That finishing standard is what the company name means.',
  },
];

// ─── Category 2 — General questions (retained exactly) ───────────────────────
const companyFaq = [
  {
    q: 'Who owns Final Touch Cleaning Company?',
    a: `${SITE.owners} own and run Final Touch. It is a family-run cleaning company based in Southern Nevada, not a franchise.`,
  },
  {
    q: 'What does family-owned mean for Final Touch?',
    a: `It means ${SITE.owners} are accountable for every job. The same owners who set the standard answer the phone, do walkthroughs, and check the finish.`,
  },
  {
    q: 'What does "Where small details bring BIG RESULTS" mean?',
    a: "It means we finish what other crews skip: baseboards, vents, switch plates, edges, and corners. The final ten percent of a clean is what makes a space feel done, and that's where we focus.",
  },
  {
    q: 'What makes Final Touch different from a basic cleaning service?',
    a: 'We focus on the finishing details that most crews rush past: edges, corners, vents, baseboards, switch plates, the inside of the oven. Same team and same checklist on every job. No upsells, no surprise add-ons.',
  },
];

// ─── Category 3 — Service area (retained exactly) ────────────────────────────
const serviceAreaFaq = [
  {
    q: 'What areas does Final Touch serve?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}.`,
  },
  {
    q: 'Does Final Touch serve Las Vegas?',
    a: 'Yes. Las Vegas is one of our primary service cities. Homes, offices, retail, post-construction sites, and ongoing janitorial routes across the city.',
  },
  {
    q: 'Does Final Touch serve Henderson?',
    a: 'Yes. Henderson is one of our primary service cities. Same team and same finishing standard across Henderson neighborhoods and business corridors.',
  },
  {
    q: 'Does Final Touch serve North Las Vegas?',
    a: 'Yes. North Las Vegas is in our primary service area. Residential and commercial cleaning, on the same schedule and finishing checklist as the rest of the county.',
  },
  {
    q: 'Does Final Touch serve Boulder City?',
    a: 'Yes. Boulder City is in our primary service area. Local cleaning for Boulder City homes and storefronts.',
  },
  {
    q: 'Does Final Touch serve all of Clark County?',
    a: `Yes. We work across ${SITE.serviceArea.county} with the same team and the same finishing standard regardless of which part of the county you are in.`,
  },
  {
    q: 'How does Final Touch handle service areas without a public storefront?',
    a: 'Final Touch is a service-area business. We come to you. There is no public storefront to visit, but our team is based in Southern Nevada and we cover every part of Clark County on the same schedule.',
  },
];

// ─── Category 4 — Getting a quote and contacting us (retained exactly) ───────
const quoteContactFaq = [
  {
    q: 'How do I request a cleaning quote?',
    a: `Send a quote request through our website form, call ${SITE.phone.display}, or email ${SITE.email.display}. We answer phone calls from real people, not a call center.`,
  },
  {
    q: 'What should I include in a quote request?',
    a: 'Space type (home, office, retail, post-construction), rough size, the city or neighborhood, your timing, and anything specific (pets, post-construction dust, hard-water buildup, access notes). None of it is required. We will cover the rest on the walkthrough.',
  },
  {
    q: 'Are the online forms active yet?',
    a: `Our online quote form is in setup right now. For the fastest response, call ${SITE.phone.display} or email ${SITE.email.display}. We are wiring the form to our scheduling system shortly.`,
  },
  {
    q: 'Can I call instead of using the form?',
    a: `Yes. Calling ${SITE.phone.display} is often the fastest way to reach us. The phone is answered by ${SITE.owners} or someone on the team.`,
  },
  {
    q: 'What happens after I request a quote?',
    a: 'We set up a short walkthrough, phone or on-site, whichever fits the job. After the walkthrough you get a real quote, not a templated rate. No pressure to book.',
  },
  {
    q: 'Do you provide pricing online?',
    a: 'No. Pricing depends on the space, the scope, and the timing. We give you a real number after a short walkthrough rather than a one-size-fits-all rate that changes when we arrive.',
  },
];

// ─── Category 5 — Cleaning services (retained exactly) ───────────────────────
const cleaningServiceFaq = [
  {
    q: 'What cleaning services does Final Touch Cleaning Company offer?',
    a: 'Seven core services: commercial and office cleaning, janitorial routes, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning.',
  },
  {
    q: 'Does Final Touch clean homes and businesses?',
    a: 'Yes, both. Homes, offices, retail, post-construction sites, and ongoing janitorial routes are all part of our seven core services.',
  },
  {
    q: 'Do you clean rental properties, offices, retail spaces, and construction sites?',
    a: 'Yes. Rental properties (move-in and move-out cleaning), offices (commercial and janitorial), retail spaces (retail space cleaning), and construction sites (post-construction cleanup) are all in our core service mix.',
  },
  {
    q: 'What should I do if I am not sure which service I need?',
    a: 'Tell us what triggered the request: moving in, finishing a build, opening a store, resetting a space, keeping an office tidy week to week. We will match it to the right service on the walkthrough. No charge for that conversation.',
  },
];

// ─── Category 6 — Move-in, move-out, and deep cleaning ───────────────────────
// Q1, Q2, Q4 retained exactly; Q3 replaced (property-manager-first).
const moveDeepFaq = [
  {
    q: 'Does Final Touch offer move-in cleaning?',
    a: 'Yes. Move-in cleaning preps a space top-to-bottom before you settle in. Built around the timing of new keys.',
  },
  {
    q: 'Does Final Touch offer move-out cleaning?',
    a: 'Yes. Move-out cleaning is the deposit-ready clean when you hand back the keys. Top-to-bottom and aligned with your move-out walkthrough timing.',
  },
  {
    q: 'Who hires move-in and move-out cleaning?',
    a: `Property managers and landlords are the most common clients for move-in and move-out cleaning across ${SITE.serviceArea.county}. Unit turns between tenants, first-occupancy cleans for new rentals, and end-of-lease handoffs all benefit from a professional clean. Individual renters and homeowners also use both services. Call ${SITE.phone.display} to discuss your situation.`,
  },
  {
    q: 'When should I book deep cleaning vs move-in cleaning?',
    a: "Move-in cleaning is built around the moment new keys change hands. Deep cleaning is a periodic reset for a space that is already in use. Both reach the corners standard service skips. The difference is timing and intent.",
  },
];

// ─── Category 7 — Commercial, office, retail, and janitorial (replaced) ──────
const commercialFaq = [
  {
    q: 'Is Final Touch primarily a commercial cleaning company?',
    a: `Yes. Final Touch is a commercial cleaning company. The primary focus is offices, retail spaces, post-construction sites, and commercial properties across ${SITE.serviceArea.county}. Move-in, move-out, and deep cleaning are also available for property managers and residential transitions.`,
  },
  {
    q: 'Does Final Touch clean offices in Las Vegas?',
    a: `Yes. Final Touch provides commercial office cleaning and janitorial services for offices, professional services firms, and commercial buildings across Las Vegas and ${SITE.serviceArea.county}. Recurring programs and one-time cleans are both available. ${SITE.owners} oversee every commercial account personally.`,
  },
  {
    q: 'Does Final Touch offer janitorial services?',
    a: 'Yes. Final Touch schedules ongoing janitorial routes for offices, retail, and commercial operations. Scope, rhythm, and access are confirmed during the walkthrough and tailored to your facility.',
  },
  {
    q: 'Does Final Touch offer retail space cleaning?',
    a: `Yes. Final Touch provides before-open and after-close cleaning for retail shops, showrooms, and strip center tenants across Las Vegas, Henderson, and ${SITE.serviceArea.county}. Scope is confirmed per space at the initial walkthrough.`,
  },
  {
    q: 'What kinds of businesses hire Final Touch for commercial cleaning?',
    a: `Final Touch works with business owners, office managers, general contractors, property managers, landlords, and retail operators across ${SITE.serviceArea.county}. Both one-time cleans and recurring programs are available depending on the type of space and the job.`,
  },
];

// ─── Category 8 — Post-construction cleanup ──────────────────────────────────
// Q1, Q2 retained exactly; Q3, Q4 replaced (GC / TI primary audience).
const postConstructionFaq = [
  {
    q: 'Does Final Touch offer post-construction cleanup?',
    a: 'Yes. Post-construction cleanup is one of our seven core services. We handle the dust, residue, and fine grit that lands on every surface after a build or renovation.',
  },
  {
    q: 'What is included in post-construction cleanup?',
    a: 'Final-touch detail cleaning for spaces just finishing construction: fine dust on every horizontal surface, residue around fixtures and trim, paint flecks on baseboards, glass and hardware finish work. Scope is tailored to the build at the walkthrough.',
  },
  {
    q: 'Do you work with general contractors and tenant improvement contractors?',
    a: `Yes. Final Touch works directly with general contractors and tenant improvement contractors to schedule post-construction cleanup around project handoff and occupancy dates across ${SITE.serviceArea.county}. We coordinate on access and timing during the quote walkthrough. Call ${SITE.phone.display} to discuss your project.`,
  },
  {
    q: 'What types of construction projects does Final Touch clean after?',
    a: `Commercial buildouts, tenant improvement projects, office renovations, retail fit-outs, new residential builds, and home renovations across ${SITE.serviceArea.county}. If construction has happened and the space needs a finishing clean before occupancy or handoff, that is the job. Call ${SITE.phone.display} to walk through the scope.`,
  },
];

// ─── Category 9 — Scheduling and recurring cleaning (retained exactly) ───────
const schedulingFaq = [
  {
    q: 'Can I request recurring cleaning?',
    a: "Yes. We schedule ongoing janitorial routes for offices, retail, and commercial spaces, and recurring cleans for residences. Tell us the space and rhythm you want during the walkthrough and we will suggest a fit.",
  },
  {
    q: 'Do I have to be there during the cleaning?',
    a: 'Not always. We work with property managers, real-estate agents, and homeowners who hand off access. We confirm the access plan during the walkthrough so there are no surprises.',
  },
  {
    q: 'How does Final Touch schedule visits?',
    a: 'Scheduling is based on location, timing, and the scope of the job. For recurring routes we set a rhythm during the walkthrough; for one-time jobs we book around your move-in, move-out, or build readiness date.',
  },
  {
    q: 'How much notice do you need to schedule a cleaning?',
    a: `Lead time depends on the job type and current availability. Call ${SITE.phone.display} or email ${SITE.email.display} with your timing and we will tell you what is open. For recurring routes we coordinate a start date during the walkthrough.`,
  },
];

// ─── Category 10 — Trust, safety, and service expectations ───────────────────
// Q1, Q3, Q4, Q5 retained exactly; Q2 replaced (eco claim withheld from
// production per no-fake-data policy); Q6 added but commented out until eco
// product use is owner-confirmed.
const trustExpectFaq = [
  {
    q: 'Do you bring your own cleaning supplies?',
    a: 'Yes. Our team brings cleaning supplies and equipment unless the job calls for something specific you already have on hand.',
  },
  {
    q: 'What cleaning products does Final Touch use?',
    a: `Final Touch uses professional cleaning products appropriate to each surface and job type. If you have specific sensitivities or product preferences, mention them when you request a quote and we will discuss options during the walkthrough. Call ${SITE.phone.display} with any questions.`,
    // TODO-VERIFY-ECO: When the owner confirms eco-friendly product use, insert the
    // sentence "Eco-friendly and green cleaning options are available." after the
    // first sentence of the answer above. The eco claim must not ship until confirmed.
  },
  {
    q: 'How long does a job take?',
    a: 'It depends on the space and the scope. We will give you a realistic time estimate after the walkthrough.',
  },
  {
    q: 'How do you handle property access?',
    a: "We confirm the access plan during the walkthrough. Lockboxes, key handoffs, doorman buildings, gate codes: we tailor the plan to the property and the owner's preference.",
  },
  {
    q: 'What if I am not happy with the result?',
    a: `Tell us. Call ${SITE.phone.display} or email ${SITE.email.display} and we will talk through it. We want every job to end finished. If something missed, we want to know.`,
  },
  // TODO-VERIFY-ECO: activate after owner confirms eco-friendly product use.
  // Uncomment the eco question below once eco claims are owner-confirmed.
  // {
  //   q: 'Does Final Touch use eco-friendly cleaning products?',
  //   a: 'Yes. Final Touch uses professional-grade, eco-friendly cleaning products. Green cleaning solutions protect the health of your employees and customers. Clients with specific product sensitivities or preferences can discuss requirements at the initial walkthrough.',
  // },
];

// allFaq combines every VISIBLE FAQ array (commented eco Q6 excluded), so the
// FAQPage JSON-LD matches the rendered answers exactly. No schema-only questions.
const allFaq = [
  ...companyIdentityFaq,
  ...companyFaq,
  ...serviceAreaFaq,
  ...quoteContactFaq,
  ...cleaningServiceFaq,
  ...moveDeepFaq,
  ...commercialFaq,
  ...postConstructionFaq,
  ...schedulingFaq,
  ...trustExpectFaq,
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE.url}/faq` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow="Help center"
        heading="Commercial cleaning questions, answered."
        sub={`${SITE.name} is a commercial cleaning company serving ${SITE.serviceArea.county}, Nevada. ${SITE.owners} own and operate the business. Call ${SITE.phone.display} or browse the answers below.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        image={{
          src: '/images/heroes/cleaning-service-faq-las-vegas-hero.webp',
          alt: 'Final Touch Cleaning Company FAQs for Las Vegas, NV.',
        }}
      />

      {/* ── Direct-answer intro ───────────────────────────────────────────── */}
      {/* Entity authority paragraph for AI search citation. Names business,
          owners, all cities, county, and contact in the first 100 words. */}
      <section className="bg-brand-white border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company is a commercial cleaning company owned and operated by{' '}
            <Link href={ROUTES.ourTeam} className="font-semibold text-brand-blue hover:underline">
              {SITE.owners}
            </Link>{' '}
            in Southern Nevada. We serve{' '}
            <Link href={ROUTES.locations} className="font-semibold text-brand-blue hover:underline">
              Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County
            </Link>{' '}
            with seven commercial cleaning services. Call{' '}
            <a href={SITE.phone.href} className="font-semibold text-brand-blue hover:underline tabular-nums">
              {SITE.phone.display}
            </a>
            , email{' '}
            <a href={SITE.email.href} className="font-semibold text-brand-blue hover:underline break-all">
              {SITE.email.display}
            </a>
            , or{' '}
            <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
              request a free quote
            </Link>{' '}
            to get started.
          </p>

          {/* Related pages chip row - internal link equity */}
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'All cleaning services', href: ROUTES.services },
              { label: 'Our service area',      href: ROUTES.locations },
              { label: 'About our company',     href: ROUTES.about },
              { label: 'Industries we serve',   href: ROUTES.industries },
              { label: 'Our cleaning process',  href: ROUTES.cleaningProcess },
              { label: 'Client reviews',        href: ROUTES.reviews },
              { label: 'Pricing',               href: ROUTES.pricing },
              { label: 'Request a free quote',  href: ROUTES.freeQuote },
            ].map((chip) => (
              <li key={chip.label}>
                <Link
                  href={chip.href}
                  className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray border border-border-subtle px-5 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {chip.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ categories ────────────────────────────────────────────────── */}
      <FAQSection items={companyIdentityFaq} heading="About Final Touch Cleaning Company" defaultOpenFirst />
      <FAQSection items={companyFaq} heading="General questions" />
      <FAQSection items={serviceAreaFaq} heading="Service area" />
      <FAQSection items={quoteContactFaq} heading="Getting a quote and contacting us" />
      <FAQSection items={cleaningServiceFaq} heading="Cleaning services" />
      <FAQSection items={moveDeepFaq} heading="Move-in, move-out, and deep cleaning" />
      <FAQSection items={commercialFaq} heading="Commercial, office, retail, and janitorial" />
      <FAQSection items={postConstructionFaq} heading="Post-construction cleanup" />
      <FAQSection items={schedulingFaq} heading="Scheduling and recurring cleaning" />
      <FAQSection items={trustExpectFaq} heading="Trust, safety, and service expectations" />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        heading="Still have questions? Let us walk you through it."
        sub={`Call ${SITE.phone.display} or request a free walkthrough. Serving commercial properties across ${SITE.serviceArea.county}, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
