import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino vs KatsuBet vs MiraxCasino - Confronto 2026",
  description: "Confronto completo 2026: 7BitCasino vs KatsuBet vs MiraxCasino. Bonus, RTP, giochi, prelievi a confronto. Scopri qual e il miglior crypto casino per te.",
  alternates: { canonical: "https://royalbetguide.com/it/compare/7bit-katsubet-mirax/" },
};

const CASINOS = [
  { name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 FS", payout: "97.6%", games: "7000+", established: "2014", crypto: "15+ crypto", payoutTime: "1-10 min", pros: "Pioniere crypto dal 2014, Provably Fair, programma VIP eccellente", cons: "Solo crypto, nessuna valuta fiat", slug: "7bit-casino", url: "https://7bit.partners/p2jvy2mdh" },
  { name: "KatsuBet", rating: 8.3, bonus: "325% + 200 FS", payout: "96.4%", games: "7000+", established: "2020", crypto: "5+ crypto", payoutTime: "5-15 min", pros: "Tornei Drops-and-Wins, design unico, bonus reload regolari", cons: "Niente scommesse sportive, nessuna app mobile", slug: "katsubet", url: "https://katsubet.partners/px4e6itoe" },
  { name: "MiraxCasino", rating: 8.2, bonus: "500$ + 200 FS", payout: "96.3%", games: "5000+", established: "2021", crypto: "4+ crypto + fiat", payoutTime: "5-20 min", pros: "Cashback 25%, limiti alti, pagamenti fiat accettati", cons: "Libreria piu piccola, wagering 45x su alcuni bonus", slug: "mirax-casino", url: "https://mirax.partners/pyklyuxbk" },
];

export default function CompareItPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/it/" },
      { "@type": "ListItem", position: 2, name: "Confronto", item: "https://royalbetguide.com/it/compare/7bit-katsubet-mirax/" },
    ],
  };
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Potremmo ricevere una commissione se ti registri tramite i nostri link. Gioca responsabilmente. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/it/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">&rarr;</span>
        <span className="font-semibold text-slate-800">Confronto: 7BitCasino vs KatsuBet vs MiraxCasino</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Confronto 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">7BitCasino vs KatsuBet vs MiraxCasino</h1>
        <p className="mt-2 text-slate-500">Confronto dettagliato dei tre migliori crypto casino affiliati 7BitPartners</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-3 font-semibold text-slate-600">Caratteristica</th>
              {CASINOS.map(c => <th key={c.name} className="p-3 font-bold text-corg-600 text-center">{c.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Valutazione", values: CASINOS.map(c => c.rating + "/10") },
              { label: "Bonus", values: CASINOS.map(c => c.bonus) },
              { label: "RTP Medio", values: CASINOS.map(c => c.payout) },
              { label: "Giochi", values: CASINOS.map(c => c.games) },
              { label: "Dal", values: CASINOS.map(c => c.established) },
              { label: "Criptovalute", values: CASINOS.map(c => c.crypto) },
              { label: "Tempo Prelievo", values: CASINOS.map(c => c.payoutTime) },
              { label: "Vantaggi", values: CASINOS.map(c => c.pros) },
              { label: "Svantaggi", values: CASINOS.map(c => c.cons) },
            ].map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-600 whitespace-nowrap">{row.label}</td>
                {row.values.map((v, j) => (
                  <td key={j} className={"p-3 text-center " + (j === 0 ? "bg-corg-500/5 font-medium" : "")}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {CASINOS.map(c => (
          <div key={c.name} className={"card-gradient-border p-5 " + (c === CASINOS[0] ? "border-corg-500/30" : "")}>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-corg-600">{c.name}</h2>
              <span className="rating-badge mt-2 inline-flex"><span>&#9733;</span><span>{c.rating}/10</span></span>
              <p className="mt-2 text-sm font-semibold text-gold-500">{c.bonus}</p>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li><strong>RTP:</strong> {c.payout}</li>
              <li><strong>Giochi:</strong> {c.games}</li>
              <li><strong>Prelievo:</strong> {c.payoutTime}</li>
            </ul>
            <a href={c.url} target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 w-full text-center inline-block text-sm">Visita {c.name} &rarr;</a>
            <Link href={`/it/reviews/${c.slug}/`} className="mt-2 block text-center text-xs text-corg-500 hover:underline">Leggi recensione &rarr;</Link>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Il Nostro Verdetto</h2>
        <p>Dopo aver confrontato approfonditamente questi tre crypto casino, il nostro verdetto e chiaro: <strong>7BitCasino</strong> e il vincitore assoluto per il 2026. Con una valutazione di 9,4/10, oltre 7.000 giochi, un RTP del 97,6% e prelievi in 1-10 minuti, stabilisce lo standard di eccellenza nel settore.</p>
        <p><strong>KatsuBet</strong> e ideale per chi ama i tornei di slot e cerca un'esperienza di gioco divertente con un tema unico. Il bonus del 325% e particolarmente generoso e i requisiti di scommessa 35x sono tra i piu bassi.</p>
        <p><strong>MiraxCasino</strong> e la scelta migliore per gli high roller e per chi preferisce avere opzioni di pagamento fiat oltre alle criptovalute. Il cashback del 25% senza requisiti di scommessa e un valore aggiunto notevole.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pronto a scegliere il tuo casino?</h2>
        <p className="mt-2 text-white/70">Inizia con il nostro vincitore 2026 e ottieni 5 BTC + 250 giri gratis.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Prova 7BitCasino &rarr;</a>
      </div>
    </div>
  );
}
