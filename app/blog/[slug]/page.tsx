import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/shared/Breadcrumb';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import BlogArticleBody from '@/components/blog/BlogArticleBody';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryChips from '@/components/blog/BlogCategoryChips';
import BlogHero from '@/components/blog/BlogHero';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogSidebar from '@/components/blog/BlogSidebar';
import {
  BLOG_BASE,
  categoryHref,
  getCategory,
  getPostBySlug,
  getPostsByCategory,
  getPublishedCategories,
  getRelatedPosts,
  postHref,
} from '@/lib/constants/blog';
import { OG_DEFAULTS } from '@/lib/constants/seo';
import { ROUTES } from '@/lib/constants/routes';
import { CTAS, SITE } from '@/lib/constants/site';
import { posts } from '@/lib/content/blog/posts';
import { renderInline } from '@/lib/content/blog/render';

// One dynamic segment resolves to either a published post or a published
// category (same URL depth). The collision guard lives in lib/constants/blog.ts
// and throws at build time if a post slug equals a category slug.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...getPublishedCategories().map((c) => ({ slug: c.slug })),
    ...posts.map((p) => ({ slug: p.slug })),
  ];
}

type Props = { params: Promise<{ slug: string }> };

const isPublishedCategory = (slug: string) =>
  getPublishedCategories().some((c) => c.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (post) {
    return {
      title: post.metaTitle,
      description: post.metaDescription,
      alternates: { canonical: postHref(post.slug) },
      openGraph: {
        ...OG_DEFAULTS,
        title: `${post.metaTitle} | ${SITE.shortName}`,
        description: post.metaDescription,
        type: 'article',
        url: `${SITE.url}${postHref(post.slug)}`,
        ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      },
    };
  }
  const category = isPublishedCategory(slug) ? getCategory(slug) : undefined;
  if (!category) return {};
  const title = `${category.name} Guides`;
  return {
    title,
    description: category.description,
    alternates: { canonical: categoryHref(category.slug) },
    openGraph: {
      ...OG_DEFAULTS,
      title: `${title} | ${SITE.shortName}`,
      description: category.description,
      type: 'website',
      url: `${SITE.url}${categoryHref(category.slug)}`,
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (post) return <PostView slug={post.slug} />;

  const category = isPublishedCategory(slug) ? getCategory(slug) : undefined;
  if (category) {
    const categoryPosts = getPostsByCategory(category.slug);
    return (
      <>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: BLOG_BASE },
            { label: category.name },
          ]}
        />
        <BlogHero
          eyebrow="The Final Touch Blog"
          heading={`${category.name} Guides`}
          sub={category.description}
        >
          <BlogCategoryChips activeSlug={category.slug} />
        </BlogHero>
        <section className="bg-brand-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
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

  notFound();
}

function PostView({ slug }: { slug: string }) {
  const post = getPostBySlug(slug)!;
  const category = getCategory(post.categorySlug)!;
  const faq = post.blocks.find((b) => b.type === 'faq');
  const related = getRelatedPosts(post);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${postHref(post.slug)}` },
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
  };

  const faqJsonLd = faq && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: BLOG_BASE },
          { label: category.name, href: categoryHref(category.slug) },
          { label: post.title },
        ]}
      />
      <BlogPostHeader post={post} />

      <section className="bg-brand-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,760px)_340px] lg:justify-between lg:gap-12 lg:px-8">
          <article className="min-w-0 max-w-[760px]">
            <BlogArticleBody blocks={post.blocks} />
          </article>
          <div>
            <BlogSidebar post={post} />
          </div>
        </div>
      </section>

      {faq && faq.type === 'faq' && (
        <>
          <FAQSection heading={faq.heading} items={faq.items} />
          {faq.footer && (
            <div className="border-t border-border-subtle bg-brand-white">
              <div className="mx-auto max-w-3xl px-4 py-6 text-center text-sm text-muted sm:px-6 lg:px-8">
                {renderInline(faq.footer)}
              </div>
            </div>
          )}
        </>
      )}

      {related.length > 0 && (
        <section className="bg-light-gray">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
              More post-construction guides
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Talk to us about your project"
        sub="We will walk your project and define a scope that fits your handover schedule."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
