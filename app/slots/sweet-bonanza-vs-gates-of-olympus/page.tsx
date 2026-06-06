import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweet Bonanza vs Gates of Olympus | Which Pragmatic Slot Wins?",
  description: "Sweet Bonanza vs Gates of Olympus head-to-head. RTP, max win, features, and best casinos compared. Find which Pragmatic Play slot suits you best.",
};

export default function SweetVsOlympus() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Sweet Bonanza vs Gates of Olympus
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Pragmatic Play's two biggest hits go head-to-head. One is a candy-filled sugar rush; the other is a mythological epic. Same engine, different skins — or is there more to it?
        </p>
        
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20 bg-white/10">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-left text-pink-400">Sweet Bonanza</th>
                <th className="py-4 px-6 text-left text-purple-400">Gates of Olympus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">RTP</td>
                <td className="py-3 px-6 text-green-400">96.48%</td>
                <td className="py-3 px-6 text-green-400">96.50%</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Max Win</td>
                <td className="py-3 px-6 text-yellow-400 font-bold">21,100x</td>
                <td className="py-3 px-6 text-yellow-400">5,000x</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Volatility</td>
                <td className="py-3 px-6 text-red-400">High</td>
                <td className="py-3 px-6 text-red-400">High</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Pay System</td>
                <td className="py-3 px-6">Cluster Pays (8+)</td>
                <td className="py-3 px-6">Pay Anywhere (8+)</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Min Bet</td>
                <td className="py-3 px-6">$0.20</td>
                <td className="py-3 px-6">$0.20</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Bonus Buy</td>
                <td className="py-3 px-6 text-green-400">Yes (100x)</td>
                <td className="py-3 px-6 text-green-400">Yes (100x)</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Ante Bet</td>
                <td className="py-3 px-6 text-green-400">Yes (25x)</td>
                <td className="py-3 px-6 text-red-400">No</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-6">Multipliers</td>
                <td className="py-3 px-6">2x-100x (Free Spins only)</td>
                <td className="py-3 px-6">2x-500x (Any spin)</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="py-3 px-6">Theme</td>
                <td className="py-3 px-6">Candy / Sweets</td>
                <td className="py-3 px-6">Greek Mythology</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-b from-pink-900/20 to-slate-900/20 rounded-2xl p-8 border border-pink-500/20">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Sweet Bonanza Wins If...</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✅ You want the higher max win potential (21,100x vs 5,000x)</li>
              <li>✅ You prefer the Ante Bet feature for bonus hunting</li>
              <li>✅ You like the candy theme over mythology</li>
              <li>✅ You want the original “Tumble + Multiplier” experience</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-purple-900/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Gates of Olympus Wins If...</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✅ You want multipliers on ANY spin (not just free spins)</li>
              <li>✅ You prefer Greek mythology over candy</li>
              <li>✅ You want higher multiplier ceiling (500x vs 100x)</li>
              <li>✅ You prefer Zeus animations over lollipop explosions</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
          <h3 className="text-xl font-bold mb-4">Try Both at Top Casinos</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/games/slots/sweet-bonanza/" className="bg-pink-600 hover:bg-pink-500 text-white py-3 px-8 rounded-lg font-semibold transition">Play Sweet Bonanza</a>
            <a href="/games/slots/gates-of-olympus/" className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-lg font-semibold transition">Play Gates of Olympus</a>
          </div>
        </div>
      </div>
    </main>
  );
}
