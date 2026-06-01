import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blackjack en Ligne 2026 - Regles et Strategies",
  description: "Guide complet du blackjack en ligne 2026: regles, strategie de base, comptage de cartes, variantes et astuces pour gagner. Par Pierre Dubois.",
  alternates: { canonical: "https://royalbetguide.com/fr/guides/blackjack/" },
  openGraph: {
    title: "Blackjack en Ligne 2026 - Regles et Strategies",
    description: "Guide complet du blackjack: regles, strategie de base et comptage de cartes.",
    url: "https://royalbetguide.com/fr/guides/blackjack/",
  },
};

export default function BlackjackGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">{"→"}</span>
        <Link href="/fr/guides/" className="hover:text-corg-500">Guides</Link>
        <span className="mx-2">{"→"}</span>
        <span className="text-slate-800 font-semibold">Blackjack</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">{"\uD83C\uDCCF"} Guide</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Blackjack en Ligne 2026</h1>
        <p className="mt-2 text-slate-500">Regles, strategies et astuces pour maitriser le blackjack</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Regles du blackjack</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Le blackjack est l'un des jeux de casino les plus populaires. Le but est simple: battre le croupier en obtenant une main dont la valeur est superieure a celle du croupier sans depasser 21 points. Chaque carte numerote vaut sa valeur faciale, les figures (Valet, Dame, Roi) valent 10 points, et l'As peut valoir 1 ou 11 points au choix du joueur.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Une partie commence par la distribution de deux cartes au joueur et deux cartes au croupier (une face visible, une face cachee). Le joueur peut alors demander une carte supplementaire ("tirer") ou s'arreter ("rester"). Si le joueur depasse 21, il perd automatiquement. Apres que le joueur s'est arrete, le croupier revele sa carte cachee et doit tirer jusqu'a atteindre au moins 17 points.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Strategie de base</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          La strategie de base du blackjack est un ensemble de regles mathematiquement optimales qui reduisent l'avantage de la maison a moins de 0.5%. Voici les principes fondamentaux:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Tirez</strong> quand votre main vaut entre 5 et 8, quelle que soit la carte du croupier</li>
          <li><strong>Doublez</strong> quand votre main vaut 11 et que le croupier montre une carte faible (2 a 6)</li>
          <li><strong>Separez</strong> toujours les As et les 8</li>
          <li><strong>Ne separez jamais</strong> les 10, les figures ou les 5</li>
          <li><strong>Restez</strong> sur 17 ou plus, sauf si vous avez un As (17 "mou")</li>
          <li><strong>Tirez</strong> sur 12 a 16 si le croupier montre un 7 ou plus</li>
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Comptage de cartes</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Le comptage de cartes est une technique avancee qui permet de suivre le rapport entre les cartes hautes (10, figures, As) et les cartes basses (2 a 6) restant dans le sabot. La methode la plus populaire est le comptage Hi-Lo, qui attribue les valeurs suivantes:
        </p>
        <ul className="mt-3 space-y-1 text-sm text-slate-700 ml-5 list-disc">
          <li>Cartes 2 a 6: +1</li>
          <li>Cartes 7 a 9: 0</li>
          <li>Cartes 10, figures, As: -1</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Un compte eleve indique qu'il reste beaucoup de cartes hautes, ce qui est favorable au joueur. Cependant, le comptage de cartes est difficile a maitriser et les casinos surveillent attentivement les comportements suspects. Notez que le comptage de cartes n'est pas illegal, mais les casinos peuvent refuser le service aux compteurs.
        </p>
        <div className="mt-3 rounded-lg bg-gold-400/5 p-3">
          <p className="text-xs text-slate-500">Note: Le comptage de cartes est inefficace au blackjack en ligne car les jeux utilisent des melangeurs automatiques et des generateurs de nombres aleatoires.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Variantes du blackjack</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Plusieurs variantes du blackjack sont disponibles dans les casinos en ligne:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Blackjack europeen:</strong> Le croupier ne recoit qu'une carte au debut, la seconde est distribuee apres que les joueurs ont joue</li>
          <li><strong>Blackjack americain:</strong> Le croupier recoit deux cartes, l'une face visible, l'autre face cachee</li>
          <li><strong>Blackjack avec surrender:</strong> Le joueur peut abandonner la main et recuperer la moitie de sa mise</li>
          <li><strong>Blackjack a plusieurs mains:</strong> Le joueur peut jouer jusqu'a 5 mains simultanement</li>
          <li><strong>Blackjack en direct (Live Dealer):</strong> Jeu avec un vrai croupier diffuse en streaming depuis un studio</li>
        </ul>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pret a jouer au blackjack?</h2>
        <p className="mt-2 text-white/70">Trouvez les meilleurs casinos pour jouer au blackjack en ligne.</p>
        <Link href="/fr/reviews/" className="btn-gold mt-4 inline-flex">Voir les casinos {"→"}</Link>
      </div>
    </div>
  );
}
