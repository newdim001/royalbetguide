import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import CookieConsent from "./components/CookieConsent";
import HreflangLinks from "./components/HreflangLinks";

export const metadata: Metadata = {
  metadataBase: new URL("https://royalbetguide.com"),
  title: {
    default: "Royal Bet Guide — Trusted Casino Reviews 2026",
    template: "%s | Royal Bet Guide",
  },
  description:
    "Expert casino and betting reviews. Compare top online casinos, claim exclusive bonuses, and read trusted guides by industry experts.",
  openGraph: {
    siteName: "Royal Bet Guide",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og/og-default.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Royal Bet Guide",
    url: "https://royalbetguide.com",
    logo: "https://royalbetguide.com/logo.svg",
    description: "Expert casino reviews, betting guides, and bonus comparisons.",
    foundingDate: "2026",
    slogan: "Your Trusted Casino Review Guide",
    knowsAbout: ["Online Gambling", "Casino Reviews", "Sports Betting", "Slot Games"],
    sameAs: [],
    address: { "@type": "PostalAddress", addressLocality: "Online" },
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Royal Bet Guide",
    url: "https://royalbetguide.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://royalbetguide.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Dynamic hreflang tags */}
        <HreflangLinks />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
        />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W4Y4QR2FTW" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W4Y4QR2FTW');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
