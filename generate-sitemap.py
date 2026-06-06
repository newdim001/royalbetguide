#!/usr/bin/env python3
"""Generate sitemap.xml for royalbetguide.com with all routes."""
import os
import re
import glob
from datetime import datetime, timezone

BASE = "https://royalbetguide.com"
APP_DIR = "/Users/suren/royalbetguide/app"
PUBLIC_DIR = "/Users/suren/royalbetguide/public"

# Priority mapping
PRIORITIES = {
    "/": "1.0",
    "/reviews/": "0.9",
    "/bonus/": "0.9",
    "/blog/": "0.8",
    "/guides/": "0.8",
    "/games/": "0.8",
    "/free-slots/": "0.8",
    "/tournaments/": "0.8",
    "/sports/": "0.7",
    "/sweepstakes-casinos/": "0.7",
    "/region/": "0.7",
    "/us/": "0.7",
    "/news/": "0.6",
    "/compare/": "0.6",
    "/about/": "0.5",
    "/contact/": "0.5",
}

def get_priority(path):
    """Determine priority based on URL path."""
    if path == "/":
        return "1.0"
    for prefix, p in sorted(PRIORITIES.items(), key=lambda x: -len(x[0])):
        if path.startswith(prefix):
            return p
    return "0.6"

def extract_review_slugs():
    """Extract review slugs from the dynamic route data file."""
    slugs = set()
    review_file = os.path.join(APP_DIR, "reviews/[slug]/page.tsx")
    if os.path.exists(review_file):
        with open(review_file, "r", encoding="utf-8") as f:
            content = f.read()
        # Match "slug-name": {
        matches = re.findall(r'"([a-z0-9-]+-casino|[a-z0-9-]+)":\s*\{', content)
        for m in matches:
            if m not in ("context", "type", "name", "operatingSystem", "applicationCategory",
                        "description", "offers", "author", "aggregateRating", "rating",
                        "bonus", "payout", "games", "established", "license", "pros",
                        "cons", "payments", "providers", "affiliateUrl", "gameHighlight",
                        "bankingHighlight"):
                slugs.add(m)
    return slugs

def discover_pages():
    """Discover all pages from the app directory."""
    urls = set()
    
    # Static root pages
    static_roots = [
        "/", "/about/", "/best-crypto-casinos/", "/best-live-dealer/",
        "/best-mobile-casinos/", "/best-sportsbooks/", "/best-welcome-bonuses/",
        "/blog/", "/bonus/", "/compare/", "/contact/", "/free-slots/",
        "/games/", "/guides/", "/news/", "/reviews/", "/sports/",
        "/sweepstakes-casinos/", "/us/", "/tournaments/",
        "/games/free-blackjack/", "/games/free-roulette/",
    ]
    for r in static_roots:
        urls.add(r)
    
    # Blog posts
    for f in glob.glob(os.path.join(APP_DIR, "blog/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/blog/{slug}/")
    
    # News posts
    for f in glob.glob(os.path.join(APP_DIR, "news/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/news/{slug}/")
    
    # Reviews (from embedded data)
    for slug in extract_review_slugs():
        urls.add(f"/reviews/{slug}/")
    
    # Bonus pages
    for f in glob.glob(os.path.join(APP_DIR, "bonus/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        if slug != "[slug]":
            urls.add(f"/bonus/{slug}/")
    
    # Guides
    for f in glob.glob(os.path.join(APP_DIR, "guides/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/guides/{slug}/")
    
    # Games (not slots subdir)
    for f in glob.glob(os.path.join(APP_DIR, "games/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        if slug != "slots":
            urls.add(f"/games/{slug}/")
    
    # Slot pages
    for f in glob.glob(os.path.join(APP_DIR, "games/slots/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/games/slots/{slug}/")
    
    # Region pages
    for f in glob.glob(os.path.join(APP_DIR, "region/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/region/{slug}/")
    
    # Sports pages
    for f in glob.glob(os.path.join(APP_DIR, "sports/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/sports/{slug}/")
    
    # Sweepstakes casino pages
    for f in glob.glob(os.path.join(APP_DIR, "sweepstakes-casinos/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        if slug != "[slug]":
            urls.add(f"/sweepstakes-casinos/{slug}/")
    
    # Compare pages
    for f in glob.glob(os.path.join(APP_DIR, "compare/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/compare/{slug}/")
    
    # Tools pages
    for f in glob.glob(os.path.join(APP_DIR, "tools/*/page.tsx")):
        slug = os.path.basename(os.path.dirname(f))
        urls.add(f"/tools/{slug}/")
    
    # Multi-language pages (de, es, fr, it)
    for lang in ["de", "es", "fr", "it"]:
        lang_dir = os.path.join(APP_DIR, lang)
        if os.path.isdir(lang_dir):
            urls.add(f"/{lang}/")
            for root, dirs, files in os.walk(lang_dir):
                if "page.tsx" in files:
                    rel = os.path.relpath(root, APP_DIR)
                    url_path = "/" + rel.replace("/page.tsx", "").replace("/page", "") + "/"
                    urls.add(url_path)
    
    # Nested guide pages (e.g. guides/blackjack/strategy/)
    for root, dirs, files in os.walk(os.path.join(APP_DIR, "guides")):
        if "page.tsx" in files:
            rel = os.path.relpath(root, APP_DIR)
            url_path = "/" + rel.replace("/page.tsx", "") + "/"
            urls.add(url_path)
    
    return sorted(urls)

def build_sitemap():
    urls = discover_pages()
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    
    for path in urls:
        priority = get_priority(path)
        lines.append(f"  <url>")
        lines.append(f"    <loc>{BASE}{path}</loc>")
        lines.append(f"    <lastmod>{today}</lastmod>")
        lines.append(f"    <changefreq>weekly</changefreq>")
        lines.append(f"    <priority>{priority}</priority>")
        lines.append(f"  </url>")
    
    lines.append("</urlset>")
    return "\n".join(lines), len(urls)

if __name__ == "__main__":
    sitemap, count = build_sitemap()
    out_path = os.path.join(PUBLIC_DIR, "sitemap.xml")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print(f"Generated sitemap with {count} URLs → {out_path}")
