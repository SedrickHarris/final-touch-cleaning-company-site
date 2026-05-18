'use client';

import { SITE } from '@/lib/constants/site';

// TODO-BATCH-2: Wire to live form endpoint (vendor TBD — likely GoHighLevel).
// Until then, all inputs render disabled and submit is intercepted. No data
// leaves the page. Visitors are directed to phone/email as the live channel.
// See docs/site-os/no-fake-data-policy.md §9 (no live integrations without
// explicit owner approval and a verified data path).
//
// Width is controlled by the parent — typically a grid track in HeroSection /
// CTASection's split layout. The form is always `w-full` so it fills its
// container; the parent caps it (e.g. `lg:max-w-xl`).
export default function QuoteFormPlaceholder() {
  return (
    <form
      noValidate
      onSubmit={(e) => e.preventDefault()}
      aria-label="Free cleaning quote — placeholder form"
      className="w-full bg-brand-white rounded-[14px] border border-border-subtle shadow-[0_8px_28px_rgba(26,26,26,0.06)] p-6 sm:p-8"
    >
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-soft-blue text-brand-blue px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
          Free quote
        </span>
        <h3 className="mt-3 font-display text-2xl sm:text-[26px] font-semibold text-brand-black tracking-tight">
          Get your free quote
        </h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          Tell us about your space and we&apos;ll follow up with a quote.{' '}
          <span className="block sm:inline">
            Prefer to talk? Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold tabular-nums hover:underline"
            >
              {SITE.phone.display}
            </a>
            .
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" placeholder="Your name" />
        <Field label="Phone" name="phone" type="tel" placeholder="(702) 555-0000" />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="sm:col-span-2"
        />
        <Field
          label="City"
          name="city"
          placeholder="Las Vegas / Henderson / North Las Vegas / Boulder City"
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="qf-details"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          What do you need cleaned?
        </label>
        <textarea
          id="qf-details"
          name="details"
          rows={4}
          placeholder="Square footage, type of space, timing, anything we should know."
          disabled
          aria-disabled="true"
          className="w-full rounded-[10px] border border-border-subtle bg-brand-white px-3.5 py-3 text-base text-brand-black placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 disabled:bg-light-gray disabled:cursor-not-allowed"
        />
      </div>

      <p className="mt-4 text-xs text-muted">
        Form not yet active. We&apos;ll wire this to our scheduling system shortly — until then, please call or email.
      </p>

      <button
        type="submit"
        disabled
        aria-disabled="true"
        title="Form is not yet active — please call or email"
        className="mt-5 inline-flex w-full sm:w-auto items-center justify-center rounded-[10px] bg-brand-blue px-6 py-4 text-base font-semibold text-brand-white opacity-70 cursor-not-allowed min-h-[48px]"
      >
        Request quote
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  const id = `qf-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-black mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled
        aria-disabled="true"
        className="w-full rounded-[10px] border border-border-subtle bg-brand-white px-3.5 py-3 text-base text-brand-black placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 disabled:bg-light-gray disabled:cursor-not-allowed min-h-[44px]"
      />
    </div>
  );
}
