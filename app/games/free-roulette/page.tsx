import Link from "next/link";
import FreeRouletteClient from "./FreeRouletteClient";

export const metadata = {
  title: "Free Roulette Online — Play European Roulette Demo No Download 2026",
  description:
    "Play free European roulette online instantly. Practice betting strategies, learn the wheel layout, and sharpen your skills without risking real money. No download or registration required.",
  alternates: { canonical: "https://royalbetguide.com/games/free-roulette/" },
  openGraph: {
    title: "Free Roulette Online — Play European Roulette Demo No Download",
    url: "https://royalbetguide.com/games/free-roulette/",
  },
};

export default function FreeRoulettePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/games/" className="hover:text-corg-500">Games</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Free Roulette</span>
      </div>

      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Play</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Free European Roulette</h1>
          <p className="mt-2 text-slate-500">Practice your betting strategy on a single-zero European wheel — no money required</p>
        </div>

        <div className="mb-8 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-center text-sm text-amber-800">
          <strong>⚠️ 18+:</strong> This is a free practice game. No real money is involved. Always gamble responsibly.
        </div>

        {/* Game */}
        <FreeRouletteClient />

        <div className="card-light mb-8 mt-8">
          <h2 className="text-xl font-bold text-corg-600">🎡 Roulette Betting Guide</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-bold text-corg-600">Inside Bets (Higher Risk)</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                <li><strong>Straight Up</strong> — 1 number, pays 35:1</li>
                <li><strong>Split</strong> — 2 numbers, pays 17:1</li>
                <li><strong>Street</strong> — 3 numbers, pays 11:1</li>
                <li><strong>Corner</strong> — 4 numbers, pays 8:1</li>
                <li><strong>Line</strong> — 6 numbers, pays 5:1</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-bold text-corg-600">Outside Bets (Lower Risk)</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                <li><strong>Red / Black</strong> — pays 1:1</li>
                <li><strong>Even / Odd</strong> — pays 1:1</li>
                <li><strong>High / Low</strong> — pays 1:1</li>
                <li><strong>Dozens</strong> — pays 2:1</li>
                <li><strong>Columns</strong> — pays 2:1</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            European roulette has a single zero (0), giving it a house edge of just 2.70% —
            half that of American roulette which adds a double zero (00). Always choose
            European roulette when available for the best odds.
          </p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Ready to Play Real Money Roulette?</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Once you have practised your strategy, find the best real-money roulette casinos with European wheels, live dealer tables, and generous welcome bonuses. Our <Link href="/reviews/" className="text-corg-500 hover:underline">expert reviews</Link> compare the top platforms for roulette players.
          </p>
          <div className="mt-4 text-center">
            <Link href="/reviews/" className="btn-gold inline-flex">Find Roulette Casinos →</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
