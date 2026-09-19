import Link from "next/link";
import type { GameBadge } from "@/types";
import { IconFlame, IconSparkle, IconStar } from "@/components/icons";

interface GameCardProps {
  slug: string;
  title: string;
  image: string;
  badge?: GameBadge;
}

const badgeConfig: Record<GameBadge, { label: string; className: string; Icon: typeof IconFlame }> = {
  hot: { label: "Hot", className: "game-badge--hot", Icon: IconFlame },
  new: { label: "Baru", className: "game-badge--new", Icon: IconSparkle },
  featured: { label: "Pilihan", className: "game-badge--featured", Icon: IconStar },
  top: { label: "Top", className: "game-badge--top", Icon: IconStar },
};

export default function GameCard({ slug, title, image, badge }: GameCardProps) {
  const badgeInfo = badge ? badgeConfig[badge] : null;

  return (
    <Link href={`/review/${slug}`} className="game-card">
      {badgeInfo && (
        <span className={`game-badge ${badgeInfo.className}`}>
          <badgeInfo.Icon className="w-3 h-3" />
          {badgeInfo.label}
        </span>
      )}
      <span className="game-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`Sampul permainan ${title}`}
          width={480}
          height={640}
          className="game-card__image"
          loading="lazy"
          decoding="async"
        />
      </span>
    </Link>
  );
}