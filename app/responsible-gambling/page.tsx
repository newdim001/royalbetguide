import Link from "next/link";

export const metadata = {
  title: "Responsible Gambling — Tools, Tips & Support",
  description:
    "Royal Bet Guide promotes responsible gambling. Find practical tools, warning signs, step-by-step limit-setting guides, self-exclusion programs (GAMSTOP & more), and free confidential help organisations for safe online gambling.",
  alternates: { canonical: "https://royalbetguide.com/responsible-gambling/" },
};

export default function ResponsibleGamblingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ── Header ── */}
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          Player Safety
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">
          Responsible Gambling
        </h1>
        <p className="mt-2 text-slate-500">
          Play smart, stay safe, gamble responsibly
        </p>
      </div>

      <div className="prose prose-slate mx-auto max-w-none">
        {/* ── Stronger Intro ── */}
        <h2 className="mt-8 text-2xl font-bold text-corg-600">
          Our Commitment to Safer Gambling
        </h2>
        <p className="text-slate-700 leading-relaxed">
          At Royal Bet Guide, we believe online gambling should always remain
          a form of entertainment — never a way to make money, solve financial
          problems, or escape emotional distress. Every casino review, bonus
          guide, and tip we publish comes with the same message:{" "}
          <strong>play within your means</strong>.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          This dedicated hub brings together the tools, warning signs, support
          organisations, and practical step-by-step guides you need to stay in
          control. Whether you are a seasoned player or placing your first bet,
          responsible gambling starts with knowing your limits — and knowing
          where to turn if things stop being fun.
        </p>

        {/* ── Tools for Safe Gambling ── */}
        <h2 className="mt-8 text-2xl font-bold text-corg-600">
          Tools for Safe Gambling
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Most reputable online casinos provide built-in tools that let you
          control how much you wager, how long you play, and whether you can
          access your account at all. Here is how each one works:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Deposit Limits
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Set a cap on how much money you can deposit into your account over
              a chosen period — daily, weekly, or monthly. Once the limit is
              reached, further deposits are blocked until the period resets.
              Limits can usually be lowered instantly but take 24–72 hours to
              increase, giving you a cooling-off period.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Loss Limits
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Similar to deposit limits but focused on net losses. Once your
              total losses (winnings minus bets) hit the threshold, the session
              is locked. This prevents a bad streak from snowballing into
              significant financial harm.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Session Timers
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A countdown or alarm that notifies you when you have been playing
              for a set amount of time. Some casinos automatically log you out
              when the timer expires, forcing a deliberate decision to
              re-enter.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Self-Exclusion
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A voluntary ban from your account that can last from 6 months to
              several years — or even permanently. During the exclusion period
              the casino cannot market to you, accept deposits, or allow you to
              play. This is the most powerful tool in the responsible-gambling
              toolkit.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Reality Checks
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Pop-up reminders that appear at regular intervals (e.g. every 30
              or 60 minutes) showing your current session time, total bets, and
              net win/loss. Reality checks help interrupt“autopilot” play and
              give you a moment to assess whether you still want to continue.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Time-Out Periods
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A short-term break — 24 hours, 7 days, or 30 days — that
              temporarily suspends your account. Time-outs are ideal for
              cooling off after a big win or loss without committing to a
              long-term self-exclusion.
            </p>
          </div>
        </div>

        {/* ── How to Recognise Problem Gambling ── */}
        <h2 className="mt-8 text-2xl font-bold text-corg-600">
          How to Recognise Problem Gambling
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Gambling becomes a problem when it starts to harm your finances,
          relationships, or mental health. The following warning signs are used
          by the UK Gambling Commission and leading support organisations like
          GamCare to help people self-assess:
        </p>

        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Chasing losses:</strong> Increasing your bets or playing
                longer to try to win back money you have lost.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Borrowing to gamble:</strong> Taking out loans, using
                credit cards, or asking friends and family for money to fund
                play or pay gambling debts.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Lying about gambling:</strong> Hiding the amount of time
                or money you spend from partners, family members, or colleagues.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Irritability when not playing:</strong> Feeling restless,
                anxious, or irritable when you try to cut down or stop gambling.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Gambling to escape:</strong> Using gambling as a way to
                cope with stress, depression, loneliness, or boredom.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Preoccupation:</strong> Constantly thinking about
                gambling — reliving past wins, planning the next session, or
                figuring out how to get more money to gamble with.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Neglecting responsibilities:</strong> Missing work,
                failing to pay bills on time, or skipping social commitments to
                gamble.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-corg-500">⚠️</span>
              <span>
                <strong>Increasing bets over time:</strong> Needing to wager
                larger amounts to feel the same level of excitement — a sign of
                gambling tolerance.
              </span>
            </li>
          </ul>
        </div>

        <p className="mt-4 text-slate-700 leading-relaxed">
          If you recognise <strong>two or more</strong> of these signs in
          yourself or someone close to you, it is worth reaching out to one of
          the support organisations listed below. Early help makes recovery
          significantly easier.
        </p>

        {/* ── Setting Limits at Casinos ── */}
        <h2 className="mt-8 text-2xl font-bold text-corg-600">
          Setting Limits at Casinos — A Step-by-Step Guide
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Every casino account has a responsible-gambling section. Here is a
          practical walkthrough for setting up your safeguards before you start
          playing:
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-corg-500 text-sm font-bold text-white">
                1
              </span>
              <h3 className="font-bold text-corg-600">
                Find the Responsible Gambling Section
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Log into your account and look for a link labelled{" "}
              <strong>Responsible Gambling</strong>,{" "}
              <strong>Player Safety</strong>, or{" "}
              <strong>My Limits</strong> — usually in the account settings
              or banking menu. Most UK-licensed casinos place this front and
              centre.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-corg-500 text-sm font-bold text-white">
                2
              </span>
              <h3 className="font-bold text-corg-600">
                Start with a Deposit Limit
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Set a daily, weekly, or monthly deposit cap. A common starting
              point is <strong>£50 per week</strong>. You can adjust later, but
              increases typically take 24–72 hours to take effect — so choose a
              low initial value and increase it gradually if needed.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-corg-500 text-sm font-bold text-white">
                3
              </span>
              <h3 className="font-bold text-corg-600">
                Enable Reality Check Reminders
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Turn on reality checks set to <strong>30-minute intervals</strong>
              . The pop-up will tell you how long you have been playing and your
              current win/loss. Use it as a prompt to ask yourself:{" "}
              <em>“Do I still want to play, or is it time to log off?”</em>
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-corg-500 text-sm font-bold text-white">
                4
              </span>
              <h3 className="font-bold text-corg-600">
                Set a Session Timer
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Many casinos let you set a session timer that logs you out
              automatically. Try <strong>60 minutes</strong> for casual sessions
              or <strong>90 minutes</strong> if you are playing a slower game
              like blackjack. You can always log back in after a short break.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-corg-500 text-sm font-bold text-white">
                5
              </span>
              <h3 className="font-bold text-corg-600">
                Review and Adjust Regularly
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Revisit your limits every <strong>4–6 weeks</strong>. If you find
              yourself hitting deposit caps frequently, consider lowering them
              rather than raising them. If you have not used a particular casino
              in months, review whether you still need the account open.
            </p>
          </div>
        </div>

        {/* ── Self-Exclusion Programs ── */}
        <h2 className="mt-8 text-2xl font-bold text-corg-600">
          Self-Exclusion Programs
        </h2>
        <p className="text-slate-700 leading-relaxed">
          For players who need stronger protection, multi-operator self-exclusion
          schemes let you block yourself from hundreds of casinos and betting
          sites at once, not just one account.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              GAMSTOP (UK-wide)
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The UK&rsquo;s national online self-exclusion scheme. A single
              registration blocks you from all UK Gambling Commission-licensed
              sites for a chosen period of 6 months, 1 year, or 5 years. After
              the period ends, there is a 24-hour cooling-off window before you
              can remove the exclusion. Over 400,000 people have registered with
              GAMSTOP since its launch.
            </p>
            <a
              href="https://www.gamstop.co.uk"
              target="_blank"
              rel="nofollow"
              className="mt-2 inline-block text-sm font-medium text-corg-500 hover:underline"
            >
              gamstop.co.uk →
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              National &amp; Regional Programs
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Many other countries operate their own schemes:{" "}
              <strong>BETMGA</strong> in Malta,{" "}
              <strong>Norsk Tipping Excluded Players Register</strong> in Norway,
              <strong>Spelpaus</strong> in Sweden, and{" "}
              <strong>Rofus</strong> (Register of Excluded Players) in Denmark.
              If you are registered in one jurisdiction, always check whether
              the casino you are using is covered by that scheme.
            </p>
          </div>
        </div>

        <p className="mt-4 text-slate-700 leading-relaxed">
          Self-exclusion is not a quick fix — it is a serious commitment. We
          recommend speaking with a support organisation like GamCare before
          registering so you have a plan in place for what to do with the time
          and money you were spending on gambling.
        </p>

        {/* ── Help Organisations ── */}
        <h2 className="mt-8 text-2xl font-bold text-corg-600">
          Help Organisations — Free, Confidential Support
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Whether you are concerned about your own gambling or someone else&rsquo;s,
          these organisations offer free, confidential advice 24/7.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">GamCare</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The UK&rsquo;s leading provider of free information, advice, and
              support for anyone affected by problem gambling. GamCare runs a
              24/7 helpline, live chat, and online forums as well as face-to-face
              counselling across England, Scotland, and Wales.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-700">
              Helpline: 0808 8020 133
            </p>
            <a
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="nofollow"
              className="mt-2 inline-block text-sm font-medium text-corg-500 hover:underline"
            >
              gamcare.org.uk →
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Gamblers Anonymous
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A worldwide 12-step fellowship of men and women who share their
              experience, strength, and hope to help each other recover from
              gambling problems. Meetings are free, anonymous, and open to
              anyone — you do not need to have hit “rock bottom” to attend.
            </p>
            <a
              href="https://www.gamblersanonymous.org"
              target="_blank"
              rel="nofollow"
              className="mt-2 inline-block text-sm font-medium text-corg-500 hover:underline"
            >
              gamblersanonymous.org →
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">Gam-Anon</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A fellowship specifically for the <strong>family and friends</strong>{" "}
              of problem gamblers. Gam-Anon provides a safe space to share
              experiences, learn coping strategies, and find support from others
              in the same situation.
            </p>
            <a
              href="https://www.gam-anon.org"
              target="_blank"
              rel="nofollow"
              className="mt-2 inline-block text-sm font-medium text-corg-500 hover:underline"
            >
              gam-anon.org →
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              BeGambleAware
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              An independent charity that provides clear, balanced information
              about gambling and how to stay in control. Their website includes
              a free self-assessment test, practical tips, and links to local
              treatment services across the UK.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-700">
              Helpline: 0808 8020 133
            </p>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="nofollow"
              className="mt-2 inline-block text-sm font-medium text-corg-500 hover:underline"
            >
              begambleaware.org →
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              Gambling Therapy
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A global online support service offering free, multilingual
              counselling and peer support. Gambling Therapy is especially
              valuable for players outside the UK who may not have access to
              local organisations. Services include live chat, email, and
              moderated forums.
            </p>
            <a
              href="https://www.gamblingtherapy.org"
              target="_blank"
              rel="nofollow"
              className="mt-2 inline-block text-sm font-medium text-corg-500 hover:underline"
            >
              gamblingtherapy.org →
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <h3 className="font-bold text-corg-600">
              National Gambling Helpline
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              A single UK helpline operated jointly by GamCare and the
              Gordon Moody Association. It provides immediate, non-judgemental
              support, help setting up blocking software, and referrals to
              specialist treatment if needed.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-700">
              Helpline: 0808 8020 133
            </p>
          </div>
        </div>

        {/* ── Get Help Now CTA ── */}
        <div className="mt-12 rounded-lg border-2 border-corg-500 bg-corg-500/5 p-6 text-center sm:p-8">
          <h2 className="text-2xl font-extrabold text-corg-600">
            Get Help Now
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            If gambling is causing you stress, financial trouble, or strain on
            your relationships, <strong>you are not alone</strong>. Help is
            available, and it works. Thousands of people in the UK seek support
            every year, and the vast majority say their situation improved
            significantly within three months.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center rounded-lg bg-corg-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-corg-600"
            >
              Chat to GamCare
            </a>
            <a
              href="https://www.gamblersanonymous.org"
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center rounded-lg border-2 border-corg-500 px-6 py-3 text-sm font-semibold text-corg-600 transition hover:bg-corg-500 hover:text-white"
            >
              Find a GA Meeting
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            All conversations are free, anonymous, and confidential. You can
            call the National Gambling Helpline anytime on{" "}
            <strong>0808 8020 133</strong>.
          </p>
        </div>

        {/* ── Footer note ── */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 text-center">
          <p className="text-lg font-semibold text-corg-600">
            18+ Only — Gamble Responsibly
          </p>
          <p className="mt-2 text-sm text-slate-500">
            All casinos reviewed on Royal Bet Guide are licensed for players
            aged 18 and over. We encourage every player to set limits, take
            breaks, and never gamble more than they can afford to lose. If you
            need help, call{" "}
            <strong className="text-slate-700">0808 8020 133</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
