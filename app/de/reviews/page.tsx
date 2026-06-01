import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino Bewertungen 2026 – Alle Tests im Überblick ",
  description: "Alle Casino Bewertungen 2026 im Überblick. Geprüfte Online-Casinos mit Bewertungen, Boni und Erfahrungen.",
  alternates: { canonical: "https://royalbetguide.com/de/reviews/" },
};

const CASINOS = [
  { slug: "7bit-casino", name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Freispiele", payout: "97.6%", games: "7000+", imgSlug: "7bitcasino", desc: "Krypto-Pionier seit 2014 mit über 7.000 Spielen und exzellentem VIP-Programm." },
  { slug: "katsubet", name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Freispiele", payout: "96.4%", games: "7000+", imgSlug: "katsubet", desc: "Asiatisch inspiriertes Krypto-Casino mit großer Slot-Auswahl und Turnieren." },
  { slug: "mirax-casino", name: "MiraxCasino", rating: 8.2, bonus: "500 € + 200 Freispiele", payout: "96.3%", games: "5000+", imgSlug: "miraxcasino", desc: "Modernes Casino mit Fiat- und Krypto-Zahlungen." },
];

export default function ReviewsListingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Wir verdienen möglicherweise eine Provision. Spielen Sie verantwortungsbewusst. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/de/" className="hover:text-corg-500">Startseite</Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Bewertungen</span>
      </div>
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Geprüft &amp; Bewertet</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Casino Bewertungen 2026</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">Alle Casino-Tests im Überblick.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASINOS.map((c) => (
          <Link key={c.slug} href={'/de/reviews/' + c.slug + '/'} className="card-gradient-border group flex flex-col">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <CasinoLogo slug={c.imgSlug || c.slug} name={c.name} size={48} />
                <div>
                  <h3 className="text-lg font-bold text-corg-600 group-hover:text-corg-500">{c.name}</h3>
                  <p className="text-sm text-gold-500 font-semibold">{c.bonus}</p>
                </div>
              </div>
              <div className="rating-badge"><span>★</span><span>{c.rating}</span></div>
            </div>
            <p className="mt-3 flex-1 text-sm text-slate-500">{c.desc}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200 pt-3 text-center text-xs">
              <div><span className="block font-semibold text-corg-600">{c.payout}</span><span className="text-slate-400">Auszahlung</span></div>
              <div><span className="block font-semibold text-corg-600">{c.games}</span><span className="text-slate-400">Spiele</span></div>
              <div><span className="block font-semibold text-corg-600">{c.rating}/10</span><span className="text-slate-400">Bewertung</span></div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs text-slate-500">Experten-Test</span>
              <span className="text-sm font-semibold text-corg-500">Bewertung lesen →</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Noch mehr Casinos entdecken</h3>
        <p className="mt-2 text-white/70">Wir arbeiten ständig an neuen Bewertungen.</p>
        <Link href="/de/" className="btn-gold mt-4 inline-flex">Zurück zur Startseite →</Link>
      </div>
    </div>
  );
}
