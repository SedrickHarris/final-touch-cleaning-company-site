import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServicesPreview from '@/components/shared/ServicesPreview';
import TrustBar from '@/components/shared/TrustBar';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

// Homepage. Conversion flow: Hero (split with form) → TrustBar → Services
// preview → Who we help → Why Final Touch → How the quote process works →
// FAQ → Final CTA. No unverified claims. Every fact maps to
// lib/constants/site.ts or to brand-voice positioning already in
// docs/site-os/final-touch-build-context.md.
export default function HomePage() {
  const trustItems = [
    { label: 'Family owned', sub: SITE.owners },
    { label: 'Local team', sub: 'Based in Southern Nevada' },
    {
      label: 'Serving Clark County',
      sub: SITE.serviceArea.cities.join(' · '),
    },
    { label: 'Free quotes', sub: 'No-pressure walkthroughs' },
  ];

  const audiences = [
    {
      title: 'Homeowners',
      body:
        'Detail-focused residential cleans across Clark County. Move-in cleans for new keys, deep cleans when a space needs a real reset.',
    },
    {
      title: 'Renters & landlords',
      body:
        'Move-out cleans for deposit-ready handoffs. Move-in cleans before tenants settle in. Property managers and real-estate agents welcome.',
    },
    {
      title: 'Offices & businesses',
      body:
        'Commercial and janitorial routes for offices, retail, and small commercial operations. Scheduled rhythms or one-time deep cleans.',
    },
    {
      title: 'Contractors & builders',
      body:
        'Post-construction cleanup for new builds and renovations — dust, residue, and the fine grit that lands on every surface after a build.',
    },
  ];

  const faq = [
    {
      q: 'What areas do you serve?',
      a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state} — including ${SITE.serviceArea.cities.join(', ')}.`,
    },
    {
      q: 'What types of cleaning do you offer?',
      a: 'Commercial and office, janitorial, post-construction cleanup, move-in, move-out, deep cleaning, and retail space cleaning. Each service is tailored to the space and timeline.',
    },
    {
      q: 'Do you clean homes and businesses?',
      a: 'Yes — both. Homes, offices, retail, post-construction sites, and ongoing janitorial routes are all part of our seven core services.',
    },
    {
      q: 'Do you provide move-in and move-out cleaning?',
      a: 'Yes. Move-in cleaning preps a space before you settle in. Move-out cleaning is the deposit-ready clean when you hand back the keys. Both are top-to-bottom and finish the corners standard service skips.',
    },
    {
      q: 'Can I request recurring cleaning?',
      a: 'Yes. We schedule ongoing janitorial routes for offices, retail, and commercial spaces, and recurring cleans for residences. Tell us the space and rhythm you want during the walkthrough and we\'ll suggest a fit.',
    },
    {
      q: 'How do I get a quote?',
      a: `Call ${SITE.phone.display}, email ${SITE.email.display}, or send a quote request through the form above. Quotes are free and there's no pressure to book.`,
    },
    {
      q: 'Who runs Final Touch?',
      a: `${SITE.owners} own and run Final Touch. It's a family-run operation based in Southern Nevada, not a franchise.`,
    },
    {
      q: 'Are your online forms active yet?',
      a: `Our online quote form is in setup right now. For the fastest response, call ${SITE.phone.display} or email ${SITE.email.display}. We're wiring the form to our scheduling system shortly.`,
    },
  ];

  const heroSub = `Family-owned cleaning for homes, offices, and new builds across ${SITE.serviceArea.cities.slice(0, 3).join(', ')}, and ${SITE.serviceArea.cities[3]}. We finish what other crews skip — baseboards, vents, switch plates, and the details that change how a space feels.`;

  return (
    <>
      <HeroSection
        eyebrow={`Cleaning · ${SITE.serviceArea.county}`}
        heading={SITE.coreMessage}
        emphasis="details"
        sub={heroSub}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <TrustBar items={trustItems} />

      {/* Services preview */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="Seven services. One standard."
            sub="From a single deep clean to ongoing janitorial routes, every job ends with the same checklist — the details that make a space feel finished."
          />

          <ServicesPreview services={SERVICES} />

          <p className="mt-10 text-sm">
            <Link
              href={ROUTES.services}
              className="font-semibold text-brand-blue hover:underline"
            >
              View all services →
            </Link>
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we help"
            heading="Built for homes, offices, and everything in between."
            sub={`Final Touch works with homeowners, renters, landlords, property managers, contractors, and business owners across ${SITE.serviceArea.county}, ${SITE.serviceArea.state}.`}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Local. Family-owned. Detail-focused."
            sub={`Cleaning across ${SITE.serviceArea.county} — ${SITE.serviceArea.cities.join(', ')} — with a finishing standard you can see at the walkthrough, not after the invoice.`}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight">
                Family-owned, local team
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                {SITE.owners} run Final Touch from Southern Nevada. The same
                people who answer the phone set the standard for every job — no
                franchise, no call center, no subcontractor pool.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight">
                The details others skip
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                Baseboards, vents, switch plates, edges, corners, the inside of
                the oven, the dust on top of the door frames. The final ten
                percent is what makes a space feel finished — and that&apos;s
                where we focus.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight">
                Free quotes, no pressure
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                Real numbers after a short walkthrough — not a templated rate
                that changes when we arrive. If we&apos;re not a fit for the
                job, we&apos;ll tell you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the quote process works */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How it works"
            heading="Three steps to a real number."
            sub="No call-center intake, no waiting for a callback queue. Reach the team and get a walkthrough on the books."
          />
          <ol className="mt-8 space-y-5">
            {[
              {
                step: '01',
                title: 'Tell us about your space',
                body: `Send the form, call ${SITE.phone.display}, or email ${SITE.email.display}. Mention the space type, the city, and rough timing.`,
              },
              {
                step: '02',
                title: 'Short walkthrough',
                body:
                  'A quick conversation about the space — phone or on-site, whichever fits the job. No commitment, no pressure.',
              },
              {
                step: '03',
                title: 'Real quote, your call',
                body:
                  'You get a real number based on the actual scope. Book when it works for you, or don\'t. Either way, the walkthrough was free.',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-5 rounded-[14px] border border-border-subtle bg-brand-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-semibold tracking-tight text-brand-blue tabular-nums"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection items={faq} defaultOpenFirst />

      <CTASection
        heading="Ready to bring the small details to your space?"
        sub={`Free quotes for cleaning across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        tone="blue"
      />
    </>
  );
}
