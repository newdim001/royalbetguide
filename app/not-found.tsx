import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404: This page could not be found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f172a] text-[#e2e8f0]">
      <div className="max-w-[480px] p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e293b] text-3xl">
          🎲
        </div>
        <h1 className="mb-2 text-4xl font-bold text-[#f59e0b]">404</h1>
        <p className="mb-6 text-lg text-[#94a3b8]">This page could not be found.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#0f172a] transition-all hover:bg-[#d97706]"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
