import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casinos Pragmatic Play 2026 - Slots y Juegos Populares",
  description: "Casinos con Pragmatic Play 2026: Gates of Olympus, Sweet Bonanza, Big Bass Bonanza. Descubre dónde jugar a las mejores slots.",
  alternates: { canonical: "https://royalbetguide.com/es/games/pragmatic-play-casinos/" },
};

export default function PragmaticEsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/games/" className="hover:text-corg-500">Juegos</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Pragmatic Play</span>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Proveedor</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Casinos Pragmatic Play 2026</h1>
        <p className="mt-2 text-slate-500">Las mejores slots Pragmatic Play y dónde jugarlas</p>
      </div>
      <div className="space-y-6 leading-relaxed text-slate-700">
        <p>Pragmatic Play es uno de los proveedores de juegos de casino online más grandes e innovadores del mundo. Fundado en 2015, cuenta con más de 300 slots de alta calidad, juegos de mesa y casino en vivo.</p>
        <h2 className="text-xl font-bold text-corg-600">Top Juegos Pragmatic Play</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Gates of Olympus</h3><p className="text-sm text-slate-500">RTP 96,50% - Volatilidad Alta. Multiplicadores hasta 500x. Giro gratis con multiplicador progresivo hasta 15x. Ganancia máxima 5.000x.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Sweet Bonanza</h3><p className="text-sm text-slate-500">RTP 96,48% - Volatilidad Alta. Multiplicadores ilimitados en giros gratis. Función de compra de bono disponible.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Big Bass Bonanza</h3><p className="text-sm text-slate-500">RTP 96,71% - Volatilidad Media. Pesca con multiplicadores. Giro gratis con símbolos de pez para multiplicadores crecientes.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Wolf Gold</h3><p className="text-sm text-slate-500">RTP 96,01% - Volatilidad Media. Jackpot fijo, giros gratis con sticky wild y respin. Temática de animales americanos.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">The Dog House Megaways</h3><p className="text-sm text-slate-500">RTP 96,15% - Volatilidad Alta. Megaways con hasta 117.649 formas de ganar. Sticky wild con multiplicadores hasta 3x.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Sugar Rush</h3><p className="text-sm text-slate-500">RTP 96,50% - Volatilidad Alta. Estilo moderno y colorido. Mecánica cluster pays con multiplicadores posicionales.</p></div>
        </div>
        <h2 className="text-xl font-bold text-corg-600">Dónde Jugar a las Slots Pragmatic Play</h2>
        <p>Los mejores casinos para slots Pragmatic Play para jugadores españoles son:</p>
        <ul className="list-inside list-disc space-y-1">
          <li><Link href="/es/reviews/7bit-casino/" className="text-corg-500 hover:underline">7BitCasino</Link> - Más de 70 slots Pragmatic Play, torneos Drops-and-Wins activos</li>
          <li><Link href="/es/reviews/katsubet/" className="text-corg-500 hover:underline">KatsuBet</Link> - Amplia selección Pragmatic Play con promociones dedicadas</li>
          <li><Link href="/es/reviews/mirax-casino/" className="text-corg-500 hover:underline">MiraxCasino</Link> - Slots Pragmatic Play con cashback semanal</li>
        </ul>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Juega a Gates of Olympus hoy</h2>
        <p className="mt-2 text-white/70">Regístrate en 7BitCasino y prueba las mejores slots Pragmatic Play.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jugar Ahora →</a>
      </div>
    </div>
  );
}
