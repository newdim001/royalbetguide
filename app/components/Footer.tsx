import Link from "next/link";

const FOOTER_LINKS = {
  "Casino Reviews": [
    { label: "Jackpot City", href: "/reviews/jackpot-city-casino/" },
    { label: "Spin Casino", href: "/reviews/spin-casino/" },
    { label: "Stake", href: "/reviews/stake/" },
    { label: "BitStarz", href: "/reviews/bitstarz/" },
    { label: "All Reviews →", href: "/reviews/" },
  ],
  "Top Picks": [
    { label: "Best Bonuses", href: "/bonus/" },
    { label: "Free Slots", href: "/free-slots/" },
    { label: "US Casinos", href: "/us/" },
    { label: "Best Sportsbooks", href: "/best-sportsbooks/" },
    { label: "Free Games", href: "/games/free/" },
  ],
  "US & UK": [
    { label: "Pennsylvania Casinos", href: "/region/pennsylvania/" },
    { label: "Michigan Casinos", href: "/region/michigan/" },
    { label: "New Jersey Sportsbooks", href: "/sports/new-jersey-sportsbooks/" },
    { label: "PA Sportsbooks", href: "/sports/pennsylvania-sportsbooks/" },
    { label: "Non-GamStop Casinos", href: "/blog/non-gamstop-casinos-uk/" },
    { label: "US Sports Betting Guide", href: "/blog/us-sports-betting-guide-2026/" },
  ],
  Resources: [
    { label: "Slots Guide", href: "/guides/slots/" },
    { label: "Blackjack Guide", href: "/guides/blackjack/" },
    { label: "Roulette Guide", href: "/guides/roulette/" },
    { label: "Poker Guide", href: "/guides/poker/" },
  ],
  "Trust & Safety": [
    { label: "About Us", href: "/about/" },
    { label: "How We Review", href: "/features/" },
    { label: "Responsible Gambling", href: "/responsible-gambling/" },
    { label: "Contact Us", href: "/contact/" },
  ],
  Languages: [
    { label: "🇬🇧 English", href: "/" },
    { label: "🇩🇪 Deutsch", href: "/de/" },
    { label: "🇫🇷 Français", href: "/fr/" },
    { label: "🇪🇸 Español", href: "/es/" },
    { label: "🇮🇹 Italiano", href: "/it/" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-auto bg-lt-footer">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg sm:h-12 sm:w-12">
              <img src="/logo.svg" alt="Royal Bet Guide" className="h-full w-full object-contain" />
            </div>
            <span className="text-lg font-bold text-white">Royal Bet Guide</span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            Your trusted source for online casino reviews, betting guides, and bonus comparisons since 2026.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400/80">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/50 transition-colors hover:text-gold-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Royal Bet Guide. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <Link href="/privacy/" className="hover:text-gold-400">Privacy</Link>
              <Link href="/terms/" className="hover:text-gold-400">Terms</Link>
              <Link href="/responsible-gambling/" className="hover:text-gold-400">Responsible Gambling</Link>
              <Link href="/contact/" className="hover:text-gold-400">Contact</Link>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-white/30">
            <span className="rounded border border-white/10 px-2 py-0.5">18+</span>
            <span className="rounded border border-white/10 px-2 py-0.5">🔞</span>
            <span>We may earn a commission if you sign up through our links.</span>
          </div>
          <div className="mt-3 text-center text-[10px] text-white/20 leading-relaxed">
            Royal Bet Guide is an independent information resource. We are not a gambling operator.
            Gambling involves financial risk. Only gamble with money you can afford to lose.
            If you or someone you know has a gambling problem, please call <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener" className="text-gold-400/60 hover:text-gold-400">Gambling Therapy</a> or <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener" className="text-gold-400/60 hover:text-gold-400">GamCare</a>.
          </div>
        </div>
      </div>
    </footer>
  );
}
