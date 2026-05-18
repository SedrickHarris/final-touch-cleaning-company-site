import type { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Common questions about Final Touch Cleaning Company — services, scheduling, pricing, and what to expect. Family-owned, serving ${SITE.serviceArea.county}, ${SITE.serviceArea.state}.`,
  alternates: { canonical: '/faq' },
};

const aboutFaq = [
  {
    q: 'Who runs Final Touch Cleaning Company?',
    a: `${SITE.owners} own and run Final Touch. It's a family-run cleaning company based in Southern Nevada, not a franchise.`,
  },
  {
    q: 'What does "small details bring big results" mean?',
    a: 'It means we finish what other crews skip — baseboards, vents, switch plates, edges, and corners. The final ten percent is what makes a space feel done.',
  },
  {
    q: 'What areas do you serve?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state} — including ${SITE.serviceArea.cities.join(', ')}.`,
  },
];

const servicesFaq = [
  {
    q: 'What types of cleaning do you offer?',
    a: 'Commercial and office cleaning, janitorial services, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Each service is tailored to the space and timeline.',
  },
  {
    q: 'How do I choose the right service?',
    a: 'Tell us about the space — type, size, timing, and what triggered the need. We\'ll suggest the right service on the walkthrough. There\'s no charge for that conversation.',
  },
  {
    q: 'Do you do one-time cleans or only ongoing service?',
    a: 'Both. One-time jobs (move-in, move-out, post-construction, deep cleaning) and ongoing janitorial routes for offices, retail, and commercial spaces.',
  },
  {
    q: 'Can you handle post-construction cleanup?',
    a: 'Yes. Post-construction cleanup is one of our seven core services — we handle the dust, residue, and fine grit that lands on every surface after a build.',
  },
];

const scheduleFaq = [
  {
    q: 'How do I request a quote?',
    a: `Call ${SITE.phone.display}, email ${SITE.email.display}, or send a quote request through the form on our website. We answer.`,
  },
  {
    q: 'What happens after I reach out?',
    a: 'We set up a short walkthrough — phone or on-site, whichever fits the job. After the walkthrough you get a real quote, not a templated rate. No pressure to book.',
  },
  {
    q: 'Do I have to be there during the cleaning?',
    a: 'Not always. We work with property managers, real-estate agents, and homeowners who hand off access. We confirm the access plan during the walkthrough so there are no surprises.',
  },
];

const pricingFaq = [
  {
    q: 'How does pricing work?',
    a: 'Pricing depends on the space, the scope, and the timing. We give you a real number after a walkthrough — not an online estimator and not a "starting at" rate that changes when we arrive.',
  },
  {
    q: 'Are quotes free?',
    a: 'Yes. Quotes are free and there\'s no pressure to book.',
  },
  {
    q: 'Do you charge extra for the details — baseboards, vents, switch plates?',
    a: 'No. The detail finish is what we do — it\'s included in every job. We don\'t price it as an add-on because it\'s the standard.',
  },
];

const expectFaq = [
  {
    q: 'How long does a job take?',
    a: 'It depends on the space and the scope. We\'ll give you a realistic time estimate after the walkthrough.',
  },
  {
    q: 'Do you bring your own supplies?',
    a: 'Yes. Our team brings cleaning supplies and equipment unless the job calls for something specific you already have on hand.',
  },
  {
    q: 'What if I\'m not happy with the result?',
    a: `Tell us. Call ${SITE.phone.display} or email ${SITE.email.display} and we'll talk through it. We want every job to end finished — if something missed, we want to know.`,
  },
];

const allFaq = [
  ...aboutFaq,
  ...servicesFaq,
  ...scheduleFaq,
  ...pricingFaq,
  ...expectFaq,
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
        sub={`The questions we hear most — about our services, our pricing, our schedule, and what to expect on a job. Still have a question? Call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      <FAQSection items={aboutFaq} heading="About our team" defaultOpenFirst />
      <FAQSection items={servicesFaq} heading="Our services" />
      <FAQSection items={scheduleFaq} heading="Scheduling and process" />
      <FAQSection items={pricingFaq} heading="Pricing" />
      <FAQSection items={expectFaq} heading="What to expect" />

      <CTASection
        heading="Didn't see your question?"
        sub={`Call ${SITE.phone.display} or email ${SITE.email.display}.`}
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
