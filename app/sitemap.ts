import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { games } from "@/lib/games";
import { articles } from "@/lib/articles";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";

// ✅ Helper untuk pastikan trailing slash
const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.domain;

  // Halaman statis
  const staticPages: MetadataRoute.Sitemap = [
    { url: withSlash(`${base}/`), lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: withSlash(`${base}/review`), lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: withSlash(`${base}/panduan`), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: withSlash(`${base}/artikel`), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: withSlash(`${base}/faq`), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: withSlash(`${base}/tentang`), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: withSlash(`${base}/privasi`), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: withSlash(`${base}/syarat-ketentuan`), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: withSlash(`${base}/disclaimer`), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: withSlash(`${base}/bijak`), lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Halaman game (review detail)
  const gamePages: MetadataRoute.Sitemap = games.map((g) => ({
    url: withSlash(`${base}/review/${g.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Halaman artikel
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: withSlash(`${base}/artikel/${a.slug}`),
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Halaman panduan
  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: withSlash(`${base}/panduan/${g.slug}`),
    lastModified: new Date(g.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...gamePages, ...articlePages, ...guidePages];
}