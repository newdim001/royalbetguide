import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiraxCasino Reseña 2026 - Test y Valoración",
  description: "MiraxCasino revisado: 8.2/10 | $500 + 200 Giros Gratis | 5000+ Juegos | 96.3% RTP | Fiat y Crypto",
  alternates: { canonical: "https://royalbetguide.com/es/reviews/mirax-casino/" },
  openGraph: {
    title: "MiraxCasino Reseña 2026 - Test y Valoración",
    description: "MiraxCasino revisado: 8.2/10 | $500 + 200 Giros Gratis | 5000+ Juegos | 96.3% RTP",
    url: "https://royalbetguide.com/es/reviews/mirax-casino/",
  },
};

const CASINO = {
  name: "Mirax Casino",
  rating: 8.2,
  bonus: "$500 + 200 Giros Gratis",
  payout: "96.3%",
  games: "5000+",
  established: "2021",
  license: "Curaçao",
  pros: ["Acepta Fiat y Crypto", "Diseño moderno y elegante", "Retiros rápidos", "Buena experiencia móvil"],
  cons: ["Marca reciente (2021)", "Métodos de pago limitados"],
  payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"],
  providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Playtech"],
  affiliateUrl: "https://mirax.partners/pyklyuxbk",
};

const COMPARISON_CASINOS = [
  { slug: "katsubet", name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Giros Gratis", payout: "96.4%", games: "7000+" },
  { slug: "7bit-casino", name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Giros Gratis", payout: "97.6%", games: "7000+" },
];

export default function MiraxCasinoEsPage() {
  const c = CASINO;
  const reviewSchema = { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "Organization", name: c.name }, reviewRating: { "@type": "Rating", ratingValue: c.rating.toString(), bestRating: "10", worstRating: "0" }, author: { "@type": "Person", name: "Carlos Ruiz" }, datePublished: "2021", description: "Descubre todo sobre MiraxCasino en nuestra reseña detallada.", inLanguage: "es" };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "¿MiraxCasino es seguro?", acceptedAnswer: { "@type": "Answer", text: "Sí, autorizado por Curaçao con cifrado SSL y colabora con proveedores de renombre." } },
    { "@type": "Question", name: "¿Qué bono ofrece?", acceptedAnswer: { "@type": "Answer", text: "$500 + 200 giros gratis, distribuido en los primeros depósitos." } },
    { "@type": "Question", name: "¿Retiros rápidos?", acceptedAnswer: { "@type": "Answer", text: "Crypto en minutos, fiat en 24-48 horas." } },
    { "@type": "Question", name: "¿Qué juegos hay?", acceptedAnswer: { "@type": "Answer", text: "Más de 5.000 juegos de Pragmatic Play, NetEnt, Evolution Gaming y Playtech." } },
    { "@type": "Question", name: "¿Acepta crypto?", acceptedAnswer: { "@type": "Answer", text: "Sí, Bitcoin y Ethereum además de fiat con Visa, Mastercard y Skrill." } },
    { "@type": "Question", name: "¿Versión móvil?", acceptedAnswer: { "@type": "Answer", text: "Completamente optimizado para móviles sin necesidad de descargar apps." } },
  ]};
    const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: c.name,
    image: "https://royalbetguide.com/og/mirax-casino.png",
    description: "MiraxCasino Reseña 2026 - $500 + 200 Giros Gratis, 5000+ juegos, 96.3% RTP.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "8.2", bestRating: "10", worstRating: "0", ratingCount: "1" },
    
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/es/" },
    { "@type": "ListItem", position: 2, name: "Reseñas", item: "https://royalbetguide.com/es/reviews/" },
    { "@type": "ListItem", position: 3, name: c.name, item: "https://royalbetguide.com/es/reviews/mirax-casino/" },
  ]};

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([reviewSchema, faqSchema, organizationSchema, breadcrumbSchema]) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos ganar una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/reviews/" className="hover:text-corg-500">Reseñas</Link><span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">{c.name}</span>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{'🎰'}</span>
            <div>
              <h1 className="text-3xl font-extrabold text-white">{c.name} - Test y Reseña 2026</h1>
              <p className="text-gold-400 font-semibold">{c.bonus}</p>
            </div>
          </div>
          <a href={c.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-gold whitespace-nowrap">Solicita el Bono →</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <span className="rating-badge">{'⭐'} {c.rating}/10</span>
          <span className="text-white/70">{'🎮'} <strong>{c.games}</strong> Juegos</span>
          <span className="text-white/70">{'💰'} <strong className="text-corg-green">{c.payout}</strong> RTP</span>
          <span className="text-white/70">{'📅'} Desde <strong>{c.established}</strong></span>
          <span className="text-white/70">{'🔒'} <strong>{c.license}</strong> Licencia</span>
        </div>
      </div>
      <div className="mt-6 text-slate-700 leading-relaxed space-y-4">
        <p>Mirax Casino fue fundado en 2021 y se ha consolidado rápidamente como puente entre los casinos tradicionales y los crypto casinos. Lo que distingue a Mirax es la posibilidad de depositar y retirar tanto con moneda fiat como con criptomonedas. Ofrece más de 5.000 juegos de proveedores líderes.</p>
        <p>La interfaz es moderna y fácil de usar. Mirax apuesta por retiros rápidos: las transacciones crypto se procesan en minutos. La experiencia móvil es excelente con un sitio completamente responsive.</p>
        <p>El paquete de bienvenida de $500 combinado con 200 giros gratis lo hace especialmente atractivo para nuevos jugadores.</p>
      </div>
      <div className="mt-6 rounded-xl border border-corg-500/20 bg-corg-500/5 p-6">
        <h2 className="text-lg font-bold text-corg-600">{'⚡'} Resumen Rápido</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div><span><strong>Licencia:</strong> {c.license}</span></div>
          <div><span><strong>Desde:</strong> {c.established}</span></div>
          <div><span><strong>Juegos:</strong> {c.games}</span></div>
          <div><span><strong>RTP:</strong> {c.payout}</span></div>
          <div><span><strong>Valoración:</strong> {c.rating}/10</span></div>
          <div><span><strong>Punto fuerte:</strong> {c.pros[0]}</span></div>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-corg-green/20 bg-green-50 p-6">
          <h2 className="text-lg font-bold text-corg-green-dark">{'✅'} Ventajas</h2>
          <ul className="mt-3 space-y-2">{c.pros.map(p => <li key={p} className="text-sm">{'✓'} {p}</li>)}</ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-50 p-6">
          <h2 className="text-lg font-bold text-red-600">{'❌'} Desventajas</h2>
          <ul className="mt-3 space-y-2">{c.cons.map(cn => <li key={cn} className="text-sm">{'✗'} {cn}</li>)}</ul>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'🎮'} Selección de Juegos</h2>
        <p className="mt-3 text-slate-700">MiraxCasino ofrece más de 5.000 juegos de proveedores líderes como Pragmatic Play, NetEnt, Evolution Gaming y Playtech.</p>
        <p className="mt-3 text-slate-700">La selección incluye slots, juegos de mesa, live dealer y títulos especiales. Nuevos juegos se añaden regularmente.</p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">{'💳'} Métodos de Pago</h3>
        <div className="mt-3 flex flex-wrap gap-2">{c.payments.map(p => <span key={p} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{p}</span>)}</div>
      </div>
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">{'🎮'} Proveedores</h3>
        <div className="mt-3 flex flex-wrap gap-2">{c.providers.map(p => <span key={p} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{p}</span>)}</div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'📊'} Comparación</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead><tr className="border-b border-slate-200"><th className="py-2 pr-4 font-semibold text-slate-600">Casino</th><th className="py-2 px-4 font-semibold text-slate-600">Valoración</th><th className="py-2 px-4 font-semibold text-slate-600">Bono</th><th className="py-2 px-4 font-semibold text-slate-600">RTP</th><th className="py-2 px-4 font-semibold text-slate-600">Juegos</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-100 bg-corg-500/5 font-medium"><td className="py-3 pr-4"><span className="text-corg-600">{c.name} <span className="text-xs text-slate-400">(Aquí)</span></span></td><td className="py-3 px-4">{c.rating}/10</td><td className="py-3 px-4 text-xs">{c.bonus}</td><td className="py-3 px-4">{c.payout}</td><td className="py-3 px-4">{c.games}</td></tr>
              {COMPARISON_CASINOS.map((s, i) => (<tr key={i} className="border-b border-slate-100 hover:bg-slate-50"><td className="py-3 pr-4"><Link href={"/es/reviews/" + s.slug + "/"} className="text-corg-500 hover:underline">{s.name}</Link></td><td className="py-3 px-4">{s.rating}/10</td><td className="py-3 px-4 text-xs">{s.bonus}</td><td className="py-3 px-4">{s.payout}</td><td className="py-3 px-4">{s.games}</td></tr>))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿MiraxCasino es seguro?</h3><p className="mt-2 text-sm text-slate-500">Sí, autorizado por Curaçao con cifrado SSL.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué bono ofrece?</h3><p className="mt-2 text-sm text-slate-500">$500 + 200 giros gratis en los primeros depósitos.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Retiros rápidos?</h3><p className="mt-2 text-sm text-slate-500">Crypto en minutos, fiat en 24-48 horas.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué juegos hay?</h3><p className="mt-2 text-sm text-slate-500">Más de 5.000 juegos de proveedores líderes.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Acepta crypto?</h3><p className="mt-2 text-sm text-slate-500">Sí, Bitcoin, Ethereum y fiat con Visa, Mastercard y Skrill.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Versión móvil?</h3><p className="mt-2 text-sm text-slate-500">Completamente responsive sin necesidad de apps.</p></div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'🏆'} Nuestro Veredicto</h2>
        <p className="mt-3 text-slate-700">MiraxCasino recibe una sólida valoración de {c.rating}/10. Con {c.games} juegos y la combinación única de pagos fiat y crypto, es una excelente opción para quienes buscan máxima flexibilidad.</p>
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">¿Listo para jugar en MiraxCasino?</h3>
        <p className="mt-2 text-white/70">Solicita tu bono exclusivo.</p>
        <a href={c.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">{c.bonus} Solicitar →</a>
      </div>
      <div className="mt-8 text-center">
        <div className="inline-block rounded-lg border border-corg-500/20 bg-corg-500/5 px-6 py-4">
          <p className="text-sm text-slate-600">{'📊'} Compara <strong>MiraxCasino</strong> con otros casinos</p>
          <Link href="/es/compare/7bit-katsubet-mirax/" className="mt-2 inline-block text-sm font-semibold text-corg-500 hover:underline">Comparativa completa →</Link>
        </div>
      </div>
    </div>
  );
}
