export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  locations: '/locations',
  builders: '/builders',
  industries: '/industries',
  seasonal: '/seasonal',
  urgentCleaning: '/urgent-cleaning',
  cleaningSolutions: '/cleaning-solutions',
  communities: '/communities',
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

export type ServiceImage = { src: string; alt: string };

export const SERVICES: ReadonlyArray<{
  slug: ServiceSlug;
  name: string;
  href: string;
  shortDescription: string;
  image: ServiceImage;
}> = [
  {
    slug: 'commercial-office-cleaning',
    name: 'Commercial & Office Cleaning',
    href: '/services/commercial-office-cleaning',
    shortDescription: 'Routine and detail-led cleans for offices and commercial interiors.',
    image: {
      src: '/images/services/commercial-office-cleaning-las-vegas-nv-final-touch.webp',
      alt: 'Commercial office cleaning by Final Touch in Las Vegas, NV.',
    },
  },
  {
    slug: 'janitorial-services',
    name: 'Janitorial Services',
    href: '/services/janitorial-services',
    shortDescription: 'Scheduled cleaning programs for ongoing facility maintenance.',
    image: {
      src: '/images/services/janitorial-services-las-vegas-nv-final-touch.webp',
      alt: 'Janitorial services by Final Touch in Las Vegas, NV.',
    },
  },
  {
    slug: 'post-construction-cleanup',
    name: 'Post-Construction Cleanup',
    href: '/services/post-construction-cleanup',
    shortDescription: 'Final-touch detail cleans after new builds and renovations.',
    image: {
      src: '/images/services/post-construction-cleanup-las-vegas-nv-final-touch.webp',
      alt: 'Post-construction cleanup by Final Touch in Las Vegas, NV.',
    },
  },
  {
    slug: 'move-in-cleaning',
    name: 'Move-In Cleaning',
    href: '/services/move-in-cleaning',
    shortDescription: 'Top-to-bottom cleans before you settle into a new space.',
    image: {
      src: '/images/services/move-in-cleaning-las-vegas-nv-final-touch.webp',
      alt: 'Move-in cleaning by Final Touch in Las Vegas, NV.',
    },
  },
  {
    slug: 'move-out-cleaning',
    name: 'Move-Out Cleaning',
    href: '/services/move-out-cleaning',
    shortDescription: 'Deposit-ready cleans when you hand back the keys.',
    image: {
      src: '/images/services/move-out-cleaning-las-vegas-nv-final-touch.webp',
      alt: 'Move-out cleaning by Final Touch in Las Vegas, NV.',
    },
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    href: '/services/deep-cleaning',
    shortDescription: 'Periodic deep cleans for the corners standard service skips.',
    image: {
      src: '/images/services/deep-cleaning-baseboards-las-vegas-nv-final-touch.webp',
      alt: 'Deep cleaning of baseboards by Final Touch in Las Vegas, NV.',
    },
  },
  {
    slug: 'retail-space-cleaning',
    name: 'Retail Space Cleaning',
    href: '/services/retail-space-cleaning',
    shortDescription: 'Customer-ready cleans for storefronts and retail interiors.',
    image: {
      src: '/images/services/retail-space-cleaning-las-vegas-nv-final-touch.webp',
      alt: 'Retail space cleaning by Final Touch in Las Vegas, NV.',
    },
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
  image?: ServiceImage;
}> = [
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    href: '/locations/las-vegas',
    shortDescription: 'Cleaning services for homes and businesses across Las Vegas.',
    image: {
      src: '/images/locations/las-vegas-commercial-cleaning-location-card-image.webp',
      alt: 'Commercial cleaning services in Las Vegas, NV by Final Touch.',
    },
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    href: '/locations/henderson',
    shortDescription: 'Detail-focused cleaning across Henderson neighborhoods and corridors.',
    image: {
      src: '/images/locations/henderson-commercial-cleaning-location-card-image.webp',
      alt: 'Commercial cleaning services in Henderson, NV by Final Touch.',
    },
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    href: '/locations/north-las-vegas',
    shortDescription: 'Cleaning services for North Las Vegas residents and businesses.',
    image: {
      src: '/images/locations/north-las-vegas-commercial-cleaning-location-card-image.webp',
      alt: 'Commercial cleaning services in North Las Vegas, NV by Final Touch.',
    },
  },
  {
    slug: 'boulder-city',
    name: 'Boulder City',
    href: '/locations/boulder-city',
    shortDescription: 'Local cleaning for Boulder City homes and storefronts.',
    image: {
      src: '/images/locations/boulder-city-commercial-cleaning-location-card-image.webp',
      alt: 'Commercial cleaning in Boulder City, NV by Final Touch.',
    },
  },
  {
    slug: 'clark-county',
    name: 'Clark County',
    href: '/locations/clark-county',
    shortDescription: 'County-wide service for Clark County, Nevada. One team, one standard.',
    image: {
      src: '/images/locations/clark-county-commercial-cleaning-location-card-image.webp',
      alt: 'County-wide cleaning across Clark County, NV by Final Touch.',
    },
  },
] as const;

// Complete source of truth for all 20 §1a neighborhoods, grouped by parent city.
// Each leaf carries a `built` flag: true = the page exists and may render as a
// link; false = page not built yet (data present so the mapping is complete, but
// every clickable render of NEIGHBORHOODS MUST filter to built === true so unbuilt
// slugs never leak 404 links into nav, the hub, or city chips). Flipping a leaf to
// built: true auto-wires it everywhere. href = /locations/{parentCity}/{slug}.
// Two "aliante" leaves (Las Vegas + North Las Vegas) are distinct by parentCity/href.
export const NEIGHBORHOODS: ReadonlyArray<{
  citySlug: LocationSlug;
  cityName: string;
  neighborhoods: ReadonlyArray<{
    slug: string;
    name: string;
    parentCity: LocationSlug;
    built: boolean;
    href: string;
    shortDescription: string;
  }>;
}> = [
  {
    citySlug: 'las-vegas',
    cityName: 'Las Vegas',
    neighborhoods: [
      { slug: 'summerlin',          name: 'Summerlin',          parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/summerlin',          shortDescription: 'Master-planned community on the western edge of the Las Vegas Valley.' },
      { slug: 'southern-highlands', name: 'Southern Highlands', parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/southern-highlands', shortDescription: 'Master-planned golf community in the south Las Vegas Valley.' },
      { slug: 'downtown-las-vegas', name: 'Downtown Las Vegas', parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/downtown-las-vegas', shortDescription: 'The urban core and commercial heart of Las Vegas.' },
      { slug: 'spring-valley',      name: 'Spring Valley',      parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/spring-valley',      shortDescription: 'Established residential township on the west side of the Las Vegas Valley.' },
      { slug: 'centennial-hills',   name: 'Centennial Hills',   parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/centennial-hills',   shortDescription: 'Master-planned community in the northwest Las Vegas Valley.' },
      { slug: 'sunrise-manor',      name: 'Sunrise Manor',      parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/sunrise-manor',      shortDescription: 'Large residential township on the east side of the Las Vegas Valley.' },
      { slug: 'paradise-strip',     name: 'Paradise / Strip',   parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/paradise-strip',     shortDescription: 'Resort and commercial corridor along the Las Vegas Strip.' },
      { slug: 'arts-district',      name: 'Arts District',      parentCity: 'las-vegas', built: true,  href: '/locations/las-vegas/arts-district',      shortDescription: 'Walkable arts and commercial district near downtown Las Vegas.' },
      { slug: 'aliante',            name: 'Aliante',            parentCity: 'las-vegas', built: false, href: '/locations/las-vegas/aliante',            shortDescription: 'Master-planned community in the northern Las Vegas Valley.' },
    ],
  },
  {
    citySlug: 'henderson',
    cityName: 'Henderson',
    neighborhoods: [
      { slug: 'anthem',              name: 'Anthem',              parentCity: 'henderson', built: true,  href: '/locations/henderson/anthem',              shortDescription: 'Established master-planned community in the Henderson foothills.' },
      { slug: 'green-valley-ranch',  name: 'Green Valley Ranch',  parentCity: 'henderson', built: true,  href: '/locations/henderson/green-valley-ranch',  shortDescription: 'Established residential and commercial community in Henderson.' },
      { slug: 'seven-hills',         name: 'Seven Hills',         parentCity: 'henderson', built: true,  href: '/locations/henderson/seven-hills',         shortDescription: "Luxury hillside community in Henderson's eastern foothills." },
      { slug: 'macdonald-highlands', name: 'MacDonald Highlands', parentCity: 'henderson', built: true,  href: '/locations/henderson/macdonald-highlands', shortDescription: 'Guard-gated luxury hillside enclave in Henderson.' },
      { slug: 'inspirada',           name: 'Inspirada',           parentCity: 'henderson', built: true,  href: '/locations/henderson/inspirada',           shortDescription: 'Newer master-planned community in southern Henderson.' },
      { slug: 'cadence',             name: 'Cadence',             parentCity: 'henderson', built: true,  href: '/locations/henderson/cadence',             shortDescription: "Henderson's most actively developing master-planned community." },
      { slug: 'lake-las-vegas',      name: 'Lake Las Vegas',      parentCity: 'henderson', built: true,  href: '/locations/henderson/lake-las-vegas',      shortDescription: 'Resort-adjacent lakefront community in Henderson.' },
      { slug: 'green-valley',        name: 'Green Valley',        parentCity: 'henderson', built: true,  href: '/locations/henderson/green-valley',        shortDescription: 'Established master-planned area in central Henderson.' },
      { slug: 'tuscany-village',     name: 'Tuscany Village',     parentCity: 'henderson', built: true,  href: '/locations/henderson/tuscany-village',     shortDescription: 'Guard-gated residential community in eastern Henderson.' },
    ],
  },
  {
    citySlug: 'north-las-vegas',
    cityName: 'North Las Vegas',
    neighborhoods: [
      { slug: 'nellis-area',         name: 'Nellis Area',         parentCity: 'north-las-vegas', built: true,  href: '/locations/north-las-vegas/nellis-area', shortDescription: 'Residential area near Nellis Air Force Base in North Las Vegas.' },
      { slug: 'aliante',             name: 'Aliante',             parentCity: 'north-las-vegas', built: true,  href: '/locations/north-las-vegas/aliante',     shortDescription: 'Master-planned community in northern North Las Vegas.' },
    ],
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
  specialty: [
    { label: 'Seasonal Cleaning',        href: ROUTES.seasonal },
    { label: 'Emergency & Same-Day',     href: ROUTES.urgentCleaning },
    { label: 'Cleaning Solutions',       href: ROUTES.cleaningSolutions },
    { label: 'Active Adult Communities', href: ROUTES.communities },
  ],
  locations: LOCATIONS.map((l) => ({ label: l.name, href: l.href })),
  company: [
    { label: 'About',            href: ROUTES.about },
    { label: 'Our Team',         href: ROUTES.ourTeam },
    { label: 'Cleaning Process', href: ROUTES.cleaningProcess },
    { label: 'Builders',         href: ROUTES.builders },
    { label: 'Industries',       href: ROUTES.industries },
    { label: 'Reviews',          href: ROUTES.reviews },
    { label: 'Contact',          href: ROUTES.contact },
  ],
  legal: [
    { label: 'Privacy Policy',   href: ROUTES.privacyPolicy },
    { label: 'Terms of Service', href: ROUTES.termsOfService },
    { label: 'Accessibility',    href: ROUTES.accessibility },
    { label: 'Cookie Policy',    href: ROUTES.cookiePolicy },
    { label: 'Sitemap',          href: ROUTES.sitemap },
  ],
} as const;
