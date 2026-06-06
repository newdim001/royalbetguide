"use client";

import { useState, useEffect, useCallback } from "react";

// European roulette wheel order (clockwise)
const WHEEL_ORDER = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
  5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const RED_NUMBERS = new Set([
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
]);

function getColor(n: number): "red" | "black" | "green" {
  if (n === 0) return "green";
  return RED_NUMBERS.has(n) ? "red" : "black";
}

type BetType =
  | "straight"
  | "red"
  | "black"
  | "even"
  | "odd"
  | "low"
  | "high"
  | "dozen1"
  | "dozen2"
  | "dozen3"
  | "col1"
  | "col2"
  | "col3";

interface Bet {
  type: BetType;
  value: number; // for straight bets, the number; ignored for others
  amount: number;
}

function getPayout(bet: Bet, result: number): number {
  const winAmount = bet.amount;
  switch (bet.type) {
    case "straight":
      return bet.value === result ? winAmount * 36 : 0;
    case "red":
      return getColor(result) === "red" ? winAmount * 2 : 0;
    case "black":
      return getColor(result) === "black" ? winAmount * 2 : 0;
    case "even":
      return result !== 0 && result % 2 === 0 ? winAmount * 2 : 0;
    case "odd":
      return result !== 0 && result % 2 === 1 ? winAmount * 2 : 0;
    case "low":
      return result >= 1 && result <= 18 ? winAmount * 2 : 0;
    case "high":
      return result >= 19 && result <= 36 ? winAmount * 2 : 0;
    case "dozen1":
      return result >= 1 && result <= 12 ? winAmount * 3 : 0;
    case "dozen2":
      return result >= 13 && result <= 24 ? winAmount * 3 : 0;
    case "dozen3":
      return result >= 25 && result <= 36 ? winAmount * 3 : 0;
    case "col1":
      return result !== 0 && result % 3 === 1 ? winAmount * 3 : 0;
    case "col2":
      return result !== 0 && result % 3 === 2 ? winAmount * 3 : 0;
    case "col3":
      return result !== 0 && result % 3 === 0 ? winAmount * 3 : 0;
    default:
      return 0;
  }
}

const NUMBERS = Array.from({ length: 37 }, (_, i) => i);

export default function FreeRouletteClient() {
  const [balance, setBalance] = useState(1000);
  const [betSize, setBetSize] = useState(10);
  const [bets, setBets] = useState<Bet[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [gameState, setGameState] = useState<"betting" | "spinning" | "result">("betting");
  const [lastResults, setLastResults] = useState<number[]>([]);
  const [winAmount, setWinAmount] = useState(0);
  const [stats, setStats] = useState({ spins: 0, wins: 0, totalWagered: 0 });
  const [highlightedNumber, setHighlightedNumber] = useState<number | null>(null);

  const placeBet = useCallback(
    (type: BetType, value = 0) => {
      if (gameState !== "betting" || balance < betSize) return;
      setBalance((b) => b - betSize);
      setBets((prev) => [...prev, { type, value, amount: betSize }]);
    },
    [gameState, balance, betSize]
  );

  const clearBets = useCallback(() => {
    if (gameState !== "betting") return;
    const total = bets.reduce((s, b) => s + b.amount, 0);
    setBalance((b) => b + total);
    setBets([]);
  }, [gameState, bets]);

  const spin = useCallback(() => {
    if (bets.length === 0 || gameState !== "betting") return;
    setGameState("spinning");
    setSpinning(true);
    setResult(null);
    setHighlightedNumber(null);

    const totalWagered = bets.reduce((s, b) => s + b.amount, 0);
    setStats((s) => ({ ...s, spins: s.spins + 1, totalWagered: s.totalWagered + totalWagered }));

    // Simulate wheel animation
    const finalResult = Math.floor(Math.random() * 37);
    let step = 0;
    const maxSteps = 30;
    const interval = setInterval(() => {
      step++;
      const randomIdx = Math.floor(Math.random() * WHEEL_ORDER.length);
      setHighlightedNumber(WHEEL_ORDER[randomIdx]);
      if (step >= maxSteps) {
        clearInterval(interval);
        setHighlightedNumber(finalResult);
        setResult(finalResult);
        setSpinning(false);
        setGameState("result");

        const totalWin = bets.reduce((sum, bet) => sum + getPayout(bet, finalResult), 0);
        setWinAmount(totalWin);
        if (totalWin > 0) {
          setBalance((b) => b + totalWin);
          setStats((s) => ({ ...s, wins: s.wins + 1 }));
        }
        setLastResults((prev) => [finalResult, ...prev].slice(0, 12));
      }
    }, 80);
  }, [bets, gameState]);

  const newRound = useCallback(() => {
    setBets([]);
    setResult(null);
    setWinAmount(0);
    setHighlightedNumber(null);
    setGameState("betting");
  }, []);

  // Count chips on each bet area
  const betCounts = new Map<string, number>();
  bets.forEach((b) => {
    const key = b.type === "straight" ? `n-${b.value}` : b.type;
    betCounts.set(key, (betCounts.get(key) || 0) + 1);
  });

  const numberGrid = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-corg-600 to-corg-500 px-4 py-3">
        <span className="text-sm font-semibold text-white">🎡 Free European Roulette</span>
        <div className="flex gap-3 text-xs text-white">
          <span>Balance: <strong>${balance}</strong></span>
          <span>Spins: {stats.spins}</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Wheel display */}
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-300 bg-slate-100 shadow-inner">
            {result !== null && !spinning ? (
              <div className="text-center">
                <span className={`block text-3xl font-bold ${getColor(result) === "red" ? "text-red-600" : getColor(result) === "green" ? "text-green-600" : "text-slate-800"}`}>
                  {result}
                </span>
                <span className="text-xs text-slate-500">{getColor(result)}</span>
              </div>
            ) : highlightedNumber !== null ? (
              <span className={`text-3xl font-bold ${getColor(highlightedNumber) === "red" ? "text-red-600" : getColor(highlightedNumber) === "green" ? "text-green-600" : "text-slate-800"}`}>
                {highlightedNumber}
              </span>
            ) : (
              <span className="text-2xl text-slate-400">?</span>
            )}
          </div>
          <div className="text-center sm:text-left">
            {gameState === "result" && (
              <div>
                <p className="text-lg font-bold text-corg-600">Result: {result} ({getColor(result!)})</p>
                {winAmount > 0 ? (
                  <p className="text-sm font-semibold text-green-600">You won ${winAmount}!</p>
                ) : (
                  <p className="text-sm text-slate-500">No win this round.</p>
                )}
              </div>
            )}
            {gameState === "spinning" && (
              <p className="text-sm font-semibold text-corg-600 animate-pulse">Spinning...</p>
            )}
            {lastResults.length > 0 && (
              <div className="mt-2">
                <p className="text-xs text-slate-500">Last: {lastResults.map((n) => (
                  <span key={`last-${n}-${Math.random()}`} className={`inline-block mx-0.5 font-bold ${getColor(n) === "red" ? "text-red-600" : getColor(n) === "green" ? "text-green-600" : "text-slate-800"}`}>
                    {n}
                  </span>
                ))}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bet size */}
        {gameState === "betting" && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">Chip:</span>
            {[1, 5, 10, 25, 50, 100].map((b) => (
              <button
                key={b}
                onClick={() => setBetSize(b)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                  betSize === b
                    ? "bg-corg-500 text-white ring-2 ring-corg-300"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                ${b}
              </button>
            ))}
            <button onClick={clearBets} className="ml-auto rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-200 transition">
              Clear Bets
            </button>
          </div>
        )}

        {/* Betting Table */}
        <div className="mb-4 overflow-x-auto">
          <div className="min-w-[500px]">
            {/* Zero */}
            <div className="flex">
              <button
                onClick={() => placeBet("straight", 0)}
                disabled={gameState !== "betting"}
                className={`relative flex h-28 w-12 items-center justify-center rounded-l-lg border border-slate-300 bg-green-600 text-lg font-bold text-white hover:bg-green-700 transition disabled:opacity-50 ${
                  betCounts.get("n-0") ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                0
                {betCounts.get("n-0") ? (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                    {betCounts.get("n-0")}
                  </span>
                ) : null}
              </button>

              <div className="flex flex-col">
                {numberGrid.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex">
                    {row.map((n) => (
                      <button
                        key={n}
                        onClick={() => placeBet("straight", n)}
                        disabled={gameState !== "betting"}
                        className={`relative flex h-9 w-12 items-center justify-center border border-slate-300 text-sm font-bold hover:opacity-90 transition disabled:opacity-50 ${
                          getColor(n) === "red"
                            ? "bg-red-600 text-white"
                            : "bg-slate-800 text-white"
                        } ${betCounts.get(`n-${n}`) ? "ring-2 ring-yellow-400 z-10" : ""}`}
                      >
                        {n}
                        {betCounts.get(`n-${n}`) ? (
                          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                            {betCounts.get(`n-${n}`)}
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Column bets */}
              <div className="flex flex-col">
                {["col1", "col2", "col3"].map((col) => (
                  <button
                    key={col}
                    onClick={() => placeBet(col as BetType)}
                    disabled={gameState !== "betting"}
                    className={`relative flex h-9 w-12 items-center justify-center border border-slate-300 bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition disabled:opacity-50 ${
                      betCounts.get(col) ? "ring-2 ring-yellow-400 z-10" : ""
                    }`}
                  >
                    2:1
                    {betCounts.get(col) ? (
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                        {betCounts.get(col)}
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            {/* Outside bets */}
            <div className="flex">
              {[
                { type: "dozen1" as BetType, label: "1st 12" },
                { type: "dozen2" as BetType, label: "2nd 12" },
                { type: "dozen3" as BetType, label: "3rd 12" },
              ].map((d) => (
                <button
                  key={d.type}
                  onClick={() => placeBet(d.type)}
                  disabled={gameState !== "betting"}
                  className={`relative flex h-10 flex-1 items-center justify-center border border-slate-300 bg-slate-100 text-sm font-bold text-slate-700 hover:bg-slate-200 transition disabled:opacity-50 ${
                    betCounts.get(d.type) ? "ring-2 ring-yellow-400 z-10" : ""
                  }`}
                >
                  {d.label}
                  {betCounts.get(d.type) ? (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                      {betCounts.get(d.type)}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>

            <div className="flex">
              {[
                { type: "low" as BetType, label: "1-18" },
                { type: "even" as BetType, label: "EVEN" },
                { type: "red" as BetType, label: "RED", bg: "bg-red-600 text-white" },
                { type: "black" as BetType, label: "BLACK", bg: "bg-slate-800 text-white" },
                { type: "odd" as BetType, label: "ODD" },
                { type: "high" as BetType, label: "19-36" },
              ].map((o) => (
                <button
                  key={o.type}
                  onClick={() => placeBet(o.type)}
                  disabled={gameState !== "betting"}
                  className={`relative flex h-10 flex-1 items-center justify-center border border-slate-300 text-sm font-bold hover:opacity-90 transition disabled:opacity-50 ${
                    o.bg || "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  } ${betCounts.get(o.type) ? "ring-2 ring-yellow-400 z-10" : ""}`}
                >
                  {o.label}
                  {betCounts.get(o.type) ? (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                      {betCounts.get(o.type)}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {gameState === "betting" && (
            <>
              <button
                onClick={spin}
                disabled={bets.length === 0}
                className="btn-gold disabled:opacity-40"
              >
                Spin (${bets.reduce((s, b) => s + b.amount, 0)})
              </button>
              <span className="text-sm text-slate-500">
                {bets.length} bet{bets.length !== 1 ? "s" : ""} placed
              </span>
            </>
          )}
          {gameState === "result" && (
            <button onClick={newRound} className="btn-gold">
              New Round
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
