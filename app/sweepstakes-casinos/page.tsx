import Link from "next/link";
import CasinoLogo from "../components/CasinoLogo";

export const metadata = {
  title: "Best Sweepstakes Casinos 2026 | Play for Free, Win Real Prizes",
  description:
    "Discover the best sweepstakes casinos for 2026. Play social casino games for free using virtual coins, redeem real cash prizes. Top-rated sweeps brands reviewed.",
  alternates: {
    canonical: "https://royalbetguide.com/sweepstakes-casinos/",
  },
};

const SWEEPSTAKES_CASINOS = [
  { name: "Chumba Casino", rating: 9.6, bonus: "2,000,000 Gold Coins + 2 Sweeps Coins FREE", slug: "chumba-casino", imgSlug: "chumba-casino", games: "200+", payout: "96.8%" },
  { name: "Luckland Slots", rating: 9.4, bonus: "5,000 Lucky Coins + 500 Sweeps Coins", slug: "luckland-slots", imgSlug: "luckland-slots", games: "250+", payout: "97.1%" },
  { name: "Funzpoints", rating: 9.2, bonus: "FREE 500 Funzpoints on Sign Up", slug: "funzpoints", imgSlug: "funzpoints", games: "150+", payout: "96.5%" },
  { name: "Global Poker", rating: 9.3, bonus: "$5 Free Sweeps Coins No Purchase Needed", slug: "global-poker", imgSlug: "global-poker", games: "Poker + 100+", payout: "97.0%" },
  { name: "Stake.us", rating: 9.5, bonus: "1,000,000 GC + $25 Stake Cash", slug: "stake-us", imgSlug: "stake-us", games: "300+", payout: "97.8%" },
  { name: "Pulsz Casino", rating: 9.1, bonus: "10,000 Gold Coins + 5 Sweeps Coins", slug: "pulsz-casino", imgSlug: "pulsz", games: "700+", payout: "96.6%" },
  { name: "Wow Vegas", rating: 9.0, bonus: "5,000 WOW Coins + 585 Sweeps Coins", slug: "wow-vegas", imgSlug: "wow-vegas", games: "600+", payout: "96.4%" },
  { name: "McLuck", rating: 8.9, bonus: "7,500 Gold Coins + 250 Sweeps Coins", slug: "mcluck", imgSlug: "mcluck", games: "400+", payout: "96.2%" },
];

const FAQS = [
  {
    q: "What are sweepstakes casinos?",
    a: "Sweepstakes casinos are social gaming platforms that use a dual-currency system: Gold Coins (GC) for fun play and Sweeps Coins (SC) that can be redeemed for real cash prizes. They operate under sweepstakes laws, making them legal in most US states where traditional online casinos are not available."
  },
  {
    q: "Are sweepstakes casinos legal?",
    a: "Yes, sweepstakes casinos are legal in the United States under sweepstakes laws. They do not require real-money gambling and operate on a 'free-to-play' model where players can earn and redeem Sweeps Coins for cash prizes without making a purchase."
  },
  {
    q: "How do I redeem Sweeps Coins for cash?",
    a: "Once you accumulate a minimum number of Sweeps Coins (usually 50-100 SC), you can redeem them for real cash prizes. Redemption methods typically include bank transfers, gift cards, and PayPal. Processing times range from 3-14 business days depending on the platform."
  },
  {
    q: "Do I need to make a purchase to play?",
    a: "No, purchases are never required. Sweepstakes casinos offer free ways to earn Sweeps Coins, including welcome bonuses, daily login rewards, social media giveaways, and mail-in offers. You can play and win real prizes completely for free."
  },
  {
    q: "What's the difference between Gold Coins and Sweeps Coins?",
    a: "Gold Coins are virtual currency used for entertainment purposes only — they have no real-world value. Sweeps Coins are the redeemable currency that can be exchanged for real cash prizes. You use both to play the same games, but only Sweeps Coins winnings are redeemable."
  },
];

export default function SweepstakesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden px-4 py-20 text-center sm:py-28 bg-corg-500">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-corg-500 via-corg-600/80 to-corg-700/60" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Best <span className="text-gold-400">Sweepstakes Casinos</span> 2026
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Play social casino games for free, earn Sweeps Coins, and redeem them for
            real cash prizes — no purchase necessary. Our experts review the top
            sweepstakes platforms so you can play with confidence.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400/20 text-xs text-gold-400">✓</span>
            Legal in 49 US states &bull; No purchase required &bull; Free to play
          </div>
        </div>
      </section>

      {/* ═══ SWEEPSTAKES CASINO GRID ═══ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
            ★ Top Rated Sweepstakes Casinos 2026
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">
            Best Sweepstakes Casinos
          </h2>
          <p className="mt-2 text-slate-500">Expert-reviewed platforms where you can win real prizes for free</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SWEEPSTAKES_CASINOS.map((c) => (
            <Link key={c.slug} href={`/sweepstakes-casinos/${c.slug}/`} className="card-gradient-border group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <CasinoLogo slug={c.imgSlug || c.slug} name={c.name} size={48} />
                  <div>
                    <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-gold-500 font-semibold">{c.bonus}</p>
                  </div>
                </div>
                <div className="rating-badge">
                  <span>★</span>
                  <span>{c.rating}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="text-xs text-slate-500">{c.games} Games</span>
                <span className="text-sm font-semibold text-corg-500">
                  Read Review →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ HOW SWEEPSTAKES WORK ═══ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl">
            How <span className="text-corg-500">Sweepstakes Casinos</span> Work
          </h2>
          <p className="mt-2 text-slate-500">The simple guide to playing for free and winning real prizes</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center">
              <div className="step-circle">01</div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-corg-600">Sign Up for Free</h3>
            <p className="mt-1 text-sm text-slate-500">
              Create a free account and claim your welcome bonus — thousands of Gold Coins and free Sweeps Coins with no purchase required.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center">
              <div className="step-circle">02</div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-corg-600">Play Social Games</h3>
            <p className="mt-1 text-sm text-slate-500">
              Use your coins to play slots, blackjack, poker, and more. Win additional Sweeps Coins through gameplay and daily bonuses.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center">
              <div className="step-circle">03</div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-corg-600">Redeem Real Prizes</h3>
            <p className="mt-1 text-sm text-slate-500">
              Once you meet the minimum, redeem your Sweeps Coins for real cash, gift cards, or prizes sent straight to your bank account.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ DETAILED EXPLANATION ═══ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl text-center mb-8">
          What Are <span className="text-corg-500">Sweepstakes Casinos</span>?
        </h2>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Sweepstakes casinos are a unique hybrid between social gaming and real-money online casinos. They operate
            under sweepstakes law rather than traditional gambling regulations, which makes them accessible to players
            in most US states where standard online casinos are restricted. The key difference is that you never have to
            wager real money — instead, you play with two types of virtual currency.
          </p>
          <p>
            <strong>Gold Coins (GC)</strong> are your play-for-fun currency. They have no cash value and are used
            exclusively for entertainment. <strong>Sweeps Coins (SC)</strong> are the redeemable currency — you can
            exchange them for real cash prizes, gift cards, and other rewards once you meet the minimum redemption
            threshold. You can earn Sweeps Coins through welcome bonuses, daily logins, social media promotions, and
            mail-in sweepstakes offers.
          </p>
          <p>
            The best sweepstakes casinos offer hundreds of slot titles, table games like blackjack and roulette, video
            poker, and even live dealer experiences — all using the same dual-currency system. Major game providers
            including Pragmatic Play, Hacksaw Gaming, and NetEnt supply these platforms with high-quality titles that
            match the experience of traditional online casinos.
          </p>
          <p>
            Because sweepstakes casinos operate under a legal framework that classifies them as promotions rather than
            gambling, they are not subject to the same state-by-state restrictions as real-money online casinos. This
            allows players in states like Texas, Florida, Ohio, and New York to legally play and win real prizes from the
            comfort of their homes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <hr className="border-slate-200" />
      </div>

      {/* ═══ FAQ ═══ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-corg-600 sm:text-4xl text-center mb-8">
          Sweepstakes Casinos <span className="text-corg-500">FAQ</span>
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-corg-600">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-corg-500 via-corg-600/30 to-corg-700/10" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Start Playing <span className="text-gold-400">Free</span> Today
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            No deposit needed. No purchase required. Just sign up and start winning real prizes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/reviews/" className="btn-gold">Explore Casino Reviews →</Link>
            <Link href="/bonus/" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50">
              Claim Free Sweeps →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
