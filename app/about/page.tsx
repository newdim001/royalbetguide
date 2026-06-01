import Link from "next/link";

export const metadata = {
  title: "About Royal Bet Guide",
  description: "Learn about Royal Bet Guide — our mission to provide trusted, expert casino reviews and exclusive bonuses since 2026.",
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
          Royal Bet Guide is your trusted source for expert casino reviews, exclusive bonuses, and comprehensive betting guides. Launched 2026, we help players find the best online casinos
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Our Mission</h2>
        <p className="text-slate-700 leading-relaxed">
          Our mission is simple: provide honest, unbiased, and detailed casino reviews that help players find safe, reputable, and enjoyable online gambling experiences. We test every casino ourselves and only recommend operators we trust.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">How We Review</h2>
        <p className="text-slate-700 leading-relaxed">
          Every casino on Royal Bet Guide is evaluated across several key criteria: game selection, payout speed, bonus fairness, customer support, mobile experience, licensing, and security. We rate casinos on a 10-point scale and update our reviews regularly to ensure accuracy.
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

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Why Trust Royal Bet Guide?</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li><strong>Independent testing:</strong> Every casino is tested by real players, not automated scripts</li>
          <li><strong>Transparent scoring:</strong> Our rating methodology is publicly documented and consistent</li>
          <li><strong>Affiliate disclosure:</strong> We clearly disclose when we earn commissions</li>
          <li><strong>No paid reviews:</strong> Casinos cannot pay for positive ratings or removal of negative feedback</li>
          <li><strong>Regular updates:</strong> Reviews are updated at least quarterly to reflect current conditions</li>
          <li><strong>Player-first approach:</strong> Our recommendations prioritize player safety and value above all else</li>
        </ul>
        <h2 className="mt-8 text-2xl font-bold text-corg-600">Responsible Gambling</h2>
        <p className="text-slate-700 leading-relaxed">
          We are committed to promoting responsible gambling. Online gambling should be fun and entertaining, not a way to make money. Always set limits, never chase losses, and only gamble what you can afford to lose. If gambling stops being fun, seek help from organizations like GamCare or Gamblers Anonymous.
        </p>
      </div>
    </div>
  );
}
