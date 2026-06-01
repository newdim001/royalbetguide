#!/usr/bin/env python3
import os
path = "/Users/suren/royalbetguide/app/de/reviews/katsubet/page.tsx"
os.makedirs(os.path.dirname(path), exist_ok=True)
with open(path, "w", encoding="utf-8") as f:
    f.write("test content")
print(f"Written to {path}")
