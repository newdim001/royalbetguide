"use client";
import { useState } from "react";
import Link from "next/link";

export default function BankrollCalculatorPage() {
  const [bankroll, setBankroll] = useState(1000);
  const [betPercent, setBetPercent] = useState(2);
  const [odds, setOdds] = useState(2.0);
  const [winProb, setWinProb] = useState(50);

  const flatBet = bankroll * (betPercent / 100);
  const kellyFrac = ((odds - 1) * (winProb / 100) - (1 - winProb / 100)) / (odds - 1);
  const kellyBet = Math.max(0, bankroll * kellyFrac);
  const halfKelly = kellyBet * 0.5;
  const sessionsToZero = kellyBet > 0 ? Math.ceil(bankroll / (kellyBet * (odds - 1))) : 999;
  const riskLabel = betPercent <= 1 ? "Conservative" : betPercent <= 3 ? "Moderate" : betPercent <= 5 ? "Aggressive" : "Very Aggressive";
  const riskColor = betPercent <= 1 ? "text-green-600" : betPercent <= 3 ? "text-corg-600" : betPercent <= 5 ? "text-amber-500" : "text-red-500";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Bankroll Calculator</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Manage your gambling bankroll wisely. Calculate optimal bet sizes and see risk of ruin.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Your Bankroll</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Bankroll ($)</label>
              <input type="number" value={bankroll} onChange={(e) => setBankroll(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bet Size ({betPercent}% of bankroll)</label>
              <input type="range" value={betPercent} onChange={(e) => setBetPercent(Number(e.target.value))} className="w-full accent-corg-500" min="0.5" max="10" step="0.5" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>Safe: 1%</span><span>Moderate: 2-3%</span><span>Risky: 5%+</span></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Decimal Odds</label>
              <input type="number" value={odds} onChange={(e) => setOdds(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1.01" step="0.01" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Win Probability ({winProb}%)</label>
              <input type="range" value={winProb} onChange={(e) => setWinProb(Number(e.target.value))} className="w-full accent-corg-500" min="1" max="99" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Results</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Flat Bet ({betPercent}%)</div>
              <div className="text-2xl font-bold mt-1 text-corg-600">${flatBet.toFixed(2)}</div>
              <div className={`text-xs mt-1 font-medium ${riskColor}`}>Risk Level: {riskLabel}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Kelly Criterion Bet</div>
              <div className="text-2xl font-bold mt-1 text-corg-600">${kellyBet.toFixed(2)}</div>
              <div className="text-xs text-slate-400 mt-1">Half Kelly: ${halfKelly.toFixed(2)}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Your Edge</div>
              <div className="text-2xl font-bold mt-1 text-green-600">+{((winProb/100) * odds - 1) * 100 > 0 ? "+" : ""}{((winProb/100) * odds - 1) * 100 < 0 ? "" : ""}{(((winProb/100) * odds - 1) * 100).toFixed(1)}%</div>
              <div className="text-xs text-slate-400 mt-1">{((winProb/100) * odds - 1) > 0 ? "Positive expectation (+EV)" : "Negative expectation (-EV)"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="text-lg font-bold text-corg-600 mb-2">How Bankroll Management Works</h2>
        <p className="leading-relaxed">The Kelly Criterion calculates the mathematically optimal bet size given your edge. <strong>Half Kelly</strong> (50% of Kelly) is recommended for most bettors — it reduces volatility while still capturing most of the growth. A 1-2% flat bet per wager is standard for recreational bettors. Never bet more than 5% of your bankroll on a single wager.</p>
      </div>

      <div className="mt-6 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Find Top Sportsbooks →</Link>
      </div>
    </div>
  );
}