import Link from "next/link"
import CasinoLogo from "../components/CasinoLogo";

const BONUSES = [
  { name: "BitStarz", bonus: "5 BTC + 200 Free Spins", type: "Crypto", wagering: "35x", slug: "bitstarz", imgSlug: "bitstarz" },
  { name: "Jackpot City", bonus: "$1,600 Welcome Bonus", type: "Welcome", wagering: "30x", slug: "jackpot-city-casino", imgSlug: "jackpot-city" },
  { name: "LeoVegas", bonus: "$1,000 + 200 Free Spins", type: "Welcome", wagering: "35x", slug: "leovegas", imgSlug: "leovegas" },
  { name: "7BitCasino", bonus: "5 BTC + 250 Free Spins", type: "Crypto", wagering: "35x", slug: "7bit-casino", imgSlug: "7bitcasino" },
  { name: "Stake", bonus: "Crypto Welcome Bonus", type: "Crypto", wagering: "0x", slug: "stake", imgSlug: "stake" },
  { name: "BC.Game", bonus: "Up to $20,000 + 200 FS", type: "Crypto", wagering: "35x", slug: "bc-game", imgSlug: "bc-game" },
  { name: "Spin Casino", bonus: "$1,000 Welcome Package", type: "Welcome", wagering: "35x", slug: "spin-casino", imgSlug: "spin-casino" },
  { name: "Bet365", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "30x", slug: "bet365", imgSlug: "bet365" },
  { name: "888 Casino", bonus: "$1,500 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "888-casino", imgSlug: "888-casino" },
  { name: "Slots.lv", bonus: "$5,000 Crypto Bonus", type: "Crypto", wagering: "35x", slug: "slots-lv", imgSlug: "slots-lv" },
  { name: "Bovada", bonus: "$3,750 Crypto Bonus", type: "Crypto", wagering: "25x", slug: "bovada", imgSlug: "bovada" },
  { name: "Wild Casino", bonus: "$5,000 Crypto Bonus", type: "Crypto", wagering: "35x", slug: "wild-casino", imgSlug: "wild-casino" },
  { name: "Ignition", bonus: "$3,000 Crypto Bonus", type: "Crypto", wagering: "25x", slug: "ignition", imgSlug: "ignition" },
  { name: "BetOnline", bonus: "$3,000 Crypto Bonus", type: "Crypto", wagering: "30x", slug: "betonline", imgSlug: "betonline" },
  { name: "DraftKings", bonus: "$2,000 Welcome Bonus", type: "Welcome", wagering: "25x", slug: "draftkings", imgSlug: "draftkings" },
  { name: "FanDuel", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "10x", slug: "fanduel", imgSlug: "fanduel" },
  { name: "BetMGM", bonus: "$1,500 Welcome Bonus", type: "Welcome", wagering: "15x", slug: "betmgm", imgSlug: "betmgm" },
  { name: "Caesars", bonus: "$2,500 Welcome Bonus", type: "Welcome", wagering: "15x", slug: "caesars", imgSlug: "caesars" },
  { name: "Borgata", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "15x", slug: "borgata", imgSlug: "borgata" },
  { name: "Golden Nugget", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "20x", slug: "golden-nugget", imgSlug: "golden-nugget" },
  { name: "PokerStars", bonus: "$1,500 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "pokerstars", imgSlug: "pokerstars" },
  { name: "Mr Green", bonus: "$1,000 + 200 Free Spins", type: "Welcome", wagering: "35x", slug: "mr-green", imgSlug: "mr-green" },
  { name: "Unibet", bonus: "$500 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "unibet", imgSlug: "unibet" },
  { name: "Royal Vegas", bonus: "$1,200 Welcome Bonus", type: "Welcome", wagering: "30x", slug: "royal-vegas", imgSlug: "royal-vegas" },
  { name: "Red Dog", bonus: "$2,750 Crypto Bonus", type: "Crypto", wagering: "35x", slug: "red-dog", imgSlug: "red-dog" },
  { name: "Cafe Casino", bonus: "$2,500 Crypto Bonus", type: "Crypto", wagering: "35x", slug: "cafe-casino", imgSlug: "cafe-casino" },
  { name: "EveryGame", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "30x", slug: "everygame", imgSlug: "everygame" },
  { name: "PartyCasino", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "30x", slug: "party-casino", imgSlug: "party-casino" },
  { name: "Casumo", bonus: "$1,200 Welcome Package", type: "Welcome", wagering: "30x", slug: "casumo", imgSlug: "casumo" },
  { name: "Ruby Fortune", bonus: "$750 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "ruby-fortune-casino", imgSlug: "ruby-fortune" },
  { name: "Hell Spin", bonus: "$500 + 150 Free Spins", type: "Welcome", wagering: "35x", slug: "hell-spin", imgSlug: "hell-spin" },
  { name: "PlayOJO", bonus: "50 Free Spins No Deposit", type: "No Deposit", wagering: "35x", slug: "play-ojo", imgSlug: "playojo" },
  { name: "KatsuBet", bonus: "325% + 200 Free Spins", type: "Welcome", wagering: "35x", slug: "katsubet", imgSlug: "katsubet" },
  { name: "Mirax", bonus: "$500 + 200 Free Spins", type: "Welcome", wagering: "35x", slug: "mirax-casino", imgSlug: "miraxcasino" },
  { name: "Royal Panda", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "royal-panda", imgSlug: "royal-panda" },
  { name: "22Bet", bonus: "$300 Welcome Bonus", type: "Welcome", wagering: "40x", slug: "22bet", imgSlug: "22bet" },
  { name: "Betway", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "40x", slug: "betway", imgSlug: "betway" },
  { name: "Amazon Slots", bonus: "$500 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "amazon-slots", imgSlug: "amazon-slots" },
  { name: "Casino-X", bonus: "$300 Welcome Bonus", type: "Welcome", wagering: "40x", slug: "casino-x", imgSlug: "casino-x" },
  { name: "Energy Casino", bonus: "$500 + 100 Free Spins", type: "Welcome", wagering: "35x", slug: "energy-casino", imgSlug: "energy-casino" },
  { name: "Frank Casino", bonus: "$500 Welcome Package", type: "Welcome", wagering: "35x", slug: "frank-casino", imgSlug: "frank-casino" },
  { name: "Lucky Block", bonus: "$10,000 Crypto Bonus", type: "Crypto", wagering: "35x", slug: "luckyblock", imgSlug: "lucky-block" },
  { name: "Mega Dice", bonus: "200% + 50 Free Spins", type: "Crypto", wagering: "35x", slug: "mega-dice", imgSlug: "mega-dice" },
  { name: "Bitcasino.io", bonus: "1 BTC + 300 Free Spins", type: "Crypto", wagering: "35x", slug: "bitcasino", imgSlug: "bitcasino-io" },
  { name: "Sportsbet.io", bonus: "Up to $5,000", type: "Crypto", wagering: "35x", slug: "sportsbet", imgSlug: "sportsbet-io" },
  { name: "CloudBet", bonus: "100% up to 5 BTC", type: "Crypto", wagering: "40x", slug: "cloudbet", imgSlug: "cloudbet" },
  { name: "Thunderpick", bonus: "100% up to $1,000", type: "Crypto", wagering: "35x", slug: "thunderpick", imgSlug: "thunderpick" },
  { name: "Dafabet", bonus: "$1,000 Welcome Bonus", type: "Welcome", wagering: "35x", slug: "dafabet", imgSlug: "dafabet" },
  { name: "mBit", bonus: "4 BTC + 300 Free Spins", type: "Crypto", wagering: "35x", slug: "mbit-casino", imgSlug: "mbit" },
  { name: "FortuneJack", bonus: "5 BTC + 50 Free Spins", type: "Crypto", wagering: "40x", slug: "fortunejack", imgSlug: "fortunejack" },
  { name: "Winz.io", bonus: "5 BTC + 200 Free Spins", type: "Crypto", wagering: "35x", slug: "winzio", imgSlug: "winz-io" },
];

export const metadata = {
  title: "Best Casino Bonuses — Compare 51 Offers 2026",
  description: "Claim the best casino bonuses and promotions. Compare 51 welcome offers, free spins, crypto bonuses, and no deposit bonuses from trusted casinos.",
  alternates: { canonical: "https://royalbetguide.com/bonus/" },
};

export default function BonusPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          🔥 Best Offers
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">
          Casino Bonuses
        </h1>
        <p className="mt-2 text-slate-500">Compare 51 top casino bonuses and promotions</p>
      </div>

      <div className="grid gap-4">
        {BONUSES.map((b) => (
          <div key={b.slug}
            className="card-light flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/15 to-corg-500/10 text-2xl">
                <CasinoLogo slug={b.imgSlug} name={b.name} size={56} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-corg-600">{b.bonus}</h2>
                <p className="text-sm text-slate-500">
                  at {b.name} · {b.type} · {b.wagering} wagering
                </p>
              </div>
            </div>
            <Link href={`/bonus/${b.slug}/`} className="btn-gold text-sm py-2 whitespace-nowrap">
              View Bonus →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
