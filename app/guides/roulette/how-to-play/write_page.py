#!/usr/bin/env python3
"""Write page.tsx for How to Play Roulette guide using Python open()."""

content = r'''import Link from "next/link";

export const metadata = {
  title: "How to Play Roulette 2026 — Rules, Bets & Wheel Guide | Royal Bet Guide",
  description: "Learn how to play roulette in 2026. Complete guide covering rules, inside and outside bets, European vs American roulette differences, RTP, and wheel mechanics.",
  alternates: { canonical: "https://royalbetguide.com/guides/roulette/how-to-play/" },
};

export default function HowToPlayRoulettePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">&rarr;</span>
        <Link href="/guides/" className="hover:text-corg-500">Guides</Link><span className="mx-2">&rarr;</span>
        <Link href="/guides/roulette/" className="hover:text-corg-500">Roulette</Link><span className="mx-2">&rarr;</span>
        <span className="text-slate-800 font-semibold">How to Play Roulette</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Beginner&apos;s Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">How to Play Roulette</h1>
          <p className="mt-2 text-slate-500">Master the rules, bets, and wheel mechanics of Europe&apos;s most iconic casino game</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎡 The Roulette Wheel and Table</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Roulette is played on a spinning wheel divided into numbered pockets and a betting table where players place their chips. The wheel is spun in one direction while a small ball is spun in the opposite direction around a track. When the ball loses momentum, it falls into one of the numbered pockets, determining the winning number and colour.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The <strong>European roulette wheel</strong> has 37 pockets numbered 0 to 36. The <strong>American roulette wheel</strong> has 38 pockets with an additional 00 (double zero). Numbers are arranged in a specific sequence, alternating between red and black pockets — except for the green zero (and double zero on American wheels). The pockets are not in numerical order; instead, they are carefully balanced so that low and high numbers, odd and even numbers, and reds and blacks alternate as much as possible around the wheel.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The betting table mirrors the wheel layout with a grid of numbers 1-36 arranged in three columns of twelve rows, plus a zero (and double zero) at the head of the grid. Around the number grid, you will find boxes for outside bets: red/black, odd/even, high/low (1-18 and 19-36), dozens (1-12, 13-24, 25-36), and columns.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎯 How to Place Bets</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Before each spin, you place chips on the betting table to predict where the ball will land. You can make multiple bets on a single spin, covering different numbers and combinations. Chips are colour-coded to distinguish each player&apos;s bets at the table. Once all bets are placed, the croupier (or the software in online roulette) spins the wheel. No more bets are accepted once the ball is in motion.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎲 Inside Bets (Higher Risk, Higher Payout)</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Straight Up</strong> — Bet on a single number. Payout: 35:1. The highest paying bet in roulette, covering just one of the 37 or 38 pockets.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Split Bet</strong> — Bet on two adjacent numbers by placing chips on the line between them. Payout: 17:1.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Street Bet</strong> — Bet on three numbers in a horizontal row. Place chips at the end of the row. Payout: 11:1.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Corner Bet</strong> — Bet on four numbers that form a square. Place chips at the intersection of the four numbers. Payout: 8:1.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Six Line Bet</strong> — Bet on two adjacent rows covering six numbers. Place chips at the intersection where the two rows meet the outside betting area. Payout: 5:1.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🔴⚫ Outside Bets (Lower Risk, Lower Payout)</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Red or Black</strong> — Bet on the colour of the winning pocket. Covers 18 numbers. Payout: 1:1. Note that zero (and double zero) are green and are not covered by either red or black bets.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Odd or Even</strong> — Bet on whether the winning number is odd or even. Covers 18 numbers. Payout: 1:1. Zero is not counted as odd or even.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>High or Low</strong> — Bet on whether the number falls in the low range (1-18) or high range (19-36). Covers 18 numbers. Payout: 1:1.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Dozens</strong> — Bet on one of three groups of twelve numbers: 1-12 (first dozen), 13-24 (second dozen), or 25-36 (third dozen). Payout: 2:1.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Columns</strong> — Bet on one of three vertical columns of twelve numbers on the betting table. Payout: 2:1.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">Outside bets are ideal for beginners as they offer near 50/50 odds (slightly reduced by the zero pockets) and allow you to stay in the game longer while learning the mechanics.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🌍 European vs American Roulette</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>European Roulette</strong> — 37 pockets (0-36). House edge: 2.7% on all bets. RTP: 97.3%. Many European tables also offer the <em>En Prison</em> or <em>La Partage</em> rule: if the ball lands on zero, even-money bets (red/black, odd/even, high/low) are either locked for the next spin (En Prison) or returned half your stake (La Partage). With La Partage, the house edge on even-money bets drops to just 1.35% — the best odds you will find in any casino.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>American Roulette</strong> — 38 pockets (0, 00, 1-36). House edge: 5.26% on all bets. RTP: 94.74%. The double zero nearly doubles the house edge compared to European roulette. American tables rarely offer En Prison or La Partage rules.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Which should you play?</strong> Always choose European roulette when available. The 2.7% house edge vs 5.26% is a massive difference over time. A $10 bet on European roulette loses an average of $0.27 per spin; the same bet on American roulette loses $0.53 per spin. Over hundreds of spins, this difference adds up significantly. See our <Link href="/guides/roulette/" className="text-corg-500 hover:underline">roulette guide</Link> for a detailed comparison and our <Link href="/guides/roulette/strategy/" className="text-corg-500 hover:underline">strategy guide</Link> for betting systems.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">📊 Understanding Roulette Odds and RTP</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Every roulette bet has a fixed house edge determined by the zero pockets. The payout odds reflect the probability of winning <em>as if</em> the zero(s) didn&apos;t exist. For example, a straight-up bet pays 35:1, but the true odds are 36:1 (European) or 37:1 (American). The difference is the house edge.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>European Roulette RTP: 97.3%</strong> — For every $100 wagered, the mathematical expectation is to receive $97.30 back over the long term. This applies to all standard bets equally.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>American Roulette RTP: 94.74%</strong> — The double zero reduces the RTP significantly. For every $100 wagered, you can expect $94.74 back over the long term.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The house edge means that <strong>no strategy or betting system can guarantee profits</strong> in the long run. Roulette is a game of chance designed for entertainment. Always set a budget before you play and stick to it.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">❓ Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-corg-600">What is the best bet for a beginner?</h3>
              <p className="mt-1 text-sm text-slate-600">Outside bets (red/black, odd/even, high/low) are best for beginners. They pay 1:1, cover 18 numbers, and keep you in the game longer while you learn the mechanics. Stick to European roulette for the lowest house edge.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">What is the difference between European and American roulette?</h3>
              <p className="mt-1 text-sm text-slate-600">European roulette has one zero (37 pockets, 2.7% house edge, 97.3% RTP). American roulette has an extra double zero (38 pockets, 5.26% house edge, 94.74% RTP). European roulette is always the better choice.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">Can you win consistently at roulette?</h3>
              <p className="mt-1 text-sm text-slate-600">No. Roulette is a game of pure chance with a built-in house edge. Every spin is independent. While you can have winning sessions through luck, no strategy or system can overcome the mathematical house edge in the long run.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">What does &quot;La Partage&quot; mean in roulette?</h3>
              <p className="mt-1 text-sm text-slate-600">La Partage is a rule in European/French roulette. If the ball lands on zero, you lose only half of your even-money bet instead of the entire stake. This reduces the house edge on even-money bets from 2.7% to 1.35%.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Play Roulette?</h2>
          <p className="mt-2 text-white/70">Find the best online casinos offering European roulette with La Partage rules and generous welcome bonuses.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos &rarr;</Link>
        </div>
      </article>
    </div>
  );
}
'''

import os

path = "/Users/suren/royalbetguide/app/guides/roulette/how-to-play/page.tsx"
os.makedirs(os.path.dirname(path), exist_ok=True)
with open(path, "w") as f:
    f.write(content)
print(f"✅ Written {len(content)} bytes to {path}")
