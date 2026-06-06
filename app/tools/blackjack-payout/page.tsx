"use client";
import { useState } from "react";
import Link from "next/link";

export default function BlackjackPayoutPage() {
  const [betSize, setBetSize] = useState(25);
  const [handsPerHour, setHandsPerHour] = useState(60);
  const [hoursPlayed, setHoursPlayed] = useState(10);

  const totalHands = handsPerHour * hoursPlayed;
  const expectedBlackjacks = totalHands * 0.048;
  const payout3to2 = expectedBlackjacks * betSize * 1.5;
  const payout6to5 = expectedBlackjacks * betSize * 1.2;
  const difference = payout3to2 - payout6to5;
  const lossPerHour = (betSize * handsPerHour * 0.048 * 0.3) / 10 * 60;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Blackjack Payout Calculator</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">See how much 6:5 blackjack costs you compared to the traditional 3:2 payout.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Your Play Session</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bet Size per Hand ($)</label>
              <input type="number" value={betSize} onChange={(e) => setBetSize(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1" step="5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hands per Hour</label>
              <input type="number" value={handsPerHour} onChange={(e) => setHandsPerHour(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1" />
              <p className="text-xs text-slate-400 mt-1">Typical: 50-70 hands/hour at a full table, 100+ heads-up</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hours Played</label>
              <input type="number" value={hoursPlayed} onChange={(e) => setHoursPlayed(Number(e.target.value))} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none" min="1" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-corg-600 mb-6">Payout Comparison</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Expected Blackjacks</div>
              <div className="text-2xl font-bold mt-1 text-corg-600">{Math.round(expectedBlackjacks)}</div>
              <div className="text-xs text-slate-400 mt-1">~4.8% of hands result in blackjack</div>
            </div>
            <div className="rounded-lg bg-green-50 border border-green-200 p-4">
              <div className="text-sm text-green-600 font-semibold">3:2 Payout → You Win</div>
              <div className="text-2xl font-bold mt-1 text-green-600">${payout3to2.toFixed(2)}</div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <div className="text-sm text-red-500 font-semibold">6:5 Payout → You Win</div>
              <div className="text-2xl font-bold mt-1 text-red-500">${payout6to5.toFixed(2)}</div>
            </div>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
              <div className="text-sm text-amber-600 font-semibold">You Lose Due to 6:5</div>
              <div className="text-2xl font-bold mt-1 text-amber-600">${difference.toFixed(2)}</div>
              <div className="text-xs text-slate-400 mt-1">That's {((difference / payout3to2) * 100).toFixed(1)}% of your blackjack winnings gone</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="text-lg font-bold text-corg-600 mb-2">Why 3:2 Matters</h2>
        <p className="leading-relaxed">Traditional blackjack pays 3:2 on blackjacks — a $25 bet pays $37.50. <strong>6:5 blackjack</strong> only pays $30 for the same hand, costing you 20% of your blackjack payout. Over time, this single rule change adds 1.4% to the house edge, turning a near-even game (0.5% house edge with basic strategy) into a losing proposition. <strong>Always play 3:2 blackjack tables.</strong> Avoid any table advertising "6:5" or "Blackjack pays 6:5."</p>
      </div>

      <div className="mt-6 text-center">
        <Link href="/guides/blackjack/" className="btn-gold inline-flex">Learn Blackjack Strategy →</Link>
      </div>
    </div>
  );
}