import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino Ratgeber 2026 – Alles rund ums Spielen ",
  description: "Umfassende Casino Ratgeber 2026: Blackjack, Roulette, Slots und mehr. Strategien, Regeln und Tipps von Experten.",
  alternates: { canonical: "https://royalbetguide.com/de/guides/" },
};

const GUIDES = [
  { slug: "blackjack", title: "Blackjack Online 2026", desc: "Regeln, Basic Strategy, Kartenzählen – der ultimative Blackjack-Guide.", icon: "🎴" },
  { slug: "roulette", title: "Roulette Online 2026", desc: "Europäisches, amerikanisches und französisches Roulette im Vergleich.", icon: "🎲" },
  { slug: "slots", title: "Slots Guide 2026", desc: "RTP, Volatilität, Megaways und progressive Jackpots.", icon: "🎉" },
  { slug: "live-casino", title: "Live Casino Guide 2026", desc: "Live-Dealer-Spiele von Evolution Gaming.", icon: "🎥" },
  { slug: "krypto-casino", title: "Krypto Casino Guide", desc: "Bitcoin und Co. in Online-Casinos nutzen.", icon: "₿" },
];

export default function GuidesListingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Wir verdienen möglicherweise eine Provision. Spielen Sie verantwortungsbewusst. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">Startseite</Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Ratgeber</span>
      </div>
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Wissen für Spieler</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Casino Ratgeber 2026</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">Alles rund ums Spielen.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <Link key={g.slug} href={'/de/guides/' + g.slug + '/'} className="card-gradient-border group flex flex-col">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-3xl"><span className="text-3xl">g.icon</span></div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500">{g.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{g.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs text-slate-400">Experten-Guide</span>
              <span className="text-sm font-semibold text-corg-500">Guide öffnen →</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Mehr erfahren</h3>
        <p className="mt-2 text-white/70">Besuchen Sie auch unsere Casino-Bewertungen.</p>
        <Link href="/de/reviews/" className="btn-gold mt-4 inline-flex">Bewertungen ansehen →</Link>
      </div>
    </div>
  );
}
