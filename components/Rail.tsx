"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";

interface RailProps {
  children: ReactNode;
  ariaLabel?: string;
}

export default function Rail({ children, ariaLabel = "Carousel" }: RailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => { el.removeEventListener("scroll", updateArrows); window.removeEventListener("resize", updateArrows); };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="rail">
      <button type="button" className="rail__arrow rail__arrow--prev" onClick={() => step(-1)} disabled={atStart} aria-label="Geser ke kiri"><IconChevronLeft className="w-5 h-5" /></button>
      <div ref={trackRef} className="rail__track" tabIndex={0} role="group" aria-label={ariaLabel}>{children}</div>
      <button type="button" className="rail__arrow rail__arrow--next" onClick={() => step(1)} disabled={atEnd} aria-label="Geser ke kanan"><IconChevronRight className="w-5 h-5" /></button>
    </div>
  );
}