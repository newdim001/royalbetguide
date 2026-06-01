import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reseñas de Casinos 2026 - Todos Nuestros Tests Verificados",
  description: "Reseñas detalladas de los mejores casinos online 2026. 7BitCasino, KatsuBet y MiraxCasino probados por nuestros expertos con valoraciones honestas.",
  alternates: { canonical: "https://royalbetguide.com/es/reviews/" },
};

const REVIEWS = [
  { name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Giros Gratis", payout: "97.6%", games: "7000+", slug: "7bit-casino", imgSlug: "7bitcasino", summary: "Crypto casino pionero desde 2014. 7000+ juegos de 70+ proveedores. El mejor crypto casino para españoles en 2026." },
  { name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Giros Gratis", payout: "96.4%", games: "7000+", slug: "katsubet", imgSlug: "katsubet", summary: "Casino de temática japonesa con torneos Drops-and-Wins. Bono generoso con requisitos 35x. Ideal para amantes de slots." },
  { name: "MiraxCasino", rating: 8.2, bonus: "$500 + 200 Giros Gratis", payout: "96.3%", games: "5000+", slug: "mirax-casino", imgSlug: "miraxcasino", summary: "Casino premium con cashback 25% y límites altos. Perfecto para high rollers. Acepta pagos fiat y crypto." },
];

export default function ReviewsEsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Reseñas</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Reseñas 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Reseñas de Casinos 2026</h1>
        <p className="mt-2 text-slate-500">Todos nuestros tests verificados y valoraciones imparciales</p>
      </div>
      <div className="grid gap-6">
        {REVIEWS.map(r => (
          <Link key={r.slug} href={"/es/reviews/" + r.slug + "/"} className="card-gradient-border group">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-3xl"><CasinoLogo slug={r.imgSlug || r.slug} name={r.name} size={48} /></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{r.name}</h2>
                    <span className="rating-badge"><span>{'★'}</span><span>{r.rating}</span></span>
                  </div>
                  <p className="text-sm font-semibold text-gold-500">{r.bonus}</p>
                  <p className="mt-1 text-sm text-slate-500">{r.summary}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="text-xs text-corg-green">RTP: {r.payout}</span>
                    <span className="text-xs text-slate-400">|</span>
                    <span className="text-xs text-slate-500">{r.games} juegos</span>
                  </div>
                </div>
              </div>
              <span className="text-sm font-semibold text-corg-500 whitespace-nowrap">Lee la reseña →</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Cómo Probamos los Casinos</h2>
        <p>Cada casino de nuestra lista pasa por un riguroso proceso de prueba que evalúa cinco categorías: licencia y seguridad (25%), selección de juegos (20%), bonos y promociones (20%), velocidad de retiros (15%), atención al cliente (10%) y usabilidad móvil (10%).</p>
        <p>Nuestros expertos tienen más de 10 años de experiencia en el sector. Probamos cada casino personalmente, realizando depósitos reales, probando los juegos y retirando ganancias.</p>
        <p>No aceptamos pagos por reseñas positivas. Nuestras valoraciones son honestas e imparciales.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">¿No sabes qué casino elegir?</h2>
        <p className="mt-2 text-white/70">Compara los tres casinos recomendados.</p>
        <Link href="/es/compare/7bit-katsubet-mirax/" className="btn-gold mt-4 inline-flex">Compara los Casinos →</Link>
      </div>
    </div>
  );
}
