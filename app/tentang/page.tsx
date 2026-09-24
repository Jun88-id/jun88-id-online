import type { Metadata } from "next";
import Link from "next/link";
import { BENEFITS, SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import { ICONS } from "@/components/icons";

export const metadata: Metadata = {
  title: "Tentang Kami — Lisensi & Operasional",
  description: `Informasi resmi ${SITE_CONFIG.name}. Dioperasikan ${LICENSE_INFO.operator}, lisensi ${LICENSE_INFO.regulator} ${LICENSE_INFO.licenseNumber}.`,
  keywords: [
    "tentang jun88",
    "operator jun88",
    "lisensi jun88",
    "jun88 demo",
    "jun88-id.info",
    "cyber labs bv",
    "cg a license",
    "demo slot gratis",
  ],
  alternates: { canonical: "/tentang" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Tentang Kami", item: `${SITE_CONFIG.domain}/tentang` },
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `Tentang ${SITE_CONFIG.name}`,
  description: `Informasi lengkap tentang ${SITE_CONFIG.name}`,
  url: `${SITE_CONFIG.domain}/tentang`,
  mainEntity: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    identifier: "jun88-id-online",
    logo: `${SITE_CONFIG.domain}/brand/logo-jun88-id-online.webp`,
    foundingDate: LICENSE_INFO.issued,
    founder: { "@type": "Organization", name: LICENSE_INFO.operator },
    address: {
      "@type": "PostalAddress",
      streetAddress: LICENSE_INFO.address,
      addressCountry: "CW",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "License",
      name: `Lisensi ${LICENSE_INFO.regulator}`,
      identifier: LICENSE_INFO.licenseNumber,
      recognizedBy: { "@type": "Organization", name: LICENSE_INFO.regulator },
      validFrom: LICENSE_INFO.issued,
    },
  },
};

export default function TentangPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="shell py-6 md:py-10 space-y-6">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <span className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">Beranda</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">Tentang Kami</span>
          </span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-purple text-center">Tentang {SITE_CONFIG.name}</h1>
        <p className="text-fine text-center max-w-3xl mx-auto">
          Kanal demo slot independen dengan koleksi game dari PG Soft & Pragmatic Play.
        </p>

        {/* INFORMASI RESMI — pengganti "Disclosure" */}
        <section className="widget page-content">
          <p>
            <strong>Informasi Resmi:</strong> Halaman ini merupakan kanal resmi {SITE_CONFIG.name}. Seluruh
            informasi mengenai lisensi, operasional, dan layanan bersumber langsung dari{" "}
            {LICENSE_INFO.operator} dan {LICENSE_INFO.regulator}.
          </p>
        </section>

        <section className="widget page-content">
          <h2>Siapa Kami</h2>
          <p>
            {SITE_CONFIG.name}-id.online adalah kanal demo slot independen yang menghadirkan akses ke berbagai
            game demo dari provider terkemuka seperti PG Soft dan Pragmatic Play, lengkap dengan review,
            panduan, dan artikel. Situs resmi kami dapat diakses melalui{" "}
            <a href={SITE_CONFIG.domain} className="text-purple underline">
              {SITE_CONFIG.domain.replace("https://", "")}
            </a>.
          </p>
          <p>
            Misi kami adalah membantu pengguna memahami dunia slot gaming dengan lebih baik melalui review
            mendalam, panduan bermain, dan demo gratis. Kami percaya bahwa edukasi adalah kunci untuk
            pengalaman bermain yang lebih bertanggung jawab.
          </p>
        </section>

        {/* LISENSI & OPERASIONAL — sinyal trust */}
        <section className="widget page-content">
          <h2>Lisensi & Operasional</h2>
          <p>
            {SITE_CONFIG.name}-id.online dioperasikan oleh <strong>{LICENSE_INFO.operator}</strong>, sebuah
            perusahaan yang terdaftar di Curaçao dengan Nomor Registrasi Bisnis{" "}
            <strong>{LICENSE_INFO.registration}</strong>, alamat terdaftar: {LICENSE_INFO.address}.
          </p>
          <p>
            {LICENSE_INFO.operator} dilisensikan dan diatur oleh{" "}
            <strong>{LICENSE_INFO.regulator}</strong> dengan Nomor Lisensi:{" "}
            <strong>{LICENSE_INFO.licenseNumber}</strong>, yang dikeluarkan pada {LICENSE_INFO.issued}.
          </p>
          <ul>
            <li><strong>Operator:</strong> {LICENSE_INFO.operator}</li>
            <li><strong>Nomor Registrasi:</strong> {LICENSE_INFO.registration}</li>
            <li><strong>Alamat Terdaftar:</strong> {LICENSE_INFO.address}</li>
            <li><strong>Regulator:</strong> {LICENSE_INFO.regulator}</li>
            <li><strong>Nomor Lisensi:</strong> {LICENSE_INFO.licenseNumber}</li>
            <li><strong>Tanggal Diterbitkan:</strong> {LICENSE_INFO.issued}</li>
          </ul>
        </section>

        <section className="widget page-content">
          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menjadi kanal demo slot pilihan utama di Indonesia yang menghadirkan pengalaman belajar berkualitas dengan koleksi game yang terus berkembang.</p>
          <p><strong>Misi:</strong> Menyediakan akses demo slot yang mudah, aman, dan nyaman; menghadirkan review dan panduan yang mendalam; serta membangun komunitas pemain yang positif dan inklusif.</p>
        </section>

        <section aria-labelledby="judul-keunggulan">
          <h2 id="judul-keunggulan" className="section-head__title mb-4">Kenapa Memilih Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {BENEFITS.map((b, i) => {
              const Icon = ICONS[b.icon as keyof typeof ICONS];
              return (
                <div key={i} className="widget text-center">
                  {Icon && <Icon className="w-8 h-8 text-purple mx-auto mb-2" />}
                  <h3 className="text-sm font-bold text-purple mb-1">{b.title}</h3>
                  <p className="text-fine text-xs">{b.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="widget page-content">
          <h2>Komitmen Kami</h2>
          <p>Kami berkomitmen untuk terus meningkatkan kualitas layanan, memperbarui koleksi game secara rutin, dan menghadirkan review serta panduan yang relevan bagi pengguna. Keamanan dan kenyamanan pengunjung adalah prioritas utama kami.</p>
          <h3>Keamanan Data</h3>
          <p>Kami menggunakan enkripsi sesi dan sistem keamanan berlapis untuk melindungi data pengguna. Kami tidak membagikan data pribadi ke pihak ketiga tanpa izin.</p>
          <h3>Kualitas Konten</h3>
          <p>Setiap review dan panduan dalam situs kami melalui proses kurasi untuk memastikan akurasi, kedalaman, dan relevansi. Kami juga secara rutin memperbarui konten agar tetap up-to-date.</p>
          <h3>Edukasi & Bermain Bijak</h3>
          <p>Kami mendorong pengguna untuk memahami RTP, volatilitas, dan risiko sebelum bermain. Halaman <Link href="/bijak">Bermain Bijak</Link> menyediakan panduan untuk pengalaman bermain yang bertanggung jawab.</p>
          <p>Untuk melihat koleksi game kami, kunjungi <Link href="/review">Review Game</Link>. Untuk panduan bermain, lihat <Link href="/panduan">Panduan</Link>. Ada pertanyaan? Cek <Link href="/faq">halaman FAQ</Link> kami.</p>
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-purple">Mulai Uji Strategi</h2>
          <p className="text-fine">Mainkan demo gratis dari PG Soft & Pragmatic Play. Tanpa deposit, tanpa registrasi.</p>
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