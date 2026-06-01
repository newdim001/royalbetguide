import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Casinò 2026 - Tutto sui Giochi d'Azzardo Online",
  description: "Guide complete al gioco d'azzardo online 2026: blackjack, roulette, slot machine e strategie vincenti per giocatori italiani. Guide verificate dagli esperti.",
  alternates: { canonical: "https://royalbetguide.com/it/guides/" },
};

const GUIDES = [
  { title: "Blackjack Online", desc: "Regole, strategia di base e conteggio carte per vincere al blackjack", icon: "\u2660", slug: "blackjack", color: "from-red-500/20 to-red-500/5" },
  { title: "Roulette Online", desc: "Varianti europea, americana e francese con strategie Martingala e Fibonacci", icon: "\u25cf", slug: "roulette", color: "from-green-500/20 to-green-500/5" },
  { title: "Slot Machine", desc: "Guida alle slot: RTP, volatilita, meccaniche e consigli per giocare", icon: "\U0001F3B0", slug: "slots", color: "from-purple-500/20 to-purple-500/5" },
];

export default function GuidesItPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Potremmo ricevere una commissione se ti registri tramite i nostri link. Gioca responsabilmente. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/it/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">&rarr;</span>
        <span className="font-semibold text-slate-800">Guide</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Guide 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Guide Casinò 2026</h1>
        <p className="mt-2 text-slate-500">Tutto quello che devi sapere sui giochi d'azzardo online</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <Link key={g.slug} href={"/it/guides/" + g.slug + "/"} className="card-gradient-border group">
            <div className="flex items-start gap-4">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} text-2xl`}><span className="text-3xl">g.icon</span></div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{g.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{g.desc}</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-right">
              <span className="text-sm font-semibold text-corg-500">Leggi la guida &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Impara a Giocare Come un Professionista</h2>
        <p>Le nostre guide sono scritte da esperti del settore e pensate per giocatori di tutti i livelli. Che tu sia un principiante assoluto o un giocatore esperto che vuole perfezionare la propria strategia, troverai informazioni utili e aggiornate.</p>
        <p>Ogni guida copre le regole di base, le strategie avanzate e i consigli pratici per massimizzare le tue possibilita di vincita. Le informazioni sono verificate e aggiornate regolarmente per riflettere le ultime novita del settore.</p>
        <p>Ricorda sempre di giocare responsabilmente. Il gioco d'azzardo deve essere un divertimento, non un modo per guadagnare denaro. Stabilisci un budget, rispettalo e non inseguire mai le perdite.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pronto a mettere in pratica quello che hai imparato?</h2>
        <p className="mt-2 text-white/70">Registrati su uno dei nostri casino consigliati e inizia a giocare.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Inizia Ora &rarr;</a>
      </div>
    </div>
  );
}
