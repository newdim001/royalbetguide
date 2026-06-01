import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blackjack Online 2026 - Reglas y Estrategias Ganadoras",
  description: "Guía del blackjack online 2026: reglas, estrategia básica, conteo de cartas. Aprende a jugar al blackjack y aumenta tus posibilidades de ganar.",
  alternates: { canonical: "https://royalbetguide.com/es/guides/blackjack/" },
};

export default function BlackjackEsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/guides/" className="hover:text-corg-500">Guías</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Blackjack</span>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Guía</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Blackjack Online 2026</h1>
        <p className="mt-2 text-slate-500">Reglas, estrategia básica y consejos para ganar</p>
      </div>
      <div className="space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Reglas del Blackjack</h2>
        <p>El blackjack, también conocido como 21, es uno de los juegos de casino más populares. El objetivo es vencer al crupier consiguiendo una puntuación más alta sin superar 21. Cada carta vale su valor numérico, las figuras valen 10 y el as vale 1 u 11.</p>
        <p>Al inicio recibes dos cartas descubiertas, mientras el crupier tiene una descubierta y una oculta. Puedes pedir carta (hit) o plantarte (stand). También puedes doblar (double down), dividir pares (split) o tomar un seguro (insurance).</p>
        <h2 className="text-xl font-bold text-corg-600">Estrategia Básica del Blackjack</h2>
        <p>La estrategia básica es un conjunto de reglas matemáticas para la jugada óptima en cada situación. Siguiéndola, reduces la ventaja de la casa a menos del 0,5%.</p>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Manos duras (sin as):</strong> Con 12-16 y el crupier muestra 2-6, planta. Si muestra 7 o más, pide carta.</li>
          <li><strong>Manos blandas (con as):</strong> Con A-7 (soft 18), planta si el crupier muestra 2-8, pide carta si muestra 9, 10 o A.</li>
          <li><strong>Pares:</strong> Divide siempre A-A y 8-8. Divide 2-2 y 3-3 si el crupier muestra 4-7.</li>
          <li><strong>Doblar:</strong> Dobla con 11 contra cualquier carta. Dobla con 10 contra 2-9.</li>
        </ul>
        <h2 className="text-xl font-bold text-corg-600">Conteo de Cartas</h2>
        <p>El conteo de cartas es una técnica avanzada que rastrea las cartas altas y bajas restantes en la baraja. El sistema Hi-Lo asigna +1 a las cartas 2-6, 0 a las 7-9 y -1 a las figuras y ases. Cuando el conteo es positivo, hay más cartas altas, lo que favorece al jugador.</p>
        <h2 className="text-xl font-bold text-corg-600">Variantes de Blackjack</h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Blackjack Europeo:</strong> El crupier recibe una sola carta inicial y la segunda tras la acción del jugador.</li>
          <li><strong>Blackjack Americano:</strong> El crupier recibe dos cartas iniciales. Si tiene blackjack, el juego termina.</li>
          <li><strong>Pontoon:</strong> Variante británica con ambas cartas del banco ocultas.</li>
          <li><strong>Spanish 21:</strong> Barajas de 48 cartas (sin 10) con pagos de bono.</li>
        </ul>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">¿Listo para poner en práctica la estrategia?</h2>
        <p className="mt-2 text-white/70">Regístrate en 7BitCasino y juega al blackjack en vivo con Evolution Gaming.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jugar al Blackjack →</a>
      </div>
    </div>
  );
}
