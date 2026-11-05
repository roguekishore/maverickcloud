# BRAINSTORM — the user's own concept (2026-10-17)

> **Fixed decisions live in [`DECISIONS.md`](DECISIONS.md).** This scratchpad keeps the
> brainstorm, leanings, proposals and open questions. Frontend and content-model details:
> [`FRONTEND-CONTENT-MODEL.md`](FRONTEND-CONTENT-MODEL.md). DNS, domains and email DNS:
> [`DNS.md`](DNS.md). Storage and media (uploads, processing, delivery):
> [`MEDIA.md`](MEDIA.md). Moving compute + MySQL to Oracle Cloud (under review):
> [`OCI.md`](OCI.md).

This section is the user's word. **It supersedes everything below the double line**,
which was written by another agent and was never agreed to.

## What it is

- **MaverickCloud** is the umbrella for two products: Maverick Creatives and selfsite.
- **Maverick Creatives** is the user's specialisation: a freelance web design agency.
  Sites are **handcrafted**.
  - The edge is the bundled CMS, a "dynamic website, in a way". The city market is
    ~₹10k for a simple static site and ₹20–35k for dynamic content.
  - **Bundle: ₹5,000 one-time, covering the website and the CMS together.**
  - **The first 10 customers get selfsite free for life.**
- **selfsite.in** is the CMS and **the main priority to build**. The app must be designed
  so later tiers can be added without rework.

## Core CMS (the deal winner)

Preview the site · edit the content · AI-assisted editing · manage photos and assets
(~500 MB per customer) · update links · timings · contact info.

## Tiers (brainstorm, not final)

| Tier | Idea | Priority |
|---|---|---|
| **Free** | Like a Netlify/Vercel free tier. The user uploads their own site and gets `name.selfsite.in` with a selfsite badge. No AI, no CMS, no blocks. ~3 deploys a month. It's a link to share with their customers | **Later.** Launch uses a free trial instead |
| **Standard** | Basic templates + the CMS + AI. A huge jump from a scrawny basic site to a customisable premium one | Must have |
| **Plus** | SITE-FOUNDRY blocks as customisable blocks + self-setup: paste a Google Maps link, brochure and images, AI picks a template and fills in the details, live at `name.selfsite.in` without buying from the agency | Nice to have |
| **Premium** | AI copilot. A pure-generation copilot only when targeting a global market | Nice to have |

- Reasoning: if Free has any customisation, editing, AI or SITE-FOUNDRY blocks, users
  will never convert. For SMBs that would already be more than enough.

## Pricing thoughts (open; the user decides)

- Leaning towards a **flat fee**. Even ₹100/month is ₹1,200 a year, more than people pay
  for their domain each year. This is the confusing part.
- **To do:** compare with website builders in India and globally and position
  selfsite. selfsite will be the cheapest. Their customers are established businesses;
  selfsite focuses on SMBs.
- Pricing by channel:
  - **Found selfsite on their own:** monthly Standard.
  - **Agency pitch:** included in the bundle. The first 10 get it free for life. After
    that, free for ~3 years or a flat fee, depending on the business's potential.
  - **Basic businesses that don't need an online presence to get clients:** a flat
    **~₹1,000 for life**: selfsite for life, a basic template (agency customers get
    handcrafted ones), hosted at `name.selfsite.in`, no design effort. "We can pull in
    tens of customers with ease"; in the worst case one customer pays for ~9 others.
  - **When a client becomes high-profile:** move them to a monthly tier.
- Costs: ~500 MB of storage is about ₹1/month per customer (~₹12/year). Caching cuts
  GET requests. EC2 and RDS are managed by the user and left out of this maths.

## Out of scope / held

- **Out:** internal tools (Prospector, ingest, CRM) and dogfooding.
- **Held for later:** staging, demos and showcasing premade templates inside selfsite.
  Don't mix those into selfsite.
- **Stays:** Warden, for monitoring only (one outpost).
- **Not fixed:** the SITE-FOUNDRY and Puck formats. They were automated generations made
  to use up quota.

## Stack — FIXED by the user (2026-10-17)

| Part | Stack |
|---|---|
| Backend | **Java + MySQL** |
| Customer websites | **Astro** (static HTML generated at publish time; no server at runtime) |
| CMS frontend | **React + Vite, in TypeScript.** A client-side app (no server-side rendering, no Next.js); `vite build` outputs static files |
| Infrastructure | **Terraform** provisions the whole AWS architecture |

- Node runs only at build time, never in production. Java is the only server.
- **FIXED: website sections are React components**, used by both the CMS live preview
  and the Astro build.
- **Content model: LEANING; the exact format is DEFERRED** to when the CMS / backend
  design starts. Design lives in code; the content JSON holds only editable values; a
  `fields.json` per template says what's editable (the CMS draws inputs from it, Java
  validates against it). Launch = editing values only.
- **Full details, how it works, leanings and the deferred list:
  [`FRONTEND-CONTENT-MODEL.md`](FRONTEND-CONTENT-MODEL.md).**

## Updates from the user (2026-10-17, later)

- **Agency bundles** include limited AI usage (e.g. a number of rewrites per day).
- **₹1,000 sites: no AI, the CMS only.** AI can be bought as an add-on for ~₹200–500.
  Low-tier models (Flash-Lite class).
- **Custom domains** are part of the paid plans. They weren't mentioned earlier because
  they don't set any tier apart.
- **Free tier: no templates at all**, not even a single page. "99% won't convert if we
  offer even the slightest template"; most people are happy with one page, and a badge
  makes no difference. Free = upload your own site, as described above.

## AI cost estimate (Claude's maths, 2026-10-17)

Assumptions: one rewrite ≈ 2,000 input tokens (prompt + block schema + section text)
and ≈ 600 output tokens (generous; covers 2–3 alternatives). ₹95/USD.

| Model | $ / 1M in · out | ₹ per rewrite |
|---|---|---|
| Gemini 2.5 Flash-Lite | 0.10 · 0.40 | ~₹0.04 |
| Gemini 3.1 Flash-Lite | 0.25 · 1.50 | ~₹0.13 |
| Gemini 3.5 Flash-Lite | 0.30 · 2.50 | ~₹0.20 |

- Worst case at 10 rewrites/day, every day, on the most expensive Lite model: 300/month
  ≈ ₹60/month per customer. Realistic owner use (~20/month): ≈ ₹2–4/month.
- A daily cap alone still allows ~300/month; a monthly cap is what bounds the cost.
- Suggestion (open): sell the AI add-on as a **pack of rewrites**, not as time. Then it
  can't run at a loss however heavily it's used.

## Competitors (scouted 2026-10-17; third-party sources, verify before quoting)

| Builder | Cheapest paid plan with a custom domain | ≈ per year | Notes |
|---|---|---|---|
| Hostinger Website Builder (IN) | ₹149/mo | ~₹1,800 intro | Requires a 48-month prepay; renews at ~3× |
| GoDaddy Website Builder (IN) | ₹699/mo, billed yearly | ~₹8,400 | Restructured Aug 2026 around monthly AI credits; has a free tier |
| Dukaan (IN) | ₹4,499/yr | ₹4,499 | Online stores; plus a fee per order |
| Zoho Sites (IN) | unclear | — | Free single page; the Starter price could not be verified |
| Wix | $17/mo, billed yearly | ~₹19,000 (USD) | Indian regional pricing unverified (one source says from ₹399/mo) |
| Squarespace | $16/mo, billed yearly | ~₹18,000 | |
| Durable (AI builder) | $12/mo, billed yearly | ~₹13,700 | **Free plan = a full AI-generated site on a subdomain** |
| Cloudflare Pages / Netlify / Vercel | free | ₹0 | Static hosting: CF unlimited bandwidth + 500 builds/mo; Netlify ~20 deploys/mo; Vercel Hobby non-commercial |

- No one found sells a flat lifetime plan. ₹1,000 one-time is below one year of the
  cheapest Indian builder.

## Launch decisions (2026-10-17)

- **No Free tier at launch; a free trial instead.** (User agreed.) Free, as described
  in the tiers table, can come later. Notes:
  - Squarespace and Hostinger have no free plan either.
  - The SMB sites Prospector found on Vercel/Netlify are leads: Vercel Hobby is
    non-commercial only.
- **Domains:**
  - **New customers:** we buy and hold the domain ourselves.
  - **Existing customers:** they add records at their own registrar.
  - Custom domains are part of every paid plan.

## Hosting — FIXED by the user: Caddy EC2 serves the sites (2026-10-17)

- Considered and rejected by the user: a Lambda proxy, and CloudFront SaaS Manager serving
  the HTML from S3. Not worth the cost and complexity; EC2 is the least friction. Focus
  instead: tighten security, automatic recovery/backup, lowest cost (see Edge security).

```
Visitor → www.business.com / business.com
  DNS (A record) → Elastic IP → Caddy EC2 (Mumbai) → serves the HTML only (~15 KB)
  HTML references media.selfsite.in/<site-id>/... → CloudFront → S3
    (hashed CSS / JS / fonts + images; cached at the edge and in the browser)
S3 = source of truth for every built site (HTML + assets) and for uploads.
```

- **Pages: a dedicated Caddy EC2 with an Elastic IP.**
  - Caddy serves each site's HTML by Host (`{host}` → folder).
  - Caddy gets a Let's Encrypt certificate per customer domain automatically (on-demand
    TLS), so the customer adds no validation records.
  - It checks a Java **"ask" endpoint** first, so certificates are issued only for
    known tenant domains.
  - `*.selfsite.in` uses one wildcard certificate via the Route 53 DNS challenge
    (Let's Encrypt limits certificates per registered domain).
- **Everything else: one CloudFront distribution on one domain** (e.g.
  `media.selfsite.in`): hashed CSS/JS/fonts and images, served from S3.
  Media CDN, caching and storage detail: [`MEDIA.md`](MEDIA.md).
  - One certificate (ACM, **us-east-1**), nothing per customer.
  - Astro `build.assetsPrefix` points the HTML at it.
- **What the customer adds:** A `@` → our Elastic IP, and `www` → CNAME to a name we own
  (e.g. `sites.selfsite.in`) or A → the Elastic IP. That's all; nothing has to stay
  forever.
- **Caching:** hashed assets and images get new names on every change → cached for a
  year, **never invalidated**. HTML is served fresh by Caddy, so no invalidation is
  needed for it either.
- **Publish pipeline:** build (Lambda or the Java box) → upload assets to S3 **first** →
  then HTML to S3 and the EC2. If a build fails, the last good version stays live. Keep
  previous builds (including old hashed files) for rollback; prune later.
- **Gotchas:**
  - CloudFront must send `Access-Control-Allow-Origin` (fonts and `type="module"`
    scripts load cross-origin).
  - CDN paths use the site ID, not the domain.
  - `<link rel="preconnect">` to the CDN in every page.
- **Latency:** ~0.4–0.7 s to the first page drawn on 4G in Coimbatore. The CDN connection
  costs nothing extra because images need it anyway. Repeat visits fetch only the HTML.
- **Downtime is the main risk:** if the EC2 is down, the HTML doesn't load, so the
  whole site is down. Mitigations:
  - EC2 auto-recovery.
  - A replacement script: a fresh box pulls from S3 and takes over the Elastic IP, so
    customers change nothing.
  - Warden alerts.
  - A standby box later, if ever.

## Hosting cost model (Claude, 2026-10-17; excludes Java EC2, RDS, AI)

Assumptions: 1,000 page views/site/month. Per view: EC2 serves ~15 KB of HTML; the CDN
serves ~10 requests / ~500 KB (heavy first visits, light repeats). ~50 MB S3 per site.
Mumbai prices: t4g.micro $0.0056/h, public IPv4 $0.005/h; S3 $0.025/GB; EC2 egress 100 GB
free then ~$0.11/GB; CloudFront pay-as-you-go always-free 1 TB + 10M requests, then
$0.109/GB + $0.012 per 10k requests (India). CloudFront **flat-rate** plans (one
distribution, no overage charges; delivery may slow if you stay well over the allowance):
Free $0 (1M req / 100 GB), Pro $15 (10M req / 50 TB, 50 GB S3 credit), Business $200
(125M req / 50 TB, 1 TB S3 credit, WAF included). ₹95/$.

| Sites | Views/month | EC2 box | EC2 egress | CDN | S3 | ≈ Total/month | ≈ Per site |
|---|---|---|---|---|---|---|---|
| 100 | 100k | ~$9.5 (micro) | free | free | $0.13 | **~₹1,000** | ₹10 |
| 1,000 | 1M | ~$9.5–14 | free | free (at the limit) | $1.25 | **~₹1,150–1,500** | ₹1.3 |
| 3,000 | 3M | ~$14 (small) | free | ~$80 pay-as-you-go | $3.75 | **~₹9,300** | ₹3.1 |
| 5,000 | 5M | ~$14 | free | $200 Business (pay-as-you-go ≈ $215) | covered by credit | **~₹20,300** | ₹4.1 |
| 10,000 | 10M | ~$14 (+$14 standby box?) | ~$5.5 | $200 Business | covered by credit | **~₹21,000–22,500** | ₹2.1–2.3 |

- Pay-as-you-go is cheaper up to ~4,500 sites; the Business flat plan above that (caps CDN
  at $200 up to ~12M views/month).
- Worst-case storage (every site at the 500 MB cap): 1,000 sites ≈ ₹1,200/month;
  10,000 ≈ ₹9,700/month after the Business S3 credit.
- Builds: Lambda always-free (400,000 GB-s/month) ≈ 13,000 small Astro builds/month;
  beyond that ≈ ₹0.05 per build.
- For comparison: everything (incl. images) from EC2 at 1,000 sites ≈ $55/month egress;
  10,000 sites ≈ $650/month.

## Edge security — hardening plan for the Caddy EC2 (verdicts from the user, 2026-10-17)

Goal: the box holds nothing irreplaceable, rebuilds itself automatically, and floods cost
little. Nearly everything below is free. Reference setup the user follows: RepoHIVE
(`D:\PROJECTS\REPOHIVE\repohive-public\deploy\` — Caddyfile, systemd units, `box.tf`).

1. **FIXED (user): one box at launch, split later.** A **t4g.small** runs Caddy (sites +
   CMS files) and Java together, with the Elastic IP fixed on it. When customers grow,
   Java + CMS move to another box; this box keeps the Elastic IP and runs Caddy only
   (Caddy then forwards `/api/*` to the new box's private IP; customers change nothing).
   - While shared: systemd `MemoryMax` on Java (and its heap capped) and on Caddy, and a
     higher CPU priority for Caddy, so Java can't starve the sites (RepoHIVE does the
     memory part).
2. **AGREED:** security group 80/443 only; no SSH (SSM Session Manager); Shield Standard;
   S3 gateway VPC endpoint.
3. **Caddy:**
   - **AGREED:** customer-site hosts accept GET/HEAD only and refuse request bodies;
     short header/idle timeouts. (The app host `app.selfsite.in` allows POST etc. for
     `/api/*`, with a body-size cap like RepoHIVE's 64 KB; uploads go straight to S3.)
   - **AGREED:** per-IP rate limits via `caddy-ratelimit`, generous on pages (CGNAT).
   - **NOT NOW (user):** fail2ban. (If revisited: Amazon Linux 2023 has no EPEL, so it
     isn't in the default repos.)
   - **User's direction:** S3 is the durable store for both the allowed-domain list and
     Caddy's certificates; on boot or restart the box pulls them all to local disk
     before Caddy starts, and syncs new/renewed certificates back up. The "ask" check
     reads the local copy. **Redis: DROPPED (user)** — not needed (see "How certificates
     work here").
   - **AGREED:** Caddy runs as a non-root user (RepoHIVE's unit already does this).
   - **REJECTED (user):** the emergency runbook (block ranges / bigger instance).
4. **AGREED (instance):** Amazon Linux 2023 with automatic security updates; IMDSv2;
   encrypted EBS; least-privilege IAM role; **CPU credits "standard"** — when the
   credit bank (max 576 on a t4g.small) runs out, the CPU is held to its baseline (20% per
   vCPU), never billed. Add a CloudWatch alarm on a low `CPUCreditBalance`. Watch for:
   Astro builds on this box drain credits too.
5. **AGREED — automatic recovery ("backup of the machine"):**
   - RepoHIVE keeps certificates on a separate data volume instead; that can't follow an
     ASG across AZs (a volume is locked to one AZ), hence certificates in S3 here.
   - The box is disposable: site files live in S3 (source of truth); Caddy's
     **certificates are synced to S3** so a new box doesn't re-issue hundreds at once
     (Let's Encrypt rate limits); config lives in git/S3.
   - **Auto Scaling group of exactly 1** (free) across 2 AZs, with a launch template whose
     startup script installs Caddy, pulls sites + certs from S3 and re-attaches the
     Elastic IP. A dead or compromised box is replaced in minutes; customers change
     nothing.
   - The ASG itself is free and needs **no load balancer**. Without one it only detects
     machine-level failures, so: systemd restarts Caddy if it crashes, and a local health
     timer (or Warden) marks the instance unhealthy (`set-instance-health`) if Caddy stops
     answering. The startup script attaches the Elastic IP (needs `ec2:AssociateAddress`).
   - Config changes are pulled from S3 and Caddy is reloaded via SSM, without replacing
     the box. Replacing it (new launch template) = a few minutes' swap; do it off-hours.
   - Terraform: `prevent_destroy` on the Elastic IP (customers' DNS points at it), the
     sites bucket and the Route 53 zones. Tenants and domains are app data in MySQL, not
     Terraform resources (on-demand TLS needs no per-customer infrastructure).
   - Optional: daily EBS snapshots via Data Lifecycle Manager, keep 7 (pennies).
   - S3 versioning on the sites bucket, old versions expired after N days.
6. **FUTURE (user):** publishing to the box — Java writes to S3, then tells the box (SSM
   Run Command) to sync that site's folder; nightly full sync as a safety net.
7. **FUTURE (user):** cost guards — AWS Budgets alerts; CloudWatch alarms (status checks,
   NetworkOut); Warden uptime; media CDN on a CloudFront flat-rate plan (no overage, WAF
   included).
8. **AGREED, method not fixed:** app-side limits per identity (login attempts, OTP sends,
   AI rewrites, uploads, publishes, forms). **The user writes a custom implementation**;
   no library is fixed.
9. **Not DDoS — moved out of edge security:** image hotlinking is bandwidth/cost abuse on
   the media CDN. A Referer rule only if it ever happens.

- Accepted risk: a very large flood of real-looking requests from many IPs can still
  overwhelm one box (no emergency runbook, per the user).

### How certificates work here (explained 2026-10-17)

- A certificate is requested **once per domain**, stored on disk, reused for every
  visitor, and renewed automatically (~every 60 days for Let's Encrypt's 90-day ones).
  Never per request.
- RepoHIVE: Caddy has one fixed site (the origin domain), gets one certificate by HTTP-01
  on port 80, keeps it on the data volume. CloudFront holds the public certificate (ACM).
- selfsite: customer domains aren't known in advance → **on-demand TLS**: the first
  HTTPS connection for an unknown hostname makes Caddy get its certificate then (a few
  seconds, once), then store and reuse it. `*.selfsite.in` uses one wildcard
  certificate via a DNS-01 challenge in Route 53.
- The "ask" check: before issuing, Caddy asks "is this domain one of ours?". Without it,
  anyone could point domains (or send made-up hostnames) at our IP and make Caddy request
  certificates until Let's Encrypt's rate limits block real customers. Proposal: answer
  it locally on the box ("does `/srv/sites/<domain>` exist?", with the hostname
  validated first), so it works when Java is down and junk hostnames never reach Java.
- On S3 + Redis (2026-10-17): Redis adds nothing here. "ask" runs only when a certificate
  is issued or renewed, and a local file check is faster than a Redis call; Caddy already
  keeps certificates in memory, disk is only its durable layer. Redis would cost memory on
  the shared t4g.small (or ~$12+/month as ElastiCache) and one more thing to run.
  Don't query S3 live from "ask" either: junk hostnames would each cost an S3 request.
- Things to get right with certificates in S3:
  - They include **private keys**: private bucket/prefix, encrypted, readable only by the
    box's role, versioned.
  - Sync Caddy's **whole data directory**, including the ACME account key, not only the
    certificates (otherwise each new box registers a new account; Let's Encrypt limits
    new accounts per IP).
  - Boot order: pull from S3 → then start Caddy (systemd ordering, as RepoHIVE does).
  - Sync up on a timer + on shutdown. A certificate issued minutes before a crash may be
    lost and simply re-issued, which is fine.
  - Alternative: a Caddy S3 storage plugin (Caddy reads and writes S3 directly; also
    coordinates issuing if there are ever two boxes). Third-party code; the sync is simpler.
  - A new customer domain = Java writes its marker to S3, then the box syncs (ties to
    item 6, future).

## DNS — moved to [`DNS.md`](DNS.md) (2026-10-18)

All DNS, domain, certificate-summary and email-DNS decisions and open items live in
`DNS.md`.

## Technical pieces still to decide (Claude's checklist; nothing decided)

1. **DNS:** see [`DNS.md`](DNS.md) (decisions, proposals and its own open list).
2. **Media uploads / storage:** see [`MEDIA.md`](MEDIA.md) (decisions, proposals, its
   own open list and what's not yet discussed).
3. **Login for owners:** ~~email OTP vs SMS OTP vs WhatsApp OTP vs Google login~~
   **FIXED (user, 2026-10-19): Google login + email OTP.** See DECISIONS.md and AUTH.md.
4. **Email sending:** SES (leave the sandbox), SPF/DKIM/DMARC on selfsite.in. **Now
   needed at launch** (email OTP is fixed, 2026-10-19).
5. **Payments:** **FIXED (user, 2026-10-19): Razorpay, but not at launch.** Agency
   customers pay offline (UPI); online payments and subscriptions come with pure-online
   customers. GST invoicing: check with a CA.
6. **Trial lifecycle:** **FIXED (user, 2026-10-19):** site taken down at the end, login
   still allowed, name freed for others, extensions by hand. See DECISIONS.md.
7. **AI:** **FIXED (user, 2026-10-19):** Gemini on Vertex AI behind a provider-agnostic
   interface, simple features only, monthly credits per site (user override). See
   DECISIONS.md.
8. **Backups:** **FIXED (user, 2026-10-19):** RDS settings only at launch (7-day
   point-in-time restore etc.); custom locked dumps later; no media versioning. See
   DECISIONS.md.
9. **Monitoring:** **DEFERRED (user, 2026-10-19): "needs some attention", revisit as a
   whole.** Claude's draft from that conversation, nothing agreed: Warden already covers
   EC2/RDS/Lambda metrics, the outpost and budgets but doesn't push alerts; add an external
   uptime service (health endpoint, canary sites, media, Warden's `/healthz`); a Java
   `/api/health` that fails on DB down / disk > 85% / stale cert sync; heartbeats for
   scheduled jobs; Sentry free for Java + CMS errors; SES bounce and complaint alarms
   (OTP login depends on them); Cost Anomaly Detection, a Vertex budget, an AI-ceiling
   email, an RDS storage autoscaling cap. Open: where alerts go (push / email / Telegram).
10. **Security (app side):** **Secrets: SSM Parameter Store (FIXED, user, 2026-10-19).**
    App delivery: containers built on GitHub Actions → Docker Hub or ECR (FIXED).
    Private bucket (CloudFront-only via OAC), least-privilege
    IAM for builds, secrets in SSM Parameter Store, rate limits on login and the API, a
    way to suspend a tenant (takedown).
11. **Conditional on features not yet decided:** contact/enquiry forms (`/api/*` → Java +
    spam protection), visitor stats, a dev/test environment for the user (not
    client-facing staging, which is held).

==========================================================================================
==========================================================================================

# (Earlier, written by another agent — NOT agreed by the user; reference only)

# SCRATCHPAD — base plan (2026-10-17)

The base plan for maverickcreatives.in + selfsite.in, from the planning conversation of
2026-10-16/17.

Status tags: **DECIDED** (user's word, don't reopen) · **PROPOSED** (suggested, not
confirmed) · **OPEN** (needs research or a decision) · **HOLD** (parked) · **DROPPED**
(rejected; don't re-suggest).

---

## 0. How to work with this user

- Fluent in **Java**, not frontend. They design the system and the database and write
  the backend themselves. **No code they don't understand**, because it hurts at debug
  time. Nothing gets merged that they can't follow.
- Build **phase by phase, slowly and steadily**. No large unattended builds.
- Don't volunteer pricing or tier-allowance opinions (their words: *"This is my word
  and its final"*). Answer pricing only when asked.
- They give blunt keep/drop verdicts. Present options as numbered, separable items.
- Only the stack items in §1 are fixed. Don't fix anything else on their behalf.

---

## 1. Stack

| Item | Status |
|---|---|
| **Backend: Java** | **DECIDED** |
| **Database: MySQL** | **DECIDED** |
| **Public sites are built with Astro** (static output) | **DECIDED** |
| **UI is separate from the backend.** The frontend talks to Java only through an API contract, so either side can change without migrating the other | **DECIDED** |
| Frontend (admin / CMS) framework | **OPEN — user is researching.** Must be a Node-ecosystem framework. Not to be fixed until the research is done |
| How blocks are written for Astro (`.astro` components vs a UI framework's components) | **OPEN.** Depends on the frontend choice. If the admin and Astro can share the same block components, the editor preview is exactly what gets published |
| Java framework and versions | **OPEN.** Earlier scratchpad recorded Spring Boot 4.1 / Java 25 / MySQL 8.4; reconfirm |
| AI provider | **OPEN.** Gemini on Vertex AI (V2) vs the user's own models on a friend's GPU (earlier scratchpad). Either way, behind a Java adapter interface |
| Editor: Puck vs own UI | **OPEN, leaning own UI.** See §6 |

---

## 2. Business model

| Item | Status |
|---|---|
| Two brands: **maverickcreatives.in** (website agency, in person, Coimbatore) and **selfsite.in** (self-serve builder + CMS) | **DECIDED** |
| Hook: sell the first 10 agency sites with a **free selfsite CMS** bundled (edit mails, links, timings, section content; AI rewriting; image uploads with limits) | **DECIDED** |
| Then: add features, introduce tiers and quotas, discounts for existing agency customers, then win selfsite-only customers with no agency pitch, eventually global | **DECIDED** |
| **Self-sustaining / dogfooding:** use our own product for our own work, the way the user's helpdesk company runs on its own helpdesk | **DECIDED** |
| Length of the free period: the first ~10 agency clients get the selfsite CMS **free for lifetime**. Which tier they get is the user's call | **DECIDED** (reconfirmed 2026-10-17) |
| Pricing, tiers | See the earlier scratchpad §4–§5 (PROPOSED, unconfirmed). Don't volunteer opinions |

---

## 3. Architecture principles

1. **One platform, two front doors.** An agency site is a selfsite tenant from day one,
   flagged "managed by Maverick Creatives". Every feature reaches both brands. — **PROPOSED, user agreed in principle**
2. **A demo is a tenant from the first minute.** Winning the client turns the same
   tenant live. Nothing is rebuilt. — PROPOSED
3. **Client websites are not code folders.** They are tenants. A client folder holds
   materials only (brief, brand kit, photos, agreement, invoices). — PROPOSED
4. **Business logic lives in Java.** The frontend displays data, submits forms and
   shows errors Java returns. The Astro renderer has no logic: content JSON in, static
   folder out, runnable by hand. — PROPOSED
5. **Never accept a tenantId from a request** (path, body, header or model output). It
   comes from the logged-in user in the editor and from the Host header on public sites. — DECIDED (carried over)
6. **The AI never writes HTML.** It emits edit commands; Java validates them against
   the block schema. — DECIDED (carried over)
7. **Composition, not generation.** Sites are assembled from human-designed sections
   (each with 2–4 variants + theme tokens). AI picks and fills; it never invents
   layouts. Section-level editing is the sweet spot; **element-level editing comes
   last**, only if real users ask. — DECIDED (user said element-level is last)
8. **Entitlements exist before pricing does:** `plan`, `trial_ends_at`, quotas in the
   data model from the start, even while everything is free. — PROPOSED
9. Contracts shared by both sides live in one place (block schemas, OpenAPI). Java
   validates; frontend types are generated. — PROPOSED

---

## 4. Database design checklist (the user designs this)

What the schema has to cover. Suggestions only; the user decides.

- **Tenancy:** `tenant_id` on every tenant-owned table. Enforcement via Hibernate
  `@TenantId` or explicit `where tenant_id = ?` (explicit is easier to read and debug).
- **Domains:** hostname → site, for Host-based resolution of public sites and `/api/*`.
- **Content:** suggestion — one JSON document per page revision (ordered list of
  `{block, variant, fields}`), revisions immutable, page points to
  `draft_revision_id` and `published_revision_id`. Rollback = move a pointer;
  debugging = read one row.
- **Business profile** as proper columns, not JSON: name, phones, WhatsApp, email,
  address, hours, links, socials. Sections reference these (e.g. `{{phone}}`), so one
  edit updates header, footer and contact page together.
- **Users and memberships:** user → membership (tenant, role: owner / operator).
- **Tenant lifecycle:** `status` including `demo` (see §8).
- **Media:** original in S3, generated sizes, dimensions, owning tenant.
- **Enquiries**, **AI usage per tenant per month** (quotas), **publish records**,
  **plan / entitlement fields**, **audit log** (operator actions, "view as tenant").
- Template packages (layout + theme tokens + block set + sample content), versioned.

---

## 5. Hosting (fresh AWS account) — PROPOSED

- **Fresh AWS account, Mumbai (ap-south-1).** **Account rotation: HOLD** (left out for
  now; earlier analysis in the conversation and earlier scratchpad §8).
- Public sites: Astro output → **S3 + CloudFront**. EC2 for the Java backend. Route 53
  for DNS, ACM for certificates, SES for email.
- **Cloudflare rejected by the user** ("a nightmare of cross-service management"). Keep
  everything in AWS.
- **Caching:** hashed asset filenames cached forever; HTML short `s-maxage`; on publish
  invalidate only the HTML (`/index.html` etc.). Invalidation takes seconds to a few minutes.
- **Same-origin API per tenant:** every site calls relative `/api/*` on its own domain
  (`a.selfsite.in/api/cart`). CloudFront routes `/api/*` to the backend; Java resolves
  the tenant from the Host header. No CORS, works on custom domains. The user's company
  uses the same pattern.
- **DNS:** registrar (buy/renew) is separate from DNS host (Route 53). Clients point
  their domain at **one branded CNAME target** we control, so infra changes never need
  client action. **`themaverick.tech`** (already owned; Warden runs on it) can be the
  infrastructure domain instead of buying `maverickcloud.in`.
- Monitoring through **Warden** (AWS-COMMAND-CENTER): `./w account add` for the new
  account; uptime per client domain, cert expiry, run tracking, budgets.
- Capacity reference: a CDN serves the static files, so EC2 only handles APIs, editor
  and builds. A t4g.small/medium is plenty for the first phases.

---

## 6. Editor / CMS

| Item | Status |
|---|---|
| Owners will edit **on phones**. The client CMS must be mobile-first | DECIDED (user: ~99% of end users are mobile) |
| Phase 1 CMS = business profile editor + section content editing + AI rewrite + image upload + preview + draft/publish + rollback | PROPOSED |
| **One editor, two permission levels:** owner (edit content in existing sections) and operator (add / remove / reorder sections, change variants and theme) | PROPOSED |
| Field forms generated from block schemas, so a new block needs no new form code | PROPOSED |
| **Puck vs own UI** | **OPEN, user leaning own UI.** Analysis: Puck gives canvas, click-to-select, drag-and-drop, undo, viewport switch, permissions API (weeks to rebuild), but it's a desktop canvas editor and owners are on phones. Phase 1 needs forms, not a canvas. Puck is pre-1.0 (renamed package, changed data model). Decide together with the frontend research |
| Up/down buttons instead of drag-and-drop on mobile | PROPOSED |

---

## 7. Roadmap — PROPOSED

Selling can start after Phase 1; Phases 2–3 are built while selling.

### Phase 0 — Design and research
- **Frontend research** (user) → pick the admin framework and the block component format.
- **System design** (user): system diagram, database schema (§4) as the first migration,
  API endpoint list, block schema format, auth approach.
- Review pass for gaps; the user decides.

### Phase 1 — Blocks + Astro renderer (no UI, no hosting)
- Port 15–20 of the best SITE-FOUNDRY blocks into the chosen block format, with schemas
  and theme presets (palette, fonts, shape).
- Astro renders a hand-written site JSON + business profile + theme into a static site.
- **Done when:** maverickcreatives.in, written as JSON, looks right on a phone.
- **Selling can start:** compose demo sites by hand and show them from the laptop.

### Phase 2 — Hosting
- §5: S3 + CloudFront, EC2, MySQL, Route 53, ACM, SES.
- Publish: render → upload to S3 → invalidate HTML only.
- `/api/*` per site → Java; enquiry form → email.
- Backups with one test restore, Budgets alarm, Warden.
- **Done when:** **maverickcreatives.in is live as tenant #1** (dogfooding).

### Phase 3 — The CMS
- Login, business profile editor, section editing with preview, drafts → publish,
  revision history with one-click rollback.
- AI rewrite ("make this professional", tone choice) with a monthly quota per tenant.
- Image upload: validate type/size, strip EXIF (GPS location), resize, WebP/AVIF with
  `srcset`. (sharp is Node; on Java consider libvips — OPEN.)
- Enquiry inbox. Operator mode for us.
- **Done when:** a client edits from their phone and publishes, without help.

### Phase 4 — The first 10 clients
- Demo pipeline v0 (§8): manual brand-kit form → demo tenant → 3–4 variants by theme
  preset → presentation view with phone frame → QR code → Won button.
- Manual billing (invoice + Razorpay payment link). Enquiry alerts on WhatsApp.
- **Track what clients actually edit.** That data shapes self-serve.

### Phase 5 — Monetise
- Razorpay subscriptions, tiers enforced via entitlements, agency discounts as coupons
  or entitlement overrides.
- **Trial expiry (for later customers; the first ~10 agency clients are free for
  lifetime): downgrade, never take the site down.** Editing and AI lock; site stays
  live. Reminders at 30 / 7 / 1 days.
- Analytics page: visits, enquiries, call/WhatsApp clicks ("your site brought you 43
  enquiries this quarter" sells renewals). Usage page (AI credits, storage).

### Phase 6 — Self-serve selfsite
- Signup with brochure / images / form → AI picks template + variants and fills content.
- Template gallery, theme switching, add/remove/reorder sections, free
  `*.selfsite.in`, self-serve custom domains, help docs.
- **"Paste your current website URL and we'll build three versions"** — the demo
  pipeline becomes onboarding.
- Abuse controls (phishing pages on free subdomains, email verification, takedown flow).

### Phase 7 — Copilot and depth
- Chat copilot issuing the same edit commands, validated in Java.
- More blocks (catalogue, menu, booking, WhatsApp ordering, blog), SEO assistant,
  Google Business Profile integration, multi-page sites, larger template library.
- Element-level editing only if users ask.

### Phase 8 — Global
- Product UI in other languages, other markets' templates, Stripe alongside Razorpay,
  GDPR, support across time zones.

---

## 8. Sales pipeline: Prospector → ingest → demo → client — PROPOSED

```
PROSPECTOR          INGEST (new)       SELFSITE                         WARDEN
discover → capture → brand kit JSON → demo tenant (3–4 variants) → meeting → Won → live tenant
                                      noindex, token link, expires     same tenant, trial starts
```

**Prospector (exists, `D:\PROJECTS\PROSPECTOR`):** finds Coimbatore businesses via Google
Places, captures desktop + mobile screenshots and `rendered.html`, extracts first email
and outside links. Rules: homepage only, robots.txt honoured, identifying user agent,
no scoring. Listings without a website are kept as "first-website pitch" leads. A CRM
already exists at `D:\PROJECTS\PERSONAL\CRM` — **don't build a second one.**

**Ingest (new stage after Prospector, not part of it):**
- Input: a lead marked "pitch". Crawl homepage + About / Services / Gallery / Contact
  with Prospector's politeness rules.
- Output: **brand kit JSON** — the contract between the systems:
  ```
  business: name, category, phone, email, address, hours, socials
  copy:     tagline, about, services[{title, text}], testimonials[]
  media:    logo, images[{url, guessed_role: hero|gallery|team|product}]
  brand:    colours (from logo and CSS), fonts
  source:   domain, crawled_at, pages[]
  ```
- Hand-off: POST to a Java import endpoint → demo tenant → AI maps content into
  sections as validated edit commands. The scraper only collects.
- No-website leads: manual brand-kit form; placeholder images clearly labelled; ask for
  real photos at the meeting. **Google Places content** has storage/reuse restrictions
  (check terms before pre-filling). **Instagram scraping breaks Meta's terms.**
- Versions: v0 manual form → v1 scrape existing site → v2 auto-stage variants.

**Demo environment:**
- Demo tenants: `status = demo`, `noindex`, private token link, auto-deleted after
  ~30 days, never billed. They use a business's branding before it agreed, so never public.
- Presentation view: variants side by side, full screen, laptop ↔ 390 px phone frame.
- **QR code** so the owner sees it on their own phone (likely the strongest persuader).
- Live AI edit in front of them ("make the heading sound more premium").
- **Offline export** of all variants (meeting-room Wi-Fi is unreliable).
- **Won button:** chosen variant goes live, others archived, the free plan starts
  (lifetime for the first ~10 agency clients, §2), domain connected, outcome written
  back to the Prospector lead / CRM.

**Premium templates:** a template is a versioned package (layout + theme tokens + block
set + sample content). Built once for an agency client, generalised, then: included for
agency clients, sold/unlocked on selfsite (entitlement e.g. `template:premium-salon`),
and used by demos. Every template added improves future demos. Eventually host
maverickcreatives.in and selfsite.in themselves on the platform.

---

## 9. Easy-to-miss items (before client #11)

- **Billing:** Razorpay, GST invoices (check whether GST registration is needed),
  suspension policy decided before it happens.
- **Terms:** ToS + privacy policy; **DPDP Act** applies (enquiry data stored on
  clients' behalf). Ownership: client owns domain and content, we own template and code.
  **Exit path:** static export of their site.
- **Enquiry delivery:** WhatsApp first, then email (SES with SPF, DKIM, DMARC).
- **Business email** (`info@theirdomain`): resell Zoho / Google Workspace, MX in Route 53.
- **Local SEO in every template:** meta tags, sitemap, `LocalBusiness` schema.org,
  Google Business Profile link, fast loads.
- **Image pipeline**, **drafts + rollback**, **backups actually restored once**.
- **Super-admin panel** (list / suspend tenants, domains, view as tenant, audit log).
- **AI cost controls** (quota per tenant per month), **monitoring** (uptime, errors,
  cert expiry, **AWS Budgets alarms**), **staging environment + CI/CD**.
- Expect owners not to open the editor much; fast turnaround, good design and
  enquiries feel more premium to them than AI features.

---

## 10. Carried over from the earlier scratchpad (2026-10-15)

- **DROPPED — don't re-suggest:** **WhatsApp as the editor** (reconfirmed 2026-10-17;
  WhatsApp stays only for enquiry alerts); AI receptionist; enquiry summaries / reply
  drafts; Google review reply drafts; self-improving site / A/B tests.
- **HOLD:** **Tamil / bilingual sites — deferred** (reconfirmed 2026-10-17; *"not that
  impressive"*). Don't pitch Tamil as a differentiator. Per-vertical learning.
- **DECIDED keep:** auto alt text / SEO titles / structured data; **onboarding from what
  they already have** (Maps link, photos, brochure PDF → site) — **top priority**, the
  live in-shop demo; local SEO on autopilot; spec sites for Prospector leads as an
  internal tool.
- AI guardrails: AI uses only owner-provided facts; anything it fills in (qualifications,
  prices, RERA numbers) needs owner confirmation before publish. NMC rules for doctors;
  RERA number in property ads. Never generate fake photos of a real business.
- Client-acquisition ideas (comparison sheet vs nearest competitors, QR card left
  behind, street-by-street routes, association demos, "Built by" credit + referral,
  visit brief per lead): PROPOSED, no verdicts yet — see earlier §7.
- Pricing research, tier split and cost estimates: earlier §4, §5, §10 (PROPOSED).

---

## 11. Existing assets

| Asset | Use |
|---|---|
| **SITE-FOUNDRY** | Offline Fable agents generating mobile-first HTML + Tailwind blocks and templates under a strict contract (`--sf-*` tokens, slots, options, motion levels). **Source of block designs** for Phase 1. Original work; runtime libs MIT (motion, lenis, three, Tailwind); fonts via Fontsource |
| **PROSPECTOR** + **CRM** | Lead discovery and relationship tracking (§8) |
| **AWS-COMMAND-CENTER (Warden)** | Monitoring, accounts, budgets. Stays where it is (manages all accounts) |

**Licences to avoid in a site builder:** GSAP (prohibits competing visual builders),
Tailwind Plus (forbids builders), React Bits (MIT + Commons Clause), Cruip (GPL, no
redistribution).

---

## 12. Folder layout — user is moving

```
D:\PROJECTS\MAVERICKCLOUD\
  SELFSITE\              ← new repo, built phase by phase
  MAVERICKCREATIVES\     ← agency business material
  CLIENTS\<client>\      ← materials only, no code
  FOUNDRY\               ← SITE-FOUNDRY
  SCRATCHPAD.md          ← this file
```

Moving notes: `node_modules` needs a reinstall after a move; Claude Code trust and
history are per path; PROSPECTOR's `overnight.ps1` (two copies) hard-code
`D:\PROJECTS\PROSPECTOR` if it moves.

---

## 13. Open questions

1. Frontend framework for the admin / CMS (research in progress).
2. Block component format for Astro, and whether admin preview shares it.
3. Puck or own editor (leaning own).
4. AI provider: Gemini on Vertex vs own GPU models.
5. Java framework / versions (Spring Boot 4.1 / Java 25 / MySQL 8.4 from earlier — reconfirm).
6. Image processing on the Java side (libvips or other).
7. Auth approach (session cookie vs JWT; Google login vs OTP).
8. Whether PROSPECTOR and the CRM move under MAVERICKCLOUD.
9. Which selfsite tier the first ~10 agency clients get for lifetime.
