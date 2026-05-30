import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Fraunces, Manrope } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/motion/MotionProvider';
import { SEO_DEFAULTS } from '@/lib/constants/seo';
import { SITE } from '@/lib/constants/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const OG_IMAGE = '/images/heroes/final-touch-cleaning-services-las-vegas-hero.webp';

// Global LocalBusiness JSON-LD — single site-wide node per
// docs/site-os/build-status-reconciliation.md §5. Service-area business:
// NO streetAddress, NO aggregateRating, NO review (self-serving). 24-hour
// hours framed as around-the-clock scheduling availability. Owner-confirmed
// data only. Per-page LocalBusiness nodes on city pages stay (city-scoped
// areaServed variant); the homepage node was removed to avoid duplication.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Final Touch Cleaning Company LLC',
  url: `${SITE.url}/`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: `${SITE.url}/images/logo/final-touch-cleaning-company-logo.webp`,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Clark County, NV' },
    { '@type': 'City', name: 'North Las Vegas' },
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'City', name: 'Henderson' },
    { '@type': 'City', name: 'Boulder City' },
  ],
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DEFAULTS.siteUrl),
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.description,
    url: SEO_DEFAULTS.siteUrl,
    siteName: SEO_DEFAULTS.siteName,
    locale: SEO_DEFAULTS.locale,
    type: 'website',
    images: [{ url: OG_IMAGE, alt: SEO_DEFAULTS.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.description,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      {
        url: '/images/favicons/final-touch-blue-sparkle-navy-icon-favicon.webp',
        type: 'image/webp',
      },
    ],
    apple: '/images/favicons/final-touch-blue-sparkle-navy-icon-favicon.webp',
  },
};

export const viewport: Viewport = {
  themeColor: SEO_DEFAULTS.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        {/* Google Tag Manager — canonical container snippet, loaded in <head>
            so the dataLayer is available before page interaction. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE.analytics.gtmId}');`,
          }}
        />
        {/* Microsoft Clarity — afterInteractive so it loads after hydration
            and never blocks first paint. Project ID from SITE.analytics. */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${SITE.analytics.clarityProjectId}");
    `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google Tag Manager (noscript) — must be immediately after <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE.analytics.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        {/* GoHighLevel / LeadConnector chat widget. lazyOnload per next/script
            guidance for chat support plugins: loads during browser idle so it
            never competes with page content. */}
        <Script
          id="leadconnector-chat-widget"
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a1a6ff79f5b0cd19a9e268f"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
