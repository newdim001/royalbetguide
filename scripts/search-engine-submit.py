#!/usr/bin/env python3
"""
RoyalBetGuide Search Engine Submission Automation
Handles Google Search Console, Bing Webmaster Tools, and ahrefs API submissions.

Required environment variables:
  GSC_SERVICE_ACCOUNT_KEY  - Path to Google Service Account JSON key file
  BING_WEBMASTER_API_KEY   - Bing Webmaster Tools API key
  AHREFS_API_TOKEN         - ahrefs API v3 token

Setup instructions:
1. Google Search Console:
   - Go to https://search.google.com/search-console
   - Add property: royalbetguide.com
   - Verify via DNS (add TXT record in GoDaddy) or HTML file upload
   - Create service account: https://console.cloud.google.com/iam-admin/serviceaccounts
   - Download JSON key, save as ~/.gsc-service-account.json
   - Add service account email as Owner in GSC

2. Bing Webmaster Tools:
   - Go to https://www.bing.com/webmasters
   - Add and verify royalbetguide.com
   - Get API key from Settings → API Access

3. ahrefs:
   - Go to https://app.ahrefs.com/settings/api
   - Generate API token
"""

import os, sys, json, subprocess, urllib.request, urllib.parse, urllib.error

SITEMAP_URL = "https://royalbetguide.com/sitemap.xml"
DOMAIN = "royalbetguide.com"

def submit_to_bing():
    """Submit sitemap to Bing Webmaster Tools API"""
    api_key = os.environ.get("BING_WEBMASTER_API_KEY")
    if not api_key:
        print("[BING] BING_WEBMASTER_API_KEY not set. Skipping.")
        print("[BING] Get your key at: https://www.bing.com/webmasters → Settings → API Access")
        return False

    url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitFeedblock?apikey={api_key}"
    data = json.dumps({"siteUrl": f"https://{DOMAIN}", "feedUrl": SITEMAP_URL}).encode()
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    try:
        resp = urllib.request.urlopen(req)
        print(f"[BING] Submitted successfully: {resp.read().decode()}")
        return True
    except urllib.error.HTTPError as e:
        print(f"[BING] Error {e.code}: {e.read().decode()}")
        return False

def submit_to_google():
    """Submit sitemap to Google Search Console API"""
    key_path = os.environ.get("GSC_SERVICE_ACCOUNT_KEY")
    if not key_path or not os.path.exists(key_path):
        print("[GOOGLE] GSC_SERVICE_ACCOUNT_KEY not set or file missing. Skipping.")
        print("[GOOGLE] Create service account: https://console.cloud.google.com/iam-admin/serviceaccounts")
        return False

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        print("[GOOGLE] google-api-python-client not installed. Run: pip install google-api-python-client")
        return False

    SCOPES = ['https://www.googleapis.com/auth/webmasters']
    credentials = service_account.Credentials.from_service_account_file(key_path, scopes=SCOPES)
    service = build('webmasters', 'v3', credentials=credentials)

    try:
        service.sitemaps().submit(siteUrl=f"https://{DOMAIN}/", feedpath=SITEMAP_URL).execute()
        print("[GOOGLE] Sitemap submitted successfully to GSC")
        return True
    except Exception as e:
        print(f"[GOOGLE] Error: {e}")
        return False

def check_ahrefs_rankings():
    """Check keyword rankings via ahrefs API"""
    token = os.environ.get("AHREFS_API_TOKEN")
    if not token:
        print("[AHREFS] AHREFS_API_TOKEN not set. Skipping.")
        print("[AHREFS] Get token at: https://app.ahrefs.com/settings/api")
        return False

    # ahrefs API v3 endpoint for organic keywords
    url = f"https://apiv2.ahrefs.com?from=organic_keywords&target={DOMAIN}&mode=subdomains&limit=50&where=volume%3E1000&token={token}"
    try:
        req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read().decode())
        print(f"[AHREFS] Found {len(data.get('organic_keywords', []))} ranking keywords")
        for kw in data.get('organic_keywords', [])[:10]:
            print(f"  - {kw['keyword']}: Position {kw['position']} (Vol: {kw['volume']})")
        return True
    except Exception as e:
        print(f"[AHREFS] Error: {e}")
        return False

def submit_indexnow():
    """Submit all URLs via IndexNow (already done by daily cron, but available here too)"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    indexnow_script = os.path.join(script_dir, "..", "indexnow-submit.py")
    if os.path.exists(indexnow_script):
        result = subprocess.run([sys.executable, indexnow_script], capture_output=True, text=True)
        print(result.stdout.strip())
        return result.returncode == 0
    return False

if __name__ == "__main__":
    print("=" * 60)
    print("RoyalBetGuide Search Engine Submission")
    print("=" * 60)

    # Always submit via IndexNow (covers Bing, Yandex, Seznam.cz)
    print("\n[1/4] IndexNow submission...")
    submit_indexnow()

    print("\n[2/4] Bing Webmaster Tools...")
    submit_to_bing()

    print("\n[3/4] Google Search Console...")
    submit_to_google()

    print("\n[4/4] ahrefs Rank Check...")
    check_ahrefs_rankings()

    print("\n" + "=" * 60)
    print("Done. Set API keys in ~/.hermes/profiles/bet-hermes/.env to enable full automation.")
    print("=" * 60)
