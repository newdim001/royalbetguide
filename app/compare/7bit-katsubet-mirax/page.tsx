import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino vs KatsuBet vs MiraxCasino — Best Crypto Casino 2026",
  description: "Compare the top 3 crypto casinos from 7BitPartners: 7BitCasino, KatsuBet, and MiraxCasino. Side-by-side comparison of bonuses, games, payouts, and more.",
  alternates: { canonical: "https://royalbetguide.com/compare/7bit-katsubet-mirax/" },
};

const CASINOS = [
  {
    slug: "7bit-casino",
    name: "7BitCasino",
    tagline: "The Crypto Pioneer Since 2014",
    rating: 9.4,
    bonus: "5 BTC + 250 Free Spins",
    games: "7,000+",
    payout: "97.6%",
    established: "2014",
    license: "Curacao",
    bestFor: "Crypto veterans and high-rollers",
    affiliateUrl: "https://7bit.partners/p2jvy2mdh",
    pros: ["Crypto pioneer since 2014", "70+ game providers", "Provably fair games", "Great VIP program"],
    cons: ["No fiat payments", "Restricted in some countries"],
    payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT"],
    providers: ["Pragmatic Play", "NetEnt", "Microgaming", "Evolution Gaming", "Play'n GO"],
    description: "The original crypto casino that set the standard. Trusted by thousands since 2014 with a massive game library and industry-leading provably fair technology.",
  },
  {
    slug: "katsubet",
    name: "KatsuBet",
    tagline: "The New Era of Crypto Gaming",
    rating: 8.3,
    bonus: "325% + 200 Free Spins",
    games: "7,000+",
    payout: "96.4%",
    established: "2020",
    license: "Curacao",
    bestFor: "Players seeking huge game variety",
    affiliateUrl: "https://katsubet.partners/px4e6itoe",
    pros: ["Massive 7,000+ games", "Great crypto support", "Generous welcome package", "Regular tournaments"],
    cons: ["No live chat 24/7", "Phone support limited"],
    payments: ["Bitcoin", "Ethereum", "Litecoin", "USDT", "Visa", "Mastercard"],
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Hacksaw Gaming"],
    description: "A fresh take on crypto casinos with an enormous game selection and player-focused promotions.",
  },
  {
    slug: "mirax-casino",
    name: "MiraxCasino",
    tagline: "Modern Gaming, Maximum Flexibility",
    rating: 8.2,
    bonus: "$500 + 200 Free Spins",
    games: "5,000+",
    payout: "96.3%",
    established: "2021",
    license: "Curacao",
    bestFor: "Players who want fiat + crypto options",
    affiliateUrl: "https://mirax.partners/pyklyuxbk",
    pros: ["Large game selection", "Modern interface", "Quick withdrawals", "Good mobile experience"],
    cons: ["Newer brand", "Limited payment methods"],
    payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"],
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Playtech"],
    description: "The most flexible option — MiraxCasino accepts both crypto and fiat, making it the perfect entry point.",
  },
];

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/compare/" className="hover:text-corg-500">Compare</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">7BitCasino vs KatsuBet vs MiraxCasino</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          7BitCasino vs KatsuBet vs MiraxCasino
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          All three are powered by 7BitPartners \u2014 compare them side-by-side.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 font-semibold text-slate-600">Feature</th>
              {CASINOS.map((c) => (
                <th key={c.slug} className="p-4 text-center font-bold text-corg-600">{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Rating", values: CASINOS.map((c) => c.rating + "/10") },
              { label: "Welcome Bonus", values: CASINOS.map((c) => c.bonus) },
              { label: "Games", values: CASINOS.map((c) => c.games) },
              { label: "Payout Rate", values: CASINOS.map((c) => c.payout) },
              { label: "Established", values: CASINOS.map((c) => c.established) },
              { label: "Best For", values: CASINOS.map((c) => c.bestFor) },
            ].map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-700">{row.label}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="p-4 text-center text-slate-600">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {CASINOS.map((c) => (
          <div key={c.slug} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
            <div className="text-center">
              <h2 className="text-xl font-bold text-corg-600">{c.name}</h2>
              <p className="mt-1 text-xs text-slate-400">{c.tagline}</p>
              <div className="mt-3">
                <span className="text-3xl font-extrabold text-corg-600">{c.rating}</span>
                <span className="text-sm text-slate-400">/10</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">{c.description}</p>
            <div className="mt-4 space-y-1.5">
              {c.pros.map((p) => (
                <p key={p} className="text-xs text-green-600">✅ {p}</p>
              ))}
              {c.cons.map((p) => (
                <p key={p} className="text-xs text-red-500">❌ {p}</p>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-center text-xs text-slate-400 mb-2">\ud83c\udf81 {c.bonus}</p>
              <a
                href={c.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored"
                className="btn-gold block text-center"
              >
                Claim at {c.name} →
              </a>
              <Link
                href={"/reviews/" + c.slug + "/"}
                className="mt-2 block text-center text-xs text-corg-500 hover:underline"
              >
                Read full review →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-8">
        <h2 className="text-xl font-bold text-corg-600">Our Verdict</h2>
        <div className="mt-4 space-y-4 text-sm text-slate-700 leading-relaxed">
          <p><strong>Pick 7BitCasino if:</strong> You want the most trusted brand with highest payout (97.6%) since 2014. The 5 BTC + 250 free spins package is industry-leading.</p>
          <p><strong>Pick KatsuBet if:</strong> You want 7,000+ games with a 325% + 200 free spins welcome package and regular tournaments.</p>
          <p><strong>Pick MiraxCasino if:</strong> You prefer fiat + crypto flexibility with the fastest withdrawals and modern interface.</p>
          <div className="mt-6 rounded-lg bg-corg-500/5 p-4 text-center">
            <p className="font-semibold text-corg-600">Start with 7BitCasino \u2014 our top-rated brand.</p>
            <a href={CASINOS[0].affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex">
              Claim 5 BTC + 250 Free Spins at 7BitCasino →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
