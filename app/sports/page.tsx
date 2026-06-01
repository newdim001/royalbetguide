import Link from "next/link";

export const metadata = {
  title: "Sports Betting Guide 2026 — Odds, Bet Types & Best Sportsbooks",
  description: "Complete sports betting guide covering how to read odds, types of bets, bankroll management, and the best crypto sportsbooks for 2026.",
  alternates: { canonical: "https://royalbetguide.com/sports/" },
};

export default function SportsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Sports Betting Guide</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Sports Betting</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Sports Betting Guide 2026</h1>
          <p className="mt-2 text-slate-500">How to read odds, types of bets, bankroll management, and top sportsbooks</p>
        </div>
        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">Sports betting has grown into a global industry worth billions of dollars. Whether you are interested in football, basketball, tennis, or esports, understanding the fundamentals of sports betting is essential for long-term success. This guide covers everything from how to read odds to advanced betting strategies.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Key Takeaways</h2>
          <ul className="space-y-2 text-slate-700">
            <li>✓ Understand the three odds formats: American, Fractional, Decimal</li>
            <li>✓ Start with simple bets like moneyline and spread before parlays</li>
            <li>✓ Bankroll management is the foundation of successful betting</li>
            <li>✓ Compare odds across multiple sportsbooks for best value</li>
            <li>✓ Never chase losses — accept losing streaks as part of the game</li>
            <li>✓ Specialize in specific sports and leagues you know well</li>
          </ul>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">How to Read Odds</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>American odds</strong> (+200, -150) show how much you win on a $100 bet. Positive odds (+200) mean you win $200 on a $100 bet. Negative odds (-150) mean you need to bet $150 to win $100. <strong>Fractional odds</strong> (5/1, 2/5) show profit relative to stake. 5/1 means you win $5 for every $1 bet. <strong>Decimal odds</strong> (3.00, 1.67) show total return including stake. 3.00 means you get $3 back for every $1 bet ($2 profit + $1 stake). Most online sportsbooks let you switch between formats.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Types of Bets</h2>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>Moneyline</strong> is the simplest bet — pick which team or player will win. <strong>Point spread</strong> adjusts the odds by giving the underdog a point advantage. <strong>Over/Under (Totals)</strong> bets on whether the total combined score will be over or under a set number. <strong>Parlays</strong> combine multiple bets into one — all must win for the parlay to pay out. <strong>Futures</strong> are long-term bets on events like championship winners. <strong>In-play betting</strong> allows you to place bets while the game is happening, with odds updating in real-time.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Bankroll Management</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">The most successful sports bettors treat it like a business, not a lottery. Set aside a specific amount of money for betting that you can afford to lose. Never bet more than 2-5% of your bankroll on a single wager. Flat betting (betting the same amount on every game) is the safest approach. Increase bet sizes only as your bankroll grows, not when you are on a hot streak. Keep detailed records of every bet you place, including stake, odds, outcome, and profit/loss. This data helps you identify which sports and bet types you are best at.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Best Sportsbooks 2026</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">The best sportsbooks offer competitive odds, fast payouts, and extensive market coverage. <Link href="/reviews/bet365/" className="text-corg-500 hover:underline">Bet365</Link> remains the global leader with live streaming and thousands of markets. <Link href="/reviews/sportsbet/" className="text-corg-500 hover:underline">Sportsbet.io</Link> leads the crypto sportsbook space with 5000+ markets. <Link href="/reviews/bovada/" className="text-corg-500 hover:underline">Bovada</Link> is the top choice for US players. For a complete list, see our <Link href="/best-sportsbooks/" className="text-corg-500 hover:underline">best sportsbooks guide</Link> and <Link href="/reviews/" className="text-corg-500 hover:underline">full casino reviews</Link>.</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Bet?</h2>
          <p className="mt-2 text-white/70">Find the best sportsbooks with competitive odds and fast payouts.</p>
          <Link href="/best-sportsbooks/" className="btn-gold mt-4 inline-flex">Top Sportsbooks →</Link>
        </div>
      
        {/* State Sportsbooks */}
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">State Sportsbooks</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Find the best sportsbooks in your state. Our detailed guides cover local regulations, top operators, and exclusive bonuses available in each market.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link href="/sports/new-jersey-sportsbooks/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">New Jersey Sportsbooks</h3><p className="mt-1 text-sm text-slate-500">DraftKings, FanDuel, BetMGM, and more NJ-licensed sportsbooks.</p></Link>
            <Link href="/sports/pennsylvania-sportsbooks/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">Pennsylvania Sportsbooks</h3><p className="mt-1 text-sm text-slate-500">Top PA sports betting sites with exclusive bonuses.</p></Link>
          </div>
        </div>

      </article>
    </div>
  );
}
