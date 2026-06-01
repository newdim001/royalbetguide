import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migliori Bonus Casino 2026 - Offerte Esclusive per Italiani",
  description: "I migliori bonus casino 2026 per giocatori italiani. Confronta offerte esclusive: 5 BTC + 250 FS, 325% + 200 FS, 500$ + 200 FS. Bonus verificati ogni giorno.",
  alternates: { canonical: "https://royalbetguide.com/it/bonus/" },
};

const BONUS_LIST = [
  { name: "7BitCasino", bonus: "5 BTC + 250 Giri Gratis", wagering: "40x", minDep: "0,0001 BTC", rating: 9.4, slug: "7bit-casino", imgSlug: "7bitcasino", url: "https://7bit.partners/p2jvy2mdh" },
  { name: "KatsuBet", bonus: "325% + 200 Giri Gratis", wagering: "35x", minDep: "0,0005 BTC", rating: 8.3, slug: "katsubet", imgSlug: "katsubet", url: "https://katsubet.partners/px4e6itoe" },
  { name: "MiraxCasino", bonus: "500$ + 200 Giri Gratis", wagering: "35x", minDep: "20$", rating: 8.2, slug: "mirax-casino", imgSlug: "7bitcasino", url: "https://mirax.partners/pyklyuxbk" },
  { name: "BitStarz", bonus: "5 BTC + 180 Giri Gratis", wagering: "40x", minDep: "0,0001 BTC", rating: 9.1, slug: "bitstarz", imgSlug: "bitstarz", url: "#" },
  { name: "Stake", bonus: "200% + 50 Giri Gratis", wagering: "35x", minDep: "0,0001 BTC", rating: 8.8, slug: "stake", imgSlug: "stake", url: "#" },
];

export default function BonusItPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Potremmo ricevere una commissione se ti registri tramite i nostri link. Gioca responsabilmente. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/it/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">&rarr;</span>
        <span className="font-semibold text-slate-800">Bonus</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Offerte Verificate 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Migliori Bonus Casino 2026</h1>
        <p className="mt-2 text-slate-500">Bonus esclusivi verificati dai nostri esperti per giocatori italiani</p>
      </div>
      <div className="grid gap-5">
        {BONUS_LIST.map((b, i) => (
          <div key={b.slug} className="card-gradient-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-2xl"><CasinoLogo slug={b.imgSlug || b.slug} name={b.name} size={48} /></span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-corg-600">{b.name}</h2>
                  <span className="rating-badge"><span>&#9733;</span><span>{b.rating}</span></span>
                </div>
                <p className="text-sm font-semibold text-gold-500">{b.bonus}</p>
                <p className="text-xs text-slate-400">Wagering: {b.wagering} | Deposito minimo: {b.minDep}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/it/bonus/${b.slug}/`} className="text-sm text-corg-500 hover:underline whitespace-nowrap">Dettagli &rarr;</Link>
              <a href={b.url} target="_blank" rel="nofollow sponsored" className="btn-gold text-sm whitespace-nowrap">Richiedi &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Come Scegliere il Miglior Bonus Casino</h2>
        <p>Con cosi tante offerte disponibili, scegliere il bonus casino giusto puo essere difficile. Ecco i fattori chiave da considerare prima di richiedere qualsiasi bonus.</p>
        <h3 className="text-lg font-bold text-corg-600">Requisiti di Scommessa</h3>
        <p>Il wagering indica quante volte devi giocare il valore del bonus prima di poter prelevare. Un requisito di 35x e migliore di 40x. Cerca bonus con wagering il piu basso possibile per massimizzare le tue possibilita di vincita.</p>
        <h3 className="text-lg font-bold text-corg-600">Percentuale del Bonus</h3>
        <p>Un bonus del 100% raddoppia il tuo deposito. Offerte come il 325% di KatsuBet sono eccezionali e ti danno molto piu capitale di gioco. Tuttavia, controlla sempre il limite massimo del bonus.</p>
        <h3 className="text-lg font-bold text-corg-600">Giri Gratis</h3>
        <p>I giri gratis sono un valore aggiunto significativo. Verifica su quali slot vengono assegnati e se ci sono requisiti di scommessa sulle vincite dei giri gratis.</p>
        <h3 className="text-lg font-bold text-corg-600">Metodi di Pagamento</h3>
        <p>Alcuni bonus sono disponibili solo per specifici metodi di pagamento. I crypto casino offrono generalmente i bonus migliori con prelievi piu rapidi.</p>
        <h3 className="text-lg font-bold text-corg-600">Scadenza del Bonus</h3>
        <p>La maggior parte dei bonus deve essere utilizzata entro 30 giorni. Verifica la durata del bonus per assicurarti di avere tempo sufficiente per soddisfare i requisiti di scommessa.</p>
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Non perdere le migliori offerte</h2>
        <p className="mt-2 text-white/70">Iscriviti alla newsletter per ricevere bonus esclusivi direttamente via email.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Ottieni il miglior bonus &rarr;</a>
      </div>
    </div>
  );
}
