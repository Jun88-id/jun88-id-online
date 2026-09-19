import { TICKER_ITEMS } from "@/lib/constants";
import { IconMegaphone } from "@/components/icons";

export default function Ticker() {
  return (
    <div className="ticker" role="region" aria-label="Pengumuman terbaru">
      <IconMegaphone className="ticker__icon" />
      <div className="ticker__viewport">
        <div className="ticker__track">
          <div className="ticker__group">{TICKER_ITEMS.map((item, i) => <span key={`a-${i}`} className="ticker__item">{item.prefix && <span className="ticker__highlight">{item.prefix} </span>}{item.text}</span>)}</div>
          <div className="ticker__group" aria-hidden="true">{TICKER_ITEMS.map((item, i) => <span key={`b-${i}`} className="ticker__item">{item.prefix && <span className="ticker__highlight">{item.prefix} </span>}{item.text}</span>)}</div>
        </div>
      </div>
    </div>
  );
}