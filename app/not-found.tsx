import type { Metadata } from "next";
import Link from "next/link";
import { IconHome, IconStar } from "@/components/icons";

export const metadata: Metadata = { title: "Halaman Tidak Ditemukan - Jun88", description: "Halaman yang Anda cari tidak ada atau sudah dipindahkan." };

export default function NotFound() {
  return (
    <div className="shell py-20 flex flex-col items-center text-center gap-6">
      <h1 className="text-6xl md:text-8xl font-bold text-purple">404</h1>
      <h2 className="text-xl md:text-2xl font-bold text-purple-light">Halaman Tidak Ditemukan</h2>
      <p className="text-fine max-w-md">Halaman yang Anda cari tidak ada atau sudah dipindahkan. Silakan kembali ke beranda atau jelajahi review game.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn btn--gold"><IconHome className="w-4 h-4" />Beranda</Link>
        <Link href="/review" className="btn btn--ghost"><IconStar className="w-4 h-4" />Review Game</Link>
      </div>
    </div>
  );
}