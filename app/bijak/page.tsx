import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import { IconShield, IconBolt, IconTrophy, IconUsers } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bermain Bijak",
  description: `Panduan bermain bijak di ${SITE_CONFIG.name} — prinsip, batasan, dan tips untuk pengalaman bermain yang sehat dan bertanggung jawab.`,
  keywords: [
    "bermain bijak jun88",
    "bermain bertanggung jawab",
    "tips bermain aman",
    "panduan bermain bijak",
    "jun88 demo",
    "jun88-id.online",
    "demo slot gratis",
    "permainan bertanggung jawab",
  ],
  alternates: { canonical: "/bijak" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "Bermain Bijak", item: `${SITE_CONFIG.domain}/bijak` },
  ],
};

const PRINCIPLES = [
  {
    icon: IconShield,
    title: "Tetapkan Batas",
    desc: "Tentukan batas waktu dan anggaran sebelum bermain. Jangan pernah melebihi batas yang sudah ditetapkan.",
  },
  {
    icon: IconBolt,
    title: "Bermain untuk Hiburan",
    desc: "Jadikan bermain sebagai hiburan, bukan sebagai sumber penghasilan. Jangan mengejar kerugian.",
  },
  {
    icon: IconTrophy,
    title: "Berhenti Saat Menang",
    desc: "Ketika sudah mencapai target kemenangan, berhentilah. Jangan serakah untuk terus bermain.",
  },
  {
    icon: IconUsers,
    title: "Jangan Bermain Saat Emosi",
    desc: "Hindari bermain saat sedang emosi, stres, atau di bawah pengaruh alkohol.",
  },
];

export default function BijakPage() {
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
            <span className="breadcrumb__current" aria-current="page">Bermain Bijak</span>
          </span>
        </nav>

        <h1 className="text-2xl md:text-4xl font-bold text-purple text-center">Bermain Bijak</h1>
        <p className="text-fine text-center max-w-3xl mx-auto">
          Panduan dan prinsip untuk pengalaman bermain yang sehat, aman, dan bertanggung jawab.
        </p>

        <section className="widget page-content">
          <h2>Komitmen Kami</h2>
          <p>
            Di {SITE_CONFIG.name}, kami percaya bahwa bermain slot harus menjadi pengalaman yang menyenangkan
            dan bertanggung jawab. Kami berkomitmen untuk memberikan edukasi kepada pengguna tentang
            pentingnya bermain bijak.
          </p>
          <p>
            Halaman ini berisi prinsip-prinsip bermain bijak yang kami rekomendasikan untuk semua pengguna.
            Kami mendorong Anda untuk membaca dan menerapkan prinsip-prinsip ini.
          </p>
        </section>

        <section aria-labelledby="judul-prinsip">
          <h2 id="judul-prinsip" className="section-head__title mb-4">4 Prinsip Bermain Bijak</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="widget space-y-2">
                <p.icon className="w-10 h-10 text-purple" />
                <h3 className="text-base font-bold text-purple">{p.title}</h3>
                <p className="text-fine text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="widget page-content">
          <h2>Tanda-Tanda Bermain Tidak Sehat</h2>
          <p>Waspadai tanda-tanda berikut yang menunjukkan bahwa Anda mungkin bermain tidak sehat:</p>
          <ul>
            <li>Bermain lebih lama dari yang direncanakan.</li>
            <li>Mengejar kerugian dengan bermain lebih banyak.</li>
            <li>Mengabaikan tanggung jawab pekerjaan atau keluarga.</li>
            <li>Berbohong tentang waktu atau uang yang dihabiskan untuk bermain.</li>
            <li>Merasa cemas atau stres saat tidak bermain.</li>
            <li>Menggunakan uang yang seharusnya untuk kebutuhan lain.</li>
          </ul>
        </section>

        <section className="widget page-content">
          <h2>Tips Bermain Bijak</h2>
          <ul>
            <li><strong>Tetapkan batas harian</strong> — Waktu dan anggaran yang jelas sebelum bermain.</li>
            <li><strong>Berhenti saat mencapai batas</strong> — Jangan pernah melebihi batas yang ditetapkan.</li>
            <li><strong>Jangan bermain saat emosi</strong> — Hindari bermain saat marah, sedih, atau stres.</li>
            <li><strong>Gunakan demo slot</strong> — Manfaatkan demo slot untuk belajar tanpa risiko.</li>
            <li><strong>Istirahat teratur</strong> — Berhenti setiap 30-60 menit untuk istirahat.</li>
            <li><strong>Cari bantuan jika perlu</strong> — Jika bermain sudah mengganggu kehidupan, cari bantuan profesional.</li>
          </ul>
        </section>

        <section className="widget page-content">
          <h2>Bantuan & Dukungan</h2>
          <p>
            Jika Anda merasa bermain sudah menjadi masalah, jangan ragu untuk mencari bantuan. Hubungi layanan
            konseling atau dukungan kesehatan mental di wilayah Anda.
          </p>
          <p>
            Untuk pertanyaan tentang bermain bijak, hubungi kami melalui{" "}
            <Link href="/tentang">Tentang Kami</Link> atau <Link href="/faq">FAQ</Link>.
          </p>
        </section>

        <section className="widget text-center space-y-3">
          <h2 className="text-lg font-bold text-pink">Ingat: Bermain untuk Hiburan</h2>
          <p className="text-fine max-w-2xl mx-auto">
            Slot adalah hiburan, bukan sumber penghasilan. Nikmati prosesnya, tetap dalam batas, dan bermain
            dengan bijak.
          </p>
        </section>

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