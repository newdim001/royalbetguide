import Link from "next/link";
import CasinoLogo from "../../components/CasinoLogo";

const SWEEPSTAKES: Record<string, any> = {
  "chumba-casino": {
    name: "Chumba Casino",
    rating: 9.6,
    bonus: "2,000,000 Gold Coins + 2 Sweeps Coins FREE",
    slug: "chumba-casino",
    icon: "🎰",
    games: "200+",
    payout: "96.8%",
    established: "2017",
    license: "MGA, UKGC (sweepstakes model)",
    coinPackage: "2M Gold Coins + 2 SC Free",
    minRedemption: "100 SC",
    redemptionMethods: ["Bank Transfer", "ACH", "Gift Cards"],
    pros: [
      "One of the most trusted sweepstakes brands since 2017",
      "Generous welcome bonus with no purchase required",
      "Huge selection of slot and table games",
      "Daily login bonuses and frequent promotions",
      "Fast redemption processing for loyal players",
    ],
    cons: [
      "Limited game providers compared to newer platforms",
      "Redemption minimum is higher than some competitors",
      "No dedicated mobile app (mobile browser only)",
    ],
    gamesOffered: ["Slots", "Blackjack", "Video Poker", "Roulette", "Jackpot Games", "Baccarat", "Scratch Cards", "Keno"],
    howItWorks: "Chumba Casino operates on a dual-currency system. When you sign up, you receive 2,000,000 Gold Coins (GC) and 2 Sweeps Coins (SC) for free. Gold Coins are used for fun play, while Sweeps Coins can be redeemed for real cash prizes. You earn additional Sweeps Coins through gameplay wins, daily login bonuses, and mail-in sweepstakes offers. Once you accumulate 100 SC, you can redeem them for cash via bank transfer or gift cards.",
    description:
      "Chumba Casino is the original and most trusted sweepstakes casino, launched in 2017. With over 200 casino-style games, a generous free welcome bonus, and a proven track record of paying out millions in prizes, Chumba remains the gold standard in the social casino space. Players across the US can enjoy slots, blackjack, video poker, and more without spending a dime — and win real cash prizes when they redeem their Sweeps Coins.",
    faqs: [
      { q: "Is Chumba Casino legal in the US?", a: "Yes, Chumba Casino is fully legal in 49 US states. It operates under sweepstakes law, which classifies it as a promotional game rather than gambling. You do not need to make a purchase to play and win." },
      { q: "How do I redeem winnings from Chumba Casino?", a: "Once you have at least 100 Sweeps Coins, you can submit a redemption request. Payouts are processed via bank transfer (ACH) or gift cards. Processing typically takes 5-10 business days." },
      { q: "Does Chumba Casino have a mobile app?", a: "Chumba Casino does not have a dedicated mobile app, but their website is fully optimized for mobile browsers, offering the same game experience on iOS and Android devices." },
      { q: "Can I play Chumba Casino for free?", a: "Absolutely. Chumba Casino is free to play. You get a welcome bonus of 2M Gold Coins and 2 Sweeps Coins with no purchase required. Daily login bonuses and social media giveaways provide additional free coins." },
    ],
  },
  "luckland-slots": {
    name: "Luckland Slots",
    rating: 9.4,
    bonus: "5,000 Lucky Coins + 500 Sweeps Coins",
    slug: "luckland-slots",
    icon: "🍀",
    games: "250+",
    payout: "97.1%",
    established: "2020",
    license: "MGA (sweepstakes model)",
    coinPackage: "5,000 LC + 500 SC",
    minRedemption: "50 SC",
    redemptionMethods: ["Bank Transfer", "PayPal", "Gift Cards"],
    pros: [
      "Low 50 SC minimum redemption threshold",
      "Excellent slot variety with progressive jackpots",
      "Generous welcome package for new players",
      "Regular slot tournaments with cash prizes",
      "PayPal redemption option available",
    ],
    cons: [
      "Newer brand with shorter track record",
      "Limited table game selection",
      "No live dealer games available",
    ],
    gamesOffered: ["Slots", "Progressive Jackpots", "Video Poker", "Scratch Cards", "Keno", "Bingo"],
    howItWorks: "Luckland Slots uses Lucky Coins (LC) for fun play and Sweeps Coins (SC) for real prizes. New players receive 5,000 LC and 500 SC on sign up. You earn more SC by playing games with SC wagering, daily bonuses, and completing challenges. With a low 50 SC minimum, redeeming your winnings is easy and accessible compared to other platforms.",
    description:
      "Luckland Slots brings a fresh and vibrant approach to social sweepstakes gaming. With over 250 slot titles and a generous 5,000 Lucky Coins + 500 Sweeps Coins welcome package, it's quickly become a favorite among US players. The platform excels in slot variety, offering everything from classic three-reel slots to modern video slots with progressive jackpots. Luckland's low 50 SC redemption minimum makes it one of the most accessible platforms for cashing out your winnings.",
    faqs: [
      { q: "What is the minimum redemption at Luckland Slots?", a: "You can redeem your winnings starting at just 50 Sweeps Coins, which is one of the lowest thresholds in the industry. Redemptions are processed via bank transfer, PayPal, or gift cards." },
      { q: "Is Luckland Slots a legitimate sweepstakes casino?", a: "Yes, Luckland Slots operates legally under sweepstakes law. It is licensed and regulated, and no purchase is necessary to play or win real prizes." },
      { q: "What types of games does Luckland offer?", a: "Luckland focuses primarily on slots with over 250 titles, including progressive jackpot slots. They also offer video poker, scratch cards, keno, and bingo." },
      { q: "How do I earn free Sweeps Coins at Luckland?", a: "You receive 500 SC on sign up, plus you can earn more through daily login bonuses, social media promotions, mail-in offers, and by entering slot tournaments." },
    ],
  },
  "funzpoints": {
    name: "Funzpoints",
    rating: 9.2,
    bonus: "FREE 500 Funzpoints on Sign Up",
    slug: "funzpoints",
    icon: "🎯",
    games: "150+",
    payout: "96.5%",
    established: "2019",
    license: "Sweepstakes Law Compliant",
    coinPackage: "500 Free Funzpoints",
    minRedemption: "50 FP (Premium)",
    redemptionMethods: ["Bank Transfer", "Gift Cards"],
    pros: [
      "Simple and easy-to-understand currency system",
      "No purchase needed to earn premium points",
      "Fun, casual game library great for beginners",
      "Fast sign-up process with instant welcome bonus",
      "Regular new game additions and updates",
    ],
    cons: [
      "Smaller game library compared to competitors",
      "Premium (redeemable) points harder to earn than Sweeps on other platforms",
      "No table games or live dealer options",
    ],
    gamesOffered: ["Slots", "Classic Slots", "Video Slots", "Jackpot Games", "Scratch Cards", "Keno"],
    howItWorks: "Funzpoints uses a unique two-tier system: Free Funzpoints (play only) and Premium Funzpoints (redeemable for cash). New players get 500 Free Funzpoints immediately on sign up. Premium Funzpoints can be earned through gameplay, daily bonuses, and special promotions. Once you reach 50 Premium Funzpoints, you can redeem them for real cash prizes. The system is incredibly straightforward — play games, earn points, and cash out.",
    description:
      "Funzpoints is one of the most accessible sweepstakes casinos on the market, offering a streamlined experience that's perfect for beginners. Instead of the traditional Gold Coins and Sweeps Coins model, Funzpoints uses its own Funzpoints system: Free Funzpoints for entertainment and Premium Funzpoints that can be redeemed for cash. With over 150 games, daily promotions, and a no-purchase-necessary policy, Funzpoints makes it easy for anyone to start playing and winning real money prizes from day one.",
    faqs: [
      { q: "What are Premium Funzpoints?", a: "Premium Funzpoints are the redeemable currency on Funzpoints. Unlike Free Funzpoints which are for play only, Premium Funzpoints can be exchanged for real cash prizes when you reach the 50-point minimum." },
      { q: "Can I play Funzpoints without paying?", a: "Absolutely. Funzpoints gives you 500 Funzpoints for free on sign up. You can earn both Free and Premium Funzpoints through daily logins, free games, and promotions without ever spending money." },
      { q: "How many games does Funzpoints have?", a: "Funzpoints offers over 150 games including classic slots, video slots, jackpot games, scratch cards, and keno. The library is smaller than some competitors but focuses on quality and casual fun." },
      { q: "Is Funzpoints legal?", a: "Yes, Funzpoints operates legally under sweepstakes laws across the United States. It is free to play and no purchase is required to participate or win prizes." },
    ],
  },
  "global-poker": {
    name: "Global Poker",
    rating: 9.3,
    bonus: "$5 Free Sweeps Coins No Purchase Needed",
    slug: "global-poker",
    icon: "♠️",
    games: "Poker + 100+",
    payout: "97.0%",
    established: "2017",
    license: "MGA (sweepstakes model)",
    coinPackage: "$5 Free SC + 10,000 GC",
    minRedemption: "50 SC",
    redemptionMethods: ["Bank Transfer", "PayPal", "Gift Cards"],
    pros: [
      "Best sweepstakes platform for poker players",
      "Real-money-style tournament structure",
      "Low 50 SC redemption minimum",
      "Social features including chat and player clubs",
      "Excellent mobile experience on all devices",
    ],
    cons: [
      "Poker-focused — limited slot and table game selection",
      "Not ideal for players who prefer slots only",
      "Tournament schedule may be overwhelming for casual players",
    ],
    gamesOffered: ["Texas Hold'em", "Omaha", "Slot Games", "Blackjack", "Video Poker", "Bingo", "Keno"],
    howItWorks: "Global Poker combines social poker with sweepstakes gaming. You receive Gold Coins (for play) and Sweeps Coins (redeemable) on sign up. The poker rooms run cash games and tournaments where you compete for Sweeps Coins. You can also play slots and table games using the same dual-currency system. Winnings are redeemable for cash via bank transfer, PayPal, or gift cards with a 50 SC minimum, making it one of the most player-friendly platforms to cash out.",
    description:
      "Global Poker is the premier destination for poker enthusiasts in the sweepstakes casino world. Launched in 2017, it offers a full-fledged poker room with Texas Hold'em and Omaha cash games and tournaments, all playable with Sweeps Coins that can be redeemed for real cash prizes. Beyond poker, Global Poker also features a selection of slots, blackjack, video poker, and bingo games. The $5 free Sweeps Coins welcome bonus (no purchase needed) and low 50 SC redemption minimum make it an excellent choice for both poker players and casual gamers looking to win real prizes.",
    faqs: [
      { q: "Can I win real money playing poker on Global Poker?", a: "Yes, you can win real cash prizes by playing poker tournaments and cash games with Sweeps Coins. Global Poker operates under sweepstakes law, making it legal to win real money without making a deposit." },
      { q: "What is the bonus for new players at Global Poker?", a: "New players receive $5 worth of Sweeps Coins and 10,000 Gold Coins completely free with no purchase required. This gives you enough to start playing poker tournaments and casino games immediately." },
      { q: "Does Global Poker have a mobile app?", a: "Global Poker is fully optimized for mobile web browsers on iOS and Android devices. While there is no dedicated app, the mobile experience is smooth and responsive for both poker and casino games." },
      { q: "How fast are redemptions at Global Poker?", a: "Redemptions are typically processed within 5-10 business days. With a 50 SC minimum, Global Poker offers one of the most accessible and player-friendly cash-out processes in the sweepstakes industry." },
    ],
  },
  "stake-us": {
    name: "Stake.us",
    rating: 9.5,
    bonus: "1,000,000 GC + $25 Stake Cash",
    slug: "stake-us",
    icon: "🎲",
    games: "300+",
    payout: "97.8%",
    established: "2022",
    license: "Curacao (sweepstakes model)",
    coinPackage: "1M GC + $25 Stake Cash",
    minRedemption: "50 SC",
    redemptionMethods: ["Bitcoin", "Ethereum", "Litecoin", "USDT"],
    pros: [
      "Crypto-friendly with instant crypto redemptions",
      "Massive game library from top providers",
      "High payout rates across all game categories",
      "Innovative in-house games and original features",
      "Active community with regular live streams and giveaways",
    ],
    cons: [
      "Crypto-only redemption (no USD bank transfer)",
      "Newer brand in the US sweepstakes space (2022)",
      "Requires crypto knowledge for optimal redemption experience",
    ],
    gamesOffered: ["Slots", "Blackjack", "Roulette", "Video Poker", "Baccarat", "Craps", "Dice", "Live Dealer", "Original Games", "Sportsbook"],
    howItWorks: "Stake.us uses Gold Coins (GC) for fun play and Stake Cash (SC) — their version of Sweeps Coins — for real cash redemptions. New players receive 1,000,000 GC and $25 Stake Cash on sign up. You earn additional Stake Cash through gameplay, daily bonuses, challenges, and community events. Redemptions are processed in cryptocurrency (BTC, ETH, LTC, USDT), making it one of the fastest payout options in the sweepstakes space.",
    description:
      "Stake.us is the US sweepstakes arm of the globally renowned Stake.com brand, bringing the same premium gaming experience to American players. With over 300 games including slots, table games, live dealer, and original Stake-exclusive titles, plus a $25 Stake Cash welcome bonus, it's one of the most generous and feature-rich sweepstakes casinos available. The crypto-based redemption system means you can receive your winnings faster than traditional bank transfer options, often within hours rather than days.",
    faqs: [
      { q: "Is Stake.us different from Stake.com?", a: "Yes, Stake.us is the US-focused sweepstakes version of Stake.com. While Stake.com is a real-money crypto casino, Stake.us operates under sweepstakes laws with Gold Coins and Stake Cash, making it legal for US players." },
      { q: "What is the welcome bonus at Stake.us?", a: "New players receive 1,000,000 Gold Coins and $25 in Stake Cash completely free. No purchase is required to claim this bonus and start playing for real prizes." },
      { q: "How do I withdraw winnings from Stake.us?", a: "Stake.us processes redemptions in cryptocurrency including Bitcoin, Ethereum, Litecoin, and USDT. Crypto redemptions are typically processed within hours, making it one of the fastest payout systems available." },
      { q: "What games can I play on Stake.us?", a: "Stake.us offers over 300 games including slots, blackjack, roulette, baccarat, craps, video poker, live dealer games, original Stake games like Dice and Crash, and even a sportsbook section." },
    ],
  },
  "pulsz-casino": {
    name: "Pulsz Casino",
    rating: 9.1,
    bonus: "10,000 Gold Coins + 5 Sweeps Coins",
    slug: "pulsz-casino",
    icon: "💫",
    games: "700+",
    payout: "96.6%",
    established: "2021",
    license: "MGA (sweepstakes model)",
    coinPackage: "10,000 GC + 5 SC",
    minRedemption: "100 SC",
    redemptionMethods: ["Bank Transfer", "ACH", "Gift Cards"],
    pros: [
      "Massive 700+ game library from multiple providers",
      "Good variety of slots, table games, and live dealer",
      "Regular promotions and bonus drops",
      "Excellent VIP and loyalty program",
      "User-friendly interface with great mobile experience",
    ],
    cons: [
      "Higher 100 SC minimum for redemptions",
      "Newer brand compared to Chumba",
      "Limited crypto payment options",
    ],
    gamesOffered: ["Slots", "Blackjack", "Roulette", "Video Poker", "Baccarat", "Live Dealer", "Keno", "Scratch Cards"],
    howItWorks: "Pulsz Casino operates on the standard Gold Coins (GC) and Sweeps Coins (SC) model. New players receive 10,000 GC and 5 SC on sign up. GC is used for free play, while SC can be wagered for a chance to win more SC, which is redeemable for cash. You earn more SC through daily logins, promotions, mail-in offers, and gameplay wins. Redemptions start at 100 SC and are processed via bank transfer or gift cards.",
    description:
      "Pulsz Casino is a powerhouse in the sweepstakes space, offering over 700 games that rival even the largest real-money online casinos. With games from top providers, including high-quality slots, table games, and live dealer experiences, Pulsz provides an unmatched variety for social casino players. The 10,000 Gold Coins and 5 Sweeps Coins welcome bonus gives new players plenty to explore. While the 100 SC redemption minimum is higher than some competitors, the sheer game selection and frequent promotions make Pulsz a top choice.",
    faqs: [
      { q: "How many games does Pulsz Casino offer?", a: "Pulsz Casino offers over 700 games, making it one of the largest sweepstakes casinos by game count. This includes slots, table games, video poker, keno, and live dealer games." },
      { q: "What is the minimum redemption at Pulsz Casino?", a: "You need a minimum of 100 Sweeps Coins to request a redemption. Payouts are processed via bank transfer (ACH) or gift cards." },
      { q: "Is Pulsz Casino free to play?", a: "Yes, Pulsz Casino is completely free to play. You receive 10,000 Gold Coins and 5 Sweeps Coins on sign up with no purchase necessary. Additional coins are available through daily logins and promotions." },
      { q: "Does Pulsz Casino have live dealer games?", a: "Yes, Pulsz Casino offers live dealer games including blackjack and roulette, streamed in real-time with professional dealers — a rare feature in the sweepstakes casino space." },
    ],
  },
  "wow-vegas": {
    name: "Wow Vegas",
    rating: 9.0,
    bonus: "5,000 WOW Coins + 585 Sweeps Coins",
    slug: "wow-vegas",
    icon: "✨",
    games: "600+",
    payout: "96.4%",
    established: "2021",
    license: "MGA (sweepstakes model)",
    coinPackage: "5,000 WOW Coins + 585 SC",
    minRedemption: "100 SC",
    redemptionMethods: ["Bank Transfer", "ACH", "Gift Cards"],
    pros: [
      "Huge 600+ game library with diverse providers",
      "Generous welcome package with 585 Sweeps Coins",
      "Excellent selection of progressive jackpot slots",
      "Daily bonuses and ongoing promotions",
      "Fast website performance on mobile and desktop",
    ],
    cons: [
      "100 SC minimum redemption is on the higher side",
      "Limited table game variety",
      "No live dealer gaming options",
    ],
    gamesOffered: ["Slots", "Progressive Jackpots", "Video Poker", "Blackjack", "Roulette", "Keno", "Scratch Cards"],
    howItWorks: "Wow Vegas uses WOW Coins for entertainment and Sweeps Coins (SC) for redeemable prizes. New players receive 5,000 WOW Coins and 585 Sweeps Coins upon registration — one of the most generous welcome packages in the industry. You earn additional Sweeps Coins through gameplay, daily logins, and special promotions. When you reach 100 SC, you can redeem your winnings for real cash via bank transfer or gift cards.",
    description:
      "Wow Vegas delivers a dazzling sweepstakes experience with over 600 games and one of the most generous welcome bonuses in the industry — 5,000 WOW Coins plus 585 Sweeps Coins. The platform excels in slot variety, particularly progressive jackpot titles where players can win life-changing prizes. While it's strongest on slots, Wow Vegas also offers blackjack, roulette, and video poker. The 100 SC minimum redemption is standard for the industry, and the platform processes payouts reliably through bank transfer and gift card options.",
    faqs: [
      { q: "What makes Wow Vegas different from other sweepstakes casinos?", a: "Wow Vegas stands out with its massive 585 Sweeps Coins welcome bonus and over 600 slot-focused games. The platform emphasizes progressive jackpot slots that can pay out substantial prizes." },
      { q: "Is Wow Vegas legal in the US?", a: "Yes, Wow Vegas operates legally under sweepstakes law in the United States. Players in most states can sign up, play for free, and redeem real cash prizes without making a purchase." },
      { q: "What is the welcome bonus at Wow Vegas?", a: "New players receive 5,000 WOW Coins and 585 Sweeps Coins for free with no purchase required. This is one of the highest Sweeps Coin welcome offers available." },
      { q: "How do I redeem my winnings from Wow Vegas?", a: "Once you have at least 100 Sweeps Coins, you can redeem via bank transfer (ACH) or gift cards. Processing typically takes 5-10 business days." },
    ],
  },
  "mcluck": {
    name: "McLuck",
    rating: 8.9,
    bonus: "7,500 Gold Coins + 250 Sweeps Coins",
    slug: "mcluck",
    icon: "💰",
    games: "400+",
    payout: "96.2%",
    established: "2022",
    license: "Sweepstakes Law Compliant",
    coinPackage: "7,500 GC + 250 SC",
    minRedemption: "100 SC",
    redemptionMethods: ["Bank Transfer", "ACH", "Gift Cards"],
    pros: [
      "Great selection of 400+ games including exclusive titles",
      "Generous 7,500 GC + 250 SC welcome package",
      "Regular daily bonuses and mystery rewards",
      "Excellent for both slots and table game players",
      "Clean, modern interface that's easy to navigate",
    ],
    cons: [
      "Newer brand with shorter operating history",
      "100 SC minimum for redemptions",
      "No live dealer or sports betting options yet",
    ],
    gamesOffered: ["Slots", "Blackjack", "Roulette", "Video Poker", "Baccarat", "Keno", "Scratch Cards", "Craps"],
    howItWorks: "McLuck uses the standard Gold Coins (GC) and Sweeps Coins (SC) system. New players are welcomed with 7,500 GC and 250 SC. Gold Coins are for casual play, while Sweeps Coins can be wagered to win more SC, which is redeemable for real cash prizes. You can earn additional Sweeps Coins through daily logins, social media promotions, and mail-in sweepstakes offers. Redemptions of 100 SC or more are processed via bank transfer or gift cards.",
    description:
      "McLuck is one of the newest contenders in the sweepstakes casino space, having launched in 2022. Despite being relatively new, it has quickly built an impressive library of over 400 games and a loyal player base. The welcome package of 7,500 Gold Coins and 250 Sweeps Coins gives new players a strong start. McLuck excels in variety, offering a balanced mix of slots, blackjack, roulette, video poker, and even baccarat and craps. The modern interface and regular promotions make it a compelling choice for players looking for a fresh sweepstakes experience.",
    faqs: [
      { q: "Is McLuck a legitimate sweepstakes casino?", a: "Yes, McLuck operates legally under US sweepstakes law. It is free to play, and no purchase is necessary to win and redeem real prizes." },
      { q: "What is the welcome bonus at McLuck?", a: "New players at McLuck receive 7,500 Gold Coins and 250 Sweeps Coins completely free. No deposit or purchase is required to claim this welcome package." },
      { q: "How many games does McLuck offer?", a: "McLuck offers over 400 games including a wide variety of slots, blackjack, roulette, video poker, baccarat, keno, scratch cards, and craps." },
      { q: "What is the minimum redemption at McLuck?", a: "You can redeem your winnings starting at 100 Sweeps Coins. Redemptions are processed via bank transfer (ACH) or gift cards within 5-10 business days." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(SWEEPSTAKES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const casino = SWEEPSTAKES[slug];
  if (!casino) return {};
  return {
    title: casino.name + " Review 2026 — Sweepstakes Casino",
    description:
      "Read our expert review of " + casino.name + ". " +
      casino.bonus + ", " + casino.games + " games, " +
      casino.payout + " payout rate. Play for free and win real prizes.",
    alternates: {
      canonical: "https://royalbetguide.com/sweepstakes-casinos/" + slug + "/",
    },
    openGraph: {
      url: "https://royalbetguide.com/sweepstakes-casinos/" + slug + "/",
    },
    other: {
      "application/ld+json": JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: { "@type": "Organization", name: casino.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: casino.rating.toString(),
            bestRating: "10",
            worstRating: "0",
          },
          author: { "@type": "Organization", name: "Royal Bet Guide" },
          datePublished: "2026-01-15",
          description:
            "Read our expert review of " + casino.name + ". " +
            casino.bonus + ", " + casino.games + " games, " +
            casino.payout + " payout rate.",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: casino.faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: casino.name + " Sweepstakes Casino",
          description: casino.description,
          
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: casino.rating.toString(),
            bestRating: "10",
            ratingCount: "150",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://royalbetguide.com/" },
            { "@type": "ListItem", position: 2, name: "Sweepstakes Casinos", item: "https://royalbetguide.com/sweepstakes-casinos/" },
            { "@type": "ListItem", position: 3, name: casino.name, item: "https://royalbetguide.com/sweepstakes-casinos/" + slug + "/" },
          ],
        },
      ]),
    },
  };
}

export default async function SweepstakesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const casino = SWEEPSTAKES[slug];
  if (!casino) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center text-slate-500">
        Sweepstakes casino not found
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Affiliate Disclosure Banner */}
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        We may earn a commission if you sign up through our links. Play responsibly. 18+
      </div>

      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/sweepstakes-casinos/" className="hover:text-corg-500">Sweepstakes Casinos</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">{casino.name}</span>
      </div>

      {/* Hero Card */}
      <div className="rounded-xl bg-gradient-to-br from-corg-500 to-corg-600 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl"><CasinoLogo slug={casino.imgSlug || casino.slug} name={casino.name} size={48} /></span>
            <div>
              <h1 className="text-3xl font-extrabold text-white">{casino.name}</h1>
              <p className="text-gold-400 font-semibold">{casino.bonus}</p>
            </div>
          </div>
          <Link
            href={"/sweepstakes-casinos/" + slug + "/"}
            className="btn-gold whitespace-nowrap"
          >
            Claim Bonus →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <span className="rating-badge">⭐ {casino.rating}/10</span>
          <span className="text-white/70">
            🎮 <strong className="text-white">{casino.games}</strong> games
          </span>
          <span className="text-white/70">
            💰 <strong className="text-corg-green">{casino.payout}</strong> payout
          </span>
          <span className="text-white/70">
            📅 Est. <strong className="text-white">{casino.established}</strong>
          </span>
          <span className="text-white/70">
            🪙 Min. Redemption: <strong className="text-white">{casino.minRedemption}</strong>
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 text-slate-700 leading-relaxed">{casino.description}</p>

      {/* Quick Info Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold text-corg-600 uppercase tracking-wider">💰 Coin Package</h3>
          <p className="mt-1 text-slate-700 font-semibold">{casino.coinPackage}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold text-corg-600 uppercase tracking-wider">🎯 Min. Redemption</h3>
          <p className="mt-1 text-slate-700 font-semibold">{casino.minRedemption}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold text-corg-600 uppercase tracking-wider">💳 Redemption Methods</h3>
          <p className="mt-1 text-slate-700 font-semibold">{casino.redemptionMethods.join(", ")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold text-corg-600 uppercase tracking-wider">🔒 License</h3>
          <p className="mt-1 text-slate-700 font-semibold">{casino.license}</p>
        </div>
      </div>

      {/* Games Offered */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">🎮 Games Offered</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {casino.gamesOffered.map((g: string) => (
            <span
              key={g}
              className="rounded-full bg-corg-500/10 px-3 py-1 text-xs text-corg-500 font-medium"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">📖 How {casino.name} Works</h3>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{casino.howItWorks}</p>
      </div>

      {/* Pros & Cons */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-corg-green/20 bg-green-50 p-6">
          <h3 className="text-lg font-bold text-corg-green-dark">✅ Pros</h3>
          <ul className="mt-3 space-y-2">
            {casino.pros.map((p: string) => (
              <li key={p} className="text-sm text-slate-700">
                ✓ {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-50 p-6">
          <h3 className="text-lg font-bold text-red-600">❌ Cons</h3>
          <ul className="mt-3 space-y-2">
            {casino.cons.map((c: string) => (
              <li key={c} className="text-sm text-slate-700">
                ✗ {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-corg-600 mb-4">FAQ</h2>
        <div className="space-y-4">
          {casino.faqs.map((faq: any) => (
            <div
              key={faq.q}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-bold text-corg-600">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-corg-500 to-corg-600 p-8 text-center">
        <h3 className="text-xl font-bold text-white">
          Start Playing at {casino.name} for Free
        </h3>
        <p className="mt-2 text-white/70">
          Claim your free welcome package — no purchase required, real prizes available.
        </p>
        <Link
          href={"/sweepstakes-casinos/" + slug + "/"}
          className="btn-gold mt-4 inline-flex"
        >
          Claim {casino.bonus} →
        </Link>
      </div>
    </div>
  );
}
