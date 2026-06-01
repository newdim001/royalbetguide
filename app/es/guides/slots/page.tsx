import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía de Tragamonedas 2026 - RTP, Volatilidad y Estrategias",
  description: "Guía completa de tragamonedas 2026: cómo funcionan, RTP, volatilidad, mecánicas Megaways y compra de bono.",
  alternates: { canonical: "https://royalbetguide.com/es/guides/slots/" },
};

export default function GuideSlotsEsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/guides/" className="hover:text-corg-500">Guías</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Tragamonedas</span>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Guía</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Guía de Tragamonedas 2026</h1>
        <p className="mt-2 text-slate-500">RTP, volatilidad, mecánicas y estrategias para slots online</p>
      </div>
      <div className="space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Cómo Funcionan las Tragamonedas</h2>
        <p>Las tragamonedas modernas utilizan un generador de números aleatorios (RNG) para determinar cada giro. El RNG genera miles de números por segundo y, al pulsar el botón, el número en ese instante determina la combinación ganadora. Cada giro es independiente del anterior.</p>
        <h2 className="text-xl font-bold text-corg-600">RTP (Return to Player)</h2>
        <p>El RTP es el porcentaje teórico de retorno al jugador. Una slot con RTP del 96% devuelve 96€ por cada 100€ jugados. Esto se calcula en millones de giros, no en una sola sesión.</p>
        <h2 className="text-xl font-bold text-corg-600">Volatilidad</h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Baja:</strong> Ganancias frecuentes pero pequeñas. Ideal para sesiones largas.</li>
          <li><strong>Media:</strong> Equilibrio entre frecuencia e importe. La mejor opción para la mayoría.</li>
          <li><strong>Alta:</strong> Ganancias raras pero potencialmente enormes. Requiere paciencia y bankroll.</li>
        </ul>
        <h2 className="text-xl font-bold text-corg-600">Mecánicas Populares</h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Megaways:</strong> Hasta 117.649 formas de ganar. Los carretes cambian de altura.</li>
          <li><strong>Cluster Pays:</strong> Ganancias agrupando símbolos adyacentes.</li>
          <li><strong>Tumbling/Avalancha:</strong> Símbolos ganadores se eliminan y caen nuevos.</li>
          <li><strong>Compra de Bono:</strong> Paga un importe fijo para acceder a los giros gratis.</li>
        </ul>
        <h2 className="text-xl font-bold text-corg-600">Consejos para Jugar a las Slots</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Elige slots con RTP alto (más del 96%)</li>
          <li>Establece un presupuesto y respétalo</li>
          <li>Prueba las slots en modo demo primero</li>
          <li>Conoce la volatilidad de la slot que juegas</li>
          <li>No persigas las pérdidas</li>
        </ul>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">¿Listo para probar las slots?</h2>
        <p className="mt-2 text-white/70">Regístrate en 7BitCasino y consigue 250 giros gratis.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jugar a las Slots →</a>
      </div>
    </div>
  );
}
