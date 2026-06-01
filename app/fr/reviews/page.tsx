import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis Casinos 2026 - Tous nos Tests",
  description: "Avis detailles et tests des meilleurs casinos en ligne 2026. Notes, bonus, jeux et paiements. 7BitCasino, KatsuBet, MiraxCasino et plus par Pierre Dubois.",
  alternates: { canonical: "https://royalbetguide.com/fr/reviews/" },
  openGraph: {
    title: "Avis Casinos 2026 - Tous nos Tests",
    description: "Avis detailles des meilleurs casinos en ligne 2026. Notes et tests d'experts.",
    url: "https://royalbetguide.com/fr/reviews/",
  },
};

const REVIEWS = [
  {
    name: "7BitCasino", slug: "7bit-casino", rating: 9.6, bonus: "5 BTC + 250 Tours Gratuits",
    payout: "97.6%", games: "7000+", established: "2014", imgSlug: "7bitcasino",
    desc: "Pionnier crypto depuis 2014 avec 7000+ jeux et un pack de bienvenue exceptionnel. Technologie Provably Fair et certification AskGamblers.",
    pros: ["Pionnier crypto", "7000+ jeux", "Provably Fair", "VIP excellent"],
    url: "https://7bit.partners/p2jvy2mdh",
  },
  {
    name: "KatsuBet", slug: "katsubet", rating: 9.4, bonus: "325% + 200 Tours Gratuits",
    payout: "96.4%", games: "7000+", established: "2020", imgSlug: "katsubet",
    desc: "Bonus de bienvenue massif de 325% et tournois reguliers. Large selection de jeux avec support crypto et fiat.",
    pros: ["Bonus 325% eleve", "7000+ jeux", "Tournois", "Crypto + fiat"],
    url: "https://katsubet.partners/px4e6itoe",
  },
  {
    name: "MiraxCasino", slug: "mirax-casino", rating: 9.2, bonus: "500 $ + 200 Tours Gratuits",
    payout: "96.3%", games: "5000+", established: "2021", imgSlug: "miraxcasino",
    desc: "Casino moderne avec cashback hebdomadaire de 15% et design elegant. 5000+ jeux de qualite et retraits rapides.",
    pros: ["Cashback 15%", "Design moderne", "Retraits rapides", "5000+ jeux"],
    url: "https://mirax.partners/pyklyuxbk",
  },
];

export default function FrReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">{"→"}</span>
        <span className="text-slate-800 font-semibold">Avis</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">{"★"} Tests 2026</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Avis Casinos 2026</h1>
        <p className="mt-2 text-slate-500">Tous nos tests et evaluations detailles de casinos en ligne</p>
      </div>

      <div className="grid gap-6">
        {REVIEWS.map((r) => (
          <div key={r.slug} className="card-gradient-border">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <CasinoLogo slug={r.imgSlug || r.slug} name={r.name} size={48} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-corg-600">{r.name}</h2>
                    <span className="rating-badge">{"★"} {r.rating}/10</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-gold-500">{r.bonus}</p>
                  <p className="mt-2 text-sm text-slate-500">{r.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-corg-500/10 px-2 py-1 text-corg-600">{r.games} jeux</span>
                    <span className="rounded-full bg-green-50 px-2 py-1 text-green-700">{r.payout} RTP</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">Depuis {r.established}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.pros.map((p) => <span key={p} className="text-xs text-green-700">+ {p}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
              <Link href={`/fr/reviews/${r.slug}/`} className="text-sm font-semibold text-corg-500 hover:underline">Lire l'avis complet {"→"}</Link>
              <Link href={`/fr/bonus/${r.slug}/`} className="text-sm font-semibold text-corg-500 hover:underline">Voir le bonus {"→"}</Link>
              <a href={r.url} target="_blank" rel="nofollow sponsored" className="btn-gold text-sm py-2">Reclamer le bonus {"→"}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Comment nous testons les casinos</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Chaque casino est evalue selon des criteres stricts: selection de jeux, rapidite des paiements, equite des bonus, qualite du service client, experience mobile, securite et fiabilite. Nous testons chaque casino nous-memes et ne recommandons que les operateurs en qui nous avons confiance.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Notre equipe dirigee par Pierre Dubois met a jour regulierement les evaluations pour garantir leur exactitude. Si vous trouvez des informations obsoletes, n'hesitez pas a nous contacter.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link href="/fr/bonus/" className="btn-primary">Voir les meilleurs bonus {"→"}</Link>
      </div>
    </div>
  );
}
