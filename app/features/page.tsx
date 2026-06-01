import Link from "next/link";

export const metadata = {
  title: "Casino Resources & Tools 2026 — Guides, Calculators & Infographics",
  description: "Free casino tools and resources including game guides, bankroll calculators, RTP guides, and responsible gambling resources for informed players.",
  alternates: { canonical: "https://royalbetguide.com/features/" },
};

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Resources</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Casino Resources & Tools</h1>
        <p className="mt-2 text-slate-500">Free guides, tools, and resources for informed casino players</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <Link href="/guides/slots/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎰 Slots Guide</h3><p className="mt-1 text-sm text-slate-500">Learn everything about online slots, RTP, volatility, and how to choose winning games.</p></Link>
        <Link href="/guides/blackjack/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🃏 Blackjack Guide</h3><p className="mt-1 text-sm text-slate-500">Master blackjack strategy, card counting, and game variants to maximize your odds.</p></Link>
        <Link href="/guides/roulette/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎡 Roulette Guide</h3><p className="mt-1 text-sm text-slate-500">Understand roulette variants, betting strategies, and how the house edge works.</p></Link>
        <Link href="/guides/poker/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">♠️ Poker Guide</h3><p className="mt-1 text-sm text-slate-500">Poker rules, hand rankings, strategy tips for Texas Holdem, Omaha, and more.</p></Link>
        <Link href="/guides/baccarat/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🃏 Baccarat Guide</h3><p className="mt-1 text-sm text-slate-500">Simple rules, low house edge — learn why baccarat is a player favorite.</p></Link>
        <Link href="/guides/live-dealer/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">📺 Live Dealer Guide</h3><p className="mt-1 text-sm text-slate-500">Experience real casino action from home with Evolution Gaming and more.</p></Link>
        <Link href="/games/slots/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎰 Online Slots</h3><p className="mt-1 text-sm text-slate-500">Types of slots, progressive jackpots, Megaways, and best slot providers.</p></Link>
        <Link href="/games/live-casino/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎲 Live Casino</h3><p className="mt-1 text-sm text-slate-500">Live blackjack, roulette, baccarat, and game show style games explained.</p></Link>
        <Link href="/blog/how-to-choose-casino/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">✅ Casino Checklist</h3><p className="mt-1 text-sm text-slate-500">Step-by-step checklist for choosing a safe, reputable online casino.</p></Link>
        <Link href="/responsible-gambling/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🛡️ Responsible Gambling</h3><p className="mt-1 text-sm text-slate-500">Tools, tips, and support organizations for safe and responsible gambling.</p></Link>
      </div>
      <div className="card-light mb-8">
        <h2 className="text-xl font-bold text-corg-600">Why Use These Resources?</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">Our resources are created by experienced casino players and industry experts. Every guide is thoroughly researched, regularly updated, and designed to help you make informed decisions. Whether you are a beginner learning the rules of blackjack or an experienced player refining your slot strategy, our tools and guides provide the information you need to play smarter.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">All our guides are free to access and contain no fluff — just practical, actionable advice backed by real experience. Bookmark this page and come back whenever you need a refresher on your favorite casino game.</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Ready to Play?</h2>
        <p className="mt-2 text-white/70">Browse our expert-reviewed casinos and claim exclusive bonuses.</p>
        <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos →</Link>
      </div>
    </div>
  );
}
