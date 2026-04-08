import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./marketing.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "EUGuard — EU Compliance for Shopify Stores",
    template: "%s | EUGuard",
  },
  description:
    "Automated EU compliance monitoring for Shopify. Detect greenwashing violations, accessibility gaps, and consumer protection issues before regulators do.",
  keywords: [
    "EU compliance Shopify",
    "greenwashing detection",
    "Green Claims Directive",
    "EAA accessibility",
    "WCAG Shopify",
    "EU Omnibus pricing",
    "Shopify compliance app",
    "consumer protection EU",
    "UCPD compliance",
    "European Accessibility Act",
  ],
  authors: [{ name: "SoftBlaze" }],
  creator: "SoftBlaze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://euguard.ai",
    siteName: "EUGuard",
    title: "EUGuard — EU Compliance for Shopify Stores",
    description:
      "Automated EU compliance monitoring for Shopify. Detect greenwashing, accessibility, and consumer protection issues.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EUGuard — EU Compliance for Shopify Stores",
    description:
      "Automated EU compliance monitoring for Shopify. Greenwashing detection, accessibility audits, consumer protection scanning.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-slate-950 text-white antialiased font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
