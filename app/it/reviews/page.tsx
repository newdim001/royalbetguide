import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recensioni Casinò 2026 - Tutti i nostri Test Verificati",
  description: "Recensioni dettagliate dei migliori casino online 2026. 7BitCasino, KatsuBet e MiraxCasino testati dai nostri esperti con valutazioni oneste e imparziali.",
  alternates: { canonical: "https://royalbetguide.com/it/reviews/" },
};

const REVIEWS = [
  { name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Giri Gratis", payout: "97.6%", games: "7000+", slug: "7bit-casino", imgSlug: "7bitcasino", summary: "Crypto casino pioniere dal 2014. 7000+ giochi da 70+ provider. Il miglior crypto casino per italiani nel 2026." },
  { name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Giri Gratis", payout: "96.4%", games: "7000+", slug: "katsubet", imgSlug: "katsubet", summary: "Casino a tema giapponese con tornei Drops-and-Wins. Bonus generoso con requisiti 35x. Ideale per amanti delle slot." },
  { name: "MiraxCasino", rating: 8.2, bonus: "500$ + 200 Giri Gratis", payout: "96.3%", games: "5000+", slug: "mirax-casino", imgSlug: "miraxcasino", summary: "Casino premium con cashback 25% e limiti alti. Perfetto per high roller. Accetta pagamenti fiat e crypto." },
];

export default function ReviewsItPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Potremmo ricevere una commissione se ti registri tramite i nostri link. Gioca responsabilmente. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/it/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">&rarr;</span>
        <span className="font-semibold text-slate-800">Recensioni</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Recensioni 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Recensioni Casinò 2026</h1>
        <p className="mt-2 text-slate-500">Tutti i nostri test verificati e valutazioni imparziali</p>
      </div>
      <div className="grid gap-6">
        {REVIEWS.map((r) => (
          <Link key={r.slug} href={"/it/reviews/" + r.slug + "/"} className="card-gradient-border group">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-3xl"><CasinoLogo slug={r.imgSlug || r.slug} name={r.name} size={48} /></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{r.name}</h2>
                    <span className="rating-badge"><span>&#9733;</span><span>{r.rating}</span></span>
                  </div>
                  <p className="text-sm font-semibold text-gold-500">{r.bonus}</p>
                  <p className="mt-1 text-sm text-slate-500">{r.summary}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="text-xs text-corg-green">RTP: {r.payout}</span>
                    <span className="text-xs text-slate-400">|</span>
                    <span className="text-xs text-slate-500">{r.games} giochi</span>
                  </div>
                </div>
              </div>
              <span className="text-sm font-semibold text-corg-500 whitespace-nowrap">Leggi la recensione &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Come Testiamo i Casino</h2>
        <p>Ogni casino nella nostra lista viene sottoposto a un processo di test rigoroso che valuta cinque categorie con diversi pesi: licenza e sicurezza (25%), selezione giochi e provider (20%), bonus e promozioni (20%), velocita dei prelievi (15%), assistenza clienti (10%) e usabilita mobile (10%).</p>
        <p>I nostri esperti hanno oltre 10 anni di esperienza nel settore del gioco d&apos;azzardo online. Testiamo personalmente ogni casino, effettuando depositi reali, provando i giochi, contattando l&apos;assistenza e prelevando le vincite per verificare la velocita e l&apos;affidabilita di ogni piattaforma.</p>
        <p>Non accettiamo pagamenti per recensioni positive. Le nostre valutazioni sono oneste e imparziali, basate esclusivamente sull&apos;esperienza di gioco reale. Se un casino non soddisfa i nostri standard, non viene incluso nelle nostre raccomandazioni.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Non sai quale casino scegliere?</h2>
        <p className="mt-2 text-white/70">Confronta tutti e tre i nostri casino consigliati.</p>
        <Link href="/it/compare/7bit-katsubet-mirax/" className="btn-gold mt-4 inline-flex">Confronta i Casino &rarr;</Link>
      </div>
    </div>
  );
}
