import Link from "next/link";

export const metadata = {
  title: "Responsible Gambling",
  description: "Royal Bet Guide promotes responsible gambling. Find tips, tools, and support organizations for safe online gambling.",
  alternates: { canonical: "https://royalbetguide.com/responsible-gambling/" },
};

export default function ResponsibleGamblingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">Player Safety</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Responsible Gambling</h1>
        <p className="mt-2 text-slate-500">Play smart, stay safe, gamble responsibly</p>
      </div>

      <div className="prose prose-slate mx-auto max-w-none">
        <h2 className="text-2xl font-bold text-corg-600">Our Commitment</h2>
        <p className="text-slate-700 leading-relaxed">
          At Royal Bet Guide, we take responsible gambling seriously. While we provide expert reviews and exclusive bonuses, we believe that online gambling should always be a form of entertainment — not a way to make money or escape problems.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Know Your Limits</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li><strong>Set a budget:</strong> Only gamble with money you can afford to lose</li>
          <li><strong>Set time limits:</strong> Decide how long you will play before you start</li>
          <li><strong>Never chase losses:</strong> If you lose, accept it and walk away</li>
          <li><strong>Take breaks:</strong> Regular breaks help you stay in control</li>
          <li><strong>Don't gamble under the influence:</strong> Alcohol and drugs impair judgment</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Warning Signs</h2>
        <p className="text-slate-700 leading-relaxed">
          Gambling may become a problem if you experience any of the following:
        </p>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>Spending more time or money on gambling than you intended</li>
          <li>Borrowing money to gamble or pay gambling debts</li>
          <li>Lying to family or friends about your gambling</li>
          <li>Feeling irritable or anxious when not gambling</li>
          <li>Gambling to escape problems or negative feelings</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Tools & Features</h2>
        <p className="text-slate-700 leading-relaxed">
          Most reputable online casinos offer responsible gambling tools:
        </p>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li><strong>Deposit limits:</strong> Set daily, weekly, or monthly deposit caps</li>
          <li><strong>Loss limits:</strong> Control how much you can lose in a session</li>
          <li><strong>Time-out periods:</strong> Take short breaks from gambling</li>
          <li><strong>Self-exclusion:</strong> Block access to your account for extended periods</li>
          <li><strong>Reality checks:</strong> Receive reminders of how long you have been playing</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-corg-600">Get Help</h2>
        <p className="text-slate-700 leading-relaxed">
          If you or someone you know needs help with gambling, these organizations offer free, confidential support:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">GamCare</h3>
            <p className="mt-2 text-sm text-slate-500">Free confidential support<br/>Helpline: 0808 8020 133</p>
            <a href="https://www.gamcare.org.uk" target="_blank" rel="nofollow" className="mt-2 inline-block text-sm text-corg-500 hover:underline">gamcare.org.uk →</a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">Gamblers Anonymous</h3>
            <p className="mt-2 text-sm text-slate-500">12-step recovery program<br/>International meetings</p>
            <a href="https://www.gamblersanonymous.org" target="_blank" rel="nofollow" className="mt-2 inline-block text-sm text-corg-500 hover:underline">gamblersanonymous.org →</a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">BeGambleAware</h3>
            <p className="mt-2 text-sm text-slate-500">Information and advice<br/>Helpline: 0808 8020 133</p>
            <a href="https://www.begambleaware.org" target="_blank" rel="nofollow" className="mt-2 inline-block text-sm text-corg-500 hover:underline">begambleaware.org →</a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-corg-600">GamStop</h3>
            <p className="mt-2 text-sm text-slate-500">Free self-exclusion program<br/>UK-wide service</p>
            <a href="https://www.gamstop.co.uk" target="_blank" rel="nofollow" className="mt-2 inline-block text-sm text-corg-500 hover:underline">gamstop.co.uk →</a>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gold-400/20 bg-gold-400/5 p-6 text-center">
          <p className="text-lg font-semibold text-corg-600">18+ Only</p>
          <p className="mt-2 text-sm text-slate-500">All casinos reviewed on Royal Bet Guide are for players aged 18 and over. Always gamble responsibly.</p>
        </div>
      </div>
    </div>
  );
}
