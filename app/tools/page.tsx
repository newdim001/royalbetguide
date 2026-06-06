import Link from "next/link";

export const metadata = {
  title: "Free Casino Tools — Calculators & Resources",
  description: "Free casino tools to help you play smarter. Bonus calculator, RTP calculator, odds converter, bankroll manager, and more.",
  alternates: { canonical: "https://royalbetguide.com/tools/" },
};

const TOOLS = [
  { title: "Bonus Wagering Calculator", desc: "Calculate the real wagering requirement of any casino bonus.", href: "/tools/bonus-calculator/", emoji: "🧮", cat: "Calculator" },
  { title: "RTP Calculator", desc: "See how RTP affects your expected returns over any number of spins.", href: "/tools/rtp-calculator/", emoji: "🎰", cat: "Calculator" },
  { title: "Slot Volatility Checker", desc: "Determine if a slot is low, medium, or high volatility.", href: "/tools/volatility-checker/", emoji: "📊", cat: "Slot Analysis" },
  { title: "Odds Converter", desc: "Convert between American, decimal, and fractional odds instantly.", href: "/tools/odds-converter/", emoji: "🔄", cat: "Sports Betting" },
  { title: "Sports Betting Profit Calculator", desc: "Calculate profit, total return, and ROI for any bet.", href: "/tools/profit-calculator/", emoji: "💰", cat: "Sports Betting" },
  { title: "Bankroll Calculator", desc: "Calculate optimal bet sizes using Kelly Criterion or fixed percentage.", href: "/tools/bankroll-calculator/", emoji: "🛡️", cat: "Bankroll" },
  { title: "Blackjack Payout Calculator", desc: "Compare 3:2 vs 6:5 blackjack — see how much 6:5 costs you.", href: "/tools/blackjack-payout/", emoji: "♠️", cat: "Table Games" },
];

export default function ToolsPage() {
  const categories = [...new Set(TOOLS.map(t => t.cat))];
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tools</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Casino Tools</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Free calculators and resources to help you make informed decisions. All tools are 100% free, no signup required.</p>
      </div>

      {categories.map(cat => (
        <div key={cat} className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-corg-500 mb-3">{cat}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {TOOLS.filter(t => t.cat === cat).map(tool => (
              <Link key={tool.href} href={tool.href} className="rounded-xl border border-slate-200 bg-white p-5 group hover:border-corg-500/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{tool.emoji}</span>
                  <div>
                    <h3 className="font-bold text-corg-600 group-hover:text-corg-500">{tool.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-10 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Browse Casino Reviews →</Link>
      </div>
    </div>
  );
}
