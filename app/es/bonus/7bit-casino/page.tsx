import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bono 7BitCasino 2026 - 5 BTC + 250 Giros Gratis",
  description: "Consigue el bono de bienvenida 7BitCasino 2026: 5 BTC + 250 giros gratis. Requisitos 40x, guía de solicitud. Oferta exclusiva para jugadores españoles.",
  alternates: { canonical: "https://royalbetguide.com/es/bonus/7bit-casino/" },
  openGraph: {
    title: "Bono 7BitCasino 2026 - 5 BTC + 250 Giros Gratis",
    description: "Consigue el bono de bienvenida 7BitCasino 2026: 5 BTC + 250 giros gratis.",
    url: "https://royalbetguide.com/es/bonus/7bit-casino/",
  },
};

export default function Bonus7BitEsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuál es el bono de bienvenida de 7BitCasino?", acceptedAnswer: { "@type": "Answer", text: "El paquete de bienvenida de 7BitCasino ofrece hasta 5 BTC + 250 giros gratis, distribuido en los primeros cuatro depósitos." } },
      { "@type": "Question", name: "¿Cuáles son los requisitos de apuesta del bono?", acceptedAnswer: { "@type": "Answer", text: "Los requisitos de apuesta son 40x, un estándar del sector. Los giros gratis tienen requisitos separados." } },
      { "@type": "Question", name: "¿Cómo solicitar el bono?", acceptedAnswer: { "@type": "Answer", text: "Regístrate en 7BitCasino a través de nuestro enlace, realiza un depósito mínimo de 0,0001 BTC y el bono se acredita automáticamente." } },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/bonus/" className="hover:text-corg-500">Bonos</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Bono 7BitCasino</span>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8 text-center">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">Oferta Exclusiva</span>
        <h1 className="mt-4 text-3xl font-extrabold text-white">Bono 7BitCasino 2026</h1>
        <p className="mt-2 text-2xl font-bold text-gold-400">5 BTC + 250 Giros Gratis</p>
        <p className="mt-2 text-white/70">Paquete de bienvenida exclusivo para nuevos jugadores</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-6 inline-flex">Solicita el Bono →</a>
      </div>
      <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Paquete de Bienvenida Detallado</h2>
        <p>7BitCasino ofrece uno de los paquetes de bienvenida más generosos del sector. El bono total de hasta 5 BTC y 250 giros gratis se distribuye en los primeros cuatro depósitos.</p>
        <div className="card-gradient-border space-y-3 p-5">
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">1</span><div><strong>Primer depósito:</strong> 100% hasta 1,5 BTC + 100 giros gratis</div></div>
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">2</span><div><strong>Segundo depósito:</strong> 50% hasta 1,25 BTC + 50 giros gratis</div></div>
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">3</span><div><strong>Tercer depósito:</strong> 25% hasta 1 BTC + 50 giros gratis</div></div>
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-corg-500/10 text-sm font-bold text-corg-500">4</span><div><strong>Cuarto depósito:</strong> 25% hasta 1,25 BTC + 50 giros gratis</div></div>
        </div>
        <h2 className="text-xl font-bold text-corg-600">Requisitos de Apuesta</h2>
        <p>Los requisitos de wagering son 40x el valor del bono. Las slots contribuyen al 100%, los juegos de mesa al 10-20%.</p>
        <h2 className="text-xl font-bold text-corg-600">Cómo Solicitar el Bono</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li><strong>Regístrate:</strong> Crea una cuenta en 7BitCasino a través de nuestro <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="text-corg-500 hover:underline">enlace exclusivo</a></li>
          <li><strong>Deposita:</strong> Realiza un depósito mínimo de 0,0001 BTC</li>
          <li><strong>Recibe:</strong> El bono se acredita automáticamente tras el depósito</li>
          <li><strong>Juega:</strong> Usa el bono en slots con contribución al 100%</li>
          <li><strong>Retira:</strong> Cumple los requisitos de apuesta y retira tus ganancias</li>
        </ol>
        <h2 className="text-xl font-bold text-corg-600">FAQ sobre el Bono</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué juegos contribuyen a los requisitos de apuesta?</h3><p className="mt-2 text-sm text-slate-500">Las slots contribuyen al 100%, los juegos de mesa al 10-20% y los juegos con dealer en vivo al 10%.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Hay un límite máximo de retiro del bono?</h3><p className="mt-2 text-sm text-slate-500">Sí, el límite máximo de retiro de las ganancias del bono es 10x el valor del bono recibido.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Puedo solicitar el bono más de una vez?</h3><p className="mt-2 text-sm text-slate-500">El paquete de bienvenida es válido una sola vez por hogar, dirección IP o dispositivo.</p></div>
        </div>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">¿Listo para 5 BTC + 250 Giros Gratis?</h3>
        <p className="mt-2 text-white/70">Consigue el bono exclusivo de 7BitCasino hoy.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Solicita el Bono 5 BTC →</a>
      </div>
    </div>
  );
}
