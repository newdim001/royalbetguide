import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roulette en Ligne 2026 - Variantes et Strategies",
  description: "Guide complet de la roulette en ligne 2026: roulette europeenne, americaine et francaise. Strategies, mises, conseils et astuces. Par Pierre Dubois.",
  alternates: { canonical: "https://royalbetguide.com/fr/guides/roulette/" },
  openGraph: {
    title: "Roulette en Ligne 2026 - Variantes et Strategies",
    description: "Guide complet de la roulette: variantes europeenne, americaine, francaise et strategies de jeu.",
    url: "https://royalbetguide.com/fr/guides/roulette/",
  },
};

export default function RouletteGuidePage() {
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
        <span className="text-slate-800 font-semibold">Roulette</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">{"\U0001F3B0"} Guide</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Roulette en Ligne 2026</h1>
        <p className="mt-2 text-slate-500">Variantes, strategies et conseils pour la roulette</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Introduction a la roulette</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          La roulette est un jeu de casino emblematique qui attire les joueurs depuis des siecles. Le principe est simple: une bille est lancee dans une roue en rotation et les joueurs parient sur le numero ou la couleur ou la bille va s'arreter. La roulette se decline en trois variantes principales: europeenne, americaine et francaise, chacune avec ses propres caracteristiques et avantages.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Roulette europeenne</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          La roulette europeenne est la variante la plus repandue et la plus recommandee pour les joueurs. Elle comporte 37 cases numerotees de 0 a 36, dont 18 rouges, 18 noires et un zero vert. L'avantage de la maison est de seulement 2.70%, ce qui en fait la variante la plus favorable aux joueurs.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Les mises possibles incluent les paris sur un seul numero (plein), deux numeros (cheval), trois numeros (transversale), quatre numeros (carre), six numeros (sixain), ainsi que les paris sur les chances simples (rouge/noir, pair/impair, passe/manque). Chaque type de mise offre des gains differents, allant de 35:1 pour un numero plein a 1:1 pour les chances simples.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Roulette americaine</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          La roulette americaine se distingue par la presence d'un double zero (00) supplementaire, portant le nombre total de cases a 38. Cette difference augmente considerablement l'avantage de la maison a 5.26%, soit presque le double de la roulette europeenne. Pour cette raison, nous recommandons aux joueurs d'eviter la roulette americaine lorsque la roulette europeenne est disponible.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Les regles et les types de mises sont identiques a la roulette europeenne, mais les chances de gagner sont inferieures en raison du double zero. Si vous jouez dans un casino qui propose uniquement la roulette americaine, limitez vos mises et considerez ce jeu comme un divertissement plutot qu'une strategie de gain.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Roulette francaise</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          La roulette francaise est tres similaire a la roulette europeenne avec 37 numeros, mais elle offre des regles speciales qui reduisent encore l'avantage de la maison. Les regles "La Partage" et "En Prison" s'appliquent lorsque la bille s'arrete sur le zero:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>La Partage:</strong> Si vous avez mise sur une chance simple (rouge/noir, pair/impair, passe/manque) et que le zero sort, vous recuperez la moitie de votre mise.</li>
          <li><strong>En Prison:</strong> Si le zero sort, votre mise reste en prison pour le prochain tour. Si vous gagnez au tour suivant, vous recuperez votre mise sans gain.</li>
        </ul>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Grace a ces regles, l'avantage de la maison dans la roulette francaise tombe a seulement 1.35% pour les chances simples, ce qui en fait la variante la plus avantageuse pour les joueurs.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Strategies de roulette</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          De nombreuses strategies de roulette ont ete developpees au fil des ans. Voici les plus connues:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Martingale:</strong> Doublez votre mise apres chaque perte. En theorie, une victoire recupere toutes les pertes precedentes plus un gain. Risque: besoin d'un budget important et limites de mise au casino.</li>
          <li><strong>Paroli:</strong> Doublez votre mise apres chaque gain. Cette strategie mise sur les sequences de chance et limite les pertes.</li>
          <li><strong>Labouchere:</strong> Creez une sequence de numeros representant le gain souhaite. Misez la somme du premier et du dernier numero. Risque: peut devenir complexe en cas de longue serie de pertes.</li>
          <li><strong>D'Alembert:</strong> Augmentez la mise d'une unite apres une perte et diminuez-la d'une unite apres un gain. Approche plus prudente que la Martingale.</li>
        </ul>
        <div className="mt-3 rounded-lg bg-gold-400/5 p-3">
          <p className="text-xs text-slate-500">Important: Aucune strategie ne peut garantir des gains a la roulette. Chaque tour est independant et la maison conserve toujours son avantage. Jouez de maniere responsable.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Tableau comparatif des variantes</h2>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2 pr-4 font-semibold text-slate-600">Variante</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Numeros</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Avantage maison</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Recommandation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4 font-medium text-slate-700">Europeenne</td>
                <td className="py-3 px-4 text-slate-600">37</td>
                <td className="py-3 px-4 text-corg-600 font-semibold">2.70%</td>
                <td className="py-3 px-4 text-green-700">Excellent</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4 font-medium text-slate-700">Americaine</td>
                <td className="py-3 px-4 text-slate-600">38</td>
                <td className="py-3 px-4 text-red-600 font-semibold">5.26%</td>
                <td className="py-3 px-4 text-red-600">A eviter</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4 font-medium text-slate-700">Francaise</td>
                <td className="py-3 px-4 text-slate-600">37</td>
                <td className="py-3 px-4 text-corg-600 font-semibold">1.35%</td>
                <td className="py-3 px-4 text-green-700">Meilleur choix</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pret a jouer a la roulette?</h2>
        <p className="mt-2 text-white/70">Trouvez les meilleurs casinos pour jouer a la roulette en ligne.</p>
        <Link href="/fr/reviews/" className="btn-gold mt-4 inline-flex">Voir les casinos {"→"}</Link>
      </div>
    </div>
  );
}
