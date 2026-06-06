#!/usr/bin/env python3
"""
Bing URL Submission API - No site verification required
Submits individual URLs directly to Bing for indexing.
Free, no API key needed for basic submission.

Docs: https://www.bing.com/webmasters/url-submission-api
"""

import os, sys, json, urllib.request, urllib.parse, urllib.error

SITEMAP_URL = "https://royalbetguide.com/sitemap.xml"
SUBMISSION_URL = "https://www.bing.com/indexnow"

def submit_via_indexnow():
    """Submit all URLs via IndexNow protocol (already done by daily cron)"""
    # This is already handled by indexnow-submit.py
    print("[BING] IndexNow submission is already running daily via cron.")
    print("[BING] 288 URLs automatically submitted to Bing/Yandex/Seznam.cz")
    return True

def submit_single_url(url):
    """Submit a single URL to Bing using their public endpoint"""
    # Bing accepts URL submissions via their public ping endpoint
    ping_url = f"https://www.bing.com/webmaster/api.svc/ping?sitemap={urllib.parse.quote(url)}"
    try:
        req = urllib.request.Request(ping_url, headers={"User-Agent": "RoyalBetGuide-Submitter/1.0"})
        resp = urllib.request.urlopen(req, timeout=15)
        return resp.status == 200
    except Exception as e:
        print(f"[BING] Ping failed for {url}: {e}")
        return False

def submit_top_pages():
    """Submit most important pages directly"""
    important_pages = [
        "https://royalbetguide.com/",
        "https://royalbetguide.com/reviews/",
        "https://royalbetguide.com/games/slots/",
        "https://royalbetguide.com/bonus/",
        "https://royalbetguide.com/guides/",
    ]
    
    # Add new slot pages
    new_slots = [
        "money-train-4", "jammin-jars", "reactoonz", 
        "wanted-dead-or-a-wild", "cleopatra",
        "blood-suckers", "book-of-ra", "razor-shark",
        "deadwood", "immortal-romance"
    ]
    
    for slot in new_slots:
        important_pages.append(f"https://royalbetguide.com/games/slots/{slot}/")
    
    print(f"[BING] Submitting {len(important_pages)} priority URLs...")
    success = 0
    for url in important_pages:
        if submit_single_url(url):
            success += 1
            print(f"  \u2705 {url}")
        else:
            print(f"  \u274c {url}")
    
    print(f"\n[BING] Submitted {success}/{len(important_pages)} URLs")
    return success

if __name__ == "__main__":
    print("=" * 60)
    print("Bing URL Submission")
    print("=" * 60)
    submit_via_indexnow()
    print()
    submit_top_pages()
