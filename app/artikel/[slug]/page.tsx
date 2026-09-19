import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/lib/articles";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import ArticleCard from "@/components/ArticleCard";
import { IconChevronLeft, IconClock } from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      article.title.toLowerCase(),
      article.category.toLowerCase(),
      "jun88 artikel",
      "jun88 demo",
      "artikel slot",
      "demo slot gratis",
      "slot demo tanpa deposit",
    ],
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${SITE_CONFIG.domain}/artikel/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${SITE_CONFIG.domain}/artikel` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_CONFIG.domain}/artikel/${article.slug}` },
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
            <Link href="/artikel" className="breadcrumb__link">Artikel</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">{article.title}</span>
          </span>
        </nav>

        <Link
          href="/artikel"
          className="inline-flex items-center gap-1 text-fine hover:text-purple transition-colors"
        >
          <IconChevronLeft className="w-4 h-4" />Kembali ke Artikel
        </Link>

        <article className="widget space-y-4">
          <p className="eyebrow">{article.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-purple">{article.title}</h1>
          <p className="text-fine inline-flex items-center gap-1">
            <IconClock className="w-4 h-4" />{article.meta}
          </p>
          <div className="page-content" dangerouslySetInnerHTML={{ __html: article.body }} />
        </article>

        {/* BACA JUGA — internal linking ke review & panduan */}
        <section className="widget page-content">
          <h2>Baca Juga</h2>
          <ul>
            <li>
              <Link href="/review">Review Game Demo Slot</Link> — analisis lengkap RTP, volatilitas, dan mekanisme.
            </li>
            <li>
              <Link href="/panduan">Panduan Bermain Slot</Link> — cara memulai, memahami RTP, dan mengelola modal.
            </li>
            <li>
              <Link href="/tentang">Tentang Kami</Link> — informasi lisensi dan operasional.
            </li>
          </ul>
        </section>

        {/* CTA — internal + situs utama */}
        <section className="widget text-center space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-purple">Uji Wawasan Anda di Demo</h2>
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
              <h2 id="judul-terkait" className="section-head__title">Artikel Lainnya</h2>
              <Link href="/artikel" className="section-head__link">Lihat Semua →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
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