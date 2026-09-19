import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Artikel — Berita, Tips, & Informasi Slot",
  description: `Artikel terbaru seputar dunia slot gaming — berita, tips, panduan, dan informasi dari ${SITE_CONFIG.name}.`,
  keywords: [
    "artikel slot",
    "berita slot",
    "tips slot",
    "informasi slot",
    "jun88 artikel",
    "jun88 demo",
    "industri slot gaming",
    "demo slot gratis",
    "slot demo tanpa deposit",
  ],
  alternates: { canonical: "/artikel" },
  openGraph: {
    title: `Artikel | ${SITE_CONFIG.name}`,
    description: "Artikel terbaru seputar dunia slot gaming.",
    images: [{ url: "/banner/og-image.webp" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Artikel", item: `${SITE_CONFIG.domain}/artikel` },
  ],
};

// ✅ CollectionPage + ItemList schema
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Artikel ${SITE_CONFIG.name}`,
  description: "Artikel terbaru seputar dunia slot gaming — berita, tips, panduan, dan informasi.",
  url: `${SITE_CONFIG.domain}/artikel`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_CONFIG.domain}/artikel/${a.slug}`,
      name: a.title,
    })),
  },
};

export default function ArtikelPage() {
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
            <span className="breadcrumb__current" aria-current="page">Artikel</span>
          </span>
        </nav>

        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-purple">Artikel & Berita</h1>
          <p className="text-fine max-w-3xl mx-auto">
            Artikel terbaru seputar dunia slot gaming, tips bermain, dan informasi dari {SITE_CONFIG.name}.
          </p>
        </div>

        <section className="page-content">
          <h2>Artikel Terbaru</h2>
          <p>
            Kami menyajikan artikel terbaru seputar dunia slot gaming, termasuk berita rilis game baru, tips
            bermain, panduan, dan informasi umum. Semua artikel ditulis untuk membantu Anda memahami industri
            slot gaming dengan lebih baik.
          </p>
        </section>

        <section aria-labelledby="judul-artikel">
          <div className="section-head">
            <h2 id="judul-artikel" className="section-head__title">Semua Artikel</h2>
            <span className="text-fine text-xs">{articles.length} artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-purple">Siap Uji Wawasan Anda?</h2>
          <p className="text-fine max-w-2xl mx-auto">
            Mainkan demo gratis dari PG Soft & Pragmatic Play. Tanpa deposit, tanpa registrasi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/review" className="btn btn--gold">
              {CTA_LABELS.viewGames}
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