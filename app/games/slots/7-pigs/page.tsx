import Link from "next/link";
import GameDemoEmbed from "@/components/GameDemoEmbed";
import { getDemoUrl } from "@/components/gameSymbols";

const slug = "7-pigs";
const demoUrl = getDemoUrl(slug);
const displayName = "7 Pigs";

export const metadata = {
  title: "7 Pigs Slot 2026 — Review, RTP & Free Demo",
  description: "Play 7 Pigs free demo by Pragmatic Play. Farm animal slot.",
  openGraph: {
    url: "https://royalbetguide.com/games/slots/7-pigs/",
  },
  alternates: { canonical: "https://royalbetguide.com/games/slots/7-pigs/" },
};

export default function SlotPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">&rarr;</span>
        <Link href="/games/" className="hover:text-corg-500">Games</Link><span className="mx-2">&rarr;</span>
        <Link href="/games/slots/" className="hover:text-corg-500">Slots</Link><span className="mx-2">&rarr;</span>
        <span className="text-slate-800 font-semibold">{displayName}</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Slot Review</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">{displayName} Slot Review</h1>
          <p className="mt-2 text-slate-500">Pragmatic Play &mdash; Play for Free in Demo Mode</p>
        </div>

        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">A farming themed 5x3 slot with up to 120 ways to win. Piggy bank bonus feature with cash pots. The cute farm animals and wholesome theme make this a lighthearted choice.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Play {displayName} for Free</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Try {displayName} for free in demo mode before playing for real money. Practice the mechanics, learn the bonus features, and see if this slot suits your playing style &mdash; all without any financial risk.
          </p>
          {demoUrl && <GameDemoEmbed src={demoUrl} title={displayName} height={500} />}
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600">Game Features</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p><strong>Provider:</strong> Pragmatic Play</p>
            <p><strong>RTP:</strong> 96.5%</p>
            <p><strong>Volatility:</strong> Medium-High</p>
            <p><strong>Theme:</strong> Farm</p>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Play for Real Money?</h2>
          <p className="mt-2 text-white/70">Find the best Pragmatic Play casinos with exclusive welcome bonuses.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Casinos</Link>
        </div>
      </article>
    </div>
  );
}
