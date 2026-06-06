import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonus Wagering Calculator | Calculate Playthrough Requirements",
  description: "Free bonus wagering calculator. Enter bonus amount and wagering requirement to see exactly how much you need to bet before withdrawal. Works for all casino bonuses.",
};

export default function BonusCalculator() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Bonus Wagering Calculator
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Calculate exactly how much you need to wager before you can withdraw your bonus winnings. Avoid surprises and choose the best bonus for your play style.
        </p>
        
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Bonus Amount ($)</label>
              <input 
                type="number" 
                id="bonusAmount"
                defaultValue="100"
                className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Wagering Requirement (x)</label>
              <input 
                type="number" 
                id="wageringReq"
                defaultValue="35"
                className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Deposit Amount ($)</label>
              <input 
                type="number" 
                id="depositAmount"
                defaultValue="100"
                className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="wageringType" value="bonus-only" defaultChecked className="accent-green-500" />
              <span className="text-sm">Wagering on bonus only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="wageringType" value="bonus-deposit" className="accent-green-500" />
              <span className="text-sm">Wagering on bonus + deposit</span>
            </label>
          </div>
          
          <button 
            id="calcBtn"
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition"
          >
            Calculate
          </button>
          
          <div id="result" className="mt-8 hidden">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400">Total to Wager</p>
                  <p id="totalWager" className="text-3xl font-bold text-green-400">$0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Effective Value</p>
                  <p id="effectiveValue" className="text-3xl font-bold text-yellow-400">0%</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p id="recommendation" className="text-gray-300"></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-green-400 mb-2">Good (20-30x)</h3>
            <p className="text-sm text-gray-300">Wagering requirements of 20-30x on bonus only are considered fair and achievable for most players.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Average (35-40x)</h3>
            <p className="text-sm text-gray-300">35-40x is the industry standard. Still beatable with high-RTP slots and careful bankroll management.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-red-400 mb-2">Poor (50x+)</h3>
            <p className="text-sm text-gray-300">50x or higher is difficult to clear. The house edge makes it mathematically unlikely to profit.</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Best Low-Wagering Bonuses</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/go/7bit-casino/" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition">
              <p className="font-bold">7Bit Casino</p>
              <p className="text-sm text-green-400">35x wagering · Up to 5 BTC</p>
            </a>
            <a href="/go/mirax-casino/" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition">
              <p className="font-bold">Mirax Casino</p>
              <p className="text-sm text-green-400">40x wagering · Up to 5 BTC + 150 FS</p>
            </a>
          </div>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('calcBtn').addEventListener('click', function() {
            const bonus = parseFloat(document.getElementById('bonusAmount').value) || 0;
            const req = parseFloat(document.getElementById('wageringReq').value) || 0;
            const deposit = parseFloat(document.getElementById('depositAmount').value) || 0;
            const type = document.querySelector('input[name="wageringType"]:checked').value;
            
            const base = type === 'bonus-deposit' ? (bonus + deposit) : bonus;
            const total = base * req;
            const effective = (bonus / total) * 100;
            
            document.getElementById('totalWager').textContent = '$' + total.toLocaleString();
            document.getElementById('effectiveValue').textContent = effective.toFixed(1) + '%';
            
            let rec = '';
            if (req <= 30) rec = 'Excellent bonus terms! Easy to clear with high-RTP slots.';
            else if (req <= 40) rec = 'Standard terms. Play Blood Suckers (98% RTP) or Starburst (96%) to maximize your chances.';
            else if (req <= 50) rec = 'High wagering. Only recommended for experienced players with a solid bankroll.';
            else rec = 'Very difficult to clear. Consider skipping this bonus or using it purely for entertainment.';
            
            document.getElementById('recommendation').textContent = rec;
            document.getElementById('result').classList.remove('hidden');
          });
        `
      }} />
    </main>
  );
}
