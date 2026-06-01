import Link from "next/link"
import CasinoLogo from "../components/CasinoLogo";

export const metadata = {
  title: "Royal Bet Guide Italia \u2013 Recensioni Casino Online 2026",
  description: "Recensioni reali di casino online, bonus esclusivi e strategie vincenti dagli esperti italiani. Trova il miglior casino online e inizia a vincere.",
  alternates: { canonical: "https://royalbetguide.com/it" },
};

const FEATURED_CASINOS = [
  { name: "7BitCasino", bonus: "5 BTC + 250 Giri Gratis", rating: 9.4, slug: "7bit-casino", imgSlug: "7bitcasino" },
  { name: "KatsuBet", bonus: "325% + 200 Giri Gratis", rating: 8.3, slug: "katsubet", imgSlug: "katsubet" },
  { name: "MiraxCasino", bonus: "500$ + 200 Giri Gratis", rating: 8.2, slug: "mirax-casino", imgSlug: "miraxcasino" },
];

const GAME_CATEGORIES = [
  { label: "Slot", slug: "slots" },
  { label: "Blackjack", slug: "blackjack" },
  { label: "Roulette", slug: "roulette" },
];

const STEPS = [
  { num: "01", title: "Trova un casino", desc: "Confronta i nostri vincitori e scegli il casino pi\u00f9 adatto a te" },
  { num: "02", title: "Ottieni il bonus", desc: "Richiedi offerte di benvenuto esclusive e giri gratuiti" },
  { num: "03", title: "Gioca e vinci", desc: "Deposita e inizia a giocare nei migliori casino verificati" },
];

export default function ItHomePage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
          Potremmo ricevere una commissione se ti registri tramite i nostri link. Gioca responsabilmente. 18+
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
            Recensioni Casino <span className="text-gold-400">Online e Guide</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Casino verificati, <span className="font-semibold text-gold-400">bonus esclusivi</span> e strategie vincenti per giocatori italiani.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400/20 text-xs text-gold-400">✓</span>
            Consigliato da oltre 500 giocatori dal 2026
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/it/reviews/" className="btn-gold">Scopri i Casino →</Link>
            <Link href="/it/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">Ottieni il Bonus →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">★ I Migliori 2026</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Migliori Casino Online</h2>
          <p className="mt-2 text-slate-500">Verificati e raccomandati dai nostri esperti</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_CASINOS.map((c) => (
            <Link key={c.slug} href={`/it/reviews/${c.slug}/`} className="card-gradient-border group">
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
                <span className="text-xs text-slate-500">Test degli esperti</span>
                <span className="text-sm font-semibold text-corg-500">Leggi la recensione →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/it/reviews/" className="btn-outline inline-flex">Vedi tutte le 51 recensioni →</Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Guide ai <span className="text-corg-500">Giochi</span></h2>
          <p className="mt-2 text-slate-500">Impara a giocare con le nostre guide esperte</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {GAME_CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={"/it/guides/" + cat.slug + "/"}
              className="group relative overflow-hidden rounded-full border border-corg-500/30 bg-white px-5 py-3 text-sm font-medium text-corg-500 transition-all hover:bg-corg-500 hover:text-white hover:border-corg-500">{cat.label}</Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6"><hr className="border-slate-200" /></div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">Come <span className="text-corg-500">funziona</span></h2>
          <p className="mt-2 text-slate-500">In tre semplici passi verso la vittoria</p>
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
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Pronto a <span className="text-gold-400">giocare</span>?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">Unisciti a migliaia di vincitori. Ottieni bonus esclusivi e consigli da professionisti.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/it/reviews/" className="btn-gold">Trova il tuo casino →</Link>
            <Link href="/it/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">Ottieni un bonus gratuito →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">Sponsorizzato</span>
          <h2 className="mt-4 text-2xl font-extrabold text-white">🔥 I migliori Crypto Casino per giocatori italiani</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">Collaboriamo esclusivamente con 7BitPartners per offrirti i migliori pacchetti di benvenuto presso tre top crypto casino.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">7BitCasino</h3>
              <p className="mt-1 text-xs text-white/60">Dal 2014 • 7.000+ Giochi</p>
              <p className="mt-2 text-lg font-bold text-gold-400">5 BTC + 250 FS</p>
              <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Richiedi il Bonus →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">KatsuBet</h3>
              <p className="mt-1 text-xs text-white/60">Dal 2020 • 7.000+ Giochi</p>
              <p className="mt-2 text-lg font-bold text-gold-400">325% + 200 FS</p>
              <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Richiedi il Bonus →</a>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-white">
              <h3 className="font-bold">MiraxCasino</h3>
              <p className="mt-1 text-xs text-white/60">Dal 2021 • 5.000+ Giochi</p>
              <p className="mt-2 text-lg font-bold text-gold-400">500$ + 200 FS</p>
              <a href="https://mirax.partners/pyklyuxbk" target="_blank" rel="nofollow sponsored" className="btn-gold mt-3 inline-flex text-sm">Richiedi il Bonus →</a>
            </div>
          </div>
          <Link href="/it/compare/7bit-katsubet-mirax/" className="mt-4 inline-block text-sm text-white/60 underline hover:text-white">Confronta tutti e tre →</Link>
        </div>
      </section>
    </div>
  );
}
