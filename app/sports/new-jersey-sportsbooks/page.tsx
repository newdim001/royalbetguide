import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best NJ Sportsbooks 2026 - Legal Sports Betting New Jersey",
  description: "Compare the best legal sportsbooks in New Jersey. DraftKings, FanDuel, BetMGM, and more - all licensed by the NJDGE.",
  alternates: { canonical: "https://royalbetguide.com/sports/new-jersey-sportsbooks/" },
  openGraph: {
    title: "Best NJ Sportsbooks 2026 - Legal Sports Betting New Jersey",
    description: "Compare the best legal sportsbooks in New Jersey. DraftKings, FanDuel, BetMGM, and more - all licensed by the NJDGE.",
    url: "https://royalbetguide.com/sports/new-jersey-sportsbooks/",
  },
};

const TOP_SPORTSBOOKS = [
  { name: "DraftKings Sportsbook", rating: 9.3, bonus: "Up to ,000 Deposit Bonus", bestFor: "Daily fantasy players and NFL betting", features: ["Live betting", "Same-game parlays", "Cash out", "Early payout"] },
  { name: "FanDuel Sportsbook", rating: 9.2, bonus: "Bet , Get 50 in Bonus Bets", bestFor: "Beginners and promo hunters", features: ["Easy-to-use app", "Live streaming", "Quick withdrawals", "Player props"] },
  { name: "BetMGM Sportsbook", rating: 9.0, bonus: "Up to ,500 First Bet Insurance", bestFor: "Competitive odds and MLB betting", features: ["MLB integration", "Parlay booster", "Live betting", "MGM Rewards"] },
  { name: "Caesars Sportsbook", rating: 8.8, bonus: "Up to ,000 First Bet on Caesars", bestFor: "Casino and sportsbook combo players", features: ["Caesars Rewards", "Same-game parlays", "Teaser bets", "Live streaming"] },
  { name: "PointsBet (now Fanatics)", rating: 8.5, bonus: "Promo varies - check app", bestFor: "PointsBetting and unique wagering", features: ["PointsBetting mechanic", "Live betting", "Fast payouts", "SGP builder"] },
];

export default function NewJerseySportsbooksPage() {
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is sports betting legal in New Jersey?", acceptedAnswer: { "@type": "Answer", text: "Yes, since June 2018 following the Murphy v. NCAA ruling. All sportsbooks licensed by NJDGE." } },
      { "@type": "Question", name: "How old do I need to be?", acceptedAnswer: { "@type": "Answer", text: "You must be at least 21 years old." } },
      { "@type": "Question", name: "Best NJ sportsbook app?", acceptedAnswer: { "@type": "Answer", text: "DraftKings and FanDuel are the top-rated apps." } },
      { "@type": "Question", name: "Can I bet from outside NJ?", acceptedAnswer: { "@type": "Answer", text: "No, geolocation required within NJ borders." } },
      { "@type": "Question", name: "Accepted deposit methods?", acceptedAnswer: { "@type": "Answer", text: "Cards, PayPal, Play+, ACH, Skrill, casino cage." } },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/" },
      { "@type": "ListItem", position: 2, name: "Sports", item: "https://royalbetguide.com/sports/" },
      { "@type": "ListItem", position: 3, name: "New Jersey Sportsbooks", item: "https://royalbetguide.com/sports/new-jersey-sportsbooks/" },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }} />
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">{'>'}</span>
        <Link href="/sports/" className="hover:text-corg-500">Sports</Link><span className="mx-2">{'>'}</span>
        <span className="text-slate-800 font-semibold">New Jersey Sportsbooks</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">New Jersey</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Best NJ Sportsbooks 2026</h1>
          <p className="mt-2 text-slate-500">Legal sports betting in New Jersey - top operators, odds comparison, how to start</p>
          <p className="mt-1 text-sm text-slate-400">By Michael Thompson - Updated June 2026</p>
        </div>

        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">New Jersey has been at the forefront of US sports betting since the landmark <strong>Murphy v. NCAA</strong> Supreme Court ruling in May 2018 struck down PASPA. The Garden State launched legal sports betting in June 2018 and has since become the gold standard for regulated US sportsbooks.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">All sportsbooks operating in New Jersey are licensed by the <strong>New Jersey Division of Gaming Enforcement (NJDGE)</strong>, ensuring strict consumer protections and fair odds.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Key Takeaways</h2>
          <ul className="space-y-2 text-slate-700">
            <li>NJ legalized sports betting in June 2018 after Murphy v. NCAA</li>
            <li>DraftKings, FanDuel, and BetMGM are the top-rated NJ sportsbooks</li>
            <li>You must be 21+ and physically in New Jersey to place mobile bets</li>
            <li>Mobile betting accounts for over 90% of NJ sports bets</li>
            <li>NJ offers some of the best sportsbook promotions in the US</li>
          </ul>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Top NJ Sportsbooks Compared</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-600">Sportsbook</th>
                  <th className="py-2 px-4 font-semibold text-slate-600">Rating</th>
                  <th className="py-2 px-4 font-semibold text-slate-600">Bonus Offer</th>
                  <th className="py-2 px-4 font-semibold text-slate-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                {TOP_SPORTSBOOKS.map((sb, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 pr-4 font-medium text-corg-600">{sb.name}</td>
                    <td className="py-3 px-4">{sb.rating}/10</td>
                    <td className="py-3 px-4 text-xs">{sb.bonus}</td>
                    <td className="py-3 px-4 text-xs">{sb.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {TOP_SPORTSBOOKS.map((sb, i) => (
          <div key={i} className="card-light mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{i === 0 ? String.fromCodePoint(0x1F947) : i === 1 ? String.fromCodePoint(0x1F948) : i === 2 ? String.fromCodePoint(0x1F949) : String.fromCodePoint(0x1F396)}</span>
              <div>
                <h3 className="text-lg font-bold text-corg-600">{sb.name}</h3>
                <span className="text-xs text-slate-400">Rating: {sb.rating}/10</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {sb.features.map((f, fi) => (
                <span key={fi} className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">{f}</span>
              ))}
            </div>
            <p className="text-sm text-slate-700">{sb.name} is a top choice for NJ bettors. Check our <Link href="/reviews/" className="text-corg-500 hover:underline">reviews section</Link> for detailed breakdowns.</p>
          </div>
        ))}

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Mobile Sports Betting in NJ</h2>
          <p className="text-slate-700 leading-relaxed">Mobile sports betting dominates the NJ market with over 90% of all bets placed via apps. Every major sportsbook offers iOS and Android apps with live betting, same-game parlays, and cash-out features.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">How to Start Betting in New Jersey</h2>
          <ol className="space-y-3 text-slate-700">
            <li><strong>1. Be 21+ and in NJ.</strong> Geolocation software verifies your location.</li>
            <li><strong>2. Choose a sportsbook.</strong> Compare bonuses and markets from the list above.</li>
            <li><strong>3. Register and deposit.</strong> Use cards, PayPal, ACH, Play+, or Skrill.</li>
            <li><strong>4. Claim your bonus.</strong> Most NJ sportsbooks offer welcome promos.</li>
            <li><strong>5. Place your bet.</strong> Browse markets and compare odds.</li>
          </ol>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">NJ Regulations</h2>
          <p className="text-slate-700 leading-relaxed">The NJDGE licenses and regulates all sportsbooks. State tax rate: 13% retail, 14.25% mobile. Lower than Pennsylvania (36%), allowing better odds.</p>
          <p className="mt-2">See our <Link href="/sports/pennsylvania-sportsbooks/" className="text-corg-500 hover:underline">PA sportsbooks guide</Link> for comparison.</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Bet?</h2>
          <p className="mt-2 text-white/70">Find the best NJ sportsbook for you.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse Reviews</Link>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-corg-600 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Is sports betting legal in NJ?</h3><p className="mt-2 text-sm text-slate-500">Yes, since June 2018. Licensed by NJDGE.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Minimum age?</h3><p className="mt-2 text-sm text-slate-500">21+.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Best app?</h3><p className="mt-2 text-sm text-slate-500">DraftKings and FanDuel.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Can I bet from outside NJ?</h3><p className="mt-2 text-sm text-slate-500">No, geolocation required.</p></div>
          </div>
        </div>
      </article>
    </div>
  );
}
