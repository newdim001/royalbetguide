import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino Reseña 2026 - Test y Valoración",
  description: "7BitCasino revisado: 9.4/10 | 5 BTC + 250 Giros Gratis | 7000+ Juegos | 97.6% RTP | Pionero crypto desde 2014 | Lee ahora!",
  alternates: { canonical: "https://royalbetguide.com/es/reviews/7bit-casino/" },
  openGraph: {
    title: "7BitCasino Reseña 2026 - Test y Valoración",
    description: "7BitCasino revisado: 9.4/10 | 5 BTC + 250 Giros Gratis | 7000+ Juegos | 97.6% RTP",
    url: "https://royalbetguide.com/es/reviews/7bit-casino/",
  },
};

const CASINO = {
  name: "7BitCasino",
  rating: 9.4,
  bonus: "5 BTC + 250 Giros Gratis",
  payout: "97.6%",
  games: "7000+",
  established: "2014",
  license: "Curacao",
  pros: [
    "Pionero crypto desde 2014",
    "7000+ juegos de 70+ proveedores",
    "Excelente programa VIP",
    "Juegos provably fair",
    "Certificado por AskGamblers",
  ],
  cons: [
    "Sin pagos fiat",
    "Restringido en algunos países",
  ],
  payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT"],
  providers: ["Pragmatic Play", "NetEnt", "Microgaming", "Evolution Gaming", "Play'n GO"],
  affiliateUrl: "https://7bit.partners/p2jvy2mdh",
  description: "7BitCasino es el estándar de referencia entre los crypto casinos. Desde 2014 ofrece más de 7.000 juegos de más de 70 proveedores y está entre los mejores crypto casinos a nivel mundial. El casino está certificado por AskGamblers y utiliza la tecnología Provably Fair. El paquete de bienvenida de 5 BTC más 250 giros gratis es uno de los más generosos del mercado.",
};

const COMPARISON_CASINOS = [
  { slug: "katsubet", name: "KatsuBet", rating: 8.3, bonus: "325% + 200 Giros Gratis", payout: "96.4%", games: "7000+" },
  { slug: "mirax-casino", name: "MiraxCasino", rating: 8.2, bonus: "$500 + 200 Giros Gratis", payout: "96.3%", games: "5000+" },
];

export default function SevenBitCasinoEsPage() {
  const c = CASINO;
  const gamesRating = 10;
  const payoutRating = 10;
  const mobileRating = 9;
  const supportRating = 9;
  const bonusRating = 10;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Organization", name: c.name },
    reviewRating: { "@type": "Rating", ratingValue: c.rating.toString(), bestRating: "10", worstRating: "0" },
    author: { "@type": "Person", name: "Carlos Ruiz" },
    datePublished: "2014",
    description: "Descubre todo sobre 7BitCasino en nuestra reseña detallada.",
    inLanguage: "es",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Es 7BitCasino seguro y fiable?", acceptedAnswer: { "@type": "Answer", text: "Sí, 7BitCasino está completamente autorizado por el gobierno de Cura\u00e7ao y utiliza cifrado SSL. Está certificado por AskGamblers y utiliza Provably Fair." } },
      { "@type": "Question", name: "¿Qué bono de bienvenida ofrece 7BitCasino?", acceptedAnswer: { "@type": "Answer", text: "Los nuevos jugadores pueden solicitar un paquete de bienvenida de 5 BTC más 250 giros gratis, distribuido en los primeros depósitos." } },
      { "@type": "Question", name: "¿Qué tan rápidos son los retiros en 7BitCasino?", acceptedAnswer: { "@type": "Answer", text: "Los retiros con criptomonedas son extremadamente rápidos, normalmente en minutos o unas horas." } },
      { "@type": "Question", name: "¿Qué juegos ofrece 7BitCasino?", acceptedAnswer: { "@type": "Answer", text: "Más de 7.000 juegos de 70+ proveedores: slots, jackpots, juegos de mesa y live dealer de Evolution Gaming." } },
      { "@type": "Question", name: "¿Puedo jugar desde el móvil?", acceptedAnswer: { "@type": "Answer", text: "Sí, completamente optimizado para iOS y Android sin necesidad de descargar apps." } },
      { "@type": "Question", name: "¿Tiene programa de fidelidad?", acceptedAnswer: { "@type": "Answer", text: "Sí, ofrece un excelente programa VIP con bonos exclusivos, retiros más rápidos y gestores personales." } },
    ],
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: c.name,
    description: "7BitCasino Reseña 2026 - 5 BTC + 250 Giros Gratis, 7000+ juegos, 97.6% RTP.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "9.4", bestRating: "10", worstRating: "0", ratingCount: "1" },
    offers: { "@type": "Offer", name: "5 BTC + 250 Giros Gratis", description: "Paquete de bienvenida" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/es/" },
      { "@type": "ListItem", position: 2, name: "Reseñas", item: "https://royalbetguide.com/es/reviews/" },
      { "@type": "ListItem", position: 3, name: "7BitCasino", item: "https://royalbetguide.com/es/reviews/7bit-casino/" },
    ],
  };
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([reviewSchema, faqSchema, productSchema, breadcrumbSchema]) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Podemos ganar una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+
      </div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/es/reviews/" className="hover:text-corg-500">Reseñas</Link>
        <span className="mx-2">→</span>
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
          <span className="text-white/70">{'🎮'} <strong className="text-white">{c.games}</strong> Juegos</span>
          <span className="text-white/70">{'\U0001f4b0'} <strong className="text-corg-green">{c.payout}</strong> RTP</span>
          <span className="text-white/70">{'\U0001f4c5'} Desde <strong className="text-white">{c.established}</strong></span>
          <span className="text-white/70">{'\U0001f512'} <strong className="text-white">{c.license}</strong> Licencia</span>
        </div>
      </div>
      <p className="mt-6 text-slate-700 leading-relaxed">{c.description}</p>
      <div className="mt-6 rounded-xl border border-corg-500/20 bg-corg-500/5 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{'⚡'}</span>
          <h2 className="text-lg font-bold text-corg-600">Resumen Rápido - Datos Clave</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'\U0001f512'}</span><span><strong>Licencia:</strong> {c.license}</span></div>
          <div className="flex items-center gap-2 text-sm text-slate-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'\U0001f4c5'}</span><span><strong>Desde:</strong> {c.established}</span></div>
          <div className="flex items-center gap-2 text-sm text-slate-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'🎮'}</span><span><strong>Juegos:</strong> {c.games}</span></div>
          <div className="flex items-center gap-2 text-sm text-slate-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'\U0001f4b0'}</span><span><strong>RTP:</strong> {c.payout}</span></div>
          <div className="flex items-center gap-2 text-sm text-slate-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'⭐'}</span><span><strong>Valoración:</strong> {c.rating}/10</span></div>
          <div className="flex items-center gap-2 text-sm text-slate-700"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'\U0001f3c6'}</span><span><strong>Punto fuerte:</strong> {c.pros[0]}</span></div>
        </div>
        <div className="mt-3 text-xs text-slate-400">Datos verificados en junio 2026. Verifica siempre los términos del bono actuales en el sitio web.</div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-corg-green/20 bg-green-50 p-6">
          <h2 className="text-lg font-bold text-corg-green-dark">{'✅'} Ventajas</h2>
          <ul className="mt-3 space-y-2">{c.pros.map((p) => <li key={p} className="text-sm text-slate-700">{'✓'} {p}</li>)}</ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-50 p-6">
          <h2 className="text-lg font-bold text-red-600">{'❌'} Desventajas</h2>
          <ul className="mt-3 space-y-2">{c.cons.map((cn) => <li key={cn} className="text-sm text-slate-700">{'✗'} {cn}</li>)}</ul>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'⭐'} Panorama de Valoraciones</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[{label:"Juegos",v:gamesRating},{label:"Retiros",v:payoutRating},{label:"Móvil",v:mobileRating},{label:"Soporte",v:supportRating},{label:"Bono",v:bonusRating}].map(x => (
            <div key={x.label}><div className="flex items-center justify-between text-sm"><span className="text-slate-600">{x.label}</span><span className="font-bold text-corg-600">{x.v}/10</span></div><div className="mt-1 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-corg-500 transition-all" style={{width:x.v*10+"%"}}></div></div></div>
          ))}
          <div className="flex items-center justify-center rounded-lg bg-corg-500/5 p-3"><div className="text-center"><span className="text-2xl font-extrabold text-corg-600">{c.rating}</span><span className="text-sm text-slate-400">/10</span><p className="text-xs text-slate-500">Total</p></div></div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'🎮'} Selección de Juegos</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">7BitCasino ofrece más de 7.000 juegos de más de 70 proveedores. La biblioteca incluye video slots, jackpots, juegos de mesa y live dealer. Entre los proveedores destacan Pragmatic Play, NetEnt, Microgaming, Evolution Gaming y Play'n GO.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">La selección de slots incluye clásicos como Book of Dead, Starburst y Gonzo's Quest, además de títulos Megaways modernos y jackpots progresivos. Nuevos juegos se añaden regularmente.</p>
        <p className="mt-3 text-slate-700 leading-relaxed">Los juegos de mesa incluyen blackjack, ruleta, baccarat y póker. El live dealer de Evolution Gaming transmite en HD. Como crypto casino, utiliza Provably Fair.</p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'💳'} Depósitos y Retiros</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">7BitCasino acepta exclusivamente criptomonedas: Bitcoin, Ethereum, Litecoin, Dogecoin y USDT. Esto permite transacciones extremadamente rápidas.</p>
        <div className="mt-3 flex flex-wrap gap-2">{c.payments.map(p => <span key={p} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{p}</span>)}</div>
      </div>
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">{'🎮'} Proveedores</h3>
        <div className="mt-3 flex flex-wrap gap-2">{c.providers.map(p => <span key={p} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{p}</span>)}</div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'📱'} Experiencia Móvil</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">7BitCasino está completamente optimizado para iOS y Android. La interfaz móvil es intuitiva con categorías organizadas y carga rápida.</p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'🎧'} Atención al Cliente</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">Soporte 24/7 vía chat en vivo y email. Respuestas rápidas y equipo competente.</p>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'📊'} Comparación</h2>
        <p className="mt-2 text-sm text-slate-500">Cómo se posiciona 7BitCasino frente a KatsuBet y MiraxCasino.</p>
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
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Es 7BitCasino seguro?</h3><p className="mt-2 text-sm text-slate-500">Sí, autorizado por Cura\u00e7ao, cifrado SSL, certificado AskGamblers y Provably Fair.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué bono ofrece?</h3><p className="mt-2 text-sm text-slate-500">5 BTC + 250 giros gratis, distribuido en los primeros depósitos.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Retiros rápidos?</h3><p className="mt-2 text-sm text-slate-500">Sí, con crypto en minutos u horas.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué juegos hay?</h3><p className="mt-2 text-sm text-slate-500">Más de 7.000 juegos de 70+ proveedores.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Funciona en móvil?</h3><p className="mt-2 text-sm text-slate-500">Completamente optimizado para iOS y Android.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Programa VIP?</h3><p className="mt-2 text-sm text-slate-500">Sí, con bonos exclusivos, retiros más rápidos y gestor personal.</p></div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'\U0001f3c6'} Nuestro Veredicto</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">7BitCasino recibe una excelente valoración de {c.rating}/10. Con {c.games} juegos, RTP del {c.payout} y sólida reputación desde {c.established}, es una elección de primera clase.</p>
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">¿Listo para jugar en 7BitCasino?</h3>
        <p className="mt-2 text-white/70">Solicita tu bono de bienvenida exclusivo.</p>
        <a href={c.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">{c.bonus} Solicitar →</a>
      </div>
      <div className="mt-8 text-center">
        <div className="inline-block rounded-lg border border-corg-500/20 bg-corg-500/5 px-6 py-4">
          <p className="text-sm text-slate-600">{'📊'} Compara <strong>7BitCasino</strong> con otros casinos</p>
          <Link href="/es/compare/7bit-katsubet-mirax/" className="mt-2 inline-block text-sm font-semibold text-corg-500 hover:underline">Comparativa completa →</Link>
        </div>
      </div>
    </div>
  );
}
