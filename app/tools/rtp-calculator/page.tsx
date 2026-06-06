"use client";
import { useState } from "react";
import Link from "next/link";

export default function RTPCalculatorPage() {
  const [rtp, setRtp] = useState(96.5);
  const [betSize, setBetSize] = useState(1);
  const [spins, setSpins] = useState(1000);

  const houseEdge = 100 - rtp;
  const expectedLoss = betSize * spins * (houseEdge / 100);
  const totalBet = betSize * spins;
  const expectedReturn = totalBet - expectedLoss;
  const confidence95Low = expectedReturn - 1.96 * betSize * Math.sqrt(spins) * Math.sqrt(1);
  const confidence95High = expectedReturn + 1.96 * betSize * Math.sqrt(spins) * Math.sqrt(1);
  const oneInALuck = (100 / (100 - rtp)).toFixed(0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">RTP Calculator</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">See how RTP affects your expected returns over any number of spins.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Game Settings</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">RTP ({rtp}%)</label>
              <input type="range" value={rtp} onChange={(e) => setRtp(Number(e.target.value))} className="w-full accent-corg-500" min="85" max="99" step="0.1" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>Low: 85%</span><span>Avg: 96-97%</span><span>High: 99%</span></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bet Size ($)</label>
              <input type="number" value={betSize} onChange={(e) => setBetSize(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="0.1" step="0.1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number of Spins</label>
              <input type="number" value={spins} onChange={(e) => setSpins(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Results</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-50 p-4"><div className="text-sm text-slate-500">Total Wagered</div><div className="text-2xl font-bold mt-1 text-corg-600">${totalBet.toFixed(2)}</div></div>
            <div className="rounded-lg bg-slate-50 p-4"><div className="text-sm text-slate-500">Expected Return</div><div className="text-2xl font-bold mt-1 text-corg-600">${expectedReturn.toFixed(2)}</div></div>
            <div className="rounded-lg bg-slate-50 p-4"><div className="text-sm text-slate-500">Expected Loss (House Edge)</div><div className="text-2xl font-bold mt-1 text-red-500">-${expectedLoss.toFixed(2)}</div><div className="text-xs text-slate-400 mt-1">House edge: {houseEdge.toFixed(1)}%</div></div>
            <div className="rounded-lg bg-slate-50 p-4"><div className="text-sm text-slate-500">95% Confidence Range</div><div className="text-lg font-bold mt-1 text-corg-600">${confidence95Low.toFixed(0)} — ${confidence95High.toFixed(0)}</div><div className="text-xs text-slate-400 mt-1">Your actual result will likely fall in this range</div></div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600 mb-4">What Is RTP?</h2>
        <p className="text-sm text-slate-600 leading-relaxed">RTP (Return to Player) is the percentage of all wagered money a slot pays back over time. A 96% RTP means for every $100 wagered, the game pays back $96 on average — but this is over millions of spins. In the short term (100-1000 spins), your actual result can vary wildly. That''s why volatility matters as much as RTP. Check our <Link href="/how-we-rate/" className="text-corg-500 hover:underline">review methodology</Link> to see how we evaluate game fairness.</p>
      </div>
      <div className="mt-6 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Browse Top-Rated Casinos →</Link>
      </div>
    </div>
  );
}