'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// ─── Desktop Nav Links (English) ───
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/bonus/", label: "Bonuses" },
  { href: "/games/", label: "Games" },
  { href: "/guides/", label: "Guides" },
  { href: "/free-slots/", label: "Free Slots" },
  { href: "/sports/", label: "Sports" },
  { href: "/sweepstakes-casinos/", label: "Sweepstakes" },
  { href: "/blog/", label: "Blog" },
];

const DE_NAV_LINKS = [
  { href: "/de/", label: "Start" },
  { href: "/de/reviews/", label: "Bewertungen" },
  { href: "/de/bonus/", label: "Boni" },
  { href: "/de/games/", label: "Spiele" },
  { href: "/de/guides/", label: "Ratgeber" },
  { href: "/free-slots/", label: "Kostenlos" },
  { href: "/de/sports/", label: "Sport" },
  { href: "/de/blog/", label: "Blog" },
];

const ES_NAV_LINKS = [
  { href: "/es/", label: "Inicio" },
  { href: "/es/reviews/", label: "Reseñas" },
  { href: "/es/bonus/", label: "Bonos" },
  { href: "/es/games/", label: "Juegos" },
  { href: "/es/guides/", label: "Guías" },
  { href: "/free-slots/", label: "Slots Gratis" },
  { href: "/es/sports/", label: "Deportes" },
  { href: "/es/blog/", label: "Blog" },
];

const FR_NAV_LINKS = [
  { href: "/fr/", label: "Accueil" },
  { href: "/fr/reviews/", label: "Avis" },
  { href: "/fr/bonus/", label: "Bonus" },
  { href: "/fr/games/", label: "Jeux" },
  { href: "/fr/guides/", label: "Guides" },
  { href: "/free-slots/", label: "Slots Gratuits" },
  { href: "/fr/sports/", label: "Sport" },
  { href: "/fr/blog/", label: "Blog" },
];

const IT_NAV_LINKS = [
  { href: "/it/", label: "Home" },
  { href: "/it/reviews/", label: "Recensioni" },
  { href: "/it/bonus/", label: "Bonus" },
  { href: "/it/games/", label: "Giochi" },
  { href: "/it/guides/", label: "Guide" },
  { href: "/free-slots/", label: "Slot Gratis" },
  { href: "/it/sports/", label: "Sport" },
  { href: "/it/blog/", label: "Blog" },
];

const LOCALE_MAP: Record<string, { links: typeof NAV_LINKS; cta: string; ctaText: string; lang: string; label: string; flag: string }> = {
  en: { links: NAV_LINKS, cta: "/reviews/", ctaText: "Get Bonus →", lang: "en", label: "English", flag: "🇬🇧" },
  de: { links: DE_NAV_LINKS, cta: "/de/reviews/", ctaText: "Zum Bonus →", lang: "de", label: "Deutsch", flag: "🇩🇪" },
  es: { links: ES_NAV_LINKS, cta: "/es/reviews/", ctaText: "Obtener Bono →", lang: "es", label: "Español", flag: "🇪🇸" },
  fr: { links: FR_NAV_LINKS, cta: "/fr/reviews/", ctaText: "Obtenir le Bonus →", lang: "fr", label: "Français", flag: "🇫🇷" },
  it: { links: IT_NAV_LINKS, cta: "/it/reviews/", ctaText: "Ottieni Bonus →", lang: "it", label: "Italiano", flag: "🇮🇹" },
};

function getLocale(): string {
  if (typeof window === "undefined") return "en";
  const path = window.location.pathname;
  if (path.startsWith("/de/") || path === "/de") return "de";
  if (path.startsWith("/es/") || path === "/es") return "es";
  if (path.startsWith("/fr/") || path === "/fr") return "fr";
  if (path.startsWith("/it/") || path === "/it") return "it";
  return "en";
}

// ─── Mega Menu Data ───
const MEGA_MENUS = {
  reviews: {
    groups: [
      {
        title: "Top Casinos",
        links: [
          { label: "7BitCasino", href: "/reviews/7bit-casino/" },
          { label: "KatsuBet", href: "/reviews/katsubet/" },
          { label: "MiraxCasino", href: "/reviews/mirax-casino/" },
          { label: "Jackpot City", href: "/reviews/jackpot-city-casino/" },
          { label: "Spin Casino", href: "/reviews/spin-casino/" },
          { label: "Stake", href: "/reviews/stake/" },
        ],
      },
      {
        title: "Categories",
        links: [
          { label: "Best Crypto Casinos", href: "/best-crypto-casinos/" },
          { label: "Best Live Dealer", href: "/best-live-dealer/" },
          { label: "Best Mobile Casinos", href: "/best-mobile-casinos/" },
          { label: "Best Sportsbooks", href: "/best-sportsbooks/" },
          { label: "Best Welcome Bonuses", href: "/best-welcome-bonuses/" },
          { label: "Sweepstakes Casinos", href: "/sweepstakes-casinos/" },
        ],
      },
      {
        title: "US & UK",
        links: [
          { label: "Pennsylvania Casinos", href: "/region/pennsylvania/" },
          { label: "Michigan Casinos", href: "/region/michigan/" },
          { label: "US Casinos", href: "/us/" },
          { label: "NJ Sportsbooks", href: "/sports/new-jersey-sportsbooks/" },
          { label: "PA Sportsbooks", href: "/sports/pennsylvania-sportsbooks/" },
          { label: "Non-GamStop Casinos", href: "/blog/non-gamstop-casinos-uk/" },
        ],
      },
    ],
  },
  games: {
    groups: [
      {
        title: "Game Guides",
        links: [
          { label: "All Games →", href: "/games/" },
          { label: "Slots", href: "/guides/slots/" },
          { label: "Blackjack", href: "/guides/blackjack/" },
          { label: "Roulette", href: "/guides/roulette/" },
          { label: "Poker", href: "/guides/poker/" },
          { label: "Baccarat", href: "/guides/baccarat/" },
          { label: "Craps", href: "/guides/craps/" },
          { label: "Video Poker", href: "/guides/video-poker/" },
        ],
      },
      {
        title: "Game Providers",
        links: [
          { label: "Pragmatic Play Casinos", href: "/games/pragmatic-play-casinos/" },
          { label: "Evolution Gaming", href: "/games/evolution-casinos/" },
          { label: "NetEnt Casinos", href: "/games/netent-casinos/" },
          { label: "Play'n GO Casinos", href: "/games/playn-go-casinos/" },
          { label: "Microgaming Casinos", href: "/games/microgaming-casinos/" },
          { label: "BGaming Casinos", href: "/games/bgaming-casinos/" },
        ],
      },
      {
        title: "Live & Special",
        links: [
          { label: "Live Dealer Guide", href: "/guides/live-dealer/" },
          { label: "Live Casino", href: "/games/live-casino/" },
          { label: "Live Blackjack", href: "/games/live-dealer-blackjack/" },
          { label: "Live Roulette", href: "/games/live-dealer-roulette/" },
          { label: "Live Baccarat", href: "/games/live-dealer-baccarat/" },
          { label: "Progressive Jackpots", href: "/games/progressive-jackpots/" },
          { label: "Free Games", href: "/games/free/" },
        ],
      },
      {
        title: "Free Slots",
        links: [
          { label: "All Free Slots →", href: "/free-slots/" },
          { label: "Gates of Olympus", href: "/games/slots/gates-of-olympus/" },
          { label: "Sweet Bonanza", href: "/games/slots/sweet-bonanza/" },
          { label: "Wolf Gold", href: "/games/slots/wolf-gold/" },
          { label: "Starburst", href: "/games/slots/starburst/" },
          { label: "Book of Dead", href: "/games/slots/book-of-dead/" },
          { label: "Big Bass Bonanza", href: "/games/slots/big-bass-bonanza/" },
        ],
      },
    ],
  },
  guides: {
    groups: [
      {
        title: "Game Strategies",
        links: [
          { label: "All Guides →", href: "/guides/" },
          { label: "Slots Guide", href: "/guides/slots/" },
          { label: "Blackjack Guide", href: "/guides/blackjack/" },
          { label: "Roulette Guide", href: "/guides/roulette/" },
          { label: "Poker Guide", href: "/guides/poker/" },
        ],
      },
      {
        title: "More Guides",
        links: [
          { label: "Baccarat Guide", href: "/guides/baccarat/" },
          { label: "Craps Guide", href: "/guides/craps/" },
          { label: "Video Poker Guide", href: "/guides/video-poker/" },
          { label: "Live Dealer Guide", href: "/guides/live-dealer/" },
          { label: "Football Betting", href: "/sports/football-betting/" },
        ],
      },
    ],
  },
};

const ANNOUNCEMENT_BAR = [
  { icon: '🎲', text: 'New 2026' },
  { icon: "🏆", text: "Expert casino & betting reviews" },
  { icon: "💰", text: "Exclusive welcome bonuses" },
  { icon: "🔒", text: "Safe & responsible gambling" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announceIdx, setAnnounceIdx] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const locale = getLocale();
  const config = LOCALE_MAP[locale] || LOCALE_MAP.en;
  const prefix = locale === "en" ? "" : "/" + locale;

  // Rotating announcements
  useEffect(() => {
    const t = setInterval(() => setAnnounceIdx(i => (i + 1) % ANNOUNCEMENT_BAR.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Track header height for backdrop
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) setHeaderHeight(e.contentRect.height);
    });
    ro.observe(el);
    setHeaderHeight(el.offsetHeight);
    return () => ro.disconnect();
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest('[data-nav]')) {
        setActiveMega(null);
        setActiveDropdown(null);
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handler, { passive: true });
    return () => document.removeEventListener('click', handler);
  }, []);

  const anyMenuOpen = activeMega || activeDropdown || langOpen;
  const a = ANNOUNCEMENT_BAR[announceIdx];

  // Mega menu open/close with hover delay
  const handleMegaEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(name);
    setActiveDropdown(null);
    setLangOpen(false);
  };
  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  };
  const handleDropdownEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
    setActiveMega(null);
    setLangOpen(false);
  };
  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-[100]" data-nav>
        {/* Announcement bar */}
        <div className="bg-gradient-to-r from-corg-600 to-corg-500 text-white text-xs py-1.5 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 transition-opacity duration-300">
              <span>{a.icon}</span>
              <span>{a.text}</span>
            </span>
            <Link href={prefix + "/reviews/"} className="text-gold-400 hover:text-gold-300 font-medium underline underline-offset-2 ml-1">
              {locale === "de" ? "Jetzt entdecken →" : locale === "es" ? "Descubrir →" : locale === "fr" ? "Découvrir →" : locale === "it" ? "Scopri →" : "Explore →"}
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="border-b border-white/10 bg-corg-500/95 backdrop-blur-2xl shadow-lg shadow-black/10">
          <div className="mx-auto max-w-6xl px-4">
            {/* Row 1: Logo | Nav | Lang | CTA | Hamburger */}
            <div className="flex items-center justify-between h-16 gap-2">
              {/* Logo */}
              <Link href={prefix || "/"} className="flex items-center gap-2.5 shrink-0 group">
                <div className="relative h-9 w-9 overflow-hidden rounded-lg sm:h-10 sm:w-10">
                  <img src="/logo.svg" alt="Royal Bet Guide" className="h-full w-full object-contain" />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-tight text-white sm:text-base">Royal Bet Guide</span>
                  <span className="text-[10px] font-medium leading-tight text-gold-400 sm:text-[11px]">
                    {locale === "de" ? "★ Seriöse Tests" : locale === "es" ? "★ Reseñas Verificadas" : locale === "fr" ? "★ Avis Fiables" : locale === "it" ? "★ Recensioni Affidabili" : "★ Trusted Reviews"}
                  </span>
                </div>
              </Link>

              {/* Desktop nav - hidden on mobile */}
              <div className="hidden lg:flex items-center gap-1">
                {/* Reviews - Mega Menu */}
                <div className="relative" onMouseEnter={() => handleMegaEnter("reviews")} onMouseLeave={handleMegaLeave}>
                  <button className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    activeMega === "reviews" ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}>
                    {locale === "de" ? "Bewertungen" : locale === "es" ? "Reseñas" : locale === "fr" ? "Avis" : locale === "it" ? "Recensioni" : "Casinos"}
                    <svg className="w-3 h-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {activeMega === "reviews" && (
                    <div className="absolute top-full left-0 mt-1 z-50 bg-white/95 backdrop-blur-2xl rounded-xl border border-slate-200/70 shadow-xl shadow-black/10 p-5 min-w-[680px]">
                      <div className="grid grid-cols-3 gap-6">
                        {MEGA_MENUS.reviews.groups.map((group) => (
                          <div key={group.title}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-corg-500 mb-2.5">{group.title}</p>
                            <div className="space-y-1">
                              {group.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setActiveMega(null)}
                                  className="block rounded-lg px-2.5 py-1.5 text-sm text-slate-600 hover:text-corg-500 hover:bg-corg-500/5 transition-colors">
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-slate-200/70 mt-4 pt-3 text-center">
                        <Link href={prefix + "/reviews/"} onClick={() => setActiveMega(null)}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-corg-500 hover:text-corg-600 transition-colors">
                          {locale === "de" ? "Alle Bewertungen →" : locale === "es" ? "Todas las reseñas →" : locale === "fr" ? "Tous les avis →" : locale === "it" ? "Tutte le recensioni →" : "View All Reviews →"}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Games - Mega Menu */}
                <div className="relative" onMouseEnter={() => handleMegaEnter("games")} onMouseLeave={handleMegaLeave}>
                  <button className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    activeMega === "games" ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}>
                    {locale === "de" ? "Spiele" : locale === "es" ? "Juegos" : locale === "fr" ? "Jeux" : locale === "it" ? "Giochi" : "Games"}
                    <svg className="w-3 h-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {activeMega === "games" && (
                    <div className="absolute top-full left-0 mt-1 z-50 bg-white/95 backdrop-blur-2xl rounded-xl border border-slate-200/70 shadow-xl shadow-black/10 p-5 min-w-[700px]">
                      <div className="grid grid-cols-4 gap-5">
                        {MEGA_MENUS.games.groups.map((group) => (
                          <div key={group.title}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-corg-500 mb-2.5">{group.title}</p>
                            <div className="space-y-1">
                              {group.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setActiveMega(null)}
                                  className="block rounded-lg px-2.5 py-1.5 text-sm text-slate-600 hover:text-corg-500 hover:bg-corg-500/5 transition-colors">
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Guides - Mega Menu */}
                <div className="relative" onMouseEnter={() => handleMegaEnter("guides")} onMouseLeave={handleMegaLeave}>
                  <button className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    activeMega === "guides" ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}>
                    {locale === "de" ? "Ratgeber" : locale === "es" ? "Guías" : locale === "fr" ? "Guides" : locale === "it" ? "Guide" : "Guides"}
                    <svg className="w-3 h-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {activeMega === "guides" && (
                    <div className="absolute top-full left-0 mt-1 z-50 bg-white/95 backdrop-blur-2xl rounded-xl border border-slate-200/70 shadow-xl shadow-black/10 p-5 min-w-[400px]">
                      <div className="grid grid-cols-2 gap-6">
                        {MEGA_MENUS.guides.groups.map((group) => (
                          <div key={group.title}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-corg-500 mb-2.5">{group.title}</p>
                            <div className="space-y-1">
                              {group.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setActiveMega(null)}
                                  className="block rounded-lg px-2.5 py-1.5 text-sm text-slate-600 hover:text-corg-500 hover:bg-corg-500/5 transition-colors">
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Static links */}
                {config.links.filter(l => {
                  const labels = l.label.toLowerCase();
                  return !["home", "reviews", "bewertungen", "reseñas", "avis", "recensioni", "games", "spiele", "juegos", "jeux", "giochi", "guides", "ratgeber", "guías", "guides", "guide"].includes(labels);
                }).map((l) => (
                  <Link key={l.href} href={l.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* Right side: Lang + CTA + Hamburger */}
              <div className="flex items-center gap-2">
                {/* Language Switcher */}
                <div className="relative z-50">
                  <button onClick={() => { setLangOpen(!langOpen); setActiveMega(null); setActiveDropdown(null); }}
                    className="flex items-center gap-1 rounded-lg border border-white/20 px-2.5 py-1.5 text-xs font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span>{config.flag}</span>
                  </button>
                  {langOpen && (
                    <div className="absolute right-0 top-full mt-1 w-36 rounded-lg bg-white/95 backdrop-blur-2xl border border-slate-200/70 shadow-lg py-1 z-50">
                      {Object.entries(LOCALE_MAP).map(([code, info]) => (
                        <Link key={code} href={code === "en" ? "/" : "/" + code + "/"} onClick={() => setLangOpen(false)}
                          className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                            locale === code ? "text-corg-500 font-semibold" : "text-slate-500 hover:text-corg-500 hover:bg-corg-500/5"
                          }`}>
                          <span>{info.flag}</span>
                          {info.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA - hidden on mobile, shown on desktop */}
                <Link href={config.cta} className="hidden lg:inline-flex btn-gold py-2 text-sm">
                  {config.ctaText}
                </Link>

                {/* Mobile hamburger */}
                <button onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  {mobileOpen ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
              <div className="lg:hidden border-t border-white/10 bg-corg-600/95 backdrop-blur-2xl pb-4 pt-2 max-h-[80vh] overflow-y-auto">
                {/* Mobile CTA */}
                <div className="px-3 pb-3">
                  <Link href={config.cta} className="btn-gold w-full justify-center text-sm py-2.5"
                    onClick={() => setMobileOpen(false)}>
                    {config.ctaText}
                  </Link>
                </div>

                {/* Mobile nav sections */}
                <p className="px-3 text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-2">
                  {locale === "de" ? "Navigation" : locale === "es" ? "Navegación" : locale === "fr" ? "Navigation" : locale === "it" ? "Navigazione" : "Navigation"}
                </p>

                {/* Casino reviews sub-section */}
                <div className="px-3 mb-3">
                  <p className="text-xs font-semibold text-gold-400/80 mb-1.5">
                    {locale === "de" ? "★ TOP CASINOS" : locale === "es" ? "★ MEJORES CASINOS" : locale === "fr" ? "★ MEILLEURS CASINOS" : locale === "it" ? "★ MIGLIORI CASINÒ" : "★ TOP CASINOS"}
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { label: "7BitCasino", href: "/reviews/7bit-casino/" },
                      { label: "KatsuBet", href: "/reviews/katsubet/" },
                      { label: "MiraxCasino", href: "/reviews/mirax-casino/" },
                      { label: "Jackpot City", href: "/reviews/jackpot-city-casino/" },
                      { label: "Spin Casino", href: "/reviews/spin-casino/" },
                      { label: "Stake", href: "/reviews/stake/" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Static nav links */}
                <div className="border-t border-white/10 pt-2">
                  {config.links.filter(l => l.label !== "Home").map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* Guides sub-section */}
                <div className="border-t border-white/10 mt-2 pt-2 px-3">
                  <p className="text-xs font-semibold text-gold-400/80 mb-1.5">
                    {locale === "de" ? "📖 RATGEBER" : locale === "es" ? "📖 GUÍAS" : locale === "fr" ? "📖 GUIDES" : locale === "it" ? "📖 GUIDE" : "📖 GUIDES"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Slots", "Blackjack", "Roulette", "Poker", "Baccarat", "Craps"].map((g) => {
                      const slug = g.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <Link key={g} href={prefix + "/guides/" + slug + "/"} onClick={() => setMobileOpen(false)}
                          className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-white/60 hover:text-white hover:border-white/30 transition-colors">
                          {g}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile language */}
                <div className="border-t border-white/10 mt-3 pt-3 px-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-2">
                    {locale === "de" ? "Sprache" : locale === "es" ? "Idioma" : locale === "fr" ? "Langue" : locale === "it" ? "Lingua" : "Language"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(LOCALE_MAP).map(([code, info]) => (
                      <Link key={code} href={code === "en" ? "/" : "/" + code + "/"} onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                          locale === code
                            ? "border-gold-400/50 bg-gold-400/10 text-gold-300"
                            : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                        }`}>
                        <span>{info.flag}</span>
                        {info.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* PAGE BACKDROP BLUR - fades page content when any menu is open */}
      <div className="fixed inset-0 z-40"
        style={{
          top: headerHeight,
          opacity: anyMenuOpen ? 1 : 0,
          pointerEvents: anyMenuOpen ? 'auto' as const : 'none' as const,
          transition: 'opacity 0.4s ease-in-out',
          backdropFilter: anyMenuOpen ? 'blur(4px)' : 'none',
          WebkitBackdropFilter: anyMenuOpen ? 'blur(4px)' : 'none',
          backgroundColor: anyMenuOpen ? 'rgba(0,0,0,0.15)' : 'transparent',
        }}
        onClick={() => { setActiveMega(null); setActiveDropdown(null); setLangOpen(false); setMobileOpen(false); }} />
    </>
  );
}
