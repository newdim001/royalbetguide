
import sys
path = '/Users/suren/royalbetguide/app/reviews/page_working.tsx'
with open(path) as f:
    content = f.read()
print('Read OK, len:', len(content))
# Quick check
for slug in ['leovegas','betway','22bet','hell-spin','play-ojo','katsubet','mirax-casino']:
    if slug not in content:
        print(f'MISSING: {slug}')
        sys.exit(1)
print('All slugs present')
