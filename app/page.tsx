import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedGames, games, SITE_STATS } from "@/lib/games";
import { getLatestArticles } from "@/lib/articles";
import { getLatestGuides } from "@/lib/guides";
import { SITE_CONFIG, LICENSE_INFO, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import GameCard from "@/components/GameCard";
import Rail from "@/components/Rail";
import ArticleList from "@/components/ArticleList";
import GuideList from "@/components/GuideList";
import Ticker from "@/components/Ticker";
import { IconFlame, IconTrendingUp, IconBarChart, IconGift } from "@/components/icons";

// ============================================
// METADATA — canonical per-halaman, keywords + jun88
// ============================================
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: [
    "jun88",
    "jun88 demo",
    "demo slot jun88",
    "jun88-id.info",
    "jun88 id online",
    "demo slot gratis",
    "demo slot tanpa deposit",
    "slot demo pg soft",
    "slot demo pragmatic play",
    "review slot demo",
    "uji strategi slot",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
  },
};

// ============================================
// SCHEMA WebPage untuk beranda
// ============================================
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.domain,
  inLanguage: "id-ID",
  isPartOf: {
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    identifier: "jun88-id-online",
  },
};

export default function HomePage() {
  const featured = getFeaturedGames(6);
  const articles = getLatestArticles(4);
  const guides = getLatestGuides(4);
  const popular = games.slice(0, 6);

  return (
    <div className="shell py-6 md:py-10 space-y-6 md:space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* H1 — visually hidden, untuk SEO */}
      <h1 className="visually-hidden">
        {SITE_CONFIG.name} — {SITE_CONFIG.tagline}
      </h1>

      {/* ============================================
          MAGAZINE LAYOUT — 2 Kolom
          ============================================ */}
      <div className="magazine">
        {/* KOLOM KIRI — Konten Utama */}
        <div className="magazine__main">
          {/* HERO BANNER */}
          <Link href="/review" className="magazine-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/banner/welcome-jun88.webp"
              alt="Demo slot gratis di jun88-id.info"
              className="magazine-hero__image"
            />
            <div className="magazine-hero__overlay">
              <h2 className="magazine-hero__title">Demo Slot Gratis Tanpa Deposit</h2>
              <p className="magazine-hero__desc">
                Uji strategi dengan demo gratis dari PG Soft & Pragmatic Play. Tanpa deposit, tanpa registrasi.
              </p>
              <span className="btn btn--gold self-start">Mulai Demo</span>
            </div>
          </Link>

          {/* TICKER — mobile only */}
          <div className="lg:hidden">
            <Ticker />
          </div>

          {/* REVIEW TERBARU */}
          <section className="magazine-section">
            <div className="magazine-section__head">
              <h2 className="magazine-section__title">Review Game Terbaru</h2>
              <Link href="/review" className="magazine-section__link">
                Lihat Semua →
              </Link>
            </div>
            <Rail ariaLabel="Review game terbaru">
              {featured.map((game) => (
                <div key={game.slug} className="rail__item">
                  <GameCard
                    slug={game.slug}
                    title={game.title}
                    image={game.image}
                    badge={game.badge}
                  />
                </div>
              ))}
            </Rail>
          </section>

          {/* GAME POPULER — Grid 3×2 */}
          <section className="magazine-section">
            <div className="magazine-section__head">
              <h2 className="magazine-section__title">Game Populer Jun88</h2>
              <Link href="/review" className="magazine-section__link">
                Lihat Semua →
              </Link>
            </div>
            <div className="magazine-grid-3">
              {featured.slice(0, 6).map((game) => (
                <GameCard
                  key={game.slug}
                  slug={game.slug}
                  title={game.title}
                  image={game.image}
                  badge={game.badge}
                />
              ))}
            </div>
          </section>

          {/* ARTIKEL + PANDUAN — 2 kolom */}
          <div className="magazine-grid-2">
            <section className="magazine-section">
              <div className="magazine-section__head">
                <h2 className="magazine-section__title">Artikel Terbaru</h2>
                <Link href="/artikel" className="magazine-section__link">
                  Lihat Semua →
                </Link>
              </div>
              <ArticleList articles={articles} />
            </section>
            <section className="magazine-section">
              <div className="magazine-section__head">
                <h2 className="magazine-section__title">Panduan Bermain</h2>
                <Link href="/panduan" className="magazine-section__link">
                  Lihat Semua →
                </Link>
              </div>
              <GuideList guides={guides} />
            </section>
          </div>

          {/* TENTANG JUN88 — Konten SEO, tanpa CTA affiliate */}
          <section className="page-content">
            <h2>Tentang jun88-id.info</h2>
            <p>
              {SITE_CONFIG.name}-id.online adalah kanal demo slot independen yang menghadirkan koleksi game demo
              dari provider terkemuka seperti PG Soft dan Pragmatic Play. Mainkan demo slot gratis
              tanpa deposit dan tanpa registrasi.
            </p>
            <p>
              Kami dioperasikan oleh <strong>{LICENSE_INFO.operator}</strong>, dengan lisensi{" "}
              <strong>{LICENSE_INFO.regulator}</strong> nomor <strong>{LICENSE_INFO.licenseNumber}</strong>.
              Selengkapnya di halaman <Link href="/tentang">Tentang Kami</Link>.
            </p>
            <p>
              Kunjungi halaman <Link href="/review">Review Game</Link> untuk melihat analisis lengkap setiap game
              seperti Sweet Bonanza, Wild Bandito, Pinata Wins, The Dog House, Sugar Rush, dan Ganesha Fortune.
              Untuk panduan bermain, lihat <Link href="/panduan">Panduan</Link>. Ada pertanyaan? Cek{" "}
              <Link href="/faq">halaman FAQ</Link> kami.
            </p>
          </section>

          {/* CTA — demo murni + situs utama */}
          <section className="widget text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-purple">
              Siap Uji Strategi di Demo Slot?
            </h2>
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
        </div>

        {/* ============================================
            KOLOM KANAN — Sidebar (Desktop Only)
            ============================================ */}
        <aside className="magazine__sidebar lg:block hidden" aria-label="Sidebar">
          {/* TICKER */}
          <Ticker />

          {/* INFO LISENSI — ganti promo affiliate */}
          <div className="widget text-center space-y-3">
            <div className="widget__head justify-center">
              <IconGift className="widget__icon" />
              <h2 className="widget__title">Lisensi Resmi</h2>
            </div>
            <p className="text-fine">
              Dioperasikan <strong>{LICENSE_INFO.operator}</strong>. Lisensi{" "}
              {LICENSE_INFO.regulator} {LICENSE_INFO.licenseNumber}.
            </p>
            <Link href="/tentang" className="btn btn--ghost w-full">
              {CTA_LABELS.infoLicense}
            </Link>
          </div>

          {/* TERPOPULER */}
          <div className="widget">
            <div className="widget__head">
              <IconFlame className="widget__icon" />
              <h2 className="widget__title">Terpopuler</h2>
            </div>
            <div className="popular-list">
              {popular.map((game, i) => (
                <Link key={game.slug} href={`/review/${game.slug}`} className="popular-item">
                  <span className="popular-item__rank">{i + 1}</span>
                  <span className="popular-item__thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={game.image} alt={game.title} />
                  </span>
                  <span className="popular-item__body">
                    <span className="popular-item__title">{game.title}</span>
                    <span className="popular-item__meta">
                      {game.provider} · {game.maxWin}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* STATISTIK — pakai SITE_STATS */}
          <div className="widget">
            <div className="widget__head">
              <IconBarChart className="widget__icon" />
              <h2 className="widget__title">Statistik</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-item__value">{SITE_STATS.totalGames}</div>
                <div className="stat-item__label">Game</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__value">{SITE_STATS.totalProviders}</div>
                <div className="stat-item__label">Provider</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__value">{SITE_STATS.maxRTP}%</div>
                <div className="stat-item__label">RTP Max</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__value">{SITE_STATS.topMaxWin}</div>
                <div className="stat-item__label">Max Win</div>
              </div>
            </div>
          </div>

          {/* TRENDING */}
          <div className="widget">
            <div className="widget__head">
              <IconTrendingUp className="widget__icon" />
              <h2 className="widget__title">Trending</h2>
            </div>
            <div className="popular-list">
              <Link href="/review/sweet-bonanza" className="popular-item">
                <span className="popular-item__body">
                  <span className="popular-item__title">Sweet Bonanza</span>
                  <span className="popular-item__meta">Max Win 21.100x</span>
                </span>
              </Link>
              <Link href="/review/ganesha-fortune" className="popular-item">
                <span className="popular-item__body">
                  <span className="popular-item__title">Ganesha Fortune</span>
                  <span className="popular-item__meta">Max Win 100.000x</span>
                </span>
              </Link>
              <Link href="/review/wild-bandito" className="popular-item">
                <span className="popular-item__body">
                  <span className="popular-item__title">Wild Bandito</span>
                  <span className="popular-item__meta">Max Win 10.000x</span>
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}