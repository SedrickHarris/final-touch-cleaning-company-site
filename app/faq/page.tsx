import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Final Touch Cleaning Company',
  description:
    'Answers to common questions about Final Touch Cleaning Company: services, service area in Clark County NV, quotes, scheduling, and what to expect. Call (702) 444-5077.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Final Touch Cleaning Company | Clark County, NV',
    description:
      'Browse 40+ answers about our cleaning services, service area, quote process, and what to expect. Family-owned, serving Las Vegas, Henderson, and Clark County.',
    type: 'website',
    url: `${SITE.url}/faq`,
  },
};

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
    q: 'Does Final Touch offer deep cleaning?',
    a: 'Yes. Deep cleaning is a periodic reset for a space you already live in or operate from. It reaches the corners standard service skips and takes the space back to baseline.',
  },
  {
    q: 'When should I book deep cleaning vs move-in cleaning?',
    a: "Move-in cleaning is built around the moment new keys change hands. Deep cleaning is a periodic reset for a space that is already in use. Both reach the corners standard service skips. The difference is timing and intent.",
  },
];

const commercialFaq = [
  {
    q: 'Does Final Touch offer commercial office cleaning?',
    a: 'Yes. We clean offices and commercial interiors across Clark County, both as one-time jobs and as ongoing janitorial routes.',
  },
  {
    q: 'Does Final Touch offer janitorial services?',
    a: 'Yes. We schedule ongoing janitorial routes for offices, retail, and commercial operations. The rhythm and scope are tailored to your space during the walkthrough.',
  },
  {
    q: 'Does Final Touch offer retail space cleaning?',
    a: 'Yes. Customer-ready cleans for storefronts, showrooms, and retail interiors are one of our seven core services.',
  },
  {
    q: 'What kinds of businesses hire Final Touch?',
    a: 'Offices, retail stores, post-construction sites, property managers, and small commercial operations. We tailor the scope and schedule to each space.',
  },
];

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
    q: 'Do you work with contractors and builders?',
    a: "Yes. Post-construction cleanup is timed around the contractor's schedule and the property's readiness walkthrough. We coordinate on access and timing during the quote walkthrough.",
  },
  {
    q: 'What types of construction projects does Final Touch clean after?',
    a: `New residential builds, commercial tenant improvements, home renovations, and remodels across ${SITE.serviceArea.county}. If construction has happened and the space needs a finishing clean before occupancy or handoff, that is the job we do. Call ${SITE.phone.display} to walk through the scope.`,
  },
];

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

const trustExpectFaq = [
  {
    q: 'Do you bring your own cleaning supplies?',
    a: 'Yes. Our team brings cleaning supplies and equipment unless the job calls for something specific you already have on hand.',
  },
  {
    q: 'What cleaning products does Final Touch use?',
    a: `We use professional cleaning products appropriate to each surface and job type. If you have specific sensitivities or preferences regarding products, mention them when you request a quote and we will discuss options during the walkthrough. Call ${SITE.phone.display} with any questions.`,
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
];

const allFaq = [
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
      <HeroSection
        eyebrow="Help center"
        heading="Frequently asked questions."
        sub={`${SITE.name} serves ${SITE.serviceArea.county}, Nevada. Browse answers about our cleaning services, service area, quote process, scheduling, and what to expect. Still have a question? Call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        image={{
          src: '/images/heroes/cleaning-service-faq-las-vegas-hero.webp',
          alt: 'Final Touch Cleaning Company FAQs for Las Vegas, NV.',
        }}
      />

      {/* Direct-answer intro - entity authority paragraph for AI search citation.
          Names business, owners, all cities, county, and phone in first 100 words. */}
      <section className="bg-brand-white border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company is a family-owned cleaning service based in Southern
            Nevada, owned and operated by {SITE.owners}. We serve Las Vegas, Henderson, North
            Las Vegas, Boulder City, and all of {SITE.serviceArea.county}. This page answers
            the questions we hear most about our services, our service area, and how to get
            started. If your question is not here, call{' '}
            <a href={SITE.phone.href} className="font-semibold text-brand-blue hover:underline tabular-nums">
              {SITE.phone.display}
            </a>
            .
          </p>

          {/* Internal links - Tier 1 live routes only */}
          <nav aria-label="FAQ quick links" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              Our cleaning services →
            </Link>
            <Link href={ROUTES.locations} className="font-semibold text-brand-blue hover:underline">
              Service area →
            </Link>
            <Link href={ROUTES.about} className="font-semibold text-brand-blue hover:underline">
              About Final Touch →
            </Link>
            <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
              Request a free quote →
            </Link>
            <Link href={ROUTES.contact} className="font-semibold text-brand-blue hover:underline">
              Contact us →
            </Link>
          </nav>
        </div>
      </section>

      <FAQSection items={companyFaq} heading="General company questions" defaultOpenFirst />
      <FAQSection items={serviceAreaFaq} heading="Service area questions" />
      <FAQSection items={quoteContactFaq} heading="Quote and contact questions" />
      <FAQSection items={cleaningServiceFaq} heading="Cleaning service questions" />
      <FAQSection items={moveDeepFaq} heading="Move-in, move-out, and deep cleaning" />
      <FAQSection items={commercialFaq} heading="Commercial, office, retail, and janitorial" />
      <FAQSection items={postConstructionFaq} heading="Post-construction cleanup" />
      <FAQSection items={schedulingFaq} heading="Scheduling and recurring cleaning" />
      <FAQSection items={trustExpectFaq} heading="Trust, safety, and service expectations" />

      <CTASection
        heading="Didn't see your question?"
        sub={`Call ${SITE.phone.display}, email ${SITE.email.display}, or send a quote request and we will get back to you.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

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
