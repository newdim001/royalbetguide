"use client";
import { useState } from "react";
import Link from "next/link";

export default function VolatilityCheckerPage() {
  const [hitFreq, setHitFreq] = useState(25);
  const [maxWin, setMaxWin] = useState(5000);
  const [rtp, setRtp] = useState(96.5);

  let volatility = "Medium";
  let volColor = "text-amber-500";
  let volDesc = "Balanced risk and reward. Moderate bankroll recommended.";
  let bankrollAdvice = "50-100x bet size";

  if (hitFreq < 15 && maxWin > 10000) {
    volatility = "Very High";
    volColor = "text-red-500";
    volDesc = "High risk, high reward. Can go long periods without wins, but hits can be huge.";
    bankrollAdvice = "200-500x bet size";
  } else if (hitFreq < 25 && maxWin > 3000) {
    volatility = "High";
    volColor = "text-orange-500";
    volDesc = "Fewer wins but larger payouts when they hit. Requires patience.";
    bankrollAdvice = "100-200x bet size";
  } else if (hitFreq > 35 && maxWin < 1000) {
    volatility = "Low";
    volColor = "text-green-600";
    volDesc = "Frequent small wins with low risk. Good for extended play sessions.";
    bankrollAdvice = "20-50x bet size";
  } else if (hitFreq > 30) {
    volatility = "Low-Medium";
    volColor = "text-green-500";
    volDesc = "Fairly frequent wins with moderate payout potential.";
    bankrollAdvice = "30-70x bet size";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Slot Volatility Checker</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Determine whether a slot is low, medium, or high volatility based on key stats.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Slot Stats</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hit Frequency ({hitFreq}%)</label>
              <input type="range" value={hitFreq} onChange={(e) => setHitFreq(Number(e.target.value))} className="w-full accent-corg-500" min="1" max="50" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>Low: 5-15%</span><span>Medium: 20-30%</span><span>High: 35%+</span></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Max Win (x bet)</label>
              <input type="range" value={maxWin} onChange={(e) => setMaxWin(Number(e.target.value))} className="w-full accent-corg-500" min="100" max="50000" step="100" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>Low: 500x</span><span>Medium: 2000x</span><span>High: 10000x+</span></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">RTP</label>
              <input type="range" value={rtp} onChange={(e) => setRtp(Number(e.target.value))} className="w-full accent-corg-500" min="85" max="99" step="0.1" />
              <div className="text-xs text-slate-400 mt-1 text-center">{rtp}%</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Result</h2>
          <div className="rounded-lg bg-slate-50 p-6 text-center">
            <div className="text-sm text-slate-500">Volatility Level</div>
            <div className={`text-3xl font-bold mt-2 ${volColor}`}>{volatility}</div>
            <p className="mt-3 text-sm text-slate-600">{volDesc}</p>
            <div className="mt-4 rounded-lg bg-corg-500/5 p-3">
              <div className="text-xs text-slate-500">Recommended Bankroll</div>
              <div className="text-lg font-bold text-corg-600 mt-1">{bankrollAdvice}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="text-lg font-bold text-corg-600 mb-2">Understanding Volatility</h2>
        <p className="leading-relaxed"><strong>Low volatility</strong> slots pay small wins frequently — great for casual players who want longer sessions. <strong>High volatility</strong> slots pay less often but can hit massive wins — better for players with larger bankrolls who can weather dry spells. RTP alone doesn't tell the full story; two slots with 96% RTP can feel completely different based on volatility.</p>
      </div>

      <div className="mt-6 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Find Top-Rated Slots Casinos →</Link>
      </div>
    </div>
  );
}