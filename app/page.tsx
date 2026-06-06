import Link from "next/link";
import CasinoLogo from "./components/CasinoLogo";

export const metadata = {
  alternates: {
    canonical: "https://royalbetguide.com",
  },
};

const FEATURED_CASINOS = [
  { name: "Jackpot City", bonus: "$1,600 Welcome Bonus", rating: 9.5, slug: "jackpot-city-casino", imgSlug: "jackpot-city" },
  { name: "Spin Casino", bonus: "$1,000 Welcome Package", rating: 9.3, slug: "spin-casino", imgSlug: "spin-casino" },
  { name: "Ruby Fortune", bonus: "$750 Welcome Bonus", rating: 9.1, slug: "ruby-fortune-casino", imgSlug: "ruby-fortune" },
  { name: "LeoVegas", bonus: "$1,000 + 200 FS", rating: 9.4, slug: "leovegas", imgSlug: "leovegas" },
  { name: "Stake", bonus: "Crypto Welcome Bonus", rating: 8.8, slug: "stake", imgSlug: "stake" },
  { name: "BC.Game", bonus: "Up to $200K + 500 FS", rating: 9.4, slug: "bc-game", imgSlug: "bc-game" },
];

const GAME_CATEGORIES = [
  "Slots", "Blackjack", "Roulette", "Poker",
  "Baccarat", "Live Dealer", "Video Poker", "Craps"
];

const STEPS = [
  { num: "01", title: "Find Casino", desc: "Compare expert reviews to find your perfect match" },
  { num: "02", title: "Claim Bonus", desc: "Grab exclusive welcome offers and free spins" },
  { num: "03", title: "Play & Win", desc: "Deposit and start playing at top-rated casinos" },
];

export default function HomePage() {
  return (
    <div>
      {/* Affiliate Disclosure Banner */}
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gold-400/30 bg-gold-400/10 px-5 py-3 text-center text-xs text-slate-600">
          Royal Bet Guide is an <strong>independent review site</strong>. We may earn commissions through affiliate links. 
          Our reviews are based on expert analysis, not financial incentives. 
          We are <strong>not affiliated</strong> with RoyalBet, RoyalBet.top, or any casino operator. 
          Play responsibly. 18+
        </div>
      </div>

      {/* ═══ HERO — Purple (casino.org style) ═══ */}
      <section className="relative overflow-hidden px-4 py-20 text-center sm:py-28 bg-corg-500">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-corg-500 via-corg-600/80 to-corg-700/60" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center justify-center">
            <img src="/logo.svg" alt="Royal Bet Guide" className="h-20 w-20 rounded-2xl sm:h-24 sm:w-24 object-contain" />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Casino{" "}
            <span className="text-gold-400">
              Reviews &amp; Guides
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Expert casino reviews,{" "}
            <span className="text-gold-400 font-semibold">exclusive bonuses</span>, and winning strategies.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400/20 text-xs text-gold-400">✓</span>
            Independently Reviewed • Expert Casino Reviews
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/reviews/" className="btn-gold">Explore Casinos →</Link>
            <Link href="/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">
              Claim Bonuses →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED CASINOS ═══ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
            Expert Reviewed
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">
            Best Online Casinos
          </h2>
          <p className="mt-2 text-slate-500">Hand-picked and reviewed by our experts</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_CASINOS.map((c) => (
            <Link key={c.slug} href={`/reviews/${c.slug}/`} className="card-gradient-border group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <CasinoLogo slug={c.imgSlug} name={c.name} size={48} />
                  <div>
                    <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-gold-500 font-semibold">{c.bonus}</p>
                  </div>
                </div>
                <div className="rating-badge">
                  <span>★</span>
                  <span>{c.rating}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="text-xs text-slate-500">Expert Review</span>
                <span className="text-sm font-semibold text-corg-500">
                  Read Review →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/reviews/" className="btn-outline inline-flex">View All Casino Reviews →</Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ SWEEPSTAKES CASINOS ═══ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
            Free to Play
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">
            Sweepstakes <span className="text-corg-500">Casinos</span>
          </h2>
          <p className="mt-2 text-slate-500">Sweepstakes model casinos — play with virtual currencies, redeem winnings for cash prizes. No purchase necessary.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Link href="/sweepstakes-casinos/chumba-casino/" className="card-gradient-border group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-2xl">🎰</div>
                <div>
                  <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">Chumba Casino</h3>
                  <p className="text-sm text-gold-500 font-semibold">2M Gold Coins + 2 SC FREE</p>
                </div>
              </div>
              <div className="rating-badge"><span>★</span><span>9.6</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs text-slate-500">Trusted since 2017</span>
              <span className="text-sm font-semibold text-corg-500">Read Review →</span>
            </div>
          </Link>

          <Link href="/sweepstakes-casinos/stake-us/" className="card-gradient-border group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-2xl">🎲</div>
                <div>
                  <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">Stake.us</h3>
                  <p className="text-sm text-gold-500 font-semibold">1M GC + $25 Stake Cash</p>
                </div>
              </div>
              <div className="rating-badge"><span>★</span><span>9.5</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs text-slate-500">Crypto-friendly</span>
              <span className="text-sm font-semibold text-corg-500">Read Review →</span>
            </div>
          </Link>

          <Link href="/sweepstakes-casinos/luckland-slots/" className="card-gradient-border group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-2xl">🍀</div>
                <div>
                  <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">Luckland Slots</h3>
                  <p className="text-sm text-gold-500 font-semibold">5,000 LC + 500 SC</p>
                </div>
              </div>
              <div className="rating-badge"><span>★</span><span>9.4</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs text-slate-500">Low min. redemption</span>
              <span className="text-sm font-semibold text-corg-500">Read Review →</span>
            </div>
          </Link>

          <Link href="/sweepstakes-casinos/global-poker/" className="card-gradient-border group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-2xl">♠️</div>
                <div>
                  <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">Global Poker</h3>
                  <p className="text-sm text-gold-500 font-semibold">$5 Free Sweeps Coins</p>
                </div>
              </div>
              <div className="rating-badge"><span>★</span><span>9.3</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs text-slate-500">Best for poker</span>
              <span className="text-sm font-semibold text-corg-500">Read Review →</span>
            </div>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/sweepstakes-casinos/" className="btn-outline inline-flex">View All Sweepstakes Casinos →</Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ GAME GUIDES ═══ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">
            Game <span className="text-corg-500">Guides</span>
          </h2>
          <p className="mt-2 text-slate-500">Master every game with our expert guides</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {GAME_CATEGORIES.map((cat) => (
            <Link key={cat} href={`/guides/${cat.toLowerCase().replace(/\s+/g, "-")}/`}
              className="group relative overflow-hidden rounded-full border border-corg-500/30 bg-white px-5 py-3 text-sm font-medium text-corg-500 transition-all hover:bg-corg-500 hover:text-white hover:border-corg-500">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">
            How It <span className="text-corg-500">Works</span>
          </h2>
          <p className="mt-2 text-slate-500">Three simple steps to start winning</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto flex items-center justify-center">
                <div className="step-circle">{s.num}</div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-corg-600">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-corg-500 via-corg-600/30 to-corg-700/10" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to <span className="text-gold-400">Play</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            Find your perfect casino with our expert reviews. Compare bonuses, read guides, and play smarter.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/reviews/" className="btn-gold">Find Your Casino →</Link>
            <Link href="/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">
              Claim Free Bonus →
            </Link>
          </div>
        </div>
      </section>

        {/* Regional Guides */}
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Regional Casino Guides</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Find the best casinos and sportsbooks in your region. Our state-specific guides cover local regulations, top operators, and exclusive bonuses available in your area.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/region/pennsylvania/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">Pennsylvania Casinos</h3><p className="mt-1 text-sm text-slate-500">PGCB-regulated casinos, 54% slots tax, top PA operators.</p></Link>
            <Link href="/region/michigan/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">Michigan Casinos</h3><p className="mt-1 text-sm text-slate-500">MGCB-regulated, fastest-growing US market.</p></Link>
            <Link href="/sports/new-jersey-sportsbooks/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">NJ Sportsbooks</h3><p className="mt-1 text-sm text-slate-500">DraftKings, FanDuel, BetMGM — best NJ betting sites.</p></Link>
            <Link href="/sports/pennsylvania-sportsbooks/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">PA Sportsbooks</h3><p className="mt-1 text-sm text-slate-500">Top sports betting sites licensed in Pennsylvania.</p></Link>
            <Link href="/us/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">US Casinos</h3><p className="mt-1 text-sm text-slate-500">Best US-friendly casinos for American players.</p></Link>
            <Link href="/blog/us-sports-betting-guide-2026/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">US Sports Betting Guide</h3><p className="mt-1 text-sm text-slate-500">Complete guide to betting on sports in the United States.</p></Link>
          </div>
        </div>

        {/* UK Casino Guides */}
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">UK Casino Guides</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Specialised guides for UK players. Find non-GamStop casinos, low deposit options, and PayPal-friendly sites.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/non-gamstop-casinos-uk/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">Non-GamStop Casinos UK</h3><p className="mt-1 text-sm text-slate-500">Top casinos not registered with GamStop for UK players.</p></Link>
            <Link href="/blog/low-deposit-casinos-uk/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">Low Deposit Casinos UK</h3><p className="mt-1 text-sm text-slate-500">Best low minimum deposit casinos for UK players.</p></Link>
            <Link href="/blog/paypal-casinos-uk/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">PayPal Casinos UK</h3><p className="mt-1 text-sm text-slate-500">Top PayPal-friendly online casinos for UK players.</p></Link>
          </div>
        </div>

        <Link href="/compare/7bit-katsubet-mirax/"
          className="mt-4 inline-block text-sm text-white/60 hover:text-white underline">
          Compare all three →
        </Link>

        {/* Featured Partners — lower prominence */}
        <div className="mt-10 rounded-xl border border-corg-500/20 bg-white/5 p-6 text-center">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Advertising</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold text-sm">7BitCasino</h3>
              <p className="mt-1 text-xs text-white/60">Since 2014 • 7,000+ games</p>
              <p className="mt-2 text-sm font-bold text-gold-400">5 BTC + 250 FS</p>
              <a href="/go/7bit-casino/" target="_blank" rel="nofollow sponsored"
                className="btn-gold mt-2 inline-flex text-xs">Claim Bonus →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold text-sm">KatsuBet</h3>
              <p className="mt-1 text-xs text-white/60">Since 2020 • 7,000+ games</p>
              <p className="mt-2 text-sm font-bold text-gold-400">325% + 200 FS</p>
              <a href="/go/katsubet/" target="_blank" rel="nofollow sponsored"
                className="btn-gold mt-2 inline-flex text-xs">Claim Bonus →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold text-sm">MiraxCasino</h3>
              <p className="mt-1 text-xs text-white/60">Since 2021 • 5,000+ games</p>
              <p className="mt-2 text-sm font-bold text-gold-400">$500 + 200 FS</p>
              <a href="/go/mirax-casino/" target="_blank" rel="nofollow sponsored"
                className="btn-gold mt-2 inline-flex text-xs">Claim Bonus →</a>
            </div>
          </div>
        </div>

    </div>
  );
}
