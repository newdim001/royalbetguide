#!/usr/bin/env python3
import os
p = "/Users/suren/royalbetguide/app/de/reviews/katsubet/page.tsx"
os.makedirs(os.path.dirname(p), exist_ok=True)
BT = chr(96)
AM = chr(38)
NL = chr(10)
content = """import Link from "next/link";

const CASINO = {
  name: "KatsuBet Casino",
  rating: 8.3,
  bonus: "325% + 200 Freispiele",
  payout: "96.4%",
  games: "7000+",
  established: "2020",
  license: "Curacao",
  pros: [
    "Riesige Auswahl mit 7000+ Spielen",
    "Hervorragende Krypto-Unterst" + chr(252) + "tzung",
    "Gro" + chr(223) + "z" + chr(252) + "giges 325% Willkommenspaket",
    "Regelm" + chr(228) + chr(223) + "ige Turniere mit hohen Preisen",
  ],
  cons: [
    "Kein Live-Chat rund um die Uhr",
    "Telefon-Support eingeschr" + chr(228) + "nkt",
  ],
  payments: ["Bitcoin","Ethereum","Litecoin","USDT","Visa","Mastercard"],
  providers: ["Pragmatic Play","NetEnt","Evolution Gaming","Hacksaw Gaming"],
  affiliateUrl: "https://katsubet.partners/px4e6itoe",
}
"""
with open(p, "w") as fp:
    fp.write(content)
print("Done")
