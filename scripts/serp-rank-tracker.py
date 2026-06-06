#!/usr/bin/env python3
"""
RoyalBetGuide Free Rank Tracker using SERPAPI
Tracks keyword rankings without paid ahrefs subscription.
Free tier: 100 searches/month (perfect for weekly tracking of 25 keywords)

Get API key: https://serpapi.com (free signup, no credit card)
"""

import os, sys, json, urllib.request, urllib.parse, urllib.error, datetime, time

API_KEY = os.environ.get("SERPAPI_KEY")
if not API_KEY:
    print("[SERPAPI] No API key found.")
    print("  1. Go to https://serpapi.com")
    print("  2. Sign up (free, no credit card)")
    print("  3. Copy your API key from dashboard")
    print("  4. Add to ~/.hermes/profiles/bet-hermes/.env:")
    print("     SERPAPI_KEY=your_key")
    sys.exit(1)

DOMAIN = "royalbetguide.com"
DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "rankings")
os.makedirs(DATA_DIR, exist_ok=True)

# Priority keywords to track (25 fits in free tier for weekly checks)
TRACK_KEYWORDS = [
    "best online casino",
    "best crypto casino",
    "Starburst slot",
    "Book of Dead slot",
    "Sweet Bonanza slot",
    "Gates of Olympus RTP",
    "Money Train 4 slot",
    "Wanted Dead or a Wild slot",
    "Jammin Jars slot",
    "Reactoonz slot",
    "Cleopatra slot",
    "Blood Suckers slot",
    "Book of Ra slot",
    "Razor Shark slot",
    "Immortal Romance slot",
    "Deadwood slot",
    "no deposit bonus",
    "free spins",
    "best bitcoin casino",
    "crypto casino bonus",
    "live dealer casino",
    "high RTP slots",
    "fast withdrawal casino",
    "blackjack strategy",
    "roulette strategy",
]

def check_ranking(keyword):
    """Check ranking for a single keyword on Google US"""
    params = {
        "engine": "google",
        "q": keyword,
        "gl": "us",
        "hl": "en",
        "num": 100,
        "api_key": API_KEY,
    }
    url = "https://serpapi.com/search?" + urllib.parse.urlencode(params)
    
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "RoyalBetGuide-RankTracker/1.0"})
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read().decode())
        
        organic_results = data.get("organic_results", [])
        for idx, result in enumerate(organic_results, 1):
            link = result.get("link", "")
            if DOMAIN in link:
                return {
                    "keyword": keyword,
                    "position": idx,
                    "url": link,
                    "title": result.get("title", ""),
                    "date": datetime.datetime.now().isoformat(),
                }
        
        return {
            "keyword": keyword,
            "position": None,
            "url": None,
            "title": None,
            "date": datetime.datetime.now().isoformat(),
        }
    except Exception as e:
        return {
            "keyword": keyword,
            "position": None,
            "error": str(e),
            "date": datetime.datetime.now().isoformat(),
        }

def run_tracking():
    """Run full rank tracking for all keywords"""
    print("=" * 60)
    print("RoyalBetGuide SERP Rank Tracker")
    print(f"Started: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)
    
    results = []
    total = len(TRACK_KEYWORDS)
    
    for i, keyword in enumerate(TRACK_KEYWORDS, 1):
        print(f"\n[{i}/{total}] Checking: '{keyword}'...")
        result = check_ranking(keyword)
        results.append(result)
        
        if result.get("position"):
            print(f"  \u2705 Position {result['position']}: {result['url'][:60]}")
        elif result.get("error"):
            print(f"  \u274c Error: {result['error']}")
        else:
            print(f"  \u274c Not in top 100")
        
        # Rate limit: 1 request per second on free tier
        if i < total:
            time.sleep(1)
    
    # Save results
    date_str = datetime.datetime.now().strftime("%Y%m%d")
    output_path = os.path.join(DATA_DIR, f"serp-rankings-{date_str}.json")
    with open(output_path, "w") as f:
        json.dump(results, f, indent=2)
    
    # Generate report
    print("\n" + "=" * 60)
    print("RANKING REPORT")
    print("=" * 60)
    
    ranking_count = sum(1 for r in results if r.get("position"))
    not_ranking = sum(1 for r in results if not r.get("position") and not r.get("error"))
    errors = sum(1 for r in results if r.get("error"))
    
    print(f"\nTotal keywords checked: {total}")
    print(f"Ranking in top 100: {ranking_count}")
    print(f"Not ranking: {not_ranking}")
    print(f"Errors: {errors}")
    
    page1 = [r for r in results if r.get("position") and r["position"] <= 10]
    page2 = [r for r in results if r.get("position") and 10 < r["position"] <= 20]
    page3 = [r for r in results if r.get("position") and 20 < r["position"] <= 30]
    
    print(f"\nPage 1 (positions 1-10): {len(page1)}")
    for r in page1:
        print(f"  #{r['position']:>2} - {r['keyword']}")
    
    print(f"\nPage 2 (positions 11-20): {len(page2)}")
    for r in page2:
        print(f"  #{r['position']:>2} - {r['keyword']}")
    
    print(f"\nPage 3 (positions 21-30): {len(page3)}")
    for r in page3:
        print(f"  #{r['position']:>2} - {r['keyword']}")
    
    print(f"\nData saved to: {output_path}")
    
    # Compare with previous run
    previous_files = sorted(
        [f for f in os.listdir(DATA_DIR) if f.startswith("serp-rankings-") and f != os.path.basename(output_path)],
        reverse=True
    )
    if previous_files:
        prev_path = os.path.join(DATA_DIR, previous_files[0])
        with open(prev_path) as f:
            prev_data = json.load(f)
        
        prev_map = {r["keyword"]: r.get("position") for r in prev_data}
        
        print("\n" + "=" * 60)
        print("WEEK-OVER-WEEK CHANGES")
        print("=" * 60)
        
        changes = []
        for r in results:
            kw = r["keyword"]
            curr = r.get("position")
            prev = prev_map.get(kw)
            
            if curr and prev:
                change = prev - curr  # positive = improved
                if abs(change) >= 3:
                    arrow = "\u2b06\ufe0f" if change > 0 else "\u2b07\ufe0f"
                    changes.append(f"  {arrow} {kw}: #{prev} \u2192 #{curr} ({abs(change)} positions)")
            elif curr and not prev:
                changes.append(f"  \ud83c\udd95 {kw}: NEW at #{curr}")
            elif not curr and prev:
                changes.append(f"  \ud83d\udc80 {kw}: DROPPED from #{prev}")
        
        if changes:
            for c in changes:
                print(c)
        else:
            print("  No significant changes (\u00b13 positions)")
    
    print("\n" + "=" * 60)
    print(f"Searches used this run: {total}/100 (free tier monthly limit)")
    print("=" * 60)

if __name__ == "__main__":
    run_tracking()
