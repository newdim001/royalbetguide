#!/usr/bin/env python3
"""Daily IndexNow submission for royalbetguide.com"""
import urllib.request, json, xml.etree.ElementTree as ET, sys

SITEMAP_URL = "https://royalbetguide.com/sitemap.xml"
INDEXNOW_KEY = "88d2894a9dddfca4afe78528fd5c07e1"
KEY_LOCATION = f"https://royalbetguide.com/{INDEXNOW_KEY}.txt"
HOST = "royalbetguide.com"

def fetch_sitemap_urls():
    req = urllib.request.Request(SITEMAP_URL, headers={"User-Agent": "Mozilla/5.0"})
    resp = urllib.request.urlopen(req, timeout=15)
    tree = ET.fromstring(resp.read())
    ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text for loc in tree.findall(".//ns:loc", ns)]
    return urls

def submit_indexnow(urls):
    # Batch limit is 10,000 per request - we have ~52
    payload = json.dumps({
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }).encode("utf-8")
    
    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        status = resp.status
        body = resp.read().decode()
        return status, body
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:200]

urls = fetch_sitemap_urls()
print(f"Fetched {len(urls)} URLs from sitemap")

status, body = submit_indexnow(urls)
if status in (200, 202):
    print(f"IndexNow: HTTP 200 - {len(urls)} URLs submitted successfully")
    sys.exit(0)
else:
    print(f"IndexNow: HTTP {status} - {body}")
    sys.exit(1)
