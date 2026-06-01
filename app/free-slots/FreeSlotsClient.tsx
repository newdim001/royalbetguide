"use client";

import Link from "next/link";
import { useState } from "react";
import GameDemoEmbed from "@/components/GameDemoEmbed";
import { getDemoUrl, pragmaticPlaySymbols } from "@/components/gameSymbols";

const allGames = Object.entries(pragmaticPlaySymbols).map(([slug, symbol]) => ({
  slug,
  symbol,
  name: slug.replace(/-/g, " ").replace(/\b[a-z]/g, (c) => c.toUpperCase()),
}));

export default function FreeSlotsPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = search
    ? allGames.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()))
    : allGames;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/games/" className="hover:text-corg-500">Games</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Free Slots</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Play</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Free Slots 2026</h1>
        <p className="mt-2 text-slate-500">Choose a game below and play for free — no download, no deposit, no registration</p>
      </div>

      {/* Search */}
      <div className="mx-auto mb-8 max-w-md">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setSelectedGame(null); }}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-corg-500 focus:outline-none focus:ring-2 focus:ring-corg-500/20"
        />
      </div>

      {/* Selected Game Demo */}
      {selectedGame && (
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-corg-600">
              Playing: {selectedGame.replace(/-/g, " ").replace(/\b[a-z]/g, (c) => c.toUpperCase())}
            </h2>
            <button
              onClick={() => setSelectedGame(null)}
              className="rounded-lg border border-slate-300 px-4 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              Close
            </button>
          </div>
          <GameDemoEmbed src={getDemoUrl(selectedGame as keyof typeof pragmaticPlaySymbols) || ""} title={selectedGame} height={500} />
          <div className="mt-2 text-right">
            <Link href={`/games/slots/${selectedGame}/`} className="text-sm text-corg-500 hover:underline">
              Read Full Review
            </Link>
          </div>
        </div>
      )}

      {/* Game Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((game) => (
          <button
            key={game.slug}
            onClick={() => setSelectedGame(game.slug)}
            className={`rounded-lg border-2 p-3 text-center text-sm font-medium transition hover:border-corg-500 hover:bg-corg-500/5 ${
              selectedGame === game.slug
                ? "border-corg-500 bg-corg-500/10 text-corg-600"
                : "border-slate-200 text-slate-700"
            }`}
          >
            <div className="mb-1 text-lg">{getGameEmoji(game.slug)}</div>
            {game.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate-500">No games found. Try a different search term.</p>
      )}

      <p className="mt-8 text-center text-xs text-slate-400">
        Showing {filtered.length} of {allGames.length} free Pragmatic Play slots. Must be 18+ to play.
      </p>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Ready to Play for Real Money?</h2>
        <p className="mt-2 text-white/70">Find the best Pragmatic Play casinos with welcome bonuses.</p>
        <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Find a Casino</Link>
      </div>
    </div>
  );
}

function getGameEmoji(slug: string): string {
  const emojis: Record<string, string> = {
    "gates-of-olympus": "⚡",
    "sweet-bonanza": "🍬",
    "wolf-gold": "🐺",
    "big-bass-bonanza": "🎣",
    "starlight-princess": "⭐",
    "the-dog-house": "🐕",
    "dog-house-megaways": "🐕",
    "fruit-party": "🍇",
    "chilli-heat": "🌶️",
    "john-hunter": "📖",
    "curse-of-the-werewolf": "🐺",
    "madame-destiny": "🔮",
    "power-of-torii": "⛩️",
    "the-greatest-catch": "🎣",
    "big-bass-splash": "🎣",
    "big-bass-bonanza-megaways": "🎣",
    "5-dragons": "🐉",
    "golden-tale": "📖",
    "razor-returns": "🦈",
    "wild-west-gold": "🤠",
    "fire-strike": "🔥",
    "pirates-pots": "🏴‍☠️",
    "888-dragons": "🐉",
    "joker-jewels": "🃏",
    "book-of-golden-sands": "📖",
    "buffalo-king": "🦬",
    "caishang-cash-pots": "🧧",
    "bison-x": "🦬",
    "demon-pots": "👹",
    "dragon-tiger": "🐉",
    "fortune-pots": "🧧",
    "ganesh-fortune": "🐘",
    "gates-of-tartarus": "⚡",
    "heist-stake": "💰",
    "leprechaun-song": "🍀",
    "muertos-multiplier": "💀",
    "night-of-the-living-tread": "🧟",
    "panda-fortune": "🐼",
    "pirate-silver": "🏴‍☠️",
    "power-of-minotaurus": "🐂",
    "ring-of-odins-wild": "⚡",
    "rise-of-samurai": "⚔️",
    "rise-of-samurai-4": "⚔️",
    "snake-eye": "🐍",
    "sugar-crush": "🍬",
    "super-joker": "🃏",
    "the-bone-riders": "💀",
    "ultra-burn": "🔥",
    "wild-ape": "🦍",
    "7-pigs": "🐷",
    "beast-of-wealth": "🦁",
  };
  return emojis[slug] || "🎰";
}
