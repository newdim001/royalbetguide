import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roulette Online 2026 – Varianten, Strategien und Tipps",
  description: "Roulette Online 2026: Europäisches, amerikanisches und französisches Roulette im Vergleich mit Strategien und Quoten.",
  alternates: { canonical: "https://royalbetguide.com/de/guides/roulette/" },
};

export default function RouletteGuidePage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Roulette Online 2026 – Varianten und Strategien", description: "Der komplette Roulette-Guide mit allen Varianten.", author: { "@type": "Person", name: "Michael Weber" }, publisher: { "@type": "Organization", name: "Royal Bet Guide", logo: { "@type": "ImageObject", url: "https://royalbetguide.com/logo.svg" } }, datePublished: "2026-06-01", dateModified: "2026-06-01" };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Wir verdienen möglicherweise eine Provision. Spielen Sie verantwortungsbewusst. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">Startseite</Link>
        <span className="mx-2">→</span>
        <Link href="/de/guides/" className="hover:text-corg-500">Ratgeber</Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Roulette</span>
      </div>
      <article>
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Ratgeber</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600">Roulette Online 2026 – Varianten und Strategien</h1>
        <p className="mt-2 text-sm text-slate-400">Von Michael Weber • Aktualisiert Juni 2026</p>
        <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
          <p>Roulette gehört zu den ikonischsten Casino-Spielen. Die Wahl der richtigen Variante hat direkten Einfluss auf Ihre Gewinnchancen.</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Die Roulette-Varianten</h2>
          <p><strong>Europäisch:</strong> 37 Fächer (0-36). Hausvorteil: 2,7 Prozent.</p>
          <p><strong>Amerikanisch:</strong> 38 Fächer (0, 00, 1-36). Hausvorteil: 5,26 Prozent.</p>
          <p><strong>Französisch:</strong> 37 Fächer mit La-Partage-Regel. Hausvorteil: nur 1,35 Prozent.</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Wettarten</h2>
          <p><strong>Innenwetten:</strong> Plein (35:1), Cheval (17:1), Transversale (11:1), Carre (8:1).</p>
          <p><strong>Außenwetten:</strong> Rot/Schwarz (1:1), Gerade/Ungerade (1:1), Dutzend (2:1).</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Strategien</h2>
          <p><strong>Martingale:</strong> Einsatz nach Verlust verdoppeln.</p>
          <p><strong>Fibonacci:</strong> Konservativer, basiert auf Fibonacci-Folge.</p>
          <p><strong>D'Alembert:</strong> Ideal für Einsteiger.</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Live Dealer Roulette</h2>
          <p><Link href="/de/reviews/7bit-casino/" className="text-corg-500 hover:underline font-semibold">7BitCasino</Link> bietet die komplette Evolution Gaming Palette mit Lightning Roulette.</p>
        </div>
      </article>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Roulette online erleben</h3>
        <p className="mt-2 text-white/70">Spielen Sie Roulette bei 7BitCasino.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jetzt roulettespielen →</a>
      </div>
    </div>
  );
}
