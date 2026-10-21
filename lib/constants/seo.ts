import { SITE } from './site';

const cities = SITE.serviceArea.cities;
const cityList = `${cities.slice(0, -1).join(', ')}, and ${cities[cities.length - 1]}`;

export const SEO_DEFAULTS = {
  siteUrl: SITE.url,
  siteName: SITE.name,
  titleTemplate: `%s | ${SITE.shortName}`,
  defaultTitle: `${SITE.name}: Cleaning Services in Las Vegas, ${SITE.serviceArea.stateAbbr}`,
  description: `${SITE.name} delivers detail-focused cleaning across the Las Vegas Valley, including ${cityList}. Family-owned by ${SITE.owners}. Free quotes. Call ${SITE.phone.display}.`,
  themeColor: '#1A5FB4',
  locale: 'en_US',
} as const;

// Default social image for Open Graph and Twitter. The relative url resolves
// through metadataBase in app/layout.tsx. Pages spread OG_DEFAULTS first inside
// their own openGraph block, because a page-level openGraph replaces the
// layout's entirely (including images).
export const OG_DEFAULT_IMAGE = {
  url: '/images/og/og-default-final-touch-cleaning-las-vegas.jpg',
  width: 1200,
  height: 630,
  alt: 'Final Touch Cleaning Company - Where small details bring BIG RESULTS',
  type: 'image/jpeg',
};

export const OG_DEFAULTS = {
  siteName: SEO_DEFAULTS.siteName,
  locale: SEO_DEFAULTS.locale,
  images: [OG_DEFAULT_IMAGE],
};
