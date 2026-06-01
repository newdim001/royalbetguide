import Link from "next/link";

export const metadata = {
  title: "Online Slots Guide 2026",
  description: "Master online slots with our expert guide. Learn about RTP, volatility, bonus features, and how to choose the best slot games.",
};

export default function GuidePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play Slots — Complete Guide 2026",
    description: "Master online slots with our expert guide. Learn about RTP, volatility, bonus features, and discover the best online casinos to play for real money.",
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
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/guides/" className="hover:text-corg-500">Guides</Link>
        <span className="mx-2">→</span>
        <span className="text-white">Online Slots</span>
      </div>

      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          🎮 Game Guide
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Online Slots Guide</h1>
        <p className="mt-2 text-slate-500">Master the game with expert tips and strategies</p>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">How to Play</h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          Whether you are a complete beginner or an experienced player, understanding the fundamentals is key to success.
          This guide covers everything you need to know about online slots.
        </p>
      </div>

      <div className="card-light mb-8">
        <h2 className="text-2xl font-bold text-white">Tips & Strategies</h2>
        <ul className="mt-3 space-y-3 text-slate-500">
          <li className="flex items-start gap-2">💡 <span>Learn the basic rules before placing real money bets</span></li>
          <li className="flex items-start gap-2">💡 <span>Start with free games to practice your strategy</span></li>
          <li className="flex items-start gap-2">💡 <span>Set a budget and stick to it — responsible gambling is key</span></li>
          <li className="flex items-start gap-2">💡 <span>Choose reputable online casinos with proper licensing</span></li>
        </ul>
      </div>

      <div className="rounded-2xl border border-corg-500/20 bg-corg-500/5 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Ready to Play for Real Money?</h2>
        <p className="mt-2 text-slate-500">Check out our top-rated casinos with exclusive welcome bonuses.</p>
        <Link href="/reviews/" className="btn-primary mt-4 inline-flex">View Top Casinos →</Link>
      </div>
    </div>
  );
}
