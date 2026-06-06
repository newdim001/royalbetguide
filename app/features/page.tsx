import Link from "next/link";

export const metadata = {
  title: "Resources & How We Rate — Royal Bet Guide",
  description: "Access our free casino resources, tools, and detailed review methodology explaining how we rate online casinos.",
  alternates: { canonical: "https://royalbetguide.com/features/" },
};

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Resources</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Casino Resources & Tools</h1>
        <p className="mt-4 text-lg text-slate-500">Free tools and guides to help you play smarter, safer, and more informed.</p>
      </div>

      <div className="prose prose-slate mx-auto max-w-none">
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/how-we-rate/" className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6 group hover:border-corg-500/30 transition-all">
            <h3 className="font-bold text-corg-600 group-hover:text-corg-500">📊 How We Rate Casinos</h3>
            <p className="mt-1 text-sm text-slate-500">Our transparent 10-point scoring methodology — see how we test every casino.</p>
          </Link>
          <Link href="/tools/bonus-calculator/" className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6 group hover:border-corg-500/30 transition-all">
            <h3 className="font-bold text-corg-600 group-hover:text-corg-500">🧮 Bonus Wagering Calculator</h3>
            <p className="mt-1 text-sm text-slate-500">Calculate the real wagering requirement of any casino bonus instantly.</p>
          </Link>
          <Link href="/responsible-gambling/" className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6 group hover:border-corg-500/30 transition-all">
            <h3 className="font-bold text-corg-600 group-hover:text-corg-500">🛡️ Responsible Gambling</h3>
            <p className="mt-1 text-sm text-slate-500">Tools, tips, and support organizations for safe and responsible gambling.</p>
          </Link>
          <Link href="/casinos-to-avoid/" className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6 group hover:border-corg-500/30 transition-all">
            <h3 className="font-bold text-corg-600 group-hover:text-corg-500">⚠️ Casinos to Avoid</h3>
            <p className="mt-1 text-sm text-slate-500">Blacklisted operators and untrustworthy casinos — know who to avoid.</p>
          </Link>
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">📚 Game Guides</h3>
            <p className="mt-1 text-sm text-slate-500">
              <Link href="/guides/slots/" className="text-corg-500 hover:underline">Slots</Link> •{" "}
              <Link href="/guides/blackjack/" className="text-corg-500 hover:underline">Blackjack</Link> •{" "}
              <Link href="/guides/roulette/" className="text-corg-500 hover:underline">Roulette</Link> •{" "}
              <Link href="/guides/poker/" className="text-corg-500 hover:underline">Poker</Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center flex flex-wrap justify-center gap-4">
          <Link href="/how-we-rate/" className="btn-gold inline-flex">View Full Methodology →</Link>
          <Link href="/tools/bonus-calculator/" className="btn-outline inline-flex">Try Bonus Calculator →</Link>
        </div>
      </div>
    </div>
  );
}
