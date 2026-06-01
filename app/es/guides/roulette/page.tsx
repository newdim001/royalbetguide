import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruleta Online 2026 - Variantes y Estrategias Ganadoras",
  description: "Guía de la ruleta online 2026: ruleta europea, americana y francesa. Estrategias, apuestas y consejos para ganar a la ruleta.",
  alternates: { canonical: "https://royalbetguide.com/es/guides/roulette/" },
};

export default function RouletteEsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/guides/" className="hover:text-corg-500">Guías</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Ruleta</span>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Guía</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Ruleta Online 2026</h1>
        <p className="mt-2 text-slate-500">Variantes, reglas y estrategias de la ruleta</p>
      </div>
      <div className="space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Las Variantes de la Ruleta</h2>
        <p>Existen tres variantes principales de la ruleta, cada una con características diferentes.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Ruleta Europea</h3><p className="text-sm text-slate-500">Un solo cero (0), 37 números. Ventaja de la casa del 2,7%.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Ruleta Americana</h3><p className="text-sm text-slate-500">Doble cero (0 y 00), 38 números. Ventaja del 5,26%. Evitable.</p></div>
          <div className="card-gradient-border p-4"><h3 className="font-bold text-corg-600">Ruleta Francesa</h3><p className="text-sm text-slate-500">Reglas La Partage y En Prison. Ventaja de solo 1,35%.</p></div>
        </div>
        <h2 className="text-xl font-bold text-corg-600">Tipos de Apuestas</h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Apuestas internas:</strong> Pleno (35:1), Caballo (17:1), Calle (11:1), Cuadro (8:1), Sexteto (5:1)</li>
          <li><strong>Apuestas externas:</strong> Rojo/Negro (1:1), Par/Impar (1:1), Pasa/Falta (1:1), Docenas (2:1), Columnas (2:1)</li>
        </ul>
        <h2 className="text-xl font-bold text-corg-600">Estrategias para la Ruleta</h2>
        <h3 className="text-lg font-bold text-corg-600">Estrategia Martingala</h3>
        <p>Dobla la apuesta tras cada pérdida, apostando a chances simples (rojo/negro). Al ganar, recuperas todas las pérdidas anteriores. Requiere un bankroll consistente.</p>
        <h3 className="text-lg font-bold text-corg-600">Estrategia Fibonacci</h3>
        <p>Basada en la secuencia de Fibonacci (1,1,2,3,5,8,13...). Tras perder, aumentas la apuesta siguiendo la secuencia. Más segura que la Martingala.</p>
        <h3 className="text-lg font-bold text-corg-600">Estrategia D'Alembert</h3>
        <p>Aumentas una unidad tras perder y reduces una unidad tras ganar. Enfoque equilibrado sin grandes riesgos.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Prueba la ruleta en vivo hoy</h2>
        <p className="mt-2 text-white/70">Regístrate y juega a la ruleta con crupier en vivo.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jugar a la Ruleta →</a>
      </div>
    </div>
  );
}
