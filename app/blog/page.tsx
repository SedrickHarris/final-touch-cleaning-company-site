import type { Metadata } from 'next';
import Breadcrumb from '@/components/shared/Breadcrumb';
import CTASection from '@/components/shared/CTASection';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryChips from '@/components/blog/BlogCategoryChips';
import BlogHero from '@/components/blog/BlogHero';
import { getFeaturedPost, getPublishedPosts } from '@/lib/constants/blog';
import { OG_DEFAULTS } from '@/lib/constants/seo';
import { ROUTES } from '@/lib/constants/routes';
import { CTAS, SITE } from '@/lib/constants/site';

const TITLE = 'Cleaning Blog for Contractors and Property Managers';
const DESCRIPTION =
  'Practical cleaning advice for contractors, property managers, and business owners across Southern Nevada, from post-construction cleanup to commercial care.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    ...OG_DEFAULTS,
    title: `${TITLE} | Final Touch`,
    description: DESCRIPTION,
    type: 'website',
    url: `${SITE.url}/blog`,
  },
};

export default function BlogHubPage() {
  const featured = getFeaturedPost();
  const rest = getPublishedPosts().filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <BlogHero
        eyebrow="The Final Touch Blog"
        heading="Commercial Cleaning Guides from the Final Touch Cleaning Team"
        emphasis="Final Touch Cleaning Team"
        sub="Practical advice for contractors, property managers, and business owners across Southern Nevada, written from hands-on cleaning work."
      >
        <BlogCategoryChips />
      </BlogHero>

      {featured && (
        <section className="bg-brand-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <BlogCard post={featured} featured />
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="bg-light-gray">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
              Latest guides
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Planning a cleaning project in Southern Nevada?"
        sub="Tell us about your space and we will walk through the scope with you."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
