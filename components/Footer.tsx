import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_LINKS,
  LEGAL_LINKS,
  SITE_CONFIG,
  LICENSE_INFO,
  MAIN_SITE,
  DISCLAIMER_18PLUS,
  CTA_LABELS,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" lang="id">
      <div className="shell space-y-6">
        <div className="site-footer__grid">
          {/* Kolom 1: Brand + Lisensi */}
          <div className="space-y-3">
            <Link href="/" className="brand-logo" aria-label={`${SITE_CONFIG.name} beranda`}>
              <Image
                src="/brand/logo-jun88-id-online.webp"
                alt={SITE_CONFIG.name}
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-fine text-sm max-w-xs">
              {SITE_CONFIG.tagline}. Mainkan demo slot gratis dari PG Soft & Pragmatic Play tanpa deposit.
            </p>

            {/* Lisensi lengkap — sinyal trust YMYL */}
            <div className="text-fine text-xs space-y-1">
              <p>
                Dioperasikan <strong>{LICENSE_INFO.operator}</strong>
              </p>
              <p>
                No. Registrasi: <strong>{LICENSE_INFO.registration}</strong>
              </p>
              <p>Lisensi {LICENSE_INFO.regulator}</p>
              <p>
                No. Lisensi: <strong>{LICENSE_INFO.licenseNumber}</strong>
              </p>
              <p>Diterbitkan: {LICENSE_INFO.issued}</p>
            </div>
          </div>

          {/* Kolom 2: Menu Utama */}
          <nav aria-label="Menu utama" className="space-y-3">
            <h3 className="site-footer__title">Menu Utama</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fine text-sm hover:text-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 3: Legal */}
          <nav aria-label="Menu legal" className="space-y-3">
            <h3 className="site-footer__title">Informasi</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fine text-sm hover:text-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 4: CTA ke situs utama — natural */}
          <div className="space-y-3">
            <h3 className="site-footer__title">{MAIN_SITE.label}</h3>
            <p className="text-fine text-sm">
              Untuk informasi lengkap dan akses penuh, kunjungi situs utama kami.
            </p>
            <a
              href={MAIN_SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold w-full"
            >
              {CTA_LABELS.mainSite}
            </a>
            <Link href="/tentang" className="btn btn--ghost w-full">
              {CTA_LABELS.infoLicense}
            </Link>
          </div>
        </div>

        {/* Notice 18+ */}
        <div className="widget text-center space-y-3">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink/10 border-2 border-pink/40">
            <span className="text-xl font-bold text-pink">{DISCLAIMER_18PLUS.badge}</span>
          </div>
          <p className="text-fine text-sm max-w-2xl mx-auto">{DISCLAIMER_18PLUS.text}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {DISCLAIMER_18PLUS.links.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn--ghost text-xs">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="site-footer__bottom">
          <p className="text-fine text-xs">
            &copy; {year} {SITE_CONFIG.name}. Semua hak dilindungi.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE_CONFIG.domain}
              className="text-fine text-xs hover:text-purple transition-colors"
              aria-label={`Situs resmi ${SITE_CONFIG.name}`}
            >
              {SITE_CONFIG.domain.replace("https://", "")}
            </a>
            <span className="text-fine text-xs" aria-hidden="true">
              ·
            </span>
            <a
              href={MAIN_SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fine text-xs hover:text-purple transition-colors"
              aria-label={MAIN_SITE.label}
            >
              jun88id.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}