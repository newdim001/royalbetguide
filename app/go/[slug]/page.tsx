import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RedirectClient from "./RedirectClient";

// Casino slug → destination website URL (fallback)
const CASINO_URLS: Record<string, string> = {
  "jackpot-city-casino": "https://www.jackpotcity.com",
  "spin-casino": "https://www.spincasino.com",
  "ruby-fortune-casino": "https://www.rubyfortune.com",
  "royal-vegas": "https://www.royalvegascasino.com",
  "stake": "https://stake.com",
  "bitstarz": "https://www.bitstarz.com",
  "bc-game": "https://bc.game",
  "leovegas": "https://www.leovegas.com",
  "betway": "https://www.betway.com",
  "22bet": "https://22bet.com",
  "hell-spin": "https://hellspin.com",
  "play-ojo": "https://www.playojo.com",
  "katsubet": "https://katsubet.com",
  "mirax-casino": "https://miraxcasino.com",
  "7bit-casino": "https://7bitcasino.com",
  "amazon-slots": "https://amazonslots.com",
  "royal-panda": "https://www.royalpanda.com",
  "casumo": "https://www.casumo.com",
  "casino-x": "https://casino-x.com",
  "energy-casino": "https://energycasino.com",
  "frank-casino": "https://frankcasino.com",
  "888-casino": "https://www.888casino.com",
  "mr-green": "https://www.mrgreen.com",
  "unibet": "https://www.unibet.com",
  "draftkings": "https://www.draftkings.com",
  "fanduel": "https://www.fanduel.com",
  "betmgm": "https://www.betmgm.com",
  "caesars": "https://www.caesars.com/casino",
  "bovada": "https://www.bovada.lv",
  "ignition": "https://www.ignitioncasino.eu",
  "red-dog": "https://www.reddogcasino.com",
  "slots-lv": "https://www.slots.lv",
  "cafe-casino": "https://www.cafecasino.lv",
  "wild-casino": "https://www.wildcasino.ag",
  "betonline": "https://www.betonline.ag",
  "everygame": "https://www.everygame.eu",
  "borgata": "https://www.borgataonline.com",
  "golden-nugget": "https://www.goldennuggetcasino.com",
  "party-casino": "https://www.partycasino.com",
  "pokerstars": "https://www.pokerstars.com",
  "bet365": "https://www.bet365.com",
  "dafabet": "https://www.dafabet.com",
  "luckyblock": "https://luckyblock.com",
  "mega-dice": "https://megadicewin.com",
  "cloudbet": "https://www.cloudbet.com",
  "mbit-casino": "https://mbitcasino.com",
  "fortunejack": "https://fortunejack.com",
  "bitcasino": "https://bitcasino.io",
  "sportsbet": "https://sportsbet.io",
  "thunderpick": "https://thunderpick.com",
  "winzio": "https://winz.io",
  "1win": "https://1win.com",
  "pureodds": "https://pureodds.com",
};

// Affiliate tracking URLs — used when present, otherwise falls back to CASINO_URLS
const AFFILIATE_URLS: Record<string, string> = {
  "7bit-casino": "https://7bit.partners/p2jvy2mdh",
  "katsubet": "https://katsubet.partners/px4e6itoe",
  "mirax-casino": "https://mirax.partners/pyklyuxbk",
  "bc-game": "https://bc.game",
  "fortunejack": "https://fortunejack.com",
};

function getRedirectUrl(slug: string): string | undefined {
  return AFFILIATE_URLS[slug] ?? CASINO_URLS[slug];
}

export function generateStaticParams() {
  return Object.keys(CASINO_URLS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const url = getRedirectUrl(slug);
  if (!url) return {};
  return {
    title: `Redirecting to ${url.replace(/^https?:\/\//, "").replace(/\/+$/, "")}...`,
    robots: "noindex, nofollow",
  };
}

export default async function GoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const url = getRedirectUrl(slug);
  if (!url) return notFound();

  return <RedirectClient url={url} />;
}
