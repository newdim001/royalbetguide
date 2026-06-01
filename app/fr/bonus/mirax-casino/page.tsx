import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonus Mirax Casino 2026 - 500$ + 200 Tours Gratuits",
  description: "Pack de bienvenue Mirax Casino: 500$ + 200 tours gratuits | Cashback hebdomadaire 15% | Mise 35x | 5000+ jeux | Offre exclusive pour joueurs francais.",
  alternates: { canonical: "https://royalbetguide.com/fr/bonus/mirax-casino/" },
  openGraph: {
    title: "Bonus Mirax Casino 2026 - 500$ + 200 Tours Gratuits",
    description: "Pack de bienvenue Mirax Casino: 500$ + 200 tours gratuits | Cashback 15% | Mise 35x",
    url: "https://royalbetguide.com/fr/bonus/mirax-casino/",
  },
};

export default function MiraxCasinoBonusPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://royalbetguide.com/fr/" },
        { "@type": "ListItem", position: 2, name: "Bonus", item: "https://royalbetguide.com/fr/bonus/" },
        { "@type": "ListItem", position: 3, name: "MiraxCasino", item: "https://royalbetguide.com/fr/bonus/mirax-casino/" },
      ],
    }],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">→</span>
        <Link href="/fr/bonus/" className="hover:text-corg-500">Bonus</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Mirax Casino</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-gold-500 to-corg-500 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Bonus de Bienvenue</span>
            <h1 className="mt-3 text-3xl font-extrabold text-white">500 $ + 200 Tours Gratuits</h1>
            <p className="mt-1 text-white/80">chez Mirax Casino – Offre exclusive 2026</p>
          </div>
          <a href="https://mirax.partners/pyklyuxbk" target="_blank" rel="nofollow sponsored"
            className="btn-primary whitespace-nowrap bg-white text-corg-600 hover:bg-white/90">Obtenir le bonus →</a>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Apercu du bonus Mirax Casino</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Mirax Casino accueille les nouveaux joueurs avec un pack de bienvenue de 500 $ plus 200 tours gratuits. Ce casino moderne propose plus de 5.000 jeux de fournisseurs de premier plan et se distingue par son offre de cashback hebdomadaire de 15% sur les pertes. Le design elegant de la plateforme et les retraits rapides en font un choix populaire aupres des joueurs francais.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">Details du bonus</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Type</span>
            <span className="block mt-1 font-semibold text-corg-600">Bienvenue</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Mise requise</span>
            <span className="block mt-1 font-semibold text-corg-600">35x</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Depot minimum</span>
            <span className="block mt-1 font-semibold text-corg-600">20 $</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Cashback</span>
            <span className="block mt-1 font-semibold text-corg-600">15% hebdo</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-corg-500/5 p-3 text-center">
          <span className="text-sm text-slate-500">Code bonus: </span>
          <span className="font-bold text-corg-600">Aucun code requis</span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-gold-400/5 p-3">
          <span className="text-lg">🔄</span>
          <span className="text-sm text-slate-600">Cashback hebdomadaire de 15% sur les pertes – un avantage exclusif Mirax</span>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">Comment reclamer ce bonus</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal ml-5">
          <li>Cliquez sur le bouton pour visiter Mirax Casino</li>
          <li>Creez un nouveau compte joueur</li>
          <li>Aucun code bonus requis – le bonus est automatiquement credite</li>
          <li>Effectuez un depot minimum de 20 $</li>
          <li>Votre bonus de 500 $ + 200 tours gratuits sera credite et vous pouvez jouer</li>
        </ol>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">Cashback hebdomadaire de 15%</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          L'un des avantages les plus attractifs de Mirax Casino est son offre de cashback hebdomadaire de 15%. Chaque semaine, vous recevez 15% de vos pertes nettes reverses sous forme de cashback. Cette offre est automatique et ne necessite aucun code ou inscription. Le cashback est credite directement sur votre compte et peut etre utilise pour continuer a jouer.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Contrairement a de nombreux autres casinos, le cashback Mirax n'est pas soumis a des conditions de mise elevees, ce qui en fait l'une des offres les plus avantageuses du marche. C'est un filet de securite qui permet aux joueurs de recuperer une partie de leurs pertes et de prolonger leur temps de jeu.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-gold-400/20 bg-gold-400/5 p-6">
        <h2 className="text-lg font-bold text-corg-600">Conseils pour maximiser votre experience</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Profitez du cashback</strong> – Le cashback hebdomadaire de 15% est un avantage considerable</li>
          <li><strong>Jouez aux machines a sous</strong> – Elles contribuent a 100% aux conditions de mise de 35x</li>
          <li><strong>Explorez les 5000+ jeux</strong> – Mirax propose une vaste bibliotheque de fournisseurs de qualite</li>
          <li><strong>Verifiez les promotions hebdomadaires</strong> – Des offres supplementaires sont disponibles chaque semaine</li>
          <li><strong>Utilisez le support client</strong> – L'assistance 24h/24 et 7j/7 est la pour vous aider</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-4">Questions frequentes</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Comment fonctionne le cashback Mirax Casino?</h3>
            <p className="mt-2 text-sm text-slate-500">Le cashback de 15% est calcule sur vos pertes nettes hebdomadaires et est automatiquement credite chaque semaine. Aucune action requise de votre part – le montant est directement ajoute a votre solde.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Quelles sont les conditions de mise du bonus?</h3>
            <p className="mt-2 text-sm text-slate-500">Le bonus de bienvenue est soumis a une condition de mise de 35x. Vous devez miser le montant du bonus 35 fois avant de pouvoir retirer les gains. Les machines a sous contribuent a 100%.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Mirax Casino accepte-t-il les crypto-monnaies?</h3>
            <p className="mt-2 text-sm text-slate-500">Oui, Mirax Casino accepte les crypto-monnaies ainsi que les methodes de paiement traditionnelles. Vous pouvez deposer et retirer en Bitcoin, Ethereum, Litecoin, et plusieurs autres cryptos.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-gold-500 to-corg-500 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Pret a reclamer 500 $ + 200 tours gratuits?</h3>
        <p className="mt-2 text-white/70">Obtenez votre bonus de bienvenue et le cashback hebdomadaire chez Mirax Casino.</p>
        <a href="https://mirax.partners/pyklyuxbk" target="_blank" rel="nofollow sponsored"
          className="btn-gold mt-4 inline-flex">Obtenir le bonus →</a>
      </div>
    </div>
  );
}
