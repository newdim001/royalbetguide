import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonus 7BitCasino 2026 - 5 BTC + 250 Tours Gratuits",
  description: "Pack de bienvenue 7BitCasino: 5 BTC + 250 tours gratuits | Mise 40x | Pionnier crypto depuis 2014 | 7000+ jeux | Offre exclusive pour joueurs francais.",
  alternates: { canonical: "https://royalbetguide.com/fr/bonus/7bit-casino/" },
  openGraph: {
    title: "Bonus 7BitCasino 2026 - 5 BTC + 250 Tours Gratuits",
    description: "Pack de bienvenue 7BitCasino: 5 BTC + 250 tours gratuits | Mise 40x",
    url: "https://royalbetguide.com/fr/bonus/7bit-casino/",
  },
};

export default function SevenBitCasinoBonusPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://royalbetguide.com/fr/" },
          { "@type": "ListItem", position: 2, name: "Bonus", item: "https://royalbetguide.com/fr/bonus/" },
          { "@type": "ListItem", position: 3, name: "7BitCasino", item: "https://royalbetguide.com/fr/bonus/7bit-casino/" },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Affiliate Disclosure */}
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">→</span>
        <Link href="/fr/bonus/" className="hover:text-corg-500">Bonus</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">7BitCasino</span>
      </div>

      {/* Hero */}
      <div className="rounded-xl bg-gradient-to-br from-gold-500 to-corg-500 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Bonus Crypto</span>
            <h1 className="mt-3 text-3xl font-extrabold text-white">5 BTC + 250 Tours Gratuits</h1>
            <p className="mt-1 text-white/80">chez 7BitCasino – Pack de bienvenue 2026</p>
          </div>
          <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored"
            className="btn-primary whitespace-nowrap bg-white text-corg-600 hover:bg-white/90">Obtenir le bonus →</a>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Apercu du bonus 7BitCasino</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          7BitCasino propose un pack de bienvenue exceptionnel de 5 BTC plus 250 tours gratuits pour les nouveaux joueurs. Ce bonus, reparti sur les premiers depots, est l'un des plus genereux du marche des casinos crypto. Avec plus de 7.000 jeux de plus de 70 fournisseurs, 7BitCasino offre un environnement de jeu complet et securise depuis 2014.
        </p>
      </div>

      {/* Bonus Details */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">Details du bonus</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Type</span>
            <span className="block mt-1 font-semibold text-corg-600">Crypto</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Mise requise</span>
            <span className="block mt-1 font-semibold text-corg-600">40x</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Depot minimum</span>
            <span className="block mt-1 font-semibold text-corg-600">0.0001 BTC</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Validite</span>
            <span className="block mt-1 font-semibold text-corg-600">2026</span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-corg-500/5 p-3 text-center">
          <span className="text-sm text-slate-500">Code bonus: </span>
          <span className="font-bold text-corg-600">Aucun code requis</span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-gold-400/5 p-3">
          <span className="text-lg">₿</span>
          <span className="text-sm text-slate-600">Bonus adapte aux crypto-monnaies – deposez en Bitcoin, Ethereum et plus</span>
        </div>
      </div>

      {/* How to Claim */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">Comment reclamer ce bonus</h2>
        <p className="mt-3 text-sm text-slate-500">Suivez ces etapes simples pour obtenir votre bonus de bienvenue 7BitCasino:</p>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal ml-5">
          <li>Cliquez sur le bouton ci-dessous pour visiter 7BitCasino</li>
          <li>Creez un nouveau compte joueur</li>
          <li>Aucun code bonus requis – le bonus est credite automatiquement</li>
          <li>Effectuez un depot minimum de 0.0001 BTC</li>
          <li>Votre bonus de 5 BTC + 250 tours gratuits sera credite et vous pouvez commencer a jouer</li>
        </ol>
      </div>

      {/* Wagering Explanation */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">Conditions de mise (40x)</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Le bonus 7BitCasino est soumis a une condition de mise de 40x. Cela signifie que vous devez miser le montant du bonus 40 fois avant de pouvoir retirer vos gains. Par exemple, si vous recevez un bonus de 1 BTC, vous devrez miser 40 BTC au total avant de pouvoir effectuer un retrait.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Les machines a sous contribuent generalement a 100% des conditions de mise, tandis que les jeux de table comme le blackjack et la roulette contribuent a un pourcentage moindre. Nous vous recommandons de lire attentivement les conditions generales du bonus avant de commencer a jouer.
        </p>
      </div>

      {/* Tips */}
      <div className="mt-6 rounded-xl border border-gold-400/20 bg-gold-400/5 p-6">
        <h2 className="text-lg font-bold text-corg-600">Conseils pour maximiser votre bonus</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Lisez les conditions completes</strong> – Comprendre les conditions de mise vous aide a planifier votre jeu</li>
          <li><strong>Choisissez les bons jeux</strong> – Les machines a sous contribuent generalement a 100% des conditions de mise</li>
          <li><strong>Verifiez la date d'expiration</strong> – La plupart des bonus expirent dans un delai de 7 a 30 jours</li>
          <li><strong>Fixez un budget</strong> – Ne deposez que ce que vous pouvez vous permettre de perdre</li>
          <li><strong>Contactez le support en cas de doute</strong> – Le service client est disponible 24h/24 et 7j/7</li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-4">Questions frequentes</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Le bonus 7BitCasino est-il disponible pour les joueurs francais?</h3>
            <p className="mt-2 text-sm text-slate-500">Oui, les joueurs francais peuvent reclamer le bonus de bienvenue 7BitCasino. Veuillez verifier les conditions generales du casino pour confirmer votre eligibilite.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Puis-je retirer les tours gratuits?</h3>
            <p className="mt-2 text-sm text-slate-500">Les tours gratuits sont credits sur des machines a sous selectionnees. Les gains issus des tours gratuits sont soumis aux conditions de mise de 40x avant de pouvoir etre retires.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Quelles crypto-monnaies sont acceptees?</h3>
            <p className="mt-2 text-sm text-slate-500">7BitCasino accepte Bitcoin, Ethereum, Litecoin, Dogecoin, USDT et plusieurs autres crypto-monnaies majeures pour les depots et les retraits.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-gold-500 to-corg-500 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Pret a reclamer 5 BTC + 250 tours gratuits?</h3>
        <p className="mt-2 text-white/70">Obtenez votre bonus de bienvenue exclusif chez 7BitCasino des aujourd'hui.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored"
          className="btn-gold mt-4 inline-flex">Obtenir le bonus →</a>
      </div>
    </div>
  );
}
