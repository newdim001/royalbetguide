import Link from "next/link";

export const metadata = {
  title: "About Royal Bet Guide",
  description: "Learn about Royal Bet Guide — our mission to provide trusted, expert casino reviews and exclusive bonuses.",
  alternates: { canonical: "https://royalbetguide.com/about/" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">About Us</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">About Royal Bet Guide</h1>
      </div>

      <div className="prose prose-slate mx-auto max-w-none">
        <p className="text-lg text-slate-700 leading-relaxed">
          Royal Bet Guide is your trusted source for expert casino reviews, exclusive bonuses, and comprehensive betting guides. Founded in 2026, we help players find the best online casinos
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Our Mission</h2>
        <p className="text-slate-700 leading-relaxed">
          Our mission is simple: provide honest, unbiased, and detailed casino reviews that help players find safe, reputable, and enjoyable online gambling experiences. We test every casino ourselves and only recommend operators we trust.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">How We Review Casinos</h2>
        <p className="text-slate-700 leading-relaxed">
          Every casino on Royal Bet Guide is evaluated by our team across 12 objective criteria using a transparent 10-point scoring system. Our review methodology is publicly documented and applied consistently to every casino we review, regardless of affiliate relationships.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">1. Licensing &amp; Security (10%)</h3>
            <p className="mt-1 text-xs text-slate-500">Verified license validity, jurisdiction reputation, SSL encryption, and data protection policies.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">2. Game Selection (10%)</h3>
            <p className="mt-1 text-xs text-slate-500">Number and variety of games, quality of software providers, and exclusive titles.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">3. Bonus Fairness (10%)</h3>
            <p className="mt-1 text-xs text-slate-500">Wagering requirements, max withdrawal limits, game contribution percentages, and bonus expiry.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">4. Payout Speed (10%)</h3>
            <p className="mt-1 text-xs text-slate-500">Withdrawal processing times, payment method speed, and verified payout tests from our team.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">5. Payment Options (10%)</h3>
            <p className="mt-1 text-xs text-slate-500">Number and variety of deposit/withdrawal methods, fiat and crypto support, and fees.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">6. Customer Support (10%)</h3>
            <p className="mt-1 text-xs text-slate-500">Availability (24/7 vs limited hours), response times, channel variety, and language support.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">7. Mobile Experience (8%)</h3>
            <p className="mt-1 text-xs text-slate-500">Mobile browser optimization, dedicated app quality, and touch-friendly game interfaces.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">8. User Experience (8%)</h3>
            <p className="mt-1 text-xs text-slate-500">Website design, navigation, search functionality, and account management ease.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">9. Software Providers (8%)</h3>
            <p className="mt-1 text-xs text-slate-500">Quality and reputation of game developers powering the casino portfolio.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">10. Responsible Gambling (8%)</h3>
            <p className="mt-1 text-xs text-slate-500">Availability of deposit limits, self-exclusion, reality checks, and help resources.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">11. Reputation &amp; Track Record (4%)</h3>
            <p className="mt-1 text-xs text-slate-500">Years in operation, player complaints, industry awards, and independent audit history.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-bold text-corg-600 text-sm">12. Geographic Availability (4%)</h3>
            <p className="mt-1 text-xs text-slate-500">Country restrictions, language support, currency options, and regional regulation compliance.</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Each criterion is scored independently on a 1-10 scale. Weighted averages produce the final rating. We update reviews at least quarterly and whenever significant changes occur at a casino. Our full methodology is available <Link href="/how-we-rate/" className="text-corg-500 hover:underline">here</Link>.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Affiliate Disclosure</h2>
        <p className="text-slate-700 leading-relaxed">
          Royal Bet Guide earns revenue through affiliate commissions. When you click on a link and sign up at a casino, we may receive a commission at no extra cost to you. This helps us maintain our site and continue providing expert reviews. We only recommend casinos we have personally tested and trust.
        </p>


        <h2 className="mt-8 text-2xl font-bold text-corg-600">Our Editorial Policy</h2>
        <p className="text-slate-700 leading-relaxed">
          Royal Bet Guide is committed to editorial integrity and transparency. Our reviews are based on firsthand testing and objective evaluation criteria. We do not accept payment for positive reviews, and all affiliate relationships are clearly disclosed. Every casino we recommend has been vetted for licensing, security, game fairness, customer support, and responsible gambling practices.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Our review methodology evaluates casinos across ten key criteria: licensing and security, game selection, software providers, bonus fairness, payment options, withdrawal speed, customer support, mobile compatibility, user experience, and responsible gambling features. Each criterion is scored independently, and overall ratings reflect the weighted average of all factors.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          We update our reviews regularly to ensure accuracy. If you find information that is outdated or incorrect, please <Link href="/contact/" className="text-corg-500 hover:underline">contact us</Link> and we will investigate and update promptly.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Meet Our Team</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-corg-500/10 text-lg font-bold text-corg-500">RG</div>
              <div>
                <h3 className="font-bold text-corg-600">Royal Bet Guide Team</h3>
                <p className="text-xs text-slate-500">Casino Review &amp; Research</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Our team brings together extensive experience in iGaming, affiliate marketing, and player protection. We have evaluated over 50 online casinos across multiple licensing jurisdictions, assessing game fairness, payout reliability, and security standards.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-corg-500/10 text-lg font-bold text-corg-500">RG</div>
              <div>
                <h3 className="font-bold text-corg-600">Royal Bet Guide Team</h3>
                <p className="text-xs text-slate-500">Research &amp; Content</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Our research team has evaluated over 50 online casinos across licensing jurisdictions, game fairness, payout reliability, and player protection standards.</p>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Why Trust Royal Bet Guide?</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li><strong>Independent testing:</strong> Every casino is tested by real players, not automated scripts</li>
          <li><strong>Transparent scoring:</strong> Our rating methodology is publicly documented and consistent</li>
          <li><strong>Affiliate disclosure:</strong> We clearly disclose when we earn commissions</li>
          <li><strong>No paid reviews:</strong> Casinos cannot pay for positive ratings or removal of negative feedback</li>
          <li><strong>Regular updates:</strong> Reviews are updated at least quarterly to reflect current conditions</li>
          <li><strong>Player-first approach:</strong> Our recommendations prioritize player safety and value above all else</li>
        </ul>
        <h2 className="mt-8 text-2xl font-bold text-corg-600">Important Note</h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>Royal Bet Guide is an independent review site.</strong> We are not affiliated with RoyalBet, RoyalBet.top, or any casino operator. 
          We review and compare casinos — we do not operate them. If you encounter a site claiming to be us or using our name, please contact us immediately.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Responsible Gambling</h2>
        <p className="text-slate-700 leading-relaxed">
          We are committed to promoting responsible gambling. Online gambling should be fun and entertaining, not a way to make money. Always set limits, never chase losses, and only gamble what you can afford to lose. If gambling stops being fun, seek help from organizations like GamCare or Gamblers Anonymous.
        </p>
      </div>
    </div>
  );
}
