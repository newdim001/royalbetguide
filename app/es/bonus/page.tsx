import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mejores Bonos de Casino 2026 - Ofertas Exclusivas para Españoles",
  description: "Los mejores bonos de casino 2026 para jugadores españoles. Compara ofertas exclusivas: 5 BTC + 250 FS, 325% + 200 FS, $500 + 200 FS.",
  alternates: { canonical: "https://royalbetguide.com/es/bonus/" },
};

const BONUS_LIST = [
  { name: "7BitCasino", bonus: "5 BTC + 250 Giros Gratis", wagering: "40x", minDep: "0,0001 BTC", rating: 9.4, slug: "7bit-casino", imgSlug: "7bitcasino", url: "https://7bit.partners/p2jvy2mdh" },
  { name: "KatsuBet", bonus: "325% + 200 Giros Gratis", wagering: "35x", minDep: "0,0005 BTC", rating: 8.3, slug: "katsubet", imgSlug: "katsubet", url: "https://katsubet.partners/px4e6itoe" },
  { name: "MiraxCasino", bonus: "$500 + 200 Giros Gratis", wagering: "35x", minDep: "$20", rating: 8.2, slug: "mirax-casino", imgSlug: "7bitcasino", url: "https://mirax.partners/pyklyuxbk" },
  { name: "BitStarz", bonus: "5 BTC + 180 Giros Gratis", wagering: "40x", minDep: "0,0001 BTC", rating: 9.1, slug: "bitstarz", imgSlug: "bitstarz", url: "#" },
  { name: "Stake", bonus: "200% + 50 Giros Gratis", wagering: "35x", minDep: "0,0001 BTC", rating: 8.8, slug: "stake", imgSlug: "stake", url: "#" },
];

export default function BonusEsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Bonos</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Ofertas Verificadas 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Mejores Bonos de Casino 2026</h1>
        <p className="mt-2 text-slate-500">Bonos exclusivos verificados por nuestros expertos</p>
      </div>
      <div className="grid gap-5">
        {BONUS_LIST.map(b => (
          <div key={b.slug} className="card-gradient-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corg-500/20 to-corg-500/10 text-2xl"><CasinoLogo slug={b.imgSlug || b.slug} name={b.name} size={48} /></span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-corg-600">{b.name}</h2>
                  <span className="rating-badge"><span>{'★'}</span><span>{b.rating}</span></span>
                </div>
                <p className="text-sm font-semibold text-gold-500">{b.bonus}</p>
                <p className="text-xs text-slate-400">Wagering: {b.wagering} | Depósito mínimo: {b.minDep}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={"/es/bonus/" + b.slug + "/"} className="text-sm text-corg-500 hover:underline whitespace-nowrap">Detalles →</Link>
              <a href={b.url} target="_blank" rel="nofollow sponsored" className="btn-gold text-sm whitespace-nowrap">Solicitar →</a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Cómo Elegir el Mejor Bono</h2>
        <p>Factores clave: requisitos de apuesta (wagering), porcentaje del bono, giros gratis, métodos de pago y vigencia del bono.</p>
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">No te pierdas las mejores ofertas</h2>
        <p className="mt-2 text-white/70">Suscríbete para recibir bonos exclusivos.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Consigue el mejor bono →</a>
      </div>
    </div>
  );
}
