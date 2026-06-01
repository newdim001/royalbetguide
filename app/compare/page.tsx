"use client";
import Link from "next/link";

import { useState, useMemo, useRef, useEffect } from "react";

// ── Inline the REVIEWS data ──────────────────────────────────────────
// Importing from the reviews page would cause issues with Next.js SSG,
// so we define a clean subset here.
const REVIEWS: Record<string, any> = {
  "jackpot-city-casino": { name: "Jackpot City Casino", rating: 9.5, bonus: "$1,600 Welcome Bonus", payout: "97.2%", games: "850+", established: "1998", license: "MGA, UKGC", pros: ["Excellent game variety", "High payout percentage", "Long-standing reputation", "Generous welcome bonus"], cons: ["Wagering requirements apply", "Limited live chat hours"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Bitcoin"], providers: ["Microgaming", "NetEnt", "Playtech", "Evolution Gaming", "IGT"], description: "Jackpot City Casino has been a trusted name in online gambling since 1998. With over 850 games, high payout rates, and a generous welcome package." },
  "spin-casino": { name: "Spin Casino", rating: 9.3, bonus: "$1,000 Welcome Package", payout: "96.8%", games: "700+", established: "2001", license: "MGA, UKGC", pros: ["Excellent mobile experience", "Fast withdrawals", "Live dealer games", "24/7 customer support"], cons: ["Limited cryptocurrency options", "Regional restrictions apply"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Paysafecard"], providers: ["Microgaming", "NetEnt", "Evolution Gaming", "Playtech"], description: "Spin Casino delivers a premium online gambling experience with a focus on mobile gaming and fast payouts." },
  "ruby-fortune-casino": { name: "Ruby Fortune Casino", rating: 9.1, bonus: "$750 Welcome Bonus", payout: "96.5%", games: "650+", established: "2003", license: "MGA", pros: ["Trusted brand since 2003", "Great mobile compatibility", "Fast withdrawal processing"], cons: ["Fewer game providers than competitors", "Phone support not available"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal"], providers: ["Microgaming", "Evolution Gaming", "NetEnt"], description: "Ruby Fortune has been delighting players since 2003 with its excellent game selection and reliable payouts." },
  "royal-vegas": { name: "Royal Vegas Casino", rating: 9.0, bonus: "$1,200 Welcome Bonus", payout: "96.3%", games: "900+", established: "2000", license: "MGA", pros: ["Huge game library", "Great VIP program", "Fast payouts", "Trusted brand"], cons: ["Limited crypto options", "Phone support hours"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal"], providers: ["Microgaming", "NetEnt", "Evolution Gaming"], description: "Royal Vegas has been delivering premium gaming since 2000 with over 900 games and a fantastic VIP program." },
  "stake": { name: "Stake Casino", rating: 8.8, bonus: "Crypto Welcome Bonus", payout: "97.5%", games: "4000+", established: "2017", license: "Curacao", pros: ["Massive game library", "Crypto-friendly", "High payout rates", "Innovative features"], cons: ["Not available in all regions", "No traditional fiat support"], payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT"], providers: ["Pragmatic Play", "Hacksaw Gaming", "Evolution Gaming", "NoLimit City"], description: "Stake is the leading crypto casino with thousands of games and some of the highest payout rates in the industry." },
  "bitstarz": { name: "BitStarz Casino", rating: 9.7, bonus: "5 BTC + 200 Free Spins", payout: "98.2%", games: "5000+", established: "2014", license: "Curacao", pros: ["Award-winning platform", "Massive game selection", "Crypto-friendly", "Quick withdrawals"], cons: ["Restricted in some countries", "No live chat 24/7"], payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "Visa", "Mastercard"], providers: ["Pragmatic Play", "NetEnt", "Microgaming", "Evolution Gaming", "Play'n GO"], description: "BitStarz is the most awarded crypto casino in the industry with 5000+ games and provably fair technology." },
  "bc-game": { name: "BC.Game", rating: 9.3, bonus: "Up to $20,000 + 200 Free Spins", payout: "97.8%", games: "8000+", established: "2017", license: "Curacao", pros: ["200+ crypto support", "Unique community features", "Provably fair", "Huge game library"], cons: ["Complex for beginners", "No fiat currency support"], payments: ["Bitcoin", "Ethereum", "BNB", "SOL", "USDT", "ADA"], providers: ["Pragmatic Play", "Hacksaw Gaming", "Evolution Gaming", "BGaming"], description: "BC.Game supports 200+ cryptocurrencies with 8000+ games and unique community elements." },
  "leovegas": { name: "LeoVegas Casino", rating: 9.4, bonus: "$1,000 + 200 Free Spins", payout: "97.1%", games: "3000+", established: "2012", license: "MGA, UKGC", pros: ["Best mobile casino awards", "Excellent game variety", "Fast withdrawals", "24/7 support"], cons: ["Higher wagering requirements", "Country restrictions"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Trustly"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Yggdrasil"], description: "LeoVegas is the king of mobile casino gaming. Multiple Best Mobile Casino awards since 2012." },
  "betway": { name: "Betway Casino", rating: 8.7, bonus: "$1,000 Welcome Bonus", payout: "96.9%", games: "500+", established: "2006", license: "MGA, UKGC", pros: ["Trusted global brand", "Excellent sportsbook", "Live dealer games", "Secure platform"], cons: ["Fewer games than competitors", "Some country restrictions"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Bank Transfer"], providers: ["Microgaming", "NetEnt", "Evolution Gaming"], description: "Betway is a globally trusted brand in online gaming since 2006. Known for its excellent sportsbook and quality casino games." },
  "22bet": { name: "22Bet Casino", rating: 8.6, bonus: "$300 Welcome Bonus", payout: "96.8%", games: "3000+", established: "2017", license: "Curacao", pros: ["Huge sportsbook", "Crypto-friendly", "Low minimum deposit", "Multiple payment options"], cons: ["Average customer support", "Plain website design"], payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill", "Neteller"], providers: ["Pragmatic Play", "NetEnt", "Microgaming", "Evolution Gaming"], description: "22Bet offers an impressive 3000+ casino games alongside a massive sportsbook." },
  "hell-spin": { name: "Hell Spin Casino", rating: 8.5, bonus: "$500 + 150 Free Spins", payout: "96.6%", games: "3000+", established: "2021", license: "Curacao", pros: ["Modern design", "Large game library", "Regular promotions", "Fast withdrawals"], cons: ["Newer brand", "Limited live chat hours"], payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Litecoin", "Skrill"], providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "NoLimit City"], description: "Hell Spin Casino brings a modern gaming experience with 3000+ games and regular promotions." },
  "play-ojo": { name: "PlayOJO Casino", rating: 8.4, bonus: "50 Free Spins No Deposit", payout: "96.2%", games: "3000+", established: "2017", license: "MGA, UKGC", pros: ["No wagering requirements", "Fair play policy", "Cashback on every bet", "Transparent terms"], cons: ["No VIP program", "Limited bonus variety"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Paysafecard"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech"], description: "PlayOJO stands out with its fair play policy — no wagering requirements on bonuses." },
  "katsubet": { name: "KatsuBet Casino", rating: 8.3, bonus: "325% + 200 Free Spins", payout: "96.4%", games: "7000+", established: "2020", license: "Curacao", pros: ["Massive 7000+ games", "Great crypto support", "Generous welcome package", "Regular tournaments"], cons: ["No live chat 24/7", "Phone support limited"], payments: ["Bitcoin", "Ethereum", "Litecoin", "USDT", "Visa", "Mastercard"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Hacksaw Gaming"], description: "KatsuBet launched in 2020 and quickly became popular with its massive 7000+ game library." },
  "mirax-casino": { name: "Mirax Casino", rating: 8.2, bonus: "$500 + 200 Free Spins", payout: "96.3%", games: "5000+", established: "2021", license: "Curacao", pros: ["Large game selection", "Modern interface", "Quick withdrawals", "Good mobile experience"], cons: ["Newer brand", "Limited payment methods"], payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Playtech"], description: "Mirax Casino offers a modern gaming platform with 5000+ games." },
  "7bit-casino": { name: "7BitCasino", rating: 9.4, bonus: "5 BTC + 250 Free Spins", payout: "97.6%", games: "5000+", established: "2014", license: "Curacao", pros: ["Crypto pioneer since 2014", "5000+ games from 70+ providers", "Great VIP program", "Provably fair games"], cons: ["No fiat payments", "Restricted in some countries"], payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT"], providers: ["Pragmatic Play", "NetEnt", "Microgaming", "Evolution Gaming", "Play'n GO"], description: "7BitCasino has been a crypto gaming favorite since 2014 with 5000+ games from over 70 providers." },
  "amazon-slots": { name: "Amazon Slots", rating: 8.7, bonus: "$500 Welcome Bonus", payout: "96.1%", games: "500+", established: "2015", license: "MGA", pros: ["Focus on slots", "Great jackpots", "User-friendly interface", "Mobile optimized"], cons: ["Limited table games", "Smaller game library"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal"], providers: ["Microgaming", "NetEnt", "Playtech"], description: "Amazon Slots focuses on delivering the best slot gaming experience." },
  "royal-panda": { name: "Royal Panda", rating: 8.6, bonus: "$1,000 Welcome Bonus", payout: "96.7%", games: "2500+", established: "2014", license: "MGA, UKGC", pros: ["Excellent live casino", "Great game variety", "Fast payouts", "Unique rewards"], cons: ["Limited crypto options", "Country restrictions"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech"], description: "Royal Panda has been delighting players since 2014 with its excellent live casino and great game variety." },
  "casumo": { name: "Casumo Casino", rating: 8.9, bonus: "$1,200 Welcome Package", payout: "96.8%", games: "2500+", established: "2012", license: "MGA, UKGC", pros: ["Award-winning design", "Gamification system", "Excellent mobile app", "Fast withdrawals"], cons: ["Lower bonus than competitors", "Restricted in some countries"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Paysafecard"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Yggdrasil"], description: "Casumo combines award-winning design with an innovative gamification system." },
  "casino-x": { name: "Casino-X", rating: 8.1, bonus: "$300 Welcome Bonus", payout: "96.0%", games: "2000+", established: "2019", license: "Curacao", pros: ["Simple interface", "Good game selection", "Regular promotions", "Fast withdrawals"], cons: ["Newer brand", "No live chat"], payments: ["Visa", "Mastercard", "Bitcoin", "Skrill", "Neteller"], providers: ["Pragmatic Play", "NetEnt", "Microgaming"], description: "Casino-X offers a straightforward gaming experience with 2000+ games." },
  "energy-casino": { name: "Energy Casino", rating: 8.0, bonus: "$500 + 100 Free Spins", payout: "96.2%", games: "2000+", established: "2015", license: "MGA", pros: ["Fast withdrawals", "Good game selection", "Mobile optimized", "24/7 support"], cons: ["Limited payment methods", "Restricted countries"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech"], description: "Energy Casino delivers fast withdrawals and 24/7 support with over 2000 games." },
  "frank-casino": { name: "Frank Casino", rating: 8.2, bonus: "$500 Welcome Package", payout: "96.4%", games: "2000+", established: "2019", license: "Curacao", pros: ["Modern design", "Good bonus offers", "Fast withdrawal processing", "Live dealer games"], cons: ["Newer brand", "Limited provider list"], payments: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming"], description: "Frank Casino brings a modern approach to online gaming with a stylish design." },
  "888-casino": { name: "888 Casino", rating: 8.9, bonus: "$1,500 Welcome Bonus", payout: "96.5%", games: "2000+", established: "1997", license: "MGA, UKGC", pros: ["Trusted brand since 1997", "Excellent live casino", "Great mobile app", "Exclusive VIP club"], cons: ["Lower payout than some competitors", "Limited crypto options"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Paysafecard"], providers: ["NetEnt", "Microgaming", "Playtech", "Evolution Gaming", "Play'n GO"], description: "888 Casino has been a trusted name in online gambling since 1997." },
  "mr-green": { name: "Mr Green Casino", rating: 8.8, bonus: "$1,000 + 200 Free Spins", payout: "96.6%", games: "1500+", established: "2008", license: "MGA, UKGC", pros: ["Award-winning brand", "Responsible gaming focus", "Unique game categories", "Fast withdrawals"], cons: ["Fewer games than top competitors", "Country restrictions apply"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Trustly"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Yggdrasil"], description: "Mr Green is an award-winning online casino known for its responsible gaming initiatives." },
  "unibet": { name: "Unibet Casino", rating: 8.8, bonus: "$500 Welcome Bonus", payout: "96.4%", games: "1000+", established: "1997", license: "MGA, UKGC", pros: ["Well-established brand", "Excellent sportsbook", "Live streaming", "Trusted operator"], cons: ["Smaller game library", "Limited crypto payments"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Bank Transfer"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Yggdrasil"], description: "Unibet has been a staple of online gaming since 1997." },
  "draftkings": { name: "DraftKings Casino", rating: 8.7, bonus: "$2,000 Welcome Bonus", payout: "96.3%", games: "1500+", established: "2012", license: "US State Licenses", pros: ["Top US brand", "DFS and sportsbook integration", "Daily promotions", "Excellent mobile app"], cons: ["US only", "Limited international availability"], payments: ["Visa", "Mastercard", "PayPal", "PayNearMe", "Online Banking"], providers: ["NetEnt", "Evolution Gaming", "IGT", "Playtech", "Scientific Games"], description: "DraftKings is America's #1 gaming brand with seamless DFS, sportsbook, and casino integration." },
  "fanduel": { name: "FanDuel Casino", rating: 8.7, bonus: "$1,000 Welcome Bonus", payout: "96.2%", games: "1000+", established: "2009", license: "US State Licenses", pros: ["Leading US gaming brand", "Easy-to-use platform", "Fast payouts", "Great daily odds boosts"], cons: ["US only availability", "Smaller game library"], payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "PayNearMe"], providers: ["NetEnt", "Evolution Gaming", "IGT", "Scientific Games"], description: "FanDuel is one of America's most trusted gaming brands with an intuitive casino platform." },
  "betmgm": { name: "BetMGM Casino", rating: 8.6, bonus: "$1,500 Welcome Bonus", payout: "96.4%", games: "2000+", established: "2018", license: "US State Licenses, UKGC", pros: ["MGM Resorts backing", "Huge game selection", "Excellent rewards program", "Available in multiple states"], cons: ["US-heavy focus", "Withdrawal times vary by state"], payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "Skrill"], providers: ["NetEnt", "Evolution Gaming", "Microgaming", "IGT", "Playtech"], description: "BetMGM is backed by MGM Resorts International and offers a massive 2000+ game library." },
  "caesars": { name: "Caesars Palace Online Casino", rating: 8.6, bonus: "$2,500 Welcome Bonus", payout: "96.1%", games: "1500+", established: "2019", license: "US State Licenses", pros: ["Iconic brand name", "Caesars Rewards integration", "Large game variety", "Strong sportsbook"], cons: ["US only", "High wagering requirements"], payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "PayNearMe"], providers: ["NetEnt", "Evolution Gaming", "IGT", "Scientific Games"], description: "Caesars Palace Online Casino brings the iconic Las Vegas brand to your screen." },
  "bovada": { name: "Bovada Casino", rating: 8.5, bonus: "$3,750 Welcome Bonus", payout: "96.5%", games: "500+", established: "2011", license: "Curacao", pros: ["US-friendly since 2011", "Crypto welcome bonus", "Fast crypto payouts", "Great poker room"], cons: ["Not available in some US states", "Limited game providers"], payments: ["Bitcoin", "Bitcoin Cash", "Visa", "Mastercard", "Ethereum"], providers: ["Betsoft", "Rival", "Evolution Gaming", "RealTime Gaming"], description: "Bovada has been the go-to casino for US players since 2011." },
  "ignition": { name: "Ignition Casino", rating: 8.5, bonus: "$3,000 Welcome Bonus", payout: "96.8%", games: "400+", established: "2016", license: "Curacao", pros: ["US-friendly", "Excellent poker network", "Quick crypto payouts", "Anonymous tables"], cons: ["Smaller game library", "Not available in all states"], payments: ["Bitcoin", "Ethereum", "Bitcoin Cash", "Visa", "Mastercard"], providers: ["Betsoft", "Rival", "Evolution Gaming", "RealTime Gaming"], description: "Ignition Casino is a top choice for US players with anonymous poker tables and quick crypto payouts." },
  "red-dog": { name: "Red Dog Casino", rating: 8.3, bonus: "$2,750 Welcome Bonus", payout: "96.2%", games: "300+", established: "2019", license: "Curacao", pros: ["US-friendly", "Generous bonuses", "Crypto friendly", "Simple platform"], cons: ["Small game library", "Limited provider list", "No sportsbook"], payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Neosurf"], providers: ["Betsoft", "RealTime Gaming", "Rival"], description: "Red Dog Casino offers a simplified online casino experience with generous bonuses." },
  "slots-lv": { name: "Slots.lv Casino", rating: 8.4, bonus: "$5,000 Welcome Bonus", payout: "96.6%", games: "500+", established: "2015", license: "Curacao", pros: ["Huge welcome bonus up to $5,000", "US-friendly", "Fast crypto withdrawals", "Great slot selection"], cons: ["Limited table games", "No live dealer"], payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Litecoin"], providers: ["Betsoft", "Rival", "RealTime Gaming"], description: "Slots.lv offers a fantastic slot selection and one of the biggest welcome bonuses in the industry." },
  "cafe-casino": { name: "Cafe Casino", rating: 8.4, bonus: "$2,500 Welcome Bonus", payout: "96.3%", games: "400+", established: "2016", license: "Curacao", pros: ["Perk points program", "US-friendly", "Hot drop jackpots", "Crypto friendly"], cons: ["Limited game variety", "Smaller provider roster"], payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Litecoin"], providers: ["Betsoft", "Rival", "RealTime Gaming"], description: "Cafe Casino blends a warm experience with a rewarding loyalty program and Hot Drop Jackpots." },
  "wild-casino": { name: "Wild Casino", rating: 8.2, bonus: "$5,000 Welcome Bonus", payout: "96.1%", games: "600+", established: "2017", license: "Curacao", pros: ["Huge $5,000 bonus", "US-friendly", "Live dealer available", "Crypto options"], cons: ["Average payout rate", "Website feels dated"], payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Bank Transfer"], providers: ["Betsoft", "Rival", "Evolution Gaming", "RealTime Gaming"], description: "Wild Casino brings a $5,000 welcome bonus and live dealer games to US players." },
  "betonline": { name: "BetOnline Casino", rating: 8.5, bonus: "$3,000 Welcome Bonus", payout: "96.4%", games: "500+", established: "2004", license: "Panama", pros: ["Long-standing reputation since 2004", "Excellent sportsbook", "Crypto friendly", "Good poker"], cons: ["Not available in all US states", "Average withdrawal times"], payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Litecoin"], providers: ["Betsoft", "Rival", "Evolution Gaming", "RealTime Gaming"], description: "BetOnline has been serving players since 2004 as a trusted all-in-one platform." },
  "everygame": { name: "EveryGame Casino", rating: 8.1, bonus: "$1,000 Welcome Bonus", payout: "96.0%", games: "300+", established: "1996", license: "Curacao", pros: ["One of the oldest online casinos", "US-friendly", "Crypto options", "Good poker room"], cons: ["Small game library", "Outdated interface"], payments: ["Bitcoin", "Ethereum", "Visa", "Mastercard", "Neosurf"], providers: ["Betsoft", "Rival", "RealTime Gaming"], description: "EveryGame (formerly InterTops) has been in operation since 1996, making it one of the oldest online casinos." },
  "borgata": { name: "Borgata Casino", rating: 8.6, bonus: "$1,000 Welcome Bonus", payout: "96.3%", games: "1500+", established: "2019", license: "US State Licenses", pros: ["Borgata brand prestige", "Excellent game variety", "MGM Rewards eligible", "Great mobile app"], cons: ["US only", "Limited international access"], payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "PayNearMe"], providers: ["NetEnt", "Evolution Gaming", "IGT", "Playtech", "Scientific Games"], description: "Borgata Casino brings the Atlantic City experience online with 1500+ games." },
  "golden-nugget": { name: "Golden Nugget Casino", rating: 8.5, bonus: "$1,000 Welcome Bonus", payout: "96.5%", games: "1000+", established: "2013", license: "US State Licenses", pros: ["Top-rated mobile app", "Excellent loyalty program", "Fast payouts", "Great live dealer section"], cons: ["US only", "Limited international presence"], payments: ["Visa", "Mastercard", "PayPal", "Online Banking", "Skrill"], providers: ["NetEnt", "Evolution Gaming", "IGT", "Scientific Games"], description: "Golden Nugget is consistently ranked among the best US online casinos." },
  "party-casino": { name: "PartyCasino", rating: 8.4, bonus: "$1,000 Welcome Bonus", payout: "96.2%", games: "1000+", established: "1997", license: "MGA, UKGC", pros: ["Long-standing trusted brand", "Great selection of slots", "Regular promotions", "User-friendly platform"], cons: ["Limited crypto options", "Some country restrictions"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Yggdrasil"], description: "PartyCasino has been a household name in online gaming since 1997." },
  "pokerstars": { name: "PokerStars Casino", rating: 8.6, bonus: "$1,500 Welcome Bonus", payout: "96.6%", games: "1500+", established: "2001", license: "MGA, UKGC", pros: ["World's largest poker room", "Excellent casino games", "Flutter Entertainment backing", "Strong mobile app"], cons: ["Country restrictions", "Not available in US"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Trustly"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Yggdrasil"], description: "PokerStars is the world's largest online poker room with an impressive casino section." },
  "bet365": { name: "Bet365 Casino", rating: 8.9, bonus: "$1,000 Welcome Bonus", payout: "96.8%", games: "2000+", established: "2001", license: "MGA, UKGC", pros: ["Global leading brand", "Massive sportsbook integration", "Live streaming", "Excellent live casino"], cons: ["Limited availability in US", "Strict verification process"], payments: ["Visa", "Mastercard", "Skrill", "Neteller", "PayPal", "Bank Transfer"], providers: ["NetEnt", "Microgaming", "Evolution Gaming", "Playtech", "Play'n GO"], description: "Bet365 is one of the world's largest and most trusted online gaming brands." },
  "dafabet": { name: "Dafabet Casino", rating: 8.4, bonus: "$1,000 Welcome Bonus", payout: "96.3%", games: "1500+", established: "2004", license: "MGA, Philippine PAGCOR", pros: ["Strong Asian market presence", "Excellent sportsbook", "Live casino focus", "Good mobile support"], cons: ["Limited US availability", "Average game variety"], payments: ["Visa", "Mastercard", "Bitcoin", "Skrill", "Neteller", "Bank Transfer"], providers: ["Microgaming", "Evolution Gaming", "Playtech", "NetEnt", "Yggdrasil"], description: "Dafabet has been a dominant force in Asian online gaming since 2004." },
  "luckyblock": { name: "Lucky Block Casino", rating: 8.8, bonus: "$10,000 Crypto Bonus", payout: "97.5%", games: "4000+", established: "2022", license: "Curacao", pros: ["Massive crypto bonus up to $10,000", "No wagering on sports", "4000+ games", "Fast withdrawals"], cons: ["Newer brand (2022)", "No fiat deposits"], payments: ["Bitcoin", "Ethereum", "USDT", "BNB", "Litecoin", "Dogecoin"], providers: ["Pragmatic Play", "Hacksaw Gaming", "Evolution Gaming", "NetEnt", "Play'n GO"], description: "Lucky Block exploded onto the scene in 2022 with a massive $10,000 crypto welcome bonus." },
  "mega-dice": { name: "Mega Dice Casino", rating: 8.6, bonus: "200% + 50 Free Spins", payout: "97.7%", games: "6000+", established: "2023", license: "Curacao", pros: ["6000+ games", "High payout rate", "Crypto-native platform", "Regular tournaments"], cons: ["Very new (2023)", "No fiat support"], payments: ["Bitcoin", "Ethereum", "USDT", "SOL", "ADA", "BNB"], providers: ["Pragmatic Play", "Hacksaw Gaming", "Evolution Gaming", "NoLimit City", "BGaming"], description: "Mega Dice is a crypto-native casino with 6000+ games and impressive 97.7% payout rates." },
  "cloudbet": { name: "CloudBet Casino", rating: 8.5, bonus: "100% up to 5 BTC", payout: "97.0%", games: "2000+", established: "2013", license: "Curacao", pros: ["One of the oldest crypto casinos", "High betting limits", "Excellent sportsbook", "Provably fair"], cons: ["Limited fiat options", "No live chat 24/7"], payments: ["Bitcoin", "Ethereum", "USDT", "Litecoin", "Bitcoin Cash"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Microgaming", "Playtech"], description: "CloudBet has been a pioneer in crypto gambling since 2013." },
  "mbit-casino": { name: "mBit Casino", rating: 8.4, bonus: "4 BTC + 300 Free Spins", payout: "96.8%", games: "2500+", established: "2014", license: "Curacao", pros: ["Long-standing crypto casino since 2014", "Great VIP program", "4 BTC welcome package", "Provably fair games"], cons: ["No fiat payments", "Limited live dealer options"], payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Microgaming", "Play'n GO"], description: "mBit Casino has been a trusted crypto gaming destination since 2014." },
  "fortunejack": { name: "FortuneJack Casino", rating: 8.3, bonus: "5 BTC + 50 Free Spins", payout: "96.7%", games: "2000+", established: "2014", license: "Curacao", pros: ["One of the first crypto casinos", "Provably fair games", "Great sportsbook", "Strong reputation"], cons: ["Outdated interface", "Limited live chat hours"], payments: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT", "Dash"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Microgaming", "BGaming"], description: "FortuneJack is one of the original crypto casinos, operating since 2014." },
  "bitcasino": { name: "Bitcasino.io", rating: 8.7, bonus: "1 BTC + 300 Free Spins", payout: "97.2%", games: "3000+", established: "2014", license: "Curacao", pros: ["Award-winning crypto casino", "Excellent live dealer", "3000+ games", "Instant withdrawals"], cons: ["Crypto only", "Country restrictions"], payments: ["Bitcoin", "Ethereum", "Litecoin", "USDT", "Tron", "BNB"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Hacksaw Gaming", "Play'n GO"], description: "Bitcasino.io is an award-winning crypto casino with 3000+ games and instant withdrawals." },
  "sportsbet": { name: "Sportsbet.io", rating: 8.6, bonus: "Up to $5,000 Welcome Bonus", payout: "97.0%", games: "2000+", established: "2016", license: "Curacao", pros: ["Top crypto sportsbook", "Fast transactions", "5000+ sports markets", "Casino and sports in one"], cons: ["Casino is secondary to sportsbook", "Limited table games"], payments: ["Bitcoin", "Ethereum", "USDT", "Litecoin", "Dogecoin"], providers: ["Pragmatic Play", "NetEnt", "Evolution Gaming", "Microgaming"], description: "Sportsbet.io is one of the leading crypto sportsbooks with 5000+ sports markets." },
  "thunderpick": { name: "Thunderpick Casino", rating: 8.5, bonus: "100% up to $1,000", payout: "96.9%", games: "3000+", established: "2017", license: "Curacao", pros: ["Esports-focused platform", "3000+ casino games", "Crypto-friendly", "Regular tournaments"], cons: ["Esports focus not for everyone", "Limited traditional sports"], payments: ["Bitcoin", "Ethereum", "USDT", "Litecoin", "Dogecoin"], providers: ["Pragmatic Play", "Hacksaw Gaming", "Evolution Gaming", "NoLimit City", "BGaming"], description: "Thunderpick is the premier esports gaming platform with 3000+ casino games." },
  "winzio": { name: "Winz.io Casino", rating: 8.3, bonus: "5 BTC + 200 Free Spins", payout: "97.1%", games: "4000+", established: "2021", license: "Curacao", pros: ["4000+ games from 80+ providers", "Massive 5 BTC welcome bonus", "Fast withdrawals", "Regular promotions"], cons: ["Newer brand (2021)", "No fiat support"], payments: ["Bitcoin", "Ethereum", "USDT", "Litecoin", "Dogecoin", "BNB"], providers: ["Pragmatic Play", "Hacksaw Gaming", "Evolution Gaming", "NetEnt", "Play'n GO"], description: "Winz.io delivers an impressive 4000+ games from over 80 providers." },
};

// ── Natural Language Keyword Map ──────────────────────────────────────
// Maps common phrases/words to casino attributes for smart matching.
const KEYWORD_MAP: Record<string, string[]> = {
  crypto: ["Bitcoin", "Ethereum", "USDT", "crypto", "Crypto", "blockchain", "digital currency"],
  bitcoin: ["Bitcoin", "BTC", "crypto"],
  ethereum: ["Ethereum"],
  "fast withdrawal": ["Fast withdrawals", "Fast withdrawal processing", "Quick withdrawals", "Instant withdrawals", "fast", "quick", "instant"],
  "fast payout": ["Fast withdrawals", "Fast withdrawal processing", "Quick withdrawals", "Fast payouts", "fast", "quick"],
  "high payout": ["High payout percentage", "High payout rates", "High payout rate", "High payout"],
  mobile: ["Mobile", "mobile app", "Mobile experience", "Excellent mobile", "Great mobile app", "Top-rated mobile app", "Good mobile experience", "Good mobile support", "Strong mobile app"],
  "live dealer": ["Live dealer", "Excellent live casino", "Great live dealer", "Live casino"],
  slots: ["slots", "slot", "Great slot selection", "Focus on slots"],
  poker: ["poker", "Great poker room", "Excellent poker network", "Good poker", "poker room", "World's largest poker room"],
  sportsbook: ["sportsbook", "Excellent sportsbook", "Great sportsbook", "Strong sportsbook", "Huge sportsbook", "Top crypto sportsbook"],
  "big bonus": ["Generous welcome bonus", "Generous bonuses", "Massive", "Huge welcome bonus", "Huge", "Generous", "Welcome Bonus"],
  "high rating": [],
  "low wagering": ["No wagering requirements", "No wagering", "wagering"],
  "new casino": ["Newer brand", "Newer brand (2022)", "Very new (2023)", "Newer brand (2021)", "2019", "2020", "2021", "2022", "2023"],
  "old casino": ["1998", "1997", "2000", "2001", "2003", "2004", "2006", "2008", "Long-standing", "since", "trusted brand since"],
  "us players": ["US-friendly", "US only", "US State Licenses", "Top US brand", "Leading US gaming brand", "United States", "America"],
  usa: ["US-friendly", "US only", "US State Licenses", "Top US brand", "Leading US gaming brand"],
  "anonymous": ["Anonymous tables", "anonymous"],
  "provably fair": ["Provably fair", "provably fair games", "Provably fair games"],
  "vip": ["VIP", "VIP program", "Excellent rewards program", "Great VIP program", "MGM Rewards", "loyalty program", "Perk points"],
  "small deposit": ["Low minimum deposit", "low minimum"],
  "24/7 support": ["24/7 support", "24/7 customer support"],
};

// ── Scoring Engine ────────────────────────────────────────────────────
function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}

function scoreCasino(casino: any, query: string): number {
  const ql = query.toLowerCase();
  let score = 0;

  // Direct name match
  if (casino.name.toLowerCase().includes(ql)) score += 50;
  // Description match
  if (casino.description.toLowerCase().includes(ql)) score += 20;

  const combinedText = [
    casino.name,
    casino.description,
    ...casino.pros,
    ...casino.cons,
    ...casino.payments,
    ...casino.providers,
    casino.bonus,
    casino.license,
    casino.established,
    casino.games,
    casino.payout,
  ].join(" ").toLowerCase();

  // Token-level matching
  const tokens = tokenize(query);
  for (const token of tokens) {
    if (combinedText.includes(token)) score += 3;
  }

  // Keyword map matching
  for (const [keyword, matches] of Object.entries(KEYWORD_MAP)) {
    if (ql.includes(keyword)) {
      for (const match of matches) {
        const ml = match.toLowerCase();
        if (
          casino.name.toLowerCase().includes(ml) ||
          casino.description.toLowerCase().includes(ml) ||
          casino.pros.some((p: string) => p.toLowerCase().includes(ml)) ||
          casino.payments.some((p: string) => p.toLowerCase().includes(ml))
        ) {
          score += 10;
          break;
        }
      }
    }
  }

  // Rating boost — higher-rated casinos get a small bonus
  score += casino.rating * 0.5;

  return score;
}

// ── Quick Suggest Queries ─────────────────────────────────────────────
const SUGGESTIONS = [
  "Fast withdrawals with crypto",
  "High payout casino for slots",
  "Live dealer and mobile friendly",
  "US-friendly with big bonus",
  "Crypto casino with poker",
  "Top rated with sportsbook",
];

export default function ComparePage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query.trim() || !submitted) return [];
    const q = query.trim();
    const scored = Object.entries(REVIEWS)
      .map(([slug, casino]) => ({ slug, casino, score: scoreCasino(casino, q) }))
      .filter(({ score }) => score > 2);
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 10);
  }, [query, submitted]);

  const handleSearch = (q?: string) => {
    const value = q ?? inputRef.current?.value ?? "";
    if (value.trim()) {
      setQuery(value.trim());
      setSubmitted(true);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSuggestion = (s: string) => {
    if (inputRef.current) inputRef.current.value = s;
    handleSearch(s);
  };

  const handleReset = () => {
    setQuery("");
    setSubmitted(false);
    setShowSuggestions(true);
    if (inputRef.current) inputRef.current.value = "";
    inputRef.current?.focus();
  };

  return (
    <>
      <link rel="canonical" href="https://royalbetguide.com/compare/" />
      <script dangerouslySetInnerHTML={{ __html: 'document.title="Compare Casinos — Find Your Perfect Match | Royal Bet Guide";' }} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-corg-500">Home</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-800 font-semibold">Casino Compare</span>
      </div>

      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-corg-600 sm:text-4xl">
          🎯 Casino Compare Tool
        </h1>
        <div className="mt-4 rounded-lg border border-corg-500/20 bg-corg-500/5 p-4">
          <p className="text-sm text-slate-600">
            🔥 <strong>Featured:</strong> Compare our partnered casinos side-by-side
          </p>
          <Link href="/compare/7bit-katsubet-mirax/" className="mt-1 inline-block text-sm font-semibold text-corg-500 hover:underline">
            7BitCasino vs KatsuBet vs MiraxCasino — Claim Exclusive Bonuses →
          </Link>
        </div>
        <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
          Tell us what you&apos;re looking for in plain English — we&apos;ll match you with the best casinos.
        </p>
      </div>

      {/* Search Input */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <div className="flex items-center gap-2 rounded-xl border-2 border-corg-500/20 bg-white p-2 shadow-lg shadow-corg-500/5 focus-within:border-corg-500/50 focus-within:shadow-corg-500/10 transition-all">
            <span className="pl-3 text-xl">🔍</span>
            <input
              ref={inputRef}
              type="text"
              placeholder='Try: "I want fast withdrawals and crypto support"'
              defaultValue={query}
              onKeyDown={handleKeyDown}
              className="flex-1 border-none bg-transparent px-2 py-3 text-base text-slate-800 outline-none placeholder:text-slate-400"
            />
            <button
              onClick={() => handleSearch()}
              className="btn-gold mr-1 shrink-0"
            >
              Compare
            </button>
          </div>
        </div>

        {/* Quick Suggestions */}
        {showSuggestions && !submitted && (
          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-slate-500 text-center">Try these queries:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSuggestion(s)}
                  className="rounded-full border border-corg-500/15 bg-corg-500/5 px-4 py-2 text-sm text-corg-600 transition-all hover:bg-corg-500/10 hover:border-corg-500/30"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Header */}
        {submitted && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {results.length > 0
                ? `Found ${results.length} matching casino${results.length !== 1 ? "s" : ""} for "${query}"`
                : `No matches found for "${query}"`}
            </p>
            <button onClick={handleReset} className="text-sm text-corg-500 hover:underline">
              New Search →
            </button>
          </div>
        )}
      </div>

      {/* Results List */}
      {submitted && (
        <div className="mt-6 space-y-4">
          {results.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
              <span className="text-4xl">🤔</span>
              <p className="mt-4 text-slate-500">
                No casinos matched your query. Try being more specific or use different keywords.
              </p>
              <button onClick={handleReset} className="btn-outline mt-4">
                Try Again
              </button>
            </div>
          )}

          {results.map(({ slug, casino, score }, index) => (
            <Link
              key={slug}
              href={`/reviews/${slug}/`}
              className={`block rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-corg-500/30 hover:shadow-lg hover:shadow-corg-500/5 ${
                index === 0 ? "ring-2 ring-gold-400/40" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {index === 0 && (
                      <span className="rounded-full bg-gold-400 px-2.5 py-0.5 text-xs font-bold text-corg-600">
                        Best Match
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-corg-600 truncate">{casino.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-2">{casino.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="rating-badge">⭐ {casino.rating}/10</span>
                    <span className="rounded-full bg-corg-green/10 px-2.5 py-0.5 font-medium text-corg-green-dark">{casino.payout}</span>
                    <span className="rounded-full bg-corg-500/10 px-2.5 py-0.5 text-corg-600">{casino.games} games</span>
                    {casino.payments.some((p: string) => p.includes("Bitcoin") || p.includes("Ethereum")) && (
                      <span className="rounded-full bg-corg-pink/10 px-2.5 py-0.5 text-corg-pink">Crypto</span>
                    )}
                    <span className="text-slate-400">{casino.bonus}</span>
                  </div>
                </div>
                <div className="hidden shrink-0 text-right sm:block">
                  <div className="text-2xl font-extrabold text-corg-500">{casino.rating}</div>
                  <div className="text-xs text-slate-400">/10</div>
                </div>
              </div>

              {/* Match details */}
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-corg-500 to-corg-pink transition-all"
                    style={{ width: `${Math.min((score / 80) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400 font-medium shrink-0">{Math.round(score)}% match</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pro tip */}
      {!submitted && (
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-corg-500/10 bg-corg-500/5 p-6">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <h3 className="font-bold text-corg-600">Pro Tips</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-500">
                <li>• Mention features you care about: crypto, fast payouts, live dealer, mobile app, poker, sportsbook</li>
                <li>• Say &quot;US-friendly&quot; or &quot;USA&quot; to find casinos that accept American players</li>
                <li>• Use words like &quot;big bonus&quot;, &quot;high payout&quot;, or &quot;low wagering&quot; to filter by offers</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
