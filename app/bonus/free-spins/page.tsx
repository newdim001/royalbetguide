import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";

const ITEMS = [
    { name: "LeoVegas", bonus: "200 Free Spins", wagering: "35x", slug: "leovegas", imgSlug: "leovegas" },
    { name: "7BitCasino", bonus: "250 Free Spins", wagering: "40x", slug: "7bit-casino", imgSlug: "7bitcasino" },
    { name: "BitStarz", bonus: "200 Free Spins", wagering: "40x", slug: "bitstarz", imgSlug: "bitstarz" },
    { name: "Hell Spin", bonus: "150 Free Spins", wagering: "35x", slug: "hell-spin", imgSlug: "hell-spin" },
  ];

export const metadata = {
  title: "Free Spins Casino Bonuses 2026",
  description: "Get the best free spins offers at top online casinos. Claim free spins on popular slots with low wagering requirements.",
};

export default function FreeSpinsPagePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          🔥 Best Offers
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Free Spins</h1>
        <p className="mt-2 text-slate-500">Get the best free spins offers at top online casinos. Claim free spins on popular slots with low wagering requirements.</p>
      </div>

      <div className="grid gap-4">
        {ITEMS.map((item) => (
          <div key={item.slug}
            className="card-light flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/15 to-corg-500/10 text-2xl">
                <CasinoLogo slug={item.imgSlug || item.slug} name={item.name} size={48} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-corg-600">{item.bonus}</h2>
                <p className="text-sm text-slate-500">
                  at {item.name} · {item.wagering} wagering
                </p>
              </div>
            </div>
            <Link href={`/reviews/${item.slug}/`} className="btn-gold text-sm py-2 whitespace-nowrap">
              Claim Bonus →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/reviews/" className="btn-primary">View All Casino Reviews →</Link>
      </div>
    </div>
  );
}
