import type { Guide } from "@/types";
import GuideCard from "@/components/GuideCard";

interface GuideListProps {
  guides: Guide[];
}

export default function GuideList({ guides }: GuideListProps) {
  return (
    <div className="article-list">
      {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
    </div>
  );
}