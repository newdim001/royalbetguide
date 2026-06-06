import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KatsuBet Bonus 2026 - 325% + 200 Freispiele sichern",
  description:
    "KatsuBet Bonus 2026: Sichere Dir 325% + 200 Freispiele Willkommenspaket. Turnier-Boni, Umsatzbedingungen und Schritt-für-Schritt-Anleitung – Jetzt exklusiv sichern!",
  alternates: { canonical: "https://royalbetguide.com/de/bonus/katsubet/" },
  openGraph: {
    title: "KatsuBet Bonus 2026 - 325% + 200 Freispiele",
    description:
      "Hole Dir das 325% + 200 Freispiele Willkommenspaket bei KatsuBet. Exklusiver Bonus für deutsche Spieler.",
    url: "https://royalbetguide.com/de/bonus/katsubet/",
  },
};

const AFFILIATE_URL = "https://katsubet.partners/px4e6itoe";

export default function KatsuBetBonusDePage() {
  const bonusSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KatsuBet Willkommensbonus 2026",
    image: "https://royalbetguide.com/og/katsubet.png",
    description: "325% + 200 Freispiele Willkommenspaket bei KatsuBet",
    
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bonusSchema) }}
      />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Wir verdienen möglicherweise eine Provision, wenn Sie sich über unsere
        Links anmelden. Spielen Sie verantwortungsbewusst. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">
          Startseite
        </Link>
        <span className="mx-2">→</span>
        <Link href="/de/bonus/" className="hover:text-corg-500">
          Boni
        </Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">KatsuBet Bonus</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
              Exklusiver Bonus
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              KatsuBet Bonus 2026
            </h1>
            <p className="mt-2 text-xl font-bold text-gold-400">
              325 % + 200 Freispiele
            </p>
          </div>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored"
            className="btn-gold whitespace-nowrap"
          >
            Bonus sichern →
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
          <span>🎰 7.000+ Spiele</span>
          <span>💰 96,4 % Auszahlungsrate</span>
          <span>🔒 Curacao-Lizenz</span>
          <span>📅 Seit 2020</span>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          🎁 Das Willkommenspaket im Detail
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          KatsuBet heißt neue Spieler mit einem beeindruckenden
          Willkommenspaket von 325 % plus 200 Freispiele willkommen. Das Paket
          verteilt sich auf mehrere Einzahlungen und bietet sowohl hohe
          Bonusprozentsätze als auch reichlich Freispiele für die beliebtesten
          Slots.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-100 bg-corg-500/5 p-4 text-center">
            <span className="text-2xl font-extrabold text-corg-600">
              100 %
            </span>
            <p className="mt-1 text-xs text-slate-500">
              Erste Einzahlung – bis zu 1 BTC
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-corg-500/5 p-4 text-center">
            <span className="text-2xl font-extrabold text-corg-600">75 %</span>
            <p className="mt-1 text-xs text-slate-500">
              Zweite Einzahlung – bis zu 1,5 BTC
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-corg-500/5 p-4 text-center">
            <span className="text-2xl font-extrabold text-corg-600">
              150 %
            </span>
            <p className="mt-1 text-xs text-slate-500">
              Dritte Einzahlung – bis zu 200 FS + Bonus
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          🏆 Turnier-Boni und Aktionen
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Neben dem Willkommenspaket bietet KatsuBet regelmäßige Turniere mit
          hohen Preispools. Die Turniere laufen meist wöchentlich und
          belohnen Spieler basierend auf ihrem Spielvolumen oder den
          erzielten Gewinnen an bestimmten Spielautomaten.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Wöchentliche Turniere:</strong> Täglich neue
              Herausforderungen mit Preisen in Kryptowährungen
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Cashback-Angebote:</strong> Erhalte einen Teil Deiner
              Verluste als Cashback zurück
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>VIP-Rabatte:</strong> Exklusive Reload-Boni für
              Bestandskunden
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Freispiel-Aktionen:</strong> Regelmäßig neue Freispiele
              für Top-Slots
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          📋 Umsatzbedingungen
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Umsatzbedingung:</strong> 35-fach für den Bonusbetrag
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Mindesteinzahlung:</strong> 0,0001 BTC oder 20 €
              (Fiat-Währungen)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Gültigkeit:</strong> 30 Tage ab Bonusaktivierung
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Spielbeitrag:</strong> Slots 100 %, Tischspiele 5–10 %
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Maximaler Gewinn:</strong> Keine Obergrenze bei
              Freispiel-Gewinnen
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          🪜 So beanspruchst Du den Bonus
        </h2>
        <ol className="mt-4 space-y-4">
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-corg-500 text-xs font-bold text-white">
              1
            </span>
            <div>
              <p className="font-semibold text-corg-600">Registrieren</p>
              <p className="text-sm text-slate-500">
                Erstelle ein Konto bei KatsuBet – einfach und schnell.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-corg-500 text-xs font-bold text-white">
              2
            </span>
            <div>
              <p className="font-semibold text-corg-600">Erste Einzahlung</p>
              <p className="text-sm text-slate-500">
                Zahle mindestens 0,0001 BTC oder 20 € ein, um den Bonus zu
                aktivieren.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-corg-500 text-xs font-bold text-white">
              3
            </span>
            <div>
              <p className="font-semibold text-corg-600">Bonus aktivieren</p>
              <p className="text-sm text-slate-500">
                Der Bonus wird automatisch gutgeschrieben. Prüfe den
                Bonusstatus in Deinem Konto.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-corg-500 text-xs font-bold text-white">
              4
            </span>
            <div>
              <p className="font-semibold text-corg-600">Freispiele nutzen</p>
              <p className="text-sm text-slate-500">
                Die Freispiele stehen an ausgewählten Top-Slots zur Verfügung
                und werden automatisch gutgeschrieben.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          💡 Warum KatsuBet?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          KatsuBet hat sich seit der Gründung im Jahr 2020 als
          ernstzunehmender Player im Krypto-Casino-Markt etabliert. Mit über
          7.000 Spielen von Top-Anbietern wie Pragmatic Play, NetEnt und
          Evolution Gaming bietet die Plattform eine der größten
          Spielbibliotheken auf dem Markt.
        </p>
        <p className="mt-3 leading-relaxed text-slate-700">
          Besonders hervorzuheben sind die regelmäßigen Turniere, die KatsuBet
          von vielen anderen Casinos abheben. Sie bieten Spielern die
          Möglichkeit, zusätzlich zu den regulären Boni attraktive Preise zu
          gewinnen.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">❓ FAQ zum Bonus</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-corg-600">
              Kann ich KatsuBet auch mit Euro nutzen?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ja, KatsuBet akzeptiert sowohl Kryptowährungen als auch
              Fiat-Zahlungen wie Visa und Mastercard.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Gibt es einen Bonus-Code für KatsuBet?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ein Bonus-Code ist in der Regel nicht erforderlich. Der Bonus
              wird nach der ersten Einzahlung automatisch aktiviert.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              🏆 Wie oft finden Turniere statt?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              KatsuBet veranstaltet regelmäßig wöchentliche Turniere mit
              wechselnden Themen und Preispools. Die aktuellen Turniere
              findest Du im Promotions-Bereich.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">
          Bereit für 325 % + 200 Freispiele?
        </h2>
        <p className="mt-2 text-white/70">
          Sichere Dir jetzt das exklusive Willkommenspaket bei KatsuBet.
        </p>
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="nofollow sponsored"
          className="btn-gold mt-4 inline-flex"
        >
          Jetzt Bonus sichern →
        </a>
        <p className="mt-3 text-xs text-white/50">
          *Nur für Neukunden. 18+. Es gelten die AGB.
        </p>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block rounded-lg border border-corg-500/20 bg-corg-500/5 px-6 py-4">
          <p className="text-sm text-slate-600">
            📊 Vergleiche KatsuBet mit anderen Top-Krypto-Casinos
          </p>
          <Link
            href="/de/compare/7bit-katsubet-mirax/"
            className="mt-2 inline-block text-sm font-semibold text-corg-500 hover:underline"
          >
            Zum Vergleich: 7BitCasino vs KatsuBet vs MiraxCasino →
          </Link>
        </div>
      </div>
    </div>
  );
}
