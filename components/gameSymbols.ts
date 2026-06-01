// Pragmatic Play game symbols for free-play demo embedding
// Maps game slugs to Pragmatic Play gameSymbol parameter values

export const pragmaticPlaySymbols = {
  "gates-of-olympus": "vs20olympgate",
  "sweet-bonanza": "vs40sweetbonanza",
  "wolf-gold": "vs25wolfgold",
  "big-bass-bonanza": "vs20fishin",
  "starlight-princess": "vs20starlight",
  "the-dog-house": "vs40doghouse",
  "dog-house-megaways": "vs25doghousemw",
  "fruit-party": "vs40fruitparty",
  "chilli-heat": "vs25chillimet",
  "john-hunter": "vs20bookoftut",
  "curse-of-the-werewolf": "vs20werewolf",
  "madame-destiny": "vs20mmedestiny",
  "power-of-torii": "vs30torii",
  "the-greatest-catch": "vs20fishin2",
  "big-bass-splash": "vs20ffishin",
  "big-bass-bonanza-megaways": "vs25megafish",
  "5-dragons": "vs40dragons",
  "golden-tale": "vs20goldtale",
  "razor-returns": "vs30razorret",
  "wild-west-gold": "vs20westgold",
  "fire-strike": "vs20firestrike",
  "pirates-pots": "vs30pirate",
  "888-dragons": "vs30dragons3",
  "joker-jewels": "vs10jokerjewels",
  "book-of-golden-sands": "vs30bookofgold",
  "buffalo-king": "vs30buffalo",
  "caishang-cash-pots": "vs30cashpot",
  "bison-x": "vs40bisonx",
  "demon-pots": "vs30demonpot",
  "dragon-tiger": "vs10dragontiger",
  "fortune-pots": "vs40fortune",
  "ganesh-fortune": "vs30ganesh",
  "gates-of-tartarus": "vs30tartarus",
  "heist-stake": "vs30heist",
  "leprechaun-song": "vs40leprechaun",
  "muertos-multiplier": "vs20muertos",
  "night-of-the-living-tread": "vs30tread",
  "panda-fortune": "vs30panda",
  "pirate-silver": "vs20pirates2",
  "power-of-minotaurus": "vs20minotaur",
  "ring-of-odins-wild": "vs25odinswild",
  "rise-of-samurai": "vs30samurai3",
  "rise-of-samurai-4": "vs30samurai4",
  "snake-eye": "vs20snakeeye",
  "sugar-crush": "vs30sugarcrush",
  "super-joker": "vs20superjoker",
  "the-bone-riders": "vs40boneriders",
  "ultra-burn": "vs20ultraburn",
  "wild-ape": "vs30wildape",
  "7-pigs": "vs20piggy",
  "beast-of-wealth": "vs30beast",
} as const;

export type GameSlug = keyof typeof pragmaticPlaySymbols;

export const gameInfo: {[key: string]: {title: string; provider: string; rtp: string; volatility: string; maxWin: string; description: string} | undefined} = {
  "gates-of-olympus": {
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    rtp: "96.5%",
    volatility: "Very High",
    maxWin: "5,000x",
    description: "Zeus-powered tumbling reels slot with increasing multipliers up to 500x in free spins."
  },
  "sweet-bonanza": {
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    rtp: "96.48%",
    volatility: "High",
    maxWin: "21,100x",
    description: "Candy-themed cluster pays slot with tumbling reels and massive multiplier potential."
  },
  "wolf-gold": {
    title: "Wolf Gold",
    provider: "Pragmatic Play",
    rtp: "96.0%",
    volatility: "Medium",
    maxWin: "2,500x",
    description: "Nature-themed slot with 3 progressive jackpots, money respins, and free spins."
  },
  "big-bass-bonanza": {
    title: "Big Bass Bonanza",
    provider: "Pragmatic Play",
    rtp: "96.71%",
    volatility: "High",
    maxWin: "4,000x",
    description: "Fishing-themed money collect slot where fisherman wilds collect visible cash values."
  },
  "starlight-princess": {
    title: "Starlight Princess",
    provider: "Pragmatic Play",
    rtp: "96.5%",
    volatility: "High",
    maxWin: "5,000x",
    description: "Anime-inspired tumbling reels slot with 500x multipliers and free spins."
  },
};

// Build demo embed URL
export function getDemoUrl(slug: GameSlug): string {
  const symbol = pragmaticPlaySymbols[slug];
  if (!symbol) return "";
  return `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${symbol}&jurisdiction=99&cur=USD&lang=en`;
}
