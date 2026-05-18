type Aspect = '16/10' | '4/3' | '3/2';

type Props = {
  aspect?: Aspect;
  className?: string;
};

// Decorative image placeholder for service cards. Ships clean and brand-aligned
// so cards never look broken or empty. Replace with an owner-supplied real
// image (via next/image, same aspect ratio + object-cover) when one is
// approved. Never use stock photography, AI-generated photography, or
// auto-pulled Google Places / GBP imagery per docs/site-os/no-fake-data-policy.md.
//
// Per docs/site-os/service-card-image-placeholder-standard.md:
// - aria-hidden when decorative (default — no real image)
// - no embedded text in the image area
// - consistent aspect ratio across a single grid
export default function ServiceImagePlaceholder({
  aspect = '16/10',
  className = '',
}: Props) {
  const aspectClass =
    aspect === '4/3' ? 'aspect-[4/3]' :
    aspect === '3/2' ? 'aspect-[3/2]' :
    'aspect-[16/10]';

  return (
    <div
      aria-hidden="true"
      className={`relative ${aspectClass} w-full overflow-hidden bg-[radial-gradient(120%_80%_at_30%_20%,var(--color-soft-blue),var(--color-light-gray))] border-b border-border-subtle ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-blue/15">
          <div className="h-4 w-4 rounded-full bg-brand-blue/20" />
        </div>
      </div>
      {/* TODO-BATCH-2+: Replace with an owner-supplied photo of the relevant
          service. Use next/image, maintain this aspect ratio, and apply
          object-cover. Do not auto-pull from Google Places / GBP / stock
          libraries per docs/site-os/no-fake-data-policy.md §8–§9. */}
    </div>
  );
}
