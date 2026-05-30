'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '@/lib/constants/site';

// GoHighLevel / LeadConnector inbound webhook. On submit the form payload is
// POSTed here as JSON; the field keys in FormState below are the mapping GHL
// receives. Confirmed by owner (2026-05-29).
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/QcISONQzEqshCjk0dAxF/webhook-trigger/f4gfXNK5XDbBRsh0cGLy';

const SERVICES = [
  'Commercial Office Cleaning',
  'Janitorial Services',
  'Post-Construction Cleanup',
  'Move-In Cleaning',
  'Move-Out Cleaning',
  'Deep Cleaning',
  'Retail Space Cleaning',
  'Other',
] as const;

const PROPERTY_TYPES = ['Residential', 'Commercial', 'Other'] as const;

const FREQUENCIES = [
  'One-time',
  'Daily',
  'Weekly',
  'Bi-weekly',
  'Monthly',
  'Other',
] as const;

const TIMELINES = [
  'ASAP',
  'Within a week',
  'Within a month',
  'Flexible',
  'Other',
] as const;

const CONTACT_METHODS = ['Phone', 'Email', 'Text'] as const;

type FormState = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  city: string;
  service_requested: string;
  property_type: string;
  cleaning_frequency: string;
  timeline: string;
  details: string;
  preferred_contact_method: string;
};

const EMPTY: FormState = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  city: '',
  service_requested: '',
  property_type: '',
  cleaning_frequency: '',
  timeline: '',
  details: '',
  preferred_contact_method: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.first_name.trim()) errors.first_name = 'First name is required.';
  if (!data.last_name.trim()) errors.last_name = 'Last name is required.';
  if (!data.phone.trim()) errors.phone = 'Phone number is required.';
  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  return errors;
}

export default function QuoteFormPlaceholder() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstError = document.querySelector('[data-field-error]');
      if (firstError) (firstError as HTMLElement).focus();
      return;
    }
    setSubmitting(true);
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
    } catch {
      // A network/CORS failure must not trap the visitor: fall through to the
      // /thank-you redirect regardless so the submit flow always completes.
    }
    router.push('/thank-you');
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Free cleaning quote request form"
      className="w-full bg-brand-white rounded-[14px] border border-border-subtle shadow-[0_8px_28px_rgba(26,26,26,0.06)] p-6 sm:p-8"
    >
      {/* Header */}
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-soft-blue text-brand-blue px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
          Free quote
        </span>
        <h3 className="mt-3 font-display text-2xl sm:text-[26px] font-semibold text-brand-black tracking-tight">
          Get your free quote
        </h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          Tell us about your space and we&apos;ll follow up to schedule a
          walkthrough.{' '}
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

      {/* Fields */}
      <div className="space-y-4">

        {/* Row 1: First + Last */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="First Name"
            name="first_name"
            placeholder="Jane"
            required
            value={form.first_name}
            error={errors.first_name}
            onChange={(v) => update('first_name', v)}
          />
          <TextField
            label="Last Name"
            name="last_name"
            placeholder="Smith"
            required
            value={form.last_name}
            error={errors.last_name}
            onChange={(v) => update('last_name', v)}
          />
        </div>

        {/* Row 2: Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            placeholder="(702) 555-0000"
            required
            value={form.phone}
            error={errors.phone}
            onChange={(v) => update('phone', v)}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
            value={form.email}
            error={errors.email}
            onChange={(v) => update('email', v)}
          />
        </div>

        {/* Row 3: City + Service Requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextField
            label="City"
            name="city"
            placeholder="Las Vegas, Henderson, North Las Vegas..."
            value={form.city}
            onChange={(v) => update('city', v)}
          />
          <SelectField
            label="Service Requested"
            name="service_requested"
            placeholder="Select a service"
            options={SERVICES}
            value={form.service_requested}
            onChange={(v) => update('service_requested', v)}
          />
        </div>

        {/* Property Type */}
        <RadioGroup
          label="Property Type"
          name="property_type"
          options={PROPERTY_TYPES}
          value={form.property_type}
          onChange={(v) => update('property_type', v)}
        />

        {/* Row 4: Frequency + Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField
            label="Cleaning Frequency"
            name="cleaning_frequency"
            placeholder="Select frequency"
            options={FREQUENCIES}
            value={form.cleaning_frequency}
            onChange={(v) => update('cleaning_frequency', v)}
          />
          <SelectField
            label="Timeline"
            name="timeline"
            placeholder="Select timeline"
            options={TIMELINES}
            value={form.timeline}
            onChange={(v) => update('timeline', v)}
          />
        </div>

        {/* What do you need cleaned */}
        <div>
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
            placeholder="Square footage, type of space, specific areas, anything we should know."
            value={form.details}
            onChange={(e) => update('details', e.target.value)}
            className="w-full rounded-[10px] border border-border-subtle bg-brand-white px-3.5 py-3 text-base text-brand-black placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 min-h-[44px]"
          />
        </div>

        {/* Preferred Contact Method */}
        <RadioGroup
          label="Preferred Contact Method"
          name="preferred_contact_method"
          options={CONTACT_METHODS}
          value={form.preferred_contact_method}
          onChange={(v) => update('preferred_contact_method', v)}
        />

      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full sm:w-auto items-center justify-center rounded-[10px] bg-brand-blue px-6 py-4 text-base font-semibold text-white hover:bg-[#164F96] transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
      >
        {submitting ? 'Sending...' : 'Request Free Quote'}
      </button>
    </form>
  );
}

// ---- Sub-components ----

function TextField({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  const id = `qf-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-black mb-1.5">
        {label}
        {required && <span className="ml-1 text-brand-blue" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-[10px] border px-3.5 py-3 text-base text-brand-black placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 min-h-[44px] ${
          error ? 'border-red-400 bg-red-50' : 'border-border-subtle bg-brand-white'
        }`}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          data-field-error
          tabIndex={-1}
          className="mt-1 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const id = `qf-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-black mb-1.5">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[10px] border border-border-subtle bg-brand-white px-3.5 py-3 text-base text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 min-h-[44px]"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-brand-black mb-2">
        {label}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const id = `qf-${name}-${opt.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <label
              key={opt}
              htmlFor={id}
              className={`inline-flex items-center gap-2 cursor-pointer rounded-[8px] border px-4 py-2.5 text-sm font-semibold transition-colors min-h-[44px] ${
                value === opt
                  ? 'border-brand-blue bg-soft-blue text-brand-blue'
                  : 'border-border-subtle bg-brand-white text-brand-black hover:border-brand-blue/40'
              }`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={opt}
                checked={value === opt}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
