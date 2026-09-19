// ============================================
// PROVIDER
// ============================================
export type Provider = "Pragmatic Play" | "PG Soft" | "Habanero" | "Slot88";

// ============================================
// GAME / REVIEW
// ============================================
export type Volatility = "Rendah" | "Sedang" | "Tinggi" | "Sangat Tinggi";
export type GameCategory = "cluster" | "adventure" | "mahjong" | "classic" | "megaways";
export type GameBadge = "hot" | "new" | "featured" | "top";

export interface Game {
  slug: string;
  title: string;
  provider: Provider;
  category: GameCategory;
  badge?: GameBadge;
  rtp: number;
  volatility: Volatility;
  maxWin: string;
  minBet: string;
  maxBet: string;
  reels: string;
  paylines: string;
  releaseYear: number;
  description: string;
  image: string;
  features: string[];
  intro: string;
  story: string;
  visuals: string;
  symbols: string;
  analysis: string;
  strategy: string;
  safePlay: string;
}

// ============================================
// ARTICLE
// ============================================
export type ArticleCategory = "Berita" | "Tips" | "Panduan" | "Informasi";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readingTime: number;
  excerpt: string;
  body: string;
  meta: string;
}

// ============================================
// GUIDE
// ============================================
export type GuideCategory = "Dasar" | "Pemula" | "Strategi" | "Fitur" | "Tips";

export interface Guide {
  slug: string;
  title: string;
  category: GuideCategory;
  date: string;
  readingTime: number;
  excerpt: string;
  body: string;
  meta: string;
}

// ============================================
// NAV
// ============================================
export interface NavItem {
  href: string;
  label: string;
  icon: string;
}