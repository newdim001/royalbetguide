import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiraxCasino Erfahrungen 2026 – Test und Bewertung",
  description: "MiraxCasino im Test: 8.2/10 Bewertung | $500 + 200 Freispiele | 5000+ Spiele | 96.3% Auszahlungsrate | Fiat und Krypto | Jetzt lesen!",
  alternates: { canonical: "https://royalbetguide.com/de/reviews/mirax-casino/" },
  openGraph: {
    title: "MiraxCasino Erfahrungen 2026 – Test und Bewertung",
    description: "MiraxCasino im Test: 8.2/10 Bewertung | $500 + 200 Freispiele | 5000+ Spiele | 96.3% Auszahlungsrate | Akzeptiert Fiat und Krypto",
    url: "https://royalbetguide.com/de/reviews/mirax-casino/",
  },
};

const CASINO = {
  name: "Mirax Casino",
  rating: 8.2,
  bonus: "$500 + 200 Freispiele",
  payout: "96.3%",
  games: "5000+",
  established: "2021",
  license: "Curacao",
  pros: [
    "Akzeptiert Fiat und Krypto",
    "Modernes elegantes Design",
    "Schnelle Auszahlungen",
    "Gute mobile Erfahrung",
  ],
  cons: [
    "Neuere Marke (2021)",
    "Begrenzte Zahlungsmethoden",
  ],
  payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"],
  providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Playtech"],
  affiliateUrl: "https://mirax.partners/pyklyuxbk",
};

const COMPARISON_CASINOS = [
  { slug: "katsubet", name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Freispiele", payout: "96.4%", games: "7000+" },
  { slug: "7bit-casino", name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Freispiele", payout: "97.6%", games: "7000+" },
];

export default function MiraxCasinoDePage() {
  const c = CASINO;
  const gamesRating = 9;
  const payoutRating = 8;
  const mobileRating = 9;
  const supportRating = 8;
  const bonusRating = 8;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Organization", name: c.name },
    reviewRating: { "@type": "Rating", ratingValue: c.rating.toString(), bestRating: "10", worstRating: "0" },
    author: { "@type": "Person", name: "Michael Weber" },
    datePublished: "2021",
    description: "Erfahren Sie alles über MiraxCasino in unserem ausführlichen Test. " + c.bonus + ", " + c.games + " Spiele, " + c.payout + " Auszahlungsrate.",
    inLanguage: "de",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ist MiraxCasino sicher und seriös?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, MiraxCasino ist vollständig lizenziert durch die Regierung von Curacao und verwendet branchenübliche SSL-Verschlüsselung zum Schutz aller Spielerdaten. Das Casino arbeitet mit renommierten Spielanbietern zusammen und unterliegt regelmäßigen Überprüfungen seiner Zufallszahlengeneratoren. Die Sicherheit der Spieler hat bei MiraxCasino höchste Priorität.",
        },
      },
      {
        "@type": "Question",
        name: "Welchen Willkommensbonus bietet MiraxCasino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neue Spieler bei MiraxCasino erhalten ein Willkommenspaket von $500 plus 200 Freispiele. Dieses Paket verteilt sich auf die ersten Einzahlungen und bietet sowohl Fiat- als auch Krypto-Nutzern flexible Einsatzmöglichkeiten. Der Bonus ist besonders attraktiv für Spieler, die sowohl mit traditionellen Währungen als auch mit Kryptowährungen einzahlen möchten.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell sind Auszahlungen bei MiraxCasino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MiraxCasino ist bekannt für seine schnellen Auszahlungen. Krypto-Transaktionen werden in der Regel innerhalb weniger Minuten bearbeitet, während Fiat-Auszahlungen je nach gewählter Methode zwischen einigen Stunden und maximal zwei Werktagen dauern. Das Casino bemüht sich, alle Auszahlungsanträge so schnell wie möglich zu verarbeiten.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Spiele bietet MiraxCasino an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MiraxCasino bietet über 5.000 Spiele von führenden Anbietern. Das Angebot umfasst Video-Slots, Tischspiele wie Blackjack und Roulette, Live-Dealer-Spiele von Evolution Gaming sowie verschiedene Spezialspiele. Die Spielebibliothek wird regelmäßig um neue Titel erweitert. Zu den wichtigsten Anbietern zählen Pragmatic Play, NetEnt, Evolution Gaming und Playtech.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich bei MiraxCasino mit Kryptowährungen bezahlen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, MiraxCasino akzeptiert sowohl Fiat-Währungen als auch Kryptowährungen. Zu den unterstützten Kryptowährungen gehören Bitcoin und Ethereum, während Fiat-Zahlungen per Visa, Mastercard und Skrill möglich sind. Diese flexible Zahlungsoption ist einer der größten Vorteile von MiraxCasino und macht es zur idealen Brücke zwischen traditionellen und Krypto-Casinos.",
        },
      },
      {
        "@type": "Question",
        name: "Ist MiraxCasino auf dem Handy spielbar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, MiraxCasino ist vollständig für mobile Geräte optimiert. Die Website reagiert nahtlos auf jede Bildschirmgröße und bietet auf Smartphones und Tablets das gleiche Spielerlebnis wie auf dem Desktop. Ein App-Download ist nicht erforderlich – einfach den Browser öffnen und loslegen. Alle Spiele, Zahlungsoptionen und der Kundenservice sind auch mobil verfügbar.",
        },
      },
    ],
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: c.name,
    description: "MiraxCasino Test 2026 – " + c.bonus + ", " + c.games + " Spiele, " + c.payout + " Auszahlungsrate.",
    image: "https://royalbetguide.com/og/mirax-casino.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: c.rating.toString(),
      bestRating: "10",
      worstRating: "0",
      ratingCount: "1",
    },
    
    additionalProperty: [
      { "@type": "PropertyValue", name: "Spiele", value: gamesRating.toString() },
      { "@type": "PropertyValue", name: "Auszahlungen", value: payoutRating.toString() },
      { "@type": "PropertyValue", name: "Mobile Erfahrung", value: mobileRating.toString() },
      { "@type": "PropertyValue", name: "Kundensupport", value: supportRating.toString() },
      { "@type": "PropertyValue", name: "Boni", value: bonusRating.toString() },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://royalbetguide.com/de/" },
      { "@type": "ListItem", position: 2, name: "Bewertungen", item: "https://royalbetguide.com/de/reviews/" },
      { "@type": "ListItem", position: 3, name: c.name, item: "https://royalbetguide.com/de/reviews/mirax-casino/" },
    ],
  };
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([reviewSchema, faqSchema, organizationSchema, breadcrumbSchema]) }} />

      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Wir verdienen möglicherweise eine Provision, wenn Sie sich über unsere Links anmelden. Spielen Sie verantwortungsbewusst. 18+
      </div>

      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">Startseite</Link>
        <span className="mx-2">→</span>
        <Link href="/de/reviews/" className="hover:text-corg-500">Bewertungen</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">{c.name}</span>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🎰</span>
            <div>
              <h1 className="text-3xl font-extrabold text-white">{c.name} – Test und Bewertung 2026</h1>
              <p className="text-gold-400 font-semibold">{c.bonus}</p>
            </div>
          </div>
          <a href={c.affiliateUrl} target="_blank" rel="nofollow sponsored"
            className="btn-gold whitespace-nowrap">Bonus sichern →</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <span className="rating-badge">⭐ {c.rating}/10</span>
          <span className="text-white/70">🎮 <strong className="text-white">{c.games}</strong> Spiele</span>
          <span className="text-white/70">💰 <strong className="text-corg-green">{c.payout}</strong> Auszahlung</span>
          <span className="text-white/70">📅 Seit <strong className="text-white">{c.established}</strong></span>
          <span className="text-white/70">🔒 <strong className="text-white">{c.license}</strong>-Lizenz</span>
        </div>
      </div>
      <div className="mt-6 text-slate-700 leading-relaxed space-y-4">
        <p>
          Mirax Casino wurde 2021 gegründet und hat sich schnell als Brücke zwischen traditionellen und Krypto-Casinos etabliert. Was Mirax besonders auszeichnet, ist die Möglichkeit sowohl mit Fiat-Währungen als auch mit Kryptowährungen einzuzahlen und abzuheben. Das Casino bietet über 5.000 Spiele von führenden Anbietern.
        </p>
        <p>
          Die Benutzeroberfläche ist modern und benutzerfreundlich gestaltet. Mirax legt großen Wert auf schnelle Auszahlungen – Krypto-Transaktionen werden in der Regel innerhalb weniger Minuten bearbeitet. Die mobile Erfahrung ist erstklassig, mit einer vollständig responsiven Website.
        </p>
        <p>
          Das $500 Willkommenspaket kombiniert mit 200 Freispielen macht es besonders attraktiv für neue Spieler. Das Casino ist in Englisch und Französisch verfügbar. Der Kundenservice ist per E-Mail und Live-Chat erreichbar.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-corg-500/20 bg-corg-500/5 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">⚡</span>
          <h2 className="text-lg font-bold text-corg-600">Kurzüberblick – Die Fakten</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">🔒</span>
            <span><strong>Lizenz:</strong> {c.license}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">📅</span>
            <span><strong>Seit:</strong> {c.established}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">🎮</span>
            <span><strong>Spiele:</strong> {c.games}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">💰</span>
            <span><strong>Auszahlung:</strong> {c.payout}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">⭐</span>
            <span><strong>Bewertung:</strong> {c.rating}/10</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">🏆</span>
            <span><strong>Hervorstechend:</strong> {c.pros[0]}</span>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-400">
          Daten geprüft im {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}. Bitte prüfen Sie die aktuellen Bonusbedingungen auf der Website.
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-corg-green/20 bg-green-50 p-6">
          <h2 className="text-lg font-bold text-corg-green-dark">✅ Vorteile</h2>
          <ul className="mt-3 space-y-2">
            {c.pros.map((p) => <li key={p} className="text-sm text-slate-700">✓ {p}</li>)}
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-50 p-6">
          <h2 className="text-lg font-bold text-red-600">❌ Nachteile</h2>
          <ul className="mt-3 space-y-2">
            {c.cons.map((cn) => <li key={cn} className="text-sm text-slate-700">✗ {cn}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">⭐ Bewertungsübersicht</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">🎮 Spieleauswahl</span>
              <span className="font-bold text-corg-600">{gamesRating}/10</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-corg-500 transition-all" style={{width: gamesRating*10+"%"}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">💰 Auszahlungsquote</span>
              <span className="font-bold text-corg-600">{payoutRating}/10</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-corg-500 transition-all" style={{width: payoutRating*10+"%"}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">📱 Mobile Nutzung</span>
              <span className="font-bold text-corg-600">{mobileRating}/10</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-corg-500 transition-all" style={{width: mobileRating*10+"%"}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">🎧 Kundenservice</span>
              <span className="font-bold text-corg-600">{supportRating}/10</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-corg-500 transition-all" style={{width: supportRating*10+"%"}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">🎁 Bonusangebote</span>
              <span className="font-bold text-corg-600">{bonusRating}/10</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-corg-500 transition-all" style={{width: bonusRating*10+"%"}}></div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-corg-500/5 p-3">
            <div className="text-center">
              <span className="text-2xl font-extrabold text-corg-600">{c.rating}</span>
              <span className="text-sm text-slate-400">/10</span>
              <p className="text-xs text-slate-500">Gesamtbewertung</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">🎮 Spielauswahl</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          MiraxCasino bietet eine beeindruckende Sammlung von über 5.000 Spielen von führenden Anbietern. Die Spielebibliothek umfasst eine breite Palette an Video-Slots, Tischspielen, Live-Dealer-Spielen und Spezialtiteln. Zu den wichtigsten Anbietern zählen Pragmatic Play, NetEnt, Evolution Gaming und Playtech, die für hochwertige Grafiken, faire Spielmechaniken und innovative Features bekannt sind.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Die Slot-Auswahl ist besonders umfangreich und beinhaltet beliebte Titel wie Book of Dead, Starburst und Wolf Gold sowie zahlreiche Megaways-Slots und progressive Jackpots mit attraktiven Gewinnmöglichkeiten. Neue Spiele werden regelmäßig in die Lobby aufgenommen, sodass die Auswahl stets aktuell bleibt.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Für Fans von Tischspielen stehen mehrere Varianten von Blackjack, Roulette, Baccarat und Poker zur Verfügung. Das Live-Dealer-Angebot von Evolution Gaming streamt in HD-Qualität und bietet ein authentisches Casino-Erlebnis mit echten Dealern – direkt auf den Bildschirm gebracht. MiraxCasino bietet zudem eine Suchfunktion und Filteroptionen, die das Navigieren durch die umfangreiche Spielebibliothek erleichtern.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">💳 Ein- und Auszahlungen</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          MiraxCasino akzeptiert sowohl traditionelle Zahlungsmethoden als auch Kryptowährungen. Zu den Fiat-Optionen gehören Visa, Mastercard und Skrill, während Bitcoin und Ethereum als Kryptowährungen unterstützt werden. Diese Flexibilität ist einer der größten Vorteile von MiraxCasino und macht es zur idealen Wahl für Spieler, die beide Welten nutzen möchten.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Die Mindesteinzahlung ist moderat und für die meisten Spieler erschwinglich. Krypto-Transaktionen werden in der Regel innerhalb weniger Minuten bearbeitet, während traditionelle Zahlungsmethoden etwas länger dauern können. Das Casino erhebt keine zusätzlichen Gebühren für Transaktionen, was es zu einer kosteneffizienten Wahl macht.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Besonders hervorzuheben sind die schnellen Auszahlungen – Krypto-Abhebungen erfolgen oft innerhalb von Minuten. Fiat-Auszahlungen werden ebenfalls zügig bearbeitet, typischerweise innerhalb von 24 bis 48 Stunden. Die Kombination aus Fiat- und Krypto-Optionen macht MiraxCasino zu einer der flexibelsten Plattformen auf dem Markt.
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">💳 Akzeptierte Zahlungsmethoden</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.payments.map((p) => (
            <span key={p} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{p}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">🎮 Spielanbieter</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.providers.map((p) => (
            <span key={p} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{p}</span>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Entdecken Sie unsere <Link href="/de/spiele/" className="text-corg-500 hover:underline">Spieleführer</Link> für detaillierte Anbieterbewertungen und Spielempfehlungen.
        </p>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">📱 Mobile Erfahrung</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          MiraxCasino bietet eine hervorragende mobile Spielerfahrung über den Browser. Die Website ist vollständig responsive und passt sich nahtlos an jede Bildschirmgröße an – egal ob Smartphone oder Tablet. Ein App-Download ist nicht erforderlich, was den Einstieg besonders unkompliziert macht.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Die Navigation auf dem Handy ist intuitiv gestaltet, mit übersichtlichen Kategorien und einer effektiven Suchfunktion. Spiele laden schnell sowohl über WLAN als auch über mobile Datenverbindungen. Die mobile Oberfläche wurde für die Touchscreen-Bedienung optimiert.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Alle Funktionen der Desktop-Version – Einzahlungen, Auszahlungen, Kundenservice und Spielzugriff – sind auch mobil in vollem Umfang verfügbar. Das mobile Casino unterstützt sowohl Hoch- als auch Querformat, und die Spiele skalieren automatisch auf die verfügbare Bildschirmfläche. Die mobile Erfahrung gehört zu den Stärken von MiraxCasino.
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">🎧 Kundenservice</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          MiraxCasino bietet einen Kundenservice per E-Mail und Live-Chat. Das Support-Team ist für seine schnellen Reaktionszeiten bekannt – Live-Chat-Anfragen werden in der Regel innerhalb weniger Minuten beantwortet. Die Mitarbeiter sind gut geschult und können bei Fragen zu Kontoverwaltung, Boni, Zahlungen und technischen Problemen helfen.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Der E-Mail-Support ist ebenfalls zuverlässig, mit Antwortzeiten von in der Regel 2 bis 4 Stunden. Die FAQ-Sektion auf der Website bietet Antworten auf die häufigsten Fragen zu Kontoerstellung, Bonusbedingungen, Ein- und Auszahlungen sowie Sicherheit.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Insgesamt bietet MiraxCasino einen soliden Kundenservice, der die Bedürfnisse der meisten Spieler abdeckt. Die Kombination aus Live-Chat, E-Mail-Support und einer hilfreichen FAQ sorgt für eine gute Spielerfahrung.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">📊 MiraxCasino im Vergleich</h2>
        <p className="mt-2 text-sm text-slate-500">So schneidet MiraxCasino im Vergleich zu den Schwestermarken KatsuBet und 7BitCasino ab.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2 pr-4 font-semibold text-slate-600">Casino</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Bewertung</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Bonus</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Auszahlung</th>
                <th className="py-2 px-4 font-semibold text-slate-600">Spiele</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 bg-corg-500/5 font-medium">
                <td className="py-3 pr-4">
                  <span className="text-corg-600">{c.name} <span className="text-xs text-slate-400">(Sie sind hier)</span></span>
                </td>
                <td className="py-3 px-4">{c.rating}/10</td>
                <td className="py-3 px-4 text-xs">{c.bonus}</td>
                <td className="py-3 px-4">{c.payout}</td>
                <td className="py-3 px-4">{c.games}</td>
              </tr>
              {COMPARISON_CASINOS.map((s, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 pr-4">
                    <Link href={"/de/reviews/" + s.slug + "/"} className="text-corg-500 hover:underline">{s.name}</Link>
                  </td>
                  <td className="py-3 px-4">{s.rating}/10</td>
                  <td className="py-3 px-4 text-xs">{s.bonus}</td>
                  <td className="py-3 px-4">{s.payout}</td>
                  <td className="py-3 px-4">{s.games}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Bewertungen basieren auf unseren Experten-Tests. Bitte prüfen Sie die aktuellen Geschäftsbedingungen vor Inanspruchnahme eines Bonus.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Ist MiraxCasino sicher und seriös?</h3>
            <p className="mt-2 text-sm text-slate-500">Ja, MiraxCasino ist vollständig lizenziert durch die Regierung von Curacao und verwendet branchenübliche SSL-Verschlüsselung zum Schutz aller Spielerdaten. Das Casino arbeitet mit renommierten Spielanbietern zusammen und unterliegt regelmäßigen Überprüfungen seiner Zufallszahlengeneratoren.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Welchen Willkommensbonus bietet MiraxCasino?</h3>
            <p className="mt-2 text-sm text-slate-500">Neue Spieler bei MiraxCasino erhalten ein Willkommenspaket von {c.bonus}. Dieses Paket verteilt sich auf die ersten Einzahlungen und bietet sowohl Fiat- als auch Krypto-Nutzern flexible Einsatzmöglichkeiten. Bitte beachten Sie die Umsatzbedingungen vor der Inanspruchnahme.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Wie schnell sind Auszahlungen bei MiraxCasino?</h3>
            <p className="mt-2 text-sm text-slate-500">MiraxCasino ist bekannt für schnelle Auszahlungen. Krypto-Transaktionen werden in der Regel innerhalb weniger Minuten bearbeitet, während Fiat-Auszahlungen zwischen einigen Stunden und maximal zwei Werktagen dauern. Das Casino bemüht sich, alle Anträge so schnell wie möglich zu verarbeiten.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Welche Spiele bietet MiraxCasino an?</h3>
            <p className="mt-2 text-sm text-slate-500">MiraxCasino bietet über 5.000 Spiele von führenden Anbietern wie Pragmatic Play, NetEnt, Evolution Gaming und Playtech. Das Angebot umfasst Video-Slots, Tischspiele, Live-Dealer-Spiele und Spezialspiele. Die Bibliothek wird regelmäßig um neue Titel erweitert.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Kann ich bei MiraxCasino mit Kryptowährungen bezahlen?</h3>
            <p className="mt-2 text-sm text-slate-500">Ja, MiraxCasino akzeptiert sowohl Fiat-Währungen als auch Kryptowährungen. Zu den unterstützten Kryptowährungen gehören Bitcoin und Ethereum, während Fiat-Zahlungen per Visa, Mastercard und Skrill möglich sind. Diese Flexibilität ist einer der größten Vorteile des Casinos.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Ist MiraxCasino auf dem Handy spielbar?</h3>
            <p className="mt-2 text-sm text-slate-500">Ja, MiraxCasino ist vollständig für mobile Geräte optimiert. Die Website reagiert nahtlos auf jede Bildschirmgröße und bietet auf Smartphones und Tablets das gleiche Spielerlebnis wie auf dem Desktop. Ein App-Download ist nicht erforderlich.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">🏆 Unser Fazit</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          MiraxCasino erhält von unseren Experten eine solide Bewertung von {c.rating}/10. Mit über {c.games} Spielen, einer Auszahlungsrate von {c.payout} und der einzigartigen Kombination aus Fiat- und Krypto-Zahlungen ist es eine ausgezeichnete Wahl für Spieler, die maximale Flexibilität suchen. Das moderne Design und die schnellen Auszahlungen runden das positive Gesamtbild ab.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Wir empfehlen MiraxCasino besonders für Spieler, die sowohl mit Fiat-Währungen als auch mit Kryptowährungen spielen möchten und Wert auf eine moderne, benutzerfreundliche Oberfläche legen. Das $500 Willkommenspaket kombiniert mit 200 Freispielen bietet einen attraktiven Einstieg. Wie bei jedem Online-Casino empfehlen wir, die Bonusbedingungen sorgfältig zu lesen und stets verantwortungsbewusst zu spielen.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Bereit, bei MiraxCasino zu spielen?</h3>
        <p className="mt-2 text-white/70">Sichern Sie sich Ihren exklusiven Willkommensbonus und starten Sie noch heute.</p>
        <a href={c.affiliateUrl} target="_blank" rel="nofollow sponsored"
          className="btn-gold mt-4 inline-flex">{c.bonus} sichern →</a>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block rounded-lg border border-corg-500/20 bg-corg-500/5 px-6 py-4">
          <p className="text-sm text-slate-600">
            📊 Vergleichen Sie <strong>MiraxCasino</strong> mit anderen Top-Casinos
          </p>
          <Link
            href="/de/compare/7bit-katsubet-mirax/"
            className="mt-2 inline-block text-sm font-semibold text-corg-500 hover:underline"
          >
            Zum vollständigen Vergleich: 7BitCasino vs KatsuBet vs MiraxCasino →
          </Link>
        </div>
      </div>
    </div>
  );
}
