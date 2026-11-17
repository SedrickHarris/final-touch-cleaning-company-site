import Image from 'next/image';
import Link from 'next/link';
import ServiceImagePlaceholder from '@/components/shared/ServiceImagePlaceholder';
import { getCategory, postHref } from '@/lib/constants/blog';
import type { BlogPost } from '@/lib/content/blog/types';

type Props = {
  post: BlogPost;
  /** Two-column featured layout (image left, text right on lg). */
  featured?: boolean;
};

// Uses post.image when set; otherwise the placeholder. Owner-supplied images only.
export default function BlogCard({ post, featured = false }: Props) {
  const category = getCategory(post.categorySlug);
  const TitleTag = featured ? 'h2' : 'h3';

  return (
    <Link
      href={postHref(post.slug)}
      className={`group flex overflow-hidden rounded-[16px] border border-border-subtle bg-brand-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
        featured ? 'flex-col lg:grid lg:grid-cols-2' : 'h-full flex-col'
      }`}
    >
      {post.image ? (
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden border-b border-border-subtle bg-light-gray ${
            featured ? 'lg:aspect-auto lg:min-h-[320px] lg:border-b-0 lg:border-r' : ''
          }`}
        >
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className={featured ? 'lg:h-full' : ''}>
          <ServiceImagePlaceholder
            aspect="16/10"
            className={featured ? 'lg:h-full lg:aspect-auto lg:min-h-[320px] lg:border-b-0 lg:border-r' : ''}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-8 lg:p-10 lg:justify-center' : 'p-6'}`}>
        {category && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
            {category.name}
          </p>
        )}
        <TitleTag
          className={`mt-3 font-display font-semibold leading-snug tracking-tight text-brand-black ${
            featured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl'
          }`}
        >
          {post.title}
        </TitleTag>
        <p className="mt-3 text-base leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-5 inline-flex min-h-[44px] items-center font-semibold text-brand-blue">
          Read more
          <span
            aria-hidden="true"
            className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
