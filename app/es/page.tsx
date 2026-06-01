import Link from "next/link"
import CasinoLogo from "../components/CasinoLogo";

export const metadata = {
  title: "Royal Bet Guide España - Reseñas de Casinos Online 2026",
  description: "Reseñas reales de casinos online, bonos exclusivos y estrategias ganadoras de expertos españoles.",
  alternates: { canonical: "https://royalbetguide.com/es" },
};

const FEATURED_CASINOS = [
  { name: "7BitCasino", bonus: "5 BTC + 250 Giros Gratis", rating: 9.4, slug: "7bit-casino", imgSlug: "7bitcasino" },
  { name: "KatsuBet", bonus: "325% + 200 Giros Gratis", rating: 8.3, slug: "katsubet", imgSlug: "katsubet" },
  { name: "MiraxCasino", bonus: "$500 + 200 Giros Gratis", rating: 8.2, slug: "mirax-casino", imgSlug: "miraxcasino" },
];

const GAME_CATEGORIES = [
  { label: "Tragamonedas", slug: "slots" },
  { label: "Blackjack", slug: "blackjack" },
  { label: "Ruleta", slug: "roulette" },
];

const STEPS = [
  { num: "01", title: "Encuentra un casino", desc: "Compara nuestros ganadores y elige el casino ideal para ti" },
  { num: "02", title: "Consigue el bono", desc: "Solicita ofertas de bienvenida exclusivas y giros gratis" },
  { num: "03", title: "Juega y gana", desc: "Deposita y empieza a jugar en los mejores casinos verificados" },
];

export default function EsHomePage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
          Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+
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
            Reseñas de Casino <span className="text-gold-400">Online y Guías</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Casinos verificados, <span className="font-semibold text-gold-400">bonos exclusivos</span> y estrategias ganadoras para jugadores españoles.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400/20 text-xs text-gold-400">✓</span>
            Recomendado por más de 500 jugadores desde 2026
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/es/reviews/" className="btn-gold">Descubre los Casinos →</Link>
            <Link href="/es/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">Consigue el Bono →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">★ Los Mejores 2026</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Mejores Casinos Online</h2>
          <p className="mt-2 text-slate-500">Verificados y recomendados por nuestros expertos</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_CASINOS.map((c) => (
            <Link key={c.slug} href={"/es/reviews/" + c.slug + "/"} className="card-gradient-border group">
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
                <span className="text-xs text-slate-500">Prueba de expertos</span>
                <span className="text-sm font-semibold text-corg-500">Lee la reseña →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/es/reviews/" className="btn-outline inline-flex">Ver todas las 51 reseñas →</Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Guías de <span className="text-corg-500">Juegos</span></h2>
          <p className="mt-2 text-slate-500">Aprende a jugar con nuestras guías de expertos</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {GAME_CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={"/es/guides/" + cat.slug + "/"}
              className="group relative overflow-hidden rounded-full border border-corg-500/30 bg-white px-5 py-3 text-sm font-medium text-corg-500 transition-all hover:bg-corg-500 hover:text-white hover:border-corg-500">{cat.label}</Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Cómo <span className="text-corg-500">funciona</span></h2>
          <p className="mt-2 text-slate-500">En tres sencillos pasos hacia la victoria</p>
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
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">¿Listo para <span className="text-gold-400">jugar</span>?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">Únete a miles de ganadores. Consigue bonos exclusivos y consejos de profesionales.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/es/reviews/" className="btn-gold">Encuentra tu casino →</Link>
            <Link href="/es/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">Consigue un bono gratuito →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">Patrocinado</span>
          <h2 className="mt-4 text-2xl font-extrabold text-white">🔥 Los mejores Crypto Casino para jugadores españoles</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">Colaboramos exclusivamente con 7BitPartners para ofrecerte los mejores paquetes de bienvenida de tres top crypto casinos.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">7BitCasino</h3>
              <p className="mt-1 text-xs text-white/60">Desde 2014 • 7.000+ Juegos</p>
              <p className="mt-2 text-lg font-bold text-gold-400">5 BTC + 250 FS</p>
              <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Solicita el Bono →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">KatsuBet</h3>
              <p className="mt-1 text-xs text-white/60">Desde 2020 • 7.000+ Juegos</p>
              <p className="mt-2 text-lg font-bold text-gold-400">325% + 200 FS</p>
              <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Solicita el Bono →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">MiraxCasino</h3>
              <p className="mt-1 text-xs text-white/60">Desde 2021 • 5.000+ Juegos</p>
              <p className="mt-2 text-lg font-bold text-gold-400">$500 + 200 FS</p>
              <a href="https://mirax.partners/pyklyuxbk" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Solicita el Bono →</a>
            </div>
          </div>
          <Link href="/es/compare/7bit-katsubet-mirax/" className="mt-4 inline-block text-sm text-white/60 underline hover:text-white">Compara los tres →</Link>
        </div>
      </section>
    </div>
  );
}
