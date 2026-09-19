import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE_CONFIG, MAIN_SITE, CTA_LABELS } from "@/lib/constants";
import MobileDrawer from "@/components/MobileDrawer";

export default function Header() {
  return (
    <header className="site-header" lang="id">
      <div className="shell">
        <div className="site-header__inner">
          {/* KIRI: Hamburger + Logo */}
          <div className="flex items-center gap-2">
            <MobileDrawer />

            <Link
              href="/"
              className="brand-logo"
              aria-label={`${SITE_CONFIG.name} beranda`}
            >
              <Image
                src="/brand/logo-mark-jun88.webp"
                alt=""
                width={32}
                height={32}
                className="brand-logo__mark"
                priority
              />
              <span className="brand-logo__text">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          {/* TENGAH: Nav desktop */}
          <nav
            className="hidden md:flex items-center gap-1 ml-auto"
            aria-label="Navigasi utama"
          >
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* KANAN: CTA — bertumpuk di mobile, sejajar di desktop */}
          <div className="flex flex-col gap-1 ml-auto md:ml-0 md:flex-row md:items-center md:gap-2">
            {/* Situs Utama */}
            <a
              href={MAIN_SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold btn--compact"
            >
              {CTA_LABELS.mainSiteShort}
            </a>

            {/* Semua Game */}
            <Link href="/review" className="btn btn--ghost btn--compact">
              {CTA_LABELS.viewGames}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}