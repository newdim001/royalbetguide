import Link from "next/link";

export const metadata = {
  title: "How to Play Craps 2026 — Rules, Bets & Odds Guide | Royal Bet Guide",
  description: "Learn how to play craps in 2026. Complete guide covering the come-out roll, pass line, don't pass, come bets, free odds (0% house edge!), place bets, and proposition bets to avoid.",
  alternates: { canonical: "https://royalbetguide.com/guides/craps/how-to-play/" },
};

export default function HowToPlayCrapsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">&rarr;</span>
        <Link href="/guides/" className="hover:text-corg-500">Guides</Link><span className="mx-2">&rarr;</span>
        <Link href="/guides/craps/" className="hover:text-corg-500">Craps</Link><span className="mx-2">&rarr;</span>
        <span className="text-slate-800 font-semibold">How to Play Craps</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Beginner&apos;s Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">How to Play Craps</h1>
          <p className="mt-2 text-slate-500">Master the most exciting dice game in the casino with our complete guide to rules, bets, and odds</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎲 Craps Overview</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Craps is the most energetic and social game on any casino floor. Players gather around a long table with elevated sides, and the action centres on a pair of dice. Unlike most casino games where you play against the dealer or the house alone, craps involves a group of players betting on the outcome of each dice roll. The game can seem intimidating to newcomers because of the crowded table, the shouting, and the wide array of betting options, but the core mechanics are surprisingly simple.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">Every round of craps begins with a <strong>come-out roll</strong> and revolves around what is known as the <strong>point</strong>. Understanding these two concepts — and knowing which bets offer the best odds — is the key to enjoying craps and playing smart.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">See our <Link href="/guides/craps/" className="text-corg-500 hover:underline">full craps guide</Link> for strategy insights, bankroll management tips, and recommended casinos.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎯 The Come-Out Roll and Establishing the Point</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Each round in craps starts with the <strong>come-out roll</strong> — the first roll of the dice by the shooter (the player currently throwing the dice). The outcome of this roll determines what happens next:</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>If the come-out roll is a 7 or 11 (a natural)</strong> — Pass Line bets win immediately. Don&apos;t Pass bets lose.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>If the come-out roll is a 2, 3, or 12 (craps)</strong> — Pass Line bets lose. Don&apos;t Pass bets win (except on 12, which is a push at most tables).</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>If the come-out roll is any other number — 4, 5, 6, 8, 9, or 10</strong> — that number becomes the <strong>point</strong>. The dealer places a large puck marked &quot;ON&quot; on the point number to show it has been established. The game then enters the point phase.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">Once the point is established, the shooter continues rolling until one of two things happens: they roll the point number again (Pass Line wins, Don&apos;t Pass loses) or they roll a 7 (Don&apos;t Pass wins, Pass Line loses). Rolling a 7 after the point is established is called <strong>sevening out</strong>, and it ends the shooter&apos;s turn. If the shooter rolls the point, a new come-out roll begins and the same shooter keeps rolling.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">✅ Pass Line Bet (House Edge: 1.41%)</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">The <strong>Pass Line</strong> is the most fundamental bet in craps and the best place for beginners to start. You place this bet before the come-out roll. If the come-out roll is 7 or 11, you win even money. If it is 2, 3, or 12, you lose. If a point is established, your bet stays on the Pass Line and wins if the shooter rolls the point before a 7.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The Pass Line bet has a house edge of just <strong>1.41%</strong>, making it one of the best bets in the entire casino. The true odds of winning on the Pass Line are 251 to 244, which translates to a 49.29% chance of winning on any given round. Over the long term, you lose only $1.41 for every $100 wagered.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">❌ Don&apos;t Pass Bet (House Edge: 1.36%)</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">The <strong>Don&apos;t Pass</strong> bet is essentially the reverse of the Pass Line. You are betting against the shooter — that the come-out roll will be 2 or 3 (12 is a push), or that the shooter will seven out before rolling the point. It pays even money just like the Pass Line.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">With a house edge of <strong>1.36%</strong>, the Don&apos;t Pass is technically the best single bet in craps. It wins slightly more often than the Pass Line because a come-out 12 results in a push rather than a loss. Many players avoid this bet because it means rooting against the shooter, which can feel counter to the table&apos;s social energy. But from a pure odds perspective, it is a mathematically superior bet.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🔄 Come and Don&apos;t Come Bets</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Come bets</strong> work exactly like Pass Line bets but can be placed <em>after</em> the point has been established. When you place a Come bet, the next roll becomes a mini come-out roll for that bet: 7 or 11 wins, 2, 3, or 12 loses, and any other number establishes a new point for that specific Come bet. The same 1.41% house edge applies.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Don&apos;t Come bets</strong> are the reverse of Come bets, mirroring the Don&apos;t Pass bet with the same 1.36% house edge. They allow you to bet against the shooter on individual rolls after the point is established.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">Come and Don&apos;t Come bets are popular because they let you have multiple active bets at different stages, keeping the action going regardless of what happens on each roll.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">⭐ Free Odds Bet (House Edge: 0% — The Best Bet in the Casino!)</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">After a point is established, players who have a Pass Line or Come bet can take <strong>odds</strong> — placing an additional bet behind their original wager. This is called the <strong>Free Odds bet</strong>, and it has a house edge of <strong>0%</strong>. That is right — zero. It pays true mathematical odds with no casino markup whatsoever.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The odds payout depends on the point number:</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Point 4 or 10</strong> — Pays 2:1 (true odds). There are three ways to roll a 4 or 10 and six ways to roll a 7, so the odds are 2:1 against you — and the bet pays exactly that.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Point 5 or 9</strong> — Pays 3:2 (true odds). Four ways to roll a 5 or 9 versus six ways to roll a 7.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Point 6 or 8</strong> — Pays 6:5 (true odds). Five ways to roll a 6 or 8 versus six ways to roll a 7.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">Many casinos offer &quot;3x-4x-5x odds,&quot; meaning you can bet up to three times your Pass Line bet on a 4 or 10 point, four times on a 5 or 9, and five times on a 6 or 8. This allows a consistent maximum odds payout of six times your original bet regardless of the point. Some casinos offer even higher odds multiples (10x, 20x, or even 100x). Since the Free Odds bet carries no house edge, <strong>you should always max out your odds</strong> if your bankroll allows it.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">📊 Place Bets</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Place bets</strong> allow you to bet on specific numbers (4, 5, 6, 8, 9, or 10) at any time, regardless of the point. Unlike Pass Line bets, Place bets can be taken down at any time. The payouts and house edges vary by number:</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Place 6 or 8</strong> — Pays 7:6. House edge: 1.52%. These are the best Place bets because the numbers 6 and 8 are the most frequently rolled point numbers (after 7).</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Place 5 or 9</strong> — Pays 7:5. House edge: 4.00%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Place 4 or 10</strong> — Pays 9:5. House edge: 6.67%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">If you want to make Place bets, stick to the 6 and 8 for the lowest house edge. Avoid placing the 4 and 10, as the 6.67% edge eats into your bankroll significantly over time. A better strategy is to use the Free Odds bet on a Pass Line or Come bet instead.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🚫 Proposition Bets to Avoid</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">The centre of the craps table is covered in one-roll <strong>proposition bets</strong> with flashy names and big payout promises. These are the worst bets in craps — and among the worst in the entire casino. The dealer handles these bets, and the house edge is brutal on every single one:</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Any 7</strong> — Pays 4:1. True odds: 5:1. <strong>House edge: 16.67%</strong>. You lose nearly $17 for every $100 wagered.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Any Craps (2, 3, or 12)</strong> — Pays 7:1. True odds: 8:1. House edge: 11.11%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Yo (11)</strong> — Pays 15:1. True odds: 17:1. House edge: 11.11%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Snake Eyes (2) or Boxcars (12)</strong> — Pays 30:1. True odds: 35:1. House edge: 13.89%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Horn Bet</strong> — A four-way bet on 2, 3, 11, and 12. House edge: approximately 12.5%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Hardways (4, 6, 8, 10 rolled as pairs)</strong> — Pays vary. House edge ranges from 9.09% to 11.11%.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The proposition bets are designed to be seductive — the potential payouts make them look exciting, and the minimum bets are usually small. But over time, they will drain your bankroll fast. <strong>The simplest way to be a winning craps player is to never touch proposition bets.</strong> Stick to the Pass Line (or Don&apos;t Pass) with maximum Free Odds, and you are playing the game with the lowest possible house advantage.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">📖 Next Steps</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Now that you understand the basic rules and which bets offer the best value, explore our <Link href="/guides/craps/" className="text-corg-500 hover:underline">complete craps guide</Link> for advanced strategies, table etiquette, and tips for managing your bankroll. When you are ready to play for real money, check out our carefully selected list of <Link href="/reviews/" className="text-corg-500 hover:underline">top-rated online casinos</Link> that offer craps with generous welcome bonuses.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">❓ Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-corg-600">What is the best bet for a beginner craps player?</h3>
              <p className="mt-1 text-sm text-slate-600">The Pass Line bet is the best place to start. It has a low house edge of 1.41%, is simple to understand, and aligns you with the shooter and most other players at the table. Once you are comfortable, add Free Odds bets behind your Pass Line wager to bring the combined house edge close to zero.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">Can you make money playing craps?</h3>
              <p className="mt-1 text-sm text-slate-600">In the short term, yes — craps offers some of the best odds in the casino, and skilled bettors can have winning sessions through variance and luck. In the long term, the house edge means the casino has a mathematical advantage. However, since Free Odds bets carry a 0% house edge, craps offers the closest thing to an even-money game you will find anywhere.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">What does &quot;sevening out&quot; mean?</h3>
              <p className="mt-1 text-sm text-slate-600">Sevening out occurs when the shooter rolls a 7 after the point has been established. When this happens, all Pass Line and Come bets lose, and the shooter&apos;s turn ends. The dice pass to the next player, who becomes the new shooter for the next come-out roll.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">Why is the Free Odds bet the best in the casino?</h3>
              <p className="mt-1 text-sm text-slate-600">The Free Odds bet has a 0% house edge — meaning the casino has no mathematical advantage whatsoever. It pays true odds based on the probability of rolling the point versus a 7. No other bet in any casino game offers this. If your bankroll allows it, you should always take maximum odds.</p>
            </div>
            <div>
              <h3 className="font-semibold text-corg-600">What is the difference between Place bets and Pass Line bets?</h3>
              <p className="mt-1 text-sm text-slate-600">Pass Line bets are only available before the come-out roll and require the shooter to win by rolling the point before a 7. Place bets can be made at any time on specific numbers (4, 5, 6, 8, 9, 10) and can be removed whenever you like. Place bets on 6 and 8 have a reasonable 1.52% house edge, while other Place bets have significantly higher edges.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Shoot Some Dice?</h2>
          <p className="mt-2 text-white/70">Find the best online casinos offering craps with fair rules and generous bonuses.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos &rarr;</Link>
        </div>
      </article>
    </div>
  );
}
