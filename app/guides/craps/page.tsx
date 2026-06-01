import Link from "next/link";

export const metadata = {
  title: "Craps Guide 2026 &mdash; Rules, House Edge & Best Online Casinos",
  description:
    "Master craps with our expert guide. Learn Pass Line (1.41% edge), Don't Pass (1.36%), Free Odds (0% edge &mdash; the best bet in the casino!), come-out roll mechanics, and where to play online.",
  alternates: { canonical: "https://royalbetguide.com/guides/craps/" },
};

export default function GuidePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play Craps — Complete Guide 2026",
    description: "Master craps with our expert guide. Learn the rules, betting strategies, odds, and discover the best online casinos to play for real money.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Learn the Rules", text: "Understand the basic rules, gameplay, and objectives of the game before placing any real money bets." },
      { "@type": "HowToStep", position: 2, name: "Understand the Odds", text: "Learn about the house edge, payout rates, and probability of different outcomes to make informed betting decisions." },
      { "@type": "HowToStep", position: 3, name: "Apply Basic Strategy", text: "Use proven strategies and techniques to improve your chances of winning. Practice with free games first." },
      { "@type": "HowToStep", position: 4, name: "Choose a Casino", text: "Select a licensed and regulated online casino with good game selection, fair rules, and favorable payout rates." },
      { "@type": "HowToStep", position: 5, name: "Manage Your Bankroll", text: "Set a budget, use proper bankroll management, and know when to stop. Always gamble responsibly." }
    ]
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">
          Home
        </Link>
        <span className="mx-2">&rarr;</span>
        <Link href="/guides/" className="hover:text-corg-500">
          Guides
        </Link>
        <span className="mx-2">&rarr;</span>
        <span className="text-white">Craps</span>
      </div>

      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          &#x1F3B0; Game Guide
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">
          Craps Guide
        </h1>
        <p className="mt-2 text-lg text-slate-500">
          Master the most exciting dice game in the casino with odds
          breakdowns, smart betting strategies, and top-rated casinos
        </p>
      </div>

      {/* Overview */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          What Is Craps?
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Craps is the most electrifying game on any casino floor. Players
          gather around a long table as the shooter throws a pair of dice, and
          everyone bets on the outcome. The energy is unmatched &mdash; but
          the crowded table and dizzying array of betting options can be
          intimidating to newcomers.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The truth is, craps is simpler than it looks. Every round revolves
          around two key concepts: the <strong>come-out roll</strong> and the{" "}
          <strong>point</strong>. Once you understand these, you can focus on
          the handful of bets that offer genuinely favourable odds. And here is
          the good news: craps has some of the best player odds in any casino
          game &mdash; including the legendary <strong>Free Odds bet</strong>,
          which carries a house edge of precisely <strong>0%</strong>.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          If you are brand new to the game, start with our{" "}
          <Link
            href="/guides/craps/how-to-play/"
            className="font-semibold text-corg-500 hover:text-corg-400"
          >
            detailed how-to-play guide
          </Link>{" "}
          for a complete walkthrough of the rules, dealing mechanics, and
          table layout.
        </p>
      </div>

      {/* The Come-Out Roll and Point */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          The Come-Out Roll &amp; Establishing the Point
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Every round of craps begins with the{" "}
          <strong>come-out roll</strong> &mdash; the first roll of the dice by
          the shooter. The result determines how the round unfolds:
        </p>
        <ul className="mt-3 space-y-2 text-slate-500">
          <li className="flex items-start gap-2">
            &#x1F3AF;{" "}
            <span>
              <strong>7 or 11 (natural)</strong> &mdash; Pass Line bets win
              immediately. Don&apos;t Pass bets lose.
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F3AF;{" "}
            <span>
              <strong>2, 3, or 12 (craps)</strong> &mdash; Pass Line bets
              lose. Don&apos;t Pass bets win (12 is a push at most tables).
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F3AF;{" "}
            <span>
              <strong>4, 5, 6, 8, 9, or 10</strong> &mdash; that number
              becomes the <strong>point</strong>. The dealer places a puck
              marked &ldquo;ON&rdquo; on the point, and the game enters the
              point phase.
            </span>
          </li>
        </ul>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Once the point is established, the shooter continues rolling until
          they either roll the point again (Pass Line wins) or roll a 7
          (called <strong>sevening out</strong>, which ends the shooter&apos;s
          turn). This back-and-forth creates the dramatic tension that makes
          craps so thrilling.
        </p>
      </div>

      {/* Pass Line Bet */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Pass Line Bet &mdash; House Edge: 1.41%
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The <strong>Pass Line</strong> is the most fundamental bet in craps
          and the ideal starting point for beginners. You place it before the
          come-out roll. If the shooter rolls 7 or 11, you win even money. If
          they roll 2, 3, or 12, you lose. If a point is established, your bet
          stays active and wins if the shooter rolls the point before a 7.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The house edge on the Pass Line is just{" "}
          <strong>1.41%</strong> &mdash; meaning you lose only $1.41 for every
          $100 wagered over the long run. That is already better than most
          slot machines (typically 3&ndash;10%) and many other table games.
          The true odds are 251 to 244, giving you a 49.29% chance of winning
          on any given round.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The real magic happens when you combine Pass Line bets with Free
          Odds &mdash; more on that below.
        </p>
      </div>

      {/* Don't Pass Bet */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Don&apos;t Pass Bet &mdash; House Edge: 1.36%
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The <strong>Don&apos;t Pass</strong> bet is the mathematical mirror
          of the Pass Line. You are betting <em>against</em> the shooter
          &mdash; that the come-out roll will be 2 or 3 (12 is a push, not a
          loss), or that the shooter will seven out before rolling the point.
          It also pays even money.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          With a house edge of <strong>1.36%</strong>, the Don&apos;t Pass is
          technically the best single bet you can make in craps. The edge is
          slightly lower than the Pass Line because a come-out 12 results in a
          push rather than a loss. However, many players avoid it because
          rooting against the shooter can feel awkward at a lively table. From
          a pure mathematical standpoint, it is the superior choice.
        </p>
      </div>

      {/* Free Odds Bet */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Free Odds Bet &mdash; House Edge: 0% (The Best Bet in the Casino!)
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          After a point is established, players who have a Pass Line or Come
          bet can take <strong>odds</strong> &mdash; placing an additional bet
          behind their original wager. This is the{" "}
          <strong>Free Odds bet</strong>, and it has a house edge of exactly{" "}
          <strong>0%</strong>. Yes, zero. No other bet in any casino game pays
          true mathematical odds with no house markup.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The payout depends on the point number:
        </p>
        <ul className="mt-3 space-y-2 text-slate-500">
          <li className="flex items-start gap-2">
            &#x1F4B0;{" "}
            <span>
              <strong>Point 4 or 10</strong> &mdash; Pays 2:1 (true odds)
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F4B0;{" "}
            <span>
              <strong>Point 5 or 9</strong> &mdash; Pays 3:2 (true odds)
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F4B0;{" "}
            <span>
              <strong>Point 6 or 8</strong> &mdash; Pays 6:5 (true odds)
            </span>
          </li>
        </ul>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Most casinos offer <strong>3x-4x-5x odds</strong>, meaning you can
          bet three times your Pass Line bet on points 4 and 10, four times on
          5 and 9, and five times on 6 and 8. Some casinos offer even higher
          multiples (10x, 20x, or 100x). Since the Free Odds carry no house
          edge, you should always take the maximum odds your bankroll allows
          &mdash; it is the single smartest move you can make at any casino
          table.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          When you combine a Pass Line bet (1.41% edge) with maximum Free
          Odds, your combined house edge drops dramatically. With 3x-4x-5x
          odds, the overall edge on your combined wager falls to roughly{" "}
          <strong>0.37%</strong>. With 100x odds, it approaches 0.02%. That is
          as close to a fair game as you will ever find in a casino.
        </p>
      </div>

      {/* Where to Play */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Where to Play Craps Online
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Finding a trustworthy online casino with fair craps rules is
          essential. The best platforms offer multiple dice game variants,
          generous odds multiples, and live dealer craps for an authentic
          experience. Licensed casinos regulated by the UK Gambling
          Commission, Malta Gaming Authority, or Curacao eGaming are your
          safest options.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Many top casinos feature <strong>live dealer craps</strong> powered
          by Evolution Gaming and other leading providers, bringing the energy
          of a real casino floor straight to your screen. You can also explore
          our dedicated{" "}
          <Link
            href="/games/table-games/"
            className="font-semibold text-corg-500 hover:text-corg-400"
          >
            table games section
          </Link>{" "}
          for more options and detailed game breakdowns.
        </p>
        <div className="mt-4">
          <Link
            href="/reviews/"
            className="btn-gold mt-4 inline-flex"
          >
            Browse Top-Rated Casinos &rarr;
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-corg-500/20 bg-corg-500/5 p-8 text-center">
        <h2 className="text-xl font-bold text-white">
          Ready to Roll the Dice?
        </h2>
        <p className="mt-2 text-slate-500">
          Sign up at a trusted casino, master the Pass Line with Free Odds,
          and experience the thrill of craps with real money on the line.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/reviews/" className="btn-gold">
            Best Craps Casinos &rarr;
          </Link>
          <Link
            href="/games/table-games/"
            className="btn-outline"
          >
            Explore Table Games
          </Link>
        </div>
      </div>
    </div>
  );
}
