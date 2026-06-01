import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonus KatsuBet 2026 - 325% + 200 Tours Gratuits",
  description: "Pack de bienvenue KatsuBet: 325% + 200 tours gratuits | Mise 35x | Tournois reguliers | 7000+ jeux | Code KATSU200 | Offre exclusive 2026.",
  alternates: { canonical: "https://royalbetguide.com/fr/bonus/katsubet/" },
  openGraph: {
    title: "Bonus KatsuBet 2026 - 325% + 200 Tours Gratuits",
    description: "Pack de bienvenue KatsuBet: 325% + 200 tours gratuits | Mise 35x | Code: KATSU200",
    url: "https://royalbetguide.com/fr/bonus/katsubet/",
  },
};

export default function KatsuBetBonusPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://royalbetguide.com/fr/" },
        { "@type": "ListItem", position: 2, name: "Bonus", item: "https://royalbetguide.com/fr/bonus/" },
        { "@type": "ListItem", position: 3, name: "KatsuBet", item: "https://royalbetguide.com/fr/bonus/katsubet/" },
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
        <span className="text-slate-800 font-semibold">KatsuBet</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-gold-500 to-corg-500 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Bonus de Bienvenue</span>
            <h1 className="mt-3 text-3xl font-extrabold text-white">325% + 200 Tours Gratuits</h1>
            <p className="mt-1 text-white/80">chez KatsuBet – Offre exclusive 2026</p>
          </div>
          <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored"
            className="btn-primary whitespace-nowrap bg-white text-corg-600 hover:bg-white/90">Obtenir le bonus →</a>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Apercu du bonus KatsuBet</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          KatsuBet offre un impressionnant pack de bienvenue de 325% plus 200 tours gratuits aux nouveaux joueurs. Avec l'un des pourcentages de bonus les plus eleves du marche, cette offre permet de multiplier votre premier depot par plus de quatre. KatsuBet propose egalement des tournois reguliers avec des gains eleves et une bibliotheque de plus de 7.000 jeux.
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
            <span className="block text-xs text-slate-500">Cryptos</span>
            <span className="block mt-1 font-semibold text-corg-600">Oui</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-corg-500/5 p-3 text-center">
          <span className="text-sm text-slate-500">Code bonus: </span>
          <span className="font-bold text-corg-600">KATSU200</span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-gold-400/5 p-3">
          <span className="text-lg">🎁</span>
          <span className="text-sm text-slate-600">Utilisez le code KATSU200 lors de votre depot pour activer le bonus</span>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">Comment reclamer ce bonus</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal ml-5">
          <li>Cliquez sur le bouton pour visiter KatsuBet</li>
          <li>Creez un nouveau compte joueur</li>
          <li>Entrez le code bonus <strong className="text-corg-600">KATSU200</strong> lors de votre depot</li>
          <li>Effectuez un depot minimum de 20 $</li>
          <li>Votre bonus de 325% + 200 tours gratuits sera credite immediatement</li>
        </ol>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">Tournois et promotions KatsuBet</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          En plus du bonus de bienvenue, KatsuBet organise regulierement des tournois passionnants avec des prix attractifs. Les tournois de machines a sous, les competitions de jeux de table et les defis de paris sportifs offrent aux joueurs des opportunites supplementaires de gagner. Le programme de fidelite recompense les joueurs reguliers avec des bonus exclusifs, des cashbacks et des retraits prioritaires.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Les promotions hebdomadaires incluent des cashbacks sur les pertes, des tours gratuits supplementaires et des bonus de recharge. Les joueurs VIP beneficient d'avantages encore plus importants, notamment des limites de retrait plus elevees et des gestionnaires de compte personnels.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-gold-400/20 bg-gold-400/5 p-6">
        <h2 className="text-lg font-bold text-corg-600">Conseils pour maximiser votre bonus</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Utilisez le code KATSU200</strong> – Ne pas entrer le code bonus signifie renoncer a l'offre</li>
          <li><strong>Jouez aux machines a sous</strong> – Elles contribuent a 100% aux conditions de mise de 35x</li>
          <li><strong>Participez aux tournois</strong> – Les tournois reguliers offrent des gains supplementaires</li>
          <li><strong>Verifiez la date d'expiration</strong> – Le bonus est valable 30 jours apres l'activation</li>
          <li><strong>Contactez le support</strong> – L'equipe d'assistance est disponible pour repondre a vos questions</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-4">Questions frequentes</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Quel est le code bonus KatsuBet?</h3>
            <p className="mt-2 text-sm text-slate-500">Le code bonus pour KatsuBet est <strong>KATSU200</strong>. Vous devez entrer ce code lors de votre premier depot pour activer le pack de bienvenue de 325% + 200 tours gratuits.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Quelles sont les conditions de mise?</h3>
            <p className="mt-2 text-sm text-slate-500">Les conditions de mise sont de 35x le montant du bonus. Vous devez miser le bonus 35 fois avant de pouvoir retirer les gains. Les machines a sous contribuent a 100% des conditions de mise.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">KatsuBet propose-t-il des tournois?</h3>
            <p className="mt-2 text-sm text-slate-500">Oui, KatsuBet organise des tournois reguliers avec des cagnottes attractives. Les tournois de machines a sous, les competitions de blackjack et les defis de paris sont accessibles a tous les joueurs inscrits.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-gold-500 to-corg-500 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Pret a reclamer 325% + 200 tours gratuits?</h3>
        <p className="mt-2 text-white/70">Utilisez le code KATSU200 chez KatsuBet des aujourd'hui.</p>
        <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored"
          className="btn-gold mt-4 inline-flex">Obtenir le bonus →</a>
      </div>
    </div>
  );
}
