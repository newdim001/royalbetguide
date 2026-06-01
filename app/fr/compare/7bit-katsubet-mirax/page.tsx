import Link from "next/link";
import CasinoLogo from "../../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino vs KatsuBet vs MiraxCasino - Comparatif 2026",
  description: "Comparatif detaille 2026: 7BitCasino (9.6/10) vs KatsuBet (9.4/10) vs MiraxCasino (9.2/10). Comparez bonus, jeux, taux de paiement.",
  alternates: { canonical: "https://royalbetguide.com/fr/compare/7bit-katsubet-mirax/" },
  openGraph: {
    title: "7BitCasino vs KatsuBet vs MiraxCasino - Comparatif 2026",
    description: "Comparatif complet: bonus, jeux, taux de paiement. Qui est le meilleur casino crypto?",
    url: "https://royalbetguide.com/fr/compare/7bit-katsubet-mirax/",
  },
};

const CASINOS = [
  {
    name: "7BitCasino", slug: "7bit-casino", rating: 9.6,
    bonus: "5 BTC + 250 FS", wagering: "40x", minDeposit: "0.0001 BTC",
    payout: "97.6%", games: "7000+", established: "2014", license: "Curacao",
    crypto: true, fiat: false, liveDealer: true, mobile: true,
    pros: ["Pionnier crypto depuis 2014", "7000+ jeux de 70+ fournisseurs", "Technologie Provably Fair", "Excellent programme VIP"],
    cons: ["Pas de paiements fiat", "Restreint dans certains pays"],
    url: "https://7bit.partners/p2jvy2mdh", imgSlug: "7bitcasino",
  },
  {
    name: "KatsuBet", slug: "katsubet", rating: 9.4,
    bonus: "325% + 200 FS", wagering: "35x", minDeposit: "20 $",
    payout: "96.4%", games: "7000+", established: "2020", license: "Curacao",
    crypto: true, fiat: true, liveDealer: true, mobile: true,
    pros: ["Bonus de 325% eleve", "7000+ jeux varies", "Tournois reguliers", "Accepte crypto et fiat"],
    cons: ["Support client limite", "Pas de chat en direct 24h/24"],
    url: "https://katsubet.partners/px4e6itoe", imgSlug: "katsubet",
  },
  {
    name: "MiraxCasino", slug: "mirax-casino", rating: 9.2,
    bonus: "500 $ + 200 FS", wagering: "35x", minDeposit: "20 $",
    payout: "96.3%", games: "5000+", established: "2021", license: "Curacao",
    crypto: true, fiat: true, liveDealer: true, mobile: true,
    pros: ["Cashback hebdomadaire 15%", "Design elegant et moderne", "Retraits rapides", "5000+ jeux de qualite"],
    cons: ["Moins de jeux que les concurrents", "Plus recent sur le marche"],
    url: "https://mirax.partners/pyklyuxbk", imgSlug: "miraxcasino",
  },
];

export default function CompareThreePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://royalbetguide.com/fr/" },
      { "@type": "ListItem", position: 2, name: "Comparatif", item: "https://royalbetguide.com/fr/compare/7bit-katsubet-mirax/" },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">{"→"}</span>
        <span className="text-slate-800 font-semibold">Comparatif: 7BitCasino vs KatsuBet vs MiraxCasino</span>
      </div>
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">{"\u2696\ufe0f"} Comparatif 2026</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">7BitCasino vs KatsuBet vs MiraxCasino</h1>
        <p className="mt-2 text-slate-500">Quel casino crypto est fait pour vous? Comparez les trois poids lourds du marche.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 mb-8">
        {CASINOS.map((c) => (
          <div key={c.slug} className="card-gradient-border group text-center">
            <div className="text-4xl mb-2"><CasinoLogo slug={c.imgSlug || c.slug} name={c.name} size={48} /></div>
            <h2 className="text-xl font-bold text-corg-600">{c.name}</h2>
            <div className="rating-badge mx-auto mt-2 w-fit">{"⭐"} {c.rating}/10</div>
            <p className="mt-2 text-sm font-semibold text-gold-500">{c.bonus}</p>
            <p className="mt-1 text-xs text-slate-500">{c.games} jeux - {c.payout} RTP</p>
            <a href={c.url} target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex text-sm">Reclamer {"→"}</a>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-corg-600 mb-4">Tableau comparatif</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 pr-4 font-semibold text-slate-600">Critere</th>
                {CASINOS.map(c => <th key={c.name} className="py-3 px-4 font-semibold text-slate-600">{c.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Note", values: CASINOS.map(c => c.rating + "/10") },
                { label: "Bonus", values: CASINOS.map(c => c.bonus) },
                { label: "Mise (wagering)", values: CASINOS.map(c => c.wagering) },
                { label: "Depot minimum", values: CASINOS.map(c => c.minDeposit) },
                { label: "Taux de paiement", values: CASINOS.map(c => c.payout) },
                { label: "Nombre de jeux", values: CASINOS.map(c => c.games) },
                { label: "Depuis", values: CASINOS.map(c => c.established) },
                { label: "Licence", values: CASINOS.map(c => c.license) },
                { label: "Crypto-monnaies", values: CASINOS.map(c => c.crypto ? "Oui" : "Non") },
                { label: "Paiements fiat", values: CASINOS.map(c => c.fiat ? "Oui" : "Non") },
                { label: "Croupiers en direct", values: CASINOS.map(c => c.liveDealer ? "Oui" : "Non") },
                { label: "Version mobile", values: CASINOS.map(c => c.mobile ? "Oui" : "Non") },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 pr-4 font-medium text-slate-700">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className={'py-3 px-4 ' + (j === 0 ? 'font-semibold text-corg-600' : 'text-slate-600')}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-400">Donnees verifiees en juin 2026.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 mb-8">
        {CASINOS.map(c => (
          <div key={c.slug} className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600 text-center mb-3">{c.name}</h3>
            <div className="space-y-2">
              {c.pros.map(p => <p key={p} className="text-xs text-green-700">+ {p}</p>)}
              {c.cons.map(cn => <p key={cn} className="text-xs text-red-600">- {cn}</p>)}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center mb-8">
        <h2 className="text-2xl font-bold text-white">Notre verdict</h2>
        <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto">
          <strong className="text-gold-400">7BitCasino (9.6/10)</strong> remporte ce comparatif grace a son statut de pionnier crypto, son enorme bibliotheque de 7000+ jeux et son pack de bienvenue de 5 BTC. <strong className="text-gold-400">KatsuBet (9.4/10)</strong> se distingue par son bonus de 325% et ses tournois reguliers. <strong className="text-gold-400">MiraxCasino (9.2/10)</strong> impressionne avec son cashback hebdomadaire de 15% et son design moderne.
        </p>
      </div>
      <div className="text-center">
        <Link href="/fr/reviews/" className="btn-primary">Voir tous les avis detailles {"→"}</Link>
      </div>
    </div>
  );
}
