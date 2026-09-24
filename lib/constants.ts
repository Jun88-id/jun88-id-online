// ============================================
// SITE CONFIG — jun88-id.info
// ============================================
export const SITE_CONFIG = {
  name: "Jun88",
  domain: "https://jun88-id.info",
  tagline: "Demo Slot Gratis — Uji Strategi Tanpa Deposit",
  description:
    "jun88-id.info adalah kanal demo slot independen. Mainkan demo gratis dari PG Soft & Pragmatic Play, pelajari RTP dan volatilitas, tanpa deposit dan tanpa registrasi.",
} as const;

// ============================================
// MAIN SITE — jun88id.com
// ============================================
export const MAIN_SITE = {
  url: "https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir",
  label: "Situs Utama",
  description: "Informasi lengkap dan akses penuh",
} as const;

// ============================================
// LICENSE INFO — Cyber Labs BV
// ============================================
export const LICENSE_INFO = {
  operator: "Cyber Labs BV",
  registration: "166785",
  address: "Zuikertuintjeweg Z/N, Curaçao",
  regulator: "Otoritas Curaçao (CGA)",
  licenseNumber: "OGL/2024/1696/1055",
  issued: "13 Maret 2025",
  representative: "Igagroup",
} as const;

// ============================================
// EXTERNAL LINKS
// ============================================
const H5_BASE = "https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir";
export const EXTERNAL_LINKS = {
  login: `${H5_BASE}&action=login`,
  register: `${H5_BASE}&action=register`,
  demo: `${H5_BASE}&action=demo`,
  promo: `${H5_BASE}&action=promo`,
  download: `${H5_BASE}&action=download`,
} as const;

// ============================================
// NAVIGATION
// ============================================
export const NAV_ITEMS = [
  { href: "/", label: "Beranda", icon: "home" },
  { href: "/review", label: "Review", icon: "star" },
  { href: "/panduan", label: "Panduan", icon: "book" },
  { href: "/artikel", label: "Artikel", icon: "message" },
  { href: "/faq", label: "FAQ", icon: "help" },
  { href: "/tentang", label: "Tentang", icon: "info" },
] as const;

// ============================================
// FOOTER LINKS
// ============================================
export const FOOTER_LINKS = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/review", label: "Review Game" },
  { href: "/panduan", label: "Panduan" },
  { href: "/artikel", label: "Artikel" },
  { href: "/faq", label: "FAQ" },
] as const;

// ============================================
// LEGAL LINKS
// ============================================
export const LEGAL_LINKS = [
  { href: "/privasi", label: "Kebijakan Privasi" },
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  { href: "/disclaimer", label: "Disclaimer 18+" },
  { href: "/bijak", label: "Bermain Bijak" },
] as const;

// ============================================
// TICKER — dengan keyword jun88
// ============================================
export const TICKER_ITEMS = [
  { prefix: "JUN88-ID", text: "Demo Slot Gratis Tanpa Deposit" },
  { prefix: "JUN88", text: "PG Soft & Pragmatic Play Resmi" },
  { prefix: "Lisensi", text: "Cyber Labs BV — CGA OGL/2024/1696/1055" },
  { prefix: "JUN88", text: "Review Mendalam Setiap Game" },
] as const;

// ============================================
// BENEFITS — faktual, bukan klaim
// ============================================
export const BENEFITS = [
  {
    icon: "shield",
    title: "Lisensi Resmi",
    description: "Dioperasikan Cyber Labs BV, lisensi CGA OGL/2024/1696/1055.",
  },
  {
    icon: "bolt",
    title: "Demo Instan",
    description: "Tanpa deposit, tanpa registrasi, langsung main.",
  },
  {
    icon: "trophy",
    title: "Review Mendalam",
    description: "Analisis RTP, volatilitas, dan mekanisme per game.",
  },
  {
    icon: "grid",
    title: "Koleksi Terkurasi",
    description: "Hanya game terbaik dari PG Soft & Pragmatic Play.",
  },
  {
    icon: "book",
    title: "Edukasi",
    description: "Panduan memahami RTP, volatilitas, dan fitur bonus.",
  },
] as const;

// ============================================
// DISCLAIMER 18+ — dipakai di footer
// ============================================
export const DISCLAIMER_18PLUS = {
  badge: "18+",
  text: "Situs ini ditujukan untuk pengguna berusia 18 tahun ke atas. Konten bersifat edukasi dan hiburan. Bermainlah secara bertanggung jawab.",
  links: [
    { href: "/bijak", label: "Bermain Bijak" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privasi", label: "Kebijakan Privasi" },
  ],
} as const;

// ============================================
// CTA LABELS — kata-kata netral untuk CTA
// ============================================
export const CTA_LABELS = {
  mainSite: "Kunjungi Situs Utama",
  mainSiteShort: "Situs Utama",
  infoMore: "Info Selengkapnya",
  infoLicense: "Info Lisensi",
  viewGames: "Lihat Semua Game",
  readGuide: "Baca Panduan",
  readArticle: "Lihat Artikel",
  playDemo: "Mainkan Demo",
  aboutUs: "Tentang Kami",
  faq: "Lihat FAQ",
} as const;