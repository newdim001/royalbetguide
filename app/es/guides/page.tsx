import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guías de Casino 2026 - Todo sobre Juegos de Azar Online",
  description: "Guías completas de juegos de azar online 2026: blackjack, ruleta, tragamonedas y estrategias ganadoras. Guías verificadas por expertos.",
  alternates: { canonical: "https://royalbetguide.com/es/guides/" },
};

const GUIDES = [
  { title: "Blackjack Online", desc: "Reglas, estrategia básica y conteo de cartas para ganar al blackjack", icon: "♠", slug: "blackjack", color: "from-red-500/20 to-red-500/5" },
  { title: "Ruleta Online", desc: "Variantes europea, americana y francesa con estrategias Martingala y Fibonacci", icon: "●", slug: "roulette", color: "from-green-500/20 to-green-500/5" },
  { title: "Tragamonedas", desc: "Guía de slots: RTP, volatilidad, mecánicas y consejos para jugar", icon: "🎰", slug: "slots", color: "from-purple-500/20 to-purple-500/5" },
];

export default function GuidesEsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">Podemos recibir una comisión si te registras a través de nuestros enlaces. Juega con responsabilidad. 18+</div>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/es/" className="hover:text-corg-500">Home</Link><span className="mx-2">→</span>
        <span className="font-semibold text-slate-800">Guías</span>
      </div>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Guías 2026</span>
        <h1 className="mt-4 text-3xl font-extrabold text-corg-600 sm:text-4xl">Guías de Casino 2026</h1>
        <p className="mt-2 text-slate-500">Todo lo que necesitas saber sobre juegos de azar online</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map(g => (
          <Link key={g.slug} href={"/es/guides/" + g.slug + "/"} className="card-gradient-border group">
            <div className="flex items-start gap-4">
              <div className={"flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br " + g.color + " text-2xl"}><span className="text-3xl">g.icon</span></div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-corg-600 group-hover:text-corg-500 transition-colors">{g.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{g.desc}</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-right">
              <span className="text-sm font-semibold text-corg-500">Lee la guía →</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-corg-600">Aprende a Jugar Como un Profesional</h2>
        <p>Nuestras guías están escritas por expertos del sector y diseñadas para jugadores de todos los niveles. Cada guía cubre reglas básicas, estrategias avanzadas y consejos prácticos.</p>
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h2 className="text-xl font-bold text-white">¿Listo para poner en práctica lo aprendido?</h2>
        <p className="mt-2 text-white/70">Regístrate en uno de nuestros casinos recomendados.</p>
        <a href="https://7bit.partners/p2jvy2mdh" target="_blank" rel="nofollow sponsored" className="btn-gold mt-4 inline-flex">Empezar Ahora →</a>
      </div>
    </div>
  );
}
