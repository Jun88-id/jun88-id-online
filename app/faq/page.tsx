import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan Umum",
  description: `Jawaban atas pertanyaan umum tentang ${SITE_CONFIG.name} — cara bermain demo slot, provider, RTP, keamanan, dan lainnya.`,
  keywords: [
    "faq jun88",
    "pertanyaan umum demo slot",
    "cara main demo slot",
    "jun88 demo",
    "demo slot jun88",
    "demo slot gratis",
    "operator jun88",
    "lisensi jun88",
    "slot demo tanpa deposit",
  ],
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: `Apa itu ${SITE_CONFIG.name}?`,
    a: `${SITE_CONFIG.name}-id.online adalah kanal demo slot independen. Kami menyediakan akses ke berbagai game demo dari provider terkemuka seperti PG Soft dan Pragmatic Play, lengkap dengan review, panduan, dan artikel.`,
  },
  {
    q: "Apa itu demo slot?",
    a: "Demo slot adalah versi gratis dari permainan slot yang memungkinkan Anda mencoba game tanpa menggunakan uang sungguhan. Cocok untuk memahami mekanisme game sebelum bermain dengan uang asli.",
  },
  {
    q: `Bagaimana cara memulai demo slot di ${SITE_CONFIG.name}?`,
    a: "Kunjungi halaman Review Game, pilih game yang ingin Anda coba, lalu klik tombol 'Mainkan Demo'. Anda dapat langsung bermain tanpa registrasi.",
  },
  {
    q: `Apakah demo slot di ${SITE_CONFIG.name} gratis?`,
    a: "Ya, seluruh demo slot di situs ini dapat dimainkan secara gratis tanpa deposit dan tanpa registrasi.",
  },
  {
    q: "Provider apa saja yang tersedia?",
    a: "Kami menyediakan game dari PG Soft dan Pragmatic Play, dua provider terkemuka dengan koleksi game berkualitas tinggi.",
  },
  {
    q: "Game apa saja yang tersedia?",
    a: "Koleksi kami mencakup Sweet Bonanza, Wild Bandito, Pinata Wins, The Dog House, Sugar Rush, dan Ganesha Fortune. Kami secara rutin menambahkan game baru.",
  },
  {
    q: "Apakah data saya aman?",
    a: "Kami menggunakan enkripsi sesi dan sistem keamanan berlapis untuk melindungi data pengguna. Kami tidak membagikan data pribadi ke pihak ketiga tanpa izin. Selengkapnya di halaman Kebijakan Privasi.",
  },
  {
    q: `Siapa operator ${SITE_CONFIG.name}?`,
    a: `Situs ini dioperasikan oleh ${LICENSE_INFO.operator}, yang terdaftar dan diatur oleh ${LICENSE_INFO.regulator} dengan lisensi ${LICENSE_INFO.licenseNumber}. Selengkapnya di halaman Tentang Kami.`,
  },
  {
    q: "Apakah ada panduan bermain?",
    a: "Ya. Kami menyediakan panduan lengkap di halaman Panduan, termasuk cara memulai demo slot, memahami RTP, mengelola modal, dan memanfaatkan fitur bonus.",
  },
  {
    q: `Apakah ${SITE_CONFIG.name} tersedia di mobile?`,
    a: "Ya. Situs ini dioptimalkan untuk desktop, tablet, dan mobile. Anda dapat mengakses seluruh fitur melalui browser di smartphone tanpa instalasi tambahan.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_CONFIG.domain}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="shell py-6 md:py-10 space-y-6">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <span className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">Beranda</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">FAQ</span>
          </span>
        </nav>

        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-purple">Pertanyaan Umum</h1>
          <p className="text-fine max-w-3xl mx-auto">
            Kumpulan jawaban atas pertanyaan yang paling sering diajukan. Jika Anda tidak menemukan jawaban yang dicari, kunjungi halaman Tentang Kami.
          </p>
        </div>

        <section className="page-content">
          <h2>Tentang Halaman FAQ Ini</h2>
          <p>
            Halaman ini berisi jawaban atas pertanyaan yang paling sering diajukan oleh pengunjung. Kami
            mengelompokkan pertanyaan berdasarkan topik: cara bermain, provider, keamanan, dan dukungan.
          </p>
          <p>
            Untuk pengalaman bermain yang lebih optimal, disarankan untuk membaca beberapa pertanyaan terkait
            terlebih dahulu, terutama tentang cara memulai demo slot dan cara memilih game. Anda juga dapat
            menjelajahi <Link href="/review">Review Game</Link> untuk melihat koleksi lengkap game yang tersedia.
          </p>
        </section>

        <section className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-purple">Masih Ada Pertanyaan?</h2>
          <p className="text-fine">
            Untuk info lengkap tentang platform, kunjungi{" "}
            <Link href="/tentang" className="text-purple underline">Tentang Kami</Link>.
            Untuk melihat koleksi game, kunjungi{" "}
            <Link href="/review" className="text-purple underline">Review Game</Link>.
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