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
