import Link from "next/link";
import type { Guide } from "@/types";
import { IconClock } from "@/components/icons";

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link href={`/panduan/${guide.slug}`} className="article-card">
      <span className="article-card__eyebrow">{guide.category}</span>
      <h3 className="article-card__title">{guide.title}</h3>
      <p className="article-card__excerpt">{guide.excerpt}</p>
      <span className="article-card__meta"><IconClock className="w-3 h-3" />{guide.readingTime} menit baca</span>
    </Link>
  );
}