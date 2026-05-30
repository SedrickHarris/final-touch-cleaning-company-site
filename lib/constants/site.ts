export const SITE = {
  name: 'Final Touch Cleaning Company',
  shortName: 'Final Touch',
  url: 'https://www.finaltouchcleaningteam.com',
  owners: 'Scott & Nicole Maland',
  coreMessage: 'Where small details bring BIG RESULTS.',
  phone: {
    display: '(702) 444-5077',
    href: 'tel:+17024445077',
  },
  email: {
    display: 'info@finaltouchcleaningteam.com',
    href: 'mailto:info@finaltouchcleaningteam.com',
  },
  serviceArea: {
    county: 'Clark County',
    metro: 'the Las Vegas Valley',
    state: 'Nevada',
    stateAbbr: 'NV',
    cities: ['Las Vegas', 'Henderson', 'North Las Vegas', 'Boulder City'] as const,
  },
  analytics: {
    gtmId: 'GTM-5TXTMJDF',
    ga4MeasurementId: 'G-4KW12S96W7',
  },
} as const;

export const CTAS = {
  primary: 'Request a Free Quote',
  call: 'Call Now',
  estimate: 'Get My Cleaning Estimate',
  schedule: 'Schedule Cleaning',
  services: 'View Services',
} as const;
