import { renderInline } from '@/lib/content/blog/render';
import type { BlogBlock } from '@/lib/content/blog/types';
import BlogInlineCta from './BlogInlineCta';

type Props = { blocks: ReadonlyArray<BlogBlock> };

// Renders every block except `faq`, which the page renders through FAQSection.
export default function BlogArticleBody({ blocks }: Props) {
  const leadIndex = blocks.findIndex((b) => b.type === 'p');
  return (
    <div className="text-lg leading-relaxed text-brand-black">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2
                key={i}
                id={b.id}
                className="mt-14 scroll-mt-24 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              >
                {b.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                className="mt-9 scroll-mt-24 font-display text-2xl font-semibold leading-snug tracking-tight"
              >
                {b.text}
              </h3>
            );
          case 'p': {
            const lead = i === leadIndex;
            return (
              <p key={i} className={`mt-5 ${lead ? 'mt-0 text-xl sm:text-[1.375rem]' : ''}`}>
                {renderInline(b.text)}
              </p>
            );
          }
          case 'ul':
            return (
              <ul key={i} className="mt-5 list-disc space-y-2 pl-6 marker:text-brand-blue">
                {b.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case 'cta':
            return <BlogInlineCta key={i} />;
          case 'faq':
            return null;
        }
      })}
    </div>
  );
}
