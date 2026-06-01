import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KatsuBet Casino Reseña 2026 - Test y Valoración",
  description: "KatsuBet Casino revisado: 8.3/10 | 325% + 200 Giros Gratis | 7000+ Juegos | 96.4% RTP | Crypto casino desde 2020",
  alternates: { canonical: "https://royalbetguide.com/es/reviews/katsubet/" },
  openGraph: {
    title: "KatsuBet Casino Reseña 2026 - Test y Valoración",
    description: "KatsuBet Casino revisado: 8.3/10 | 325% + 200 Giros Gratis | 7000+ Juegos | 96.4% RTP",
    url: "https://royalbetguide.com/es/reviews/katsubet/",
  },
};

const CASINO = {
  name: "KatsuBet Casino",
  rating: 8.3,
  bonus: "325% + 200 Giros Gratis",
  payout: "96.4%",
  games: "7000+",
  established: "2020",
  license: "Curaçao",
  pros: ["Enorme selección con 7000+ juegos", "Excelente soporte crypto", "Generoso paquete de bienvenida 325%", "Torneos regulares con premios elevados"],
  cons: ["Sin chat en vivo 24/7", "Soporte telefónico limitado"],
  payments: ["Bitcoin", "Ethereum", "Litecoin", "USDT", "Visa", "Mastercard"],
  providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Hacksaw Gaming"],
  affiliateUrl: "https://katsubet.partners/px4e6itoe",
};

const COMPARISON_CASINOS = [
  { slug: "7bit-casino", name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Giros Gratis", payout: "97.6%", games: "7000+" },
  { slug: "mirax-casino", name: "MiraxCasino", rating: 8.2, bonus: "$500 + 200 Giros Gratis", payout: "96.3%", games: "5000+" },
];

export default function KatsuBetEsPage() {
  const c = CASINO;
  const gamesRating = 10;
  const payoutRating = 5;
  const mobileRating = 8;
  const supportRating = 7;
  const bonusRating = 8;

  const reviewSchema = { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "Organization", name: c.name }, reviewRating: { "@type": "Rating", ratingValue: c.rating.toString(), bestRating: "10", worstRating: "0" }, author: { "@type": "Person", name: "Carlos Ruiz" }, datePublished: "2020", description: "Descubre todo sobre KatsuBet en nuestra reseña detallada.", inLanguage: "es" };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "¿KatsuBet es seguro?", acceptedAnswer: { "@type": "Answer", text: "Sí, autorizado por Curaçao con cifrado SSL. Sólida reputación desde 2020." } },
    { "@type": "Question", name: "¿Qué bono ofrece KatsuBet?", acceptedAnswer: { "@type": "Answer", text: "325% + 200 giros gratis, distribuido en los primeros tres depósitos." } },
    { "@type": "Question", name: "¿Retiros rápidos?", acceptedAnswer: { "@type": "Answer", text: "Crypto en minutos, tarjetas 2-5 días hábiles." } },
    { "@type": "Question", name: "¿Qué juegos hay?", acceptedAnswer: { "@type": "Answer", text: "Más de 7.000 juegos de 60+ proveedores." } },
    { "@type": "Question", name: "¿Versión móvil?", acceptedAnswer: { "@type": "Answer", text: "Completamente optimizado para iOS y Android." } },
    { "@type": "Question", name: "¿Programa VIP?", acceptedAnswer: { "@type": "Answer", text: "Sí, varios niveles con bonos exclusivos y retiros más rápidos." } },
  ]};
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: c.name, description: "KatsuBet Casino Reseña 2026 - 325% + 200 Giros Gratis, 7000+ juegos, 96.4% RTP.", aggregateRating: { "@type": "AggregateRating", ratingValue: "8.3", bestRating: "10", worstRating: "0", ratingCount: "1" }, offers: { "@type": "Offer", name: "325% + 200 Giros Gratis", description: "Paquete de bienvenida" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/es/" },
    { "@type": "ListItem", position: 2, name: "Reseñas", item: "https://royalbetguide.com/es/reviews/" },
    { "@type": "ListItem", position: 3, name: c.name, item: "https://royalbetguide.com/es/reviews/katsubet/" },
  ]};

  const descriptionParagraphs = [
    "KatsuBet se ha consolidado desde 2020 como uno de los mejores crypto casinos. Con más de 7.000 juegos de más de 60 proveedores, ofrece una de las bibliotecas de juego más grandes del sector crypto. El casino se ha hecho un nombre especialmente entre los aficionados a los torneos.",
    "Los torneos regulares con premios elevados atraen a jugadores de todo el mundo. El paquete de bienvenida del 325% es uno de los más generosos del mercado. KatsuBet presta gran atención a la seguridad utilizando tecnologías de cifrado de última generación.",
    "El sitio está disponible en español, inglés y francés. Los retiros con criptomonedas suelen realizarse en pocos minutos. El casino también ofrece métodos de pago tradicionales como Visa y Mastercard, lo que lo convierte en una opción flexible para diferentes tipos de jugadores.",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([reviewSchema, faqSchema, productSchema, breadcrumbSchema]) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        Podemos ganar una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+
      </div>
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
          <span className="text-white/70">{'🎮'} <strong className="text-white">{c.games}</strong> Juegos</span>
          <span className="text-white/70">{'💰'} <strong className="text-corg-green">{c.payout}</strong> RTP</span>
          <span className="text-white/70">{'📅'} Desde <strong className="text-white">{c.established}</strong></span>
          <span className="text-white/70">{'🔒'} <strong className="text-white">{c.license}</strong> Licencia</span>
        </div>
      </div>
      {descriptionParagraphs.map((p, i) => (<p key={i} className="mt-6 text-slate-700 leading-relaxed">{p}</p>))}
      <div className="mt-6 rounded-xl border border-corg-500/20 bg-corg-500/5 p-6">
        <h2 className="text-lg font-bold text-corg-600">{'⚡'} Resumen Rápido</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'🔒'}</span><span><strong>Licencia:</strong> {c.license}</span></div>
          <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'📅'}</span><span><strong>Desde:</strong> {c.established}</span></div>
          <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'🎮'}</span><span><strong>Juegos:</strong> {c.games}</span></div>
          <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'💰'}</span><span><strong>RTP:</strong> {c.payout}</span></div>
          <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'⭐'}</span><span><strong>Valoración:</strong> {c.rating}/10</span></div>
          <div className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-corg-500/10 text-xs">{'🏆'}</span><span><strong>Punto fuerte:</strong> {c.pros[0]}</span></div>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-corg-green/20 bg-green-50 p-6">
          <h2 className="text-lg font-bold text-corg-green-dark">{'✅'} Ventajas</h2>
          <ul className="mt-3 space-y-2">{c.pros.map(p => <li key={p} className="text-sm text-slate-700">{'✓'} {p}</li>)}</ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-50 p-6">
          <h2 className="text-lg font-bold text-red-600">{'❌'} Desventajas</h2>
          <ul className="mt-3 space-y-2">{c.cons.map(cn => <li key={cn} className="text-sm text-slate-700">{'✗'} {cn}</li>)}</ul>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'🎮'} Selección de Juegos</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">KatsuBet ofrece más de 7.000 juegos de 60+ proveedores. La biblioteca incluye slots, jackpots, juegos de mesa y live dealer. Destacan los torneos regulares con premios elevados.</p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'💳'} Depósitos y Retiros</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">Acepta crypto y fiat: Bitcoin, Ethereum, Litecoin, USDT, Visa y Mastercard. Crypto en minutos, tarjetas 2-5 días.</p>
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
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿KatsuBet es seguro?</h3><p className="mt-2 text-sm text-slate-500">Sí, autorizado por Curaçao con cifrado SSL y sólida reputación desde 2020.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué bono ofrece?</h3><p className="mt-2 text-sm text-slate-500">325% + 200 giros gratis, distribuido en los primeros tres depósitos.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Retiros rápidos?</h3><p className="mt-2 text-sm text-slate-500">Crypto en minutos, tarjetas 2-5 días hábiles.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Qué juegos hay?</h3><p className="mt-2 text-sm text-slate-500">Más de 7.000 juegos de más de 60 proveedores.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Versión móvil?</h3><p className="mt-2 text-sm text-slate-500">Completamente optimizado para iOS y Android.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">¿Programa VIP?</h3><p className="mt-2 text-sm text-slate-500">Sí, varios niveles con bonos exclusivos y gestores personales.</p></div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">{'🏆'} Nuestro Veredicto</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">KatsuBet recibe una sólida valoración de {c.rating}/10. Con {c.games} juegos, RTP del {c.payout} y una fuerte presencia desde {c.established}, es una opción recomendada para los amantes de los torneos.</p>
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">¿Listo para jugar en KatsuBet?</h3>
        <p className="mt-2 text-white/70">Solicita tu bono exclusivo.</p>
        <a href={c.affiliateUrl} target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">{c.bonus} Solicitar →</a>
      </div>
      <div className="mt-8 text-center">
        <div className="inline-block rounded-lg border border-corg-500/20 bg-corg-500/5 px-6 py-4">
          <p className="text-sm text-slate-600">{'📊'} Compara <strong>KatsuBet</strong> con otros casinos</p>
          <Link href="/es/compare/7bit-katsubet-mirax/" className="mt-2 inline-block text-sm font-semibold text-corg-500 hover:underline">Comparativa completa →</Link>
        </div>
      </div>
    </div>
  );
}
