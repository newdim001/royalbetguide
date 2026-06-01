import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blackjack Online 2026 \u2013 Regeln, Strategien ",
  description: "Blackjack Online 2026: Vollst\u00e4ndiger Guide mit Regeln, Basic Strategy und Profitipps.",
  alternates: { canonical: "https://royalbetguide.com/de/guides/blackjack/" },
};

export default function BlackjackGuidePage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Blackjack Online 2026 \u2013 Regeln und Strategien", description: "Vollst\u00e4ndiger Blackjack Guide mit Regeln, Basic Strategy und Kartenz\u00e4hlen.", author: { "@type": "Person", name: "Michael Weber" }, publisher: { "@type": "Organization", name: "Royal Bet Guide", logo: { "@type": "ImageObject", url: "https://royalbetguide.com/logo.svg" } }, datePublished: "2026-06-01", dateModified: "2026-06-01" };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Wir verdienen m\u00f6glicherweise eine Provision. Spielen Sie verantwortungsbewusst. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">Startseite</Link>
        <span className="mx-2">→</span>
        <Link href="/de/guides/" className="hover:text-corg-500">Ratgeber</Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Blackjack</span>
      </div>
      <article>
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Ratgeber</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600">Blackjack Online 2026 \u2013 Regeln und Strategien</h1>
        <p className="mt-2 text-sm text-slate-400">Von Michael Weber • Aktualisiert Juni 2026</p>
        <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
          <p>Blackjack ist das beliebteste Kartenspiel in Online-Casinos. Mit der richtigen Strategie geh\u00f6rt es zu den Spielen mit den besten Gewinnchancen \u2013 der Hausvorteil kann auf unter 0,5 Prozent gesenkt werden.</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Die Grundregeln</h2>
          <p>Ziel ist es, mit Ihren Karten n\u00e4her an 21 Punkte zu kommen als der Dealer, ohne zu überbieten. Kartenwerte: 2-10 z\u00e4hlen ihren Wert, Bilder z\u00e4hlen 10, das Ass z\u00e4hlt 1 oder 11. Ein Blackjack (Ass + 10er-Karte) zahlt 3:2.</p>
          <p><strong>Aktionen:</strong> Hit (Karte ziehen), Stand (stehen bleiben), Double Down (Einsatz verdoppeln, eine Karte), Split (H\u00e4nde teilen), Surrender (aufgeben, halben Einsatz zurück).</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Die Basic Strategy</h2>
          <p>Die mathematisch optimierte Basic Strategy minimiert den Hausvorteil. Wichtigste Regeln: Bei 17+ stehen bleiben, bei 12-16 gegen 2-6 stehen, gegen 7+ ziehen. Asse und 8er immer splitten. Double Down bei 11 gegen jede Karte.</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Kartenz\u00e4hlen</h2>
          <p>Das Hi-Lo-System: 2-6 = +1, 7-9 = 0, 10-Ass = -1. In Online-Casinos meist wirkungslos wegen automatisierter Mischung. Für Online-Blackjack ist die Basic Strategy praktikabler.</p>
          <h2 className="mb-3 mt-8 text-xl font-bold text-corg-600">Varianten 2026</h2>
          <p>Classic Blackjack, European Blackjack, Live Dealer Blackjack, Infinite Blackjack und Blackjack Switch. <Link href="/de/reviews/7bit-casino/" className="text-corg-500 hover:underline font-semibold">7BitCasino</Link> bietet eine hervorragende Auswahl mit niedrigen Mindesteins\u00e4tzen.</p>
        </div>
      </article>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Blackjack online spielen</h3>
        <p className="mt-2 text-white/70">Testen Sie Ihre Strategie bei 7BitCasino.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jetzt spielen →</a>
      </div>
    </div>
  );
}
