const ARTICLES = [
  {
    slug: "best-bitcoin-casinos-2026",
    title: "Best Bitcoin Casinos 2026 — Top Crypto Gambling Sites Ranked",
    excerpt: "We rank the top crypto casinos of 2026. Compare 7BitCasino, BitStarz, Stake, and more with our expert analysis of bonuses, game selection, and payout rates.",
    category: "Crypto Casinos",
    date: "June 1, 2026",
    author: "Michael Thompson",
  },
  {
    slug: "online-casino-beginners-guide",
    title: "Online Casino Guide for Beginners — How to Start Gambling Safely in 2026",
    excerpt: "New to online casinos? Our comprehensive beginner's guide covers choosing a casino, understanding bonuses, payment methods, game types, and responsible gambling.",
    category: "Guides",
    date: "June 1, 2026",
    author: "Michael Thompson",
  },
  {
    slug: "highest-rtp-slots-2026",
    title: "Highest RTP Slots 2026 — Top 10 Online Slots with Best Payout Rates",
    excerpt: "Discover the top 10 online slots with the highest RTP rates in 2026. From Starburst to Dead or Alive 2, find out which games give you the best chance to win.",
    category: "Slots",
    date: "June 1, 2026",
    author: "Michael Thompson",
  },
  {
    slug: "online-casino-tips-2026",
    title: "Online Casino Tips — How to Win More in 2026",
    excerpt: "Expert tips for online casino success in 2026. Learn bankroll management, game selection strategies, bonus optimization, and when to walk away.",
    category: "Tips",
    date: "May 15, 2026",
    author: "Michael Thompson",
  },
  {
    slug: "how-to-choose-casino",
    title: "How to Choose an Online Casino — Complete 2026 Guide",
    excerpt: "Learn exactly what to look for when choosing an online casino. From licensing and security to game variety and payout speed, we cover it all.",
    category: "Guides",
    date: "May 10, 2026",
    author: "Michael Thompson",
  },
  {
    slug: "crypto-gambling-guide",
    title: "Crypto Gambling Guide — How to Gamble with Bitcoin in 2026",
    excerpt: "Complete guide to gambling with cryptocurrency. Learn about Bitcoin casinos, provably fair games, crypto bonuses, and secure wallet management.",
    category: "Crypto",
    date: "May 5, 2026",
    author: "Michael Thompson",
  },
];import Link from "next/link";

const POSTS = [
  { title: "Online Casino Tips for 2026", slug: "online-casino-tips-2026", excerpt: "Expert tips for safe and enjoyable online casino gaming in 2026. Learn about bankroll management, game selection, and more.", date: "May 28, 2026" },
  { title: "How to Choose the Right Online Casino", slug: "how-to-choose-casino", excerpt: "A complete guide to choosing a safe and reliable online casino. Compare licensing, game selection, bonuses, and payment options.", date: "May 25, 2026" },
  { title: "Crypto Gambling: A Complete Guide for 2026", slug: "crypto-gambling-guide", excerpt: "Everything you need to know about gambling with加密货币 in 2026. Bitcoin, Ethereum, and the best crypto casinos reviewed.", date: "May 22, 2026" },
];

export const metadata = {
  title: "Casino Blog — Tips, Guides & News 2026",
  description: "Expert casino tips, game guides, and industry news. Stay informed with Royal Bet Guide's casino blog.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          📝 Blog
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Casino Blog</h1>
        <p className="mt-2 text-slate-500">Expert tips, guides, and industry news</p>
      </div>

      <div className="grid gap-6">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}/`} className="card-light group">
            <p className="text-xs text-slate-500 mb-2">{post.date}</p>
            <h2 className="text-xl font-bold text-white group-hover:text-corg-500 transition-all">{post.title}</h2>
            <p className="mt-2 text-slate-500 text-sm">{post.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-corg-500 group-hover:text-corg-500">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
