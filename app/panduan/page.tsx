import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import GuideCard from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Panduan Bermain — Demo Slot",
  description: `Panduan lengkap bermain demo slot — cara memulai, memahami RTP, mengelola modal, dan fitur bonus.`,
  keywords: [
    "panduan bermain slot",
    "cara main demo slot",
    "panduan rtp slot",
    "panduan volatilitas slot",
    "tips bermain slot",
    "jun88 panduan",
    "jun88 demo",
    "demo slot jun88",
    "demo slot gratis",
  ],
  alternates: { canonical: "/panduan" },
  openGraph: {
    title: `Panduan Bermain | ${SITE_CONFIG.name}`,
    description: "Panduan lengkap bermain demo slot.",
    images: [{ url: "/banner/og-image.webp" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Panduan", item: `${SITE_CONFIG.domain}/panduan` },
  ],
};

export default function PanduanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="shell py-6 md:py-10 space-y-6">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <span className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">Beranda</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">Panduan</span>
          </span>
        </nav>

        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-purple">Panduan Bermain Slot</h1>
          <p className="text-fine max-w-3xl mx-auto">
            Panduan lengkap untuk pemula dan pemain berpengalaman. Pelajari dasar-dasar slot, strategi, dan tips mengelola modal.
          </p>
        </div>

        <section className="page-content">
          <h2>Panduan Lengkap Bermain Demo Slot</h2>
          <p>
            Di {SITE_CONFIG.name}, kami menyediakan panduan lengkap untuk membantu Anda memahami dunia slot gaming.
            Dari dasar-dasar hingga strategi lanjutan, panduan kami dirancang untuk semua level pemain.
          </p>
          <p>
            Setiap panduan ditulis dengan pendekatan praktis — bisa langsung diuji di mode demo tanpa risiko.
            Untuk memulai, lihat panduan{" "}
            <Link href="/panduan/alur-demo-slot-jun88-id-online">Alur Demo Slot</Link> kami.
          </p>
        </section>

        <section aria-labelledby="judul-panduan">
          <div className="section-head">
            <h2 id="judul-panduan" className="section-head__title">Semua Panduan</h2>
            <span className="text-fine text-xs">{guides.length} panduan</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-purple">Siap Uji Panduan?</h2>
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