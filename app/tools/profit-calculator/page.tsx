"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProfitCalculatorPage() {
  const [stake, setStake] = useState(100);
  const [oddsType, setOddsType] = useState<"american" | "decimal">("american");
  const [americanOdds, setAmericanOdds] = useState(110);
  const [decimalOdds, setDecimalOdds] = useState(2.10);

  const decimal = oddsType === "american"
    ? (americanOdds > 0 ? (americanOdds / 100) + 1 : (100 / Math.abs(americanOdds)) + 1)
    : decimalOdds;

  const profit = stake * (decimal - 1);
  const totalReturn = stake * decimal;
  const roi = ((profit / stake) * 100);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Sports Betting Profit Calculator</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Calculate your potential profit, total payout, and ROI for any bet.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 max-w-xl mx-auto">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Stake Amount ($)</label>
            <input type="number" value={stake} onChange={(e) => setStake(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="0.01" step="1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Odds Format</label>
            <div className="flex gap-2">
              <button onClick={() => setOddsType("american")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${oddsType === "american" ? "bg-corg-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>American</button>
              <button onClick={() => setOddsType("decimal")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${oddsType === "decimal" ? "bg-corg-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>Decimal</button>
            </div>
          </div>

          {oddsType === "american" ? (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">American Odds</label>
              <input type="number" value={americanOdds} onChange={(e) => setAmericanOdds(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Decimal Odds</label>
              <input type="number" value={decimalOdds} onChange={(e) => setDecimalOdds(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1.01" step="0.01" />
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Profit</div>
            <div className="text-2xl font-bold mt-1 text-green-600">${profit.toFixed(2)}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Total Return</div>
            <div className="text-2xl font-bold mt-1 text-corg-600">${totalReturn.toFixed(2)}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">ROI</div>
            <div className="text-2xl font-bold mt-1 text-corg-600">{roi >= 0 ? "+" : ""}{roi.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Find Best Sportsbooks →</Link>
        <Link href="/tools/odds-converter/" className="btn-outline inline-flex ml-3">Convert Odds →</Link>
      </div>
    </div>
  );
}