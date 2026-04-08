import Image from "next/image";
import { EUGuardLogo } from "@/components/euguard-logo";
import { ScrollAnimator } from "@/components/scroll-animator";
import { CountdownTimer, DaysUntilEnforcement } from "@/components/countdown-timer";
import { EUStarsRing } from "@/components/eu-stars-ring";

// ─── Color tokens ──────────────────────────────────────────────────────────
const C = {
  surface:    "#040A11",
  elevated:   "#09121B",
  card:       "#0E151D",
  border:     "#242F3A",
  text:       "#E3E8EE",
  muted:      "#9BA6B1",
  dimmed:     "#516170",
  brand:      "#4F46E5",
  brandLight: "#818CF8",
  gold:       "#F59E0B",
  goldLight:  "#FCD34D",
  success:    "#10B981",
  danger:     "#F43F5E",
} as const;

// ─── Regulations ───────────────────────────────────────────────────────────
const REGULATIONS = [
  { id: "ecgt",    name: "Green Claims",  full: "Green Claims Directive",       date: "Sep 2026", upcoming: true,  color: C.danger,  desc: "No unsubstantiated eco-claims. Fines up to 4% turnover." },
  { id: "gpsr",    name: "GPSR",          full: "General Product Safety",       date: "Dec 2024", upcoming: false, color: C.success, desc: "Product safety statements & GPSR-compliant listings." },
  { id: "eudr",    name: "EUDR",          full: "EU Deforestation Regulation",  date: "Jan 2025", upcoming: false, color: C.success, desc: "Due diligence for wood, palm, soy, coffee & more." },
  { id: "eaa",     name: "Accessibility", full: "European Accessibility Act",   date: "Jun 2025", upcoming: false, color: C.gold,    desc: "WCAG 2.1 AA — screen readers, keyboard, contrast." },
  { id: "omnibus", name: "EU Omnibus",    full: "EU Omnibus Pricing Directive", date: "Live",     upcoming: false, color: C.success, desc: "30-day lowest price display & review authenticity." },
  { id: "dsa",     name: "DSA",           full: "Digital Services Act",         date: "Live",     upcoming: false, color: C.success, desc: "Transparent ads, algorithm disclosures & moderation." },
  { id: "dma",     name: "DMA",           full: "Digital Markets Act",          date: "Live",     upcoming: false, color: C.success, desc: "Fair practices for large platform operators." },
] as const;

// ─── Feature showcases ─────────────────────────────────────────────────────
const SHOWCASES = [
  {
    tag: "AI Scanner",
    headline: "Find violations before regulators do",
    body: "Our AI scans every product listing in real time — catching greenwashing phrases, missing safety statements, and accessibility gaps the moment they appear.",
    bullets: ["Scans 1,000+ products in under 60 seconds", "Detects 200+ violation patterns", "Explains every finding in plain English"],
    image: "/features/ai-scanner-nb2.png",
    imageAlt: "AI compliance scanner interface",
    flip: false,
  },
  {
    tag: "27 Countries",
    headline: "One dashboard. Every EU market.",
    body: "Enforcement intensity varies by country. EUGuard maps your risk exposure across all 27 EU member states so you know exactly where to act first.",
    bullets: ["Country-by-country risk heatmap", "Jurisdiction-specific rule sets", "Updated as new national laws pass"],
    image: "/features/eu-map-nb2.png",
    imageAlt: "EU country compliance map",
    flip: true,
  },
  {
    tag: "Auto-Fix",
    headline: "AI-generated fixes, one click to apply",
    body: "Don't just find problems — fix them. EUGuard drafts compliant replacements for violating text and flags unsafe product images, ready for you to approve.",
    bullets: ["Rewrite suggestions for every violation", "Before / after preview", "Batch-apply across your entire catalog"],
    image: "/features/before-after-nb2.png",
    imageAlt: "Before and after compliance fix preview",
    flip: false,
  },
  {
    tag: "8 Languages",
    headline: "Compliance in every language you sell in",
    body: "EU regulations apply in the buyer's language. EUGuard checks your listings in English, German, French, Spanish, Italian, Dutch, Polish, and Swedish.",
    bullets: ["Native-language violation detection", "Translated fix suggestions", "Locale-aware legal phrase library"],
    image: "/features/multi-language-nb2.png",
    imageAlt: "Multi-language compliance checking",
    flip: true,
  },
] as const;

// ─── Pricing ───────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Try EUGuard risk-free",
    cta: "Install Free",
    highlight: false,
    features: ["Up to 50 products scanned", "Green Claims + GPSR checks", "Weekly scan", "Email report"],
  },
  {
    name: "Growth",
    price: "$19",
    period: "/mo",
    desc: "For growing EU stores",
    cta: "Start Free Trial",
    highlight: false,
    features: ["Up to 500 products", "All 7 regulations", "Daily scans", "AI fix suggestions", "27-country risk map", "Priority email support"],
  },
  {
    name: "Professional",
    price: "$49",
    period: "/mo",
    desc: "Full compliance coverage",
    cta: "Start Free Trial",
    highlight: true,
    features: ["Up to 5,000 products", "All 7 regulations", "Real-time monitoring", "1-click auto-fix", "8-language scanning", "Evidence archive", "Slack & email alerts", "Live chat support"],
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/mo",
    desc: "Multi-store & agencies",
    cta: "Contact Sales",
    highlight: false,
    features: ["Unlimited products", "Unlimited stores", "White-label reports", "Custom regulation rules", "API access", "Dedicated compliance advisor", "SLA guarantee"],
  },
] as const;

// ─── FAQ ───────────────────────────────────────────────────────────────────
const FAQ = [
  { q: "When does the Green Claims Directive take effect?", a: "September 27, 2026. After that date, any unsubstantiated environmental claim — 'eco-friendly', 'sustainable', 'carbon neutral' — can trigger fines up to 4% of annual EU turnover." },
  { q: "Which Shopify stores need to comply?", a: "Any store selling to EU consumers, regardless of where the store is based. If you ship to Germany, France, the Netherlands, or any other EU country, EU regulations apply to you." },
  { q: "How does the AI scanning work?", a: "EUGuard connects to your Shopify store via the official API and reads your product titles, descriptions, tags, and images. Our AI model — trained on the full text of all 7 directives — scores each listing and explains any violations." },
  { q: "What happens when I fix a violation — will EUGuard re-check?", a: "Yes. EUGuard monitors your store continuously on Professional plans. When you apply a fix, the next scan verifies the violation is resolved and updates your compliance score." },
  { q: "Does EUGuard work with all Shopify plan tiers?", a: "Yes — Basic, Shopify, Advanced, and Plus. EUGuard is a Shopify app that works within the standard Shopify Partner framework." },
  { q: "Is my store data kept private?", a: "EUGuard only reads product data necessary for compliance checks. We never store payment information, customer data, or order details. All data is processed on EU-based infrastructure." },
] as const;

// ══════════════════════════════════════════════════════════════════════════════
// Page
// ══════════════════════════════════════════════════════════════════════════════

export default function HomePage() {
  return (
    <div style={{ backgroundColor: C.surface, color: C.text, fontFamily: "var(--font-heading)", overflowX: "hidden" }}>
      <ScrollAnimator />

      {/* ── Urgency Banner ─────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: C.gold, color: "#000", padding: "10px 16px", textAlign: "center", fontSize: "0.8125rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <span className="urgency-dot" style={{ backgroundColor: "#000" }} />
        <span>Green Claims Directive enforcement begins in <DaysUntilEnforcement /> — fines up to 4% of turnover</span>
        <a href="#pricing" style={{ textDecoration: "underline", opacity: 0.65, color: "#000" }}>Protect your store →</a>
      </div>

      {/* ── Nav ───────────────────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(4,10,17,0.9)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <EUGuardLogo size={34} nameSize="text-base" />
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {(["Features", "Regulations", "Pricing"] as const).map((label) => {
              const href = label === "Pricing" ? "/pricing" : `#${label.toLowerCase()}`;
              return (
                <a key={label} href={href} style={{ color: C.muted, textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
                  {label}
                </a>
              );
            })}
          </nav>
          <a href="https://app.euguard.ai/onboarding" style={{ backgroundColor: C.gold, color: "#000", padding: "8px 20px", borderRadius: 8, fontSize: "0.875rem", fontWeight: 700, textDecoration: "none" }}>
            Install Free
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

        {/* EU stars ring — background right */}
        <div style={{ position: "absolute", top: "50%", right: "-8%", transform: "translateY(-50%)", width: 680, height: 680, pointerEvents: "none", zIndex: 0 }}>
          <EUStarsRing size={680} opacity={0.2} />
        </div>

        {/* Ambient glow orbs */}
        <div className="animate-glow-pulse" style={{ position: "absolute", top: "15%", left: "3%", width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${C.brand}14 0%, transparent 70%)`, filter: "blur(64px)", pointerEvents: "none", zIndex: 0 }} />
        <div className="animate-glow-pulse delay-300" style={{ position: "absolute", bottom: "10%", right: "25%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}0E 0%, transparent 70%)`, filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1, width: "100%" }}>

          {/* Left: copy */}
          <div>
            <div className="animate-fade-in" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: `${C.brand}20`, border: `1px solid ${C.brand}40`, borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.gold, flexShrink: 0 }} className="animate-node-pulse" />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: C.goldLight, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Green Claims Directive · Sep 27, 2026
              </span>
            </div>

            <h1 className="animate-fade-in delay-100" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em" }}>
              7 EU Regulations.<br />
              1 Dashboard.<br />
              <span className="text-gradient-gold">0 Fines.</span>
            </h1>

            <p className="animate-fade-in delay-200" style={{ fontSize: "1.0625rem", color: C.muted, lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              EUGuard scans your Shopify store against every active EU compliance directive — catching greenwashing, product safety gaps, and accessibility violations before regulators do.
            </p>

            <div className="animate-fade-in delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="https://app.euguard.ai/onboarding" className="btn-gold" style={{ backgroundColor: C.gold, color: "#000", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Install Free — No credit card
              </a>
              <a href="#features" style={{ backgroundColor: "transparent", color: C.text, padding: "14px 28px", borderRadius: 10, fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", border: `1px solid ${C.border}`, display: "inline-flex", alignItems: "center", gap: 8 }}>
                See how it works →
              </a>
            </div>

            <div className="animate-fade-in delay-400" style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              {["500+ stores protected", "7 regulations", "27 countries", "Free to start"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: C.dimmed }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5L5 9.5L11 3.5" stroke={C.success} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: countdown + dashboard image */}
          <div className="animate-fade-in delay-200" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Countdown */}
            <div style={{ backgroundColor: C.elevated, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span className="urgency-dot" />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>Green Claims Directive — Time remaining</span>
              </div>
              <CountdownTimer />
              <p style={{ marginTop: 14, fontSize: "0.8rem", color: C.dimmed, lineHeight: 1.55 }}>
                After Sep 27, 2026, unsubstantiated eco-claims can result in fines up to{" "}
                <strong style={{ color: C.danger }}>4% of annual EU turnover</strong>.
              </p>
            </div>

            {/* Hero app screenshot */}
            <div className="animate-float-slow" style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: `0 24px 80px ${C.brand}20` }}>
              <Image
                src="/features/hero-shield-nb2.png"
                alt="EUGuard compliance dashboard"
                width={560}
                height={360}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          REGULATION TIMELINE
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="regulations" style={{ backgroundColor: C.elevated, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div data-animate style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: C.brandLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>EU Regulatory Calendar</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>7 regulations. All covered.</h2>
            <p style={{ color: C.muted, fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>EUGuard monitors every active EU e-commerce directive — and adds new ones the day they pass.</p>
          </div>

          <div data-animate style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {REGULATIONS.map((r) => (
              <div key={r.id} style={{ backgroundColor: C.card, border: `1px solid ${r.upcoming ? `${C.danger}40` : C.border}`, borderRadius: 12, padding: "20px 22px", position: "relative", overflow: "hidden" }}>
                {r.upcoming && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${C.danger}, ${C.gold})` }} />
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: r.color, letterSpacing: "0.07em", textTransform: "uppercase" }}>{r.name}</span>
                  <span style={{ fontSize: "0.68rem", fontWeight: 600, color: r.upcoming ? C.danger : C.success, backgroundColor: r.upcoming ? `${C.danger}18` : `${C.success}18`, padding: "2px 8px", borderRadius: 100 }}>
                    {r.upcoming ? `⚠ ${r.date}` : "✓ Live"}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: C.text, marginBottom: 6 }}>{r.full}</p>
                <p style={{ fontSize: "0.8rem", color: C.muted, lineHeight: 1.55 }}>{r.desc}</p>
                {r.upcoming && (
                  <div className="timeline-node-urgent" style={{ position: "absolute", right: 14, bottom: 14, width: 9, height: 9, borderRadius: "50%", backgroundColor: C.danger }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div data-animate style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: C.brandLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Simple Setup</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Up and running in 2 minutes</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              { n: "01", title: "Install from Shopify", body: "One-click install from the Shopify App Store. EUGuard connects to your store instantly — no code, no configuration.", icon: "🛍" },
              { n: "02", title: "AI scans your catalog", body: "EUGuard reads every product listing and checks it against all 7 EU directives. First scan completes in under 60 seconds.", icon: "🔍" },
              { n: "03", title: "Fix violations, stay clean", body: "Review AI-generated fixes, apply them with one click, and get alerts whenever new violations appear in your store.", icon: "✅" },
            ].map((step, i) => (
              <div key={step.n} data-animate className="step-card" style={{ backgroundColor: C.elevated, border: `1px solid ${C.border}`, borderRadius: 16, padding: "32px 24px" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: `${C.brand}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: 20 }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: C.brand, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Step {step.n}</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, marginBottom: 10, color: C.text }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: C.muted, lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURE SHOWCASES
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="features" style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          {SHOWCASES.map((s, i) => (
            <div key={s.tag} data-animate style={{ display: "grid", gridTemplateColumns: s.flip ? "1fr 1fr" : "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 96 }}>

              {/* Image — conditionally swap order */}
              {!s.flip && (
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: -24, borderRadius: 28, background: `radial-gradient(circle, ${i % 2 === 0 ? C.brand : C.gold}12 0%, transparent 65%)`, filter: "blur(48px)", zIndex: 0 }} />
                  <div className="scan-wrapper" style={{ position: "relative", zIndex: 1, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: `0 20px 60px rgba(0,0,0,0.4)` }}>
                    <Image src={s.image} alt={s.imageAlt} width={560} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
              )}

              {/* Text */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: `${C.brand}18`, border: `1px solid ${C.brand}30`, borderRadius: 100, padding: "5px 14px", marginBottom: 18 }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: C.brandLight, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.tag}</span>
                </div>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14, lineHeight: 1.2, color: C.text }}>{s.headline}</h2>
                <p style={{ fontSize: "0.9375rem", color: C.muted, lineHeight: 1.75, marginBottom: 28 }}>{s.body}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.875rem", color: C.muted }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                        <circle cx="9" cy="9" r="9" fill={`${C.brand}28`} />
                        <path d="M5.5 9L7.5 11L12.5 6.5" stroke={C.brandLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image — right side when flip=true */}
              {s.flip && (
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: -24, borderRadius: 28, background: `radial-gradient(circle, ${i % 2 === 0 ? C.brand : C.gold}12 0%, transparent 65%)`, filter: "blur(48px)", zIndex: 0 }} />
                  <div className="scan-wrapper" style={{ position: "relative", zIndex: 1, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: `0 20px 60px rgba(0,0,0,0.4)` }}>
                    <Image src={s.image} alt={s.imageAlt} width={560} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="pricing" style={{ backgroundColor: C.elevated, borderTop: `1px solid ${C.border}`, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div data-animate style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: C.brandLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Pricing</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>Start free. Scale as you grow.</h2>
            <p style={{ color: C.muted, fontSize: "1rem" }}>14-day free trial on all paid plans. Cancel anytime.</p>
          </div>

          <div data-animate style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {PLANS.map((plan) => (
              <div key={plan.name} style={{ backgroundColor: plan.highlight ? `${C.brand}14` : C.card, border: `1px solid ${plan.highlight ? `${C.brand}80` : C.border}`, borderRadius: 16, padding: "32px 22px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                {plan.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${C.brand}, ${C.brandLight})` }} />}
                {plan.highlight && <div style={{ position: "absolute", top: 12, right: 12, backgroundColor: C.brand, color: "#fff", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 100 }}>Most Popular</div>}
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: plan.highlight ? C.brandLight : C.dimmed, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 4 }}>
                  <span style={{ fontSize: "1.875rem", fontWeight: 800, color: C.text }}>{plan.price}</span>
                  {plan.period && <span style={{ fontSize: "0.875rem", color: C.muted }}>{plan.period}</span>}
                </div>
                <p style={{ fontSize: "0.8rem", color: C.dimmed, marginBottom: 22 }}>{plan.desc}</p>
                <a href="https://app.euguard.ai/onboarding" className={plan.highlight ? "btn-gold" : ""} style={{ backgroundColor: plan.highlight ? C.gold : "transparent", color: plan.highlight ? "#000" : C.text, border: plan.highlight ? "none" : `1px solid ${C.border}`, padding: "11px 0", borderRadius: 8, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", display: "block", textAlign: "center", marginBottom: 22 }}>
                  {plan.cta}
                </a>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.8rem", color: C.muted }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M2 7L5 10L12 3" stroke={C.success} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          URGENCY CTA BAND
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${C.brand}14 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div data-animate style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, backgroundColor: `${C.danger}16`, border: `1px solid ${C.danger}30`, borderRadius: 100, padding: "6px 16px" }}>
            <span className="urgency-dot" />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: C.danger, letterSpacing: "0.07em", textTransform: "uppercase" }}>Enforcement begins in <DaysUntilEnforcement /></span>
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 18, lineHeight: 1.15 }}>
            Your competitors are already<br />checking their compliance.
          </h2>
          <p style={{ fontSize: "1rem", color: C.muted, marginBottom: 32, lineHeight: 1.7 }}>
            Don&apos;t wait for a regulator to find what EUGuard would have caught in 60 seconds.
          </p>
          <a href="https://app.euguard.ai/onboarding" className="btn-gold" style={{ backgroundColor: C.gold, color: "#000", padding: "15px 40px", borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "inline-block" }}>
            Install EUGuard — It&apos;s Free
          </a>
          <p style={{ marginTop: 14, fontSize: "0.8rem", color: C.dimmed }}>Free tier available. No credit card required.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.elevated, borderTop: `1px solid ${C.border}`, padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div data-animate style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Frequently asked questions</h2>
          </div>
          <div data-animate style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQ.map((item) => (
              <details key={item.q} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
                <summary style={{ padding: "16px 22px", cursor: "pointer", fontWeight: 600, fontSize: "0.9375rem", color: C.text, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  {item.q}
                  <span style={{ color: C.dimmed, fontSize: "1.25rem", flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: "14px 22px 16px", color: C.muted, fontSize: "0.875rem", lineHeight: 1.75, borderTop: `1px solid ${C.border}` }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "44px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div>
            <EUGuardLogo size={30} nameSize="text-sm" />
            <p style={{ color: C.dimmed, fontSize: "0.8rem", marginTop: 8 }}>
              EU compliance monitoring for Shopify stores. A product by{" "}
              <a href="https://plugkit.io" style={{ color: C.muted, textDecoration: "none" }}>PlugKit</a>.
            </p>
          </div>
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Pricing", "/pricing"]].map(([label, href]) => (
              <a key={href} href={href} style={{ color: C.dimmed, textDecoration: "none", fontSize: "0.8rem" }}>{label}</a>
            ))}
          </nav>
          <p style={{ color: C.dimmed, fontSize: "0.75rem" }}>© {new Date().getFullYear()} PlugKit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
