import Link from "next/link";

export const metadata = {
  title: "Blackjack Card Counting 2026 — Hi-Lo System & Counting Guide",
  description: "Learn how to count cards in blackjack. Complete guide to the Hi-Lo counting system, true count conversion, betting strategy, and staying undetected at online and live casinos.",
  alternates: { canonical: "https://royalbetguide.com/guides/blackjack/card-counting/" },
};

export default function CardCountingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/guides/" className="hover:text-corg-500">Guides</Link><span className="mx-2">→</span>
        <Link href="/guides/blackjack/" className="hover:text-corg-500">Blackjack</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Card Counting</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Advanced Strategy</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Blackjack Card Counting Guide 2026</h1>
          <p className="mt-2 text-slate-500">Master the Hi-Lo counting system and gain a mathematical edge over the casino</p>
        </div>
        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">Card counting is one of the most misunderstood skills in casino gaming. Popularised by the MIT Blackjack Team and movies like 21, card counting is a perfectly legal technique that gives skilled players a mathematical edge over the casino. Contrary to popular belief, you do not need a photographic memory or genius-level IQ — the most widely used system, Hi-Lo, requires nothing more than adding and subtracting 1 as cards are dealt. This guide covers how card counting works, the Hi-Lo system step by step, how to convert running count to true count, and practical tips for staying under the radar.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🔢 The Hi-Lo Counting System</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">The Hi-Lo system assigns a value of +1, 0, or -1 to every card in the deck:</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>+1 (Low Cards):</strong> 2, 3, 4, 5, 6 — When these are dealt, the count goes up. Low cards favour the dealer because they are less likely to bust.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>0 (Neutral Cards):</strong> 7, 8, 9 — These have a negligible effect on the odds and are ignored.</p>
          <p className="mt-3 text-slate-700 leading-relaxed"><strong>-1 (High Cards):</strong> 10, J, Q, K, A — When these are dealt, the count goes down. High cards favour the player because they increase the chance of blackjack (3:2 payout) and make dealer busts more likely when showing a 4, 5, or 6.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">You start with a running count of 0 at the beginning of a fresh shoe (or single deck). Each card that is dealt adjusts the count accordingly. A positive running count means more high cards remain in the shoe, which favours the player. A negative count means more low cards remain, which favours the dealer.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🧮 Running Count to True Count</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">In single-deck blackjack, the running count alone tells you the advantage level. But in multi-deck games (6 or 8 decks are standard), you need to convert the running count to a true count. The formula is simple: <strong>True Count = Running Count / Number of Remaining Decks</strong>. For example, if your running count is +12 and approximately 4 decks remain, your true count is +3 (+12 ÷ 4 = +3). The true count determines your betting strategy: at a true count of +1 or higher, increase your bet. At +2 or higher, the advantage shifts in your favour. At +3 and above, you have a significant mathematical edge over the house.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">💵 Betting Strategy</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">A simple and effective betting strategy for card counters is the unit-based system: bet 1 unit when the true count is 0 or negative, 2 units at +1, 4 units at +2, 8 units at +3, and 10+ units at +4 or higher. This proportional betting maximises profits during favourable counts while minimising losses when the shoe is cold. Always stay within the table minimum and maximum limits, and avoid dramatic bet jumps that attract dealer attention. Most professional counters use a bet spread of 1-10 or 1-12 to balance profit with discretion.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎯 Card Counting and Online Blackjack</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Card counting in online blackjack is largely ineffective for two reasons: most online blackjack games use automatic shuffling after every hand (continuous shuffling machines), making counting impossible as the deck is reset. Even in live dealer games where cards come from a physical shoe, the deck penetration is often shallow (50-60%), making the counting advantage minimal. Online casinos also track playing patterns and can restrict accounts that show counting-like behaviour. However, card counting remains highly effective in land-based casinos using hand-shuffled or machine-shuffled shoes with deep penetration. For those primarily playing online, mastering <Link href="/guides/blackjack/strategy/" className="text-corg-500 hover:underline">basic strategy</Link> is far more valuable. Start with our <Link href="/guides/blackjack/how-to-play/" className="text-corg-500 hover:underline">how to play blackjack guide</Link> if you are new to the game.</p>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            <div><h3 className="font-semibold text-corg-600">Is card counting legal?</h3><p className="mt-1 text-sm text-slate-600">Yes, card counting is 100% legal — you are just using your brain to track cards that have been dealt. However, casinos are private businesses and can refuse service or ban players they suspect of counting.</p></div>
            <div><h3 className="font-semibold text-corg-600">Do you need to be a math genius to count cards?</h3><p className="mt-1 text-sm text-slate-600">No. The Hi-Lo system only requires adding and subtracting 1. Anyone with basic arithmetic can learn it with practice.</p></div>
            <div><h3 className="font-semibold text-corg-600">Does card counting work in online blackjack?</h3><p className="mt-1 text-sm text-slate-600">Generally no — most online blackjack uses automatic shuffling every hand. Live dealer games make counting difficult due to shallow deck penetration.</p></div>
            <div><h3 className="font-semibold text-corg-600">How much does card counting improve your odds?</h3><p className="mt-1 text-sm text-slate-600">With perfect counting and betting strategy, a player can gain an edge of approximately 0.5-1.5% over the house, depending on the rules and deck penetration.</p></div>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Play?</h2>
          <p className="mt-2 text-white/70">Find the best blackjack casinos with favourable rules for card counters.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos →</Link>
        </div>
      </article>
    </div>
  );
}