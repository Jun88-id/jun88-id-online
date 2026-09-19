import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi ${SITE_CONFIG.name} — bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengguna.`,
  keywords: [
    "kebijakan privasi jun88",
    "privasi jun88",
    "perlindungan data jun88",
    "keamanan data jun88",
    "jun88 demo",
    "jun88-id.online",
    "demo slot gratis",
  ],
  alternates: { canonical: "/privasi" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Kebijakan Privasi", item: `${SITE_CONFIG.domain}/privasi` },
  ],
};

export default function PrivasiPage() {
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
            <span className="breadcrumb__current" aria-current="page">Kebijakan Privasi</span>
          </span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-purple text-center">Kebijakan Privasi</h1>
        <p className="text-fine text-center max-w-3xl mx-auto">Terakhir diperbarui: 1 Januari 2026</p>

        <article className="widget page-content space-y-4">
          <section>
            <h2>1. Pendahuluan</h2>
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana {SITE_CONFIG.name} mengumpulkan, menggunakan, dan
              melindungi informasi pengguna saat mengakses situs kami. Dengan menggunakan situs ini, Anda
              menyetujui praktik yang dijelaskan dalam kebijakan ini.
            </p>
            <p>
              Situs ini dioperasikan oleh <strong>{LICENSE_INFO.operator}</strong>, yang terdaftar dan diatur
              oleh <strong>{LICENSE_INFO.regulator}</strong> dengan lisensi{" "}
              <strong>{LICENSE_INFO.licenseNumber}</strong>.
            </p>
          </section>

          <section>
            <h2>2. Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan informasi berikut:</p>
            <ul>
              <li><strong>Informasi teknis</strong> — alamat IP, jenis browser, sistem operasi, dan halaman yang dikunjungi.</li>
              <li><strong>Cookies</strong> — untuk meningkatkan pengalaman pengguna dan analitik.</li>
              <li><strong>Informasi yang Anda berikan</strong> — saat menghubungi support atau mengisi formulir.</li>
            </ul>
          </section>

          <section>
            <h2>3. Cara Kami Menggunakan Informasi</h2>
            <p>Informasi yang dikumpulkan digunakan untuk:</p>
            <ul>
              <li>Meningkatkan kualitas layanan dan pengalaman pengguna.</li>
              <li>Menganalisis tren dan perilaku pengguna secara agregat.</li>
              <li>Menanggapi pertanyaan dan permintaan dukungan.</li>
              <li>Memenuhi kewajiban hukum yang berlaku.</li>
            </ul>
          </section>

          <section>
            <h2>4. Keamanan Data</h2>
            <p>
              Kami menggunakan enkripsi sesi dan sistem keamanan berlapis untuk melindungi data pengguna.
              Namun, tidak ada sistem yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan absolut.
            </p>
          </section>

          <section>
            <h2>5. Berbagi Informasi dengan Pihak Ketiga</h2>
            <p>Kami tidak membagikan informasi pribadi pengguna ke pihak ketiga tanpa izin, kecuali:</p>
            <ul>
              <li>Diperlukan oleh hukum atau proses hukum.</li>
              <li>Untuk melindungi hak, properti, atau keamanan {SITE_CONFIG.name} dan pengguna.</li>
              <li>Dengan penyedia layanan yang membantu operasional situs (dengan perjanjian kerahasiaan).</li>
            </ul>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser
              untuk menolak cookies, namun beberapa fitur mungkin tidak berfungsi optimal.
            </p>
          </section>

          <section>
            <h2>7. Hak Pengguna</h2>
            <p>Anda berhak untuk:</p>
            <ul>
              <li>Mengakses informasi yang kami simpan tentang Anda.</li>
              <li>Meminta koreksi atau penghapusan data.</li>
              <li>Menolak penggunaan data untuk tujuan tertentu.</li>
            </ul>
          </section>

          <section>
            <h2>8. Perubahan Kebijakan</h2>
            <p>
              Kami dapat mengubah kebijakan ini sewaktu-waktu. Perubahan akan diinformasikan melalui halaman
              ini dengan tanggal pembaruan.
            </p>
          </section>

          <section>
            <h2>9. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui{" "}
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