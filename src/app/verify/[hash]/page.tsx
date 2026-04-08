import type { Metadata } from 'next';
import Link from 'next/link';

// ---------------------------------------------------------------------------
// Types (mirroring the euguard-app verification API response)
// ---------------------------------------------------------------------------

interface PublicEvidence {
  cert_standard?: string;
  display_name?: string;
  cert_number?: string;
  cert_issuing_body?: string;
  cert_valid_to?: string;
  document_url?: string;
}

interface PublicClaim {
  matched_text: string;
  status: string;
  evidence?: PublicEvidence;
}

interface VerificationData {
  hash: string;
  product_title: string;
  shop_domain: string;
  verified_at: string | null;
  fully_verified: boolean;
  substantiated_claims: number;
  total_claims: number;
  claims: PublicClaim[];
  regulations_checked: string[];
}

// ---------------------------------------------------------------------------
// API Fetch Helper
// ---------------------------------------------------------------------------

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.euguard.ai';

async function fetchVerificationData(hash: string): Promise<VerificationData | null> {
  try {
    const res = await fetch(`${APP_URL}/api/evidence/verify/${hash}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? json;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ hash: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hash } = await params;
  const data = await fetchVerificationData(hash);

  if (!data) {
    return {
      title: 'Verification Not Found | EUGuard',
      description: 'This verification link is invalid or has expired.',
      robots: { index: false },
    };
  }

  return {
    title: `Compliance Verified: ${data.product_title} | EUGuard`,
    description: `EU compliance evidence for ${data.product_title}. Verified certifications and regulatory compliance.`,
    robots: { index: false },
  };
}

// ---------------------------------------------------------------------------
// Not Found State
// ---------------------------------------------------------------------------

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-3">
          Verification Not Found
        </h1>
        <p className="text-text-secondary mb-8">
          This verification link is invalid or the product is no longer being monitored.
          Please check the URL or contact the store.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          Learn about EUGuard
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Warning State (not fully verified)
// ---------------------------------------------------------------------------

function WarningBanner({ data }: { data: VerificationData }) {
  return (
    <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-5 py-4 mb-8">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <div>
          <p className="text-yellow-300 font-medium text-sm">Partially Verified</p>
          <p className="text-yellow-400/70 text-sm mt-1">
            {data.substantiated_claims} of {data.total_claims} claims have been substantiated
            with evidence. Some claims are still pending verification.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Claim Status Helpers
// ---------------------------------------------------------------------------

const STATUS_CONFIG: Record<string, { label: string; icon: string; colorClass: string }> = {
  verified: { label: 'Verified', icon: 'check-circle', colorClass: 'text-accent' },
  evidence_uploaded: { label: 'Evidence uploaded', icon: 'check', colorClass: 'text-accent' },
  evidence_pending: { label: 'Pending', icon: 'clock', colorClass: 'text-yellow-400' },
  unsubstantiated: { label: 'Unsubstantiated', icon: 'alert', colorClass: 'text-red-400' },
  expired: { label: 'Expired', icon: 'x', colorClass: 'text-red-400' },
};

function StatusIcon({ status }: { status: string }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.unsubstantiated;

  if (config.icon === 'check-circle' || config.icon === 'check') {
    return (
      <svg className={`w-5 h-5 ${config.colorClass} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (config.icon === 'clock') {
    return (
      <svg className={`w-5 h-5 ${config.colorClass} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg className={`w-5 h-5 ${config.colorClass} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Category display names
// ---------------------------------------------------------------------------

const CATEGORY_LABELS: Record<string, string> = {
  ecgt: 'Green Claims (ECGT)',
  gpsr: 'Product Safety (GPSR)',
  ucpd: 'Consumer Protection (UCPD)',
  omnibus: 'Omnibus Directive',
  eaa: 'Accessibility (EAA)',
  eudr: 'Deforestation (EUDR)',
  crd: 'Consumer Rights (CRD)',
  greenwashing: 'Greenwashing',
};

function getCategoryLabel(cat: string): string {
  return CATEGORY_LABELS[cat.toLowerCase()] || cat;
}

// ---------------------------------------------------------------------------
// Certification Card
// ---------------------------------------------------------------------------

function CertificationCard({ claim }: { claim: PublicClaim }) {
  const ev = claim.evidence;
  if (!ev || !ev.cert_standard) return null;

  return (
    <div className="rounded-lg border border-border bg-surface-elevated p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <p className="text-text-primary font-semibold text-sm">
              {ev.cert_standard} — {ev.display_name}
            </p>
            {ev.cert_number && (
              <p className="text-text-secondary text-sm mt-1">
                Certificate: {ev.cert_number}
              </p>
            )}
            {ev.cert_issuing_body && (
              <p className="text-text-secondary text-sm">
                Issued by: {ev.cert_issuing_body}
              </p>
            )}
            {ev.cert_valid_to && (
              <p className="text-text-secondary text-sm">
                Valid until: {new Date(ev.cert_valid_to).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
          </div>
        </div>
      </div>
      {ev.document_url && (
        <a
          href={ev.document_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-surface-hover text-text-primary text-sm font-medium hover:bg-border transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          View Certificate
        </a>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------------------------

export default async function VerifyPage({ params }: PageProps) {
  const { hash } = await params;
  const data = await fetchVerificationData(hash);

  if (!data) {
    return <NotFoundPage />;
  }

  const certClaims = data.claims.filter(
    (c) => c.evidence?.cert_standard
  );
  const verifiedDate = data.verified_at
    ? new Date(data.verified_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="min-h-screen px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header -- Logo + Brand */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="text-text-primary font-semibold text-sm font-[family-name:var(--font-heading)]">
              EUGuard
            </p>
            <p className="text-text-muted text-xs">by PlugKit</p>
          </div>
        </div>

        {/* Status Card */}
        <div className="rounded-xl border border-border bg-surface-elevated p-6 sm:p-8 mb-6">
          {/* Verified / Warning Badge */}
          {data.fully_verified ? (
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-accent font-[family-name:var(--font-heading)]">
                  EU Compliance Verified
                </h1>
                <p className="text-text-secondary text-sm">
                  All claims substantiated with evidence
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 font-[family-name:var(--font-heading)]">
                  Partially Verified
                </h1>
                <p className="text-text-secondary text-sm">
                  {data.substantiated_claims} of {data.total_claims} claims verified
                </p>
              </div>
            </div>
          )}

          {/* Product Details */}
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-text-muted w-20 shrink-0">Product</span>
              <span className="text-text-primary font-medium">{data.product_title}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-text-muted w-20 shrink-0">Store</span>
              <span className="text-text-secondary">{data.shop_domain}</span>
            </div>
            {verifiedDate && (
              <div className="flex items-start gap-3">
                <span className="text-text-muted w-20 shrink-0">Verified</span>
                <span className="text-text-secondary">{verifiedDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Warning banner for partially verified */}
        {!data.fully_verified && data.total_claims > 0 && (
          <WarningBanner data={data} />
        )}

        {/* Certifications */}
        {certClaims.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">
              Certifications
            </h2>
            <div className="space-y-3">
              {certClaims.map((claim, i) => (
                <CertificationCard key={i} claim={claim} />
              ))}
            </div>
          </section>
        )}

        {/* Verified Claims */}
        {data.claims.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">
              Verified Claims ({data.substantiated_claims}/{data.total_claims})
            </h2>
            <div className="rounded-lg border border-border bg-surface-elevated divide-y divide-border">
              {data.claims.map((claim, i) => {
                const config = STATUS_CONFIG[claim.status] || STATUS_CONFIG.unsubstantiated;
                return (
                  <div key={i} className="flex items-start gap-3 px-5 py-4">
                    <StatusIcon status={claim.status} />
                    <div className="min-w-0 flex-1">
                      <p className="text-text-primary text-sm">
                        &ldquo;{claim.matched_text}&rdquo;
                      </p>
                      <p className={`text-xs mt-1 ${config.colorClass}`}>
                        {config.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Regulations Checked */}
        {data.regulations_checked.length > 0 && (
          <section className="mb-10">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">
              Regulations Checked
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.regulations_checked.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-brand/10 text-brand-light text-xs font-medium"
                >
                  {getCategoryLabel(cat)}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="border-t border-border pt-6 text-center">
          <p className="text-text-muted text-xs mb-1">
            Verified by{' '}
            <Link href="/" className="text-brand-light hover:text-brand transition-colors">
              EUGuard by PlugKit
            </Link>
          </p>
          <p className="text-text-muted/60 text-xs">
            <Link href="https://euguard.ai" className="hover:text-text-secondary transition-colors">
              euguard.ai
            </Link>
            {' '}&middot;{' '}
            Verification ID: {data.hash}
          </p>
        </footer>
      </div>
    </div>
  );
}
