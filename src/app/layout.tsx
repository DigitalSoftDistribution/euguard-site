import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./marketing.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EUGuard — EU Compliance for Shopify Stores",
    template: "%s | EUGuard",
  },
  description:
    "AI-powered EU compliance monitoring for Shopify. Detect greenwashing, GPSR violations, EUDR risks, and accessibility gaps before regulators do. 7 regulations, 27 countries, 8 languages.",
  keywords: [
    "EU compliance Shopify",
    "greenwashing detection Shopify",
    "Green Claims Directive 2024",
    "GPSR compliance app",
    "EUDR deforestation Shopify",
    "EAA accessibility Shopify",
    "EU Omnibus pricing",
    "Shopify EU compliance app",
    "WCAG 2.1 Shopify",
    "Green Claims Directive enforcement 2026",
  ],
  authors: [{ name: "PlugKit" }],
  creator: "PlugKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://euguard.ai",
    siteName: "EUGuard by PlugKit",
    title: "EUGuard — 7 EU Regulations. 1 Dashboard. 0 Fines.",
    description:
      "AI-powered EU compliance for Shopify. Greenwashing detection, GPSR, EUDR, EAA, Omnibus. Green Claims Directive enforcement begins Sep 2026 — fines up to 4% of turnover.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "EUGuard — EU Compliance Monitoring for Shopify",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EUGuard — 7 EU Regulations. 1 Dashboard. 0 Fines.",
    description:
      "AI-powered EU compliance for Shopify. Green Claims Directive enforcement: Sep 2026. Fines up to 4% of annual turnover.",
    images: ["/brand/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body
        className={`min-h-screen antialiased font-[family-name:var(--font-heading)]`}
        style={{ backgroundColor: "#040A11", color: "#E3E8EE" }}
      >
        {children}
      </body>
    </html>
  );
}
