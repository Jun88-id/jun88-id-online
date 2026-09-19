import Link from "next/link";
import type { Game } from "@/types";
import { IconStar, IconBolt } from "@/components/icons";

interface ReviewCardProps {
  game: Game;
}

export default function ReviewCard({ game }: ReviewCardProps) {
  return (
    <Link href={`/review/${game.slug}`} className="review-card">
      <div className="review-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={game.image} alt={game.title} />
      </div>
      <div className="review-card__body">
        <div className="review-card__header">
          <span className="review-card__provider">{game.provider}</span>
          <span className="review-card__badge">{game.volatility}</span>
        </div>
        <h3 className="review-card__title">{game.title}</h3>
        <p className="review-card__excerpt">{game.description}</p>
        <div className="review-card__stats">
          <span className="review-card__stat"><IconStar className="w-3.5 h-3.5" />RTP {game.rtp}%</span>
          <span className="review-card__stat"><IconBolt className="w-3.5 h-3.5" />Max {game.maxWin}</span>
        </div>
      </div>
    </Link>
  );
}