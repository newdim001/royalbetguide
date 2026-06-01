import Link from "next/link";
import GameDemoEmbed from "@/components/GameDemoEmbed";
import { getDemoUrl, gameInfo, type GameSlug } from "@/components/gameSymbols";

export const metadata = {
  title: "Free Casino Games 2026 — Play Free Slots, Blackjack & Roulette Online",
  description: "Play free casino games online in 2026. Practice slots, blackjack, roulette, baccarat, video poker, and more without downloading or spending real money.",
  alternates: { canonical: "https://royalbetguide.com/games/free/" },
};

// Demo slots to feature
const featuredSlots: GameSlug[] = ["gates-of-olympus", "sweet-bonanza", "wolf-gold", "big-bass-bonanza", "starlight-princess"];

export default function FreeGamesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/games/" className="hover:text-corg-500">Games</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Free Casino Games</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Free Play</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Free Casino Games 2026</h1>
          <p className="mt-2 text-slate-500">Practice for free before playing for real money — no download or deposit required</p>
        </div>
        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">
            Free casino games are the perfect way to learn the rules, test strategies, and find your favourite games without risking any money. Every major online casino offers demo versions of their most popular slots and table games, playable instantly in your browser. Whether you want to practice blackjack basic strategy, try out a new slot, or learn how baccarat works, free play mode gives you unlimited access with zero financial risk.
          </p>
        </div>

        {/* 🎰 Playable Free Slots Section */}
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎰 Play Free Slots Online</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Try our top-rated free slots below. Each game runs directly in your browser — no download, no registration, no deposit required.
          </p>

          <div className="mt-6">
            {featuredSlots.map((slug) => {
              const info = gameInfo[slug];
              const demoUrl = getDemoUrl(slug);
              if (!info || !demoUrl) return null;
              return (
                <div key={slug} className="mb-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-corg-600">{info.title}</h3>
                    <div className="flex gap-2 text-xs">
                      <span className="rounded bg-green-100 px-2 py-0.5 text-green-700">RTP {info.rtp}</span>
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-amber-700">{info.volatility}</span>
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">Max {info.maxWin}</span>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-slate-500">{info.description}</p>
                  <GameDemoEmbed src={demoUrl} title={info.title} height={500} />
                  <div className="mt-2 text-right">
                    <Link href={`/games/slots/${slug}/`} className="text-sm text-corg-500 hover:underline">
                      Read Full Review →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link href="/free-slots/" className="btn-gold inline-flex">
              Browse All Free Slots →
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <Link href="/games/slots/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎰 Free Slots</h3><p className="mt-1 text-sm text-slate-500">Play classic slots, video slots, and Megaways games for free. Learn the features and find your favourites before betting real money.</p></Link>
          <Link href="/guides/blackjack/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">♠️ Free Blackjack</h3><p className="mt-1 text-sm text-slate-500">Practice your blackjack strategy with free demo tables. Master basic strategy and card counting techniques risk-free.</p></Link>
          <Link href="/guides/roulette/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎡 Free Roulette</h3><p className="mt-1 text-sm text-slate-500">Try European and American roulette for free. Test betting systems like Martingale without risking your bankroll.</p></Link>
          <Link href="/guides/video-poker/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🃏 Free Video Poker</h3><p className="mt-1 text-sm text-slate-500">Play Jacks or Better and Deuces Wild for free. Learn optimal strategy and paytable selection before playing for real.</p></Link>
          <Link href="/guides/baccarat/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🃏 Free Baccarat</h3><p className="mt-1 text-sm text-slate-500">Practice baccarat for free. Learn the banker vs player bets and understand the commission structure.</p></Link>
          <Link href="/guides/craps/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🎲 Free Craps</h3><p className="mt-1 text-sm text-slate-500">Learn craps betting with free demo tables. Understand pass line, come bets, and odds without pressure.</p></Link>
          <Link href="/games/crypto-games/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">🪙 Free Crypto Games</h3><p className="mt-1 text-sm text-slate-500">Try provably fair crypto games like Dice, Limbo, and Crash for free before committing crypto funds.</p></Link>
          <Link href="/games/progressive-jackpots/" className="card-light group"><h3 className="font-bold text-corg-600 group-hover:text-corg-500">💰 Free Jackpot Slots</h3><p className="mt-1 text-sm text-slate-500">Play demo versions of Mega Moolah, Divine Fortune, and other progressive jackpot slots for free.</p></Link>
        </div>
        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">🎯 Ready to Play for Real Money?</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">Once you have practised and feel confident, it is time to play for real money at a trusted online casino. Our <Link href="/reviews/" className="text-corg-500 hover:underline">expert casino reviews</Link> help you find the best platforms with generous welcome bonuses, fast withdrawals, and the same games you have been practising for free. Browse our <Link href="/games/" className="text-corg-500 hover:underline">full game guides</Link> for detailed breakdowns of each game type.</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Play?</h2>
          <p className="mt-2 text-white/70">Find the best online casinos with exclusive welcome bonuses.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos →</Link>
        </div>
      </article>
    </div>
  );
}
