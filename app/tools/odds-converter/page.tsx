"use client";
import { useState } from "react";
import Link from "next/link";

function calcAll(american: number) {
  let decimal = american > 0 ? (american / 100) + 1 : (100 / Math.abs(american)) + 1;
  decimal = Math.round(decimal * 100) / 100;
  let fracNumer = american > 0 ? american : 100;
  let fracDenom = american > 0 ? 100 : Math.abs(american);
  let fractional = fracNumer + "/" + fracDenom;
  let implied = american > 0 ? (100 / (american + 100)) * 100 : (Math.abs(american) / (Math.abs(american) + 100)) * 100;
  implied = Math.round(implied * 100) / 100;
  return { decimal, fractional, implied };
}

const QUICK_REF = [
  [-500, 1.20, "1/5", 83.3],
  [-250, 1.40, "2/5", 71.4],
  [-110, 1.91, "10/11", 52.4],
  [100, 2.00, "1/1", 50.0],
  [200, 3.00, "2/1", 33.3],
  [500, 6.00, "5/1", 16.7],
  [1000, 11.00, "10/1", 9.1],
];

export default function OddsConverterPage() {
  const [american, setAmerican] = useState(150);
  const { decimal, fractional, implied } = calcAll(american);

  function formatAmerican(val: number): string {
    return val > 0 ? "+" + val : String(val);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Tool</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Odds Converter</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Convert between American, decimal, and fractional odds. See the implied probability instantly.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 max-w-xl mx-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1">American Odds</label>
          <input type="number" value={american}
            onChange={(e) => setAmerican(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg focus:border-corg-500 focus:ring-1 focus:ring-corg-500 outline-none text-center" />
          <p className="text-xs text-slate-400 mt-1 text-center">Positive = underdog (e.g. +200) | Negative = favorite (e.g. -150)</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Decimal</div>
            <div className="text-2xl font-bold mt-1 text-corg-600">{decimal.toFixed(2)}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Fractional</div>
            <div className="text-2xl font-bold mt-1 text-corg-600">{fractional}</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Implied Probability</div>
            <div className="text-2xl font-bold mt-1 text-corg-600">{implied.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 max-w-xl mx-auto">
        <h2 className="text-lg font-bold text-corg-600 mb-3">Quick Reference</h2>
        <div className="overflow-x-auto text-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2 text-left font-semibold text-corg-600">American</th>
                <th className="py-2 text-left font-semibold text-corg-600">Decimal</th>
                <th className="py-2 text-left font-semibold text-corg-600">Fractional</th>
                <th className="py-2 text-left font-semibold text-corg-600">Probability</th>
              </tr>
            </thead>
            <tbody>
              {QUICK_REF.map(([am, dec, frac, prob]) => {
                const isSelected = am === american;
                return (
                  <tr key={String(am)}
                    className={"border-b border-slate-100" + (isSelected ? " bg-corg-500/5 font-semibold" : "")}>
                    <td className="py-2 text-slate-700">{formatAmerican(am as number)}</td>
                    <td className="py-2 text-slate-700">{(dec as number).toFixed(2)}</td>
                    <td className="py-2 text-slate-700">{frac as string}</td>
                    <td className="py-2 text-slate-700">{prob as number}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/reviews/" className="btn-gold inline-flex">Find Best Sportsbooks →</Link>
      </div>
    </div>
  );
}
