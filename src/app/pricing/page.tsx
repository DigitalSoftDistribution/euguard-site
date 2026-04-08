import type { Metadata } from "next";
import Link from "next/link";
import { ScrollAnimator } from "@/components/scroll-animator";

// ---------------------------------------------------------------------------
// Pricing Page — Detailed plan comparison + FAQ
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for EUGuard. Start free, upgrade when you are ready. Compare all features across plans.",
};

const SHOPIFY_APP_URL = "https://apps.shopify.com/euguard";

// ── Feature Comparison Data ───────────────────────────────────────────────

interface FeatureRow {
  feature: string;
  free: string | boolean;
  starter: string | boolean;
  growth: string | boolean;
  pro: string | boolean;
  scale: string | boolean;
}

const FEATURE_GROUPS: { group: string; features: FeatureRow[] }[] = [
  {
    group: "Analytics & Reporting",
    features: [
      { feature: "Return analytics dashboard", free: true, starter: true, growth: true, pro: true, scale: true },
      { feature: "Industry benchmarks", free: true, starter: true, growth: true, pro: true, scale: true },
      { feature: "Product risk scores", free: "Basic", starter: "AI-powered", growth: "AI-powered", pro: "Advanced", scale: "Custom models" },
      { feature: "Product risk table", free: false, starter: true, growth: true, pro: true, scale: true },
      { feature: "Return trend charts", free: true, starter: true, growth: true, pro: true, scale: true },
      { feature: "Impact tracking", free: false, starter: false, growth: true, pro: true, scale: true },
      { feature: "Cross-store benchmarks", free: false, starter: false, growth: false, pro: true, scale: true },
      { feature: "Monthly performance reports", free: false, starter: false, growth: false, pro: true, scale: true },
    ],
  },
  {
    group: "AI & Machine Learning",
    features: [
      { feature: "Description quality analysis", free: false, starter: true, growth: true, pro: true, scale: true },
      { feature: "AI auto-rewrite descriptions", free: false, starter: false, growth: true, pro: true, scale: true },
      { feature: "Size warning generation", free: false, starter: false, growth: true, pro: true, scale: true },
      { feature: "Return reason classification", free: false, starter: true, growth: true, pro: true, scale: true },
      { feature: "Fraud detection", free: false, starter: false, growth: false, pro: true, scale: true },
      { feature: "Custom ML models", free: false, starter: false, growth: false, pro: false, scale: true },
    ],
  },
  {
    group: "Communication & Automation",
    features: [
      { feature: "Smart alerts", free: false, starter: false, growth: true, pro: true, scale: true },
      { feature: "Post-purchase emails", free: false, starter: false, growth: true, pro: true, scale: true },
      { feature: "Post-purchase surveys", free: false, starter: false, growth: false, pro: true, scale: true },
      { feature: "Shopify Flow connector", free: false, starter: false, growth: false, pro: true, scale: true },
    ],
  },
  {
    group: "Integrations & API",
    features: [
      { feature: "Shopify admin integration", free: true, starter: true, growth: true, pro: true, scale: true },
      { feature: "REST API access", free: false, starter: false, growth: false, pro: false, scale: true },
      { feature: "Custom integrations", free: false, starter: false, growth: false, pro: false, scale: true },
      { feature: "Webhooks", free: false, starter: false, growth: false, pro: false, scale: true },
    ],
  },
  {
    group: "Limits & Support",
    features: [
      { feature: "Orders per month", free: "50", starter: "200", growth: "1,000", pro: "5,000", scale: "Unlimited" },
      { feature: "Data retention", free: "7 days", starter: "30 days", growth: "90 days", pro: "1 year", scale: "Unlimited" },
      { feature: "Support", free: "Email", starter: "Email", growth: "Email", pro: "Priority", scale: "Dedicated" },
      { feature: "Onboarding", free: "Self-serve", starter: "Self-serve", growth: "Self-serve", pro: "Guided", scale: "White-glove" },
      { feature: "Account manager", free: false, starter: false, growth: false, pro: false, scale: true },
    ],
  },
];

const FAQS = [
  {
    question: "Is there really a free plan?",
    answer:
      "Yes. The Free plan includes a full return analytics dashboard with up to 50 orders per month. No credit card required, no time limit. It is free forever.",
  },
  {
    question: "How does the 14-day free trial work?",
    answer:
      "When you upgrade to any paid plan (Starter, Growth, Pro, or Scale), you get 14 days free. You will not be charged until the trial ends. You can downgrade to Free at any time during the trial.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes. Annual billing saves you 20% compared to monthly pricing. Starter is $278/yr (vs $348), Growth is $566/yr (vs $708), Pro is $1,238/yr (vs $1,548), and Scale is $2,390/yr (vs $2,988).",
  },
  {
    question: "What counts as an \"order\"?",
    answer:
      "Any order placed in your Shopify store that EUGuard analyzes. We only count orders from the current billing period. Historical imports for initial analysis do not count against your limit.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes. Upgrade or downgrade at any time from your Shopify admin. When upgrading, you will be prorated for the remainder of your billing cycle. When downgrading, the change takes effect at your next billing date.",
  },
  {
    question: "What happens if I exceed my order limit?",
    answer:
      "We will never stop analyzing your orders. If you consistently exceed your plan limit, we will notify you and recommend an upgrade. We give you a 20% buffer before any limits apply.",
  },
  {
    question: "What is the difference between Starter and Growth?",
    answer:
      "Starter ($29/mo) gives you full analytics, risk scoring, and description quality analysis. Growth ($59/mo) adds AI Actions -- the ability to auto-rewrite product descriptions, generate size warnings, set up smart alerts, and send post-purchase emails. Growth is where return prevention becomes proactive.",
  },
  {
    question: "How is EUGuard different from return management apps?",
    answer:
      "Return management apps (like Loop, ReturnGO, AfterShip) process returns after they happen. EUGuard prevents returns before they happen by analyzing your products, descriptions, and customer behavior to identify and fix the root causes of returns.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. We follow industry best practices for data security. Your data is encrypted at rest and in transit, stored on SOC 2 compliant infrastructure, and never shared with third parties. You can delete all your data at any time.",
  },
] as const;

// ── Page Component ────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-border-subtle bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-brand/10">
              <svg viewBox="0 0 24 24" fill="none" className="size-5 text-brand">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
                <path d="M12 22V12M3 7l9 5 9-5" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              EU<span className="text-brand">Guard</span>
            </span>
          </Link>
          <Link
            href={SHOPIFY_APP_URL}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-surface transition-all hover:bg-brand-dark"
          >
            Install on Shopify
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl" data-animate>
            Compare plans
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-secondary" data-animate>
            Find the right plan for your store. Start free, upgrade as you grow.
          </p>
        </section>

        {/* Plan cards (summary) */}
        <section className="mx-auto mt-16 max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "Free", price: "$0", period: "forever", annualPrice: "", cta: "Start Free", highlighted: false },
              { name: "Starter", price: "$29", period: "/month", annualPrice: "$278/yr", cta: "Start 14-day trial", highlighted: false },
              { name: "Growth", price: "$59", period: "/month", annualPrice: "$566/yr", cta: "Start 14-day trial", highlighted: true },
              { name: "Pro", price: "$129", period: "/month", annualPrice: "$1,238/yr", cta: "Start 14-day trial", highlighted: false },
              { name: "Scale", price: "$249", period: "/month", annualPrice: "$2,390/yr", cta: "Start 14-day trial", highlighted: false },
            ].map((plan, i) => (
              <div
                key={plan.name}
                data-animate
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`relative rounded-2xl border p-5 text-center transition-all ${
                  plan.highlighted
                    ? "border-brand/40 bg-brand/5 shadow-lg shadow-brand/10"
                    : "border-border-subtle bg-surface-elevated/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-semibold text-surface">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-text-muted">{plan.period}</span>
                </div>
                {plan.annualPrice && (
                  <p className="mt-1 text-xs text-text-muted">
                    or {plan.annualPrice} <span className="text-brand font-medium">save 20%</span>
                  </p>
                )}
                <Link
                  href={SHOPIFY_APP_URL}
                  className={`mt-4 block rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-brand text-surface hover:bg-brand-dark"
                      : "border border-border bg-surface-elevated text-text-primary hover:border-text-muted"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="mx-auto mt-24 max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl" data-animate>
            Feature comparison
          </h2>

          <div className="overflow-x-auto" data-animate>
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="pb-4 text-left font-medium text-text-muted">Feature</th>
                  <th className="pb-4 text-center font-medium text-text-muted">Free</th>
                  <th className="pb-4 text-center font-medium text-text-muted">Starter</th>
                  <th className="pb-4 text-center font-medium text-brand">Growth</th>
                  <th className="pb-4 text-center font-medium text-text-muted">Pro</th>
                  <th className="pb-4 text-center font-medium text-text-muted">Scale</th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_GROUPS.map((group) => (
                  <>
                    <tr key={`group-${group.group}`}>
                      <td
                        colSpan={6}
                        className="pt-8 pb-3 text-xs font-semibold uppercase tracking-wider text-text-muted"
                      >
                        {group.group}
                      </td>
                    </tr>
                    {group.features.map((row) => (
                      <tr key={row.feature} className="border-b border-border-subtle/50">
                        <td className="py-3 pr-4 text-text-secondary">{row.feature}</td>
                        <td className="py-3 text-center">{renderCell(row.free)}</td>
                        <td className="py-3 text-center">{renderCell(row.starter)}</td>
                        <td className="py-3 text-center">{renderCell(row.growth)}</td>
                        <td className="py-3 text-center">{renderCell(row.pro)}</td>
                        <td className="py-3 text-center">{renderCell(row.scale)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-24 max-w-3xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl" data-animate>
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div
                key={faq.question}
                data-animate
                style={{ transitionDelay: `${i * 50}ms` }}
                className="rounded-2xl border border-border-subtle bg-surface-elevated/50 p-6"
              >
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto mt-24 max-w-6xl px-6 text-center" data-animate>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to reduce your returns?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-secondary">
            Join merchants who are preventing returns instead of just processing them.
          </p>
          <div className="mt-8">
            <Link
              href={SHOPIFY_APP_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-3.5 text-base font-semibold text-surface shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30"
            >
              Start Free on Shopify
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 0 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.04l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-lg bg-brand/10">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 text-brand">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
                  <path d="M12 22V12M3 7l9 5 9-5" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold">
                EU<span className="text-brand">Guard</span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <Link href="/privacy" className="transition-colors hover:text-text-secondary">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-text-secondary">Terms</Link>
              <Link href="mailto:hello@softblaze.com" className="transition-colors hover:text-text-secondary">Support</Link>
            </div>
            <p className="text-sm text-text-muted">
              Built by{" "}
              <a href="https://softblaze.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
                SoftBlaze
              </a>{" "}
              &middot; &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────

function renderCell(value: string | boolean) {
  if (value === true) {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" className="mx-auto size-5 text-brand">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-text-muted">&mdash;</span>;
  }
  return <span className="text-text-secondary">{value}</span>;
}
