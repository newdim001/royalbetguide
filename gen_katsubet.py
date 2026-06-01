#!/usr/bin/env python3
import os

A = chr(38)  # ampersand
R = chr(8594)  # right arrow
EM = chr(8212)  # em dash
EU = chr(8364)  # euro
LSQ = chr(8222)  # left German quote
RSQ = chr(8220)  # right German quote
SS = chr(223)  # sharp s
UE = chr(252)  # u-umlaut
OE = chr(246)  # o-umlaut
AE = chr(228)  # a-umlaut

desc = []
desc.append("KatsuBet Casino hat sich seit seiner Gr" + UE + "ndung im Jahr 2020 als eine der f" + UE + "hrenden Krypto-Casino-Plattformen etabliert.")
desc.append("Was KatsuBet besonders auszeichnet, ist das enorme Spielvolumen und die Turnierdichte.")
desc.append("Die Spielauswahl ist schlichtweg " + UE + "berw" + AE + "ltigend.")

path = "/Users/suren/royalbetguide/app/de/reviews/katsubet/page.tsx"
os.makedirs(os.path.dirname(path), exist_ok=True)

with open(path, "w", encoding="utf-8") as f:
    for line in desc:
        f.write(line + chr(10))

print("Wrote " + str(len(desc)) + " lines")
