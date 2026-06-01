import Link from "next/link";

export const metadata = {
  title: "Best US Online Casinos 2026",
  description:
    "Find the best US-friendly online casinos for American players. Compare DraftKings, FanDuel, BetMGM, Caesars, and more — all licensed for US players.",
  alternates: { canonical: "https://royalbetguide.com/us/" },
  openGraph: {
    title: "Best US Online Casinos 2026",
    description:
      "Find the best US-friendly online casinos for American players. Compare DraftKings, FanDuel, BetMGM, Caesars, and more.",
    url: "https://royalbetguide.com/us/",
  },
};

// ── US-Friendly Casino Data ────────────────────────────────────────────
const US_CASINOS = [
  {
    slug: "draftkings",
    name: "DraftKings Casino",
    rating: 8.7,
    bonus: "$2,000 Welcome Bonus",
    payout: "96.3%",
    games: "1500+",
    established: "2012",
    license: "US State Licenses",
    pros: ["Top US brand", "DFS and sportsbook integration", "Daily promotions", "Excellent mobile app"],
    payments: ["Visa", "Mastercard", "PayPal", "PayNearMe", "Online Banking"],
    description: "America's #1 gaming brand with seamless DFS, sportsbook, and casino integration.",
    category: "Top US Brand",
  },
  {
    slug: "fanduel",
    name: "FanDuel Casino",
    rating: 8.7,
    bonus: "$1,000 Welcome Bonus",
    payout: "96.2%",
    games: "1000+",
    established: "2009",
    license: "US State Licenses",
    pros: ["Leading US gaming brand", "Easy-to-use platform", "Fast payouts", "Great daily odds boosts"],
    payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "PayNearMe"],
    description: "One of America's most trusted gaming brands with an intuitive casino platform.",
    category: "Top US Brand",
  },
  {
    slug: "betmgm",
    name: "BetMGM Casino",
    rating: 8.6,
    bonus: "$1,500 Welcome Bonus",
    payout: "96.4%",
    games: "2000+",
    established: "2018",
    license: "US State Licenses, UKGC",
    pros: ["MGM Resorts backing", "Huge game selection", "Excellent rewards program", "Available in multiple states"],
    payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "Skrill"],
    description: "Backed by MGM Resorts International with a massive 2000+ game library.",
    category: "Top US Brand",
  },
  {
    slug: "caesars",
    name: "Caesars Palace Online Casino",
    rating: 8.6,
    bonus: "$2,500 Welcome Bonus",
    payout: "96.1%",
    games: "1500+",
    established: "2019",
    license: "US State Licenses",
    pros: ["Iconic brand name", "Caesars Rewards integration", "Large game variety", "Strong sportsbook"],
    payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "PayNearMe"],
    description: "The iconic Las Vegas brand online with full Caesars Rewards integration.",
    category: "Top US Brand",
  },
  {
    slug: "borgata",
    name: "Borgata Casino",
    rating: 8.6,
    bonus: "$1,000 Welcome Bonus",
    payout: "96.3%",
    games: "1500+",
    established: "2019",
    license: "US State Licenses",
    pros: ["Borgata brand prestige", "Excellent game variety", "MGM Rewards eligible", "Great mobile app"],
    payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "PayNearMe"],
    description: "The Atlantic City experience online with 1500+ games and MGM Rewards integration.",
    category: "Top US Brand",
  },
  {
    slug: "golden-nugget",
    name: "Golden Nugget Casino",
    rating: 8.5,
    bonus: "$1,000 Welcome Bonus",
    payout: "96.5%",
    games: "1000+",
    established: "2013",
    license: "US State Licenses",
    pros: ["Top-rated mobile app", "Excellent loyalty program", "Fast payouts", "Great live dealer section"],
    payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "Skrill"],
    description: "Consistently ranked among the best US online casinos with a top-rated mobile app.",
    category: "Top US Brand",
  },
  {
    slug: "bovada",
    name: "Bovada Casino",
    rating: 8.5,
    bonus: "$3,750 Welcome Bonus",
    payout: "96.5%",
    games: "500+",
    established: "2011",
    license: "Curacao",
    pros: ["US-friendly since 2011", "Crypto welcome bonus", "Fast crypto payouts", "Great poker room"],
    payments: ["Bitcoin", "Bitcoin Cash", "Visa", "Mastercard", "Ethereum"],
    description: "The go-to casino for US players since 2011 with a massive $3,750 crypto welcome bonus.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "ignition",
    name: "Ignition Casino",
    rating: 8.5,
    bonus: "$3,000 Welcome Bonus",
    payout: "96.8%",
    games: "400+",
    established: "2016",
    license: "Curacao",
    pros: ["US-friendly", "Excellent poker network", "Quick crypto payouts", "Anonymous tables"],
    payments: ["Bitcoin", "Ethereum", "Bitcoin Cash", "Visa", "Mastercard"],
    description: "Top choice for US players with anonymous poker tables and quick crypto payouts.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "betonline",
    name: "BetOnline Casino",
    rating: 8.5,
    bonus: "$3,000 Welcome Bonus",
    payout: "96.4%",
    games: "500+",
    established: "2004",
    license: "Panama",
    pros: ["Long-standing reputation since 2004", "Excellent sportsbook", "Crypto friendly", "Good poker"],
    payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Litecoin"],
    description: "Trusted all-in-one platform since 2004 with casino, sportsbook, and poker.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "red-dog",
    name: "Red Dog Casino",
    rating: 8.3,
    bonus: "$2,750 Welcome Bonus",
    payout: "96.2%",
    games: "300+",
    established: "2019",
    license: "Curacao",
    pros: ["US-friendly", "Generous bonuses", "Crypto friendly", "Simple platform"],
    payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Neosurf"],
    description: "Simplified online casino experience with generous bonuses and crypto-friendly payments.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "slots-lv",
    name: "Slots.lv Casino",
    rating: 8.4,
    bonus: "$5,000 Welcome Bonus",
    payout: "96.6%",
    games: "500+",
    established: "2015",
    license: "Curacao",
    pros: ["Huge welcome bonus up to $5,000", "US-friendly", "Fast crypto withdrawals", "Great slot selection"],
    payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Litecoin"],
    description: "Fantastic slot selection with one of the biggest welcome bonuses — up to $5,000.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "cafe-casino",
    name: "Cafe Casino",
    rating: 8.4,
    bonus: "$2,500 Welcome Bonus",
    payout: "96.3%",
    games: "400+",
    established: "2016",
    license: "Curacao",
    pros: ["Perk points program", "US-friendly", "Hot drop jackpots", "Crypto friendly"],
    payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Litecoin"],
    description: "Warm experience with a rewarding loyalty program and Hot Drop Jackpots.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "wild-casino",
    name: "Wild Casino",
    rating: 8.2,
    bonus: "$5,000 Welcome Bonus",
    payout: "96.1%",
    games: "600+",
    established: "2017",
    license: "Curacao",
    pros: ["Huge $5,000 bonus", "US-friendly", "Live dealer available", "Crypto options"],
    payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Bank Transfer"],
    description: "$5,000 welcome bonus and live dealer games for US players.",
    category: "US-Friendly Offshore",
  },
  {
    slug: "everygame",
    name: "EveryGame Casino",
    rating: 8.1,
    bonus: "$1,000 Welcome Bonus",
    payout: "96.0%",
    games: "300+",
    established: "1996",
    license: "Curacao",
    pros: ["One of the oldest online casinos", "US-friendly", "Crypto options", "Good poker room"],
    payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Neosurf"],
    description: "One of the oldest online casinos (since 1996). Trusted US-friendly option with crypto support.",
    category: "US-Friendly Offshore",
  },
];

export default function USCasinosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Best US Online Casinos 2026",
    description:
      "Find the best US-friendly online casinos for American players. Compare DraftKings, FanDuel, BetMGM, Caesars, and more.",
    url: "https://royalbetguide.com/us/",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">US Casinos</span>
      </div>

      {/* Hero */}
      <div className="mb-10">
        <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <span className="text-5xl">🇺🇸</span>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Best US Online Casinos 2026
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70 text-lg">
            Hand-picked casinos that welcome American players. Regulated state-by-state and trusted offshore options.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-3">
        <span className="rounded-full bg-corg-500/10 px-4 py-2 text-sm font-medium text-corg-600">
          ⚡ All {US_CASINOS.length} Casinos
        </span>
        <span className="rounded-full bg-gold-400/20 px-4 py-2 text-sm font-medium text-gold-500">
          🏆 Regulated US Brands
        </span>
        <span className="rounded-full bg-corg-pink/10 px-4 py-2 text-sm font-medium text-corg-pink">
          🌐 US-Friendly Offshore
        </span>
      </div>

      {/* Intro */}
      <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Online Casinos That Accept US Players</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Finding a casino that accepts American players can be tricky due to varying state laws. We&apos;ve done the 
          research for you — below are the top US-friendly online casinos, split into two categories:
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-lg">🏆</span>
            <div>
              <strong className="text-corg-600">State-Regulated Brands</strong>
              <p className="text-sm text-slate-500">DraftKings, FanDuel, BetMGM, Caesars, Borgata, Golden Nugget — licensed in NJ, PA, MI, WV, and more.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-lg">🌐</span>
            <div>
              <strong className="text-corg-600">US-Friendly Offshore</strong>
              <p className="text-sm text-slate-500">BetOnline, Bovada, Ignition, Red Dog, Slots.lv, Cafe, Wild, EveryGame — trusted by Americans for decades.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Regulated US Brands */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <h2 className="text-2xl font-extrabold text-corg-600">State-Regulated US Casinos</h2>
        </div>
        <p className="mb-4 text-sm text-slate-500">
          These brands are licensed in US states (NJ, PA, MI, WV, CT, DE) and are the safest option for American players.
        </p>
        <div className="space-y-4">
          {US_CASINOS.filter((c) => c.category === "Top US Brand").map((casino) => (
            <CasinoCard key={casino.slug} casino={casino} />
          ))}
        </div>
      </div>

      {/* US-Friendly Offshore */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl">🌐</span>
          <h2 className="text-2xl font-extrabold text-corg-600">US-Friendly Offshore Casinos</h2>
        </div>
        <p className="mb-4 text-sm text-slate-500">
          These offshore casinos have a long history of serving American players with crypto-friendly deposits and fast withdrawals.
        </p>
        <div className="space-y-4">
          {US_CASINOS.filter((c) => c.category === "US-Friendly Offshore").map((casino) => (
            <CasinoCard key={casino.slug} casino={casino} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-6">FAQs About US Online Casinos</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Are online casinos legal in the US?</h3>
            <p className="mt-2 text-sm text-slate-500">
              Online casino legality varies by state. As of 2026, online casinos are legal and regulated in New Jersey, Pennsylvania, Michigan, West Virginia, Connecticut, Delaware, and Rhode Island. Many other states are actively considering legislation.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">What is the best online casino for US players?</h3>
            <p className="mt-2 text-sm text-slate-500">
              For state-licensed play, DraftKings and FanDuel are top choices with excellent mobile apps and daily promotions. For crypto-friendly offshore options, BetOnline and Bovada have served US players for over a decade.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Can I use crypto at US online casinos?</h3>
            <p className="mt-2 text-sm text-slate-500">
              Yes! Most US-friendly offshore casinos accept Bitcoin, Ethereum, and other cryptocurrencies. State-regulated casinos like DraftKings and BetMGM primarily use traditional payment methods but some are beginning to explore crypto options.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">How do I withdraw winnings from US casinos?</h3>
            <p className="mt-2 text-sm text-slate-500">
              State-regulated casinos offer withdrawals via PayPal, online banking, and check by mail. Offshore casinos offer crypto withdrawals that process in minutes. E-wallets like Skrill and Neteller are also common options at both types.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-3 text-center text-xs text-slate-500">
        We may earn a commission if you sign up through our links. Play responsibly. 21+ in most states. 
        Gambling problem? Call 1-800-GAMBLER.
      </div>
    </div>
  );
}

// ── Casino Card Component ──────────────────────────────────────────────
function CasinoCard({ casino }: { casino: any }) {
  return (
    <Link
      href={`/reviews/${casino.slug}/`}
      className="card-light block"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-corg-600">{casino.name}</h3>
            {casino.category === "Top US Brand" ? (
              <span className="rounded-full bg-gold-400/20 px-2 py-0.5 text-xs font-bold text-gold-500">REGULATED</span>
            ) : (
              <span className="rounded-full bg-corg-pink/10 px-2 py-0.5 text-xs font-medium text-corg-pink">OFFSHORE</span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-500">{casino.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rating-badge">⭐ {casino.rating}/10</span>
            <span className="rounded-full bg-corg-green/10 px-2.5 py-0.5 text-xs font-medium text-corg-green-dark">{casino.payout}</span>
            <span className="rounded-full bg-corg-500/10 px-2.5 py-0.5 text-xs text-corg-600">{casino.games} games</span>
            <span className="rounded-full bg-corg-teal/10 px-2.5 py-0.5 text-xs text-corg-teal">{casino.established}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {casino.payments.slice(0, 4).map((p: string) => (
              <span key={p} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">{p}</span>
            ))}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-sm font-bold text-corg-600">{casino.bonus}</div>
          <div className="mt-1 inline-flex items-center gap-1 rounded-lg bg-gold-400 px-3 py-1.5 text-xs font-bold text-corg-600 transition-all hover:bg-gold-500 hover:text-white">
            Read Review →
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
        {casino.pros.map((p: string) => (
          <span key={p} className="flex items-center gap-1">
            <span className="text-corg-green">✓</span> {p}
          </span>
        ))}
      </div>
    </Link>
  );
}
