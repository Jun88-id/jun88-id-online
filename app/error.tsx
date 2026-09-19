"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="shell py-20 flex flex-col items-center text-center gap-6">
      <h1 className="text-4xl md:text-6xl font-bold text-purple">Terjadi Kesalahan</h1>
      <p className="text-fine max-w-md">Maaf, ada masalah teknis. Silakan coba lagi atau kembali ke beranda.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button type="button" onClick={() => reset()} className="btn btn--gold">Coba Lagi</button>
        <Link href="/" className="btn btn--ghost">Beranda</Link>
      </div>
    </div>
  );
}