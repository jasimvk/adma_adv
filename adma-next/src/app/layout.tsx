import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialModal from "@/components/SocialModal";
import Analytics from "@/components/Analytics";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://admaadvertising.ae'),
  title: {
    default: "Adma Advertising LLC - Professional Printing & Promotional Products | Dubai, UAE",
    template: "%s | Adma Advertising LLC"
  },
  description: "Leading printing and advertising company in Dubai. Professional offset printing, digital printing, large format printing, custom promotional products, signage, and branded merchandise. Fast delivery across UAE.",
  keywords: [
    "printing dubai", 
    "promotional products uae", 
    "custom printing", 
    "offset printing dubai", 
    "digital printing", 
    "large format printing", 
    "branded merchandise", 
    "corporate gifts dubai",
    "business cards dubai",
    "banner printing",
    "vehicle branding",
    "promotional gifts"
  ],
  authors: [{ name: "Adma Advertising LLC" }],
  creator: "Adma Advertising LLC",
  publisher: "Adma Advertising LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://admaadvertising.ae",
    title: "Adma Advertising LLC - Professional Printing Services Dubai",
    description: "Leading printing and advertising company in Dubai offering professional printing services, promotional products, and corporate gifts.",
    siteName: "Adma Advertising LLC",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Adma Advertising - Professional Printing Services"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adma Advertising LLC - Professional Printing Services Dubai",
    description: "Leading printing and advertising company in Dubai offering professional printing services, promotional products, and corporate gifts.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adma Advertising LLC",
    "image": "https://admaadvertising.ae/images/adma-logo.png",
    "@id": "https://admaadvertising.ae",
    "url": "https://admaadvertising.ae",
    "telephone": "+971507316005",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "sameAs": [
      "https://www.facebook.com/admaadvertising",
      "https://www.instagram.com/admaadvertising"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={inter.variable}>
        <Analytics />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <SocialModal />
      </body>
    </html>
  );
}
