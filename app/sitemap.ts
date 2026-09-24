import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { games } from "@/lib/games";
import { articles } from "@/lib/articles";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.domain;

  // Halaman statis
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/review`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/panduan`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/artikel`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tentang`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privasi`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/syarat-ketentuan`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/bijak`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Halaman game (review detail)
  const gamePages: MetadataRoute.Sitemap = games.map((g) => ({
    url: `${base}/review/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Halaman artikel
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/artikel/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Halaman panduan
  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/panduan/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...gamePages, ...articlePages, ...guidePages];
}