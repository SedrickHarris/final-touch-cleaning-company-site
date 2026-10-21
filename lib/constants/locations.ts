import {
  LOCATIONS,
  NEIGHBORHOODS,
  SERVICES,
  type LocationSlug,
  type ServiceSlug,
} from '@/lib/constants/routes';

// Card-ready view of LOCATIONS and NEIGHBORHOODS (routes.ts stays the source of truth
// for names, hrefs, and descriptions). Only the neighborhood hero image paths live
// here, because routes.ts does not carry them. Paths are copied from each page's
// own hero image under app/locations/<city>/<slug>/page.tsx, not built from slugs
// (Paradise / Strip uses paradise-las-vegas-strip-...).
//
// TODO (deferred batch, needs approved adjacency map): sibling-neighborhood adjacency.

export type LocationCardData = {
  slug: string;
  name: string;
  href: string;
  description: string;
  image: { src: string };
  label?: string;
  parentCity?: string;
  kind: 'city' | 'neighborhood';
};

// Keyed by neighborhood href, since "aliante" exists under two parent cities.
const NEIGHBORHOOD_HERO_IMAGES: Readonly<Record<string, string>> = {
  '/locations/las-vegas/summerlin': '/images/16x9/locations/summerlin-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/southern-highlands': '/images/16x9/locations/southern-highlands-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/downtown-las-vegas': '/images/16x9/locations/downtown-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/spring-valley': '/images/16x9/locations/spring-valley-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/centennial-hills': '/images/16x9/locations/centennial-hills-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/sunrise-manor': '/images/16x9/locations/sunrise-manor-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/paradise-strip': '/images/16x9/locations/paradise-las-vegas-strip-commercial-cleaning-hero-image.webp',
  '/locations/las-vegas/arts-district': '/images/16x9/locations/arts-district-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/henderson/anthem': '/images/16x9/locations/anthem-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/green-valley-ranch': '/images/16x9/locations/green-valley-ranch-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/seven-hills': '/images/16x9/locations/seven-hills-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/macdonald-highlands': '/images/16x9/locations/macdonald-highlands-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/inspirada': '/images/16x9/locations/inspirada-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/cadence': '/images/16x9/locations/cadence-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/lake-las-vegas': '/images/16x9/locations/lake-las-vegas-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/green-valley': '/images/16x9/locations/green-valley-henderson-commercial-cleaning-hero-image.webp',
  '/locations/henderson/tuscany-village': '/images/16x9/locations/tuscany-village-henderson-commercial-cleaning-hero-image.webp',
  '/locations/north-las-vegas/nellis-area': '/images/16x9/locations/nellis-area-north-las-vegas-commercial-cleaning-hero-image.webp',
  '/locations/north-las-vegas/aliante': '/images/16x9/locations/aliante-north-las-vegas-commercial-cleaning-hero-image.webp',
};

export const CITY_CARDS: ReadonlyArray<LocationCardData> = LOCATIONS.map((l) => {
  if (!l.image) throw new Error(`LOCATIONS entry "${l.slug}" has no card image`);
  return {
    slug: l.slug,
    name: l.name,
    href: l.href,
    description: l.shortDescription,
    image: { src: l.image.src },
    kind: 'city' as const,
  };
});

export const NEIGHBORHOOD_CARDS: ReadonlyArray<LocationCardData> = NEIGHBORHOODS.flatMap((city) =>
  city.neighborhoods
    .filter((n) => n.built)
    .map((n) => {
      const src = NEIGHBORHOOD_HERO_IMAGES[n.href];
      if (!src) throw new Error(`No hero image mapped for built neighborhood "${n.href}"`);
      return {
        slug: n.slug,
        name: n.name,
        href: n.href,
        description: n.shortDescription,
        image: { src },
        label: city.cityName,
        parentCity: n.parentCity,
        kind: 'neighborhood' as const,
      };
    }),
);

// Built neighborhoods for one city, in NEIGHBORHOODS order.
export function getNeighborhoodCards(citySlug: LocationSlug): LocationCardData[] {
  return NEIGHBORHOOD_CARDS.filter((c) => c.parentCity === citySlug);
}

// Every other city card, in LOCATIONS order (Clark County included).
export function getOtherCityCards(citySlug: LocationSlug): LocationCardData[] {
  return CITY_CARDS.filter((c) => c.slug !== citySlug);
}

// One shared hero photo per city, used by that city's 7 service pages at
// app/services/<service>/<city>/page.tsx. Per-page uniqueness comes from the
// headline, copy, and the alt text composed in getServiceCityHero.
const CITY_SERVICE_HERO: Readonly<Record<LocationSlug, string>> = {
  'las-vegas': '/images/16x9/service-areas/final-touch-las-vegas-nv-commercial-cleaning-service-hero-image.webp',
  'henderson': '/images/16x9/service-areas/final-touch-henderson-nv-commercial-cleaning-service-hero-image.webp',
  'north-las-vegas': '/images/16x9/service-areas/final-touch-north-las-vegas-nv-commercial-cleaning-service-hero-image.webp',
  'boulder-city': '/images/16x9/service-areas/final-touch-boulder-city-nv-commercial-cleaning-service-hero-image.webp',
  'clark-county': '/images/16x9/heroes/locations/clark-county-nv-commercial-cleaning-hero.webp',
};

// Hero image for a service + city page. Alt is "<Service name> in <City name>, NV".
export function getServiceCityHero(
  serviceSlug: ServiceSlug,
  citySlug: LocationSlug,
): { src: string; alt: string } {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!service) throw new Error(`Unknown service slug "${serviceSlug}"`);
  const city = LOCATIONS.find((l) => l.slug === citySlug);
  if (!city) throw new Error(`Unknown city slug "${citySlug}"`);
  const src = CITY_SERVICE_HERO[citySlug];
  if (!src) throw new Error(`No service hero image mapped for city "${citySlug}"`);
  return { src, alt: `${service.name} in ${city.name}, NV` };
}
