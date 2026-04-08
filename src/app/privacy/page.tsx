import type { Metadata } from "next";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Privacy Policy — EUGuard
// ---------------------------------------------------------------------------
// Required for Shopify App Store submission. Covers data collection, usage,
// third-party services, GDPR rights, and Shopify-specific compliance.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EUGuard privacy policy. How we collect, use, and protect your Shopify store data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-border-subtle">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <div className="flex size-7 items-center justify-center rounded-lg bg-brand/10">
              <svg viewBox="0 0 24 24" fill="none" className="size-4 text-brand">
                <path
                  d="M12 2L3 7v10l9 5 9-5V7l-9-5Z"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V12M3 7l9 5 9-5"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold">
              EU<span className="text-brand">Guard</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-muted transition-colors hover:text-text-secondary"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-text-muted">Last updated: March 2026</p>
        </div>

        <div className="space-y-10 text-text-secondary leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-text-primary [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-brand-light">
          {/* ── 1. Introduction ────────────────────────────────────── */}
          <section>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how Digital Soft Distribution Sp. z o.o., operating as
              SoftBlaze (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), collects, uses, and
              protects information through EUGuard (&quot;the App&quot;), a Shopify
              application that provides AI-powered return analytics and prevention tools.
            </p>
            <p className="mt-3">
              By installing and using EUGuard, you agree to the collection and use of
              information in accordance with this policy. If you do not agree, please uninstall the
              App.
            </p>
          </section>

          {/* ── 2. Data We Collect ─────────────────────────────────── */}
          <section>
            <h2>2. Data We Collect</h2>
            <p>
              When you install EUGuard on your Shopify store, we access and process the
              following data through Shopify&apos;s authorized OAuth flow:
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3>Order Data</h3>
                <ul>
                  <li>Order IDs, line items, quantities, and amounts</li>
                  <li>Order dates and fulfillment status</li>
                  <li>Associated customer IDs (internal Shopify IDs)</li>
                </ul>
              </div>

              <div>
                <h3>Return &amp; Refund Data</h3>
                <ul>
                  <li>Return reason codes and free-text customer notes</li>
                  <li>Refund amounts and resolution types</li>
                  <li>Return request dates and processing timelines</li>
                </ul>
              </div>

              <div>
                <h3>Product Data</h3>
                <ul>
                  <li>Product titles, descriptions, and categories</li>
                  <li>Pricing, variants, and images</li>
                  <li>Inventory and product status</li>
                </ul>
              </div>

              <div>
                <h3>Customer Data</h3>
                <ul>
                  <li>Customer email addresses and names</li>
                  <li>Order history and return history per customer</li>
                  <li>Customer segmentation data (repeat returner flags)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm font-medium text-brand">What we do NOT collect:</p>
              <ul className="mt-2 text-sm">
                <li>Payment card information or billing details</li>
                <li>Customer passwords or authentication credentials</li>
                <li>Data from stores where the App is not installed</li>
              </ul>
            </div>
          </section>

          {/* ── 3. How We Use Your Data ────────────────────────────── */}
          <section>
            <h2>3. How We Use Your Data</h2>
            <p>We use the collected data exclusively to provide and improve the App&apos;s services:</p>
            <ul className="mt-3">
              <li>Analyze return patterns to identify root causes (sizing issues, misleading descriptions, quality problems)</li>
              <li>Score product descriptions for accuracy and completeness</li>
              <li>Generate AI-powered recommendations for reducing return rates</li>
              <li>Calculate return costs, savings, and ROI metrics</li>
              <li>Provide industry benchmarks using anonymized, aggregated data</li>
              <li>Send automated alerts when return rates spike or anomalies are detected</li>
              <li>Generate periodic reports on return trends and improvements</li>
            </ul>
          </section>

          {/* ── 4. Third-Party Services ────────────────────────────── */}
          <section>
            <h2>4. Third-Party Services</h2>
            <p>We use the following third-party services to operate the App:</p>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-border bg-surface-elevated/50 p-4">
                <h3>Supabase (Database Hosting)</h3>
                <p className="text-sm">
                  Hosted in the EU (Frankfurt, Germany). Provides PostgreSQL database with
                  row-level security ensuring per-store data isolation. Your data is stored
                  separately from other merchants&apos; data.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface-elevated/50 p-4">
                <h3>OpenAI (AI Analysis)</h3>
                <p className="text-sm">
                  We use GPT-4o-mini for natural language analysis of return reason notes and
                  product description scoring. Data sent to OpenAI includes return reason text and
                  product descriptions only &mdash; <strong>no customer PII</strong> (names,
                  emails, or addresses) is sent to AI providers.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface-elevated/50 p-4">
                <h3>Vercel (Application Hosting)</h3>
                <p className="text-sm">
                  The App is hosted on Vercel&apos;s edge network. Vercel processes HTTP requests
                  but does not store your business data.
                </p>
              </div>
            </div>
          </section>

          {/* ── 5. Data Retention ──────────────────────────────────── */}
          <section>
            <h2>5. Data Retention</h2>
            <ul>
              <li>
                <strong>Active installations:</strong> Data is retained for as long as the App is
                installed on your Shopify store.
              </li>
              <li>
                <strong>After uninstallation:</strong> All store-specific data is deleted within 30
                days of uninstallation, in compliance with GDPR and Shopify requirements. Deletion
                is triggered automatically via Shopify&apos;s <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-xs font-mono text-brand-light">shop/redact</code> webhook.
              </li>
              <li>
                <strong>Anonymized benchmarks:</strong> Aggregated, fully anonymized benchmark data
                (e.g., average return rates by product category) may be retained indefinitely. This
                data cannot be traced back to any individual store or customer.
              </li>
            </ul>
          </section>

          {/* ── 6. Data Security ───────────────────────────────────── */}
          <section>
            <h2>6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul className="mt-3">
              <li>
                <strong>Encryption in transit:</strong> All data is transmitted over TLS 1.3
                encrypted connections.
              </li>
              <li>
                <strong>Row-level security:</strong> Database policies ensure complete per-store
                data isolation. One merchant cannot access another&apos;s data.
              </li>
              <li>
                <strong>Authentication:</strong> API access is secured via Shopify session tokens
                and OAuth verification.
              </li>
              <li>
                <strong>GDPR webhooks:</strong> We implement all mandatory Shopify GDPR webhooks:{" "}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-xs font-mono text-brand-light">customers/data_request</code>,{" "}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-xs font-mono text-brand-light">customers/redact</code>, and{" "}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-xs font-mono text-brand-light">shop/redact</code>.
              </li>
            </ul>
          </section>

          {/* ── 7. Your Rights (GDPR) ─────────────────────────────── */}
          <section>
            <h2>7. Your Rights</h2>
            <p>
              Under the General Data Protection Regulation (GDPR) and applicable data protection
              laws, you have the following rights:
            </p>
            <ul className="mt-3">
              <li>
                <strong>Right to access:</strong> Request a copy of all data we hold about your
                store.
              </li>
              <li>
                <strong>Right to rectification:</strong> Request correction of any inaccurate data.
              </li>
              <li>
                <strong>Right to erasure:</strong> Request deletion of all your data. Uninstalling
                the App triggers automatic deletion within 30 days.
              </li>
              <li>
                <strong>Right to data portability:</strong> Request an export of your data in a
                machine-readable format.
              </li>
              <li>
                <strong>Right to restrict processing:</strong> Request that we limit how we process
                your data.
              </li>
              <li>
                <strong>Right to object:</strong> Object to specific processing activities.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@softblaze.dev">privacy@softblaze.dev</a>. We will respond
              within 30 days.
            </p>
          </section>

          {/* ── 8. Cookies ─────────────────────────────────────────── */}
          <section>
            <h2>8. Cookies &amp; Tracking</h2>
            <p>
              EUGuard does <strong>not</strong> use tracking cookies, advertising pixels,
              or any third-party analytics trackers within the Shopify admin experience.
            </p>
            <p className="mt-3">
              The only client-side storage used is Shopify&apos;s session token mechanism, which is
              required for authentication within the Shopify admin.
            </p>
          </section>

          {/* ── 9. Shopify Compliance ──────────────────────────────── */}
          <section>
            <h2>9. Shopify App Store Compliance</h2>
            <ul>
              <li>We comply with Shopify&apos;s API Terms of Service and Partner Program Agreement.</li>
              <li>Data is accessed exclusively through Shopify&apos;s authorized OAuth flow with scoped permissions.</li>
              <li>We handle all mandatory Shopify GDPR webhooks for data requests, customer redaction, and shop redaction.</li>
              <li>We do not sell, rent, or share merchant or customer data with third parties for marketing purposes.</li>
            </ul>
          </section>

          {/* ── 10. Changes ────────────────────────────────────────── */}
          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Continued use of the App after
              changes constitutes acceptance of the revised policy.
            </p>
            <p className="mt-3">
              For material changes that affect how we process your data, we will notify you via the
              Shopify admin notification system.
            </p>
          </section>

          {/* ── 11. Contact ────────────────────────────────────────── */}
          <section>
            <h2>11. Contact Us</h2>
            <div className="rounded-lg border border-border bg-surface-elevated/50 p-4 text-sm">
              <p className="font-medium text-text-primary">
                Digital Soft Distribution Sp. z o.o. (SoftBlaze)
              </p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:privacy@softblaze.dev">privacy@softblaze.dev</a>
              </p>
              <p className="mt-1">App: EUGuard</p>
              <p className="mt-1">
                Website:{" "}
                <a href="https://euguard.ai">euguard.ai</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border-subtle py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-text-muted">
          <div className="flex items-center justify-center gap-6">
            <Link href="/" className="transition-colors hover:text-text-secondary">
              Home
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text-secondary">
              Terms of Service
            </Link>
            <Link href="mailto:privacy@softblaze.dev" className="transition-colors hover:text-text-secondary">
              Contact
            </Link>
          </div>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Digital Soft Distribution Sp. z o.o. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
