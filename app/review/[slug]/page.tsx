import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { games, getGameBySlug } from "@/lib/games";
import { SITE_CONFIG, LICENSE_INFO, EXTERNAL_LINKS, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import ReviewCard from "@/components/ReviewCard";
import {
  IconChevronLeft,
  IconPlay,
  IconStar,
  IconTrophy,
} from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game Tidak Ditemukan" };

  return {
    title: `Review ${game.title} — Analisis Demo Slot`,
    description: `Analisis lengkap ${game.title} dari ${game.provider}. RTP ${game.rtp}%, max win ${game.maxWin}, volatilitas ${game.volatility}. Mainkan demo gratis di ${SITE_CONFIG.name}.`,
    keywords: [
      game.title.toLowerCase(),
      `demo ${game.title.toLowerCase()}`,
      `review ${game.title.toLowerCase()}`,
      `jun88 ${game.title.toLowerCase()}`,
      `slot ${game.provider.toLowerCase()}`,
      game.provider.toLowerCase(),
      "jun88 demo",
      "demo slot jun88",
      "demo slot gratis",
      "slot demo tanpa deposit",
    ],
    alternates: { canonical: `/review/${game.slug}` },
    openGraph: {
      title: `Review ${game.title} | ${SITE_CONFIG.name}`,
      description: game.description,
      images: [{ url: game.image, width: 480, height: 640, alt: game.title }],
    },
  };
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = games.filter((g) => g.slug !== game.slug).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Review Game", item: `${SITE_CONFIG.domain}/review` },
      { "@type": "ListItem", position: 3, name: game.title, item: `${SITE_CONFIG.domain}/review/${game.slug}` },
    ],
  };

  // Review schema — tanpa rating fiktif
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "VideoGame",
      name: game.title,
      image: `${SITE_CONFIG.domain}${game.image}`,
      applicationCategory: "Game",
      operatingSystem: "Web",
      author: { "@type": "Organization", name: game.provider },
    },
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    reviewBody: game.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="shell py-6 md:py-10 space-y-6">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <span className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">Beranda</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <Link href="/review" className="breadcrumb__link">Review</Link>
          </span>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__item">
            <span className="breadcrumb__current" aria-current="page">{game.title}</span>
          </span>
        </nav>

        <Link
          href="/review"
          className="inline-flex items-center gap-1 text-fine hover:text-purple transition-colors"
        >
          <IconChevronLeft className="w-4 h-4" />Kembali ke Review
        </Link>

        {/* HEADER CARD */}
        <section className="review-hero">
          <div className="review-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={game.image} alt={`Sampul ${game.title}`} />
          </div>
          <div className="review-hero__body">
            <p className="eyebrow">{game.provider}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-purple">{game.title}</h1>
            <p className="text-fine">{game.description}</p>

            <div className="review-hero__specs">
              <div className="spec-item"><span className="spec-item__label">RTP</span><span className="spec-item__value">{game.rtp}%</span></div>
              <div className="spec-item"><span className="spec-item__label">Volatilitas</span><span className="spec-item__value">{game.volatility}</span></div>
              <div className="spec-item"><span className="spec-item__label">Max Win</span><span className="spec-item__value">{game.maxWin}</span></div>
              <div className="spec-item"><span className="spec-item__label">Reels</span><span className="spec-item__value">{game.reels}</span></div>
              <div className="spec-item"><span className="spec-item__label">Paylines</span><span className="spec-item__value">{game.paylines}</span></div>
              <div className="spec-item"><span className="spec-item__label">Rilis</span><span className="spec-item__value">{game.releaseYear}</span></div>
            </div>

            {/* CTA — demo + situs utama */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={EXTERNAL_LINKS.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <IconPlay className="w-4 h-4" />{CTA_LABELS.playDemo}
              </a>
              <a
                href={MAIN_SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                {CTA_LABELS.mainSite}
              </a>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="magazine">
          <div className="magazine__main">
            <section className="page-content">
              <h2>Tentang {game.title}</h2>
              <p>{game.intro}</p>
              <p>{game.story}</p>
            </section>

            <section className="page-content">
              <h2>Visual & Desain</h2>
              <p>{game.visuals}</p>
            </section>

            <section className="page-content">
              <h2>Simbol & Pembayaran</h2>
              <p>{game.symbols}</p>
            </section>

            <section className="page-content">
              <h2>Fitur & Keunggulan</h2>
              <ul>
                {game.features.map((f, i) => (
                  <li key={i}><strong>{f}</strong> — Fitur unggulan {game.title}.</li>
                ))}
              </ul>
            </section>

            <section className="page-content">
              <h2>Analisis & Spesifikasi</h2>
              <p>{game.analysis}</p>
              <div className="review-hero__specs">
                <div className="spec-item"><span className="spec-item__label">RTP</span><span className="spec-item__value">{game.rtp}%</span></div>
                <div className="spec-item"><span className="spec-item__label">Volatilitas</span><span className="spec-item__value">{game.volatility}</span></div>
                <div className="spec-item"><span className="spec-item__label">Max Win</span><span className="spec-item__value">{game.maxWin}</span></div>
                <div className="spec-item"><span className="spec-item__label">Min Bet</span><span className="spec-item__value">{game.minBet}</span></div>
                <div className="spec-item"><span className="spec-item__label">Max Bet</span><span className="spec-item__value">{game.maxBet}</span></div>
                <div className="spec-item"><span className="spec-item__label">Rilis</span><span className="spec-item__value">{game.releaseYear}</span></div>
              </div>
            </section>

            <section className="page-content">
              <h2>Strategi Bermain {game.title}</h2>
              <p>{game.strategy}</p>
            </section>

            <section className="page-content">
              <h2>Tips Bermain Aman</h2>
              <p>{game.safePlay}</p>
              <p>
                Untuk informasi lebih lanjut tentang bermain aman, kunjungi halaman{" "}
                <Link href="/bijak">Bermain Bijak</Link>. Lihat juga <Link href="/panduan">Panduan Bermain</Link>{" "}
                untuk tips lengkap.
              </p>
            </section>

            {/* BACA JUGA — internal linking */}
            <section className="widget page-content">
              <h2>Baca Juga</h2>
              <ul>
                <li>
                  <Link href="/artikel/membedah-mekanisme-pg-soft-2026">
                    Membedah 3 Mekanisme PG Soft 2026
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/memahami-rtp-volatilitas-di-demo">
                    Memahami RTP dan Volatilitas Lewat Demo Slot
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/strategi-mengelola-modal-di-demo">
                    Strategi Mengelola Modal yang Bisa Diuji di Demo
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className="magazine__sidebar lg:block hidden">
            <div className="widget">
              <div className="widget__head">
                <IconTrophy className="widget__icon" />
                <h2 className="widget__title">Spesifikasi</h2>
              </div>
              <div className="stats-grid">
                <div className="stat-item"><div className="stat-item__value">{game.rtp}%</div><div className="stat-item__label">RTP</div></div>
                <div className="stat-item"><div className="stat-item__value">{game.maxWin}</div><div className="stat-item__label">Max Win</div></div>
                <div className="stat-item"><div className="stat-item__value">{game.volatility}</div><div className="stat-item__label">Volatilitas</div></div>
                <div className="stat-item"><div className="stat-item__value">{game.releaseYear}</div><div className="stat-item__label">Rilis</div></div>
              </div>
            </div>

            <div className="widget">
              <div className="widget__head">
                <IconStar className="widget__icon" />
                <h2 className="widget__title">Fitur Utama</h2>
              </div>
              <ul className="page-content text-sm">
                {game.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            {/* Lisensi */}
            <div className="widget text-center space-y-2">
              <p className="text-fine text-xs">
                Dioperasikan <strong>{LICENSE_INFO.operator}</strong><br />
                Lisensi {LICENSE_INFO.regulator} {LICENSE_INFO.licenseNumber}
              </p>
              <Link href="/tentang" className="btn btn--ghost w-full text-xs">
                {CTA_LABELS.infoLicense}
              </Link>
            </div>
          </aside>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <section aria-labelledby="judul-terkait">
            <div className="section-head">
              <h2 id="judul-terkait" className="section-head__title">Review Lainnya</h2>
              <Link href="/review" className="section-head__link">Lihat Semua →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((g) => (
                <ReviewCard key={g.slug} game={g} />
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