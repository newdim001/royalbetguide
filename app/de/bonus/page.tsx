import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino Boni 2026 - Beste Willkommensangebote für deutsche Spieler ",
  description:
    "Die besten Casino Boni 2026 im Vergleich. Exklusive Willkommenspakete mit BTC, Freispielen und Cashback. 7BitCasino, KatsuBet, MiraxCasino und mehr – jetzt Bonus sichern!",
  alternates: { canonical: "https://royalbetguide.com/de/bonus/" },
  openGraph: {
    title: "Casino Boni 2026 - Beste Willkommensangebote für deutsche Spieler",
    description:
      "Top Casino Boni 2026: Vergleiche die besten Willkommensangebote mit BTC, Freispielen und Cashback.",
    url: "https://royalbetguide.com/de/bonus/",
  },
};

const TOP_BONUSES = [
  {
    name: "7BitCasino",
    slug: "7bit-casino",
    bonus: "5 BTC + 250 Freispiele",
    rating: 9.6,
    payout: "97,6 %",
    games: "7.000+",
    tag: "TOP EMPFOHLEN",
    tagColor: "bg-gold-400 text-corg-600",
    affiliateUrl: "https://7bit.partners/p2jvy2mdh",
    highlight: "Krypto-Pionier • Höchste Auszahlungsrate • Provably Fair",
  },
  {
    name: "KatsuBet",
    slug: "katsubet",
    bonus: "325 % + 200 Freispiele",
    rating: 9.4,
    payout: "96,4 %",
    games: "7.000+",
    tag: "TURNIERE",
    tagColor: "bg-corg-pink/15 text-corg-pink",
    affiliateUrl: "https://katsubet.partners/px4e6itoe",
    highlight: "Regelmäßige Turniere • Riesen-Spielauswahl • Krypto + Fiat",
  },
  {
    name: "MiraxCasino",
    slug: "mirax-casino",
    bonus: "$500 + 200 Freispiele",
    rating: 9.2,
    payout: "96,3 %",
    games: "5.000+",
    tag: "CASHBACK",
    tagColor: "bg-corg-green/15 text-corg-green-dark",
    affiliateUrl: "https://mirax.partners/pyklyuxbk",
    highlight: "Cashback ohne Umsatzbedingungen • Fiat + Krypto • Modernes Design",
  },
  {
    name: "BitStarz",
    slug: "bitstarz",
    bonus: "5 BTC + 200 Freispiele",
    rating: 9.7,
    payout: "98,2 %",
    games: "5.000+",
    tag: "TOP BEWERTET",
    tagColor: "bg-gold-400 text-corg-600",
    affiliateUrl: "https://bitstarz.com/",
    highlight: "Preisgekrönt • Höchste Auszahlungsrate • Provably Fair",
  },
  {
    name: "Stake",
    slug: "stake",
    bonus: "Krypto-Willkommensbonus",
    rating: 8.8,
    payout: "97,5 %",
    games: "4.000+",
    tag: "KRYPTO-LIEBLING",
    tagColor: "bg-corg-500/15 text-corg-500",
    affiliateUrl: "https://stake.com/",
    highlight: "Führendes Krypto-Casino • Innovative Features • Hohe Limits",
  },
];

export default function BonusOverviewDePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">
          Startseite
        </Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Casino Boni</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Casino Boni 2026 – Die besten <span className="text-gold-400">Willkommensangebote</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Vergleiche die besten Casino Willkommensboni für deutsche Spieler.
          Exklusive Angebote mit BTC, Freispielen und Cashback – von unseren
          Experten geprüft.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {TOP_BONUSES.map((b, i) => (
          <div
            key={b.slug}
            className={`card-gradient-border group ${
              i === 0 ? "ring-2 ring-gold-400/40" : ""
            }`}
          >
            {i === 0 && (
              <div className="mb-3">
                <span className="inline-block rounded-full bg-gold-400 px-3 py-0.5 text-xs font-bold text-corg-600">
                  ⭐ Unsere Nr. 1 Empfehlung
                </span>
              </div>
            )}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-3xl">
                  {b.name === "7BitCasino" ? "₿" : b.name === "KatsuBet" ? "🐉" : b.name === "MiraxCasino" ? "✨" : b.name === "BitStarz" ? "⭐" : "🎲"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-corg-600">
                      {b.name}
                    </h2>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${b.tagColor}`}
                    >
                      {b.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-lg font-bold text-gold-500">
                    {b.bonus}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{b.highlight}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-corg-600">
                    {b.rating}
                  </div>
                  <div className="text-xs text-slate-400">/10</div>
                  <div className="text-xs text-corg-green-dark">{b.payout}</div>
                </div>
                <a
                  href={b.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="btn-gold whitespace-nowrap"
                >
                  Bonus sichern →
                </a>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-3 text-xs text-slate-500">
              <span>🎮 {b.games} Spiele</span>
              <span>⭐ Bewertung: {b.rating}/10</span>
              <Link
                href={"/de/bonus/" + b.slug + "/"}
                className="text-corg-500 hover:underline"
              >
                Details anzeigen →
              </Link>
              <Link
                href={"/de/reviews/" + b.slug + "/"}
                className="text-corg-500 hover:underline"
              >
                Bewertung lesen →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          💡 So findest Du den besten Bonus
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Nicht jeder Bonus ist für jeden Spieler geeignet. Hier sind die
          wichtigsten Faktoren, die Du bei der Auswahl beachten solltest:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-corg-500/5 p-4">
            <h3 className="font-semibold text-corg-600">
              🎯 Umsatzbedingungen
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Je niedriger, desto besser. 35–40-fach ist branchenüblich. Achte
              darauf, wie viel Prozent die Spiele zum Umsatz beitragen.
            </p>
          </div>
          <div className="rounded-lg bg-corg-500/5 p-4">
            <h3 className="font-semibold text-corg-600">⏱️ Gültigkeit</h3>
            <p className="mt-1 text-sm text-slate-500">
              Die meisten Boni sind 30 Tage gültig. Stelle sicher, dass Du
              genug Zeit hast, die Umsatzbedingungen zu erfüllen.
            </p>
          </div>
          <div className="rounded-lg bg-corg-500/5 p-4">
            <h3 className="font-semibold text-corg-600">
              💳 Zahlungsmethoden
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Prüfe, ob das Casino Deine bevorzugte Zahlungsmethode akzeptiert.
              Manche Boni sind nur für bestimmte Methoden verfügbar.
            </p>
          </div>
          <div className="rounded-lg bg-corg-500/5 p-4">
            <h3 className="font-semibold text-corg-600">🎮 Spieleauswahl</h3>
            <p className="mt-1 text-sm text-slate-500">
              Wähle ein Casino mit einer großen Auswahl an Slots und
              Tischspielen, die zu Deinem Spielstil passen.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          ❓ Häufig gestellte Fragen zu Casino Boni
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-corg-600">
              Was ist ein Willkommensbonus?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ein Willkommensbonus ist ein Angebot für neue Spieler bei der
              Registrierung und ersten Einzahlung. Er kann aus Bonusguthaben,
              Freispielen oder einer Kombination beider bestehen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Sind Casino Boni in Deutschland legal?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ja, Casinos mit einer gültigen Lizenz (z. B. Curacao) dürfen
              Boni anbieten. Achte darauf, dass das Casino vertrauenswürdig ist
              und die Bonusbedingungen fair sind.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Was bedeuten Umsatzbedingungen?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Die Umsatzbedingung gibt an, wie oft Du den Bonusbetrag umsetzen
              musst, bevor Du Gewinne auszahlen lassen kannst. Bei einer
              40-fachen Bedingung und 100 € Bonus musst Du 4.000 € umsetzen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Kann ich mehrere Boni gleichzeitig nutzen?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              In der Regel nein. Die meisten Casinos erlauben nur einen aktiven
              Bonus pro Spieler. Schließe einen Bonus ab, bevor Du den nächsten
              aktivierst.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/de/compare/7bit-katsubet-mirax/"
          className="btn-gold inline-flex"
        >
          Alle drei 7Bit-Casinos vergleichen →
        </Link>
      </div>
    </div>
  );
}
