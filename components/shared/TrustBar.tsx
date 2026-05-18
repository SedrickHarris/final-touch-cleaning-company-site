type TrustItem = { label: string; sub?: string };

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 lg:py-9">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 lg:gap-x-0 lg:divide-x lg:divide-border-subtle">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex flex-col sm:items-center sm:text-center lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="font-display text-base lg:text-[17px] font-semibold text-brand-black tracking-tight">
                {it.label}
              </span>
              {it.sub && (
                <span className="text-sm text-muted mt-1 leading-snug">
                  {it.sub}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
