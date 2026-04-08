import type { Metadata } from "next";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Terms of Service — EUGuard
// ---------------------------------------------------------------------------
// Required for Shopify App Store submission. Covers service description,
// acceptable use, billing, liability, and termination.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "EUGuard terms of service. Conditions for using our Shopify return analytics app.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-text-muted">Last updated: March 2026</p>
        </div>

        <div className="space-y-10 text-text-secondary leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-text-primary [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-brand-light">
          {/* ── 1. Agreement ───────────────────────────────────────── */}
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of EUGuard
              (&quot;the App&quot;), a Shopify application developed and operated by Digital Soft
              Distribution Sp. z o.o., operating as SoftBlaze (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;).
            </p>
            <p className="mt-3">
              By installing the App from the Shopify App Store, you agree to be bound by these
              Terms. If you do not agree, do not install or use the App.
            </p>
          </section>

          {/* ── 2. Service Description ─────────────────────────────── */}
          <section>
            <h2>2. Service Description</h2>
            <p>EUGuard provides Shopify merchants with:</p>
            <ul className="mt-3">
              <li>AI-powered analysis of return patterns and root causes</li>
              <li>Product description quality scoring and improvement suggestions</li>
              <li>Customer segmentation based on return behavior</li>
              <li>Automated alerts for return rate anomalies</li>
              <li>ROI tracking and savings calculations</li>
              <li>Industry benchmark comparisons (anonymized, aggregated data)</li>
            </ul>
            <p className="mt-3">
              The App integrates with your Shopify store via Shopify&apos;s authorized OAuth flow
              and accesses store data as described in our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </section>

          {/* ── 3. Acceptable Use ──────────────────────────────────── */}
          <section>
            <h2>3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-3">
              <li>
                Use the App for any purpose that violates applicable laws or Shopify&apos;s Terms of
                Service.
              </li>
              <li>
                Attempt to reverse engineer, decompile, or extract the source code of the App or
                its AI models.
              </li>
              <li>
                Resell, redistribute, or sublicense access to the App or its outputs.
              </li>
              <li>
                Use the App to collect or process data beyond what is authorized by your Shopify
                store&apos;s permissions.
              </li>
              <li>
                Interfere with or disrupt the App&apos;s infrastructure or other users&apos;
                access.
              </li>
              <li>
                Submit false, misleading, or fabricated data to manipulate the App&apos;s analytics
                or benchmarks.
              </li>
            </ul>
          </section>

          {/* ── 4. Billing ─────────────────────────────────────────── */}
          <section>
            <h2>4. Billing &amp; Subscription</h2>
            <p>
              EUGuard is billed exclusively through the Shopify App Store billing system.
              All charges, renewals, and cancellations are managed through your Shopify admin.
            </p>
            <ul className="mt-3">
              <li>
                <strong>Free trial:</strong> New installations include a free trial period as
                displayed on the App Store listing. You will not be charged during the trial.
              </li>
              <li>
                <strong>Subscription fees:</strong> After the trial, your subscription renews
                automatically at the rate shown in the Shopify App Store. You can cancel at any
                time through your Shopify admin.
              </li>
              <li>
                <strong>Refunds:</strong> Refund requests are handled per Shopify&apos;s App Store
                refund policies.
              </li>
              <li>
                <strong>Price changes:</strong> We may adjust pricing with 30 days&apos; notice.
                Continued use after a price change constitutes acceptance.
              </li>
            </ul>
          </section>

          {/* ── 5. Intellectual Property ───────────────────────────── */}
          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              The App, including its design, code, AI models, algorithms, and documentation, is the
              intellectual property of Digital Soft Distribution Sp. z o.o. and is protected by
              copyright and other intellectual property laws.
            </p>
            <p className="mt-3">
              <strong>Your data remains yours.</strong> We do not claim ownership of any data you
              provide or that is accessed from your Shopify store. You grant us a limited license
              to process your data solely for the purpose of providing the App&apos;s services.
            </p>
            <p className="mt-3">
              AI-generated content (description rewrites, recommendations) produced by the App is
              provided for your use within your Shopify store. You may use, modify, and publish
              this content freely.
            </p>
          </section>

          {/* ── 6. Disclaimer ──────────────────────────────────────── */}
          <section>
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties
              of any kind, whether express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
            <ul className="mt-3">
              <li>
                We do not guarantee that the App will reduce your return rates or generate specific
                financial results.
              </li>
              <li>
                AI-generated analysis and recommendations are provided as suggestions, not
                guarantees. You are responsible for reviewing and approving any changes to your
                product listings.
              </li>
              <li>
                We do not guarantee uninterrupted or error-free operation of the App.
              </li>
            </ul>
          </section>

          {/* ── 7. Limitation of Liability ─────────────────────────── */}
          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Digital Soft Distribution Sp. z
              o.o. shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits, revenue, data, or business opportunities
              arising from your use of the App.
            </p>
            <p className="mt-3">
              Our total aggregate liability for any claims arising from or related to the App shall
              not exceed the amount you paid us in subscription fees during the twelve (12) months
              preceding the claim.
            </p>
          </section>

          {/* ── 8. Termination ─────────────────────────────────────── */}
          <section>
            <h2>8. Termination</h2>
            <ul>
              <li>
                <strong>By you:</strong> You may terminate your use of the App at any time by
                uninstalling it from your Shopify store.
              </li>
              <li>
                <strong>By us:</strong> We may suspend or terminate your access if you violate
                these Terms, with notice where practicable.
              </li>
              <li>
                <strong>Effect of termination:</strong> Upon uninstallation, all store-specific
                data will be deleted within 30 days in accordance with our{" "}
                <Link href="/privacy">Privacy Policy</Link>. Any outstanding subscription charges
                are handled through Shopify&apos;s billing system.
              </li>
            </ul>
          </section>

          {/* ── 9. Indemnification ─────────────────────────────────── */}
          <section>
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Digital Soft Distribution Sp. z o.o., its
              officers, directors, and employees from any claims, damages, or expenses arising from
              your use of the App, your violation of these Terms, or your violation of any rights
              of a third party.
            </p>
          </section>

          {/* ── 10. Governing Law ──────────────────────────────────── */}
          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Poland. Any
              disputes arising from these Terms or your use of the App shall be subject to the
              exclusive jurisdiction of the courts in Poland.
            </p>
          </section>

          {/* ── 11. Changes ────────────────────────────────────────── */}
          <section>
            <h2>11. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with
              an updated &quot;Last updated&quot; date. Continued use of the App after changes
              constitutes acceptance of the revised Terms.
            </p>
            <p className="mt-3">
              For material changes, we will notify you via the Shopify admin notification system at
              least 30 days before they take effect.
            </p>
          </section>

          {/* ── 12. Contact ────────────────────────────────────────── */}
          <section>
            <h2>12. Contact Us</h2>
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
            <Link href="/privacy" className="transition-colors hover:text-text-secondary">
              Privacy Policy
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
