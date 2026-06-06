"use client";

import { useState } from "react";
import Link from "next/link";

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return n.toLocaleString("en-US");
  return n.toFixed(2);
}

export default function BonusCalculatorPage() {
  const [bonusAmount, setBonusAmount] = useState(100);
  const [wageringMult, setWageringMult] = useState(35);
  const [gameContrib, setGameContrib] = useState(100);
  const [depositAmount, setDepositAmount] = useState(100);

  const effectiveWR = wageringMult / (gameContrib / 100);
  const totalWagering = (bonusAmount + depositAmount) * effectiveWR;
  const bonusOnlyWR = bonusAmount * effectiveWR;
  const isHighWR = effectiveWR > 40;
  const isVeryHighWR = effectiveWR > 60;

  let verdict = "Fair";
  let verdictColor = "text-green-600";
  if (isVeryHighWR) {
    verdict = "Very High — Player Unfriendly";
    verdictColor = "text-red-500";
  } else if (isHighWR) {
    verdict = "High — Read Terms Carefully";
    verdictColor = "text-amber-500";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Bonus Wagering Calculator</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          See the true cost of any casino bonus. Enter the details below to calculate the real wagering requirement.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Inputs */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Bonus Details</h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Deposit Amount ($)</label>
              <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="0" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bonus Amount ($)</label>
              <input type="number" value={bonusAmount} onChange={(e) => setBonusAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="0" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Wagering Requirement (x)</label>
              <input type="number" value={wageringMult} onChange={(e) => setWageringMult(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1" />
              <p className="mt-1 text-xs text-slate-400">Common values: 30x, 35x, 40x, 45x, 50x</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Game Contribution ({gameContrib}%)</label>
              <input type="range" value={gameContrib} onChange={(e) => setGameContrib(Number(e.target.value))}
                className="w-full accent-corg-500" min="1" max="100" />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>Slots: 100%</span>
                <span>Table Games: 10-20%</span>
                <span>Live Casino: 5-10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Results</h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Effective Wagering Requirement</div>
              <div className={`text-2xl font-bold mt-1 ${isVeryHighWR ? "text-red-500" : isHighWR ? "text-amber-500" : "text-green-600"}`}>
                {effectiveWR.toFixed(1)}x
              </div>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Total You Must Wager</div>
              <div className="text-2xl font-bold mt-1 text-corg-600">${formatNumber(totalWagering)}</div>
              <div className="text-xs text-slate-400 mt-1">On (deposit + bonus) of ${depositAmount + bonusAmount}</div>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Bonus-Only Wagering</div>
              <div className="text-2xl font-bold mt-1 text-corg-600">${formatNumber(bonusOnlyWR)}</div>
              <div className="text-xs text-slate-400 mt-1">Wagering required on the bonus portion alone</div>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Verdict</div>
              <div className={`text-xl font-bold mt-1 ${verdictColor}`}>{verdict}</div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
            <strong>Note:</strong> This calculator shows wagering requirements only. Always check max bet limits, game restrictions, and max cashout terms in the bonus T&Cs.
          </div>
        </div>
      </div>

      {/* How to use section */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600 mb-4">How to Use This Calculator</h2>
        <div className="grid gap-4 sm:grid-cols-3 text-sm text-slate-600">
          <div className="p-3 rounded-lg bg-slate-50">
            <div className="font-bold text-corg-600 mb-1">1. Enter Deposit</div>
            <p>Input how much you plan to deposit. Many bonuses require a minimum deposit of $10-$50.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <div className="font-bold text-corg-600 mb-1">2. Set Wagering</div>
            <p>Enter the wagering multiplier from the bonus terms. 35x is standard; anything over 40x is high.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <div className="font-bold text-corg-600 mb-1">3. Adjust Contribution</div>
            <p>Slots usually count 100%. Table games count less (10-20%). Lower contribution = harder to clear.</p>
          </div>
        </div>
      </div>

      {/* What the numbers mean */}
      <div className="mt-6 prose prose-slate max-w-none">
        <h2 className="text-xl font-bold text-corg-600">Understanding the Results</h2>
        <ul className="text-sm text-slate-600 space-y-2">
          <li><strong>Under 30x:</strong> Excellent — player-friendly bonus, easy to clear</li>
          <li><strong>30x-40x:</strong> Standard — most common range for reputable casinos</li>
          <li><strong>40x-50x:</strong> High — expect difficulty clearing, check max cashout limits</li>
          <li><strong>50x+:</strong> Very high — typically player-unfriendly, proceed with caution</li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Remember: wagering requirement is just one factor. Also check max bet limits (commonly $5-$10),
          game restrictions, and maximum withdrawal from bonus winnings. See our{" "}
          <Link href="/how-we-rate/" className="text-corg-500 hover:underline">full review methodology</Link>{" "}
          for how we evaluate bonus fairness.
        </p>
      </div>

      {/* Tool links */}
      <div className="mt-10 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Browse Reviewed Casinos →</Link>
      </div>
    </div>
  );
}
