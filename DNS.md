# DNS, domains and certificates (2026-10-18)

From the conversations of 2026-10-17 and 2026-10-18. Status tags: **FIXED** (the user's
word) · **AGREED** (user said yes to Claude's proposal) · **PROPOSED** (Claude's
recommendation, not yet confirmed) · **LEANING** · **LATER** (set up later, not at
launch) · **OPEN**.

Context: hosting is FIXED as one Caddy EC2 in Mumbai with an Elastic IP serving every
site's HTML, plus one CloudFront distribution on `media.selfsite.in` for assets and
images (see SCRATCHPAD.md, "Hosting").

---

## 1. Our domains

| Domain | Use | DNS |
|---|---|---|
| `selfsite.in` | The product: marketing site, CMS, tenant subdomains, media CDN | **Route 53** (needed for the wildcard certificate's DNS challenge) |
| `maverickcreatives.in` | The agency site | **OPEN:** Route 53 (in Terraform) or the registrar's free DNS. It needs no wildcard, so either works |

- **FIXED (user takes care of it):** protect `selfsite.in` itself. If it expires or its
  registrar account is taken over, every tenant subdomain and the CMS go down at once.
  Multi-year registration, auto-renew, registrar lock, 2FA; nameservers → Route 53.
- Terraform: Route 53 zones and the Elastic IP have `prevent_destroy`.
- Cost: ~$0.50/zone/month + query fees.

## 2. Records in the `selfsite.in` zone

| Name | Type → target | Purpose | Status |
|---|---|---|---|
| `selfsite.in` (apex) | A → Elastic IP | Marketing site, served by Caddy like any other site | PROPOSED |
| `www` | A → Elastic IP | Redirects to the apex | PROPOSED |
| `app` | A → Elastic IP | CMS static files + `/api/*` → Java | FIXED (hosting) |
| `media` | Alias → CloudFront | Hashed CSS/JS/fonts + images (ACM certificate in us-east-1) | FIXED (hosting) |
| `sites` | A → Elastic IP | What customers' `www` CNAMEs point to | FIXED (hosting) |
| `*` | A → Elastic IP | Every `name.selfsite.in` tenant | **FIXED (user)** |
| `_acme-challenge` | TXT (written by Caddy) | Renews the `*.selfsite.in` wildcard certificate | FIXED (hosting) |
| CAA | `0 issue "letsencrypt.org"`, `0 issue "amazon.com"`, `0 issuewild "letsencrypt.org"` | Only Let's Encrypt (Caddy) and Amazon (ACM, for `media`) may issue certificates for our names | **AGREED (user will add)** |
| Email | MX, SPF, DKIM, DMARC | See §6 | LATER |

- **TTL: PROPOSED** 1 hour on our records (the Elastic IP never changes).
- No AAAA records: the Elastic IP is IPv4 only.
- Requests to the bare IP or to an unknown hostname get a plain 404 from Caddy.
- **DNSSEC:** skip at launch.

## 3. Tenant subdomains (`name.selfsite.in`)

- **FIXED (user):** tenant subdomains live on `selfsite.in`. No second domain (cost).
- **FIXED (user):** one wildcard record `*.selfsite.in A → Elastic IP`; no per-tenant DNS
  records.
  - A new tenant is live as soon as its row exists in MySQL; no DNS call, no propagation
    wait. Tenants stay app data in MySQL, not DNS or Terraform resources.
  - Names with their own records (`app`, `media`, `sites`, email records) always win over
    the wildcard.
  - Unknown or unclaimed names reach Caddy → 404. The wildcard certificate covers them.
  - Suspending or deleting a tenant happens in Caddy and the allowed list, not in DNS.
  - Covers one level only (`a.selfsite.in`, not `a.b.selfsite.in`). Not needed.
  - The only Route 53 write access is Caddy's, scoped to the `_acme-challenge` record.
    Java never writes DNS.
- **LATER (user): reserved names.** Principle agreed: reserve every infrastructure or
  important name for us; enforced by Java at signup (DNS can't, because of the wildcard).
  Claude's draft, for when this comes up:
  - Infrastructure: www, app, api, admin, media, sites, cdn, static, assets, img, files,
    uploads.
  - Email / DNS: mail, smtp, imap, pop, mx, webmail, email, ns, ns1, ns2, dns,
    autodiscover, autoconfig.
  - Product pages: help, support, docs, blog, status, about, pricing, contact, legal,
    terms, privacy, careers, billing, pay, account, login, signup, register, auth, sso,
    dashboard.
  - Environments: dev, test, staging, beta, demo, preview, sandbox, internal, localhost.
  - Our brands: selfsite, maverick, maverickcreatives.
  - Look-alikes of trusted names (phishing), blocked when contained, not only exact:
    google, gmail, paytm, phonepe, gpay, upi, sbi, hdfc, icici, axis, amazon, flipkart,
    whatsapp, facebook, instagram, gov, govt, police, rbi.
  - Format: 3–40 characters, a–z 0–9 and hyphens, no leading/trailing hyphen, no `--`
    (blocks `xn--`), not digits only.
  - Ideas: keep the list in a table (no deploy to add a name); hold a released name ~90
    days before reuse.
- **LATER (user), with the Free tier, not at launch:** scrutinising user uploads. Launch
  has only the free trial, and the agency builds every site. Claude's notes for then:
  CSP header on Free hosts (`connect-src 'self'`, `form-action 'self'`, images from self
  + our CDN; allow Maps/YouTube frames); file-type and size limits, ClamAV, flag deploys
  with password fields or bank/brand names, Google Web Risk on outbound links; "Report
  abuse" link in the badge; one-click tenant suspend; consider the Public Suffix List
  (free, slow to reach browsers, hard to undo, changes how the apex is treated).
- **At launch regardless (login hygiene, not Free-tier work):** the CMS session cookie
  uses the `__Host-` prefix (Secure, Path=/, no Domain) so no subdomain can set or
  overwrite it; CSRF tokens on the API.

## 4. Customers' own domains

### What the customer changes — FIXED (user)

- **Their DNS stays where it is** (GoDaddy, Hostinger, …). They change only:
  - `@` A → our Elastic IP
  - `www` CNAME → `sites.selfsite.in`
- **MX and every other record stay untouched.**
- Custom domains are part of every paid plan.

### New customers — FIXED (user)

- "We buy the domain" = we **help the customer buy it in their own name** at GoDaddy,
  Hostinger etc. DNS stays at that registrar; only the two records change.
- PROPOSED: get delegated access through the registrar's access-sharing feature (GoDaddy
  "Delegate Access", Hostinger's equivalent) instead of the customer's password.
- PROPOSED: auto-renew on, plus our own reminder ~30 days before expiry (Java can look
  the expiry date up). An expired domain is the most common way small sites die.

### Checks Java runs before and after the switch — PROPOSED

Before the customer changes anything (shown in the CMS "Connect domain" screen):
- **MX trap (email):** on Indian shared hosting (cPanel) the MX often points at the
  domain itself (`MX 10 business.com`). Changing the `@` A record would then move their
  email to our box and break it. If MX points at the bare domain, or at a name with the
  same old IP as the website: stop; their host first gives them a `mail.` record and MX
  is pointed at it. MX at Google / Zoho / Microsoft / a separate `mail.` name → safe.
- **CAA:** none, or one that lists `letsencrypt.org` → fine. A CAA without it → ask
  them to add `0 issue "letsencrypt.org"`. Fresh GoDaddy/Hostinger domains usually have
  none; it shows up when someone once bought an SSL certificate.

After they change the records (verification):
- **Every** A record on `@` equals our IP. Registrars ship a parking A record; customers
  must edit it, not add a second one (two A records = half the visitors see the parking
  page).
- **No AAAA records** (IPv6 parking records or an old host's). Otherwise Let's Encrypt
  validation and IPv6 visitors go to the old server.
- **Registrar domain forwarding off** (GoDaddy's overrides the A record).
- `www` resolves to `sites.selfsite.in`. If `www` had an A record, it has to be deleted
  first (a CNAME can't coexist with other records on the same name).
- Only then does the domain go into the allowed-domain list that Caddy's "ask" check
  reads (S3 marker → box sync). DNS pointing at us is proof enough of control; a TXT
  check is only needed if two tenants ever claim the same domain.
- Tell the customer the old site may show for up to the old TTL (often an hour).
- **Recheck job:** periodically re-resolve connected domains. One that no longer points
  at us (churn, misconfiguration) is dropped from the allowed list so Caddy stops
  renewing its certificate.
- Edge case for the help page: Cloudflare-proxied domains work in "Full" SSL mode;
  "Flexible" causes redirect loops.
- Support load: short registrar guides with screenshots for GoDaddy, BigRock, Hostinger.

### Canonical host and redirects — PROPOSED (Claude), awaiting the user

Every site answers on exactly one address; everything else 301-redirects to it (one
copy for Google, links never break).
- **Customer sites: `www` is canonical by default**, `@` → 301 → `www`. Why `www`:
  it's a CNAME to `sites.selfsite.in`, a name we control, so the address Google indexes
  and customers share follows us if the IP ever has to change. Per-site override in the
  CMS (apex canonical) if a customer insists.
- **`name.selfsite.in` → 301 → the custom domain** once the custom domain is verified
  **and** its certificate has been issued (never earlier, or the site breaks mid-switch).
  Trials and sites without a custom domain stay on the subdomain. If the custom domain is
  disconnected, the subdomain serves the site again.
- **Our own site: `selfsite.in` (apex) is canonical**, `www.selfsite.in` → apex. It's our
  zone, and the apex is the brand.

## 5. Certificates (summary; full detail in SCRATCHPAD.md, "How certificates work here")

- `*.selfsite.in` + apex: one wildcard certificate via the Route 53 DNS-01 challenge.
- Customer domains: Caddy on-demand TLS, issued on the first HTTPS visit, after the local
  "ask" check confirms the domain is a known tenant.
- `media.selfsite.in`: ACM certificate in us-east-1 on CloudFront.
- Caddy's whole data directory (certificates + ACME account key) is synced to a private,
  encrypted, versioned S3 prefix and pulled before Caddy starts on a new box.

## 6. Email for `selfsite.in`

- **FIXED (user):** mailing is required (e.g. support@).
- **DONE (user, 2026-10-19): Zoho Mail is set up** for people's mailboxes.
- **SES** sends app mail (OTP, reminders, receipts). **Needed at launch** now that email
  OTP is fixed (see AUTH.md): production access, DKIM, SPF, MAIL FROM.
- Records when it's set up (copy exact values from the Zoho admin console; India
  accounts use the `zoho.in` hosts):
  - MX: `mx.zoho.in`, `mx2.zoho.in`, `mx3.zoho.in`
  - Zoho domain-verification TXT, Zoho DKIM TXT
  - SPF: **one** SPF record per name. Root: `v=spf1 include:zoho.in ~all`
  - DMARC: one `_dmarc` record; start with `p=none` + reports, tighten to
    `quarantine`/`reject` later; `sp=` covers subdomains.
- PROPOSED: send SES app mail from a subdomain (e.g. `notify.selfsite.in`) with its own
  SPF, SES DKIM CNAMEs and SES custom MAIL FROM. Keeps the root SPF simple and keeps
  bulk app-mail reputation apart from people's Zoho mail.
- PROPOSED: a wildcard null MX (`* MX 0 .`) so mail to `anything@tenant.selfsite.in`
  is refused cleanly. Without it, the `*` A record makes mail servers try our box (port
  25 is closed, so it only fails slowly).

## 7. Caddy build (needed for the wildcard certificate)

- Caddy needs two modules not in the standard download: `caddy-dns/route53` (wildcard
  certificate) and `caddy-ratelimit` (rate limits).
- **User asked: containerise it? PROPOSED (Claude):** build in a container, run as a
  binary — exactly RepoHIVE's pattern (`deploy/box/Dockerfile.release`: a pinned
  `xcaddy` build stage for linux/arm64, the binary shipped in the release bundle, run by
  systemd). For selfsite, add `--with github.com/caddy-dns/route53` to that stage.
  - Running Caddy itself as a container on the box also works (host networking for real
    client IPs, the data dir mounted as a volume for the S3 sync, arm64 image in ECR),
    but adds a Docker daemon on the shared t4g.small and buys nothing over the pinned
    binary.

## 8. Accepted limitations

- **The Elastic IP is tied to Mumbai (FIXED, accepted).** Customers' apex A records point
  straight at it, so moving region or account means every customer edits DNS again.
  `prevent_destroy` covers accidents. `www` → `sites.selfsite.in` keeps half of each
  setup under our control (one reason for `www` as canonical, §4).

## 9. Open list

1. Canonical host and redirect rules (§4) — Claude's proposal awaits the user.
2. `maverickcreatives.in` DNS: Route 53 or the registrar's free DNS (§1).
3. Caddy: binary from a container build (proposed) vs running as a container (§7).
4. Reserved names — LATER (§3).
5. SES records for app mail — needed at launch (§6). Zoho is done.
6. Free-tier upload scrutiny — LATER, with the Free tier (§3).
7. **Parked brainstorm:** who holds customers' DNS, fixed IP vs our Cloudflare (§10).

## 10. Parked brainstorm: who holds customers' DNS (2026-10-19)

**Nothing here is decided.** The user parked it ("we'll get back to it later"). §4 stays
as FIXED until then.

**The worry:** with customers' `@` A records pointing at one IP, losing that IP means
contacting every customer at scale.

### The options looked at

| # | Option | Our cost / month | Customer does | We move servers | Status |
|---|---|---|---|---|---|
| 1 | **EC2 proxy + Elastic IP**, forwarding to OCI (OCI.md §7) | ~$8.50 + page traffic above 100 GB at ~$0.11/GB | 2 records (§4) | Repoint the proxy | Claude's recommendation |
| 2 | Lightsail server + static IP as the proxy | $5 (IP + 500 GB in Mumbai included) | 2 records | Same | Leaning no: no auto scaling; SSM costs extra (advanced-instances tier); IP can't move to EC2 |
| 3 | Customers point straight at OCI's reserved IP | $0 | 2 records | **Every customer edits DNS** | No: the risk we're avoiding |
| 4 | **Customers move nameservers to our Cloudflare** (DNS only) | $0 (no zone limit on free; 200 records/zone) | Change nameservers; we copy their whole zone first | We edit records via API, minutes | **User leaning**, not fixed |
| 5 | Cloudflare for SaaS for `www` + GoDaddy forwarding for `@` | Free for 100 hostnames, then $0.10 each | 2 changes | — | No: GoDaddy forwarding has no HTTPS |
| 6 | Cloudflare apex proxying (fixed Cloudflare IPs) | Enterprise add-on | 2 records | — | No: Enterprise only |
| — | Route 53 hosting customer zones | $0.50/zone (first 25), then $0.10 | Nameservers | — | Costs more than the proxy past ~20 customers |

### What the user likes about option 4

- No IP to keep for life; servers rotate behind the scenes.
- OCI directly with no AWS proxy, or AWS later (e.g. startup credits): either is a
  record change on our side.

### What option 4 costs (Claude's notes)

- **Reverses §4 (FIXED):** we hold the customer's whole zone, email records included.
- **Account risk moves, and grows:** whoever controls our Cloudflare account controls every
  customer's website **and email** (MX → password resets, OTPs). With a fixed IP, a lost
  AWS account takes websites down but email keeps working. Guards if chosen: hardware-key
  2FA + a spare, few members, a DNS-edit-only API token for Java, regular export of every
  zone to S3.
- **Onboarding an existing domain:** export the zone (BIND file) from the old DNS host →
  import into Cloudflare → check every record (the automatic scan misses DKIM keys and
  uncommon names) → turn off DNSSEC at the registrar → change nameservers (hours, up to
  a day or two). Another agency managing the domain loses DNS control and may push back.
  **New domains we buy: almost no friction** (empty zone, set nameservers at purchase).
- Without the proxy the OCI VM is public: 80/443 open to all, floods hit OCI. Cloudflare's
  free proxy per record is a later option (changes how certificates work; not checked).
- **Open: customers who won't move nameservers.** (a) require it for custom domains;
  (b) ALIAS fallback where their DNS supports it — Claude's pick; (c) A record to OCI's
  IP (brings the risk back for them).

### Facts gathered along the way

- **A CNAME can't sit on the bare domain** (DNS rules: it can't coexist with the NS, SOA,
  MX and TXT records there). Some providers offer **ALIAS** instead:
  - **GoDaddy:** no CNAME, no ALIAS at `@`. A record only.
  - **Hostinger:** a CNAME on `@` is saved as an ALIAS (one per domain).
  - **Cloudflare:** CNAME flattening.
  - Not checked: BigRock and other Indian registrars.
- **Ways to shrink what depends on a fixed IP, whichever option wins:** `www` as canonical
  (§4, so losing the IP breaks only the bare-domain redirect); ALIAS `@ → sites.selfsite.in`
  where supported; Cloudflare nameservers for new domains we buy.
- **Guards for an Elastic IP:** IAM deny on `ec2:ReleaseAddress` + Terraform
  `prevent_destroy`; a released EIP can be recovered with `allocate-address --address`
  unless another AWS account has taken it. What remains is losing the AWS account itself
  (unpaid bill, takeover).
- Shopify and Squarespace use the two-record setup (A to a fixed IP + `www` CNAME); Wix
  offers both that and nameservers.

Sources: [Route 53 pricing](https://aws.amazon.com/route53/pricing/) ·
[Cloudflare for SaaS plans](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/plans/) ·
[Cloudflare apex proxying](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/start/advanced-settings/apex-proxying/) ·
[Cloudflare DNS quick scan](https://developers.cloudflare.com/dns/zone-setups/reference/dns-quick-scan/index.md) ·
[Lightsail pricing](https://aws.amazon.com/lightsail/pricing) ·
[EC2 vs Lightsail](https://repost.aws/knowledge-center/lightsail-differences-from-ec2) ·
[Lightsail + Systems Manager](https://repost.aws/knowledge-center/add-lightsail-to-systems-manager) ·
[Lightsail IP can't move to EC2](https://repost.aws/questions/QUi-nBT0AqR3qcCnrDhSWfQQ/lightsail-to-ec2-migration) ·
[GoDaddy forwarding and HTTPS](https://redirect.pizza/redirect-godaddy-domain) ·
[GoDaddy apex limitation](https://getintokube.substack.com/p/how-to-point-your-godaddy-apex-root) ·
[Hostinger ALIAS](https://www.hostinger.com/support/?p=468) ·
[Recover a released EIP](https://repost.aws/knowledge-center/ec2-recover-ip-address) ·
[Protect EIPs from release](https://aws.amazon.com/blogs/mt/securing-elastic-ip-addresses-from-accidental-release)
