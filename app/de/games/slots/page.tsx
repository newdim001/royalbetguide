import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Slots 2026 - Beliebteste Spielautomaten in Deutschland | Royal Bet Guide",
  description:
    "Die beliebtesten Online Slots 2026 in Deutschland. Top 10 Spielautomaten mit RTP, Anbieter und Volatilität. Jetzt bei 7BitCasino spielen und exklusive Boni sichern!",
  alternates: { canonical: "https://royalbetguide.com/de/games/slots/" },
  openGraph: {
    title: "Online Slots 2026 - Beliebteste Spielautomaten",
    description:
      "Top 10 Online Slots 2026: RTP, Volatilität und Anbieter im Vergleich. Finde Deinen Lieblingsslot und sichere Dir exklusive Boni.",
    url: "https://royalbetguide.com/de/games/slots/",
  },
};

const TOP_SLOTS = [
  { name: "Book of Dead", provider: "Play'n GO", rtp: "96,21 %", volatility: "Hoch", maxWin: "5.000x", theme: "Ägypten", icon: "📖" },
  { name: "Starburst", provider: "NetEnt", rtp: "96,09 %", volatility: "Niedrig", maxWin: "500x", theme: "Weltall", icon: "💎" },
  { name: "Gates of Olympus", provider: "Pragmatic Play", rtp: "96,50 %", volatility: "Hoch", maxWin: "5.000x", theme: "Griechisch", icon: "⚡" },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", rtp: "96,48 %", volatility: "Mittel–Hoch", maxWin: "21.100x", theme: "Süßigkeiten", icon: "🍬" },
  { name: "Mega Moolah", provider: "Microgaming", rtp: "88,12 %", volatility: "Hoch", maxWin: "∞ (Progressiv)", theme: "Safari", icon: "🦁" },
  { name: "Gonzo's Quest", provider: "NetEnt", rtp: "95,97 %", volatility: "Mittel", maxWin: "2.500x", theme: "Abenteuer", icon: "🗿" },
  { name: "Dead or Alive 2", provider: "NetEnt", rtp: "96,82 %", volatility: "Sehr Hoch", maxWin: "100.000x", theme: "Western", icon: "🤠" },
  { name: "Wolf Gold", provider: "Pragmatic Play", rtp: "96,00 %", volatility: "Mittel", maxWin: "2.500x", theme: "Natur", icon: "🐺" },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", rtp: "96,71 %", volatility: "Mittel–Hoch", maxWin: "4.000x", theme: "Angeln", icon: "🎣" },
  { name: "Starlight Princess", provider: "Pragmatic Play", rtp: "96,50 %", volatility: "Hoch", maxWin: "5.000x", theme: "Anime", icon: "⭐" },
];

const VOLATILITY_INFO = [
  { level: "Niedrig", desc: "Häufige kleine Gewinne. Ideal für lange Spielsitzungen und Anfänger.", icon: "🟢" },
  { level: "Mittel", desc: "Ausgewogenes Verhältnis zwischen Gewinnhäufigkeit und -höhe.", icon: "🟡" },
  { level: "Hoch", desc: "Seltene, aber hohe Gewinne. Für risikofreudige Spieler mit Geduld.", icon: "🔴" },
  { level: "Sehr Hoch", desc: "Sehr seltene Gewinne mit potenziell riesigen Auszahlungen.", icon: "💀" },
];

export default function SlotsDePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">
          Startseite
        </Link>
        <span className="mx-2">→</span>
        <Link href="/de/games/" className="hover:text-corg-500">
          Spiele
        </Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Online Slots</span>
      </div>

      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
            Slots Guide
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">
            Online Slots 2026 – Die beliebtesten Spielautomaten
          </h1>
          <p className="mt-2 text-slate-500">
            RTP, Volatilität und Anbieter der Top 10 Spielautomaten im
            Überblick. Spiele sie jetzt bei 7BitCasino.
          </p>
        </div>

        <div className="card-light mb-8">
          <p className="leading-relaxed text-slate-700">
            Online Slots sind die mit Abstand beliebtesten Casinospiele in
            Deutschland. Ihre einfache Bedienung, die aufregenden Themen und
            das Potenzial für riesige Gewinne machen sie zum Favoriten
            Millionen von Spielern. Moderne Spielautomaten bieten atemberaubende
            Grafiken, fesselnde Soundtracks, innovative Bonusfunktionen und
            progressive Jackpots, die in einer einzigen Drehung Leben verändern
            können. Dieser Guide zeigt Dir die Top 10 Slots des Jahres 2026.
          </p>
        </div>

        {/* Top 10 Tabelle */}
        <div className="card-light mb-8 overflow-x-auto">
          <h2 className="mb-4 text-xl font-bold text-corg-600">
            🏆 Top 10 Online Slots 2026
          </h2>
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-2 pr-2 font-semibold text-slate-600">#</th>
                <th className="pb-2 px-2 font-semibold text-slate-600">Slot</th>
                <th className="pb-2 px-2 font-semibold text-slate-600">Anbieter</th>
                <th className="pb-2 px-2 font-semibold text-slate-600">RTP</th>
                <th className="pb-2 px-2 font-semibold text-slate-600">Volatilität</th>
                <th className="pb-2 pl-2 font-semibold text-slate-600">Max. Gewinn</th>
              </tr>
            </thead>
            <tbody>
              {TOP_SLOTS.map((s, i) => (
                <tr key={s.name} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 pr-2 font-bold text-corg-500">{i + 1}</td>
                  <td className="py-3 px-2">
                    <span className="font-medium text-slate-800">
                      <span className="text-2xl">{s.icon}</span> {s.name}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-slate-600">{s.provider}</td>
                  <td className="py-3 px-2 font-medium text-corg-green-dark">
                    {s.rtp}
                  </td>
                  <td className="py-3 px-2 text-slate-600">{s.volatility}</td>
                  <td className="py-3 pl-2 text-slate-600">{s.maxWin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Volatilität erklärt */}
        <div className="card-light mb-8">
          <h2 className="mb-4 text-xl font-bold text-corg-600">
            📊 Volatilität verstehen
          </h2>
          <p className="mb-4 leading-relaxed text-slate-700">
            Die Volatilität (auch Varianz genannt) beschreibt das Risiko eines
            Spielautomaten. Sie bestimmt, wie häufig und wie hoch die Gewinne
            ausfallen:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {VOLATILITY_INFO.map((v) => (
              <div
                key={v.level}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <p className="font-semibold text-corg-600">
                  <span className="text-2xl">{v.icon}</span> {v.level}
                </p>
                <p className="mt-1 text-xs text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RTP erklärt */}
        <div className="card-light mb-8">
          <h2 className="mb-4 text-xl font-bold text-corg-600">
            💰 Was ist RTP?
          </h2>
          <p className="leading-relaxed text-slate-700">
            RTP (Return to Player) ist die theoretische Auszahlungsrate eines
            Slots über einen langen Zeitraum. Ein Slot mit 96 % RTP zahlt
            96 € von 100 € Einsatz wieder aus. Achte auf Slots mit RTP von
            96 % oder höher – die meisten unserer Top 10 erfüllen dieses
            Kriterium. Ausnahme: Progressive Jackpot-Slots wie Mega Moolah
            haben niedrigere RTPs, da ein Teil der Einsätze in den Jackpot
            fließt.
          </p>
        </div>

        {/* Top Anbieter */}
        <div className="card-light mb-8">
          <h2 className="mb-4 text-xl font-bold text-corg-600">
            🎯 Die besten Slot-Anbieter
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-100 p-4">
              <h3 className="font-bold text-corg-600">NetEnt</h3>
              <p className="mt-1 text-sm text-slate-500">
                Bekannt für hochwertige Grafiken und innovative Mechaniken.
                Starburst und Dead or Alive 2 sind Klassiker.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 p-4">
              <h3 className="font-bold text-corg-600">Pragmatic Play</h3>
              <p className="mt-1 text-sm text-slate-500">
                Produziert beliebte Titel mit mittlerer bis hoher Volatilität.
                Gates of Olympus, Sweet Bonanza und Wolf Gold.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 p-4">
              <h3 className="font-bold text-corg-600">Play'n GO</h3>
              <p className="mt-1 text-sm text-slate-500">
                Schöpfer von Book of Dead und vielen Abenteuer-Slots mit
                einzigartigen Bonus-Mechaniken.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 p-4">
              <h3 className="font-bold text-corg-600">Microgaming</h3>
              <p className="mt-1 text-sm text-slate-500">
                Betreibt die größten progressiven Jackpots, darunter den
                Rekordhalter Mega Moolah.
              </p>
            </div>
          </div>
        </div>

        {/* Spielt bei 7BitCasino */}
        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">
            🎰 Bereit zum Spielen?
          </h2>
          <p className="mt-2 text-white/70">
            Spiele alle Top-Slots bei 7BitCasino. Über 7.000 Spiele von den
            besten Anbietern warten auf Dich – inklusive 5 BTC + 250
            Freispiele Willkommensbonus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://7bit.partners/p2jvy2mdh"
              target="_blank"
              rel="nofollow sponsored"
              className="btn-gold inline-flex"
            >
              Bei 7BitCasino spielen →
            </a>
            <Link
              href="/de/reviews/7bit-casino/"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              7BitCasino Bewertung lesen →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-white/60">
            <Link href="/de/bonus/7bit-casino/" className="hover:text-white underline">
              Bonus Details
            </Link>
            <Link href="/de/compare/7bit-katsubet-mirax/" className="hover:text-white underline">
              Casino Vergleich
            </Link>
            <Link href="/de/games/slots/book-of-dead/" className="hover:text-white underline">
              Book of Dead
            </Link>
            <Link href="/de/games/slots/starburst/" className="hover:text-white underline">
              Starburst
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
