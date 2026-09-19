"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NAV_ITEMS,
  SITE_CONFIG,
  MAIN_SITE,
  CTA_LABELS,
} from "@/lib/constants";
import {
  ICONS,
  IconClose,
  IconMenu,
  IconStar,
  IconGift,
  IconExternalLink,
} from "@/components/icons";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const drawerContent = (
    <>
      {open && (
        <div
          className="drawer-overlay md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="drawer-navigasi"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100dvh",
          width: "18rem",
          maxWidth: "85vw",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
          borderRight: "2px solid #a78bfa",
          backgroundColor: "#0f0524",
          boxShadow: "0 0 40px rgba(0,0,0,0.9)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 250ms ease",
          pointerEvents: open ? "auto" : "none",
          isolation: "isolate",
        }}
      >
        <div className="drawer__head">
          <span className="brand-logo">
            <Image
              src="/brand/logo-mark-jun88.webp"
              alt=""
              width={30}
              height={30}
              className="brand-logo__mark"
            />
            <span className="brand-logo__text">{SITE_CONFIG.name}</span>
          </span>
          <button
            type="button"
            className="btn-round"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu navigasi"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            const isActive = pathname === item.href;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="drawer__link"
                aria-current={isActive ? "page" : undefined}
                style={{ backgroundColor: "rgba(167,139,250,0.05)" }}
              >
                {Icon && <Icon className="w-5 h-5 shrink-0" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action menu — demo & internal, bukan affiliate */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          <a
            href={MAIN_SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="action-menu__item"
            aria-label={MAIN_SITE.label}
          >
            <IconExternalLink className="action-menu__icon" />
            <span className="action-menu__label">Situs</span>
          </a>
          <Link href="/review" className="action-menu__item" aria-label="Review">
            <IconGift className="action-menu__icon" />
            <span className="action-menu__label">Review</span>
          </Link>
          <Link href="/panduan" className="action-menu__item" aria-label="Panduan">
            <IconStar className="action-menu__icon" />
            <span className="action-menu__label">Panduan</span>
          </Link>
        </div>

        {/* CTA — ke situs utama, bukan affiliate */}
        <div style={{ marginTop: "auto", display: "grid", gap: "0.5rem" }}>
          <a
            href={MAIN_SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold w-full"
          >
            {CTA_LABELS.mainSiteShort}
          </a>
          <Link href="/tentang" className="btn btn--ghost w-full">
            {CTA_LABELS.infoLicense}
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        className="btn-round md:hidden shrink-0"
        onClick={() => setOpen(true)}
        aria-label="Buka menu navigasi"
        aria-expanded={open}
        aria-controls="drawer-navigasi"
      >
        <IconMenu className="w-5 h-5" />
      </button>
      {mounted && createPortal(drawerContent, document.body)}
    </>
  );
}