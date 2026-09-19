import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer 18+",
  description: `Disclaimer ${SITE_CONFIG.name} — situs demo slot untuk pengguna 18 tahun ke atas. Informasi tentang konten, akurasi, dan tanggung jawab.`,
  keywords: [
    "disclaimer jun88",
    "disclaimer 18+",
    "disclaimer demo slot",
    "tanggung jawab jun88",
    "jun88 demo",
    "jun88-id.online",
    "demo slot gratis",
  ],
  alternates: { canonical: "/disclaimer" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Disclaimer 18+", item: `${SITE_CONFIG.domain}/disclaimer` },
  ],
};

export default function DisclaimerPage() {
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
            <span className="breadcrumb__current" aria-current="page">Disclaimer 18+</span>
          </span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-purple text-center">Disclaimer 18+</h1>
        <p className="text-fine text-center max-w-3xl mx-auto">Terakhir diperbarui: 1 Januari 2026</p>

        <section className="widget text-center space-y-3">
          <div className="text-6xl font-bold text-pink">18+</div>
          <h2 className="text-lg font-bold text-purple">Konten Khusus Dewasa</h2>
          <p className="text-fine max-w-2xl mx-auto">
            Situs ini ditujukan untuk pengguna berusia 18 tahun ke atas. Dengan mengakses situs ini, Anda
            menyatakan bahwa Anda memenuhi persyaratan usia tersebut.
          </p>
        </section>

        <article className="widget page-content space-y-4">
          <section>
            <h2>1. Disclaimer Konten</h2>
            <p>
              Seluruh konten di situs {SITE_CONFIG.name} — termasuk review, panduan, dan artikel — disediakan
              untuk tujuan informasi dan edukasi. Kami berusaha menyajikan informasi yang akurat, namun tidak
              menjamin kelengkapan, keakuratan, atau keandalan konten.
            </p>
          </section>

          <section>
            <h2>2. Demo Slot, Bukan Uang Asli</h2>
            <p>
              Semua game di {SITE_CONFIG.name} adalah versi demo yang dimainkan tanpa uang sungguhan. Kami
              tidak menyediakan layanan perjudian uang asli di situs ini. Demo slot bertujuan untuk edukasi
              dan hiburan.
            </p>
          </section>

          <section>
            <h2>3. Akurasi Informasi</h2>
            <p>
              Data seperti RTP, max win, dan volatilitas dapat berubah sewaktu-waktu sesuai kebijakan provider.
              Kami berusaha memperbarui informasi secara rutin, namun tidak bertanggung jawab atas perbedaan
              yang mungkin terjadi.
            </p>
          </section>

          <section>
            <h2>4. Tidak Ada Jaminan Kemenangan</h2>
            <p>
              Demo slot dan review kami tidak menjamin kemenangan di permainan uang asli. Hasil permainan
              bergantung pada faktor acak dan tidak dapat diprediksi.
            </p>
          </section>

          <section>
            <h2>5. Tautan Pihak Ketiga</h2>
            <p>
              Situs kami dapat berisi tautan ke situs pihak ketiga. Kami tidak bertanggung jawab atas konten
              atau praktik situs pihak ketiga tersebut.
            </p>
          </section>

          <section>
            <h2>6. Batasan Tanggung Jawab</h2>
            <p>
              {SITE_CONFIG.name} tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari
              penggunaan informasi di situs ini. Pengguna bertanggung jawab penuh atas keputusan yang diambil
              berdasarkan konten kami.
            </p>
          </section>

          <section>
            <h2>7. Lisensi & Operasional</h2>
            <p>
              Situs ini dioperasikan oleh <strong>{LICENSE_INFO.operator}</strong>, yang terdaftar dan diatur
              oleh <strong>{LICENSE_INFO.regulator}</strong> dengan lisensi{" "}
              <strong>{LICENSE_INFO.licenseNumber}</strong>. Selengkapnya di halaman{" "}
              <Link href="/tentang">Tentang Kami</Link>.
            </p>
          </section>

          <section>
            <h2>8. Bermain Bijak</h2>
            <p>
              Kami mendorong pengguna untuk bermain secara bertanggung jawab. Kunjungi halaman{" "}
              <Link href="/bijak">Bermain Bijak</Link> untuk informasi lebih lanjut.
            </p>
          </section>

          <section>
            <h2>9. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang disclaimer ini, hubungi kami melalui{" "}
              <Link href="/tentang">Tentang Kami</Link> atau <Link href="/faq">FAQ</Link>.
            </p>
          </section>
        </article>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-purple">Informasi Lebih Lanjut</h2>
          <p className="text-fine text-sm">
            Untuk informasi lengkap tentang platform, kunjungi situs utama kami.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/tentang" className="btn btn--gold">
              {CTA_LABELS.aboutUs}
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