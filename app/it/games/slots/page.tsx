import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slot Machine 2026 - Top 10 Migliori Slot Online",
  description: "Le migliori slot machine 2026: classifica Top 10 con RTP, volatilita e provider. Scopri le slot piu popolari come Gates of Olympus, Sweet Bonanza e Book of Dead.",
  alternates: { canonical: "https://royalbetguide.com/it/games/slots/" },
};

const TOP_SLOTS = [
  { name: "Gates of Olympus", provider: "Pragmatic Play", rtp: "96.50%", volatility: "Alta", features: "Moltiplicatori, giri gratis fino a 15x" },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", rtp: "96.48%", volatility: "Alta", features: "Tumbling, acquisto bonus, moltiplicatori illimitati" },
  { name: "Book of Dead", provider: "Play'n GO", rtp: "96.21%", volatility: "Alta", features: "Simbolo espandibile, giri gratis" },
  { name: "Starburst", provider: "NetEnt", rtp: "96.09%", volatility: "Media", features: "Wild re-spin, vincita su entrambi i lati" },
  { name: "The Dog House Megaways", provider: "Pragmatic Play", rtp: "96.15%", volatility: "Alta", features: "Megaways, sticky wild, moltiplicatori" },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", rtp: "96.71%", volatility: "Media", features: "Simboli pesce con moltiplicatori, giri gratis" },
  { name: "Dead or Alive 2", provider: "NetEnt", rtp: "96.82%", volatility: "Molto Alta", features: "Giri gratis con sticky wild, moltiplicatori" },
  { name: "Wolf Gold", provider: "Pragmatic Play", rtp: "96.01%", volatility: "Media", features: "Jackpot, giri gratis, respin" },
  { name: "Mega Moolah", provider: "Microgaming", rtp: "88.12%", volatility: "Alta", features: "Jackpot progressivo milioni, ruota bonus" },
  { name: "Aztec Gems Deluxe", provider: "Pragmatic Play", rtp: "96.33%", volatility: "Media", features: "Jackpot casuale, gioco d'azzardo semplice" },
];

export default function SlotsItPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Potremmo ricevere una commissione se ti registri tramite i nostri link. Gioca responsabilmente. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/it/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">&rarr;</span>
        <Link href="/it/games/" className="hover:text-corg-500">Giochi</Link>
        <span className="mx-2">&rarr;</span>
        <span className="font-semibold text-slate-800">Slot Machine</span>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Giochi</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Top 10 Migliori Slot Machine 2026</h1>
        <p className="mt-2 text-slate-500">Le slot piu popolari con RTP, provider e volatilita</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[500px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-3 font-semibold text-slate-600">#</th>
              <th className="p-3 font-semibold text-slate-600">Slot</th>
              <th className="p-3 font-semibold text-slate-600">Provider</th>
              <th className="p-3 font-semibold text-slate-600">RTP</th>
              <th className="p-3 font-semibold text-slate-600">Volatilita</th>
            </tr>
          </thead>
          <tbody>
            {TOP_SLOTS.map((s, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-bold text-corg-500">{i + 1}</td>
                <td className="p-3 font-medium text-corg-600">{s.name}</td>
                <td className="p-3 text-slate-600">{s.provider}</td>
                <td className="p-3 text-corg-green font-semibold">{s.rtp}</td>
                <td className="p-3 text-slate-600">{s.volatility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Guida alle Slot Machine</h2>
        <p>Le slot machine online sono il gioco piu popolare nei casino online, rappresentando circa il 70-80% del fatturato totale. La loro semplicita, l'ampia varieta di temi e il potenziale di vincite enormi le rendono irresistibili per giocatori di tutti i livelli.</p>
        <h3 className="text-lg font-bold text-corg-600">RTP (Return to Player)</h3>
        <p>L'RTP e la percentuale teorica che una slot restituisce ai giocatori nel lungo periodo. Una slot con RTP del 96% restituira 96 euro ogni 100 euro giocati. Le slot nella nostra top 10 hanno RTP tra l'88% (Mega Moolah, per via del jackpot progressivo) e il 96,82% (Dead or Alive 2).</p>
        <h3 className="text-lg font-bold text-corg-600">Volatilita</h3>
        <p>La volatilita descrive la frequenza e l'entita delle vincite. Le slot ad alta volatilita pagano meno frequentemente ma con importi piu alti. Le slot a media volatilita offrono un equilibrio tra frequenza e importo. Le slot a bassa volatilita pagano frequentemente ma con importi piccoli.</p>
        <h3 className="text-lg font-bold text-corg-600">Provider di Slot</h3>
        <p>I migliori provider di slot del 2026 includono Pragmatic Play, NetEnt, Play'n GO, Microgaming, Hacksaw Gaming e Nolimit City. Ognuno ha il suo stile unico, con Pragmatic Play che domina per varieta e innovazione, e NetEnt che e sinonimo di qualita da anni.</p>
        <p>Gioca sempre responsabilmente e imposta un budget prima di iniziare. Le slot sono giochi d'azzardo e non esiste una strategia che garantisca vincite.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pronto a giocare alle migliori slot?</h2>
        <p className="mt-2 text-white/70">Registrati su 7BitCasino e ottieni 5 BTC + 250 giri gratis per iniziare.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Gioca ora &rarr;</a>
      </div>
    </div>
  );
}
