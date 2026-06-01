import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tragamonedas 2026 - Top 10 Mejores Slots Online",
  description: "Las mejores tragamonedas 2026: ranking Top 10 con RTP, volatilidad y proveedor. Descubre las slots más populares como Gates of Olympus y Sweet Bonanza.",
  alternates: { canonical: "https://royalbetguide.com/es/games/slots/" },
};

const TOP_SLOTS = [
  { name: "Gates of Olympus", provider: "Pragmatic Play", rtp: "96.50%", volatility: "Alta", features: "Multiplicadores, giros gratis hasta 15x" },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", rtp: "96.48%", volatility: "Alta", features: "Tumbling, compra de bono, multiplicadores ilimitados" },
  { name: "Book of Dead", provider: "Play'n GO", rtp: "96.21%", volatility: "Alta", features: "Símbolo expandible, giros gratis" },
  { name: "Starburst", provider: "NetEnt", rtp: "96.09%", volatility: "Media", features: "Wild re-spin, ganancia en ambos lados" },
  { name: "The Dog House Megaways", provider: "Pragmatic Play", rtp: "96.15%", volatility: "Alta", features: "Megaways, sticky wild, multiplicadores" },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", rtp: "96.71%", volatility: "Media", features: "Peces con multiplicadores, giros gratis" },
  { name: "Dead or Alive 2", provider: "NetEnt", rtp: "96.82%", volatility: "Muy Alta", features: "Giros gratis con sticky wild, multiplicadores" },
  { name: "Wolf Gold", provider: "Pragmatic Play", rtp: "96.01%", volatility: "Media", features: "Jackpot, giros gratis, respin" },
  { name: "Mega Moolah", provider: "Microgaming", rtp: "88.12%", volatility: "Alta", features: "Jackpot progresivo millonario, rueda de bono" },
  { name: "Aztec Gems Deluxe", provider: "Pragmatic Play", rtp: "96.33%", volatility: "Media", features: "Jackpot aleatorio, juego de azar simple" },
];

export default function SlotsEsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <Link href="/es/games/" className="hover:text-corg-500">Juegos</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Tragamonedas</span>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Juegos</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Top 10 Mejores Tragamonedas 2026</h1>
        <p className="mt-2 text-slate-500">Las slots más populares con RTP, proveedor y volatilidad</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[500px] text-left text-sm">
          <thead><tr className="border-b border-slate-200 bg-slate-50"><th className="p-3 font-semibold text-slate-600">#</th><th className="p-3 font-semibold text-slate-600">Slot</th><th className="p-3 font-semibold text-slate-600">Proveedor</th><th className="p-3 font-semibold text-slate-600">RTP</th><th className="p-3 font-semibold text-slate-600">Volatilidad</th></tr></thead>
          <tbody>
            {TOP_SLOTS.map((s, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-bold text-corg-500">{i + 1}</td>
                <td className="p-3 font-medium text-corg-600">{s.name}</td>
                <td className="p-3 text-slate-600">{s.provider}</td>
                <td className="p-3 text-corg-green font-semibold">{s.rtp}</td>
                <td className="p-3 text-slate-600">{s.volatility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Guía de Tragamonedas</h2>
        <p>Las tragamonedas online son el juego más popular en los casinos, representando el 70-80% del volumen total. Su simplicidad y variedad de temas las hacen irresistibles.</p>
        <p>El RTP es el porcentaje teórico que una slot devuelve a los jugadores. Una slot con RTP del 96% devuelve 96€ por cada 100€ jugados.</p>
        <p>La volatilidad describe la frecuencia y el tamaño de las ganancias. Alta volatilidad paga menos frecuente pero con importes más altos.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">¿Listo para jugar a las mejores slots?</h2>
        <p className="mt-2 text-white/70">Regístrate en 7BitCasino y consigue 5 BTC + 250 giros gratis.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Jugar ahora →</a>
      </div>
    </div>
  );
}
