import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimator } from "@/components/scroll-animator";

export const metadata: Metadata = {
  title: "EUGuard by PlugKit — EU Compliance Monitoring for Shopify",
  description:
    "AI-powered compliance across 7 EU regulations, 27 countries, and 8 languages. Greenwashing detection (Green Claims Directive 2024/825), GPSR safety data, EUDR deforestation tracking, EAA accessibility audits, Omnibus pricing checks. Avoid fines up to 4% of turnover.",
};

// Direct install flow — not published on App Store yet
// Once listed, change to: https://apps.shopify.com/euguard
const SHOPIFY_APP_URL = "https://app.euguard.ai/onboarding";

// ---------------------------------------------------------------------------
// Data — Hero
// ---------------------------------------------------------------------------

const HERO_STATS = [
  { value: "7", label: "EU Regulations Monitored" },
  { value: "27", label: "EU Member States" },
  { value: "8", label: "Languages Scanned" },
  { value: "<60s", label: "Setup to First Scan" },
];

// ---------------------------------------------------------------------------
// Data — Feature Showcase (alternating sections with NB2 images)
// ---------------------------------------------------------------------------

const SHOWCASE_SECTIONS = [
  {
    image: "/features/hero-shield-nb2.png",
    alt: "EU compliance shield with floating regulation documents and checkmarks",
    badge: "7 Regulations",
    title: "One App. Seven EU Regulations. Zero Blind Spots.",
    description:
      "EUGuard monitors your entire Shopify catalog against the Green Claims Directive (2024/825), GPSR (2023/988), EUDR (2023/1115), EAA (2019/882), Omnibus Directive (2019/2161), Consumer Rights Directive (2011/83/EU), and UCPD (2005/29/EC). Every product, every locale, every regulation — checked automatically.",
    bullets: [
      "Greenwashing claims flagged with confidence scores and directive references",
      "GPSR responsible person data validation per product",
      "EUDR commodity detection across 7 categories (wood, rubber, palm oil, coffee, cocoa, soy, cattle)",
    ],
  },
  {
    image: "/features/ai-scanner-nb2.png",
    alt: "AI scanning engine analyzing product descriptions with red flags transforming to green checkmarks",
    badge: "AI-Powered",
    title: "AI That Reads Like a Regulator",
    description:
      "NLP engine trained on EU regulatory language detects unsubstantiated claims — 'eco-friendly', 'sustainable', 'natural', 'carbon neutral' — and scores them by confidence and severity. Each flag links to the exact directive, article, and paragraph. GPT-4o vision scans product images for misleading eco-labels and certifications.",
    bullets: [
      "40%+ false claim detection rate on average Shopify stores",
      "Image scanning catches misleading leaf icons, fake eco-badges, and greenwashing packaging",
      "Every finding cites the specific EU directive article (e.g., UCPD Art. 6(1)(a))",
    ],
  },
  {
    image: "/features/multi-language-nb2.png",
    alt: "Eight document cards with country flags showing multi-language compliance scanning",
    badge: "8 Languages",
    title: "Scans Every Language Your Store Speaks",
    description:
      "Auto-detects and scans all 8 EU languages separately with localized claim patterns. German: 'klimaneutral', 'umweltfreundlich'. French: 'ecologique', 'neutre en carbone'. Spanish: 'ecologico', 'sostenible'. AI-generated fixes are written back in the same language as the original text.",
    bullets: [
      "English, Deutsch, Francais, Espanol, Italiano, Polski, Nederlands, Portugues",
      "Each locale scanned with language-specific greenwashing patterns and legal terms",
      "Fixes generated in-language — no manual translation needed",
    ],
  },
  {
    image: "/features/eu-map-nb2.png",
    alt: "EU map showing 27 member states with colored compliance status indicators",
    badge: "27 Countries",
    title: "Per-Country Rules. Not Just EU-Wide.",
    description:
      "EU directives set the floor. National laws go further. EUGuard applies country-specific regulations automatically: Germany's UWG bans 'klimaneutral' without proof (BGH ruling, 2024). France's Loi Climat Art. 12 prohibits 'carbon neutral' without certification (2023). Netherlands' ACM enforces a 5-rule sustainability claims framework. Your compliance heatmap shows exactly where you pass and fail.",
    bullets: [
      "Germany (UWG): 'klimaneutral' banned without scientific proof since 2024",
      "France (Loi Climat): 'carbon neutral' claims require third-party certification",
      "Italy (AGCM): fines up to EUR 10M for misleading environmental claims",
      "Denmark (Forbrugerombudsmanden): strictest Nordic green marketing enforcement",
      "Netherlands (ACM): 5-rule framework for all sustainability claims",
    ],
  },
  {
    image: "/features/before-after-nb2.png",
    alt: "Before and after compliance score transformation from 40% to 92%",
    badge: "Auto-Fix",
    title: "Don't Just Find Problems. Fix Them.",
    description:
      "One click rewrites non-compliant descriptions with substantiated, regulation-compliant language. You see the before/after diff with score delta. The fix pushes directly to Shopify — no copy-pasting. Average compliance score improvement: 40% to 92% in a single pass.",
    bullets: [
      "AI rewrites use substantiated language that passes directive checks",
      "Before/after diff with compliance score delta shown before you approve",
      "Every fix logged in immutable audit trail with timestamp and regulation reference",
    ],
  },
  {
    image: "/features/hero-shield-nb2.png",
    alt: "Storefront trust badge showing EU compliance verification with certifications and evidence",
    badge: "Storefront",
    title: "Trust Badge on Every Product Page",
    description:
      "Customers see a verified compliance badge directly on your product pages. Certifications, evidence documents, and regulation checks — all visible. Builds trust, increases conversions. Badge only appears when ALL claims are substantiated.",
    bullets: [
      "Green shield with checkmark appears on fully verified products only",
      "Lists certifications (FSC, GOTS, EU Ecolabel, etc.) attached to substantiated claims",
      "Public verification page with QR code for each product — customers can verify independently",
    ],
  },
  {
    image: "/features/before-after-nb2.png",
    alt: "PDF substantiation dossier export with evidence documents and audit trail",
    badge: "Art. 3 Compliant",
    title: "Audit-Ready Evidence for Regulators",
    description:
      "Generate PDF substantiation dossiers per product — every claim, every certificate, every AI decision logged. Bulk ZIP export for annual audits. Public verification pages with QR codes. When a regulator asks, you're ready in seconds.",
    bullets: [
      "One-click PDF dossier per product: claims, evidence, AI decisions, timeline",
      "Bulk ZIP export for annual audits — all products, all evidence, one download",
      "Immutable audit trail: every scan, fix, and verification timestamped and signed",
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Regulations (all 7, with exact directive numbers)
// ---------------------------------------------------------------------------

const REGULATIONS = [
  {
    directive: "(EU) 2024/825",
    name: "Green Claims Directive (ECGT)",
    status: "Enforcement: Sep 2026",
    urgency: "upcoming" as const,
    description:
      "All environmental claims must be substantiated with verifiable evidence before publication. Covers 'eco-friendly', 'sustainable', 'green', 'carbon neutral', 'climate positive', and similar terms. Fines up to 4% of annual EU turnover.",
    penalties: "Up to 4% of annual turnover",
  },
  {
    directive: "(EU) 2023/988",
    name: "General Product Safety Regulation (GPSR)",
    status: "Active since Dec 2024",
    urgency: "now" as const,
    description:
      "Every product sold in the EU must list a responsible person (EU-based) with name, address, and contact details. Products must carry traceability data including batch numbers and supply chain documentation.",
    penalties: "Product recalls, market bans",
  },
  {
    directive: "(EU) 2023/1115",
    name: "EU Deforestation Regulation (EUDR)",
    status: "Enforcement: Dec 2025",
    urgency: "soon" as const,
    description:
      "Due diligence obligations for 7 commodities: wood, rubber, palm oil, coffee, cocoa, soy, and cattle-derived products. Sellers must prove products are deforestation-free with geolocation data.",
    penalties: "Fines + import/export bans",
  },
  {
    directive: "(EU) 2019/882",
    name: "European Accessibility Act (EAA)",
    status: "Active since Jun 2025",
    urgency: "now" as const,
    description:
      "All e-commerce services must meet WCAG 2.1 Level AA accessibility standards. Covers perceivability, operability, understandability, and robustness. Applies to product pages, checkout, account management.",
    penalties: "Set per member state (varies)",
  },
  {
    directive: "(EU) 2019/2161",
    name: "Omnibus Directive",
    status: "Active since May 2022",
    urgency: "now" as const,
    description:
      "Pricing transparency: all discounted products must show the lowest price from the prior 30 days. Fake reviews and undisclosed paid reviews are prohibited. Online marketplace transparency requirements.",
    penalties: "Up to 4% of annual turnover",
  },
  {
    directive: "2011/83/EU",
    name: "Consumer Rights Directive",
    status: "Active",
    urgency: "now" as const,
    description:
      "Pre-contractual information requirements: total price including taxes, delivery costs, right of withdrawal (14 days), seller identity and contact details. Applies to all distance selling across the EU.",
    penalties: "Contract voidability + national fines",
  },
  {
    directive: "2005/29/EC",
    name: "Unfair Commercial Practices Directive (UCPD)",
    status: "Active",
    urgency: "now" as const,
    description:
      "Prohibits misleading commercial practices including unsubstantiated environmental claims, fake urgency tactics ('Only 2 left!'), hidden advertising, dark patterns in UI, and bait-and-switch pricing.",
    penalties: "National enforcement (varies)",
  },
];

// ---------------------------------------------------------------------------
// Data — Country Coverage (all 27 EU member states)
// ---------------------------------------------------------------------------

const COUNTRY_GROUPS = [
  {
    level: "Strict Enforcement",
    color: "text-danger-light",
    bgColor: "bg-danger/10",
    borderColor: "border-danger/20",
    description: "Proactive regulators with established case law and high fines",
    countries: [
      { name: "Germany", flag: "DE", detail: "UWG + BGH: 'klimaneutral' banned without proof (2024)" },
      { name: "France", flag: "FR", detail: "Loi Climat Art. 12: 'carbon neutral' banned without certification" },
      { name: "Netherlands", flag: "NL", detail: "ACM 5-rule sustainability claims framework" },
      { name: "Italy", flag: "IT", detail: "AGCM fines up to EUR 10M for misleading green claims" },
      { name: "Austria", flag: "AT", detail: "VKI active enforcement aligned with German UWG precedent" },
      { name: "Denmark", flag: "DK", detail: "Forbrugerombudsmanden: strictest Nordic green marketing rules" },
      { name: "Sweden", flag: "SE", detail: "Konsumentverket: aggressive greenwashing enforcement" },
      { name: "Belgium", flag: "BE", detail: "SPF Economie: frequent enforcement actions on eco-claims" },
    ],
  },
  {
    level: "Moderate Enforcement",
    color: "text-amber-300",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    description: "Established frameworks with growing enforcement activity",
    countries: [
      { name: "Spain", flag: "ES", detail: "CNMC consumer protection enforcement" },
      { name: "Poland", flag: "PL", detail: "UOKiK: increasing digital commerce scrutiny" },
      { name: "Portugal", flag: "PT", detail: "ASAE + DGPC consumer protection framework" },
      { name: "Ireland", flag: "IE", detail: "CCPC: growing focus on digital compliance" },
      { name: "Finland", flag: "FI", detail: "KKV consumer ombudsman environmental claims guidance" },
      { name: "Luxembourg", flag: "LU", detail: "CEC cross-border enforcement cooperation" },
    ],
  },
  {
    level: "Developing Enforcement",
    color: "text-brand-light",
    bgColor: "bg-brand/10",
    borderColor: "border-brand/20",
    description: "Transposing EU directives into national law, enforcement ramping up",
    countries: [
      { name: "Greece", flag: "GR", detail: null },
      { name: "Czech Republic", flag: "CZ", detail: null },
      { name: "Romania", flag: "RO", detail: null },
      { name: "Hungary", flag: "HU", detail: null },
      { name: "Bulgaria", flag: "BG", detail: null },
      { name: "Croatia", flag: "HR", detail: null },
      { name: "Slovakia", flag: "SK", detail: null },
      { name: "Slovenia", flag: "SI", detail: null },
      { name: "Lithuania", flag: "LT", detail: null },
      { name: "Latvia", flag: "LV", detail: null },
      { name: "Estonia", flag: "EE", detail: null },
      { name: "Cyprus", flag: "CY", detail: null },
      { name: "Malta", flag: "MT", detail: null },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — Features Grid (8 feature cards)
// ---------------------------------------------------------------------------

const FEATURES = [
  {
    icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
    title: "AI Greenwashing Scanner",
    description:
      "NLP + GPT-4o vision detect unsubstantiated claims. Confidence scoring, severity levels, directive references. Green Claims Directive (2024/825) + UCPD (2005/29/EC) rule engine.",
  },
  {
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.97.633-3.792 1.708-5.274",
    title: "8-Language Scanning",
    description:
      "Auto-detects EN, DE, FR, ES, IT, PL, NL, PT. Scans each locale with localized claim patterns. AI fixes generated in the same language as the original text.",
  },
  {
    icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
    title: "27-Country Rule Engine",
    description:
      "Per-country national rules layered on EU-wide law. Germany UWG, France Loi Climat, Netherlands ACM, Italy AGCM, Denmark Forbrugerombudsmanden. Compliance heatmap across all 27 states.",
  },
  {
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
    title: "AI Auto-Fix",
    description:
      "One-click rewrites non-compliant text with substantiated language. Before/after diff with score delta. Pushes directly to Shopify. Average improvement: 40% to 92%.",
  },
  {
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    title: "GPSR Safety Tracking",
    description:
      "Product safety data management per (EU) 2023/988. Responsible person validation, traceability data, batch numbers. Audit trail for every product in your catalog.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75",
    title: "EUDR Due Diligence",
    description:
      "Deforestation regulation (EU) 2023/1115 tracking. Commodity detection across wood, rubber, palm oil, coffee, cocoa, soy, cattle. Declaration management and geolocation proof.",
  },
  {
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
    title: "Accessibility Audit (EAA)",
    description:
      "WCAG 2.1 Level AA compliance for European Accessibility Act (2019/882). Checks all 4 POUR principles. Remediation guidance for product pages, checkout, account flows.",
  },
  {
    icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
    title: "Pricing & Consumer Rights",
    description:
      "Omnibus Directive (2019/2161) pricing transparency checks. Consumer Rights Directive (2011/83/EU) pre-contractual info validation. Dark pattern and fake urgency detection.",
  },
];

// ---------------------------------------------------------------------------
// Data — Pricing
// ---------------------------------------------------------------------------

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Try EUGuard risk-free on a small catalog",
    features: [
      "Up to 50 products",
      "Greenwashing scanner (English only)",
      "Monthly compliance scan",
      "Basic compliance dashboard",
      "Email alerts on critical issues",
    ],
    cta: "Install Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$19",
    period: "/mo",
    description: "Multi-language scanning for growing EU stores",
    features: [
      "Up to 500 products",
      "3 languages (choose from 8)",
      "10 country-specific rule sets",
      "Weekly automated scans",
      "AI fix suggestions (review + copy)",
      "Basic compliance reports",
    ],
    cta: "Start 14-Day Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/mo",
    description: "Full compliance suite for serious EU sellers",
    features: [
      "Up to 2,000 products",
      "All 8 languages",
      "All 27 EU country rules",
      "GPSR + EUDR tracking modules",
      "AI auto-fix with Shopify push",
      "Daily scans + PDF reports",
      "AI compliance chat assistant",
      "Priority email support",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/mo",
    description: "Unlimited scale, multi-store, dedicated SLA",
    features: [
      "Unlimited products",
      "Everything in Professional",
      "Image scanning (GPT-4o vision)",
      "Multi-store management",
      "REST API access",
      "Risk prediction + trend analysis",
      "Dedicated account manager",
      "SLA with 99.9% uptime guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

// ---------------------------------------------------------------------------
// Data — Competitor Comparison
// ---------------------------------------------------------------------------

const COMPETITORS = [
  { feature: "Greenwashing detection (NLP)", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Green Claims Directive 2024/825", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Multi-language scanning (8 EU languages)", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Per-country national rules (27 states)", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "GPSR responsible person tracking", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "EUDR deforestation due diligence", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "AI auto-fix to Shopify", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "WCAG 2.1 AA audit", euguard: true, siteimprove: true, accessibe: true, deque: true },
  { feature: "EU Omnibus pricing transparency", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Dark pattern / fake urgency detection", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Shopify-native app", euguard: true, siteimprove: false, accessibe: true, deque: false },
  { feature: "AI compliance chat", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Image scanning (GPT-4o vision)", euguard: true, siteimprove: false, accessibe: false, deque: false },
  { feature: "Starting price", euguard: "Free", siteimprove: "~$300/mo", accessibe: "~$49/mo", deque: "~$200/mo" },
];

// ---------------------------------------------------------------------------
// Data — FAQ
// ---------------------------------------------------------------------------

const FAQ_ITEMS = [
  {
    q: "What EU regulations does EUGuard monitor?",
    a: "Seven: (1) Green Claims Directive (EU) 2024/825 — greenwashing, enforcement Sep 2026. (2) GPSR (EU) 2023/988 — product safety, responsible person data. (3) EUDR (EU) 2023/1115 — deforestation, 7 commodities. (4) EAA (EU) 2019/882 — accessibility, WCAG 2.1 AA. (5) Omnibus Directive (EU) 2019/2161 — pricing transparency. (6) Consumer Rights Directive 2011/83/EU — pre-contractual info, 14-day withdrawal. (7) UCPD 2005/29/EC — unfair commercial practices, dark patterns. Plus country-specific national rules for all 27 EU member states.",
  },
  {
    q: "How does the AI greenwashing scanner work?",
    a: "It analyzes product titles, descriptions, and metafields using NLP to detect unsubstantiated claims like 'eco-friendly', 'sustainable', 'natural', or 'carbon neutral'. Each claim receives a confidence score (0-100%), severity level (low/medium/high/critical), and a citation to the exact directive article (e.g., UCPD Art. 6(1)(a)). Enterprise plan adds GPT-4o vision scanning for misleading eco-labels, leaf icons, and greenwashing imagery in product photos.",
  },
  {
    q: "What languages does EUGuard scan?",
    a: "Eight EU languages: English, German (Deutsch), French (Francais), Spanish (Espanol), Italian (Italiano), Polish (Polski), Dutch (Nederlands), and Portuguese (Portugues). Each locale is scanned separately with localized greenwashing patterns — for example, 'klimaneutral' and 'umweltfreundlich' in German, 'ecologique' and 'neutre en carbone' in French. AI-generated fixes are written back in the same language.",
  },
  {
    q: "What country-specific rules does EUGuard apply?",
    a: "Beyond EU-wide directives, EUGuard applies national rules: Germany's UWG bans 'klimaneutral' without scientific proof (BGH ruling, 2024). France's Loi Climat Art. 12 prohibits 'carbon neutral' claims without third-party certification (since 2023). The Netherlands' ACM enforces a 5-rule framework for sustainability claims. Italy's AGCM imposes fines up to EUR 10M. Denmark's Forbrugerombudsmanden applies the strictest Nordic green marketing standards. Rules for all 27 EU states are included.",
  },
  {
    q: "How does AI auto-fix work?",
    a: "AI rewrites non-compliant product descriptions with substantiated, regulation-compliant language. You see a side-by-side before/after diff showing exactly what changed, plus the compliance score delta (e.g., 40% to 92%). One click pushes the corrected text directly to your Shopify store via the Admin API. Every change is logged in an immutable audit trail with timestamp, original text, new text, and the regulation that triggered the fix. You always approve before any change goes live.",
  },
  {
    q: "Does EUGuard modify my Shopify store?",
    a: "Read-only by default. EUGuard only reads product data for scanning. The sole exception is AI auto-fix on Professional and Enterprise plans — when you explicitly click 'Apply Fix', it writes the corrected description to Shopify. You always see the full before/after diff and must approve each change. No automated writes ever happen without your explicit action.",
  },
  {
    q: "What fines can I face for non-compliance?",
    a: "Green Claims Directive (Sep 2026): up to 4% of annual EU turnover. Omnibus Directive: up to 4% of turnover for pricing violations. GPSR: product recalls, market withdrawal orders, and sales bans. EAA: penalties set per member state — some impose fines up to EUR 10M (e.g., Italy via AGCM). UCPD: national enforcement varies, but class-action consumer lawsuits are becoming more common. The trend across all directives is toward higher fines and stricter enforcement.",
  },
  {
    q: "How long does a compliance scan take?",
    a: "50 products in under 30 seconds. 500 products in 2-3 minutes. 2,000 products in 8-12 minutes. Multi-language adds approximately 1 second per language per product. Scans run in the background — you can continue working in Shopify admin while EUGuard processes your catalog. Daily automated scans (Professional+) run during off-peak hours.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Starter is free forever: up to 50 products, English-only greenwashing scanning, monthly automated scans, basic dashboard, and email alerts for critical issues. No credit card required. Paid plans (Growth $19/mo, Professional $49/mo, Enterprise $149/mo) all include a 14-day free trial.",
  },
  {
    q: "How is EUGuard different from accessibility-only tools like accessiBe or Siteimprove?",
    a: "Those tools focus solely on WCAG/accessibility compliance. EUGuard covers 7 EU regulations — greenwashing, product safety, deforestation, accessibility, pricing transparency, consumer rights, and unfair practices. It is the only Shopify app that combines AI greenwashing detection with per-country national rules, multi-language scanning, and one-click auto-fix. Accessibility is one module among eight, not the entire product.",
  },
];

// ---------------------------------------------------------------------------
// Data — App Screenshots
// ---------------------------------------------------------------------------

const APP_SCREENSHOTS = [
  {
    image: "/screenshots/01-dashboard.png",
    alt: "EUGuard compliance dashboard showing country grid, regulation metrics, and risk breakdown",
    title: "Compliance Dashboard",
    description: "Real-time compliance score, regulation breakdown, country heatmap, recent scan results, and top issues — all in one view.",
  },
  {
    image: "/screenshots/02-greenwashing.png",
    alt: "Greenwashing scanner interface analyzing product descriptions with flagged claims",
    title: "Greenwashing Scanner",
    description: "Enter a product description, get instant analysis with every claim flagged by confidence, severity, and regulation reference.",
  },
  {
    image: "/screenshots/08-ai-fix.png",
    alt: "AI auto-fix center showing before/after compliance score improvement",
    title: "AI Fix Center",
    description: "Before/after diff for every fix. See exactly what changes, approve with one click, push directly to Shopify.",
  },
];

// ---------------------------------------------------------------------------
// Shared SVG arrow icon
// ---------------------------------------------------------------------------

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <ScrollAnimator />

      {/* ================================================================== */}
      {/* Navigation                                                         */}
      {/* ================================================================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-heading)]">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-light text-white text-xs font-bold shadow-lg shadow-brand/20">
              EU
            </div>
            <span className="text-lg font-bold text-text-primary">EUGuard</span>
            <span className="hidden text-xs font-medium text-text-muted sm:inline">by PlugKit</span>
          </Link>

          {/* Nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            <a href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">Features</a>
            <a href="#regulations" className="text-sm text-text-secondary hover:text-white transition-colors">Regulations</a>
            <a href="#countries" className="text-sm text-text-secondary hover:text-white transition-colors">Countries</a>
            <a href="#pricing" className="text-sm text-text-secondary hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-text-secondary hover:text-white transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <Link
            href={SHOPIFY_APP_URL}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
          >
            Install Free
          </Link>
        </div>
      </nav>

      {/* ================================================================== */}
      {/* Hero                                                               */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
        {/* Background effects */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-brand/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-danger/20 bg-danger/10 px-4 py-1.5 text-sm text-danger-light">
                <span className="size-2 rounded-full bg-danger animate-pulse" />
                Green Claims Directive enforcement begins September 2026
              </div>

              <h1 className="mb-6 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.08]">
                EU Compliance{" "}
                <span className="text-gradient-brand">Automated</span>
                {" "}for Shopify
              </h1>

              <p className="mb-8 max-w-xl text-lg text-text-secondary leading-relaxed md:text-xl">
                AI-powered scanning across{" "}
                <span className="font-semibold text-text-primary">7 EU regulations</span>,{" "}
                <span className="font-semibold text-text-primary">27 member states</span>, and{" "}
                <span className="font-semibold text-text-primary">8 languages</span>.
                Detect greenwashing, manage GPSR safety data, track EUDR deforestation — before regulators levy fines of{" "}
                <span className="font-semibold text-danger-light">up to 4% of annual turnover</span>.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={SHOPIFY_APP_URL}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/30"
                >
                  Install on Shopify — Free
                  <ArrowIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-text-secondary transition-all hover:border-text-muted hover:text-white"
                >
                  See EUGuard in Action
                </a>
              </div>

              <p className="mt-5 text-sm text-text-muted">
                Free Starter plan &middot; No credit card &middot; 60-second setup
              </p>
            </div>

            {/* Right: Hero image */}
            <div className="relative" data-animate>
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/10 via-transparent to-accent/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-black/40">
                <Image
                  src="/features/hero-shield-nb2.png"
                  alt="EU compliance shield with golden stars, checkmark, and floating regulation documents"
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero stats row */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6" data-animate>
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/50 bg-surface-elevated/50 backdrop-blur-sm px-4 py-5 text-center"
              >
                <div className="text-2xl font-bold text-accent-light md:text-3xl">{stat.value}</div>
                <div className="mt-1.5 text-xs font-medium text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Showcase — "See EUGuard in Action" (alternating image+text)        */}
      {/* ================================================================== */}
      <section id="showcase" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center" data-animate>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              See EUGuard <span className="text-gradient-brand">in Action</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Seven compliance modules working together. Scan, detect, fix, prove, and export — all from inside your Shopify admin.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {SHOWCASE_SECTIONS.map((section, i) => (
              <div
                key={section.title}
                className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-animate
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand/5 to-accent/5 blur-xl" />
                    <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-2xl shadow-black/30">
                      <Image
                        src={section.image}
                        alt={section.alt}
                        width={800}
                        height={500}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 lg:max-w-lg">
                  <span className="mb-4 inline-block rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand-light uppercase tracking-wider">
                    {section.badge}
                  </span>
                  <h3 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight md:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mb-6 text-text-secondary leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-text-secondary">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Regulation Timeline — all 7 directives                             */}
      {/* ================================================================== */}
      <section id="regulations" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-danger/10 px-4 py-1.5 text-xs font-semibold text-danger-light uppercase tracking-wider">
              Compliance Deadlines
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              7 EU Regulations. The Clock Is Ticking.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-text-secondary">
              Five are already active. Two more take effect by 2026. Non-compliance means fines up to 4% of turnover, product recalls, and market bans.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-animate>
            {REGULATIONS.map((reg) => (
              <div
                key={reg.directive}
                className="group rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-brand/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      reg.urgency === "now"
                        ? "bg-danger/20 text-danger-light"
                        : reg.urgency === "soon"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-brand/20 text-brand-light"
                    }`}
                  >
                    {reg.status}
                  </span>
                </div>
                <p className="mb-1 text-xs font-mono text-text-muted">{reg.directive}</p>
                <h3 className="mb-2 font-semibold text-text-primary">{reg.name}</h3>
                <p className="mb-3 text-sm text-text-secondary leading-relaxed">{reg.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-danger-light">
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  Penalty: {reg.penalties}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Country Coverage — all 27 EU member states                         */}
      {/* ================================================================== */}
      <section id="countries" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-light uppercase tracking-wider">
              27 EU Member States
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              Every Country. Every National Rule.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-text-secondary">
              EU directives set the floor. National laws go further. EUGuard applies country-specific rules automatically — from Germany&apos;s UWG to France&apos;s Loi Climat.
            </p>
          </div>

          <div className="space-y-8" data-animate>
            {COUNTRY_GROUPS.map((group) => (
              <div key={group.level} className={`rounded-2xl border ${group.borderColor} bg-surface-elevated/50 p-6 md:p-8`}>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className={`text-lg font-bold ${group.color}`}>
                    {group.level}
                    <span className="ml-2 text-sm font-normal text-text-muted">
                      ({group.countries.length} {group.countries.length === 1 ? "country" : "countries"})
                    </span>
                  </h3>
                  <p className="text-sm text-text-muted">{group.description}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {group.countries.map((country) => (
                    <div
                      key={country.name}
                      className="rounded-lg border border-border/50 bg-surface/50 px-4 py-3 transition-all hover:border-brand/20"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-text-primary">{country.flag}</span>
                        <span className="text-sm font-semibold text-text-primary">{country.name}</span>
                      </div>
                      {country.detail && (
                        <p className="text-xs text-text-muted leading-relaxed">{country.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Features Grid — 8 modules                                          */}
      {/* ================================================================== */}
      <section id="features" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-light uppercase tracking-wider">
              8 Compliance Modules
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              Complete EU Compliance <span className="text-gradient-brand">in One App</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Eight modules working together. One dashboard. Zero guesswork. Every regulation covered.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
                data-animate
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand/10 text-brand-light transition-colors group-hover:bg-brand/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold text-text-primary">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Real App Screenshots                                               */}
      {/* ================================================================== */}
      <section id="screenshots" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-light uppercase tracking-wider">
              Inside the App
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              Built for <span className="text-gradient-brand">Shopify Admins</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Embedded directly in your Shopify admin panel. Scan products, fix issues, track compliance — without leaving your store.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3" data-animate>
            {APP_SCREENSHOTS.map((screenshot) => (
              <div key={screenshot.title} className="group">
                {/* Browser frame */}
                <div className="overflow-hidden rounded-xl border border-border/50 bg-surface-elevated shadow-2xl shadow-black/30 transition-all group-hover:-translate-y-1 group-hover:shadow-brand/10">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 border-b border-border/50 bg-surface px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <div className="size-2.5 rounded-full bg-danger/60" />
                      <div className="size-2.5 rounded-full bg-amber-500/60" />
                      <div className="size-2.5 rounded-full bg-accent/60" />
                    </div>
                    <div className="flex-1 text-center">
                      <div className="mx-auto max-w-[200px] rounded-md bg-surface-elevated/80 px-3 py-1 text-[10px] text-text-muted truncate">
                        admin.shopify.com/store/.../euguard
                      </div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src={screenshot.image}
                    alt={screenshot.alt}
                    width={800}
                    height={500}
                    className="w-full"
                  />
                </div>
                {/* Caption */}
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-text-primary">{screenshot.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Pricing                                                            */}
      {/* ================================================================== */}
      <section id="pricing" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-light uppercase tracking-wider">
              Simple Pricing
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              Plans That Scale With Your Store
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Start free. Upgrade as your catalog grows. All paid plans include a 14-day trial — no credit card required.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-animate>
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-7 transition-all ${
                  tier.highlighted
                    ? "border-accent bg-accent/5 shadow-2xl shadow-accent/10 scale-[1.02] lg:scale-[1.03]"
                    : "border-border bg-surface-elevated hover:border-brand/30"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white shadow-lg shadow-accent/30">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-1 text-lg font-bold text-text-primary">{tier.name}</h3>
                <p className="mb-5 text-sm text-text-secondary">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text-primary">{tier.price}</span>
                  {tier.period && <span className="text-text-muted">{tier.period}</span>}
                </div>
                <Link
                  href={SHOPIFY_APP_URL}
                  className={`mb-7 block rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-accent text-white hover:bg-accent-light shadow-md shadow-accent/20"
                      : "border border-border text-text-primary hover:border-text-muted hover:bg-surface-hover"
                  }`}
                >
                  {tier.cta}
                </Link>
                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Competitor Comparison                                               */}
      {/* ================================================================== */}
      <section id="compare" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-light uppercase tracking-wider">
              Comparison
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              How EUGuard <span className="text-gradient-brand">Compares</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Other tools do accessibility only. EUGuard covers the full EU compliance landscape — greenwashing, safety, deforestation, pricing, consumer rights — for a fraction of the price.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border" data-animate>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-elevated">
                  <th className="min-w-[200px] px-6 py-4 text-left font-medium text-text-secondary">Feature</th>
                  <th className="min-w-[100px] px-6 py-4 text-center font-bold text-accent-light">EUGuard</th>
                  <th className="min-w-[100px] px-6 py-4 text-center font-medium text-text-muted">Siteimprove</th>
                  <th className="min-w-[100px] px-6 py-4 text-center font-medium text-text-muted">accessiBe</th>
                  <th className="min-w-[100px] px-6 py-4 text-center font-medium text-text-muted">Deque</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50 last:border-0 hover:bg-surface-elevated/50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-text-primary">{row.feature}</td>
                    {(["euguard", "siteimprove", "accessibe", "deque"] as const).map((col) => (
                      <td key={col} className="px-6 py-3.5 text-center">
                        {typeof row[col] === "boolean" ? (
                          row[col] ? (
                            <span className={col === "euguard" ? "text-accent font-bold text-lg" : "text-text-secondary"}>
                              &#10003;
                            </span>
                          ) : (
                            <span className="text-text-muted">&mdash;</span>
                          )
                        ) : (
                          <span className={col === "euguard" ? "font-bold text-accent" : "text-text-muted"}>
                            {row[col] as string}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ                                                                */}
      {/* ================================================================== */}
      <section id="faq" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center" data-animate>
            <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-light uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3" data-animate>
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-surface-elevated transition-all hover:border-brand/20"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-medium text-text-primary transition-colors hover:text-brand-light [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronIcon className="size-5 shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="border-t border-border/50 px-6 py-5 text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Final CTA                                                          */}
      {/* ================================================================== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-t from-brand/5 via-accent/[0.02] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 text-center" data-animate>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-danger/20 bg-danger/10 px-4 py-1.5 text-sm text-danger-light">
            <span className="size-2 rounded-full bg-danger animate-pulse" />
            September 2026 deadline approaching
          </div>

          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl">
            Don&apos;t Wait for a Fine
          </h2>
          <p className="mb-8 text-lg text-text-secondary leading-relaxed md:text-xl">
            The Green Claims Directive (EU) 2024/825 takes full effect{" "}
            <span className="font-semibold text-text-primary">September 2026</span>.
            Fines up to <span className="font-semibold text-danger-light">4% of annual turnover</span>.
            Five other regulations are already active.
            Start scanning today — your first scan takes 60 seconds.
          </p>

          <Link
            href={SHOPIFY_APP_URL}
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/30"
          >
            Install EUGuard Free
            <ArrowIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <p className="mt-5 text-sm text-text-muted">
            Free Starter plan &middot; No credit card &middot; 14-day trial on all paid plans &middot; Cancel anytime
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Footer                                                             */}
      {/* ================================================================== */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-brand to-brand-light text-white text-xs font-bold">
                EU
              </div>
              <div>
                <span className="font-[family-name:var(--font-heading)] font-bold text-text-primary">EUGuard</span>
                <span className="ml-1.5 text-xs text-text-muted">by PlugKit</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#regulations" className="hover:text-white transition-colors">Regulations</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="mailto:support@euguard.ai" className="hover:text-white transition-colors">Support</a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} PlugKit. All rights reserved.
            </p>
          </div>

          {/* Regulatory disclaimer */}
          <div className="mt-8 border-t border-border/50 pt-6">
            <p className="text-center text-xs text-text-muted leading-relaxed max-w-3xl mx-auto">
              EUGuard is a compliance monitoring tool, not legal advice. Directive references are for informational purposes.
              Consult qualified legal counsel for compliance decisions. Regulation dates and penalties reflect
              publicly available information as of April 2026.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
