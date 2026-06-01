import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bono KatsuBet 2026 - 325% + 200 Giros Gratis",
  description: "Bono KatsuBet 2026: 325% hasta 3 BTC + 200 giros gratis. Torneos slots, requisitos 35x. Guía completa del bono de bienvenida.",
  alternates: { canonical: "https://royalbetguide.com/es/bonus/katsubet/" },
};

export default function BonusKatsuEsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/bonus/" className="hover:text-corg-500">Bonos</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Bono KatsuBet</span>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8 text-center">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">Oferta Exclusiva</span>
        <h1 className="mt-4 text-3xl font-extrabold text-white">Bono KatsuBet 2026</h1>
        <p className="mt-2 text-2xl font-bold text-gold-400">325% + 200 Giros Gratis</p>
        <p className="mt-2 text-white/70">Hasta 3 BTC de bono de bienvenida para nuevos jugadores</p>
        <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored" className="btn-gold mt-6 inline-flex">Solicita el Bono →</a>
      </div>
      <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Paquete de Bienvenida</h2>
        <p>KatsuBet ofrece un generoso paquete del 325% hasta 3 BTC + 200 giros gratis, distribuido en los primeros tres depósitos.</p>
        <div className="card-gradient-border space-y-3 p-5">
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">1</span><div><strong>Primer depósito:</strong> 100% hasta 1 BTC + 100 giros gratis</div></div>
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">2</span><div><strong>Segundo depósito:</strong> 75% hasta 1 BTC + 50 giros gratis</div></div>
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">3</span><div><strong>Tercer depósito:</strong> 150% hasta 1 BTC + 50 giros gratis</div></div>
        </div>
        <h2 className="text-xl font-bold text-corg-600">Torneos y Promociones</h2>
        <p>Además del bono de bienvenida, KatsuBet organiza torneos Drops-and-Wins con premios en efectivo, bonos reload semanales y cashback.</p>
        <h2 className="text-xl font-bold text-corg-600">Requisitos de Apuesta</h2>
        <p>Requisitos de wagering: 35x, inferiores a la media del sector (40x). Las slots contribuyen al 100%.</p>
        <h2 className="text-xl font-bold text-corg-600">Cómo Solicitar el Bono</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li><strong>Regístrate:</strong> Crea una cuenta en KatsuBet usando nuestro <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored" className="text-corg-500 hover:underline">enlace exclusivo</a></li>
          <li><strong>Primer depósito:</strong> Deposita al menos 0,0005 BTC y recibe el 100% + 100 giros gratis</li>
          <li><strong>Continúa:</strong> Los depósitos sucesivos activan el resto del paquete</li>
          <li><strong>Apuesta:</strong> Juega en slots para cumplir el wagering 35x</li>
          <li><strong>Retira:</strong> Cumple los requisitos y retira tus ganancias</li>
        </ol>
        <h2 className="text-xl font-bold text-corg-600">FAQ sobre el Bono</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Depósito mínimo?</h3><p className="mt-2 text-sm text-slate-500">0,0005 BTC o equivalente en otra criptomoneda.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Ofrece bono sin depósito?</h3><p className="mt-2 text-sm text-slate-500">Ocasionalmente como parte de promociones especiales.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Plazo para cumplir requisitos?</h3><p className="mt-2 text-sm text-slate-500">30 días desde la activación del bono.</p></div>
        </div>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">¿Listo para 325% + 200 Giros Gratis?</h3>
        <p className="mt-2 text-white/70">Solicita el bono KatsuBet hoy.</p>
        <a href="https://katsubet.partners/px4e6itoe" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Solicita el Bono →</a>
      </div>
    </div>
  );
}
