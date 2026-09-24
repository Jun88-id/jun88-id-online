import type { Game, Provider, GameCategory } from "@/types";

// ============================================
// GAMES — jun88-id.info
// Deskripsi ditulis ulang dengan angle analisis
// ============================================
export const games: Game[] = [
  {
    slug: "sweet-bonanza",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    category: "cluster",
    badge: "top",
    rtp: 96.51,
    volatility: "Tinggi",
    maxWin: "21.100x",
    minBet: "Rp 200",
    maxBet: "Rp 1.000.000",
    reels: "6 × 5",
    paylines: "Cluster Pays",
    releaseYear: 2019,
    description:
      "Analisis Sweet Bonanza: mengapa slot cluster pays 6×5 ini tetap relevan di 2026. RTP 96.51%, volatilitas tinggi, max win 21.100x, dan mekanisme Tumble yang bikin putaran beruntun.",
    image: "/games/sweet-bonanza.webp",
    features: ["Cluster Pays", "Tumble", "Free Spins", "Multiplier Bomb", "Ante Bet"],
    intro:
      "Sweet Bonanza bukan sekadar slot permen. Dengan grid 6×5 dan cluster pays, game ini mengubah cara pemain melihat kombinasi. Di jun88-id.info, Anda bisa menguji ritme game ini tanpa deposit.",
    story:
      "Bertema dunia permen yang manis, Sweet Bonanza membawa pemain ke negeri ajaib dengan simbol buah-buahan dan permen warna-warni. Tapi di balik visual ceria itu, ada mekanisme volatilitas tinggi yang perlu dipahami sebelum bermain.",
    visuals:
      "Visual Sweet Bonanza menampilkan warna-warna cerah dengan simbol permen, buah, dan lollipop. Latar belakang gradien ungu-pink memberi kesan manis yang konsisten dengan tema.",
    symbols:
      "Simbol utama: buah apel, anggur, semangka, pisang, dan permen lollipop. Simbol Multiplier Bomb hadir dengan pengganda 2x-100x — ini yang bikin Sweet Bonanza punya potensi max win besar.",
    analysis:
      "Sweet Bonanza adalah slot dengan volatilitas tinggi yang cocok untuk pemain yang mencari max win besar. Tapi perlu diingat: volatilitas tinggi berarti periode tanpa kemenangan bisa panjang. Di mode demo, Anda bisa mengukur seberapa sering Tumble terjadi sebelum memutuskan bermain dengan uang asli.",
    strategy:
      "Mulai dengan taruhan minimal untuk memahami ritme. Manfaatkan fitur Ante Bet untuk peluang Free Spins lebih besar. Di mode demo, coba bandingkan hasil dengan dan tanpa Ante Bet untuk melihat dampaknya.",
    safePlay:
      "Volatilitas tinggi berarti bisa ada periode panjang tanpa kemenangan. Tetapkan batas anggaran dan waktu. Gunakan mode demo untuk memahami ritme sebelum bermain dengan uang asli.",
  },
  {
    slug: "wild-bandito",
    title: "Wild Bandito",
    provider: "PG Soft",
    category: "adventure",
    badge: "hot",
    rtp: 96.74,
    volatility: "Tinggi",
    maxWin: "10.000x",
    minBet: "Rp 200",
    maxBet: "Rp 100.000",
    reels: "5 × 3",
    paylines: "243 Ways",
    releaseYear: 2024,
    description:
      "Wild Bandito dari PG Soft: slot 243 Ways dengan tema bandit Meksiko. RTP 96.74%, volatilitas tinggi, max win 10.000x. Analisis mekanisme Stacked Wild dan Free Spins.",
    image: "/games/wild-bandito.webp",
    features: ["243 Ways", "Stacked Wild", "Free Spins", "Multiplier", "Scatter"],
    intro:
      "Wild Bandito adalah slot dari PG Soft dengan tema bandit Meksiko yang penuh aksi. Dengan 243 Ways dan Stacked Wild, game ini menawarkan kombinasi yang lebih fleksibel dibanding slot paylines konvensional.",
    story:
      "Bertema petualangan bandit Meksiko di gurun, Wild Bandito membawa pemain ke dunia penuh aksi dan adrenalin. Simbol-simbolnya mencerminkan tema ini dengan konsisten.",
    visuals:
      "Visual Wild Bandito menampilkan gurun Meksiko dengan simbol bandit, pistol, kaktus, dan koin emas. Palet warna hangat (oranye, cokelat, emas) memberi kesan petualangan.",
    symbols:
      "Simbol utama: bandit Meksiko, pistol, kaktus, topi sombrero, dan koin emas. Stacked Wild adalah kunci — simbol ini bisa menumpuk dan membuka kombinasi besar.",
    analysis:
      "Wild Bandito cocok untuk pemain yang menyukai tema petualangan dengan volatilitas tinggi dari PG Soft. Mekanisme 243 Ways memberi lebih banyak peluang kombinasi dibanding slot 20 paylines. Di mode demo, Anda bisa menguji seberapa sering Stacked Wild muncul.",
    strategy:
      "Manfaatkan taruhan sedang untuk keseimbangan. Fokus pada Stacked Wild untuk kombinasi besar. Di mode demo, coba variasikan taruhan untuk melihat dampaknya pada frekuensi kemenangan.",
    safePlay:
      "Volatilitas tinggi, kelola modal dengan hati-hati. Gunakan mode demo untuk memahami ritme game tanpa risiko.",
  },
  {
    slug: "pinata-wins",
    title: "Pinata Wins",
    provider: "PG Soft",
    category: "cluster",
    badge: "new",
    rtp: 96.50,
    volatility: "Tinggi",
    maxWin: "10.000x",
    minBet: "Rp 200",
    maxBet: "Rp 100.000",
    reels: "5 × 5",
    paylines: "Cluster Pays",
    releaseYear: 2025,
    description:
      "Pinata Wins dari PG Soft: slot cluster pays 5×5 dengan tema pesta Meksiko. RTP 96.50%, volatilitas tinggi, max win 10.000x. Analisis fitur Pinata Bonus dan Tumble.",
    image: "/games/pinata-wins.webp",
    features: ["Cluster Pays", "Tumble", "Free Spins", "Multiplier", "Pinata Bonus"],
    intro:
      "Pinata Wins adalah slot dari PG Soft dengan tema pesta Meksiko. Dengan grid 5×5 dan cluster pays, game ini menghadirkan mekanisme yang mirip Sweet Bonanza tapi dengan sentuhan budaya Meksiko.",
    story:
      "Bertema pesta Meksiko, Pinata Wins membawa pemain ke perayaan warna-warni dengan pinata yang digantung. Setiap putaran terasa seperti pesta yang belum selesai.",
    visuals:
      "Visual Pinata Wins penuh warna dengan simbol pinata, kaktus, sombrero, dan confetti. Palet warna cerah mencerminkan semangat fiesta.",
    symbols:
      "Simbol utama: pinata warna-warni, kaktus, sombrero, dan koin emas. Fitur Pinata Bonus adalah daya tarik utama — memberi kemenangan tambahan saat dipicu.",
    analysis:
      "Pinata Wins cocok untuk pemain yang menyukai tema ceria dengan mekanisme cluster pays. Dengan RTP 96.50% dan volatilitas tinggi, game ini menawarkan keseimbangan antara frekuensi dan potensi max win. Di mode demo, Anda bisa menguji seberapa sering Pinata Bonus muncul.",
    strategy:
      "Manfaatkan fitur Pinata Bonus untuk kemenangan tambahan. Di mode demo, coba bandingkan hasil dengan dan tanpa taruhan tinggi.",
    safePlay:
      "Volatilitas tinggi, tetapkan batas anggaran. Gunakan mode demo untuk memahami ritme game.",
  },
  {
    slug: "the-dog-house",
    title: "The Dog House",
    provider: "Pragmatic Play",
    category: "cluster",
    badge: "featured",
    rtp: 96.51,
    volatility: "Sedang",
    maxWin: "6.750x",
    minBet: "Rp 200",
    maxBet: "Rp 1.000.000",
    reels: "5 × 3",
    paylines: "20",
    releaseYear: 2019,
    description:
      "The Dog House dari Pragmatic Play: slot 20 paylines dengan tema anjing lucu. RTP 96.51%, volatilitas sedang, max win 6.750x. Analisis Sticky Wild dan Free Spins.",
    image: "/games/the-dog-house.webp",
    features: ["20 Paylines", "Stacked Wild", "Free Spins", "Multiplier", "Sticky Wild"],
    intro:
      "The Dog House adalah slot dari Pragmatic Play dengan tema anjing lucu di rumah. Dengan volatilitas sedang, game ini cocok untuk pemain yang ingin sesi bermain lebih santai.",
    story:
      "Bertema rumah anjing, The Dog House membawa pemain ke dunia penuh keceriaan dengan anjing-anjing lucu. Setiap simbol mencerminkan karakter anjing yang berbeda.",
    visuals:
      "Visual The Dog House menampilkan rumah anjing dengan simbol tulang, kalung, dan mainan. Palet warna hangat memberi kesan rumah yang nyaman.",
    symbols:
      "Simbol utama: berbagai jenis anjing (bulldog, poodle, dachshund, shiba inu), tulang, kalung, dan mainan. Sticky Wild saat Free Spins adalah kunci kombinasi besar.",
    analysis:
      "The Dog House cocok untuk pemain yang menyukai tema ceria dengan volatilitas sedang. Dengan RTP 96.51% dan 20 paylines, game ini menawarkan frekuensi kemenangan yang lebih tinggi dibanding slot volatilitas tinggi. Di mode demo, Anda bisa menguji seberapa sering Sticky Wild muncul.",
    strategy:
      "Manfaatkan Sticky Wild saat Free Spins untuk kombinasi besar. Di mode demo, coba variasikan taruhan untuk melihat dampaknya pada frekuensi Free Spins.",
    safePlay:
      "Volatilitas sedang, cocok untuk sesi bermain lebih lama. Tetap tetapkan batas anggaran dan waktu.",
  },
  {
    slug: "sugar-rush",
    title: "Sugar Rush",
    provider: "Pragmatic Play",
    category: "cluster",
    badge: "hot",
    rtp: 96.50,
    volatility: "Tinggi",
    maxWin: "5.000x",
    minBet: "Rp 200",
    maxBet: "Rp 1.000.000",
    reels: "7 × 7",
    paylines: "Cluster Pays",
    releaseYear: 2022,
    description:
      "Sugar Rush dari Pragmatic Play: slot cluster pays 7×7 dengan tema permen. RTP 96.50%, volatilitas tinggi, max win 5.000x. Analisis Multiplier Spot dan Tumble.",
    image: "/games/sugar-rush.webp",
    features: ["Cluster Pays", "Tumble", "Multiplier Spot", "Free Spins", "Sweet Spots"],
    intro:
      "Sugar Rush adalah slot dari Pragmatic Play dengan tema permen warna-warni. Dengan grid 7×7 dan cluster pays, game ini menghadirkan mekanisme yang lebih kompleks dibanding slot 5×3.",
    story:
      "Bertema dunia permen, Sugar Rush membawa pemain ke negeri manis dengan simbol jelly, permen, dan gula-gula. Grid 7×7 memberi ruang lebih luas untuk kombinasi.",
    visuals:
      "Visual Sugar Rush penuh warna dengan simbol permen jelly, gula-gula, dan buah. Palet warna cerah mencerminkan tema manis.",
    symbols:
      "Simbol utama: permen jelly warna-warni, lollipop, dan hati. Multiplier Spot adalah fitur kunci — memberi pengganda pada posisi tertentu.",
    analysis:
      "Sugar Rush cocok untuk pemain yang menyukai tema ceria dengan mekanisme cluster pays. Dengan grid 7×7, game ini menawarkan lebih banyak peluang kombinasi dibanding slot 6×5. Di mode demo, Anda bisa menguji seberapa sering Multiplier Spot muncul.",
    strategy:
      "Manfaatkan Multiplier Spot untuk kemenangan besar. Di mode demo, coba bandingkan hasil dengan dan tanpa taruhan tinggi.",
    safePlay:
      "Volatilitas tinggi, tetapkan batas anggaran. Gunakan mode demo untuk memahami ritme game.",
  },
  {
    slug: "ganesha-fortune",
    title: "Ganesha Fortune",
    provider: "PG Soft",
    category: "adventure",
    badge: "featured",
    rtp: 96.72,
    volatility: "Sedang",
    maxWin: "100.000x",
    minBet: "Rp 200",
    maxBet: "Rp 100.000",
    reels: "6 × 5",
    paylines: "32.400 Ways",
    releaseYear: 2023,
    description:
      "Ganesha Fortune dari PG Soft: slot 32.400 Ways dengan tema dewa Hindu Ganesha. RTP 96.72%, volatilitas sedang, max win 100.000x. Analisis Cascading Reels dan Multiplier.",
    image: "/games/ganesha-fortune.webp",
    features: ["32.400 Ways", "Cascading Reels", "Wild Symbol", "Free Spins", "Multiplier 2x-6x"],
    intro:
      "Ganesha Fortune adalah slot dari PG Soft dengan tema dewa Ganesha dari mitologi Hindu. Dengan 32.400 Ways, game ini menawarkan salah satu jumlah kombinasi terbanyak di koleksi kami.",
    story:
      "Bertema mitologi Hindu, Ganesha Fortune membawa pemain ke dunia spiritual dengan simbol dewa Ganesha. Setiap simbol mencerminkan elemen budaya India yang kaya.",
    visuals:
      "Visual Ganesha Fortune menampilkan simbol dewa Ganesha, ornamen India, dan warna keemasan yang megah. Palet warna emas dan merah memberi kesan spiritual.",
    symbols:
      "Simbol utama: Ganesha, ornamen India, batu permata, dan simbol klasik. Cascading Reels adalah kunci — simbol yang menang akan hilang dan digantikan simbol baru.",
    analysis:
      "Ganesha Fortune cocok untuk pemain yang menyukai tema mitologi dengan potensi max win 100.000x. Dengan 32.400 Ways dan Cascading Reels, game ini menawarkan kombinasi yang lebih kompleks dibanding slot 243 Ways. Di mode demo, Anda bisa menguji seberapa sering Cascading terjadi.",
    strategy:
      "Manfaatkan Cascading Reels untuk kemenangan beruntun. Di mode demo, coba variasikan taruhan untuk melihat dampaknya pada frekuensi Cascading.",
    safePlay:
      "Volatilitas sedang, cocok untuk sesi bermain santai. Tetap tetapkan batas anggaran dan waktu.",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGamesByProvider(provider: Provider): Game[] {
  return games.filter((g) => g.provider === provider);
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return games.filter((g) => g.category === category);
}

export function getFeaturedGames(limit = 6): Game[] {
  return games.slice(0, limit);
}

export function getGamesByBadge(badge: string): Game[] {
  return games.filter((g) => g.badge === badge);
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase().trim();
  if (!q) return games;
  return games.filter(
    (g) => g.title.toLowerCase().includes(q) || g.provider.toLowerCase().includes(q)
  );
}

export const PROVIDERS: Provider[] = ["Pragmatic Play", "PG Soft"];

// ============================================
// CATEGORIES — hanya yang ada isinya
// ============================================
export const CATEGORIES: { slug: string; label: string; count: number }[] = [
  { slug: "cluster", label: "Cluster Pays", count: getGamesByCategory("cluster").length },
  { slug: "adventure", label: "Adventure", count: getGamesByCategory("adventure").length },
];

export const SITE_STATS = {
  totalGames: games.length,
  totalProviders: PROVIDERS.length,
  maxRTP: Math.max(...games.map((g) => g.rtp)),
  topMaxWin: "100.000x",
} as const;