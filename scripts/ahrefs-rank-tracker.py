#!/usr/bin/env python3
"""
RoyalBetGuide ahrefs Rank Tracker Automation
Tracks 60 target keywords weekly, generates reports, alerts on changes.

Required: AHREFS_API_TOKEN in ~/.hermes/profiles/bet-hermes/.env
Get token: https://app.ahrefs.com/settings/api

Usage:
  python3 scripts/ahrefs-rank-tracker.py           # Check current rankings
  python3 scripts/ahrefs-rank-tracker.py --weekly  # Generate weekly report
  python3 scripts/ahrefs-rank-tracker.py --alert   # Alert on big changes
"""

import os, sys, json, urllib.request, urllib.error, argparse, datetime

API_TOKEN = os.environ.get("AHREFS_API_TOKEN")
DOMAIN = "royalbetguide.com"
KEYWORDS_FILE = os.path.join(os.path.dirname(__file__), "rank-tracker-keywords.json")
DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "rankings")

def ensure_dirs():
    os.makedirs(DATA_DIR, exist_ok=True)

def api_request(endpoint, params=None):
    if not API_TOKEN:
        print("[ERROR] AHREFS_API_TOKEN not set.")
        print("  1. Go to https://app.ahrefs.com/settings/api")
        print("  2. Generate an API token")
        print("  3. Add to ~/.hermes/profiles/bet-hermes/.env:")
        print('     AHREFS_API_TOKEN=your_token_here')
        sys.exit(1)

    base = "https://apiv2.ahrefs.com"
    url = f"{base}?from={endpoint}&target={DOMAIN}&mode=subdomains"
    if params:
        for k, v in params.items():
            url += f"&{k}={urllib.parse.quote(str(v))}"
    url += f"&token={API_TOKEN}"

    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {API_TOKEN}"})
    try:
        resp = urllib.request.urlopen(req, timeout=60)
        return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        return {"error": True, "status": e.code, "message": err}
    except Exception as e:
        return {"error": True, "message": str(e)}

def get_organic_keywords(limit=100):
    """Get organic keywords ranking for the domain"""
    return api_request("organic_keywords", {"limit": limit, "where": "volume>100"})

def get_domain_rating():
    """Get domain rating"""
    return api_request("domain_rating")

def get_backlinks_summary():
    """Get backlinks summary"""
    return api_request("backlinks", {"limit": 1})

def load_target_keywords():
    """Load target keywords from JSON file"""
    if not os.path.exists(KEYWORDS_FILE):
        print(f"[ERROR] Keywords file not found: {KEYWORDS_FILE}")
        sys.exit(1)
    with open(KEYWORDS_FILE) as f:
        data = json.load(f)
    return data.get("keywords", [])

def save_rankings(rankings):
    """Save rankings to dated file"""
    ensure_dirs()
    date = datetime.datetime.now().strftime("%Y%m%d")
    path = os.path.join(DATA_DIR, f"rankings-{date}.json")
    with open(path, "w") as f:
        json.dump(rankings, f, indent=2)
    print(f"[AHREFS] Rankings saved to {path}")
    return path

def load_previous_rankings():
    """Load most recent previous rankings"""
    ensure_dirs()
    files = sorted([f for f in os.listdir(DATA_DIR) if f.startswith("rankings-")], reverse=True)
    if len(files) < 2:
        return None
    prev_file = files[1]  # Second most recent
    with open(os.path.join(DATA_DIR, prev_file)) as f:
        return json.load(f)

def generate_report():
    """Generate a comprehensive ranking report"""
    print("=" * 70)
    print("RoyalBetGuide ahrefs Rank Tracker Report")
    print(f"Generated: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M UTC')}")
    print("=" * 70)

    # Domain metrics
    print("\n[Domain Metrics]")
    dr = get_domain_rating()
    if not dr.get("error"):
        print(f"  Domain Rating (DR): {dr.get('domain', {}).get('domain_rating', 'N/A')}")
    else:
        print(f"  Could not fetch DR: {dr.get('message', 'Unknown error')}")

    # Backlinks
    bl = get_backlinks_summary()
    if not bl.get("error"):
        stats = bl.get("stats", {})
        print(f"  Referring Domains: {stats.get('refdomains', 'N/A')}")
        print(f"  Total Backlinks: {stats.get('backlinks', 'N/A')}")
    else:
        print(f"  Could not fetch backlinks: {bl.get('message', 'Unknown error')}")

    # Organic keywords
    print("\n[Organic Keywords]")
    keywords = get_organic_keywords(limit=100)
    if keywords.get("error"):
        print(f"  Error: {keywords.get('message', 'Unknown')}")
        return

    organic = keywords.get("organic_keywords", [])
    print(f"  Total ranking keywords (vol > 100): {len(organic)}")

    # Page 1 keywords
    page1 = [k for k in organic if k.get("position", 999) <= 10]
    page2 = [k for k in organic if 10 < k.get("position", 999) <= 20]
    page3 = [k for k in organic if 20 < k.get("position", 999) <= 30]
    print(f"  Page 1 (positions 1-10): {len(page1)}")
    print(f"  Page 2 (positions 11-20): {len(page2)}")
    print(f"  Page 3 (positions 21-30): {len(page3)}")

    # Top 20 keywords
    print("\n[Top 20 Ranking Keywords]")
    print(f"{'Position':<10}{'Keyword':<35}{'Volume':<10}{'URL'}")
    print("-" * 100)
    for kw in organic[:20]:
        pos = kw.get("position", "N/A")
        keyword = kw.get("keyword", "N/A")[:33]
        vol = kw.get("volume", "N/A")
        url = kw.get("url", "N/A")[:40]
        print(f"{pos:<10}{keyword:<35}{vol:<10}{url}")

    # Target keyword tracking
    target_kws = load_target_keywords()
    print(f"\n[Target Keyword Tracking ({len(target_kws)} keywords)]")
    print(f"{'Keyword':<35}{'Priority':<10}{'Position':<10}{'Volume':<10}{'Status'}")
    print("-" * 100)

    organic_map = {k.get("keyword", "").lower(): k for k in organic}
    found = 0
    not_found = 0

    for tk in target_kws:
        kw_name = tk["keyword"]
        kw_lower = kw_name.lower()
        priority = tk.get("priority", "P2")
        volume = tk.get("volume", "N/A")

        if kw_lower in organic_map:
            pos = organic_map[kw_lower].get("position", "N/A")
            if pos <= 10:
                status = "\u2705 PAGE 1"
            elif pos <= 20:
                status = "\u26a0\ufe0f PAGE 2"
            elif pos <= 50:
                status = "\u23ed\ufe0f PAGE 3-5"
            else:
                status = "\u23ed\ufe0f PAGE 6+"
            found += 1
        else:
            pos = "Not ranking"
            status = "\u274c Not indexed"
            not_found += 1

        print(f"{kw_name:<35}{priority:<10}{str(pos):<10}{str(volume):<10}{status}")

    print(f"\n[Summary]")
    print(f"  Ranking keywords found: {found}/{len(target_kws)}")
    print(f"  Not yet ranking: {not_found}/{len(target_kws)}")

    # Save data
    rankings_data = {
        "date": datetime.datetime.now().isoformat(),
        "domain_rating": dr,
        "backlinks": bl,
        "organic_keywords": organic,
        "target_keywords": target_kws
    }
    save_rankings(rankings_data)

def check_alerts():
    """Alert on significant ranking changes"""
    current = get_organic_keywords(limit=200)
    if current.get("error"):
        print(f"[ALERT] Error fetching current rankings: {current.get('message')}")
        return

    previous = load_previous_rankings()
    if not previous:
        print("[ALERT] No previous data for comparison. Run --weekly first.")
        return

    current_map = {k.get("keyword", "").lower(): k for k in current.get("organic_keywords", [])}
    prev_map = {k.get("keyword", "").lower(): k for k in previous.get("organic_keywords", [])}

    alerts = []

    for kw_name, curr in current_map.items():
        curr_pos = curr.get("position", 999)
        if kw_name in prev_map:
            prev_pos = prev_map[kw_name].get("position", 999)
            change = prev_pos - curr_pos  # positive = improved
            if abs(change) >= 5:
                direction = "\u2b06\ufe0f UP" if change > 0 else "\u2b07\ufe0f DOWN"
                alerts.append(f"  {direction} {kw_name}: {prev_pos} \u2192 {curr_pos} ({abs(change)} positions)")

    # New keywords
    for kw_name, curr in current_map.items():
        if kw_name not in prev_map:
            alerts.append(f"  \ud83c\udd95 NEW {kw_name}: position {curr.get('position', 'N/A')}")

    # Lost keywords
    for kw_name, prev in prev_map.items():
        if kw_name not in current_map:
            alerts.append(f"  \ud83d\udc80 LOST {kw_name}: was position {prev.get('position', 'N/A')}")

    if alerts:
        print("=" * 60)
        print("RANKING ALERTS")
        print("=" * 60)
        for alert in alerts:
            print(alert)
    else:
        print("[ALERT] No significant ranking changes detected.")

def main():
    parser = argparse.ArgumentParser(description="RoyalBetGuide ahrefs Rank Tracker")
    parser.add_argument("--weekly", action="store_true", help="Generate weekly report")
    parser.add_argument("--alert", action="store_true", help="Check for ranking alerts")
    args = parser.parse_args()

    if args.alert:
        check_alerts()
    else:
        generate_report()

if __name__ == "__main__":
    main()
