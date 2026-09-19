import type { Article } from "@/types";
import ArticleCard from "@/components/ArticleCard";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="article-list">
      {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
    </div>
  );
}