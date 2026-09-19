import Link from "next/link";
import type { Article } from "@/types";
import { IconClock } from "@/components/icons";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/artikel/${article.slug}`} className="article-card">
      <span className="article-card__eyebrow">{article.category}</span>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>
      <span className="article-card__meta"><IconClock className="w-3 h-3" />{article.readingTime} menit baca</span>
    </Link>
  );
}