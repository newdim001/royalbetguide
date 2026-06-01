const ARTICLES = [
  {
    slug: "crypto-regulations-2026",
    title: "New Crypto Regulations 2026 — What Online Gamblers Need to Know",
    excerpt: "Global crypto regulations are evolving fast. Learn how new KYC requirements, licensing rules, and compliance standards affect online gamblers in 2026.",
    date: "June 1, 2026",
    category: "Regulation",
    author: "David Anderson",
  },
  {
    slug: "biggest-jackpot-wins-2026",
    title: "Biggest Online Casino Jackpot Wins of 2026 — Record Payouts",
    excerpt: "From €10M WowPot wins to life-changing Mega Moolah jackpots, we round up the biggest online casino wins of 2026 so far.",
    date: "June 1, 2026",
    category: "Jackpots",
    author: "David Anderson",
  },
  {
    slug: "online-gambling-trends-2026",
    title: "Online Gambling Trends 2026 — Market Growth, Mobile & Crypto",
    excerpt: "The online gambling industry hit $120B in 2026. Explore the key trends driving growth — from mobile gaming dominance to the crypto casino boom.",
    date: "June 1, 2026",
    category: "Industry",
    author: "David Anderson",
  },
  {
    slug: "new-casino-launches-2026",
    title: "New Casino Launches 2026 — Best New Gambling Sites",
    excerpt: "Stay ahead of the curve with our coverage of the newest online casino launches in 2026. We review the latest platforms hitting the market.",
    date: "May 20, 2026",
    category: "Launches",
    author: "David Anderson",
  },
  {
    slug: "uk-gambling-regulations-2026",
    title: "UK Gambling Regulations 2026 — Latest Changes & Updates",
    excerpt: "The UK Gambling Commission continues to tighten rules in 2026. Find out how new stake limits, affordability checks, and bonus restrictions affect players.",
    date: "May 12, 2026",
    category: "Regulation",
    author: "David Anderson",
  },
  {
    slug: "crypto-gambling-market-growth",
    title: "Crypto Gambling Market Growth 2026 — Statistics & Trends",
    excerpt: "The crypto gambling sector is expanding rapidly. We analyze the latest market data, adoption rates, and what it means for players and operators.",
    date: "May 8, 2026",
    category: "Market",
    author: "David Anderson",
  },
];import Link from "next/link";

const NEWS = [
  { slug: "new-casino-launches-2026", title: "Top 5 New Online Casino Launches in 2026", excerpt: "Discover the most exciting new online casinos launching in 2026. From innovative crypto platforms to feature-rich live dealer casinos, these fresh operators are raising the bar.", date: "May 28, 2026", category: "Industry News", readTime: "6 min read" },
  { slug: "uk-gambling-regulations-2026", title: "UK Gambling Commission Updates Regulations for 2026", excerpt: "The UK Gambling Commission has announced significant regulatory updates for 2026. Learn what these changes mean for players and operators in the UK market.", date: "May 25, 2026", category: "Regulation", readTime: "5 min read" },
  { slug: "crypto-gambling-market-growth", title: "Crypto Gambling Market Reaches New Milestones in 2026", excerpt: "The cryptocurrency gambling sector continues its explosive growth. We analyze the latest statistics, trends, and what the future holds for Bitcoin casinos.", date: "May 22, 2026", category: "Crypto", readTime: "7 min read" },
];

export const metadata = {
  title: "Online Casino News 2026 — Industry Updates & New Launches",
  description: "Stay updated with the latest online casino news, new casino launches, regulatory changes, and industry trends. Expert coverage for informed players.",
  alternates: { canonical: "https://royalbetguide.com/news/" },
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Latest Updates</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Online Casino News</h1>
        <p className="mt-2 text-slate-500">Industry updates, new launches, and regulatory changes</p>
      </div>
      <div className="space-y-6">
        {NEWS.map((a) => (
          <Link key={a.slug} href={"/news/" + a.slug + "/"} className="card-light group block">
            <div className="flex items-center gap-3 mb-2">
              <span className="rounded-full bg-corg-500/10 px-3 py-0.5 text-xs font-medium text-corg-500">{a.category}</span>
              <span className="text-xs text-slate-400">{a.date}</span>
              <span className="text-xs text-slate-400">{a.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{a.title}</h2>
            <p className="mt-2 text-sm text-slate-500 line-clamp-2">{a.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-corg-500 group-hover:underline">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
