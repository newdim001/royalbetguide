"use client";

import { useState, useCallback } from "react";

type Suit = "♠" | "♥" | "♦" | "♣";
type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
interface Card {
  suit: Suit;
  rank: Rank;
}

const SUITS: Suit[] = ["♠", "♥", "♦", "♣"];
const RANKS: Rank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ suit, rank });
    }
  }
  return deck;
}

function shuffle(deck: Card[]): Card[] {
  const d = [...deck];
  for (let i = d.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [d[i], d[j]] = [d[j], d[i]];
  }
  return d;
}

function cardValue(card: Card): number {
  if (card.rank === "A") return 11;
  if (["J", "Q", "K"].includes(card.rank)) return 10;
  return parseInt(card.rank);
}

function handValue(hand: Card[]): number {
  let value = 0;
  let aces = 0;
  for (const card of hand) {
    value += cardValue(card);
    if (card.rank === "A") aces++;
  }
  while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
  }
  return value;
}

function isBlackjack(hand: Card[]): boolean {
  return hand.length === 2 && handValue(hand) === 21;
}

export default function FreeBlackjackClient() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<"idle" | "playing" | "playerDone" | "finished">("idle");
  const [result, setResult] = useState<"" | "win" | "lose" | "push" | "blackjack">("");
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [stats, setStats] = useState({ wins: 0, losses: 0, pushes: 0 });

  const deal = useCallback(() => {
    if (balance < bet) return;
    const newDeck = shuffle(createDeck());
    const pHand = [newDeck[0], newDeck[2]];
    const dHand = [newDeck[1], newDeck[3]];
    const remaining = newDeck.slice(4);
    setDeck(remaining);
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setGameState("playing");
    setResult("");

    if (isBlackjack(pHand)) {
      setGameState("finished");
      setResult("blackjack");
      setBalance((b) => b + Math.floor(bet * 1.5));
      setStats((s) => ({ ...s, wins: s.wins + 1 }));
    }
  }, [balance, bet]);

  const hit = useCallback(() => {
    if (gameState !== "playing" || deck.length === 0) return;
    const card = deck[0];
    const newHand = [...playerHand, card];
    setPlayerHand(newHand);
    setDeck(deck.slice(1));
    if (handValue(newHand) > 21) {
      setGameState("finished");
      setResult("lose");
      setBalance((b) => b - bet);
      setStats((s) => ({ ...s, losses: s.losses + 1 }));
    }
  }, [gameState, deck, playerHand, bet]);

  const stand = useCallback(() => {
    if (gameState !== "playing") return;
    setGameState("playerDone");
    // Dealer plays
    let currentDeck = [...deck];
    let currentDealer = [...dealerHand];
    while (handValue(currentDealer) < 17 && currentDeck.length > 0) {
      currentDealer.push(currentDeck[0]);
      currentDeck = currentDeck.slice(1);
    }
    setDealerHand(currentDealer);
    setDeck(currentDeck);
    setGameState("finished");

    const pVal = handValue(playerHand);
    const dVal = handValue(currentDealer);

    if (dVal > 21 || pVal > dVal) {
      setResult("win");
      setBalance((b) => b + bet);
      setStats((s) => ({ ...s, wins: s.wins + 1 }));
    } else if (pVal < dVal) {
      setResult("lose");
      setBalance((b) => b - bet);
      setStats((s) => ({ ...s, losses: s.losses + 1 }));
    } else {
      setResult("push");
      setStats((s) => ({ ...s, pushes: s.pushes + 1 }));
    }
  }, [gameState, deck, dealerHand, playerHand, bet]);

  const double = useCallback(() => {
    if (gameState !== "playing" || balance < bet || playerHand.length !== 2) return;
    const card = deck[0];
    const newHand = [...playerHand, card];
    setPlayerHand(newHand);
    setDeck(deck.slice(1));
    const doubleBet = bet * 2;

    if (handValue(newHand) > 21) {
      setGameState("finished");
      setResult("lose");
      setBalance((b) => b - doubleBet);
      setStats((s) => ({ ...s, losses: s.losses + 1 }));
      return;
    }

    // Dealer plays
    let currentDeck = deck.slice(1);
    let currentDealer = [...dealerHand];
    while (handValue(currentDealer) < 17 && currentDeck.length > 0) {
      currentDealer.push(currentDeck[0]);
      currentDeck = currentDeck.slice(1);
    }
    setDealerHand(currentDealer);
    setDeck(currentDeck);
    setGameState("finished");

    const pVal = handValue(newHand);
    const dVal = handValue(currentDealer);

    if (dVal > 21 || pVal > dVal) {
      setResult("win");
      setBalance((b) => b + doubleBet);
      setStats((s) => ({ ...s, wins: s.wins + 1 }));
    } else if (pVal < dVal) {
      setResult("lose");
      setBalance((b) => b - doubleBet);
      setStats((s) => ({ ...s, losses: s.losses + 1 }));
    } else {
      setResult("push");
      setStats((s) => ({ ...s, pushes: s.pushes + 1 }));
    }
  }, [gameState, balance, bet, playerHand, deck, dealerHand]);

  const suitColor = (suit: Suit) => (suit === "♥" || suit === "♦" ? "text-red-600" : "text-slate-800");

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-corg-600 to-corg-500 px-4 py-3">
        <span className="text-sm font-semibold text-white">🃏 Free Blackjack</span>
        <div className="flex gap-3 text-xs text-white">
          <span>Balance: <strong>${balance}</strong></span>
          <span>W: {stats.wins} L: {stats.losses} P: {stats.pushes}</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Bet selector */}
        {gameState === "idle" && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">Bet:</span>
            {[5, 10, 25, 50, 100].map((b) => (
              <button
                key={b}
                onClick={() => setBet(b)}
                className={`rounded-lg px-3 py-1 text-sm font-medium transition ${
                  bet === b
                    ? "bg-corg-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                ${b}
              </button>
            ))}
          </div>
        )}

        {/* Dealer */}
        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold text-slate-600">
            Dealer {gameState === "finished" || gameState === "playerDone" ? `(${handValue(dealerHand)})` : ""}
          </p>
          <div className="flex flex-wrap gap-2">
            {dealerHand.map((card, i) => (
              <div
                key={i}
                className={`flex h-20 w-14 flex-col items-center justify-center rounded-lg border-2 border-slate-200 bg-white shadow-sm sm:h-24 sm:w-20 ${
                  gameState === "playing" && i === 1 ? "bg-corg-600 border-corg-600 text-white" : ""
                }`}
              >
                {gameState === "playing" && i === 1 ? (
                  <span className="text-xl">❓</span>
                ) : (
                  <>
                    <span className={`text-lg font-bold ${suitColor(card.suit)}`}>{card.rank}</span>
                    <span className={`text-xl ${suitColor(card.suit)}`}>{card.suit}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Player */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold text-slate-600">
            Your Hand ({handValue(playerHand)}) {isBlackjack(playerHand) && "— BLACKJACK! 🎉"}
          </p>
          <div className="flex flex-wrap gap-2">
            {playerHand.map((card, i) => (
              <div
                key={i}
                className="flex h-20 w-14 flex-col items-center justify-center rounded-lg border-2 border-corg-300 bg-white shadow-sm sm:h-24 sm:w-20"
              >
                <span className={`text-lg font-bold ${suitColor(card.suit)}`}>{card.rank}</span>
                <span className={`text-xl ${suitColor(card.suit)}`}>{card.suit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {gameState === "idle" && (
            <button onClick={deal} className="btn-gold">
              Deal (${bet})
            </button>
          )}
          {gameState === "playing" && (
            <>
              <button onClick={hit} className="rounded-lg bg-corg-500 px-4 py-2 text-sm font-semibold text-white hover:bg-corg-600 transition">
                Hit
              </button>
              <button onClick={stand} className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
                Stand
              </button>
              {playerHand.length === 2 && balance >= bet && (
                <button onClick={double} className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition">
                  Double
                </button>
              )}
            </>
          )}
          {gameState === "finished" && (
            <>
              <button onClick={deal} className="btn-gold">
                Play Again (${bet})
              </button>
              {result && (
                <span className={`ml-2 text-sm font-bold ${
                  result === "win" || result === "blackjack" ? "text-green-600" :
                  result === "lose" ? "text-red-600" : "text-amber-600"
                }`}>
                  {result === "blackjack" ? "Blackjack! You win 3:2" :
                   result === "win" ? "You win!" :
                   result === "lose" ? "Dealer wins" : "Push"}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
