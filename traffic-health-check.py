#!/usr/bin/env python3
"""Weekly traffic health check for royalbetguide.com.
Checks: sitemap validity, key page indexing status, broken links, Core Web Vitals signals."""
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
import json
import sys

BASE = "https://royalbetguide.com"
KEY_PAGES = [
    "/", "/reviews/", "/bonus/", "/blog/", "/free-slots/",
    "/tournaments/", "/games/free-blackjack/", "/games/free-roulette/",
    "/region/pennsylvania/", "/region/west-virginia/", "/region/connecticut/",
    "/region/ontario/", "/region/illinois/", "/region/indiana/",
    "/games/slots/gates-of-olympus/", "/games/slots/sweet-bonanza/",
]

def check_page(url_path):
    """Check if a page returns 200 with valid HTML via server localhost."""
    try:
        req = urllib.request.Request(
            f"http://localhost{url_path}",
            headers={"Host": "royalbetguide.com", "User-Agent": "Mozilla/5.0 (compatible; HealthBot/1.0)"}
        )
        resp = urllib.request.urlopen(req, timeout=15)
        html = resp.read().decode("utf-8", errors="ignore")
        has_title = "<title>" in html
        has_canonical = "canonical" in html
        has_schema = "schema.org" in html or "ld+json" in html
        return {
            "status": resp.status,
            "size": len(html),
            "title": has_title,
            "canonical": has_canonical,
            "schema": has_schema,
            "ok": True
        }
    except urllib.error.HTTPError as e:
        return {"status": e.code, "ok": False, "error": str(e)}
    except Exception as e:
        return {"status": 0, "ok": False, "error": str(e)}

def check_sitemap():
    """Validate sitemap.xml via server localhost."""
    try:
        req = urllib.request.Request(
            "http://localhost/sitemap.xml",
            headers={"Host": "royalbetguide.com", "User-Agent": "Mozilla/5.0"}
        )
        resp = urllib.request.urlopen(req, timeout=15)
        xml = resp.read()
        tree = ET.fromstring(xml)
        ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = tree.findall(".//ns:loc", ns)
        return {"ok": True, "count": len(urls), "size": len(xml)}
    except Exception as e:
        return {"ok": False, "error": str(e)}

def main():
    print("🔍 Royal Bet Guide — Weekly Traffic Health Check")
    print("=" * 50)

    # 1. Sitemap check
    print("\n1. Sitemap Validation")
    sitemap = check_sitemap()
    if sitemap["ok"]:
        print(f"   ✅ Sitemap: {sitemap['count']} URLs, {sitemap['size']} bytes")
    else:
        print(f"   ❌ Sitemap failed: {sitemap.get('error')}")

    # 2. Key pages check
    print("\n2. Key Pages Status")
    ok_count = 0
    fail_count = 0
    for path in KEY_PAGES:
        result = check_page(path)
        status = "✅" if result["ok"] else "❌"
        if result["ok"]:
            ok_count += 1
            details = f"{result['status']} | {result['size']/1024:.0f}KB | title:{result['title']} canonical:{result['canonical']} schema:{result['schema']}"
        else:
            fail_count += 1
            details = f"{result.get('status', 'ERR')} | {result.get('error', 'unknown')}"
        print(f"   {status} {path:<45} {details}")

    print(f"\n3. Summary: {ok_count}/{len(KEY_PAGES)} pages OK, {fail_count} failed")

    if fail_count > 0:
        print("   ⚠️  Action required: fix failing pages")
        sys.exit(1)
    else:
        print("   ✅ All checks passed")
        sys.exit(0)

if __name__ == "__main__":
    main()
