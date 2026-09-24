import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: `Syarat dan ketentuan penggunaan ${SITE_CONFIG.name} — hak, kewajiban, dan aturan yang berlaku.`,
  keywords: [
    "syarat dan ketentuan jun88",
    "syarat ketentuan jun88",
    "aturan jun88",
    "ketentuan layanan jun88",
    "jun88 demo",
    "jun88-id.info",
    "demo slot gratis",
  ],
  alternates: { canonical: "/syarat-ketentuan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Syarat & Ketentuan", item: `${SITE_CONFIG.domain}/syarat-ketentuan` },
  ],
};

export default function SyaratPage() {
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
            <span className="breadcrumb__current" aria-current="page">Syarat & Ketentuan</span>
          </span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-purple text-center">Syarat & Ketentuan</h1>
        <p className="text-fine text-center max-w-3xl mx-auto">Terakhir diperbarui: 1 Januari 2026</p>

        <article className="widget page-content space-y-4">
          <section>
            <h2>1. Penerimaan Syarat</h2>
            <p>Dengan mengakses dan menggunakan situs {SITE_CONFIG.name}, Anda menyetujui syarat dan ketentuan yang tercantum dalam halaman ini. Jika Anda tidak menyetujui, mohon untuk tidak menggunakan situs kami.</p>
          </section>

          <section>
            <h2>2. Kelayakan Usia</h2>
            <p>Pengguna harus berusia minimal 18 tahun atau usia dewasa sesuai hukum yang berlaku di yurisdiksi Anda. Dengan menggunakan situs ini, Anda menyatakan bahwa Anda memenuhi persyaratan usia tersebut. Konten kami ditujukan untuk audiens dewasa.</p>
          </section>

          <section>
            <h2>3. Penggunaan yang Diizinkan</h2>
            <p>Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah dan tidak melanggar hukum yang berlaku. Penggunaan yang dilarang meliputi:</p>
            <ul>
              <li>Aktivitas ilegal atau penipuan.</li>
              <li>Mengganggu atau merusak situs.</li>
              <li>Mengakses data atau sistem tanpa izin.</li>
              <li>Menyebarkan malware atau konten berbahaya.</li>
            </ul>
          </section>

          <section>
            <h2>4. Hak Kekayaan Intelektual</h2>
            <p>Seluruh konten di situs {SITE_CONFIG.name} — termasuk teks, gambar, logo, dan desain — dilindungi oleh hak cipta dan hak kekayaan intelektual lainnya. Penggunaan tanpa izin dilarang.</p>
          </section>

          <section>
            <h2>5. Keamanan Akun</h2>
            <p>Jika Anda memiliki akun di {SITE_CONFIG.name}, Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun dan password. Segera hubungi kami jika Anda mencurigai adanya akses tidak sah.</p>
          </section>

          <section>
            <h2>6. Konten Pihak Ketiga</h2>
            <p>Situs kami dapat berisi tautan ke situs pihak ketiga. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs pihak ketiga tersebut.</p>
          </section>

          <section>
            <h2>7. Batasan Tanggung Jawab</h2>
            <p>{SITE_CONFIG.name} tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan situs ini. Situs disediakan "sebagaimana adanya" tanpa jaminan apapun.</p>
          </section>

          <section>
            <h2>8. Perubahan Syarat</h2>
            <p>Kami dapat mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan berlaku segera setelah dipublikasikan di halaman ini.</p>
          </section>

          <section>
            <h2>9. Hukum yang Berlaku</h2>
            <p>Situs ini dioperasikan oleh <strong>{LICENSE_INFO.operator}</strong>, yang terdaftar dan diatur oleh <strong>{LICENSE_INFO.regulator}</strong> dengan lisensi <strong>{LICENSE_INFO.licenseNumber}</strong>. Syarat dan ketentuan ini diatur oleh hukum yang berlaku di yurisdiksi tempat operator terdaftar. Setiap sengketa akan diselesaikan melalui yurisdiksi yang kompeten.</p>
          </section>

          <section>
            <h2>10. Kontak</h2>
            <p>Untuk pertanyaan tentang syarat dan ketentuan ini, hubungi kami melalui <Link href="/tentang">Tentang Kami</Link> atau <Link href="/faq">FAQ</Link>.</p>
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