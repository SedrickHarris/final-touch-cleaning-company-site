import type { LucideIcon } from 'lucide-react';

type TrustItem = {
  label: string;
  sub?: string;
  icon?: LucideIcon;
};

type Props = {
  items: ReadonlyArray<TrustItem>;
};

// TrustBar accepts only props — no hardcoded claims. Callers must supply only
// verified, owner-confirmed items per docs/site-os/no-fake-data-policy.md
// (no review counts, ratings, license numbers, insurance details, awards,
// years-in-business, or pricing guarantees unless verified by the owner).
export default function TrustBar({ items }: Props) {
  if (items.length === 0) return null;
  return (
    <section
      aria-label="Trust signals"
      className="bg-brand-white border-y border-border-subtle"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
        <ul className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap sm:items-center lg:divide-x lg:divide-border-subtle gap-y-4 sm:gap-y-3 sm:gap-x-8 lg:gap-x-0">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-center gap-3 lg:px-5 first:lg:pl-0 last:lg:pr-0"
            >
              {it.icon && (
                <span className="shrink-0 text-brand-blue" aria-hidden="true">
                  <it.icon size={20} strokeWidth={1.75} />
                </span>
              )}
              <div>
                <span className="font-display text-sm font-semibold text-brand-black tracking-tight leading-tight">
                  {it.label}
                </span>
                {it.sub && (
                  <span className="block text-xs text-muted mt-0.5 leading-snug">
                    {it.sub}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
