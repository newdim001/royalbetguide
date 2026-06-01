import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleurs Bonus Casino 2026 - Offres de Bienvenue Exclusives",
  description: "Comparez les meilleurs bonus casino 2026: 7BitCasino (5 BTC + 250 FS), KatsuBet (325% + 200 FS), MiraxCasino (500$ + 200 FS), BitStarz, Stake. Offres exclusives pour joueurs francais.",
  alternates: { canonical: "https://royalbetguide.com/fr/bonus/" },
  openGraph: {
    title: "Meilleurs Bonus Casino 2026 - Offres de Bienvenue Exclusives",
    description: "Top 5 bonus casino 2026: 7BitCasino, KatsuBet, MiraxCasino, BitStarz, Stake. Comparez et reclamez!",
    url: "https://royalbetguide.com/fr/bonus/",
  },
};

const TOP_BONUSES = [
  { name: "7BitCasino", bonus: "5 BTC + 250 Tours Gratuits", type: "Crypto", wagering: "40x", rating: 9.6, slug: "7bit-casino", imgSlug: "7bitcasino", url: "https://7bit.partners/p2jvy2mdh" },
  { name: "KatsuBet", bonus: "325% + 200 Tours Gratuits", type: "Bienvenue", wagering: "35x", rating: 9.4, slug: "katsubet", imgSlug: "katsubet", url: "https://katsubet.partners/px4e6itoe" },
  { name: "MiraxCasino", bonus: "500 $ + 200 Tours Gratuits", type: "Bienvenue", wagering: "35x", rating: 9.2, slug: "mirax-casino", imgSlug: "7bitcasino", url: "https://mirax.partners/pyklyuxbk" },
  { name: "BitStarz", bonus: "5 BTC + 200 Tours Gratuits", type: "Crypto", wagering: "35x", rating: 9.5, slug: "bitstarz", imgSlug: "bitstarz" },
  { name: "Stake", bonus: "Bonus de Bienvenue Crypto", type: "Crypto", wagering: "0x", rating: 9.3, slug: "stake", imgSlug: "stake" },
];

export default function FrBonusPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Bonus</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">🔥 Meilleures Offres</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Meilleurs Bonus Casino 2026</h1>
        <p className="mt-2 text-slate-500">Comparez et reclamez les meilleures offres de bienvenue pour les joueurs francais</p>
      </div>

      <div className="grid gap-4">
        {TOP_BONUSES.map((b) => (
          <div key={b.slug} className="card-light flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/15 to-corg-500/10 text-2xl"><CasinoLogo slug={b.imgSlug || b.slug} name={b.name} size={48} /></div>
              <div>
                <h2 className="text-lg font-bold text-corg-600">{b.bonus}</h2>
                <p className="text-sm text-slate-500">
                  chez {b.name} · {b.wagering} mise · {b.type}
                </p>
                {b.rating && (
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gold-400/10 px-2 py-0.5 text-xs font-semibold text-gold-600">
                    ⭐ {b.rating}/10
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/fr/bonus/${b.slug}/`} className="text-sm text-corg-500 hover:underline self-center">Details →</Link>
              {b.url ? (
                <a href={b.url} target="_blank" rel="nofollow sponsored" className="btn-gold text-sm py-2 whitespace-nowrap">Reclamer →</a>
              ) : (
                <Link href={`/fr/bonus/${b.slug}/`} className="btn-gold text-sm py-2 whitespace-nowrap">Voir l'offre →</Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Guide */}
      <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Comment choisir le meilleur bonus casino?</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Choisir le bon bonus casino est essentiel pour maximiser votre experience de jeu. Voici les criteres a prendre en compte:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Conditions de mise (wagering):</strong> Plus le chiffre est bas, plus il est facile de retirer vos gains. Un wagering de 35x est standard, en dessous de 30x est excellent.</li>
          <li><strong>Montant du bonus:</strong> Comparez les pourcentages et les montants maximum. Un bonus eleve avec un wagering raisonnable est l'ideal.</li>
          <li><strong>Tours gratuits:</strong> Verifiez sur quelles machines a sous les tours gratuits sont applicables et quelles sont les conditions de gain.</li>
          <li><strong>Depot minimum:</strong> Assurez-vous que le depot minimum requis correspond a votre budget.</li>
          <li><strong>Methodes de paiement:</strong> Verifiez que le casino accepte vos methodes de paiement preferees, notamment les crypto-monnaies.</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <Link href="/fr/reviews/" className="btn-primary">Voir tous les avis de casinos →</Link>
      </div>
    </div>
  );
}
