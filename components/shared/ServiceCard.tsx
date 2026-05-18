import Image from 'next/image';
import Link from 'next/link';
import ServiceImagePlaceholder from './ServiceImagePlaceholder';

type ServiceImage = { src: string; alt: string };

type Props = {
  href: string;
  name: string;
  description: string;
  /** Real photo for the card top. When omitted, falls back to ServiceImagePlaceholder. */
  image?: ServiceImage;
};

// Reusable service card. Composes the image (or placeholder) + body + CTA.
// Used by ServicesPreview, service detail "related services" sections, and
// per-city service grids on location pages.
//
// Per docs/site-os/service-card-image-placeholder-standard.md:
// - Image at the top, consistent 16/10 aspect across a grid
// - Service title (H3)
// - Short description (1–2 sentences)
// - CTA link with arrow affordance
// - Full card is a Link — tap target is the full card height
// - Hover lift + shadow + accent border + arrow translate (CSS, reduced-motion safe)
export default function ServiceCard({ href, name, description, image }: Props) {
  return (
    <Link
      href={href}
      className="
        group block h-full overflow-hidden
        rounded-[14px] border border-border-subtle bg-brand-white
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,26,26,0.08)]
        hover:border-brand-blue/30
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2
      "
    >
      {image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border-subtle bg-light-gray">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <ServiceImagePlaceholder />
      )}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight group-hover:text-brand-blue transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
          View details
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
