import type { MetadataRoute } from "next";

export const revalidate = 86400;

const LANGUAGES = ["de", "fr", "es", "it"] as const;
const baseUrl = "https://royalbetguide.com";

type ChangeFreq = "daily" | "monthly" | "weekly" | "always" | "hourly" | "yearly" | "never";

type UrlEntry = {
  url: string;
  changeFrequency: ChangeFreq;
  priority: number;
  lastModified?: string;
  alternates?: Record<string, string>;
};

// ── Casino review slugs ──────────────────────────────────────────────
const REVIEW_SLUGS = [
  "7bit-casino", "888-casino", "amazon-slots", "bc-game", "betway", "bovada",
  "cafe-casino", "casino-x", "caesars", "draftkings", "energy-casino",
  "fanduel", "fortunejack", "frank-casino", "golden-nugget", "hell-spin",
  "ignition", "jackpot-city-casino", "katsubet", "leovegas", "luckyblock",
  "mega-dice", "mirax-casino", "mr-green", "party-casino", "play-ojo",
  "red-dog", "royal-panda", "royal-vegas", "ruby-fortune-casino",
  "slots-lv", "spin-casino", "stake", "unibet", "wild-casino", "22bet",
];

// ── Bonus slugs ──────────────────────────────────────────────────────
const BONUS_SLUGS = [
  "22bet", "7bit-casino", "888-casino", "amazon-slots", "bc-game",
  "bet365", "betmgm", "betonline", "betway", "bitcasino", "bitstarz",
  "borgata", "bovada", "caesars", "cafe-casino", "casino-x", "casumo",
  "cloudbet", "dafabet", "draftkings", "energy-casino", "everygame",
  "fanduel", "fortunejack", "frank-casino", "golden-nugget", "hell-spin",
  "ignition", "jackpot-city-casino", "katsubet", "leovegas", "luckyblock",
  "mbit-casino", "mega-dice", "mirax-casino", "mr-green", "party-casino",
  "play-ojo", "pokerstars", "red-dog", "royal-panda", "royal-vegas",
  "ruby-fortune-casino", "slots-lv", "spin-casino", "sportsbet", "stake",
  "thunderpick", "unibet", "wild-casino", "winzio",
];

// ── Helper: build URL entries with hreflang alternates ───────────────
function makeEntry(
  path: string,
  changefreq: ChangeFreq,
  priority: number,
  multilang = false,
): UrlEntry {
  const url = `${baseUrl}${path}`;
  const lastModified = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  if (!multilang) return { url, changeFrequency: changefreq, priority, lastModified };
  
  const alternates: Record<string, string> = {};
  for (const lang of LANGUAGES) {
    alternates[lang] = `${baseUrl}/${lang}${path}`;
  }
  return { url, changeFrequency: changefreq, priority, lastModified, alternates };
}
// ── Build all URL entries ────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ── 1. Static pages (with multi-language where applicable) ──────────
  const staticPages: [string, string, number, boolean?][] = [
    ["", "daily", 1.0, true],                          // homepage
    ["/about", "monthly", 0.5],
    ["/best-crypto-casinos", "monthly", 0.5],
    ["/best-live-dealer", "monthly", 0.5],
    ["/best-mobile-casinos", "monthly", 0.5],
    ["/best-sportsbooks", "monthly", 0.5],
    ["/best-welcome-bonuses", "monthly", 0.5],
    ["/best-rtp-slots", "weekly", 0.8],
    ["/best-high-volatility-slots", "weekly", 0.8],
    ["/best-pragmatic-slots", "weekly", 0.8],
    ["/bonus-calculator", "weekly", 0.7],
    ["/slots/starburst-vs-book-of-dead", "weekly", 0.7],
    ["/slots/sweet-bonanza-vs-gates-of-olympus", "weekly", 0.7],
    ["/blog", "weekly", 0.7],
    ["/blog/best-bitcoin-casinos-2026", "weekly", 0.7],
    ["/blog/bitcoin-casino-withdrawal-speeds", "weekly", 0.7],
    ["/blog/crypto-gambling-guide", "weekly", 0.7],
    ["/blog/highest-rtp-slots-2026", "weekly", 0.7],
    ["/blog/how-to-choose-casino", "weekly", 0.7],
    ["/blog/low-deposit-casinos-uk", "weekly", 0.7],
    ["/blog/non-gamstop-casinos-uk", "weekly", 0.7],
    ["/blog/online-casino-beginners-guide", "weekly", 0.7],
    ["/blog/online-casino-tips-2026", "weekly", 0.7],
    ["/blog/paypal-casinos-uk", "weekly", 0.7],
    ["/blog/us-sports-betting-guide-2026", "weekly", 0.7],
    ["/blog/what-is-provably-fair-technology", "weekly", 0.7],
    ["/blog/best-crypto-wallets-for-gambling", "weekly", 0.7],
    ["/blog/mga-vs-ukgc-casino-license", "weekly", 0.7],
    ["/blog/mega-moolah-jackpot-network", "weekly", 0.7],
    ["/blog/ewallet-casino-withdrawals-compared", "weekly", 0.7],
    ["/blog/crash-gambling-complete-guide", "weekly", 0.7],
    ["/blog/top-cryptocurrencies-for-gambling", "weekly", 0.7],
    ["/blog/provably-fair-casino-games-guide", "weekly", 0.7],
    ["/blog/anonymous-bitcoin-casinos-privacy", "weekly", 0.7],
    ["/blog/rtp-explained-payout-percentage", "weekly", 0.7],
    ["/blog/vip-programs-crypto-casinos", "weekly", 0.7],
    ["/blog/best-mobile-casino-apps", "weekly", 0.7],
    ["/blog/evolution-gaming-exclusive-tables", "weekly", 0.7],
    ["/blog/live-dealer-vs-rng-roulette", "weekly", 0.7],
    ["/bonus", "weekly", 0.8, true],                   // bonus listing
    ["/bonus/crypto-bonuses", "weekly", 0.8],
    ["/bonus/free-spins", "weekly", 0.8],
    ["/bonus/no-deposit", "weekly", 0.8],
    ["/bonus/welcome-bonuses", "weekly", 0.8],
    ["/compare", "weekly", 0.7],
    ["/compare/7bit-katsubet-mirax", "weekly", 0.7, true],
    ["/contact", "monthly", 0.5],
    ["/de/blog/beste-bitcoin-casinos-2026", "weekly", 0.7],
    ["/de/blog/einsteiger-casino-guide", "weekly", 0.7],
    ["/de/blog/hoechste-rtp-slots-2026", "weekly", 0.7],
    ["/de/news/krypto-regulierung-2026", "weekly", 0.7],
    ["/de/news/online-gluecksspiel-trends-2026", "weekly", 0.7],
    ["/es/blog/guia-casino-principiantes", "weekly", 0.7],
    ["/es/blog/mejores-casinos-bitcoin-2026", "weekly", 0.7],
    ["/es/blog/mejores-rtp-slots-2026", "weekly", 0.7],
    ["/es/news/regulacion-cripto-2026", "weekly", 0.7],
    ["/es/news/tendencias-juego-online-2026", "weekly", 0.7],
    ["/features", "monthly", 0.5],
    ["/fr/blog/guide-casino-debutants", "weekly", 0.7],
    ["/fr/blog/meilleurs-casinos-bitcoin-2026", "weekly", 0.7],
    ["/fr/blog/meilleurs-taux-rtp-2026", "weekly", 0.7],
    ["/fr/news/reglementation-crypto-2026", "weekly", 0.7],
    ["/fr/news/tendances-jeux-en-ligne-2026", "weekly", 0.7],
    ["/free-slots", "monthly", 0.6],
    ["/games", "monthly", 0.6],
    ["/games/betsoft-casinos", "monthly", 0.6],
    ["/games/bgaming-casinos", "monthly", 0.6],
    ["/games/crypto-games", "monthly", 0.6],
    ["/games/eu-casinos", "monthly", 0.6],
    ["/games/evolution-casinos", "monthly", 0.6, true],
    ["/games/free", "monthly", 0.6],
    ["/games/free-blackjack", "monthly", 0.6],
    ["/games/free-roulette", "monthly", 0.6],
    ["/games/hacksaw-gaming-casinos", "monthly", 0.6],
    ["/games/igt-casinos", "monthly", 0.6],
    ["/games/live-casino", "monthly", 0.6],
    ["/games/live-dealer-baccarat", "monthly", 0.6],
    ["/games/live-dealer-blackjack", "monthly", 0.6],
    ["/games/live-dealer-roulette", "monthly", 0.6],
    ["/games/microgaming-casinos", "monthly", 0.6],
    ["/games/mobile-games", "monthly", 0.6],
    ["/games/netent-casinos", "monthly", 0.6],
    ["/games/nolimit-city-casinos", "monthly", 0.6],
    ["/games/playn-go-casinos", "monthly", 0.6],
    ["/games/playtech-casinos", "monthly", 0.6],
    ["/games/pragmatic-play-casinos", "monthly", 0.6],
    ["/games/progressive-jackpots", "monthly", 0.6],
    ["/games/slots", "monthly", 0.6, true],
    ["/games/slots/5-dragons", "monthly", 0.6],
    ["/games/slots/7-pigs", "monthly", 0.6],
    ["/games/slots/888-dragons", "monthly", 0.6],
    ["/games/slots/beast-of-wealth", "monthly", 0.6],
    ["/games/slots/big-bass-bonanza", "monthly", 0.6],
    ["/games/slots/big-bass-bonanza-megaways", "monthly", 0.6],
    ["/games/slots/big-bass-splash", "monthly", 0.6],
    ["/games/slots/bison-x", "monthly", 0.6],
    ["/games/slots/book-of-dead", "monthly", 0.6],
    ["/games/slots/book-of-golden-sands", "monthly", 0.6],
    ["/games/slots/blood-suckers", "monthly", 0.6],
    ["/games/slots/book-of-ra", "monthly", 0.6],
    ["/games/slots/cleopatra", "monthly", 0.6],
    ["/games/slots/caishang-cash-pots", "monthly", 0.6],
    ["/games/slots/chilli-heat", "monthly", 0.6],
    ["/games/slots/curse-of-the-werewolf", "monthly", 0.6],
    ["/games/slots/deadwood", "monthly", 0.6],
    ["/games/slots/dead-or-alive-2", "monthly", 0.6],
    ["/games/slots/demon-pots", "monthly", 0.6],
    ["/games/slots/dog-house-megaways", "monthly", 0.6],
    ["/games/slots/dragon-tiger", "monthly", 0.6],
    ["/games/slots/fire-strike", "monthly", 0.6],
    ["/games/slots/fortune-pots", "monthly", 0.6],
    ["/games/slots/fruit-party", "monthly", 0.6],
    ["/games/slots/ganesh-fortune", "monthly", 0.6],
    ["/games/slots/gates-of-olympus", "monthly", 0.6],
    ["/games/slots/gates-of-tartarus", "monthly", 0.6],
    ["/games/slots/golden-tale", "monthly", 0.6],
    ["/games/slots/gonzos-quest", "monthly", 0.6],
    ["/games/slots/heist-stake", "monthly", 0.6],
    ["/games/slots/immortal-romance", "monthly", 0.6],
    ["/games/slots/jammin-jars", "monthly", 0.6],
    ["/games/slots/john-hunter", "monthly", 0.6],
    ["/games/slots/joker-jewels", "monthly", 0.6],
    ["/games/slots/leprechaun-song", "monthly", 0.6],
    ["/games/slots/madame-destiny", "monthly", 0.6],
    ["/games/slots/mega-moolah", "monthly", 0.6],
    ["/games/slots/money-train-4", "monthly", 0.6],
    ["/games/slots/muertos-multiplier", "monthly", 0.6],
    ["/games/slots/night-of-the-living-tread", "monthly", 0.6],
    ["/games/slots/panda-fortune", "monthly", 0.6],
    ["/games/slots/pirate-silver", "monthly", 0.6],
    ["/games/slots/pirates-pots", "monthly", 0.6],
    ["/games/slots/power-of-minotaurus", "monthly", 0.6],
    ["/games/slots/power-of-torii", "monthly", 0.6],
    ["/games/slots/razor-shark", "monthly", 0.6],
    ["/games/slots/razor-returns", "monthly", 0.6],
    ["/games/slots/reactoonz", "monthly", 0.6],
    ["/games/slots/ring-of-odins-wild", "monthly", 0.6],
    ["/games/slots/rise-of-samurai", "monthly", 0.6],
    ["/games/slots/rise-of-samurai-4", "monthly", 0.6],
    ["/games/slots/snake-eye", "monthly", 0.6],
    ["/games/slots/starburst", "monthly", 0.6],
    ["/games/slots/starlight-princess", "monthly", 0.6],
    ["/games/slots/sugar-crush", "monthly", 0.6],
    ["/games/slots/super-joker", "monthly", 0.6],
    ["/games/slots/sweet-bonanza", "monthly", 0.6],
    ["/games/slots/the-bone-riders", "monthly", 0.6],
    ["/games/slots/the-dog-house", "monthly", 0.6],
    ["/games/slots/the-greatest-catch", "monthly", 0.6],
    ["/games/slots/ultra-burn", "monthly", 0.6],
    ["/games/slots/wanted-dead-or-a-wild", "monthly", 0.6],
    ["/games/slots/wild-ape", "monthly", 0.6],
    ["/games/slots/wild-west-gold", "monthly", 0.6],
    ["/games/slots/wolf-gold", "monthly", 0.6],
    ["/games/slots/legacy-of-dead", "monthly", 0.6],
    ["/games/slots/sugar-rush", "monthly", 0.6],
    ["/games/slots/gates-of-olympus-1000", "monthly", 0.6],
    ["/games/slots/thunderstruck-2", "monthly", 0.6],
    ["/games/slots/white-rabbit-megaways", "monthly", 0.6],
    ["/games/slots/extra-chilli", "monthly", 0.6],
    ["/games/slots/9-masks-of-fire", "monthly", 0.6],
    ["/games/slots/rainbow-riches", "monthly", 0.6],
    ["/games/slots/divine-fortune", "monthly", 0.6],
    ["/games/slots/buffalo-king-megaways", "monthly", 0.6],
    ["/games/slots/sweet-bonanza-xmas", "monthly", 0.6],
    ["/games/slots/age-of-the-gods", "monthly", 0.6],
    ["/games/slots/wheel-of-fortune", "monthly", 0.6],
    ["/games/slots/zeus", "monthly", 0.6],
    ["/games/table-games", "monthly", 0.6],
    ["/games/yggdrasil-casinos", "monthly", 0.6],
    ["/guides", "weekly", 0.7, true],
    ["/guides/baccarat", "weekly", 0.7],
    ["/guides/baccarat/how-to-play", "weekly", 0.7],
    ["/guides/blackjack", "weekly", 0.7, true],
    ["/guides/blackjack/card-counting", "weekly", 0.7],
    ["/guides/blackjack/how-to-play", "weekly", 0.7],
    ["/guides/blackjack/strategy", "weekly", 0.7],
    ["/guides/blackjack/tips", "weekly", 0.7],
    ["/guides/craps", "weekly", 0.7],
    ["/guides/craps/how-to-play", "weekly", 0.7],
    ["/guides/live-dealer", "weekly", 0.7],
    ["/guides/poker", "weekly", 0.7],
    ["/guides/poker/how-to-play", "weekly", 0.7],
    ["/guides/roulette", "weekly", 0.7, true],
    ["/guides/roulette/how-to-play", "weekly", 0.7],
    ["/guides/roulette/strategy", "weekly", 0.7],
    ["/guides/slots", "weekly", 0.7],
    ["/guides/sports-betting-tips", "weekly", 0.7],
    ["/guides/video-poker", "weekly", 0.7],
    ["/guides/paypal-casinos-uk", "weekly", 0.7],
    ["/guides/pennsylvania-sports-betting", "weekly", 0.7],
    ["/it/blog/guida-casino-principianti", "weekly", 0.7],
    ["/it/blog/migliori-casino-bitcoin-2026", "weekly", 0.7],
    ["/it/blog/migliori-rtp-slot-2026", "weekly", 0.7],
    ["/it/news/regolamentazione-crypto-2026", "weekly", 0.7],
    ["/it/news/tendenze-gioco-online-2026", "weekly", 0.7],
    ["/news", "weekly", 0.7],
    ["/news/biggest-jackpot-wins-2026", "weekly", 0.7],
    ["/news/crypto-gambling-market-growth", "weekly", 0.7],
    ["/news/crypto-regulations-2026", "weekly", 0.7],
    ["/news/new-casino-launches-2026", "weekly", 0.7],
    ["/news/online-gambling-trends-2026", "weekly", 0.7],
    ["/news/uk-gambling-regulations-2026", "weekly", 0.7],
    ["/poker", "monthly", 0.5],
    ["/privacy", "monthly", 0.5],
    ["/region/canada", "monthly", 0.5],
    ["/region/connecticut", "monthly", 0.5],
    ["/region/illinois", "monthly", 0.5],
    ["/region/indiana", "monthly", 0.5],
    ["/region/michigan", "monthly", 0.5],
    ["/region/new-jersey", "monthly", 0.5],
    ["/region/ontario", "monthly", 0.5],
    ["/region/pennsylvania", "monthly", 0.5],
    ["/region/united-kingdom", "monthly", 0.5],
    ["/region/west-virginia", "monthly", 0.5],
    ["/responsible-gambling", "monthly", 0.5],
    ["/reviews", "weekly", 0.8, true],
    ["/sports", "monthly", 0.7],
    ["/sports/football-betting", "monthly", 0.7],
    ["/sports/new-jersey-sportsbooks", "monthly", 0.7],
    ["/sports/pennsylvania-sportsbooks", "monthly", 0.7],
    ["/sweepstakes-casinos", "monthly", 0.6],
    ["/terms", "monthly", 0.5],
    ["/tournaments", "weekly", 0.8],
    ["/us", "monthly", 0.5],
  ];

  for (const item of staticPages) {
    const [path, freq, pri, multilang] = item;
    entries.push(makeEntry(path, freq as ChangeFreq, pri, multilang ?? false));
  }

  // ── 2. Casino review pages (dynamic) ───────────────────────────────
  for (const slug of REVIEW_SLUGS) {
    entries.push({
      url: `${baseUrl}/reviews/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      lastModified: new Date().toISOString().split("T")[0],
    });
  }

  // ── 3. Bonus detail pages (dynamic) ────────────────────────────────
  for (const slug of BONUS_SLUGS) {
    entries.push({
      url: `${baseUrl}/bonus/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      lastModified: new Date().toISOString().split("T")[0],
    });
  }

  return entries;
}
