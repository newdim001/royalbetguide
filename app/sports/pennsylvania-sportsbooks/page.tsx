import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best PA Sportsbooks 2026 - Legal Sports Betting Pennsylvania",
  description: "Compare the best legal sportsbooks in Pennsylvania. DraftKings, FanDuel, BetMGM, Barstool, and more - all licensed by the PGCB.",
  alternates: { canonical: "https://royalbetguide.com/sports/pennsylvania-sportsbooks/" },
  openGraph: {
    title: "Best PA Sportsbooks 2026 - Legal Sports Betting Pennsylvania",
    description: "Compare the best legal sportsbooks in Pennsylvania. DraftKings, FanDuel, BetMGM, Barstool, and more.",
    url: "https://royalbetguide.com/sports/pennsylvania-sportsbooks/",
  },
};

const TOP_SPORTSBOOKS = [
  { name: "DraftKings Sportsbook", rating: 9.2, bonus: "Up to ,000 Deposit Bonus", bestFor: "Daily fantasy players and NFL betting", features: ["Live betting", "Same-game parlays", "Cash out", "Early payout"] },
  { name: "FanDuel Sportsbook", rating: 9.1, bonus: "Bet , Get 50 in Bonus Bets", bestFor: "Beginners and promo hunters", features: ["Easy-to-use app", "Live streaming", "Quick withdrawals", "Player props"] },
  { name: "BetMGM Sportsbook", rating: 8.9, bonus: "Up to ,500 First Bet Insurance", bestFor: "Competitive odds and MLB betting", features: ["MLB integration", "Parlay booster", "Live betting", "MGM Rewards"] },
  { name: "Caesars Sportsbook", rating: 8.7, bonus: "Up to ,000 First Bet on Caesars", bestFor: "Casino and sportsbook combo players", features: ["Caesars Rewards", "Same-game parlays", "Live streaming", "Teaser bets"] },
  { name: "Barstool Sportsbook", rating: 8.4, bonus: "Up to ,000 First Bet Safety Net", bestFor: "Content-driven sports fans", features: ["Barstool Sports integration", "Live betting", "Parlay builder", "Podcast picks"] },
];

export default function PennsylvaniaSportsbooksPage() {
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is sports betting legal in Pennsylvania?", acceptedAnswer: { "@type": "Answer", text: "Yes, PA legalized sports betting in 2019. All sportsbooks are licensed by the Pennsylvania Gaming Control Board (PGCB)." } },
      { "@type": "Question", name: "How old do I need to be to bet on sports in PA?", acceptedAnswer: { "@type": "Answer", text: "You must be at least 21 years old to place a sports bet in Pennsylvania." } },
      { "@type": "Question", name: "What is the tax rate on PA sports betting?", acceptedAnswer: { "@type": "Answer", text: "Pennsylvania has a 36% tax rate on sports betting revenue, one of the highest in the US." } },
      { "@type": "Question", name: "Can I bet on sports online in PA?", acceptedAnswer: { "@type": "Answer", text: "Yes, online/mobile sports betting is legal in PA. You must be 21+ and physically in the state." } },
      { "@type": "Question", name: "What is the best PA sportsbook app?", acceptedAnswer: { "@type": "Answer", text: "DraftKings and FanDuel are the top-rated PA sportsbook apps with competitive odds and promotions." } },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/" },
      { "@type": "ListItem", position: 2, name: "Sports", item: "https://royalbetguide.com/sports/" },
      { "@type": "ListItem", position: 3, name: "Pennsylvania Sportsbooks", item: "https://royalbetguide.com/sports/pennsylvania-sportsbooks/" },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }} />
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link><span className="mx-2">{'>'}</span>
        <Link href="/sports/" className="hover:text-corg-500">Sports</Link><span className="mx-2">{'>'}</span>
        <span className="text-slate-800 font-semibold">Pennsylvania Sportsbooks</span>
      </div>
      <article>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Pennsylvania</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Best PA Sportsbooks 2026</h1>
          <p className="mt-2 text-slate-500">Legal sports betting in Pennsylvania - top operators, tax rates, how to get started</p>
          <p className="mt-1 text-sm text-slate-400">By Michael Thompson - Updated June 2026</p>
        </div>

        <div className="mb-8 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-center text-sm text-amber-800">
          <strong>⚠️ PA Only:</strong> You must be 21+ and physically located within Pennsylvania to use these sportsbooks. Geolocation verification is required.
        </div>

        <div className="card-light mb-8">
          <p className="text-slate-700 leading-relaxed">Pennsylvania legalized sports betting in 2019 following the 2018 Supreme Court ruling that struck down PASPA. The Keystone State has since grown into one of the largest legal sports betting markets in the US, with over a dozen licensed operators offering both retail and mobile wagering.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">All PA sportsbooks are regulated by the <strong>Pennsylvania Gaming Control Board (PGCB)</strong>. The state's sports betting tax rate of 36% is one of the highest in the country, but the competitive market still offers excellent promotions and odds for bettors.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Key Takeaways</h2>
          <ul className="space-y-2 text-slate-700">
            <li>PA legalized sports betting in 2019, regulated by the PGCB</li>
            <li>DraftKings, FanDuel, and BetMGM lead the PA market</li>
            <li>Pennsylvania has a 36% tax rate on sports betting revenue - one of the highest</li>
            <li>You must be 21+ and physically in Pennsylvania to place mobile bets</li>
            <li>PA offers both online and retail sportsbooks at casinos across the state</li>
          </ul>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Top PA Sportsbooks Compared</h2>
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
            <p className="text-sm text-slate-700">{sb.name} is a leading PA sportsbook. Check our <Link href="/reviews/" className="text-corg-500 hover:underline">reviews section</Link> for in-depth analysis.</p>
          </div>
        ))}

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">PA Sports Betting Tax Rate</h2>
          <p className="text-slate-700 leading-relaxed">One of the most important differences between PA and other states is the tax rate. Pennsylvania imposes a 36% tax on sports betting revenue, significantly higher than New Jersey's 13-14.25%. This higher tax rate can result in slightly less favorable odds and promotions compared to NJ, but PA sportsbooks still offer competitive markets and generous welcome bonuses to attract players.</p>
          <p className="mt-3 text-slate-700 leading-relaxed">The tax revenue funds various state programs including property tax relief and economic development initiatives.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Mobile Sports Betting in PA</h2>
          <p className="text-slate-700 leading-relaxed">Pennsylvania offers a robust mobile sports betting market with most major operators providing dedicated iOS and Android apps. Mobile betting accounts for the majority of wagers placed in the state. Features include live betting, same-game parlays, cash-out options, and live streaming for select events.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">How to Start Betting in Pennsylvania</h2>
          <ol className="space-y-3 text-slate-700">
            <li><strong>1. Confirm you are 21+.</strong> Minimum age for sports betting in PA.</li>
            <li><strong>2. Be physically in PA.</strong> Geolocation required for mobile bets.</li>
            <li><strong>3. Choose a sportsbook.</strong> Compare from the list above.</li>
            <li><strong>4. Register and deposit.</strong> Use cards, PayPal, ACH, Play+, or Skrill.</li>
            <li><strong>5. Claim your welcome bonus.</strong> Most PA books offer first-bet insurance or deposit matches.</li>
            <li><strong>6. Place your bet.</strong> Browse markets and wager.</li>
          </ol>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Retail Sportsbooks in PA</h2>
          <p className="text-slate-700 leading-relaxed">In addition to mobile betting, Pennsylvania has retail sportsbooks at casinos throughout the state. Major retail locations include Hollywood Casino, Rivers Casino, Parx Casino, Mohegan Sun, Mount Airy Casino, and Valley Forge Casino Resort. These locations offer full-service sportsbooks with betting windows, self-service kiosks, and lounge areas with live sports viewing.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">PA vs. NJ Sports Betting</h2>
          <p className="text-slate-700 leading-relaxed">While both states offer legal sports betting, there are key differences. New Jersey's lower tax rate (13-14.25% vs. PA's 36%) generally allows NJ sportsbooks to offer more competitive odds and richer promotions. However, Pennsylvania still provides a strong market with all major operators present. For NJ bettors, see our <Link href="/sports/new-jersey-sportsbooks/" className="text-corg-500 hover:underline">New Jersey sportsbooks guide</Link>.</p>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Deposit Methods</h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">Visa</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">Mastercard</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">PayPal</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">ACH</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">Play+</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">Skrill</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">Online Banking</span>
            <span className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium">Wire Transfer</span>
          </div>
        </div>

        <div className="card-light mb-8">
          <h2 className="text-xl font-bold text-corg-600 mb-4">Responsible Gambling</h2>
          <p className="text-slate-700 leading-relaxed">All PA sportsbooks must offer responsible gambling tools including deposit limits, session time reminders, and self-exclusion through the PA Self-Exclusion Program. If you need help, call 1-800-GAMBLER. Sports betting is entertainment, not a way to make money.</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Ready to Bet in Pennsylvania?</h2>
          <p className="mt-2 text-white/70">Find the best PA sportsbook for you.</p>
          <Link href="/reviews/" className="btn-gold mt-4 inline-flex">Browse All Reviews</Link>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-corg-600 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Is sports betting legal in PA?</h3><p className="mt-2 text-sm text-slate-500">Yes, since 2019. Licensed by PGCB.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Minimum age?</h3><p className="mt-2 text-sm text-slate-500">21+.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">PA tax rate?</h3><p className="mt-2 text-sm text-slate-500">36% on sports betting revenue, one of the highest.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Best PA app?</h3><p className="mt-2 text-sm text-slate-500">DraftKings and FanDuel top the rankings.</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-corg-600">Can I bet from outside PA?</h3><p className="mt-2 text-sm text-slate-500">No, geolocation required within PA borders.</p></div>
          </div>
        </div>
      </article>
    </div>
  );
}
