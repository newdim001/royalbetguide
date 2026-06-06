import Link from "next/link";
import GameDemoEmbed from "@/components/GameDemoEmbed";
import { getDemoUrl } from "@/components/gameSymbols";

const slug = "buffalo-king";
const demoUrl = getDemoUrl(slug);
const displayName = "Buffalo King";

export const metadata = {
  title: "Buffalo King Slot 2026 — Review, RTP & Free Demo",
  description: "Play Buffalo King free demo by Pragmatic Play. Wildlife slot with 4,096 ways.",
  openGraph: {
    url: "https://royalbetguide.com/games/slots/buffalo-king/",
  },
  alternates: { canonical: "https://royalbetguide.com/games/slots/buffalo-king/" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What is the RTP of Buffalo King?", acceptedAnswer: { "@type": "Answer", text: "The RTP is 96.5%, which is above the industry average for online slots." } },
              { "@type": "Question", name: "Is Buffalo King high volatility?", acceptedAnswer: { "@type": "Answer", text: "Yes, Buffalo King is a medium-high volatility slot. It offers a balance between win frequency and the potential for larger payouts, especially during the free spins round." } },
              { "@type": "Question", name: "Can I play Buffalo King for free?", acceptedAnswer: { "@type": "Answer", text: "Yes, most casinos offer a free demo version of Buffalo King. We recommend trying the demo to experience the 4,096 ways and free spins with increasing multipliers before playing with real money." } },
              { "@type": "Question", name: "What is the max win on Buffalo King?", acceptedAnswer: { "@type": "Answer", text: "The maximum win is 9,374x your stake, achievable during the free spins round with increasing multipliers up to 10x." } },
              { "@type": "Question", name: "Which casinos offer Buffalo King?", acceptedAnswer: { "@type": "Answer", text: "Buffalo King is available at most online casinos. Top picks include Stake, BC.Game, and Jackpot City. Browse our full casino reviews and Pragmatic Play casinos guide for more options." } },
              { "@type": "Question", name: "Is Buffalo King available on mobile?", acceptedAnswer: { "@type": "Answer", text: "Yes, Buffalo King is fully optimised for all mobile devices through HTML5 technology." } }
            ]
          }, null, 2)
        }}
      />
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Slot Review</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">{displayName} Slot Review</h1>
          <p className="mt-2 text-slate-500">Pragmatic Play &mdash; Play for Free in Demo Mode</p>
        </div>

        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">A wildlife-themed 6x4 slot with 4,096 ways to win. Features free spins with increasing multipliers up to 10x. Max win 9,374x. The majestic buffalo and sweeping plains create an immersive wilderness experience.</p>
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
            <p><strong>Theme:</strong> Wildlife</p>
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
