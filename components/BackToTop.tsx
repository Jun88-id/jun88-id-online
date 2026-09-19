"use client";

import { useState, useEffect } from "react";
import { IconChevronUp } from "@/components/icons";

export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!shown) return null;

  return (
    <button type="button" className="btn-round back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Kembali ke atas halaman"><IconChevronUp className="w-5 h-5" /></button>
  );
}