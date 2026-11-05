#!/usr/bin/env python3
"""check.py N: structural check of ~/runs/selfsite-wire/reports/nightrunN.html"""
import os, re, sys
n = sys.argv[1]
p = os.path.expanduser(f"~/runs/selfsite-wire/reports/nightrun{n}.html")
errs = []
if not os.path.isfile(p):
    sys.exit(f"missing {p}")
t = open(p, encoding="utf-8").read()
low = t.lower()
size = len(t.encode())
if not 15_000 <= size <= 1_500_000:
    errs.append(f"size {size} outside 15 KB..1.5 MB")
if not re.search(rf"<title>\s*nightrun{n}\s*</title>", t):
    errs.append(f"<title> is not exactly nightrun{n}")
for bad in ("sitefoundry", "site-foundry", "storefront", "lorem ipsum", "₹"):
    if bad in low:
        errs.append(f"contains forbidden text: {bad}")
if "selfsite" not in low:
    errs.append("brand 'selfsite' not present")
if len(re.findall(r'data-frame="phone"', t)) < 6:
    errs.append('fewer than 6 elements with data-frame="phone"')
if not re.search(r'data-frame="(tablet|desktop)"', t):
    errs.append("no data-frame tablet/desktop adaptation")
for m in re.finditer(r"<(?:script|link|img)[^>]+(?:src|href)=[\"'](https?:)?//([^/\"']+)", t, re.I):
    host = m.group(2)
    if host not in ("fonts.googleapis.com", "fonts.gstatic.com"):
        errs.append(f"external resource: {host}")
if re.search(r"\$\s?\d|rs\.?\s?\d|inr\s?\d", low):
    errs.append("looks like a price")
if errs:
    sys.exit("\n".join(errs))
print("OK", p, size)
