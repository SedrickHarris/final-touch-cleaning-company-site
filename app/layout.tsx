import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/motion/MotionProvider';
import { SEO_DEFAULTS } from '@/lib/constants/seo';
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
      <body className="min-h-screen flex flex-col antialiased">
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
      </body>
    </html>
  );
}
