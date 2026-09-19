import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuideBySlug } from "@/lib/guides";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import GuideCard from "@/components/GuideCard";
import { IconChevronLeft, IconClock } from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Panduan Tidak Ditemukan" };

  return {
    title: guide.title,
    description: guide.excerpt,
    keywords: [
      guide.title.toLowerCase(),
      guide.category.toLowerCase(),
      "jun88 panduan",
      "jun88 demo",
      "panduan slot",
      "panduan demo slot",
      "demo slot gratis",
    ],
    alternates: { canonical: `/panduan/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.excerpt,
      url: `${SITE_CONFIG.domain}/panduan/${guide.slug}`,
      publishedTime: guide.date,
    },
  };
}

export default async function PanduanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Panduan", item: `${SITE_CONFIG.domain}/panduan` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_CONFIG.domain}/panduan/${guide.slug}` },
    ],
  };

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
            <Link href="/panduan" className="breadcrumb__link">Panduan</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">{guide.title}</span>
          </span>
        </nav>

        <Link
          href="/panduan"
          className="inline-flex items-center gap-1 text-fine hover:text-purple transition-colors"
        >
          <IconChevronLeft className="w-4 h-4" />Kembali ke Panduan
        </Link>

        <article className="widget space-y-4">
          <p className="eyebrow">{guide.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-purple">{guide.title}</h1>
          <p className="text-fine inline-flex items-center gap-1">
            <IconClock className="w-4 h-4" />{guide.meta}
          </p>
          <div className="page-content" dangerouslySetInnerHTML={{ __html: guide.body }} />
        </article>

        {/* BACA JUGA — internal linking ke review & artikel */}
        <section className="widget page-content">
          <h2>Baca Juga</h2>
          <ul>
            <li>
              <Link href="/review">Review Game Demo Slot</Link> — analisis lengkap RTP, volatilitas, dan mekanisme.
            </li>
            <li>
              <Link href="/artikel">Artikel & Berita Slot</Link> — berita rilis game, tips, dan informasi industri.
            </li>
            <li>
              <Link href="/tentang">Tentang Kami</Link> — informasi lisensi dan operasional.
            </li>
          </ul>
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-purple">Uji Panduan Ini di Demo</h2>
          <p className="text-fine text-sm">
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

        {related.length > 0 && (
          <section aria-labelledby="judul-terkait">
            <div className="section-head">
              <h2 id="judul-terkait" className="section-head__title">Panduan Lainnya</h2>
              <Link href="/panduan" className="section-head__link">Lihat Semua →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}

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