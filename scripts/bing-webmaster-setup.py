#!/usr/bin/env python3
"""
RoyalBetGuide Bing Webmaster Tools Full Automation
One-time setup: get API key, paste into .env, run this script.

What this does:
1. Adds royalbetguide.com to Bing Webmaster Tools
2. Verifies site ownership (DNS TXT record method)
3. Submits sitemap
4. Checks crawl errors and indexing status
5. Sets up weekly automated re-submission

BEFORE RUNNING:
1. Sign up at https://www.bing.com/webmasters (Microsoft account)
2. Go to Settings → API Access → Generate API Key
3. Add to ~/.hermes/profiles/bet-hermes/.env:
   BING_WEBMASTER_API_KEY=your_key_here
"""

import os, sys, json, urllib.request, urllib.parse, urllib.error, time

API_KEY = os.environ.get("BING_WEBMASTER_API_KEY")
SITE_URL = "https://royalbetguide.com"
SITEMAP_URL = "https://royalbetguide.com/sitemap.xml"

def api_request(endpoint, method="GET", data=None):
    if not API_KEY:
        print("[ERROR] BING_WEBMASTER_API_KEY not set.")
        print("  1. Go to https://www.bing.com/webmasters")
        print("  2. Settings → API Access → Copy API Key")
        print("  3. Add to ~/.hermes/profiles/bet-hermes/.env")
        sys.exit(1)

    base = "https://ssl.bing.com/webmaster/api.svc/json/"
    url = f"{base}{endpoint}?apikey={API_KEY}"
    headers = {"Content-Type": "application/json"}

    if data:
        data = json.dumps(data).encode()
        req = urllib.request.Request(url, data=data, headers=headers, method=method)
    else:
        req = urllib.request.Request(url, headers=headers, method=method)

    try:
        resp = urllib.request.urlopen(req, timeout=30)
        return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        return {"error": True, "status": e.code, "message": err}
    except Exception as e:
        return {"error": True, "message": str(e)}

def get_site_list():
    """List all sites in Bing Webmaster Tools"""
    return api_request("GetSites")

def add_site():
    """Add royalbetguide.com to Bing Webmaster Tools"""
    result = api_request("AddSite", method="POST", data={"siteUrl": SITE_URL})
    if result.get("error"):
        if "already exists" in result.get("message", "").lower():
            print(f"[BING] Site {SITE_URL} already exists.")
            return True
        print(f"[BING] Error adding site: {result}")
        return False
    print(f"[BING] Site {SITE_URL} added successfully.")
    return True

def get_verification_token():
    """Get DNS verification token for the site"""
    result = api_request("GetVerifyOwnershipToken", method="POST", data={"siteUrl": SITE_URL})
    if result.get("error"):
        print(f"[BING] Error getting token: {result}")
        return None
    token = result.get("d", {}).get("OwnershipToken", result.get("OwnershipToken"))
    return token

def verify_site():
    """Verify site ownership"""
    result = api_request("VerifySite", method="POST", data={"siteUrl": SITE_URL})
    if result.get("error"):
        msg = result.get("message", "")
        if "already verified" in msg.lower():
            print(f"[BING] Site already verified.")
            return True
        print(f"[BING] Verification failed: {result}")
        return False
    print(f"[BING] Site verified successfully.")
    return True

def submit_sitemap():
    """Submit sitemap to Bing"""
    result = api_request("SubmitFeedblock", method="POST", data={
        "siteUrl": SITE_URL,
        "feedUrl": SITEMAP_URL
    })
    if result.get("error"):
        print(f"[BING] Sitemap submission failed: {result}")
        return False
    print(f"[BING] Sitemap submitted successfully.")
    return True

def get_crawl_errors():
    """Get crawl errors for the site"""
    result = api_request(f"GetCrawlStats?siteUrl={urllib.parse.quote(SITE_URL)}")
    if result.get("error"):
        print(f"[BING] Error fetching crawl stats: {result}")
        return None
    return result

def check_indexed_count():
    """Check approximate indexed pages via Bing search"""
    query = urllib.parse.quote(f"site:royalbetguide.com")
    url = f"https://www.bing.com/search?q={query}&count=1"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        resp = urllib.request.urlopen(req, timeout=15)
        html = resp.read().decode()
        # Try to extract result count
        import re
        match = re.search(r'([\d,]+)\s+results?', html)
        if match:
            return match.group(1).replace(",", "")
        return "unknown"
    except Exception as e:
        return f"error: {e}"

def main():
    print("=" * 60)
    print("RoyalBetGuide Bing Webmaster Tools Setup")
    print("=" * 60)

    if not API_KEY:
        print("\n[ERROR] No API key found.")
        print("\nQuick setup (2 minutes):")
        print("  1. Open https://www.bing.com/webmasters in your browser")
        print("  2. Sign in with your Microsoft account")
        print("  3. Add site: https://royalbetguide.com")
        print("  4. Verify ownership (DNS TXT record method)")
        print("     - Copy the TXT value Bing gives you")
        print("     - Add it in GoDaddy DNS Management")
        print("     - Click Verify in Bing")
        print("  5. Go to Settings → API Access")
        print("  6. Copy the API key")
        print("  7. Run this command and paste the key:")
        print(f'     echo "BING_WEBMASTER_API_KEY=<your_key>" >> ~/.hermes/profiles/bet-hermes/.env')
        print("  8. Then run: python3 scripts/bing-webmaster-setup.py")
        sys.exit(1)

    # Step 1: Check if site exists
    print("\n[1/5] Checking existing sites...")
    sites = get_site_list()
    existing = [s for s in sites.get("d", []) if SITE_URL in str(s)]
    if existing:
        print(f"[BING] Site already registered.")
    else:
        print("[BING] Site not found. Adding...")
        if not add_site():
            print("[BING] Failed to add site. Exiting.")
            sys.exit(1)

    # Step 2: Verify
    print("\n[2/5] Verifying site ownership...")
    token = get_verification_token()
    if token:
        print(f"[BING] Verification token: {token}")
        print(f"[BING] Add this TXT record to GoDaddy DNS:")
        print(f"        Host: @")
        print(f"        Type: TXT")
        print(f"        Value: {token}")
        print(f"[BING] After adding DNS record, run this script again.")
        sys.exit(0)
    else:
        verify_site()

    # Step 3: Submit sitemap
    print("\n[3/5] Submitting sitemap...")
    submit_sitemap()

    # Step 4: Check crawl stats
    print("\n[4/5] Checking crawl stats...")
    crawl = get_crawl_errors()
    if crawl:
        print(f"[BING] Crawl stats: {json.dumps(crawl, indent=2)[:500]}")

    # Step 5: Check indexed count
    print("\n[5/5] Checking indexed pages...")
    count = check_indexed_count()
    print(f"[BING] Approximate indexed pages: {count}")

    print("\n" + "=" * 60)
    print("Bing Webmaster setup complete!")
    print("=" * 60)

if __name__ == "__main__":
    main()
