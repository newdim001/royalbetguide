import Link from "next/link";

export const metadata = {
  title: "Blackjack Guide 2026 &mdash; Rules, Strategy & Best Online Casinos",
  description:
    "Master blackjack with our expert guide. Learn rules, basic strategy, house edge, card counting, and discover the best online casinos to play for real money.",
  alternates: { canonical: "https://royalbetguide.com/guides/blackjack/" },
};

export default function GuidePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play Blackjack — Rules and Strategy Guide",
    description: "Master blackjack with our expert guide. Learn rules, basic strategy, house edge, card counting, and discover the best online casinos to play for real money.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Understand the Objective",
        text: "The goal of blackjack is to beat the dealer by having a hand value closer to 21 without going over. Number cards are worth their face value, face cards (J, Q, K) are worth 10, and Aces can be 1 or 11."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Learn the Basic Moves",
        text: "You can Hit (take another card), Stand (keep your hand), Double Down (double your bet for one extra card), Split (separate matching cards into two hands), or Surrender (forfeit half your bet)."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Know the Dealer Rules",
        text: "The dealer must hit on 16 or less and stand on 17 or more. You win if your hand is closer to 21 than the dealer’s, or if the dealer busts. A natural blackjack (Ace + 10-value card) typically pays 3:2."
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Master Basic Strategy",
        text: "Use a mathematically derived basic strategy chart that tells you the optimal play for every hand combination against every dealer upcard. This reduces the house edge to as low as 0.5%."
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Manage Your Bankroll",
        text: "Set a loss limit and a win goal before you play. Never chase losses. Practice with free games first, then play at licensed online casinos for real money."
      }
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
        <span className="text-white">Blackjack</span>
      </div>

      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          &#x1F3B0; Game Guide
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">
          Blackjack Guide
        </h1>
        <p className="mt-2 text-lg text-slate-500">
          Master the world&apos;s most popular casino table game with expert
          strategies, rules breakdowns, and top-rated casinos
        </p>
      </div>

      {/* Overview */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          What Is Blackjack?
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Blackjack is the most widely played casino table game in the world
          &mdash; and for good reason. Unlike games of pure chance such as
          slots or roulette, blackjack pits you directly against the dealer
          using a blend of luck and skill. The objective is simple: draw cards
          whose total value is closer to 21 than the dealer&apos;s hand without
          exceeding it.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          What makes blackjack truly special is its exceptional return to
          player (RTP). When you follow basic strategy, the house edge drops
          to just <strong>0.5%</strong> &mdash; meaning a theoretical RTP of{" "}
          <strong>99.5%</strong>. This is significantly better than most slot
          machines (typically 92&ndash;97% RTP) and even many other table
          games. Few casino games offer odds this favorable to the player.
        </p>
      </div>

      {/* House Edge Explanation */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Understanding the House Edge in Blackjack
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The house edge is the mathematical advantage the casino holds over
          players over the long run. In blackjack, this edge varies wildly
          depending on the ruleset and how well you play. A game using 8 decks
          with the dealer hitting on soft 17, no surrender, and no
          double-after-split gives the house roughly a <strong>0.65%</strong>{" "}
          advantage against a basic strategy player.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          However, player-friendly rules can push the edge below{" "}
          <strong>0.25%</strong>:
        </p>
        <ul className="mt-3 space-y-2 text-slate-500">
          <li className="flex items-start gap-2">
            &#x2705;{" "}
            <span>
              <strong>Single-deck games</strong> &mdash; reduces the house
              edge by roughly 0.50%
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x2705;{" "}
            <span>
              <strong>Dealer stands on soft 17</strong> &mdash; cuts the edge
              by about 0.20%
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x2705;{" "}
            <span>
              <strong>Double after split allowed</strong> &mdash; shaves off
              0.14%
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x2705;{" "}
            <span>
              <strong>Late surrender offered</strong> &mdash; reduces the edge
              by 0.07%
            </span>
          </li>
        </ul>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The flip side: poor play can cost you dearly. Deviating from basic
          strategy or making decisions based on &ldquo;gut feeling&rdquo; can
          inflate the house edge to <strong>2&ndash;4%</strong> or more. That&apos;s
          why studying <strong>basic strategy</strong> is the single most
          important step any blackjack player can take.
        </p>
      </div>

      {/* Blackjack Variants */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Popular Blackjack Variants
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Not all blackjack games are created equal. Different variants offer
          unique rules, side bets, and playing experiences. Here are the most
          common ones you&apos;ll encounter at online casinos:
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-corg-500/10 bg-corg-500/[0.03] p-4">
            <h3 className="font-bold text-corg-600">European Blackjack</h3>
            <p className="mt-1 text-sm text-slate-500">
              Played with 2 decks. The dealer receives only one card face-up
              until you act. No hole card means no early surrender, but the
              single-deck variant offers excellent odds.
            </p>
          </div>
          <div className="rounded-lg border border-corg-500/10 bg-corg-500/[0.03] p-4">
            <h3 className="font-bold text-corg-600">American Blackjack</h3>
            <p className="mt-1 text-sm text-slate-500">
              The dealer gets two cards (one up, one down). If the upcard is
              an Ace, the dealer peeks for blackjack before play continues.
              Typically uses 6&ndash;8 decks.
            </p>
          </div>
          <div className="rounded-lg border border-corg-500/10 bg-corg-500/[0.03] p-4">
            <h3 className="font-bold text-corg-600">Live Dealer Blackjack</h3>
            <p className="mt-1 text-sm text-slate-500">
              Streamed in real-time from a studio or casino floor. You interact
              with a human dealer via chat. Combines the convenience of online
              play with the authenticity of a land-based casino.
            </p>
          </div>
        </div>
        <p className="mt-4 text-slate-500 leading-relaxed">
          Other notable variants include{" "}
          <strong>Spanish 21</strong> (all 10s removed, but player-friendly
          bonuses), <strong>Blackjack Switch</strong> (you play two hands and
          can swap cards between them), and{" "}
          <strong>Pontoon</strong> (a British variant where both dealer cards
          are face-down). Each variant changes the house edge and optimal
          strategy, so always check the rules before you play.
        </p>
      </div>

      {/* Quick Start — How to Play */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          How to Play Blackjack
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          If you&apos;re new to the game, don&apos;t worry &mdash; blackjack
          is easy to learn. Each player receives two cards, as does the dealer.
          Number cards are worth their face value, face cards (J, Q, K) are
          worth 10, and Aces can be 1 or 11. You can choose to{" "}
          <strong>Hit</strong> (take another card),{" "}
          <strong>Stand</strong> (keep your hand),{" "}
          <strong>Double Down</strong> (double your bet for one extra card),{" "}
          <strong>Split</strong> (separate two matching cards into two hands),
          or <strong>Surrender</strong> (forfeit half your bet).
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The dealer must hit on 16 or less and stand on 17 or more. You win
          if your hand is closer to 21 than the dealer&apos;s, or if the
          dealer busts (exceeds 21). A natural blackjack (Ace + 10-value card)
          typically pays <strong>3:2</strong>.
        </p>
        <div className="mt-4">
          <Link
            href="/guides/blackjack/how-to-play/"
            className="inline-flex items-center gap-1 font-semibold text-corg-500 hover:text-corg-400"
          >
            Read full how-to-play guide &rarr;
          </Link>
        </div>
      </div>

      {/* Basic Strategy & Card Counting */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Basic Strategy &amp; Card Counting
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          <strong>Basic strategy</strong> is a mathematically derived set of
          decisions that tells you the optimal play for every possible hand
          combination against every dealer upcard. It removes guesswork and
          reduces the house edge to its theoretical minimum. Memorising a
          basic strategy chart is the first step every serious blackjack
          player should take.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          For advanced players, <strong>card counting</strong> is a technique
          that tracks the ratio of high cards (10s, Aces) to low cards left in
          the deck. When the deck is rich in high cards, the player has a
          statistical advantage and can increase their bet size accordingly.
          Popular counting systems include <strong>Hi-Lo</strong>,{" "}
          <strong>KO</strong>, and <strong>Omega II</strong>. While legal,
          casinos reserve the right to ban counters &mdash; so discretion is
          advised.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/guides/blackjack/strategy/"
            className="inline-flex items-center gap-1 font-semibold text-corg-500 hover:text-corg-400"
          >
            Explore blackjack strategy &rarr;
          </Link>
          <Link
            href="/guides/blackjack/card-counting/"
            className="inline-flex items-center gap-1 font-semibold text-corg-500 hover:text-corg-400"
          >
            Learn card counting &rarr;
          </Link>
        </div>
      </div>

      {/* Tips Section */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Expert Tips for Blackjack Success
        </h2>
        <ul className="mt-3 space-y-3 text-slate-500">
          <li className="flex items-start gap-2">
            &#x1F4A1;{" "}
            <span>
              <strong>Always use basic strategy.</strong> Print a strategy
              chart and keep it next to you while you play. It&apos;s the
              single biggest factor in your long-term success.
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F4A1;{" "}
            <span>
              <strong>Avoid insurance bets.</strong> The insurance side bet
              has a house edge of roughly 7% &mdash; it&apos;s almost never
              worth taking, even for card counters.
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F4A1;{" "}
            <span>
              <strong>Find player-friendly rules.</strong> Look for single-deck
              games, dealer stands on soft 17, and 3:2 blackjack payouts.
              Avoid games that pay 6:5 on blackjack.
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F4A1;{" "}
            <span>
              <strong>Manage your bankroll.</strong> Set a loss limit and a
              win goal before you sit down. Never chase losses &mdash; the
              house edge always catches up in the long run.
            </span>
          </li>
          <li className="flex items-start gap-2">
            &#x1F4A1;{" "}
            <span>
              <strong>Practice for free first.</strong> Most online casinos
              offer free-play or demo modes. Use them to sharpen your skills
              before risking real money.
            </span>
          </li>
        </ul>
        <div className="mt-4">
          <Link
            href="/guides/blackjack/tips/"
            className="inline-flex items-center gap-1 font-semibold text-corg-500 hover:text-corg-400"
          >
            View all blackjack tips &rarr;
          </Link>
        </div>
      </div>

      {/* Best Online Casinos Section */}
      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">
          Where to Play Blackjack Online
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Choosing the right online casino is just as important as knowing the
          strategy. Look for platforms that offer multiple blackjack variants,
          fair rules, fast payouts, and generous welcome bonuses. Licensed
          casinos regulated by the UK Gambling Commission, Malta Gaming
          Authority, or Curacao eGaming are your safest options.
        </p>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Many top casinos also feature <strong>live dealer blackjack</strong>{" "}
          powered by Evolution Gaming, Playtech, or NetEnt &mdash; giving you
          an immersive experience with real dealers, real cards, and real-time
          action. You can also explore our dedicated{" "}
          <Link
            href="/games/table-games/"
            className="font-semibold text-corg-500 hover:text-corg-400"
          >
            table games section
          </Link>{" "}
          for more options.
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
          Ready to Put Your Knowledge to the Test?
        </h2>
        <p className="mt-2 text-slate-500">
          Sign up at a trusted casino and claim an exclusive welcome bonus
          today. Play blackjack with real money and experience the thrill
          firsthand.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/reviews/" className="btn-gold">
            Best Blackjack Casinos &rarr;
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
