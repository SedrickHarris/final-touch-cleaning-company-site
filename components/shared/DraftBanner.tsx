type Props = {
  message?: string;
};

// Used at the top of legal pages whose copy is placeholder pending
// owner-approved legal review. Per Batch 2 spec — visible banner on
// /privacy-policy, /terms-of-service, /cookie-policy.
export default function DraftBanner({
  message = 'Draft — pending legal review. Do not publish as final.',
}: Props) {
  return (
    <div
      role="note"
      aria-label="Draft notice"
      className="bg-soft-blue border-y border-brand-blue/20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-3">
        <p className="text-sm font-semibold text-brand-blue">{message}</p>
      </div>
    </div>
  );
}
