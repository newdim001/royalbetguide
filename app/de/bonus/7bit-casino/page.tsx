import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino Bonus 2026 - 5 BTC + 250 Freispiele sichern | Royal Bet Guide",
  description:
    "7BitCasino Bonus 2026: Sichere Dir 5 BTC + 250 Freispiele als Willkommenspaket. Umsatzbedingungen, Bonus-Code und Schritt-für-Schritt-Anleitung – Jetzt exklusiv sichern!",
  alternates: { canonical: "https://royalbetguide.com/de/bonus/7bit-casino/" },
  openGraph: {
    title: "7BitCasino Bonus 2026 - 5 BTC + 250 Freispiele",
    description:
      "Hole Dir das 5 BTC + 250 Freispiele Willkommenspaket bei 7BitCasino. Exklusiver Bonus für deutsche Spieler.",
    url: "https://royalbetguide.com/de/bonus/7bit-casino/",
  },
};

const AFFILIATE_URL = "https://7bit.partners/p2jvy2mdh";

export default function SevenBitBonusDePage() {
  const bonusSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "7BitCasino Willkommensbonus 2026",
    description:
      "5 BTC + 250 Freispiele Willkommenspaket bei 7BitCasino",
    offers: {
      "@type": "Offer",
      name: "5 BTC + 250 Freispiele",
      description:
        "Verteilt auf die ersten Einzahlungen. 40-fache Umsatzbedingung. Nur für Neukunden. 18+",
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
        <span className="font-semibold text-slate-800">7BitCasino Bonus</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
              Exklusiver Bonus
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              7BitCasino Bonus 2026
            </h1>
            <p className="mt-2 text-xl font-bold text-gold-400">
              5 BTC + 250 Freispiele
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
          <span>💰 97,6 % Auszahlungsrate</span>
          <span>🔒 Curacao-Lizenz</span>
          <span>📅 Seit 2014</span>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          🎁 Das Willkommenspaket im Detail
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Das Willkommenspaket von 7BitCasino zählt zu den großzügigsten im
          Krypto-Casino-Bereich. Neue Spieler erhalten bis zu 5 BTC sowie 250
          Freispiele, verteilt auf die ersten Einzahlungen. Dieses Angebot ist
          speziell auf Spieler zugeschnitten, die von Anfang an maximale
          Spielpower nutzen möchten.
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
            <span className="text-2xl font-extrabold text-corg-600">50 %</span>
            <p className="mt-1 text-xs text-slate-500">
              Dritte + vierte Einzahlung – bis zu 2,5 BTC
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          * Die Freispiele werden ebenfalls über mehrere Einzahlungen verteilt
          gutgeschrieben. Alle Boni unterliegen den allgemeinen
          Geschäftsbedingungen von 7BitCasino.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          📋 Umsatzbedingungen
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Wie bei den meisten Online-Casinos gelten auch bei 7BitCasino
          Umsatzbedingungen für den Willkommensbonus. Diese sind fair und
          branchenüblich:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Umsatzbedingung:</strong> 40-fach für den Bonusbetrag
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Mindesteinzahlung:</strong> 0,0001 BTC (oder Gegenwert in
              anderen Kryptowährungen)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">•</span>
            <span>
              <strong>Maximaler Einsatz:</strong> 0,0005 BTC pro Runde während
              der Bonuslaufzeit
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
              <strong>Spielbeitrag:</strong> Slots zählen zu 100 %, Tischspiele
              zu 5–10 %
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
                Erstelle ein Konto auf der 7BitCasino-Website. Die Registrierung
                dauert nur wenige Minuten.
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
                Zahle mindestens 0,0001 BTC (oder eine andere unterstützte
                Kryptowährung) ein.
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
                Der Bonus wird automatisch gutgeschrieben oder kann unter
                „Bonus" im Menü aktiviert werden.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-corg-500 text-xs font-bold text-white">
              4
            </span>
            <div>
              <p className="font-semibold text-corg-600">Spielen und gewinnen</p>
              <p className="text-sm text-slate-500">
                Nutze Dein Bonusguthaben und die Freispiele an den
                teilnehmenden Spielautomaten.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">
          💡 Tipps für den optimalen Bonus-Einsatz
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Um das Beste aus Deinem 7BitCasino-Bonus herauszuholen, empfehlen wir
          folgende Strategien:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">✓</span>
            <span>
              <strong>Spiele Slots mit hohem RTP:</strong> Spiele wie Book of
              Dead (96,21 %) oder Starburst (96,09 %) helfen Dir, die
              Umsatzbedingungen effizient zu erfüllen.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">✓</span>
            <span>
              <strong>Halte den maximalen Einsatz ein:</strong> Überschreite
              nicht 0,0005 BTC pro Runde, da sonst der Bonus verfällt.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">✓</span>
            <span>
              <strong>Nutze die 30 Tage voll aus:</strong> Plane Deine
              Spielsitzungen strategisch, um den Bonus rechtzeitig freizuspielen.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-corg-500">✓</span>
            <span>
              <strong>VIP-Programm nutzen:</strong> 7BitCasino belohnt aktive
              Spieler mit einem mehrstufigen VIP-Programm, das zusätzliche
              Boni und schnellere Auszahlungen bietet.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">❓ FAQ zum Bonus</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-corg-600">
              Kann ich den Bonus auch mit anderen Kryptowährungen nutzen?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ja, 7BitCasino akzeptiert Bitcoin, Ethereum, Litecoin, Dogecoin
              und USDT für den Willkommensbonus.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Gibt es einen Bonus-Code?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              In der Regel ist kein Bonus-Code erforderlich – der Bonus wird
              automatisch nach der ersten Einzahlung gutgeschrieben. Prüfe
              dennoch die aktuellen Bedingungen auf der Website.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Kann ich den Bonus ablehnen?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Ja, Du kannst den Bonus bei der Einzahlung ablehnen. Dies ist
              sinnvoll, wenn Du ohne Umsatzbedingungen spielen möchtest.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-corg-600">
              Sind alle Spiele für den Bonus qualifiziert?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Slots tragen zu 100 % zu den Umsatzbedingungen bei. Tischspiele
              und Live-Casinospiele haben einen geringeren Beitrag.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">
          Bereit für 5 BTC + 250 Freispiele?
        </h2>
        <p className="mt-2 text-white/70">
          Sichere Dir jetzt das exklusive Willkommenspaket bei 7BitCasino.
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
            📊 Vergleiche 7BitCasino mit anderen Top-Krypto-Casinos
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
