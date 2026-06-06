import Link from "next/link";

export const metadata = {
  title: "How We Rate Casinos — Royal Bet Guide Review Methodology",
  description: "Learn how Royal Bet Guide rates and reviews online casinos. Our 10-point weighted methodology covers licensing, bonuses, payout speed, security, and more.",
  alternates: { canonical: "https://royalbetguide.com/how-we-rate/" },
};

const CRITERIA = [
  { weight: "20%", title: "Licensing & Security", how: "We verify every casino's license number directly with the issuing regulator's database — MGA, UKGC, Curacao eGaming, or other jurisdictions. We check SSL encryption (TLS 1.2+), data protection policies, and whether player funds are held in segregated accounts. A casino with an unverifiable or expired license is automatically disqualified from recommendation." },
  { weight: "15%", title: "Game Selection", how: "We audit the game lobby manually, counting titles per provider and verifying that advertised games are actually available to play. We assess variety across slots, table games, live dealer, video poker, and specialty games. Casinos with fewer than 200 quality titles or with heavy provider concentration score lower." },
  { weight: "15%", title: "Bonus Fairness", how: "We calculate the real wagering requirement (WR = bonus amount x wagering multiplier / (1 - game contribution rate)) and test whether the advertised terms are achievable within the stated expiry period. We check max bet rules, game restrictions, max cashout limits, and whether the bonus terms have hidden clauses. A bonus with WR over 40x is considered player-unfriendly." },
  { weight: "12%", title: "Payout Speed", how: "We make real test deposits and request withdrawals across available methods. We time each withdrawal from submission to funds hitting the account. E-wallet payouts under 24 hours score highest; bank transfers over 5 business days score lowest. We also check for hidden withdrawal fees and maximum withdrawal limits." },
  { weight: "10%", title: "Payment Options", how: "We evaluate the range of deposit and withdrawal methods — debit/credit cards, e-wallets (Skrill, Neteller, PayPal), bank transfers, and cryptocurrencies. We check minimum/maximum limits, processing times per method, and any fees charged. Crypto-friendly casinos with fast, no-fee transactions score higher." },
  { weight: "10%", title: "Customer Support", how: "We send test queries via live chat and email, measuring response time and resolution quality. We check whether support is available 24/7, what languages are supported, and whether phone support exists. Support that responds within 60 seconds with a knowledgeable answer scores top marks." },
  { weight: "7%", title: "Mobile Experience", how: "We test the casino on both iOS (Safari) and Android (Chrome) devices, evaluating page load speed, navigation, game responsiveness, and account management functionality." },
  { weight: "5%", title: "User Experience", how: "We evaluate the overall design, navigation structure, search functionality, registration flow, and account management ease. A well-designed site that lets players find games in under 10 seconds scores highest." },
  { weight: "4%", title: "Software Providers", how: "We verify the casino's game provider list against each provider's official distribution network. We check for RNG certification (eCOGRA, iTech Labs, GLI) and provider reputation." },
  { weight: "2%", title: "Responsible Gambling", how: "We check whether the casino offers deposit limits, loss limits, session timers, reality checks, self-exclusion, and time-out options. We verify that these tools are accessible within two clicks from any page." },
];

export default function HowWeRatePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Methodology</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">How We Rate Casinos</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Every casino on Royal Bet Guide is evaluated through a transparent 10-point scoring system. We test each casino firsthand and apply the same criteria consistently regardless of affiliate relationships.</p>
      </div>

      <div className="prose prose-slate mx-auto max-w-none">
        <p className="text-slate-700 leading-relaxed">Our rating system is designed to be transparent, rigorous, and repeatable. Each of the 10 criteria below is scored independently on a 1-10 scale. The weighted average produces the final overall rating. We do not accept payment for positive reviews, and every casino we recommend has been tested by our team.</p>

        <h2 className="mt-10 text-2xl font-bold text-corg-600">Our 10 Review Criteria</h2>

        <div className="mt-6 space-y-6">
          {CRITERIA.map((c, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-corg-600">{i + 1}. {c.title}</h3>
                <span className="shrink-0 rounded-full bg-gold-400/10 px-3 py-1 text-sm font-semibold text-gold-500">{c.weight}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{c.how}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold text-corg-600">Scoring Breakdown</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-2 pr-4 text-left font-semibold text-corg-600">Criterion</th>
                <th className="py-2 px-4 text-left font-semibold text-corg-600">Weight</th>
                <th className="py-2 pl-4 text-left font-semibold text-corg-600">Max Contribution</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((c, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="py-2 pr-4 text-slate-700">{c.title}</td>
                  <td className="py-2 px-4 text-slate-700">{c.weight}</td>
                  <td className="py-2 pl-4 text-slate-700">{parseInt(c.weight) / 10} / 10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-corg-600">Why Our Methodology Matters</h2>
        <p className="text-slate-700 leading-relaxed">Every player deserves to know exactly how a rating is determined. By publishing our full methodology, we ensure that you can evaluate our reviews with the same transparency we apply to the casinos themselves.</p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Update Frequency</h2>
        <p className="text-slate-700 leading-relaxed">We update each casino review at least quarterly, or whenever significant changes occur. If you find information that is outdated, please <Link href="/contact/" className="text-corg-500 hover:underline">contact us</Link>.</p>

        <div className="mt-10 text-center">
          <Link href="/reviews/" className="btn-gold inline-flex">Browse All Casino Reviews →</Link>
        </div>
      </div>
    </div>
  );
}
