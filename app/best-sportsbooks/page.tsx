import Link from "next/link";

export const metadata = {
  title: "Best Sportsbooks 2026",
  description: "Compare the best online sportsbooks. Expert ratings, bonuses, and betting options for sports fans.",
};

export default function CategoryPage() {
  const items = [['Jackpot City', '9.5', '$1,600', 'jackpot-city-casino'], ['Spin Casino', '9.3', '$1,000', 'spin-casino'], ['Ruby Fortune', '9.1', '$750', 'ruby-fortune-casino'], ['LeoVegas', '9.4', '$1,000', 'leovegas'], ['BitStarz', '9.7', '5 BTC', 'bitstarz'], ['Stake', '8.8', 'Crypto', 'stake']];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          🏈 Top Picks
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Best Sportsbooks 2026</h1>
        <p className="mt-2 text-slate-500">Compare the best online sportsbooks. Expert ratings, bonuses, and betting options for sports fans.</p>
      </div>

      <div className="grid gap-4">
        {items.map((item: string[]) => (
          <Link key={item[0]} href={`/reviews/${item[3]}/`}
            className="card-light flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/30 to-corg-500/10 text-2xl">
                {item[0].charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">{item[0]}</h2>
                <p className="text-sm text-gold-400">{item[2]} Welcome Bonus</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rating-badge">⭐ {item[1]}</div>
              <span className="btn-primary text-sm py-2">View →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
