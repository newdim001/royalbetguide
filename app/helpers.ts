// Content Generators — Unique Text Per Casino
export function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return Math.abs(h);
}

export function pick<T>(arr: T[], seed: number): T { return arr[seed % arr.length]; }

export function getGameText(c: any): string[] {
  const h = hashStr(c.name);

  const p1 = [
    `${c.name} delivers an impressive collection of ${c.games} games, drawing from top studios like ${c.providers.slice(0, 3).join(", ")} to create a well-rounded library.`,
    `At ${c.name}, players explore ${c.games} titles spanning slots, table games, and live dealer action, powered by ${c.providers.slice(0, 3).join(", ")} and other industry leaders.`,
    `With ${c.games} games from providers including ${c.providers.slice(0, 3).join(", ")}, ${c.name} caters to every type of player with a deep and varied catalog.`,
    `${c.name} brings together ${c.games} games from renowned developers such as ${c.providers.slice(0, 3).join(", ")}, offering something for casual spinners and high-rollers alike.`,
    `Players at ${c.name} can browse ${c.games} titles across multiple genres, with software from ${c.providers.slice(0, 3).join(", ")} ensuring top-tier quality throughout.`,
  ];

  const slotThemes = [
    `The slot library is especially strong, featuring jackpot games with progressive prize pools, Megaways titles offering thousands of ways to win, and branded slots tied to popular culture. Fresh releases land regularly, keeping the lobby feeling current.`,
    `Slot enthusiasts will appreciate the range of classic three-reel games, modern video slots with cinematic graphics, and high-volatility titles that appeal to thrill-seekers. Progressive jackpot slots add a layer of excitement with life-changing potential.`,
    `From fruit machines to feature-rich video slots, ${c.name}'s game lobby covers every taste. The collection includes Drops & Wins tournaments, daily jackpot slots, and immersive story-driven games that keep players engaged session after session.`,
    `The slot lineup runs deep, with titles spanning low-volatility games for extended play through to high-volatility slots for those chasing big wins. Branded partnerships bring recognizable themes to the reels.`,
    `Video slots dominate the game library, with many titles featuring buy-in bonus features, cluster pays mechanics, and expanding wilds. Fans of classic slots will also find plenty of traditional three-reel options.`,
  ];

  const hasLive = c.providers.includes("Evolution Gaming") || c.providers.includes("Playtech");
  const tableText = hasLive
    ? `Table game fans have access to multiple blackjack and roulette variants, plus baccarat, craps, and poker. The live dealer lobby — streamed in HD from professional studios — brings the authentic casino floor experience directly to any screen.`
    : `Table game fans will find multiple blackjack variants, European and American roulette, baccarat, and casino poker options. While the focus is on RNG-based games, the quality of the software ensures a smooth and fair experience.`

  const isCrypto = c.payments.some((p: string) => p.includes("Bitcoin") || p.includes("Ethereum"));
  const cryptoNote = isCrypto
    ? `${c.name} also shines in the crypto-gaming space, with provably fair titles from leading blockchain-friendly developers. These games offer verifiable randomness and often feature faster gameplay.`
    : `With ${c.providers.length} providers on board, the game catalog at ${c.name} covers everything from penny slots to VIP tables, ensuring no two sessions feel the same.`

  return [pick(p1, h), pick(slotThemes, h + 1), tableText, cryptoNote];
}

export function getBankingText(c: any): string[] {
  const h = hashStr(c.name);
  const hasCrypto = c.payments.some((p: string) => p.includes("Bitcoin") || p.includes("Ethereum") || p.includes("USDT") || p.includes("SOL"));
  const hasEWallet = c.payments.some((p: string) => ["Skrill", "Neteller", "PayPal"].includes(p));
  const nonFiat = c.payments.filter((p: string) => !["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Paysafecard", "Bank Transfer", "PayNearMe", "Online Banking", "Trustly", "Neosurf"].includes(p));

  const p1 = hasCrypto
    ? `${c.name} supports both traditional and cryptocurrency payment methods, giving players genuine flexibility. Deposit options include ${c.payments.slice(0, 4).join(", ")}, with crypto transactions settling almost instantly and fiat methods processing within minutes.`
    : `${c.name} keeps payments straightforward with ${c.payments.slice(0, 4).join(", ")} and several other widely used options. Deposits are processed instantly with no additional fees, making it easy to fund your account and start playing.`

  const walletLabel = hasEWallet
    ? c.payments.filter((p: string) => ["Skrill", "Neteller", "PayPal"].includes(p)).join(" and ")
    : "popular e-wallet services";

  const p2 = hasCrypto
    ? `Withdrawals follow a similar pattern: e-wallets like ${walletLabel} typically clear within 24 hours, while crypto withdrawals to ${nonFiat.slice(0, 2).join(" or ")} often arrive in under an hour. Card withdrawals take 2–5 business days. ${c.name} processes payout requests promptly, with most verified players reporting same-day approval.`
    : `Withdrawal speeds vary by method: e-wallets process within 24 hours, while card and bank transfer withdrawals take 2–5 business days. ${c.name} is known for processing payout requests efficiently, with most verified players seeing funds in their account faster than the stated timelines.`

  const p3 = hasCrypto
    ? `Crypto users benefit from the fastest turnaround times, with no intermediary banks slowing things down. Minimum deposit limits are reasonable, and the casino does not charge extra for crypto transactions — making it a cost-effective choice for digital currency users.`
    : `All transactions are protected by SSL encryption, and minimum deposit limits start as low as $10 for most methods. ${c.name} doesn't levy deposit fees, and the straightforward cashier interface makes managing your funds simple even for first-time depositors.`

  return [p1, p2, p3];
}

export function getMobileText(c: any): string[] {
  const h = hashStr(c.name);
  const hasApp = c.pros.some((p: string) => p.toLowerCase().includes("app") || p.toLowerCase().includes("mobile"));

  const p1 = hasApp
    ? `${c.name} delivers an exceptional mobile experience, with a dedicated app and a responsive mobile site both available. Whether you prefer downloading the native app or playing instantly in your browser, the experience is smooth, fast, and fully featured.`
    : `${c.name} offers a polished mobile experience through its browser-based platform, optimized for both iOS and Android devices. No download is required — just open your phone's browser and log in to access the full casino.`

  const p2pool = [
    `The mobile interface mirrors the desktop experience, giving players access to all ${c.games} titles, account management tools, deposits, and withdrawals. Touch controls are responsive, and the layout adapts fluidly to screens from 4 inches to 12 inches.`,
    `Navigating the mobile lobby at ${c.name} is intuitive, with search filters, category browsing, and quick-access menus all designed for thumb-friendly use. Games load quickly over both WiFi and 4G/5G connections.`,
    `From a UX perspective, ${c.name}'s mobile platform punches above its weight. Pages render fast, buttons are well-spaced to prevent misclicks, and the game lobby loads in under three seconds on a standard broadband connection.`,
  ];

  const p3pool = [
    `Live dealer games stream reliably over mobile connections, with adaptive bitrate technology adjusting quality based on your network speed. Even on slower connections, the experience remains playable without excessive buffering.`,
    `Battery optimization is impressively effective — even after extended gaming sessions, ${c.name}'s mobile platform consumes noticeably less power than many competitors, making it ideal for on-the-go play.`,
    `The mobile platform supports landscape and portrait orientations, and games automatically scale to fill the available screen. Video slots and table games look crisp on Retina and OLED displays alike.`,
  ];

  return [p1, pick(p2pool, h), pick(p3pool, h + 1)];
}

export function getSupportText(c: any): string[] {
  const h = hashStr(c.name);
  const has247 = c.pros.some((p: string) => p.toLowerCase().includes("24/7") || p.toLowerCase().includes("24/7 support"));
  const noChat = c.cons.some((p: string) => p.toLowerCase().includes("live chat") || p.toLowerCase().includes("no live chat") || p.toLowerCase().includes("limited live chat"));
  const hasPhone = !c.cons.some((p: string) => p.toLowerCase().includes("phone support"));

  const p1 = has247
    ? `${c.name} provides round-the-clock customer support through live chat and email, ensuring help is always available whenever you need it. The support team is known for being responsive and knowledgeable.`
    : noChat
    ? `${c.name} offers email-based customer support with a comprehensive FAQ section covering most common queries. While 24/7 live chat is not available, email responses are typically sent within a few hours during business hours.`
    : `${c.name} supports players through live chat and email channels, with the live chat service operating during peak hours. The FAQ section is well-maintained and answers the majority of routine questions without needing to contact support.`

  const p2 = has247
    ? `Live chat response times average under two minutes, making it one of the faster support teams in the industry. The agents are well-trained and can handle everything from account verification to bonus terms, payment issues, and technical troubleshooting.`
    : `Email support is the primary channel, with the team typically responding within 2–4 hours. The ticketing system is well-organized, and responses are thorough rather than templated, addressing each query individually.`

  const p3 = hasPhone
    ? `Phone support is also available during business hours, adding an extra layer of accessibility for players who prefer speaking to someone directly. Combined with the detailed FAQ, ${c.name} covers all the bases for player assistance.`
    : `Despite the limited live chat hours, the FAQ section is extensive and well-organized, covering account setup, bonuses, payments, security, and technical issues. Most players find their answers here without needing to reach out.`

  return [p1, p2, p3];
}

export function getComparisonCasinos(slug: string, c: any, all: Record<string, any>): Array<{slug: string; name: string; rating: number; bonus: string; payout: string; games: string}> {
  const entries = Object.entries(all)
    .filter(([k]) => k !== slug)
    .map(([k, v]: [string, any]) => ({
      slug: k, name: v.name, rating: v.rating, bonus: v.bonus,
      payout: v.payout, games: v.games,
      simScore: (v.providers.filter((p: string) => c.providers.includes(p)).length * 3) +
                (v.payments.filter((p: string) => c.payments.includes(p)).length * 2) +
                (Math.abs(parseFloat(v.payout) - parseFloat(c.payout)) < 0.5 ? 2 : 0) +
                (Math.abs(v.rating - c.rating) < 0.5 ? 1 : 0)
    }))
    .sort((a: any, b: any) => b.simScore - a.simScore || b.rating - a.rating)
    .slice(0, 4);
  return entries;
}

export function getAuthorName(name: string): string {
  const authors = [
    "Michael Thompson",
    "James Wilson", 
    "David Anderson",
    "Christopher Parker",
    "Robert Martinez",
    "Daniel Johnson",
    "Andrew Mitchell",
    "Kevin Brooks",
    "Jason Reed",
    "Brian Foster",
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) { h = ((h << 5) - h) + name.charCodeAt(i); h |= 0; }
  return authors[Math.abs(h) % authors.length];
}

