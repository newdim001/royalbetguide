import Link from "next/link";

export const metadata = {
  title: "Roulette Guide 2026 — European vs American, RTP & Best Online Casinos",
  description: "Master roulette with our expert guide. Learn European (97.3% RTP) vs American (94.74%) roulette differences, popular variants, betting strategies, and where to play online.",
};

export default function GuidePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play Roulette — Complete Guide 2026",
    description: "Master roulette with our expert guide. Learn rules, betting strategies, house edge, and discover the best online casinos to play for real money.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Understand the Rules", text: "Roulette is played with a spinning wheel and a ball. Players bet on where the ball will land. The wheel has 37 (European) or 38 (American) numbered pockets, alternating between red and black, with one or two green zero pockets." },
      { "@type": "HowToStep", position: 2, name: "Learn the Bet Types", text: "Inside bets (straight, split, street, corner) offer higher payouts but lower odds. Outside bets (red/black, odd/even, high/low) pay even money but win nearly 50% of the time." },
      { "@type": "HowToStep", position: 3, name: "Choose European Over American", text: "European roulette has a single zero (2.7% house edge), while American roulette has a double zero (5.26% house edge). Always choose European roulette when available." },
      { "@type": "HowToStep", position: 4, name: "Apply Basic Strategy", text: "Use strategies like the Martingale (double after loss), Fibonacci, or D'Alembert systems. Remember that no strategy can overcome the house edge long-term." },
      { "@type": "HowToStep", position: 5, name: "Manage Your Bankroll", text: "Set a budget before playing. Use the en prison or la partage rules when available in European roulette to reduce the house edge to 1.35% on even-money bets." }
    ]
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/guides/" className="hover:text-corg-500">Guides</Link>
        <span className="mx-2">→</span>
        <span className="text-white">Roulette</span>
      </div>

      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          🎮 Game Guide
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Roulette Guide</h1>
        <p className="mt-2 text-slate-500">Master the wheel with expert tips, RTP breakdowns, and winning strategies</p>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">Overview of Roulette</h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Roulette is one of the most iconic casino games in the world, famed for its spinning wheel, bouncing ball, and
          the electric anticipation as the ball slows to a stop. Originating in 18th-century France, the game has evolved
          into two primary formats — <strong>European Roulette</strong> and <strong>American Roulette</strong> — each
          offering a distinctly different house edge and player experience.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The core premise is simple: players place bets on where a small ball will land on a numbered wheel. Bets can be
          placed on individual numbers, groups of numbers, colours (red or black), odd or even, or high/low ranges. The
          dealer spins the wheel in one direction and rolls the ball in the opposite direction — when the ball settles
          into a numbered pocket, winning bets are paid out according to the odds of that bet type.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Roulette is widely available at both land-based casinos and online platforms. If you are new to the game, start
          with our <Link href="/guides/roulette/how-to-play/" className="text-corg-500 hover:underline">How to Play Roulette</Link> guide before diving into advanced strategy.
        </p>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">European vs American Roulette</h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The single most important distinction in roulette is between the European and American versions. While they
          look nearly identical at first glance, the difference has a significant impact on your long-term returns.
        </p>

        <h3 className="mt-5 text-lg font-semibold text-white">European Roulette (97.30% RTP)</h3>
        <p className="mt-2 text-slate-500 leading-relaxed">
          European Roulette features a single zero pocket (0) alongside numbers 1 through 36, for a total of 37 pockets.
          This gives the house a 2.70% edge, translating to a <strong>97.30% RTP</strong> (return to player). The single
          zero layout also enables special rules like <em>En Prison</em> and <em>La Partage</em>, which can further reduce
          the house edge on even-money bets to as low as 1.35%. European Roulette is the preferred variant for serious
          players and those applying betting strategies.
        </p>

        <h3 className="mt-5 text-lg font-semibold text-white">American Roulette (94.74% RTP)</h3>
        <p className="mt-2 text-slate-500 leading-relaxed">
          American Roulette adds a double zero pocket (00) alongside the single zero, bringing the total to 38 pockets.
          This extra pocket increases the house edge to 5.26%, giving an RTP of only <strong>94.74%</strong>. While the
          game plays identically to its European counterpart, the additional 00 pocket dramatically worsens the odds for
          every bet on the table. Unless you are playing a specific novelty variant, we recommend avoiding American
          Roulette in favour of the European wheel.
        </p>

        <div className="mt-5 rounded-lg border border-corg-500/20 bg-corg-500/5 p-4">
          <p className="text-sm font-semibold text-corg-500">💡 Quick Tip</p>
          <p className="mt-1 text-sm text-slate-400">
            Always check the wheel type before you play. European Roulette (single zero) offers nearly 3% better RTP
            than American Roulette. Over 100 spins at $10 per spin, that is roughly $30 more in expected value.
          </p>
        </div>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">Popular Roulette Variants</h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Beyond the classic European and American formats, online casinos offer several exciting roulette variants that
          add unique rules, side bets, or visual flair:
        </p>
        <ul className="mt-4 space-y-3 text-slate-500">
          <li className="flex items-start gap-2">
            🎯 <span><strong className="text-white">French Roulette</strong> — Essentially the same wheel as European
            Roulette but with a French-language betting layout and the En Prison / La Partage rules that can drop the
            house edge on even-money bets to just 1.35%. The highest RTP variant available.</span>
          </li>
          <li className="flex items-start gap-2">
            🎯 <span><strong className="text-white">Lightning Roulette</strong> — An Evolution Gaming live-dealer
            variant that adds random multipliers (up to 500×) to selected numbers each round. The base game is standard
            European Roulette, but lucky straight-up bets can pay massive sums.</span>
          </li>
          <li className="flex items-start gap-2">
            🎯 <span><strong className="text-white">Mini Roulette</strong> — A scaled-down version with only 13 pockets
            (1–12 plus a single zero). Faster rounds and simpler betting, though the house edge is higher than standard
            European Roulette.</span>
          </li>
          <li className="flex items-start gap-2">
            🎯 <span><strong className="text-white">Multi-Wheel Roulette</strong> — Players bet on a single layout
            while up to eight wheels spin simultaneously. Payouts are determined per wheel, increasing the action
            without complicating the betting process.</span>
          </li>
        </ul>
        <p className="mt-4 text-slate-500 leading-relaxed">
          For a full rundown of available table games at top casinos, visit our{" "}
          <Link href="/games/table-games/" className="text-corg-500 hover:underline">Table Games</Link> page.
        </p>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">Betting Strategies</h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          While no strategy can overcome the mathematical house edge in the long run, structured betting systems can
          help manage your bankroll and add discipline to your sessions. The most popular roulette strategies include:
        </p>
        <ul className="mt-3 space-y-3 text-slate-500">
          <li className="flex items-start gap-2">
            📘 <span><strong className="text-white">Martingale System</strong> — Double your bet after every loss until
            you win, recovering all previous losses plus a small profit. Risky but popular for even-money bets.</span>
          </li>
          <li className="flex items-start gap-2">
            📘 <span><strong className="text-white">Fibonacci System</strong> — A safer progression based on the
            Fibonacci sequence. Less aggressive than Martingale, with slower recovery but lower risk of hitting table
            limits.</span>
          </li>
          <li className="flex items-start gap-2">
            📘 <span><strong className="text-white">D&apos;Alembert System</strong> — Increase your bet by one unit after a
            loss and decrease by one unit after a win. A balanced approach suited to even-money bets.</span>
          </li>
          <li className="flex items-start gap-2">
            📘 <span><strong className="text-white">Labouchere System</strong> — A cancellation system where you define
            a sequence of numbers representing your target profit. More complex but offers flexible risk control.</span>
          </li>
        </ul>
        <p className="mt-4 text-slate-500 leading-relaxed">
          Dive deeper into each system, including pros, cons, and real-world examples, on our{" "}
          <Link href="/guides/roulette/strategy/" className="text-corg-500 hover:underline">Roulette Strategy</Link> page.
        </p>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">Tips for Playing Roulette</h2>
        <ul className="mt-3 space-y-3 text-slate-500">
          <li className="flex items-start gap-2">💡 <span>Always choose European or French Roulette over American — the 2.70% house edge is far better than 5.26%.</span></li>
          <li className="flex items-start gap-2">💡 <span>Start with free demo games to practise betting patterns and understand the wheel layout before risking real money.</span></li>
          <li className="flex items-start gap-2">💡 <span>Set a strict session budget and never chase losses — roulette is a game of chance with no memory of past spins.</span></li>
          <li className="flex items-start gap-2">💡 <span>Stick to even-money bets (red/black, odd/even, high/low) for the highest win frequency, even if payouts are modest.</span></li>
          <li className="flex items-start gap-2">💡 <span>Look for casinos offering La Partage or En Prison rules — these can cut the house edge on even-money bets by half.</span></li>
          <li className="flex items-start gap-2">💡 <span>Only play at licensed, regulated online casinos to ensure fair wheels and timely payouts.</span></li>
        </ul>
      </div>

      <div className="rounded-2xl border border-corg-500/20 bg-corg-500/5 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Ready to Spin the Wheel?</h2>
        <p className="mt-2 text-slate-500">
          Find the best online casinos offering European, French, and Lightning Roulette with exclusive welcome bonuses.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/reviews/" className="btn-primary inline-flex">View Top Roulette Casinos →</Link>
          <Link href="/games/table-games/" className="btn-secondary inline-flex">Browse All Table Games</Link>
        </div>
      </div>
    </div>
  );
}
