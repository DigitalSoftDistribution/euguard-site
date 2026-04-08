import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ScrollAnimator } from "@/components/scroll-animator";
import { EUGuardLogo } from "@/components/euguard-logo";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for EUGuard. Start free. Full compliance suite from $19/mo.",
};

const SHOPIFY_APP_URL = "https://app.euguard.ai/onboarding";

// ── Plans ──────────────────────────────────────────────────────────────────

const PLANS = [
  { id: "starter",      name: "Starter",      price: "Free",  period: "",     annualPrice: "",          highlighted: false },
  { id: "growth",       name: "Growth",        price: "$19",   period: "/mo",  annualPrice: "$183/yr",   highlighted: false },
  { id: "professional", name: "Professional",  price: "$49",   period: "/mo",  annualPrice: "$470/yr",   highlighted: true  },
  { id: "enterprise",   name: "Enterprise",    price: "$149",  period: "/mo",  annualPrice: "$1,430/yr", highlighted: false },
] as const;

type PlanId = (typeof PLANS)[number]["id"];
type PlanKey = Exclude<keyof FeatureRow, "feature">;

// ── Feature comparison ─────────────────────────────────────────────────────

type CellValue = boolean | string;

interface FeatureRow {
  feature: string;
  starter: CellValue;
  growth: CellValue;
  professional: CellValue;
  enterprise: CellValue;
}

const FEATURE_GROUPS: { group: string; features: FeatureRow[] }[] = [
  {
    group: "Compliance Coverage",
    features: [
      { feature: "Products monitored",    starter: "50",          growth: "500",        professional: "2,000",       enterprise: "Unlimited" },
      { feature: "Scan frequency",        starter: "Monthly",     growth: "Weekly",     professional: "Daily",        enterprise: "Real-time" },
      { feature: "Languages",             starter: "English only", growth: "3 (choose)", professional: "All 8",        enterprise: "All 8" },
      { feature: "EU countries",          starter: "EU-wide only", growth: "10",         professional: "All 27",       enterprise: "All 27" },
      { feature: "Regulations covered",   starter: "Greenwashing", growth: "Greenwashing + Omnibus", professional: "All 7", enterprise: "All 7" },
    ],
  },
  {
    group: "AI & Greenwashing",
    features: [
      { feature: "Greenwashing NLP scanner",        starter: true,  growth: true,  professional: true,  enterprise: true  },
      { feature: "AI fix suggestions (review+copy)", starter: false, growth: true,  professional: true,  enterprise: true  },
      { feature: "AI auto-fix → Shopify push",       starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "GPT-4o image scanning",            starter: false, growth: false, professional: false, enterprise: true  },
      { feature: "AI compliance chat assistant",     starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "Confidence scores + citations",    starter: true,  growth: true,  professional: true,  enterprise: true  },
    ],
  },
  {
    group: "Compliance Modules",
    features: [
      { feature: "GPSR safety data tracking",       starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "EUDR deforestation module",        starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "EAA accessibility audit (WCAG 2.1 AA)", starter: false, growth: false, professional: true, enterprise: true },
      { feature: "Omnibus pricing transparency",    starter: "Basic", growth: true, professional: true, enterprise: true  },
      { feature: "Consumer Rights + UCPD checks",  starter: false, growth: true,  professional: true,  enterprise: true  },
    ],
  },
  {
    group: "Evidence & Reporting",
    features: [
      { feature: "Compliance dashboard",            starter: true,  growth: true,  professional: true,  enterprise: true  },
      { feature: "Email alerts",                    starter: "Critical only", growth: true, professional: true, enterprise: true },
      { feature: "PDF compliance reports",          starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "Bulk ZIP evidence export",        starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "Immutable AI audit trail",        starter: false, growth: false, professional: true,  enterprise: true  },
      { feature: "Public evidence verification pages", starter: false, growth: false, professional: true, enterprise: true },
    ],
  },
  {
    group: "Scale & Integrations",
    features: [
      { feature: "Stores",                          starter: "1",   growth: "1",  professional: "1",     enterprise: "Unlimited" },
      { feature: "Multi-store dashboard",           starter: false, growth: false, professional: false,  enterprise: true  },
      { feature: "REST API access",                 starter: false, growth: false, professional: false,  enterprise: true  },
      { feature: "Webhooks",                        starter: false, growth: false, professional: false,  enterprise: true  },
    ],
  },
  {
    group: "Support",
    features: [
      { feature: "Support",         starter: "Email",      growth: "Email",    professional: "Priority email",  enterprise: "Dedicated manager" },
      { feature: "Onboarding",      starter: "Self-serve", growth: "Self-serve", professional: "Guided",         enterprise: "White-glove" },
      { feature: "SLA",             starter: false,        growth: false,      professional: false,             enterprise: "99.9% uptime" },
    ],
  },
];

const FAQS = [
  {
    q: "Is there really a free plan?",
    a: "Yes. The Starter plan is free forever for up to 50 products. English greenwashing scanning, monthly scans, basic dashboard, and critical issue email alerts. No credit card required, no time limit.",
  },
  {
    q: "How does the 14-day free trial work?",
    a: "When you upgrade to any paid plan (Growth, Professional, or Enterprise), you get 14 days free with full feature access. You won't be charged until the trial ends. You can downgrade to Starter at any time during the trial.",
  },
  {
    q: "What counts as a 'product'?",
    a: "Any active product in your Shopify store that EUGuard analyzes. We count products in your live catalog — archived or draft products don't count against your limit.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual billing saves 20%: Growth is $183/yr (vs $228), Professional is $470/yr (vs $588), Enterprise is $1,430/yr (vs $1,788).",
  },
  {
    q: "What happens if I exceed my product limit?",
    a: "We'll notify you with an upgrade recommendation. We give a 10% buffer before limits apply — we never stop scanning mid-month.",
  },
  {
    q: "Can I change plans at any time?",
    a: "Yes. Upgrade immediately with prorated billing. Downgrades take effect at the next billing date.",
  },
  {
    q: "What is the difference between Growth and Professional?",
    a: "Growth ($19/mo) gives you multi-language scanning, 10 country rules, and AI fix suggestions to review and copy manually. Professional ($49/mo) adds one-click AI auto-fix that pushes directly to Shopify, all 27 country rules, GPSR + EUDR modules, EAA accessibility audits, daily scans, PDF reports, and the AI compliance chat assistant.",
  },
  {
    q: "Is my Shopify data safe?",
    a: "EUGuard is read-only for scanning. We only write back when you explicitly click 'Apply Fix' on Professional or Enterprise. All data is encrypted at rest and in transit. We never share your data with third parties.",
  },
] as const;

// ── Helpers ────────────────────────────────────────────────────────────────

function Cell({ value, planId }: { value: CellValue; planId: PlanId }) {
  const isPro = planId === "professional";
  const isEnt = planId === "enterprise";
  const isHighlighted = isPro || isEnt;

  if (value === true) {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mx-auto size-4"
        style={{ color: isHighlighted ? "#818CF8" : "#10B981" }}
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (value === false) {
    return <span style={{ color: "#242F3A" }}>—</span>;
  }
  return (
    <span
      className="text-xs font-medium"
      style={{ color: isHighlighted ? "#818CF8" : "#9BA6B1" }}
    >
      {value}
    </span>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Nav */}
      <nav
        className="sticky top-0 z-40 w-full backdrop-blur-xl"
        style={{ borderBottom: "1px solid #0E151D", background: "rgba(4,10,17,0.92)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="EUGuard home">
            <EUGuardLogo size={34} nameSize="text-sm" />
          </Link>
          <Link
            href={SHOPIFY_APP_URL}
            className="rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "#F59E0B", color: "#040A11" }}
          >
            Install Free
          </Link>
        </div>
      </nav>

      <main className="pb-24 pt-20">
        {/* Header */}
        <section className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#4F46E5" }}>
            Transparent Pricing
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: "#E3E8EE" }} data-animate>
            Start free. Scale as you grow.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg" style={{ color: "#9BA6B1" }} data-animate>
            From 50 products to unlimited — every plan includes a free trial.
            No surprises, no hidden fees.
          </p>
        </section>

        {/* Plan cards */}
        <section className="mx-auto mt-14 max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan, i) => (
              <div
                key={plan.id}
                data-animate
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: plan.highlighted ? "rgba(79,70,229,0.08)" : "#09121B",
                  border: plan.highlighted ? "1px solid rgba(79,70,229,0.4)" : "1px solid #242F3A",
                  boxShadow: plan.highlighted ? "0 0 40px rgba(79,70,229,0.08)" : undefined,
                }}
                className="relative rounded-2xl p-6 text-center"
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold"
                    style={{ background: "#4F46E5", color: "white" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-base font-bold" style={{ color: "#E3E8EE" }}>{plan.name}</h3>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: plan.highlighted ? "#818CF8" : "#E3E8EE" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm" style={{ color: "#516170" }}>{plan.period}</span>
                  )}
                </div>
                {plan.annualPrice && (
                  <p className="mt-1 text-xs" style={{ color: "#516170" }}>
                    or{" "}
                    <span style={{ color: "#818CF8" }} className="font-semibold">{plan.annualPrice}</span>
                    {" "}— save 20%
                  </p>
                )}
                <Link
                  href={plan.id === "enterprise" ? "mailto:hello@plugkit.io" : SHOPIFY_APP_URL}
                  className="mt-5 block rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:opacity-90"
                  style={
                    plan.highlighted
                      ? { background: "#4F46E5", color: "white" }
                      : plan.id === "starter"
                      ? { background: "#F59E0B", color: "#040A11" }
                      : { background: "#0E151D", color: "#E3E8EE", border: "1px solid #242F3A" }
                  }
                >
                  {plan.id === "starter" ? "Start Free" :
                   plan.id === "enterprise" ? "Contact Sales" :
                   "Start 14-Day Trial"}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="mx-auto mt-24 max-w-6xl px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: "#E3E8EE" }}
            data-animate
          >
            Full feature comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid #242F3A" }} data-animate>
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid #242F3A", background: "#09121B" }}>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#516170" }}>
                    Feature
                  </th>
                  {PLANS.map((p) => (
                    <th
                      key={p.id}
                      className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider"
                      style={{ color: p.highlighted ? "#818CF8" : "#516170" }}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_GROUPS.map((group) => (
                  <Fragment key={group.group}>
                    <tr style={{ background: "#040A11" }}>
                      <td
                        colSpan={5}
                        className="px-5 pt-6 pb-2 text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: "#4F46E5" }}
                      >
                        {group.group}
                      </td>
                    </tr>
                    {group.features.map((row, ri) => (
                      <tr
                        key={row.feature}
                        style={{
                          borderBottom: ri < group.features.length - 1 ? "1px solid #0E151D" : undefined,
                          background: "#09121B",
                        }}
                      >
                        <td className="px-5 py-3 text-sm" style={{ color: "#9BA6B1" }}>{row.feature}</td>
                        {PLANS.map((p) => (
                          <td key={p.id} className="px-4 py-3 text-center">
                            <Cell value={row[p.id as PlanKey]} planId={p.id} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-24 max-w-3xl px-6">
          <h2
            className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: "#E3E8EE" }}
            data-animate
          >
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                data-animate
                style={{ transitionDelay: `${i * 40}ms`, background: "#09121B", border: "1px solid #242F3A" }}
                className="group rounded-2xl"
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-sm font-semibold"
                  style={{ color: "#E3E8EE" }}
                >
                  {faq.q}
                  <svg
                    className="size-4 shrink-0 transition-transform group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    style={{ color: "#516170" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#9BA6B1" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto mt-24 max-w-3xl px-6 text-center" data-animate>
          <div
            className="rounded-3xl p-12"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.10), rgba(245,158,11,0.06))",
              border: "1px solid rgba(79,70,229,0.25)",
            }}
          >
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "#E3E8EE" }}>
              Green Claims enforcement starts Sep 2026.
            </h2>
            <p className="mb-8" style={{ color: "#9BA6B1" }}>
              Start with the free Starter plan and scan your first 50 products today.
            </p>
            <Link
              href={SHOPIFY_APP_URL}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold transition-all hover:opacity-90"
              style={{ background: "#F59E0B", color: "#040A11", boxShadow: "0 0 40px rgba(245,158,11,0.25)" }}
            >
              Install Free on Shopify
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 0 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.04l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10" style={{ borderTop: "1px solid #0E151D" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" aria-label="EUGuard">
              <EUGuardLogo size={28} nameSize="text-xs" />
            </Link>
            <div className="flex items-center gap-6 text-sm" style={{ color: "#9BA6B1" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="mailto:hello@plugkit.io" className="hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-sm" style={{ color: "#516170" }}>
              © {new Date().getFullYear()} PlugKit
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
