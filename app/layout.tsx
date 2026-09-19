import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, LICENSE_INFO } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

// ============================================
// METADATA — canonical dihapus dari root
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "jun88",
    "jun88 demo",
    "demo slot jun88",
    "jun88-id.online",
    "jun88 id online",
    "demo slot gratis",
    "demo slot tanpa deposit",
    "slot demo pg soft",
    "slot demo pragmatic play",
    "review slot demo",
    "uji strategi slot",
  ],
  authors: [{ name: `Tim ${SITE_CONFIG.name}`, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ✅ Google Search Console Verification
  verification: {
    google: "6nzbiJy4ba-BvRSNKKUnDNTh5pEf6WXwjO89_9K4BjA",
  },
  // canonical DIHAPUS dari root — akan di-set per-halaman
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/banner/og-image.webp",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/banner/og-image.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0524",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
};

// ============================================
// SCHEMA.ORG — Organization + WebSite + License
// ============================================
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  alternateName: "Jun88-id.online",
  url: SITE_CONFIG.domain,
  identifier: "jun88-id-online",
  logo: `${SITE_CONFIG.domain}/brand/logo-jun88-id-online.webp`,
  description: SITE_CONFIG.description,
  foundingDate: LICENSE_INFO.issued,
  founder: {
    "@type": "Organization",
    name: LICENSE_INFO.operator,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: LICENSE_INFO.address,
    addressCountry: "CW",
  },
  // Lisensi resmi — sinyal trust untuk YMYL
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "License",
    name: `Lisensi ${LICENSE_INFO.regulator}`,
    identifier: LICENSE_INFO.licenseNumber,
    recognizedBy: {
      "@type": "Organization",
      name: LICENSE_INFO.regulator,
    },
    validFrom: LICENSE_INFO.issued,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  inLanguage: "id-ID",
  description: SITE_CONFIG.description,
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} scroll-pt-24`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <a href="#konten-utama" className="skip-link">
          Lompat ke konten utama
        </a>
        <Header />
        <main id="konten-utama">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}