import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7BitCasino vs KatsuBet vs MiraxCasino - Comparativa 2026",
  description: "Comparativa completa 2026: 7BitCasino vs KatsuBet vs MiraxCasino. Bonos, RTP, juegos y retiros. Descubre cuál es el mejor crypto casino para ti.",
  alternates: { canonical: "https://royalbetguide.com/es/compare/7bit-katsubet-mirax/" },
};

const CASINOS = [
  { name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 FS", payout: "97.6%", games: "7000+", established: "2014", crypto: "15+ crypto", payoutTime: "1-10 min", pros: "Pionero crypto desde 2014, Provably Fair, programa VIP excelente", cons: "Solo crypto, sin moneda fiat", slug: "7bit-casino", url: "https://7bit.partners/p2jvy2mdh" },
  { name: "KatsuBet", rating: 8.3, bonus: "325% + 200 FS", payout: "96.4%", games: "7000+", established: "2020", crypto: "5+ crypto", payoutTime: "5-15 min", pros: "Torneos Drops-and-Wins, diseño único, bonos reload regulares", cons: "Sin apuestas deportivas, sin app móvil", slug: "katsubet", url: "https://katsubet.partners/px4e6itoe" },
  { name: "MiraxCasino", rating: 8.2, bonus: "$500 + 200 FS", payout: "96.3%", games: "5000+", established: "2021", crypto: "4+ crypto + fiat", payoutTime: "5-20 min", pros: "Cashback 25%, límites altos, pagos fiat aceptados", cons: "Biblioteca más pequeña, wagering 45x en algunos bonos", slug: "mirax-casino", url: "https://mirax.partners/pyklyuxbk" },
];

export default function CompareEsPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/es/" },
    { "@type": "ListItem", position: 2, name: "Comparativa", item: "https://royalbetguide.com/es/compare/7bit-katsubet-mirax/" },
  ]};
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Comparativa: 7BitCasino vs KatsuBet vs MiraxCasino</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Comparativa 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">7BitCasino vs KatsuBet vs MiraxCasino</h1>
        <p className="mt-2 text-slate-500">Comparativa detallada de los tres mejores crypto casinos afiliados a 7BitPartners</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead><tr className="border-b border-slate-200 bg-slate-50"><th className="p-3 font-semibold text-slate-600">Característica</th>{CASINOS.map(c => <th key={c.name} className="p-3 font-bold text-corg-600 text-center">{c.name}</th>)}</tr></thead>
          <tbody>
            {[
              { label: "Valoración", values: CASINOS.map(c => c.rating + "/10") },
              { label: "Bono", values: CASINOS.map(c => c.bonus) },
              { label: "RTP Medio", values: CASINOS.map(c => c.payout) },
              { label: "Juegos", values: CASINOS.map(c => c.games) },
              { label: "Desde", values: CASINOS.map(c => c.established) },
              { label: "Criptomonedas", values: CASINOS.map(c => c.crypto) },
              { label: "Retiro", values: CASINOS.map(c => c.payoutTime) },
              { label: "Ventajas", values: CASINOS.map(c => c.pros) },
              { label: "Desventajas", values: CASINOS.map(c => c.cons) },
            ].map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-600 whitespace-nowrap">{row.label}</td>
                {row.values.map((v, j) => <td key={j} className={"p-3 text-center " + (j === 0 ? "bg-corg-500/5 font-medium" : "")}>{v}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {CASINOS.map(c => (
          <div key={c.name} className="card-gradient-border p-5">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-corg-600">{c.name}</h2>
              <span className="rating-badge mt-2 inline-flex"><span>{'★'}</span><span>{c.rating}/10</span></span>
              <p className="mt-2 text-sm font-semibold text-gold-500">{c.bonus}</p>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li><strong>RTP:</strong> {c.payout}</li>
              <li><strong>Juegos:</strong> {c.games}</li>
              <li><strong>Retiro:</strong> {c.payoutTime}</li>
            </ul>
            <a href={c.url} target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 w-full text-center inline-block text-sm">Visitar {c.name} →</a>
            <Link href={"/es/reviews/" + c.slug + "/"} className="mt-2 block text-center text-xs text-corg-500 hover:underline">Lee la reseña →</Link>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Nuestro Veredicto</h2>
        <p><strong>7BitCasino</strong> es el ganador absoluto para 2026 con 9,4/10, más de 7.000 juegos, RTP 97,6% y retiros en 1-10 minutos.</p>
        <p><strong>KatsuBet</strong> es ideal para los amantes de los torneos de slots con su bono del 325%.</p>
        <p><strong>MiraxCasino</strong> es la mejor opción para high rollers que prefieren opciones de pago fiat.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">¿Listo para elegir tu casino?</h2>
        <p className="mt-2 text-white/70">Empieza con nuestro ganador 2026 y consigue 5 BTC + 250 giros gratis.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Probar 7BitCasino →</a>
      </div>
    </div>
  );
}
