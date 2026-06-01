import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides Casino 2026 - Tout Savoir sur les Jeux",
  description: "Guides casino complets: blackjack, roulette, machines a sous. Regles, strategies et conseils d'experts pour les joueurs francais. Par Pierre Dubois.",
  alternates: { canonical: "https://royalbetguide.com/fr/guides/" },
  openGraph: {
    title: "Guides Casino 2026 - Tout Savoir sur les Jeux",
    description: "Guides casino: blackjack, roulette, machines a sous. Strategies et regles pour gagner.",
    url: "https://royalbetguide.com/fr/guides/",
  },
};

const GUIDES = [
  { title: "Blackjack", href: "/fr/guides/blackjack/", icon: "\U0001F0CF", desc: "Regles, strategie de base et comptage de cartes pour maitriser le blackjack." },
  { title: "Roulette", href: "/fr/guides/roulette/", icon: "\U0001F3B0", desc: "Variantes europeenne, americaine et francaise de la roulette avec strategies." },
  { title: "Machines a Sous", href: "/fr/games/slots/", icon: "\U0001F3B0", desc: "Top 10 des meilleures machines a sous avec RTP, volatilite et fournisseurs." },
  { title: "Poker", href: "/fr/guides/poker/", icon: "\u2660\uFE0F", desc: "Regles du poker, classement des mains et strategies pour Texas Holdem." },
  { title: "Baccara", href: "/fr/guides/baccarat/", icon: "\U0001F0CF", desc: "Regles simples du baccara, l'un des jeux avec le plus faible avantage maison." },
  { title: "Casino en Direct", href: "/fr/guides/live-dealer/", icon: "\U0001F4FA", desc: "Jeux avec croupiers en direct Evolution Gaming pour une experience authentique." },
];

export default function FrGuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Nous pouvons percevoir une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/fr/" className="hover:text-corg-500">Accueil</Link>
        <span className="mx-2">{"→"}</span>
        <span className="text-slate-800 font-semibold">Guides</span>
      </div>

      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">{"\U0001F4DA"} Ressources</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Guides Casino 2026</h1>
        <p className="mt-2 text-slate-500">Tout savoir sur les jeux de casino: regles, strategies et conseils d'experts</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {GUIDES.map((g) => (
          <Link key={g.href} href={g.href} className="card-light group">
            <div className="text-3xl mb-3"><span className="text-3xl">g.icon</span></div>
            <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{g.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{g.desc}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-corg-500">Lire le guide {"→"}</span>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-bold text-corg-600">Pourquoi utiliser nos guides?</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Nos guides sont crees par des joueurs experimentes et des experts de l'industrie. Chaque guide est minutieusement recherche, regulierement mis a jour et concu pour vous aider a prendre des decisions eclairees. Que vous soyez debutant apprenant les regles du blackjack ou joueur experimente perfectionnant votre strategie de roulette, nos guides vous fournissent les informations necessaires pour jouer de maniere plus intelligente.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Tous nos guides sont gratuits et sans publicite excessive. Nous privilogions des conseils pratiques et exploitables, bases sur une experience reelle des jeux de casino.
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Pret a jouer?</h2>
        <p className="mt-2 text-white/70">Consultez nos casinos recommandes et reclamez des bonus exclusifs.</p>
        <Link href="/fr/reviews/" className="btn-gold mt-4 inline-flex">Decouvrir les casinos {"→"}</Link>
      </div>
    </div>
  );
}
