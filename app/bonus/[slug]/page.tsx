import Link from "next/link";

const BONUSES: Record<string, any> = {
  "jackpot-city-casino": {
    name: "Jackpot City Casino", bonus: "$1,600 Welcome Bonus",
    type: "Welcome", wagering: "30x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "New players at Jackpot City can claim a massive $1,600 welcome bonus spread across your first 4 deposits. This generous package gives you plenty of extra funds to explore over 850 games.",
    terms: "Minimum deposit $10. Wagering requirement 30x on bonus amount. Game contributions vary — slots contribute 100%, table games contribute less. T&Cs apply.",
  },
  "spin-casino": {
    name: "Spin Casino", bonus: "$1,000 Welcome Package",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Spin Casino offers a $1,000 welcome package for new players. Enjoy bonus funds across your first deposits with one of the most trusted names in online gaming.",
    terms: "Minimum deposit $10. 35x wagering requirement. Available to new players only. Game restrictions apply.",
  },
  "ruby-fortune-casino": {
    name: "Ruby Fortune Casino", bonus: "$750 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Ruby Fortune welcomes new players with a $750 bonus package. Start your journey with extra funds at this trusted casino that has been operating since 2003.",
    terms: "Minimum deposit $10. 35x wagering. New players only. Please gamble responsibly.",
  },
  "royal-vegas": {
    name: "Royal Vegas Casino", bonus: "$1,200 Welcome Bonus",
    type: "Welcome", wagering: "30x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Royal Vegas rewards new players with a $1,200 welcome bonus. With over 900 games and a fantastic VIP program, this casino offers a truly royal experience.",
    terms: "$10 min deposit. 30x wagering. Valid for new players. T&Cs apply.",
  },
  "stake": {
    name: "Stake Casino", bonus: "Crypto Welcome Bonus",
    type: "Crypto", wagering: "0x", minDeposit: "0.0001 BTC", validUntil: "Ongoing",
    code: "Auto-credited", crypto: true,
    details: "Stake offers a unique crypto welcome bonus for new players. As a leading crypto casino, Stake provides instant withdrawals and no wagering requirements on many promotions.",
    terms: "Deposit and play with crypto. Wagering varies by promotion. Available in supported regions only.",
  },
  "bitstarz": {
    name: "BitStarz Casino", bonus: "5 BTC + 200 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.0001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "BitStarz offers one of the most generous crypto welcome packages in the industry — 5 BTC + 200 free spins. This award-winning casino has been a favorite since 2014.",
    terms: "Minimum crypto deposit required. 35x wagering on bonus. Free spins awarded on select slots. T&Cs apply.",
  },
  "bc-game": {
    name: "BC.Game", bonus: "Up to $20,000 + 200 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "Auto-credited", crypto: true,
    details: "BC.Game welcomes new players with up to $20,000 + 200 free spins. With 200+ supported cryptocurrencies and 8000+ games, it's a crypto gaming paradise.",
    terms: "First deposit bonus up to $20,000. 35x wagering. Free spins on selected games. T&Cs apply.",
  },
  "leovegas": {
    name: "LeoVegas Casino", bonus: "$1,000 + 200 Free Spins",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "LeoVegas offers new players $1,000 + 200 free spins. The king of mobile casino gaming delivers an exceptional experience with 3000+ optimized games.",
    terms: "New players only. $10 min deposit. 35x wagering. Free spins on Book of Dead. T&Cs apply.",
  },
  "betway": {
    name: "Betway Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "40x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Betway offers a $1,000 welcome bonus for new casino players. As a globally trusted brand since 2006, Betway delivers a premium gaming experience.",
    terms: "New players. $10 min deposit. 40x wagering. Available in select regions.",
  },
  "22bet": {
    name: "22Bet Casino", bonus: "$300 Welcome Bonus",
    type: "Welcome", wagering: "40x", minDeposit: "€1", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "22Bet offers a $300 welcome bonus with a minimum deposit of just €1. With crypto support and a massive sportsbook, it's great value for new players.",
    terms: "€1 minimum deposit. 40x wagering. Available to new players. T&Cs apply.",
  },
  "hell-spin": {
    name: "Hell Spin Casino", bonus: "$500 + 150 Free Spins",
    type: "Welcome", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Hell Spin greets new players with $500 + 150 free spins. This modern casino combines a sleek interface with a huge game library and fast withdrawals.",
    terms: "$20 min deposit. 35x wagering. 150 free spins on selected slots. First 3 deposits.",
  },
  "play-ojo": {
    name: "PlayOJO Casino", bonus: "50 Free Spins No Deposit",
    type: "No Deposit", wagering: "35x", minDeposit: "$0", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "PlayOJO offers 50 free spins with no deposit required — just sign up and play. Famous for its fair play policy with no wagering requirements on cashback.",
    terms: "No deposit required. 35x wagering on free spin winnings. New players only. Max withdrawal from free spins applies.",
  },
  "katsubet": {
    name: "KatsuBet Casino", bonus: "325% + 200 Free Spins",
    type: "Welcome", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "KATSU200", crypto: true,
    details: "KatsuBet offers a massive 325% bonus + 200 free spins for new players. With 7000+ games, this is one of the most generous welcome packages available.",
    terms: "Use code KATSU200. $20 min deposit. 35x wagering. Free spins on selected slots.",
  },
  "mirax-casino": {
    name: "Mirax Casino", bonus: "$500 + 200 Free Spins",
    type: "Welcome", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Mirax Casino welcomes new players with $500 + 200 free spins. This modern platform offers 5000+ games with fast withdrawals.",
    terms: "$20 min deposit. 35x wagering. Free spins on first deposit. New players only.",
  },
  "7bit-casino": {
    name: "7BitCasino", bonus: "5 BTC + 250 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.0001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "7BitCasino offers 5 BTC + 250 free spins to new players. A crypto pioneer since 2014 with 5000+ games from over 70 providers.",
    terms: "Min crypto deposit. 35x wagering. Available to new players. T&Cs apply.",
  },
  "amazon-slots": {
    name: "Amazon Slots", bonus: "$500 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Amazon Slots offers a $500 welcome bonus for slot enthusiasts. Focused on delivering the best slot gaming experience with curated high-quality games.",
    terms: "$10 min deposit. 35x wagering. New players only. T&Cs apply.",
  },
  "royal-panda": {
    name: "Royal Panda", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Royal Panda offers a $1,000 welcome bonus. With excellent live casino games and fast payouts, Royal Panda has been delighting players since 2014.",
    terms: "$10 min deposit. 35x wagering. Available to new players. T&Cs apply.",
  },
  "casumo": {
    name: "Casumo Casino", bonus: "$1,200 Welcome Package",
    type: "Welcome", wagering: "30x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Casumo offers a $1,200 welcome package with its innovative gamification system. An award-winning casino that rewards players as they play.",
    terms: "$10 min deposit. 30x wagering. New players. Terms apply.",
  },
  "casino-x": {
    name: "Casino-X", bonus: "$300 Welcome Bonus",
    type: "Welcome", wagering: "40x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Casino-X offers a $300 welcome bonus. A straightforward gaming platform with 2000+ games and regular promotions for new and existing players.",
    terms: "$10 min deposit. 40x wagering. New players. T&Cs apply.",
  },
  "energy-casino": {
    name: "Energy Casino", bonus: "$500 + 100 Free Spins",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Energy Casino delivers $500 + 100 free spins to new players. Known for fast withdrawals and 24/7 customer support with over 2000 games.",
    terms: "$10 min deposit. 35x wagering. Available to new players. Free spins on first deposit.",
  },
  "frank-casino": {
    name: "Frank Casino", bonus: "$500 Welcome Package",
    type: "Welcome", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Frank Casino offers a $500 welcome package with a modern approach to online gaming. Stylish design and competitive bonus offers.",
    terms: "$20 min deposit. 35x wagering. New players only. T&Cs apply.",
  },
  "888-casino": {
    name: "888 Casino", bonus: "$1,500 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "888 Casino offers a $1,500 welcome bonus for new players. Since 1997, 888 has been one of the most trusted names in online gambling with a world-class live casino.",
    terms: "New players only. $10 min deposit. 35x wagering. Game restrictions apply. T&Cs apply.",
  },
  "mr-green": {
    name: "Mr Green Casino", bonus: "$1,000 + 200 Free Spins",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Mr Green offers new players $1,000 + 200 free spins. An award-winning casino known for its responsible gaming focus and unique approach to game categorization.",
    terms: "New players. $10 min deposit. 35x wagering. Free spins on selected games.",
  },
  "unibet": {
    name: "Unibet Casino", bonus: "$500 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Unibet welcomes new players with a $500 bonus. A well-established brand since 1997 with excellent sportsbook integration and live streaming.",
    terms: "$10 min deposit. 35x wagering. New players. T&Cs apply.",
  },
  "draftkings": {
    name: "DraftKings Casino", bonus: "$2,000 Welcome Bonus",
    type: "Welcome", wagering: "25x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "DraftKings offers a $2,000 welcome bonus for new casino players. America's #1 gaming brand with seamless DFS and sportsbook integration.",
    terms: "New players only. $10 min deposit. 25x wagering. Available in eligible US states.",
  },
  "fanduel": {
    name: "FanDuel Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "10x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "FanDuel Casino offers new players a $1,000 welcome bonus with just 10x wagering. One of America's most trusted gaming brands with a simple, fast platform.",
    terms: "New players. $10 min deposit. 10x wagering. Available in eligible US states.",
  },
  "betmgm": {
    name: "BetMGM Casino", bonus: "$1,500 Welcome Bonus",
    type: "Welcome", wagering: "15x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "BetMGM offers a $1,500 welcome bonus backed by MGM Resorts International. With 2000+ games and full MGM Rewards integration, enjoy perks across MGM properties.",
    terms: "New players. $10 min deposit. 15x wagering. Available in eligible US states.",
  },
  "caesars": {
    name: "Caesars Palace Online Casino", bonus: "$2,500 Welcome Bonus",
    type: "Welcome", wagering: "15x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Caesars Palace Online Casino offers a $2,500 welcome bonus. The iconic Las Vegas brand now available online with 1500+ games and Caesars Rewards integration.",
    terms: "New players. $10 min deposit. 15x wagering. Available in eligible US states.",
  },
  "bet365": {
    name: "Bet365 Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "30x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Bet365 offers a $1,000 welcome bonus for new casino players. One of the world's largest gaming brands with 2000+ games, live streaming, and a massive sportsbook.",
    terms: "New players. $10 min deposit. 30x wagering. Game contributions vary. T&Cs apply.",
  },
  "bovada": {
    name: "Bovada Casino", bonus: "$3,750 Welcome Bonus",
    type: "Crypto", wagering: "25x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Bovada offers a massive $3,750 crypto welcome bonus for new players. The go-to casino for US players since 2011 with fast crypto payouts and a great poker room.",
    terms: "$20 min crypto deposit. 25x wagering. Available to US players. T&Cs apply.",
  },
  "ignition": {
    name: "Ignition Casino", bonus: "$3,000 Welcome Bonus",
    type: "Crypto", wagering: "25x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Ignition Casino offers a $3,000 crypto welcome bonus. A top choice for US players with anonymous poker tables and quick crypto payouts.",
    terms: "$20 min crypto deposit. 25x wagering. Available in eligible US states.",
  },
  "betonline": {
    name: "BetOnline Casino", bonus: "$3,000 Welcome Bonus",
    type: "Crypto", wagering: "30x", minDeposit: "$25", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "BetOnline offers a $3,000 welcome bonus. A trusted all-in-one platform since 2004 with casino, sportsbook, and poker — all accessible with crypto deposits.",
    terms: "$25 min deposit. 30x wagering. Available to US players. T&Cs apply.",
  },
  "borgata": {
    name: "Borgata Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "15x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Borgata offers a $1,000 welcome bonus. The Atlantic City icon now delivers 1500+ games online with full MGM Rewards eligibility.",
    terms: "New players. $10 min deposit. 15x wagering. Available in eligible US states.",
  },
  "golden-nugget": {
    name: "Golden Nugget Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "20x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Golden Nugget offers a $1,000 welcome bonus. Consistently ranked among the best US online casinos with a top-rated mobile app and excellent live dealer section.",
    terms: "New players. $10 min deposit. 20x wagering. Available in eligible US states.",
  },
  "party-casino": {
    name: "PartyCasino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "30x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "PartyCasino offers a $1,000 welcome bonus. A household name in online gaming since 1997 with a user-friendly platform and regular promotions.",
    terms: "New players. $10 min deposit. 30x wagering. T&Cs apply.",
  },
  "pokerstars": {
    name: "PokerStars Casino", bonus: "$1,500 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "PokerStars Casino offers a $1,500 welcome bonus. The world's largest poker room with an equally impressive casino section backed by Flutter Entertainment.",
    terms: "New players. $10 min deposit. 35x wagering. Available in select regions.",
  },
  "red-dog": {
    name: "Red Dog Casino", bonus: "$2,750 Welcome Bonus",
    type: "Crypto", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Red Dog Casino offers a $2,750 welcome bonus. A simplified online casino experience with generous bonuses and crypto-friendly payments for US players.",
    terms: "$10 min deposit. 35x wagering. US players welcome. T&Cs apply.",
  },
  "slots-lv": {
    name: "Slots.lv Casino", bonus: "$5,000 Welcome Bonus",
    type: "Crypto", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Slots.lv offers a huge $5,000 welcome bonus for crypto depositors. One of the biggest bonuses in the industry with a fantastic slot selection.",
    terms: "$20 min crypto deposit. 35x wagering. US players welcome. T&Cs apply.",
  },
  "cafe-casino": {
    name: "Cafe Casino", bonus: "$2,500 Welcome Bonus",
    type: "Crypto", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Cafe Casino offers a $2,500 welcome bonus. A warm, inviting experience with Hot Drop Jackpots and a rewarding Perk Points loyalty program.",
    terms: "$10 min deposit. 35x wagering. US players welcome. T&Cs apply.",
  },
  "wild-casino": {
    name: "Wild Casino", bonus: "$5,000 Welcome Bonus",
    type: "Crypto", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Wild Casino offers a $5,000 welcome bonus with live dealer games and 600+ slots. Multiple crypto options and US-friendly.",
    terms: "$20 min deposit. 35x wagering. US players welcome. T&Cs apply.",
  },
  "everygame": {
    name: "EveryGame Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "30x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "EveryGame offers a $1,000 welcome bonus. One of the oldest online casinos (since 1996) with crypto options and a good poker room for US players.",
    terms: "$10 min deposit. 30x wagering. US players welcome. T&Cs apply.",
  },
  "dafabet": {
    name: "Dafabet Casino", bonus: "$1,000 Welcome Bonus",
    type: "Welcome", wagering: "35x", minDeposit: "$10", validUntil: "2026-12-31",
    code: "No code needed", crypto: false,
    details: "Dafabet offers a $1,000 welcome bonus for new players. A dominant force in Asian online gaming since 2004 with an excellent sportsbook and live casino.",
    terms: "New players. $10 min deposit. 35x wagering. Available in select regions.",
  },
  "luckyblock": {
    name: "Lucky Block Casino", bonus: "$10,000 Crypto Bonus",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Lucky Block offers a massive $10,000 crypto welcome bonus. With 4000+ games and no-wagering sportsbook, it's exploded onto the scene since 2022.",
    terms: "Min crypto deposit. 35x wagering. Available to new players. T&Cs apply.",
  },
  "mega-dice": {
    name: "Mega Dice Casino", bonus: "200% + 50 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Mega Dice offers 200% + 50 free spins to new players. A crypto-native casino with 6000+ games and impressive 97.7% payout rates.",
    terms: "Min crypto deposit. 35x wagering. 50 free spins on selected slots.",
  },
  "cloudbet": {
    name: "CloudBet Casino", bonus: "100% up to 5 BTC",
    type: "Crypto", wagering: "40x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "CloudBet offers 100% up to 5 BTC to new players. A crypto gambling pioneer since 2013 with high betting limits and provably fair games.",
    terms: "Min crypto deposit. 40x wagering. Available to new players.",
  },
  "mbit-casino": {
    name: "mBit Casino", bonus: "4 BTC + 300 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "mBit Casino offers 4 BTC + 300 free spins to new players. A trusted crypto gaming destination since 2014 with a rewarding VIP program.",
    terms: "Min crypto deposit. 35x wagering. Free spins on first 4 deposits.",
  },
  "fortunejack": {
    name: "FortuneJack Casino", bonus: "5 BTC + 50 Free Spins",
    type: "Crypto", wagering: "40x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "FortuneJack offers 5 BTC + 50 free spins. One of the original crypto casinos (since 2014) with provably fair games and a solid sportsbook.",
    terms: "Min crypto deposit. 40x wagering. 50 free spins on first deposit.",
  },
  "bitcasino": {
    name: "Bitcasino.io", bonus: "1 BTC + 300 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Bitcasino.io offers 1 BTC + 300 free spins. An award-winning crypto casino with instant withdrawals and 3000+ games since 2014.",
    terms: "Min crypto deposit. 35x wagering. Free spins on selected slots.",
  },
  "sportsbet": {
    name: "Sportsbet.io", bonus: "Up to $5,000 Welcome Bonus",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Sportsbet.io offers up to $5,000 welcome bonus. A leading crypto sportsbook with 5000+ sports markets and 2000+ casino games.",
    terms: "Min crypto deposit. 35x wagering. Available to new players.",
  },
  "thunderpick": {
    name: "Thunderpick Casino", bonus: "100% up to $1,000",
    type: "Crypto", wagering: "35x", minDeposit: "$20", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Thunderpick offers 100% up to $1,000 to new players. The premier esports gaming platform with 3000+ casino games and regular tournaments.",
    terms: "$20 min deposit. 35x wagering. Available to new players.",
  },
  "winzio": {
    name: "Winz.io Casino", bonus: "5 BTC + 200 Free Spins",
    type: "Crypto", wagering: "35x", minDeposit: "0.001 BTC", validUntil: "2026-12-31",
    code: "No code needed", crypto: true,
    details: "Winz.io offers 5 BTC + 200 free spins. 4000+ games from over 80 providers with fast crypto withdrawals and regular promotions.",
    terms: "Min crypto deposit. 35x wagering. Free spins on first deposit.",
  },
};

export function generateStaticParams() {
  return Object.keys(BONUSES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bonus = BONUSES[slug];
  if (!bonus) return {};
  return {
    title: bonus.name + " Bonus: " + bonus.bonus + " 2026",
    description: "Claim the " + bonus.bonus + " bonus at " + bonus.name + ". " + bonus.wagering + " wagering, " + bonus.minDeposit + " min deposit. Exclusive offer updated 2026.",
    alternates: { canonical: "https://royalbetguide.com/bonus/" + slug + "/" },
  };
}

export default async function BonusDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bonus = BONUSES[slug];
  if (!bonus) return <div className="mx-auto max-w-4xl px-4 py-20 text-center text-slate-500">Bonus not found</div>;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Affiliate Disclosure */}
      <div className="mb-6 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-center text-xs text-slate-500">
        We may earn a commission if you sign up through our links. Play responsibly. 18+
      </div>

      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/bonus/" className="hover:text-corg-500">Bonuses</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">{bonus.name}</span>
      </div>

      {/* Hero Card */}
      <div className="rounded-xl bg-gradient-to-br from-gold-500 to-corg-500 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {bonus.type} Bonus
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-white">{bonus.bonus}</h1>
            <p className="mt-1 text-white/80">at {bonus.name}</p>
          </div>
          <Link href={`/reviews/${slug}/`} className="btn-primary whitespace-nowrap bg-white text-corg-600 hover:bg-white/90">
            Get Bonus →
          </Link>
        </div>
      </div>

      {/* Bonus Details */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-corg-600">Bonus Details</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">{bonus.details}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Type</span>
            <span className="block mt-1 font-semibold text-corg-600">{bonus.type}</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Wagering</span>
            <span className="block mt-1 font-semibold text-corg-600">{bonus.wagering}</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Min Deposit</span>
            <span className="block mt-1 font-semibold text-corg-600">{bonus.minDeposit}</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <span className="block text-xs text-slate-500">Valid Until</span>
            <span className="block mt-1 font-semibold text-corg-600">{bonus.validUntil}</span>
          </div>
        </div>

        {bonus.code && (
          <div className="mt-4 rounded-lg bg-corg-500/5 p-3 text-center">
            <span className="text-sm text-slate-500">Bonus Code: </span>
            <span className="font-bold text-corg-600">{bonus.code}</span>
          </div>
        )}

        {bonus.crypto && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-gold-400/5 p-3">
            <span className="text-lg">₿</span>
            <span className="text-sm text-slate-600">Crypto-friendly bonus — deposit with Bitcoin, Ethereum, and more</span>
          </div>
        )}
      </div>

      {/* Terms */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-corg-600">Terms & Conditions</h3>
        <p className="mt-3 text-sm text-slate-500">{bonus.terms}</p>
        <p className="mt-3 text-xs text-slate-400">Always gamble responsibly. 18+. T&Cs apply. This offer is subject to change.</p>
      </div>

      {/* How to Claim */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-corg-600">How to Claim This Bonus</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal ml-5">
          <li>Click the button below to visit {bonus.name}</li>
          <li>Register a new account (if you are a new player)</li>
          {bonus.code !== "No code needed" && bonus.code ? (
            <li>Enter bonus code <strong className="text-corg-600">{bonus.code}</strong> during deposit</li>
          ) : (
            <li>No bonus code required — the bonus is automatically credited</li>
          )}
          <li>Make a minimum deposit of {bonus.minDeposit}</li>
          <li>Your {bonus.bonus} will be credited and you can start playing</li>
        </ol>
      </div>

      {/* Tips */}
      <div className="mt-6 rounded-xl border border-gold-400/20 bg-gold-400/5 p-6">
        <h2 className="text-lg font-bold text-corg-600">💡 Tips for Maximizing This Bonus</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li><strong>Read the full terms</strong> — Understanding wagering requirements helps plan your play</li>
          <li><strong>Choose the right games</strong> — Slots usually contribute 100% to wagering requirements</li>
          <li><strong>Check the expiry date</strong> — Most bonuses expire within 7-30 days</li>
          <li><strong>Set a budget</strong> — Only deposit what you can afford to lose</li>
          <li><strong>Contact support if unsure</strong> — Ask customer support before claiming if terms are unclear</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-gold-500 to-corg-500 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Ready to Claim {bonus.bonus}?</h3>
        <p className="mt-2 text-white/70">Head over to {bonus.name} and claim your bonus today.</p>
        <Link href={`/reviews/${slug}/`} className="btn-primary mt-4 inline-flex bg-white text-corg-600 hover:bg-white/90">
          Claim Bonus →
        </Link>
      </div>
    </div>
  );
}
