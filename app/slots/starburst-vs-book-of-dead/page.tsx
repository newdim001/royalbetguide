import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starburst vs Book of Dead | Which Slot is Better?",
  description: "Head-to-head comparison of Starburst vs Book of Dead. RTP, volatility, features, max win, and best casinos. Find your perfect slot match.",
};

export default function StarburstVsBookOfDead() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Starburst vs Book of Dead
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Two legendary slots battle it out. One is a low-volatility classic; the other is a high-volatility adventure. Which suits your style?
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Starburst */}
          <div className="bg-gradient-to-b from-purple-900/30 to-slate-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-2 text-purple-400">Starburst</h2>
            <p className="text-sm text-gray-400 mb-6">NetEnt · 2012</p>
            
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">RTP</span>
                <span className="text-green-400 font-bold">96.09%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Volatility</span>
                <span className="text-blue-400">Low</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Max Win</span>
                <span className="text-yellow-400">500x</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Paylines</span>
                <span>10 (both ways)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Bonus Features</span>
                <span>Starburst Wilds, Respins</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Free Spins</span>
                <span className="text-red-400">No</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold text-purple-300 mb-2">Best For:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>New slot players</li>
                <li>Small bankrolls</li>
                <li>Welcome bonus wagering</li>
                <li>Frequent small wins</li>
              </ul>
            </div>
          </div>
          
          {/* Book of Dead */}
          <div className="bg-gradient-to-b from-amber-900/30 to-slate-900/30 rounded-2xl p-8 border border-amber-500/20">
            <h2 className="text-3xl font-bold mb-2 text-amber-400">Book of Dead</h2>
            <p className="text-sm text-gray-400 mb-6">Play&apos;n GO · 2016</p>
            
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">RTP</span>
                <span className="text-green-400 font-bold">96.21%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Volatility</span>
                <span className="text-red-400 font-bold">High</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Max Win</span>
                <span className="text-yellow-400 font-bold">5,000x</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Paylines</span>
                <span>10</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Bonus Features</span>
                <span>Expanding Symbols, Free Spins</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Free Spins</span>
                <span className="text-green-400 font-bold">Yes (10)</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold text-amber-300 mb-2">Best For:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Experienced players</li>
                <li>Big win hunters</li>
                <li>Adventure theme fans</li>
                <li>Free spins bonus hunters</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Verdict */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">The Verdict</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Choose Starburst If...</h3>
              <p className="text-gray-300">You want a relaxing session with steady wins. Perfect for beginners and clearing wagering requirements. The both-ways paylines and expanding wilds keep the base game exciting.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Choose Book of Dead If...</h3>
              <p className="text-gray-300">You want the thrill of chasing a 5,000x win with expanding symbols in free spins. The &quot;Book of&quot; mechanic is proven and exciting. Higher risk, but the potential reward justifies it.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-900/50 to-amber-900/50 rounded-xl p-6 border border-white/10 text-center">
          <h3 className="text-xl font-bold mb-4">Try Both Slots</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/games/slots/starburst/" className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-lg font-semibold transition">Play Starburst</a>
            <a href="/games/slots/book-of-dead/" className="bg-amber-600 hover:bg-amber-500 text-white py-3 px-8 rounded-lg font-semibold transition">Play Book of Dead</a>
          </div>
        </div>
      </div>
    </main>
  );
}
