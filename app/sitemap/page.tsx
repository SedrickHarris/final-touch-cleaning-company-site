import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES, LOCATIONS, NEIGHBORHOODS } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Sitemap',
  description:
    'Full sitemap for Final Touch Cleaning Company. Browse all pages including services, locations, and neighborhood pages across Las Vegas, Henderson, and the Las Vegas Valley.',
  alternates: { canonical: '/sitemap' },
  // Utility page. No search value of its own; exclude from indexing but let
  // crawlers follow the links to the real pages.
  robots: { index: false, follow: true },
};

type SitemapLink = { label: string; href: string };

const mainPages: SitemapLink[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About', href: ROUTES.about },
  { label: 'Services', href: ROUTES.services },
  { label: 'Locations', href: ROUTES.locations },
  { label: 'FAQ', href: ROUTES.faq },
  { label: 'Contact', href: ROUTES.contact },
  { label: 'Free Quote', href: ROUTES.freeQuote },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'Reviews', href: ROUTES.reviews },
  { label: 'Our Team', href: ROUTES.ourTeam },
  { label: 'Cleaning Process', href: ROUTES.cleaningProcess },
  // Note: /gallery is not yet built (content-gated). Omitted intentionally.
];

const servicePages: SitemapLink[] = SERVICES.map((s) => ({
  label: s.name,
  href: s.href,
}));

const locationPages: SitemapLink[] = LOCATIONS.map((l) => ({
  label: l.name,
  href: l.href,
}));

// Neighborhood pages: every built leaf, grouped by parent city. Filtering on
// built === true keeps unbuilt slugs (e.g. Las Vegas / Aliante) out of the list.
const neighborhoodGroups = NEIGHBORHOODS.map((group) => ({
  cityName: group.cityName,
  items: group.neighborhoods
    .filter((n) => n.built)
    .map((n) => ({ label: n.name, href: n.href })),
})).filter((group) => group.items.length > 0);

// Service + city matrix: every service across every city (7 x 5 = 35).
const serviceCityPages: SitemapLink[] = SERVICES.flatMap((s) =>
  LOCATIONS.map((l) => ({
    label: `${s.name} in ${l.name}`,
    href: `${s.href}/${l.slug}`,
  })),
);

const legalPages: SitemapLink[] = [
  { label: 'Privacy Policy', href: ROUTES.privacyPolicy },
  { label: 'Terms of Service', href: ROUTES.termsOfService },
  { label: 'Accessibility Statement', href: ROUTES.accessibility },
  { label: 'Cookie Policy', href: ROUTES.cookiePolicy },
];

function LinkList({ links }: { links: SitemapLink[] }) {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-brand-blue hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border-subtle pt-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-brand-black">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <header>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-brand-black">
          Sitemap
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
          Every page on the {SITE.name} site, organized by section. Browse
          services, service areas, and neighborhood pages across{' '}
          {SITE.serviceArea.county}, {SITE.serviceArea.stateAbbr}.
        </p>
      </header>

      <div className="mt-10 space-y-10">
        <Section heading="Main Pages">
          <LinkList links={mainPages} />
        </Section>

        <Section heading="Service Pages">
          <LinkList links={servicePages} />
        </Section>

        <Section heading="Location Pages">
          <LinkList links={locationPages} />
        </Section>

        <Section heading="Neighborhood Pages">
          <div className="mt-4 space-y-6">
            {neighborhoodGroups.map((group) => (
              <div key={group.cityName}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted font-body">
                  {group.cityName}
                </h3>
                <LinkList links={group.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section heading="Service + City Pages">
          <LinkList links={serviceCityPages} />
        </Section>

        <Section heading="Legal & Utility">
          <LinkList links={legalPages} />
        </Section>
      </div>
    </div>
  );
}
