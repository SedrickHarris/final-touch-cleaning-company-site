export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  locations: '/locations',
  reviews: '/reviews',
  gallery: '/gallery',
  pricing: '/pricing',
  faq: '/faq',
  contact: '/contact',
  freeQuote: '/free-quote',
  ourTeam: '/our-team',
  cleaningProcess: '/cleaning-process',
  certifications: '/certifications',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
  accessibility: '/accessibility-statement',
  cookiePolicy: '/cookie-policy',
  sitemap: '/sitemap',
  thankYou: '/thank-you',
} as const;

export type ServiceSlug =
  | 'commercial-office-cleaning'
  | 'janitorial-services'
  | 'post-construction-cleanup'
  | 'move-in-cleaning'
  | 'move-out-cleaning'
  | 'deep-cleaning'
  | 'retail-space-cleaning';

export const SERVICES: ReadonlyArray<{
  slug: ServiceSlug;
  name: string;
  href: string;
  shortDescription: string;
}> = [
  {
    slug: 'commercial-office-cleaning',
    name: 'Commercial & Office Cleaning',
    href: '/services/commercial-office-cleaning',
    shortDescription: 'Routine and detail-led cleans for offices and commercial interiors.',
  },
  {
    slug: 'janitorial-services',
    name: 'Janitorial Services',
    href: '/services/janitorial-services',
    shortDescription: 'Scheduled cleaning programs for ongoing facility maintenance.',
  },
  {
    slug: 'post-construction-cleanup',
    name: 'Post-Construction Cleanup',
    href: '/services/post-construction-cleanup',
    shortDescription: 'Final-touch detail cleans after new builds and renovations.',
  },
  {
    slug: 'move-in-cleaning',
    name: 'Move-In Cleaning',
    href: '/services/move-in-cleaning',
    shortDescription: 'Top-to-bottom cleans before you settle into a new space.',
  },
  {
    slug: 'move-out-cleaning',
    name: 'Move-Out Cleaning',
    href: '/services/move-out-cleaning',
    shortDescription: 'Deposit-ready cleans when you hand back the keys.',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    href: '/services/deep-cleaning',
    shortDescription: 'Periodic deep cleans for the corners standard service skips.',
  },
  {
    slug: 'retail-space-cleaning',
    name: 'Retail Space Cleaning',
    href: '/services/retail-space-cleaning',
    shortDescription: 'Customer-ready cleans for storefronts and retail interiors.',
  },
] as const;

export type LocationSlug =
  | 'las-vegas'
  | 'henderson'
  | 'north-las-vegas'
  | 'boulder-city'
  | 'clark-county';

export const LOCATIONS: ReadonlyArray<{
  slug: LocationSlug;
  name: string;
  href: string;
  shortDescription: string;
}> = [
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    href: '/locations/las-vegas',
    shortDescription: 'Cleaning services for homes and businesses across Las Vegas.',
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    href: '/locations/henderson',
    shortDescription: 'Detail-focused cleaning across Henderson neighborhoods and corridors.',
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    href: '/locations/north-las-vegas',
    shortDescription: 'Cleaning services for North Las Vegas residents and businesses.',
  },
  {
    slug: 'boulder-city',
    name: 'Boulder City',
    href: '/locations/boulder-city',
    shortDescription: 'Local cleaning for Boulder City homes and storefronts.',
  },
  {
    slug: 'clark-county',
    name: 'Clark County',
    href: '/locations/clark-county',
    shortDescription: 'County-wide service for Clark County, Nevada — one team, one standard.',
  },
] as const;

export const PRIMARY_NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Services',  href: ROUTES.services },
  { label: 'Locations', href: ROUTES.locations },
  { label: 'About',     href: ROUTES.about },
  { label: 'Reviews',   href: ROUTES.reviews },
  { label: 'Contact',   href: ROUTES.contact },
];

export const FOOTER_NAV = {
  services: SERVICES.map((s) => ({ label: s.name, href: s.href })),
  company: [
    { label: 'About',            href: ROUTES.about },
    { label: 'Our Team',         href: ROUTES.ourTeam },
    { label: 'Cleaning Process', href: ROUTES.cleaningProcess },
    { label: 'Reviews',          href: ROUTES.reviews },
    { label: 'Gallery',          href: ROUTES.gallery },
    { label: 'Contact',          href: ROUTES.contact },
  ],
  legal: [
    { label: 'Privacy Policy',    href: ROUTES.privacyPolicy },
    { label: 'Terms of Service',  href: ROUTES.termsOfService },
    { label: 'Accessibility',     href: ROUTES.accessibility },
    { label: 'Cookie Policy',     href: ROUTES.cookiePolicy },
    { label: 'Sitemap',           href: ROUTES.sitemap },
  ],
} as const;
