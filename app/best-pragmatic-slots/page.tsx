import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Pragmatic Play Slots 2026 | Top Games & RTP",
  description: "Top 10 Pragmatic Play slots ranked by popularity, RTP, and features. Gates of Olympus, Sweet Bonanza, Big Bass Bonanza & more. Play at the best casinos.",
};

const slots = [
  { name: "Gates of Olympus", rtp: "96.50%", volatility: "High", maxWin: "5,000x", slug: "gates-of-olympus", features: "Tumble, Multipliers, Free Spins" },
  { name: "Sweet Bonanza", rtp: "96.48%", volatility: "High", maxWin: "21,100x", slug: "sweet-bonanza", features: "Tumble, Free Spins, Multipliers" },
  { name: "Big Bass Bonanza", rtp: "96.71%", volatility: "High", maxWin: "2,100x", slug: "big-bass-bonanza", features: "Wild Collectors, Free Spins" },
  { name: "Wolf Gold", rtp: "96.01%", volatility: "Medium", maxWin: "2,500x", slug: "wolf-gold", features: "Money Respin, Jackpots" },
  { name: "The Dog House", rtp: "96.51%", volatility: "High", maxWin: "6,750x", slug: "the-dog-house", features: "Sticky Wilds, Free Spins" },
  { name: "Madame Destiny", rtp: "96.50%", volatility: "High", maxWin: "5,000x", slug: "madame-destiny", features: "Wheel Multipliers, Free Spins" },
  { name: "Fruit Party", rtp: "96.47%", volatility: "High", maxWin: "5,000x", slug: "fruit-party", features: "Cluster Pays, Random Multipliers" },
  { name: "Buffalo King", rtp: "96.06%", volatility: "High", maxWin: "93,750x", slug: "buffalo-king", features: "Free Spins, Wild Multipliers" },
  { name: "Chilli Heat", rtp: "96.50%", volatility: "Medium", maxWin: "2,512x", slug: "chilli-heat", features: "Money Respin, Jackpots" },
  { name: "John Hunter", rtp: "96.50%", volatility: "High", maxWin: "9,000x", slug: "john-hunter", features: "Expanding Symbols, Free Spins" },
];

export default function BestPragmaticSlots() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          Best Pragmatic Play Slots
        </h1>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Pragmatic Play dominates the online slot market with innovative mechanics, high max wins, and consistent quality. Here are the top 10 games you should try.
        </p>
        
        <div className="space-y-4">
          {slots.map((slot, i) => (
            <div key={slot.slug} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition flex flex-col md:flex-row md:items-center gap-4">
              <div className="text-3xl font-bold text-white/20 w-12">{String(i + 1).padStart(2, "0")}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{slot.name}</h3>
                <p className="text-sm text-gray-400">{slot.features}</p>
              </div>
              <div className="flex gap-6 text-sm">
                <div>
                  <p className="text-gray-400">RTP</p>
                  <p className="text-green-400 font-bold">{slot.rtp}</p>
                </div>
                <div>
                  <p className="text-gray-400">Volatility</p>
                  <p className="text-yellow-400">{slot.volatility}</p>
                </div>
                <div>
                  <p className="text-gray-400">Max Win</p>
                  <p className="text-purple-400 font-bold">{slot.maxWin}</p>
                </div>
              </div>
              <a href={`/games/slots/${slot.slug}/`} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
                Review
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Why Pragmatic Play?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <p>Releases 4-6 new slots monthly — the fastest output in the industry.</p>
            <p>Drops & Wins promotion adds $2M+ monthly prize pools to their games.</p>
            <p>Available at virtually every online casino worldwide.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
