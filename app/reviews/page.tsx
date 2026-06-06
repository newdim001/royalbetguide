'use client';

import Link from "next/link";
import CasinoLogo from "../components/CasinoLogo";
import Head from "next/head";
import React from "react";

const REVIEWS = [
   { name: "BitStarz Casino", rating: 9.7, bonus: "5 BTC + 200 Free Spins", slug: "bitstarz", games: "5000+", payout: "98.2%", type: "crypto", payoutLevel: "very_high", imgSlug: "bitstarz" },
   { name: "Jackpot City Casino", rating: 9.5, bonus: "$1,600 Welcome Bonus", slug: "jackpot-city-casino", games: "850+", payout: "97.2%", type: "welcome", payoutLevel: "high", imgSlug: "jackpot-city" },
   { name: "LeoVegas Casino", rating: 9.4, bonus: "$1,000 + 200 Free Spins", slug: "leovegas", games: "3000+", payout: "97.1%", type: "free_spins", payoutLevel: "high", imgSlug: "leovegas" },
   { name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Free Spins", slug: "7bit-casino", games: "5000+", payout: "97.6%", type: "crypto", payoutLevel: "very_high", imgSlug: "7bitcasino" },
   { name: "Spin Casino", rating: 9.3, bonus: "$1,000 Welcome Package", slug: "spin-casino", games: "700+", payout: "96.8%", type: "welcome", payoutLevel: "good", imgSlug: "spin-casino" },
   { name: "BC.Game", rating: 9.3, bonus: "Up to $20,000 + 200 FS", slug: "bc-game", games: "8000+", payout: "97.8%", type: "welcome", payoutLevel: "very_high", imgSlug: "bc-game" },
   { name: "Ruby Fortune Casino", rating: 9.1, bonus: "$750 Welcome Bonus", slug: "ruby-fortune-casino", games: "650+", payout: "96.5%", type: "welcome", payoutLevel: "good", imgSlug: "ruby-fortune" },
   { name: "Royal Vegas Casino", rating: 9.0, bonus: "$1,200 Welcome Bonus", slug: "royal-vegas", games: "900+", payout: "96.3%", type: "welcome", payoutLevel: "standard", imgSlug: "royal-vegas" },
   { name: "Casumo Casino", rating: 8.7, bonus: "$500 + 50 Free Spins", slug: "casumo", games: "2000+", payout: "96.6%", type: "welcome", payoutLevel: "good", imgSlug: "casumo" },
   { name: "Stake Casino", rating: 8.8, bonus: "Crypto Welcome Bonus", slug: "stake", games: "4000+", payout: "97.5%", type: "crypto", payoutLevel: "very_high", imgSlug: "stake" },
   { name: "Amazon Slots Casino", rating: 7.8, bonus: "$100 Free Chip", slug: "amazon-slots", games: "300+", payout: "95.8%", type: "no_deposit", payoutLevel: "standard", imgSlug: "amazon-slots" },
   { name: "Betway Casino", rating: 8.7, bonus: "$1,000 Welcome Bonus", slug: "betway", games: "500+", payout: "96.9%", type: "welcome", payoutLevel: "good", imgSlug: "betway" },
   { name: "Royal Panda Casino", rating: 8.8, bonus: "$1,000 + 10 Free Spins", slug: "royal-panda", games: "2000+", payout: "96.8%", type: "welcome", payoutLevel: "good", imgSlug: "royal-panda" },
   { name: "22Bet Casino", rating: 8.6, bonus: "$300 Welcome Bonus", slug: "22bet", games: "3000+", payout: "96.8%", type: "welcome", payoutLevel: "good", imgSlug: "22bet" },
   { name: "Hell Spin", rating: 8.5, bonus: "$500 + 150 Free Spins", slug: "hell-spin", games: "3000+", payout: "96.6%", type: "free_spins", payoutLevel: "good", imgSlug: "hell-spin" },
   { name: "PlayOJO", rating: 8.4, bonus: "50 Free Spins No Deposit", slug: "play-ojo", games: "3000+", payout: "96.2%", type: "no_deposit", payoutLevel: "standard", imgSlug: "playojo" },
   { name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Free Spins", slug: "katsubet", games: "7000+", payout: "96.4%", type: "free_spins", payoutLevel: "standard", imgSlug: "katsubet" },
   { name: "Mirax Casino", rating: 8.2, bonus: "$500 + 200 Free Spins", slug: "mirax-casino", games: "5000+", payout: "96.3%", type: "free_spins", payoutLevel: "standard", imgSlug: "miraxcasino" },
   { name: "Frank Casino", rating: 8.0, bonus: "$300 + 50 Free Spins", slug: "frank-casino", games: "1500+", payout: "96.0%", type: "welcome", payoutLevel: "standard", imgSlug: "frank-casino" },
   { name: "Casino X", rating: 8.1, bonus: "$300 + 100 Free Spins", slug: "casino-x", games: "2000+", payout: "96.1%", type: "welcome", payoutLevel: "standard", imgSlug: "casino-x" },
   { name: "Energy Casino", rating: 8.5, bonus: "$500 + 100 Free Spins", slug: "energy-casino", games: "1500+", payout: "96.8%", type: "free_spins", payoutLevel: "good", imgSlug: "energy-casino" },
   { name: "888 Casino", rating: 8.9, bonus: "$1,500 Welcome Bonus", slug: "888-casino", games: "2000+", payout: "96.5%", type: "welcome", payoutLevel: "good", imgSlug: "888-casino" },
   { name: "Mr Green Casino", rating: 8.8, bonus: "$1,000 + 200 Free Spins", slug: "mr-green", games: "1500+", payout: "96.6%", type: "free_spins", payoutLevel: "good", imgSlug: "mr-green" },
   { name: "Unibet Casino", rating: 8.8, bonus: "$500 Welcome Bonus", slug: "unibet", games: "1000+", payout: "96.4%", type: "welcome", payoutLevel: "standard", imgSlug: "unibet" },
   { name: "DraftKings Casino", rating: 8.7, bonus: "$2,000 Welcome Bonus", slug: "draftkings", games: "1500+", payout: "96.3%", type: "welcome", payoutLevel: "standard", imgSlug: "draftkings" },
   { name: "FanDuel Casino", rating: 8.7, bonus: "$1,000 Welcome Bonus", slug: "fanduel", games: "1000+", payout: "96.2%", type: "welcome", payoutLevel: "standard", imgSlug: "fanduel" },
   { name: "BetMGM Casino", rating: 8.6, bonus: "$1,500 Welcome Bonus", slug: "betmgm", games: "2000+", payout: "96.4%", type: "welcome", payoutLevel: "standard", imgSlug: "betmgm" },
   { name: "Caesars Palace Online Casino", rating: 8.6, bonus: "$2,500 Welcome Bonus", slug: "caesars", games: "1500+", payout: "96.1%", type: "welcome", payoutLevel: "standard", imgSlug: "caesars" },
   { name: "Bet365 Casino", rating: 8.9, bonus: "$1,000 Welcome Bonus", slug: "bet365", games: "2000+", payout: "96.8%", type: "welcome", payoutLevel: "good", imgSlug: "bet365" },
   { name: "Bovada Casino", rating: 8.5, bonus: "$3,750 Welcome Bonus", slug: "bovada", games: "500+", payout: "96.5%", type: "welcome", payoutLevel: "good", imgSlug: "bovada" },
   { name: "Ignition Casino", rating: 8.5, bonus: "$3,000 Welcome Bonus", slug: "ignition", games: "400+", payout: "96.8%", type: "welcome", payoutLevel: "good", imgSlug: "ignition" },
   { name: "BetOnline Casino", rating: 8.5, bonus: "$3,000 Welcome Bonus", slug: "betonline", games: "500+", payout: "96.4%", type: "welcome", payoutLevel: "standard", imgSlug: "betonline" },
   { name: "Borgata Casino", rating: 8.6, bonus: "$1,000 Welcome Bonus", slug: "borgata", games: "1500+", payout: "96.3%", type: "welcome", payoutLevel: "standard", imgSlug: "borgata" },
   { name: "Golden Nugget Casino", rating: 8.5, bonus: "$1,000 Welcome Bonus", slug: "golden-nugget", games: "1000+", payout: "96.5%", type: "welcome", payoutLevel: "good", imgSlug: "golden-nugget" },
   { name: "PokerStars Casino", rating: 8.6, bonus: "$1,500 Welcome Bonus", slug: "pokerstars", games: "1500+", payout: "96.6%", type: "welcome", payoutLevel: "good", imgSlug: "pokerstars" },
   { name: "Slots.lv Casino", rating: 8.4, bonus: "$5,000 Welcome Bonus", slug: "slots-lv", games: "500+", payout: "96.6%", type: "welcome", payoutLevel: "good", imgSlug: "slots-lv" },
   { name: "Cafe Casino", rating: 8.4, bonus: "$2,500 Welcome Bonus", slug: "cafe-casino", games: "400+", payout: "96.3%", type: "welcome", payoutLevel: "standard", imgSlug: "cafe-casino" },
   { name: "PartyCasino", rating: 8.4, bonus: "$1,000 Welcome Bonus", slug: "party-casino", games: "1000+", payout: "96.2%", type: "welcome", payoutLevel: "standard", imgSlug: "party-casino" },
   { name: "Red Dog Casino", rating: 8.3, bonus: "$2,750 Welcome Bonus", slug: "red-dog", games: "300+", payout: "96.2%", type: "welcome", payoutLevel: "standard", imgSlug: "red-dog" },
   { name: "Wild Casino", rating: 8.2, bonus: "$5,000 Welcome Bonus", slug: "wild-casino", games: "600+", payout: "96.1%", type: "welcome", payoutLevel: "standard", imgSlug: "wild-casino" },
   { name: "EveryGame Casino", rating: 8.1, bonus: "$1,000 Welcome Bonus", slug: "everygame", games: "300+", payout: "96.0%", type: "welcome", payoutLevel: "standard", imgSlug: "everygame" },
   { name: "Lucky Block Casino", rating: 8.8, bonus: "$10,000 Crypto Bonus", slug: "luckyblock", games: "4000+", payout: "97.5%", type: "crypto", payoutLevel: "very_high", imgSlug: "lucky-block" },
   { name: "Mega Dice Casino", rating: 8.6, bonus: "200% + 50 Free Spins", slug: "mega-dice", games: "6000+", payout: "97.7%", type: "free_spins", payoutLevel: "very_high", imgSlug: "mega-dice" },
   { name: "Bitcasino.io", rating: 8.7, bonus: "1 BTC + 300 Free Spins", slug: "bitcasino", games: "3000+", payout: "97.2%", type: "crypto", payoutLevel: "high", imgSlug: "bitcasino-io" },
   { name: "Sportsbet.io", rating: 8.6, bonus: "Up to $5,000 Welcome Bonus", slug: "sportsbet", games: "2000+", payout: "97.0%", type: "welcome", payoutLevel: "high", imgSlug: "sportsbet-io" },
   { name: "CloudBet Casino", rating: 8.5, bonus: "100% up to 5 BTC", slug: "cloudbet", games: "2000+", payout: "97.0%", type: "crypto", payoutLevel: "high", imgSlug: "cloudbet" },
   { name: "Thunderpick Casino", rating: 8.5, bonus: "100% up to $1,000", slug: "thunderpick", games: "3000+", payout: "96.9%", type: "welcome", payoutLevel: "good", imgSlug: "thunderpick" },
   { name: "Dafabet Casino", rating: 8.4, bonus: "$1,000 Welcome Bonus", slug: "dafabet", games: "1500+", payout: "96.3%", type: "welcome", payoutLevel: "standard", imgSlug: "dafabet" },
   { name: "mBit Casino", rating: 8.4, bonus: "4 BTC + 300 Free Spins", slug: "mbit-casino", games: "2500+", payout: "96.8%", type: "crypto", payoutLevel: "good", imgSlug: "mbit" },
   { name: "FortuneJack Casino", rating: 8.3, bonus: "5 BTC + 50 Free Spins", slug: "fortunejack", games: "2000+", payout: "96.7%", type: "crypto", payoutLevel: "good", imgSlug: "fortunejack" },
   { name: "Winz.io Casino", rating: 8.3, bonus: "5 BTC + 200 Free Spins", slug: "winzio", games: "4000+", payout: "97.1%", type: "crypto", payoutLevel: "high", imgSlug: "winz-io" },
];

// Metadata handled by layout template

export default function ReviewsPage() {
  const [filter, setFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("rating");

  const FILTERS = [
    { key: "all", label: "All Casinos" },
    { key: "welcome", label: "Welcome Bonus" },
    { key: "crypto", label: "Crypto" },
    { key: "free_spins", label: "Free Spins" },
    { key: "no_deposit", label: "No Deposit" },
  ];

  const filtered = REVIEWS
    .filter(r => filter === "all" || r.type === filter)
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "payout") return parseFloat(b.payout) - parseFloat(a.payout);
      if (sortBy === "games") return parseInt(b.games) - parseInt(a.games);
      return 0;
    });

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.title="Casino Reviews | Royal Bet Guide";' }} />
      <meta name="description" content="Read expert reviews of 51 online casinos. Compare ratings, bonuses, games, and payment methods. Updated June 2026." />
      <link rel="canonical" href="https://royalbetguide.com/reviews/" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          ★ Expert Reviews
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">
          Casino Reviews
        </h1>
        <p className="mt-2 text-slate-500">Honest reviews of 51 top online casinos</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={"rounded-full px-4 py-2 text-sm font-medium transition-all " + (
                filter === f.key
                  ? "bg-corg-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-corg-500/10 hover:text-corg-500"
              )}>
              {f.label}
            </button>
          ))}
        </div>
        <select value={sortBy} onChange={(e: any) => setSortBy(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-corg-500 focus:outline-none">
          <option value="rating">Sort by Rating</option>
          <option value="payout">Sort by Payout %</option>
          <option value="games">Sort by Games</option>
        </select>
      </div>

      <p className="mb-4 text-sm text-slate-400">Showing {filtered.length} of {REVIEWS.length} casinos</p>

      <div className="grid gap-4">
        {filtered.map((r) => (
          <Link key={r.slug} href={`/reviews/${r.slug}/`}
            className="card-light flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <CasinoLogo slug={r.imgSlug || r.slug} name={r.name} size={48} />
              <div>
                <h2 className="text-lg font-bold text-corg-600">{r.name}</h2>
                <p className="text-sm text-gold-500 font-semibold">{r.bonus}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <span className="block font-bold text-slate-800">{r.games}</span>
                <span className="text-slate-500">Games</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-corg-green-dark">{r.payout}</span>
                <span className="text-slate-500">Payout</span>
              </div>
              <div className="rating-badge">
                <span>★</span>
                <span>{r.rating}</span>
              </div>
              <span className="btn-primary text-sm py-2">Review →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
