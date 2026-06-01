import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machines a Sous 2026 - Top 10 des Meilleurs Slots",
  description: "Decouvrez le Top 10 des meilleures machines a sous 2026. RTP, volatilite, fournisseurs et conseils pour gagner aux slots. Guides et avis pour joueurs francais.",
  alternates: { canonical: "https://royalbetguide.com/fr/games/slots/" },
  openGraph: {
    title: "Machines a Sous 2026 - Top 10 des Meilleurs Slots",
    description: "Top 10 des meilleures machines a sous 2026: RTP, volatilite et fournisseurs.",
    url: "https://royalbetguide.com/fr/games/slots/",
  },
};

const SLOTS = [
  { name: "Book of Dead", provider: "Play'n GO", rtp: "96.21%", volatility: "Elevee", theme: "Egypte ancienne", type: "Classique" },
  { name: "Starburst", provider: "NetEnt", rtp: "96.09%", volatility: "Faible", theme: "Spatial", type: "Classique" },
  { name: "Gonzo's Quest", provider: "NetEnt", rtp: "95.97%", volatility: "Moyenne", theme: "Aventure", type: "Avalanche" },
  { name: "Mega Moolah", provider: "Microgaming", rtp: "88.12%", volatility: "Elevee", theme: "Safari", type: "Jackpot progressif" },
  { name: "Dead or Alive 2", provider: "NetEnt", rtp: "96.82%", volatility: "Tres elevee", theme: "Far West", type: "Video slot" },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", rtp: "96.71%", volatility: "Moyenne", theme: "Peche", type: "Video slot" },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", rtp: "96.48%", volatility: "Elevee", theme: "Bonbons", type: "Tumble" },
  { name: "The Dog House", provider: "Pragmatic Play", rtp: "96.51%", volatility: "Moyenne", theme: "Chiens", type: "Video slot" },
  { name: "Wolf Gold", provider: "Pragmatic Play", rtp: "96.01%", volatility: "Moyenne", theme: "Animaux", type: "Video slot" },
  { name: "Jammin' Jars", provider: "Push Gaming", rtp: "96.83%", volatility: "Elevee", theme: "Fruits", type: "Grid slot" },
];

export default function SlotsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">{"→"}</span>
        <Link href="/fr/guides/" className="hover:text-corg-500">Guides</Link>
        <span className="mx-2">{"→"}</span>
        <span className="text-slate-800 font-semibold">Machines a Sous</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">{"\uD83C\uDFB0"} Top 10</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Machines a Sous 2026</h1>
        <p className="mt-2 text-slate-500">Top 10 des meilleurs slots avec RTP, fournisseur et volatilite</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-corg-600 mb-4">Top 10 des machines a sous</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2 pr-2 font-semibold text-slate-600">#</th>
                <th className="py-2 px-2 font-semibold text-slate-600">Machine a sous</th>
                <th className="py-2 px-2 font-semibold text-slate-600">Fournisseur</th>
                <th className="py-2 px-2 font-semibold text-slate-600">RTP</th>
                <th className="py-2 px-2 font-semibold text-slate-600">Volatilite</th>
              </tr>
            </thead>
            <tbody>
              {SLOTS.map((s, i) => (
                <tr key={s.name} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 pr-2 font-bold text-corg-600">{i + 1}</td>
                  <td className="py-3 px-2 font-medium text-slate-700">{s.name}</td>
                  <td className="py-3 px-2 text-slate-600">{s.provider}</td>
                  <td className="py-3 px-2 font-semibold text-corg-600">{s.rtp}</td>
                  <td className="py-3 px-2 text-slate-600">{s.volatility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed info for each slot */}
      <div className="space-y-4 mb-8">
        {SLOTS.map((s, i) => (
          <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500 text-sm font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-bold text-corg-600">{s.name}</h3>
                <p className="text-xs text-slate-500">{s.provider} - {s.theme} - {s.type}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-corg-500/10 px-2 py-1 text-corg-600 font-medium">RTP: {s.rtp}</span>
              <span className="rounded-full bg-gold-400/10 px-2 py-1 text-gold-600 font-medium">Volatilite: {s.volatility}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Guide section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Comment choisir une machine a sous</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Le choix d'une machine a sous depend de plusieurs facteurs. Le RTP (Return to Player) indique le pourcentage theorique des mises reverse aux joueurs sur le long terme. Un RTP superieur a 96% est considere comme bon. La volatilite determine la frequence et l'importance des gains: faible volatilite pour des gains frequents mais petits, haute volatilite pour des gains plus rares mais potentiellement plus importants.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Les fournisseurs comme NetEnt, Pragmatic Play, Play'n GO et Microgaming sont reconnus pour la qualite de leurs jeux. Nous vous recommandons de toujours verifier le RTP et la volatilite avant de jouer, et de fixer un budget que vous etes pret a consacrer au divertissement.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pret a jouer aux machines a sous?</h2>
        <p className="mt-2 text-white/70">Decouvrez les meilleurs casinos pour jouer aux slots.</p>
        <Link href="/fr/reviews/" className="btn-gold mt-4 inline-flex">Voir les casinos {"→"}</Link>
      </div>
    </div>
  );
}
