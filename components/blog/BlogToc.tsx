import type { BlogBlock } from '@/lib/content/blog/types';

export default function BlogToc({ blocks }: { blocks: ReadonlyArray<BlogBlock> }) {
  const items = blocks.flatMap((b) => (b.type === 'h2' ? [{ id: b.id, text: b.text }] : []));
  if (items.length === 0) return null;
  return (
    <nav aria-labelledby="toc-heading" className="rounded-[16px] border border-border-subtle bg-brand-white p-5">
      <h2 id="toc-heading" className="font-display text-lg font-semibold text-brand-black">
        On this page
      </h2>
      <ol className="mt-3">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="flex min-h-[44px] items-center text-sm font-medium leading-snug text-muted hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {it.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
