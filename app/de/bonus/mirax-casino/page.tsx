import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirax Casino Bonus 2026 - $500 + 200 Freispiele sichern | Royal Bet Guide",
  description:
    "Mirax Casino Bonus 2026: Sichere Dir $500 + 200 Freispiele Willkommenspaket. Cashback-Angebote, Umsatzbedingungen und Schritt-für-Schritt-Anleitung – Jetzt exklusiv sichern!",
  alternates: { canonical: "https://royalbetguide.com/de/bonus/mirax-casino/" },
  openGraph: {
    title: "Mirax Casino Bonus 2026 - $500 + 200 Freispiele",
    description:
      "Hole Dir das $500 + 200 Freispiele Willkommenspaket bei MiraxCasino. Exklusiver Bonus für deutsche Spieler.",
    url: "https://royalbetguide.com/de/bonus/mirax-casino/",
  },
};

const AFFILIATE_URL = "https://mirax.partners/pyklyuxbk";

export default function MiraxBonusDePage() {
  const bonusSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MiraxCasino Willkommensbonus 2026",
    description: "$500 + 200 Freispiele Willkommenspaket bei MiraxCasino",
    offers: {
      "@type": "Offer",
      name: "$500 + 200 Freispiele",
      description:
        "$500 Willkommensbonus + 200 Freispiele. 35-fache Umsatzbedingung. Nur für Neukunden. 18+",
      url: AFFILIATE_URL,
    },
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
        <span className="font-semibold text-slate-800">Mirax Bonus</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
              Exklusiver Bonus
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Mirax Casino Bonus 2026
            </h1>
            <p className="mt-2 text-xl font-bold text-gold-400">
              $500 + 200 Freispiele
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
          <span>🎰 5.000+ Spiele</span>
          <span>💰 96,3 % Auszahlungsrate</span>
          <span>🔒 Curacao-Lizenz</span>
          <span>📅 Seit 2021</span>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          🎁 Das Willkommenspaket im Detail
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          MiraxCasino begrüßt neue Spieler mit einem attraktiven
          Willkommenspaket von bis zu $500 plus 200 Freispiele. Das Angebot
          richtet sich sowohl an Krypto- als auch an Fiat-Spieler und
          kombiniert hohe Bonusprozentsätze mit einer großzügigen Anzahl an
          Freispielen.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-100 bg-corg-500/5 p-4 text-center">
            <span className="text-2xl font-extrabold text-corg-600">
              100 %
            </span>
            <p className="mt-1 text-xs text-slate-500">
              Erste Einzahlung – bis zu $200 + 100 Freispiele
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-corg-500/5 p-4 text-center">
            <span className="text-2xl font-extrabold text-corg-600">75 %</span>
            <p className="mt-1 text-xs text-slate-500">
              Zweite Einzahlung – bis zu $150
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-corg-500/5 p-4 text-center">
            <span className="text-2xl font-extrabold text-corg-600">50 %</span>
            <p className="mt-1 text-xs text-slate-500">
              Dritte Einzahlung – bis zu $150 + 100 Freispiele
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          💰 Cashback-Angebote
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          MiraxCasino bietet eines der besten Cashback-Programme im
          Krypto-Casino-Bereich. Anders als viele Konkurrenten, bei denen
          Cashback nur auf bestimmte Verluste gewährt wird, erhalten Spieler
          bei MiraxCasino regelmäßig einen Prozentsatz ihrer Nettoverluste
          zurück.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Wöchentliches Cashback:</strong> Erhalte bis zu 15 %
              Deiner Nettoverluste zurück
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Cashback ohne Umsatzbedingungen:</strong> Das Cashback
              ist sofort verfügbar und muss nicht umgesetzt werden
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>VIP-Cashback:</strong> Höhere Cashback-Prozentsätze für
              VIP-Mitglieder
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
              <strong>Mindesteinzahlung:</strong> 20 $/€ oder 0,0001 BTC
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
              <strong>Maximaler Einsatz:</strong> 5 $/€ pro Runde während der
              Bonuslaufzeit
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
                Erstelle ein Konto bei MiraxCasino.
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
                Zahle mindestens 20 $/€ oder den Gegenwert in Krypto ein.
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
                Wähle den Bonus im Einzahlungsformular aus oder aktiviere ihn
                im Menü.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-corg-500 text-xs font-bold text-white">
              4
            </span>
            <div>
              <p className="font-semibold text-corg-600">Spielen</p>
              <p className="text-sm text-slate-500">
                Nutze Dein Bonusguthaben und genieße die 5.000+ Spiele.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          💡 Warum MiraxCasino?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          MiraxCasino ist die modernste Plattform unter den drei
          7BitPartners-Marken. Mit einem eleganten Design und einer
          benutzerfreundlichen Oberfläche richtet sich das Casino sowohl an
          Krypto-Enthusiasten als auch an traditionelle Spieler, da sowohl
          Fiat-Währungen als auch Kryptowährungen akzeptiert werden.
        </p>
        <p className="mt-3 leading-relaxed text-slate-700">
          Die Cashback-Angebote von MiraxCasino gehören zu den besten im
          Markt. Insbesondere das wöchentliche Cashback ohne
          Umsatzbedingungen ist ein Alleinstellungsmerkmal, das Spieler zu
          schätzen wissen.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">❓ FAQ zum Bonus</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-corg-600">
              Kann ich MiraxCasino mit Euro nutzen?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ja, MiraxCasino akzeptiert sowohl Fiat-Währungen (Visa,
              Mastercard, Skrill) als auch Kryptowährungen (Bitcoin, Ethereum).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Gibt es einen Bonus-Code?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              In der Regel ist kein Bonus-Code erforderlich. Der Bonus wird
              nach der ersten Einzahlung automatisch gutgeschrieben.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Wie oft erhalte ich Cashback?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Cashback wird wöchentlich berechnet und ausgezahlt. Der genaue
              Prozentsatz hängt von Deinem VIP-Status ab.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Hat MiraxCasino ein VIP-Programm?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ja, MiraxCasino bietet ein mehrstufiges VIP-Programm mit
              exklusiven Vorteilen wie höherem Cashback, persönlichem
              Account-Manager und schnelleren Auszahlungen.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">
          Bereit für $500 + 200 Freispiele?
        </h2>
        <p className="mt-2 text-white/70">
          Sichere Dir jetzt das exklusive Willkommenspaket bei MiraxCasino.
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
            📊 Vergleiche MiraxCasino mit anderen Top-Krypto-Casinos
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
