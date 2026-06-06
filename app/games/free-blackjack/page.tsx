import Link from "next/link";
import FreeBlackjackClient from "./FreeBlackjackClient";

export const metadata = {
  title: "Free Blackjack Online — Play Demo Blackjack No Download 2026",
  description:
    "Play free blackjack online instantly. Practice basic strategy, learn when to hit or stand, and sharpen your skills without risking real money. No download or registration required.",
  alternates: { canonical: "https://royalbetguide.com/games/free-blackjack/" },
  openGraph: {
    title: "Free Blackjack Online — Play Demo Blackjack No Download",
    url: "https://royalbetguide.com/games/free-blackjack/",
  },
};

export default function FreeBlackjackPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/games/" className="hover:text-corg-500">Games</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Free Blackjack</span>
      </div>

      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Play</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Free Blackjack Online</h1>
          <p className="mt-2 text-slate-500">Practice basic strategy and sharpen your skills — no money required</p>
        </div>

        <div className="mb-8 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-center text-sm text-amber-800">
          <strong>⚠️ 18+:</strong> This is a free practice game. No real money is involved. Always gamble responsibly.
        </div>

        {/* Game */}
        <FreeBlackjackClient />

        <div className="card-light mb-8 mt-8">
          <h2 className="text-xl font-bold text-corg-600">♠️ Blackjack Basic Strategy Tips</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-bold text-corg-600">Hard Totals</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                <li>8 or less: Always Hit</li>
                <li>9: Double vs 3–6, otherwise Hit</li>
                <li>10: Double vs 2–9, otherwise Hit</li>
                <li>11: Double vs 2–10, Hit vs Ace</li>
                <li>12: Stand vs 4–6, otherwise Hit</li>
                <li>13–16: Stand vs 2–6, otherwise Hit</li>
                <li>17+: Always Stand</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-bold text-corg-600">Soft Totals & Pairs</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                <li>Ace-2/Ace-3: Double vs 5–6, otherwise Hit</li>
                <li>Ace-4/Ace-5: Double vs 4–6, otherwise Hit</li>
                <li>Ace-6: Double vs 3–6, otherwise Hit</li>
                <li>Ace-7: Stand vs 2, 7–8; Double vs 3–6; Hit vs 9–Ace</li>
                <li>Ace-8+: Always Stand</li>
                <li>Pair Aces or 8s: Always Split</li>
                <li>Pair 10s: Never Split</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Ready to Play Real Money Blackjack?</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Once you have practised your basic strategy, find the best real-money blackjack casinos with high RTP tables, live dealer options, and generous welcome bonuses. Our <Link href="/reviews/" className="text-corg-500 hover:underline">expert reviews</Link> compare the top platforms for blackjack players.
          </p>
          <div className="mt-4 text-center">
            <Link href="/reviews/" className="btn-gold inline-flex">Find Blackjack Casinos →</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
