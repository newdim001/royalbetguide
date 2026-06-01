'use client';

import { useState } from 'react';

const CASINO_COLORS: Record<string, string> = {
  '7bitcasino': '#1a1a2e',
  'katsubet': '#e63946',
  'miraxcasino': '#6c5ce7',
  'jackpot-city': '#fca311',
  'spin-casino': '#e63946',
  'ruby-fortune': '#e63946',
  'leovegas': '#ff6b35',
  'stake': '#1a1a2e',
  'bc-game': '#4361ee',
  'bitstarz': '#f72585',
  'royal-vegas': '#d90429',
  'casumo': '#ff6b35',
  'betway': '#14213d',
  '888-casino': '#e63946',
  'mr-green': '#2d6a4f',
  'unibet': '#0d1b2a',
  'draftkings': '#1a1a2e',
  'fanduel': '#14213d',
  'betmgm': '#e63946',
  'caesars': '#14213d',
  'bet365': '#14213d',
  'bovada': '#2d6a4f',
  'ignition': '#d00000',
  'betonline': '#023e8a',
  'borgata': '#14213d',
  'golden-nugget': '#fca311',
  'pokerstars': '#1a1a2e',
  'slots-lv': '#023e8a',
  'cafe-casino': '#2d6a4f',
  'party-casino': '#e63946',
  'red-dog': '#d00000',
  'wild-casino': '#ff6b35',
  'everygame': '#1a1a2e',
  'lucky-block': '#2d6a4f',
  'mega-dice': '#d00000',
  'bitcasino-io': '#4361ee',
  'sportsbet-io': '#023e8a',
  'cloudbet': '#4361ee',
  'thunderpick': '#ff6d00',
  'dafabet': '#14213d',
  'mbit': '#1a1a2e',
  'fortunejack': '#d00000',
  'winz-io': '#e63946',
  'chumba-casino': '#fca311',
  'luckland-slots': '#2d6a4f',
  'funzpoints': '#e63946',
  'global-poker': '#1a1a2e',
  'stake-us': '#1a1a2e',
  'pulsz': '#4361ee',
  'wow-vegas': '#ff6b35',
  'mcluck': '#2d6a4f',
};

interface CasinoLogoProps {
  slug: string;
  name: string;
  size?: number;
  className?: string;
}

export default function CasinoLogo({ slug, name, size = 48, className = '' }: CasinoLogoProps) {
  const [error, setError] = useState(false);
  const imgPath = `/images/casinos/${slug}.png`;
  const initial = name.charAt(0).toUpperCase();
  const bgColor = CASINO_COLORS[slug] || '#6c5ce7';

  if (error) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl font-bold text-white shrink-0 ${className}`}
        style={{ width: size, height: size, backgroundColor: bgColor, fontSize: size * 0.4 }}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={imgPath}
      alt={`${name} logo`}
      width={size}
      height={size}
      className={`rounded-xl object-contain shrink-0 ${className}`}
      style={{ width: size, height: size }}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
