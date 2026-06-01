import Link from "next/link"
import CasinoLogo from "../components/CasinoLogo";

export const metadata = {
  title:
    "Royal Bet Guide France - Avis Casinos en Ligne 2026",
  description:
    "Tests de casinos, bonus exclusifs et strategies de gain par des experts pour les joueurs francais. Trouvez le meilleur casino en ligne et commencez.",
  alternates: {
    canonical: "https://royalbetguide.com/fr",
  },
};

const FEATURED_CASINOS = [
  { name: "7BitCasino", bonus: "5 BTC + 250 Tours Gratuits", rating: 9.6, slug: "7bit-casino", imgSlug: "7bitcasino" },
  { name: "KatsuBet", bonus: "325% + 200 Tours Gratuits", rating: 9.4, slug: "katsubet", imgSlug: "katsubet" },
  { name: "MiraxCasino", bonus: "500 $ + 200 Tours Gratuits", rating: 9.2, slug: "mirax-casino", imgSlug: "miraxcasino" },
];

const GAME_CATEGORIES = [
  { label: "Machines à sous", slug: "slots" },
  { label: "Blackjack", slug: "blackjack" },
  { label: "Roulette", slug: "roulette" },
];

const STEPS = [
  { num: "01", title: "Trouver un casino", desc: "Comparez nos gagnants de test et choisissez le casino qui vous convient" },
  { num: "02", title: "Obtenir le bonus", desc: "Reclamez des offres de bienvenue exclusives et des tours gratuits" },
  { num: "03", title: "Jouer et gagner", desc: "Deposez et commencez a jouer dans les meilleurs casinos certifies" },
];

export default function FrHomePage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
          Nous recevons une commission si vous vous inscrivez via nos liens. Jouez de maniere responsable. 18+
        </div>
      </div>

      <section className="relative overflow-hidden px-4 py-20 text-center sm:py-28 bg-corg-500">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-corg-500 via-corg-600/80 to-corg-700/60" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center justify-center">
            <img src="/logo.svg" alt="Royal Bet Guide" className="h-20 w-20 rounded-2xl object-contain sm:h-24 sm:w-24" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Avis Casinos <span className="text-gold-400">en Ligne &amp; Guide</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Casinos certifies, <span className="font-semibold text-gold-400">bonus exclusifs</span>, et vraies strategies de gain pour les joueurs francais.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400/20 text-xs text-gold-400">✓</span>
            Recommande par plus de 500 joueurs depuis 2026
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/fr/reviews/" className="btn-gold">Decouvrir les casinos →</Link>
            <Link href="/fr/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">Obtenir le bonus →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">★ Top-Rated 2026</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Meilleurs Casinos en Ligne</h2>
          <p className="mt-2 text-slate-500">Tests et recommandations par nos experts</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_CASINOS.map((c) => (
            <Link key={c.slug} href={`/fr/reviews/${c.slug}/`} className="card-gradient-border group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <CasinoLogo slug={c.imgSlug} name={c.name} size={48} />
                  <div>
                    <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{c.name}</h3>
                    <p className="text-sm text-gold-500 font-semibold">{c.bonus}</p>
                  </div>
                </div>
                <div className="rating-badge"><span>★</span><span>{c.rating}</span></div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="text-xs text-slate-500">Test d'experts</span>
                <span className="text-sm font-semibold text-corg-500">Lire l'avis →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/fr/reviews/" className="btn-outline inline-flex">Voir tous les 51 avis de casinos →</Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Guides de <span className="text-corg-500">Jeux</span></h2>
          <p className="mt-2 text-slate-500">Maitrisez chaque jeu avec nos guides d'experts</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {GAME_CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/fr/guides/${cat.slug}/`}
              className="group relative overflow-hidden rounded-full border border-corg-500/30 bg-white px-5 py-3 text-sm font-medium text-corg-500 transition-all hover:bg-corg-500 hover:text-white hover:border-corg-500">{cat.label}</Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Comment ca <span className="text-corg-500">marche</span></h2>
          <p className="mt-2 text-slate-500">En trois etapes simples vers le gain</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto flex items-center justify-center"><div className="step-circle">{s.num}</div></div>
              <h3 className="mt-4 text-lg font-bold text-corg-600">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="relative overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-corg-500 via-corg-600/30 to-corg-700/10" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Pret a <span className="text-gold-400">jouer</span> ?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">Rejoignez des milliers de gagnants. Obtenez des bonus exclusifs et des conseils de pros.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/fr/reviews/" className="btn-gold">Trouver votre casino →</Link>
            <Link href="/fr/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">Obtenir un bonus gratuit →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">Sponsorise</span>
          <h2 className="mt-4 text-2xl font-extrabold text-white">\uD83D\uDD25 Les meilleurs casinos crypto pour les joueurs francais</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">Nous travaillons exclusivement avec 7BitPartners pour vous offrir les meilleurs packs de bienvenue dans trois casinos crypto de premier plan.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">7BitCasino</h3>
              <p className="mt-1 text-xs text-white/60">Depuis 2014 • 7.000+ jeux</p>
              <p className="mt-2 text-lg font-bold text-gold-400">5 BTC + 250 FS</p>
              <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Obtenir le bonus →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">KatsuBet</h3>
              <p className="mt-1 text-xs text-white/60">Depuis 2020 • 7.000+ jeux</p>
              <p className="mt-2 text-lg font-bold text-gold-400">325% + 200 FS</p>
              <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Obtenir le bonus →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">MiraxCasino</h3>
              <p className="mt-1 text-xs text-white/60">Depuis 2021 • 5.000+ jeux</p>
              <p className="mt-2 text-lg font-bold text-gold-400">500 $ + 200 FS</p>
              <a href="https://mirax.partners/pyklyuxbk" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Obtenir le bonus →</a>
            </div>
          </div>
          <Link href="/fr/compare/7bit-katsubet-mirax/" className="mt-4 inline-block text-sm text-white/60 underline hover:text-white">Comparer les trois →</Link>
        </div>
      </section>
    </div>
  );
}
