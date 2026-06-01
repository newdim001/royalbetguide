import Link from "next/link";
import CasinoLogo from "../../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino vs KatsuBet vs MiraxCasino - Vergleich 2026 | Royal Bet Guide",
  description:
    "7BitCasino, KatsuBet und MiraxCasino im direkten Vergleich 2026: Boni, Spiele, Auszahlungsraten, Lizenzen und Zahlungsmethoden. Finde das beste Casino für Dich!",
  alternates: { canonical: "https://royalbetguide.com/de/compare/7bit-katsubet-mirax/" },
  openGraph: {
    title: "7BitCasino vs KatsuBet vs MiraxCasino - Vergleich 2026",
    description:
      "Alle drei Krypto-Casinos im direkten Vergleich: Willkommensboni, Spielauswahl, Auszahlungsraten und Zahlungsmethoden.",
    url: "https://royalbetguide.com/de/compare/7bit-katsubet-mirax/",
  },
};

const CASINOS = [
  {
    slug: "7bit-casino",
    name: "7BitCasino",
    tagline: "Der Krypto-Pionier seit 2014",
    imgSlug: "7bitcasino",
    rating: 9.4,
    bonus: "5 BTC + 250 Freispiele",
    games: "7.000+",
    payout: "97,6 %",
    established: "2014",
    license: "Curacao",
    bestFor: "Krypto-Veteranen und High-Roller",
    affiliateUrl: "https://7bit.partners/p2jvy2mdh",
    pros: ["Krypto-Pionier seit 2014", "70+ Spielanbieter", "Provably Fair Spiele", "Hervorragendes VIP-Programm"],
    cons: ["Keine Fiat-Zahlungen", "In einigen Ländern gesperrt"],
    payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT"],
    providers: ["Pragmatic Play", "NetEnt", "Microgaming", "Evolution Gaming", "Play'n GO"],
    description: "Das Original unter den Krypto-Casinos. Seit 2014 vertrauen tausende Spieler auf 7BitCasino mit seiner riesigen Spielbibliothek und branchenführender Provably-Fair-Technologie.",
    wagering: "40-fach",
    minDeposit: "0,0001 BTC",
    cashback: "VIP-Cashback",
  },
  {
    slug: "katsubet",
    name: "KatsuBet",
    tagline: "Die neue Ära des Krypto-Gamings",
    imgSlug: "katsubet",
    rating: 8.3,
    bonus: "325 % + 200 Freispiele",
    games: "7.000+",
    payout: "96,4 %",
    established: "2020",
    license: "Curacao",
    bestFor: "Spieler mit Riesenspielauswahl",
    affiliateUrl: "https://katsubet.partners/px4e6itoe",
    pros: ["Riesige 7.000+ Spiele", "Hervorragende Krypto-Unterstützung", "Großzügiges Willkommenspaket", "Regelmäßige Turniere"],
    cons: ["Kein Live-Chat rund um die Uhr", "Telefon-Support eingeschränkt"],
    payments: ["Bitcoin", "Ethereum", "Litecoin", "USDT", "Visa", "Mastercard"],
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Hacksaw Gaming"],
    description: "Ein frischer Ansatz für Krypto-Casinos mit einer enormen Spielauswahl und spielerorientierten Aktionen.",
    wagering: "35-fach",
    minDeposit: "0,0001 BTC / 20 €",
    cashback: "Wöchentliches Cashback",
  },
  {
    slug: "mirax-casino",
    name: "MiraxCasino",
    tagline: "Modernes Gaming, maximale Flexibilität",
    imgSlug: "miraxcasino",
    rating: 8.2,
    bonus: "$500 + 200 Freispiele",
    games: "5.000+",
    payout: "96,3 %",
    established: "2021",
    license: "Curacao",
    bestFor: "Spieler mit Fiat- und Krypto-Optionen",
    affiliateUrl: "https://mirax.partners/pyklyuxbk",
    pros: ["Akzeptiert Fiat und Krypto", "Modernes Design", "Schnelle Auszahlungen", "Gute mobile Erfahrung"],
    cons: ["Neuere Marke (2021)", "Begrenzte Zahlungsmethoden"],
    payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"],
    providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Playtech"],
    description: "Die flexibelste Option – MiraxCasino akzeptiert sowohl Krypto als auch Fiat und ist der perfekte Einstiegspunkt.",
    wagering: "35-fach",
    minDeposit: "20 $/€ / 0,0001 BTC",
    cashback: "Bis zu 15 % wöchentlich",
  },
];

export default function CompareDePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">
          Startseite
        </Link>
        <span className="mx-2">→</span>
        <Link href="/de/compare/" className="hover:text-corg-500">
          Vergleiche
        </Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">
          7BitCasino vs KatsuBet vs MiraxCasino
        </span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          7BitCasino vs KatsuBet vs MiraxCasino
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Alle drei Casinos werden von 7BitPartners betrieben – wir vergleichen
          sie für Dich im Detail.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 font-semibold text-slate-600">Merkmal</th>
              {CASINOS.map((c) => (
                <th key={c.slug} className="p-4 text-center font-bold text-corg-600">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Bewertung", values: CASINOS.map((c) => c.rating + "/10") },
              { label: "Willkommensbonus", values: CASINOS.map((c) => c.bonus) },
              { label: "Spiele", values: CASINOS.map((c) => c.games) },
              { label: "Auszahlungsrate", values: CASINOS.map((c) => c.payout) },
              { label: "Seit", values: CASINOS.map((c) => c.established) },
              { label: "Lizenz", values: CASINOS.map((c) => c.license) },
              { label: "Umsatzbedingung", values: CASINOS.map((c) => c.wagering) },
              { label: "Mindesteinzahlung", values: CASINOS.map((c) => c.minDeposit) },
              { label: "Cashback", values: CASINOS.map((c) => c.cashback) },
              { label: "Am besten für", values: CASINOS.map((c) => c.bestFor) },
            ].map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-700">{row.label}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="p-4 text-center text-slate-600">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Zahlungsmethoden */}
      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[500px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 font-semibold text-slate-600">Zahlungsmethoden</th>
              {CASINOS.map((c) => (
                <th key={c.slug} className="p-4 text-center font-bold text-corg-600">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="p-4 font-medium text-slate-700">Akzeptierte Methoden</td>
              {CASINOS.map((c, i) => (
                <td key={i} className="p-4 text-center">
                  <div className="flex flex-wrap justify-center gap-1">
                    {c.payments.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-corg-500/10 px-2 py-0.5 text-xs text-corg-500"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-slate-100">
              <td className="p-4 font-medium text-slate-700">Spielanbieter</td>
              {CASINOS.map((c, i) => (
                <td key={i} className="p-4 text-center">
                  <div className="flex flex-wrap justify-center gap-1">
                    {c.providers.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-corg-pink/10 px-2 py-0.5 text-xs text-corg-pink"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Einzelkarten */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {CASINOS.map((c) => (
          <div
            key={c.slug}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="text-center">
              <span className="text-3xl"><CasinoLogo slug={c.imgSlug || c.slug} name={c.name} size={48} /></span>
              <h2 className="mt-2 text-xl font-bold text-corg-600">{c.name}</h2>
              <p className="mt-1 text-xs text-slate-400">{c.tagline}</p>
              <div className="mt-3">
                <span className="text-3xl font-extrabold text-corg-600">
                  {c.rating}
                </span>
                <span className="text-sm text-slate-400">/10</span>
              </div>
              <div className="mt-2">
                <span className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-500">
                  {c.bonus}
                </span>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
              {c.description}
            </p>
            <div className="mt-4 space-y-1.5">
              {c.pros.map((p) => (
                <p key={p} className="text-xs text-green-600">
                  ✅ {p}
                </p>
              ))}
              {c.cons.map((p) => (
                <p key={p} className="text-xs text-red-500">
                  ❌ {p}
                </p>
              ))}
            </div>
            <div className="mt-5">
              <p className="mb-2 text-center text-xs text-slate-400">
                🎁 {c.bonus}
              </p>
              <a
                href={c.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored"
                className="btn-gold block text-center"
              >
                Bonus bei {c.name} sichern →
              </a>
              <Link
                href={"/de/reviews/" + c.slug + "/"}
                className="mt-2 block text-center text-xs text-corg-500 hover:underline"
              >
                Vollständige Bewertung lesen →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Fazit */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-8">
        <h2 className="text-xl font-bold text-corg-600">Unser Fazit</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            <strong>7BitCasino wählen, wenn:</strong> Du die vertrauenswürdigste
            Marke mit der höchsten Auszahlungsrate (97,6 %) suchst. Das 5 BTC +
            250 Freispiele Paket ist branchenführend.
          </p>
          <p>
            <strong>KatsuBet wählen, wenn:</strong> Du 7.000+ Spiele mit einem
            325 % + 200 Freispiele Willkommenspaket und regelmäßigen Turnieren
            suchst.
          </p>
          <p>
            <strong>MiraxCasino wählen, wenn:</strong> Du Flexibilität zwischen
            Fiat und Krypto mit den schnellsten Auszahlungen und einer modernen
            Oberfläche bevorzugst.
          </p>
          <div className="mt-6 rounded-lg bg-corg-500/5 p-4 text-center">
            <p className="font-semibold text-corg-600">
              Starte mit 7BitCasino – unserer Nr. 1 Bewertung.
            </p>
            <a
              href={CASINOS[0].affiliateUrl}
              target="_blank"
              rel="nofollow sponsored"
              className="btn-gold mt-3 inline-flex"
            >
              5 BTC + 250 Freispiele bei 7BitCasino sichern →
            </a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
            <Link href="/de/bonus/7bit-casino/" className="text-corg-500 hover:underline">
              7BitCasino Bonus Details →
            </Link>
            <Link href="/de/bonus/katsubet/" className="text-corg-500 hover:underline">
              KatsuBet Bonus Details →
            </Link>
            <Link href="/de/bonus/mirax-casino/" className="text-corg-500 hover:underline">
              MiraxCasino Bonus Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
