import { SITE } from './site';
import { LOCATIONS, SERVICES } from './routes';

// Shared structured-data building blocks. The single LocalBusiness node lives
// in app/layout.tsx; every other node references it by @id.

export const LOCAL_BUSINESS_ID = `${SITE.url}/#localbusiness`;

// Owner-confirmed: Scott and Nicole Maland only. No other team members.
export const FOUNDERS = [
  { '@type': 'Person', name: 'Scott Maland' },
  { '@type': 'Person', name: 'Nicole Maland' },
] as const;

// Derived from SERVICES so the schema cannot drift from the service pages.
// Residential and restricted scopes (bio-hazard, restaurant kitchens) are
// intentionally absent.
export const SERVICE_TYPES = SERVICES.map((s) => s.name);

export const CITY_WIKIDATA: Record<(typeof SITE.serviceArea.cities)[number], string> = {
  'Las Vegas': 'https://www.wikidata.org/wiki/Q23768',
  Henderson: 'https://www.wikidata.org/wiki/Q491447',
  'North Las Vegas': 'https://www.wikidata.org/wiki/Q975168',
  'Boulder City': 'https://www.wikidata.org/wiki/Q793761',
};

export const CITY_AREA_SERVED = SITE.serviceArea.cities.map((name) => ({
  '@type': 'City',
  name,
  sameAs: CITY_WIKIDATA[name],
}));

// Light city-scoped node for city-tier location pages. References the global
// LocalBusiness instead of redefining it, so there is one business entity.
export function cityServiceSchema(place: (typeof SITE.serviceArea.cities)[number] | 'Clark County') {
  const location = LOCATIONS.find((l) => l.name === place);
  const areaServed =
    place === 'Clark County'
      ? [
          { '@type': 'AdministrativeArea', name: `Clark County, ${SITE.serviceArea.state}` },
          ...CITY_AREA_SERVED,
        ]
      : [
          { '@type': 'City', name: place, sameAs: CITY_WIKIDATA[place] },
          { '@type': 'AdministrativeArea', name: `Clark County, ${SITE.serviceArea.state}` },
        ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Commercial Cleaning in ${place}, ${SITE.serviceArea.stateAbbr}`,
    serviceType: 'Commercial Cleaning',
    ...(location ? { url: `${SITE.url}${location.href}` } : {}),
    provider: { '@id': LOCAL_BUSINESS_ID },
    areaServed,
  };
}
