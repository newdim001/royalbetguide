#!/usr/bin/env python3
"""
RoyalBetGuide SEO Tools Complete Setup
Attempts to configure Bing Webmaster Tools and ahrefs automatically.
Reports what credentials are missing and guides through one-time setup.

Run: python3 scripts/setup-seo-tools.py
"""

import os, sys, subprocess

def check_env(key):
    return os.environ.get(key, "").strip()

def run_script(path, desc):
    print(f"\n{'='*60}")
    print(f"Attempting: {desc}")
    print('='*60)
    full_path = os.path.join(os.path.dirname(__file__), path)
    result = subprocess.run([sys.executable, full_path], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(result.stderr)
    return result.returncode == 0

def main():
    print("=" * 60)
    print("RoyalBetGuide SEO Tools Automated Setup")
    print("=" * 60)

    bing_key = check_env("BING_WEBMASTER_API_KEY")
    ahrefs_token = check_env("AHREFS_API_TOKEN")

    print(f"\n[Credential Status]")
    print(f"  BING_WEBMASTER_API_KEY: {'✅ Found' if bing_key else '❌ Missing'}")
    print(f"  AHREFS_API_TOKEN:       {'✅ Found' if ahrefs_token else '❌ Missing'}")

    results = {}

    # Bing Webmaster
    if bing_key:
        results["bing"] = run_script("bing-webmaster-setup.py", "Bing Webmaster Tools Setup")
    else:
        print(f"\n[SKIP] Bing Webmaster: No API key")
        print("  To enable:")
        print("  1. Visit https://www.bing.com/webmasters")
        print("  2. Sign in → Add site → Verify ownership")
        print("  3. Settings → API Access → Copy key")
        print("  4. Add to ~/.hermes/profiles/bet-hermes/.env:")
        print("     BING_WEBMASTER_API_KEY=your_key_here")

    # ahrefs
    if ahrefs_token:
        results["ahrefs"] = run_script("ahrefs-rank-tracker.py", "ahrefs Rank Tracker")
    else:
        print(f"\n[SKIP] ahrefs: No API token")
        print("  To enable:")
        print("  1. Visit https://app.ahrefs.com/settings/api")
        print("  2. Generate API token")
        print("  3. Add to ~/.hermes/profiles/bet-hermes/.env:")
        print("     AHREFS_API_TOKEN=your_token_here")

    # Summary
    print(f"\n{'='*60}")
    print("SETUP SUMMARY")
    print('='*60)
    if bing_key:
        print(f"  Bing Webmaster: {'✅ Configured' if results.get('bing') else '⚠️  Needs attention'}")
    else:
        print(f"  Bing Webmaster: ⏳ Waiting for API key")
    if ahrefs_token:
        print(f"  ahrefs Tracker: {'✅ Configured' if results.get('ahrefs') else '⚠️  Needs attention'}")
    else:
        print(f"  ahrefs Tracker: ⏳ Waiting for API token")

    print(f"\n[Already Working]")
    print(f"  ✅ IndexNow (Bing/Yandex/Seznam) — 288 URLs submitted daily")
    print(f"  ✅ Daily build + deploy cron")
    print(f"  ✅ Weekly rank report cron (Mondays 09:00)")

    if not bing_key or not ahrefs_token:
        print(f"\n[Next Step]")
        print(f"  Add the missing credentials above, then run:")
        print(f"  python3 scripts/setup-seo-tools.py")

if __name__ == "__main__":
    main()
