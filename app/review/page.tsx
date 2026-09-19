import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/lib/games";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Review Game — Analisis Demo Slot",
  description: `Review lengkap game demo slot dari PG Soft & Pragmatic Play — Sweet Bonanza, Wild Bandito, Pinata Wins, The Dog House, Sugar Rush, dan Ganesha Fortune. Analisis RTP, volatilitas, dan mekanisme.`,
  keywords: [
    "review game slot",
    "analisis slot demo",
    "review pg soft",
    "review pragmatic play",
    "jun88 review",
    "jun88 demo",
    "demo slot jun88",
    "demo slot gratis",
    "slot demo tanpa deposit",
  ],
  alternates: { canonical: "/review" },
  openGraph: {
    title: `Review Game | ${SITE_CONFIG.name}`,
    description: "Analisis mendalam game demo slot dari PG Soft & Pragmatic Play.",
    images: [{ url: "/banner/og-image.webp" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Review Game", item: `${SITE_CONFIG.domain}/review` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Review Game ${SITE_CONFIG.name}`,
  description: "Analisis mendalam game demo slot dari PG Soft & Pragmatic Play",
  url: `${SITE_CONFIG.domain}/review`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: games.length,
    itemListElement: games.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_CONFIG.domain}/review/${g.slug}`,
      name: g.title,
    })),
  },
};

export default function ReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="shell py-6 md:py-10 space-y-6">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <span className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">Beranda</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">Review Game</span>
          </span>
        </nav>

        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-purple">Review Game Pilihan</h1>
          <p className="text-fine max-w-3xl mx-auto">
            Analisis mendalam game demo slot dari PG Soft & Pragmatic Play. Pelajari mekanisme, RTP, max win, dan fitur bonus dari setiap game sebelum bermain.
          </p>
        </div>

        <section className="page-content">
          <h2>Analisis Game Demo Slot</h2>
          <p>
            Di {SITE_CONFIG.name}, kami menyediakan review mendalam untuk setiap game demo slot dari provider terkemuka. Review kami mencakup analisis mekanisme permainan, RTP, volatilitas, max win, fitur bonus, dan strategi bermain.
          </p>
          <p>
            Setiap review juga dilengkapi dengan tips bermain yang berguna, baik untuk pemula maupun pemain berpengalaman. Gunakan review ini untuk memilih game yang sesuai dengan preferensi Anda.
          </p>
        </section>

        <section aria-labelledby="judul-review">
          <div className="section-head">
            <h2 id="judul-review" className="section-head__title">Semua Review</h2>
            <span className="text-fine text-xs">{games.length} game tersedia</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game) => (
              <ReviewCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-purple">Siap Uji Strategi?</h2>
          <p className="text-fine max-w-2xl mx-auto">
            Mainkan demo gratis dari PG Soft & Pragmatic Play. Tanpa deposit, tanpa registrasi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/panduan" className="btn btn--gold">
              {CTA_LABELS.readGuide}
            </Link>
            <a
              href={MAIN_SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              {CTA_LABELS.mainSite}
            </a>
          </div>
        </section>

        {/* Lisensi */}
        <section className="text-center text-fine text-xs">
          <p>
            Dioperasikan <strong>{LICENSE_INFO.operator}</strong> · Lisensi {LICENSE_INFO.regulator}{" "}
            {LICENSE_INFO.licenseNumber}
          </p>
        </section>
      </div>
    </>
  );
}