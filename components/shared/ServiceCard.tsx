import Link from 'next/link';
import ServiceImagePlaceholder from './ServiceImagePlaceholder';

type Props = {
  href: string;
  name: string;
  description: string;
};

// Reusable service card. Composes the image placeholder + body + CTA.
// Used by ServicesPreview today; future services hub, related-service
// sections, location pages, and service + city matrix pages should reuse
// this component (or a thin variant of it).
//
// Per docs/site-os/service-card-image-placeholder-standard.md:
// - Image placeholder at the top
// - Service title (H3)
// - Short description (1–2 sentences)
// - CTA link with arrow affordance
// - Full card is a Link — tap target is the full card height
// - Hover lift + shadow + accent border + arrow translate (CSS, reduced-motion safe)
export default function ServiceCard({ href, name, description }: Props) {
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
      <ServiceImagePlaceholder />
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
