import Link from "next/link";

export const metadata = {
  title: "Online Casino Guides 2026 — Slots, Blackjack, Roulette & More",
  description: "Expert guides to online casino games. Learn how to play slots, blackjack, roulette, baccarat, poker, craps, and live dealer games with strategies and tips.",
  alternates: { canonical: "https://royalbetguide.com/guides/" },
};

export default function GuidesHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Guides</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Expert Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Online Casino Guides 2026</h1>
          <p className="mt-2 text-slate-500">Master every game with strategies, tips, and expert advice</p>
        </div>
        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">Whether you are a complete beginner or an experienced player looking to refine your strategy, our expert guides have you covered. Each guide covers the rules, best strategies, RTP percentages, and recommended casinos for every major casino game. Learn how to play, improve your odds, and make smarter choices at the tables.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <Link href="/guides/slots/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎰 Slots Guide</h3><p className="mt-1 text-sm text-slate-500">Types of slots, RTP, volatility, progressive jackpots, and tips for winning.</p></Link>
          <Link href="/guides/blackjack/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">♠️ Blackjack Guide</h3><p className="mt-1 text-sm text-slate-500">Basic strategy, card counting, rules variants, and the best blackjack casinos.</p></Link>
          <Link href="/guides/roulette/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎡 Roulette Guide</h3><p className="mt-1 text-sm text-slate-500">European vs American roulette, betting systems, and winning strategies.</p></Link>
          <Link href="/guides/baccarat/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🃏 Baccarat Guide</h3><p className="mt-1 text-sm text-slate-500">Rules, banker vs player bets, and how to play like a high roller.</p></Link>
          <Link href="/guides/poker/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🃏 Poker Guide</h3><p className="mt-1 text-sm text-slate-500">Texas Hold&#x27;em, Omaha, hand rankings, and tournament strategies.</p></Link>
          <Link href="/guides/live-dealer/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">📺 Live Dealer Guide</h3><p className="mt-1 text-sm text-slate-500">How live dealer games work, etiquette, and the best providers.</p></Link>
          <Link href="/guides/video-poker/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎰 Video Poker Guide</h3><p className="mt-1 text-sm text-slate-500">Jacks or Better, Deuces Wild, strategy charts, and best paytables.</p></Link>
          <Link href="/guides/craps/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎲 Craps Guide</h3><p className="mt-1 text-sm text-slate-500">Pass line bets, odds, and the best craps strategies for beginners.</p></Link>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎯 Casino Recommendations</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Once you have learned the rules and strategies, put your skills to the test at our recommended casinos. Browse our <Link href="/reviews/" className="text-corg-500 hover:underline">detailed casino reviews</Link> to find platforms with the best game selection, fastest payouts, and most generous bonuses.</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Play?</h2>
          <p className="mt-2 text-white/70">Use your new skills at the best online casinos.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos →</Link>
        </div>
      </article>
    </div>
  );
}