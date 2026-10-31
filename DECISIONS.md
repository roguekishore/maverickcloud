# Fixed decisions — MaverickCloud / selfsite

Only what the user has fixed, agreed to, or rejected. Leanings, proposals and open
questions stay in [`SCRATCHPAD.md`](SCRATCHPAD.md) and
[`FRONTEND-CONTENT-MODEL.md`](FRONTEND-CONTENT-MODEL.md). Last updated 2026-10-19.

---

## Business

- **MaverickCloud** is the umbrella for two products: **Maverick Creatives** and **selfsite**.
- **Maverick Creatives** is a freelance web design agency. Sites are **handcrafted**.
  - **Bundle: ₹5,000 one-time**, covering the website and the CMS together.
  - **The first 10 customers get selfsite free for life.**
  - Agency bundles include **limited AI usage** (e.g. a number of rewrites per day).
- **selfsite.in** is the CMS and **the main priority to build**. The app is designed so
  later tiers can be added without rework.
- **Core CMS:** preview the site · edit the content · AI-assisted editing · manage photos
  and assets (~500 MB per customer) · update links · timings · contact info.
- **Tier priorities:** Standard is a must-have; Plus and Premium are nice to have. (What
  goes in each tier is still being brainstormed; see the scratchpad.)
- **No Free tier at launch; a free trial instead.** When Free comes later, it's
  upload-your-own-site only: `name.selfsite.in` with a selfsite badge, no templates, no
  CMS, no AI, no blocks.
- **The ~₹1,000 lifetime sites: the CMS only, no AI.** AI is a paid add-on there, using
  low-tier models (Flash-Lite class).
- **Custom domains are part of every paid plan.**
- **Domains:** for new customers we buy and hold the domain; existing customers add
  records at their own registrar.

## Scope

- **Out:** internal tools (Prospector, ingest, CRM) and dogfooding.
- **Held for later:** staging, demos and showcasing premade templates inside selfsite.
- **Stays:** Warden, for monitoring only.
- **Not fixed:** the SITE-FOUNDRY and Puck formats.

## Stack

| Part | Decision |
|---|---|
| Backend | **Java + MySQL** |
| Customer websites | **Astro** (static HTML generated at publish time) |
| CMS (`app.selfsite.in`) | **React + Vite, in TypeScript**: a client-side app. No server-side rendering, no Next.js |
| Website sections | **React components**, used by both the CMS live preview and the Astro build |
| Infrastructure | **Terraform** provisions the whole AWS architecture |
| App delivery | **Containerised.** Images built on **GitHub Actions**, pushed to **Docker Hub or ECR** (not chosen yet) |
| Secrets | **SSM Parameter Store** |

## Hosting

> **Oracle Cloud is deferred (user, 2026-10-19).** Everything stays on AWS, including
> MySQL on RDS. The OCI brainstorm is parked in [`OCI.md`](OCI.md).

- **A Caddy EC2 serves the customer sites.**
  - Rejected: a Lambda proxy in front of EC2, and CloudFront (SaaS Manager) serving the
    HTML from S3. Not worth the cost and complexity.
- **One t4g.small at launch** runs Caddy and Java + the CMS together, with the **Elastic
  IP fixed** on it. When customers grow, Java + the CMS move to another box; this box
  keeps the Elastic IP and runs Caddy only.

## Publishing (2026-10-19)

- **Astro builds run on Lambda.** The output is stored in **S3 (the source of truth)**,
  then **synced to the box**, and **Caddy serves it from the box's disk**.
- At launch Java and Caddy share the one t4g.small, so Java pulls a new build onto the
  box itself once the Lambda finishes.
- **Rollback depth is tiered.** Each site keeps the last N builds in S3, N set by its
  tier (numbers: the user's to set). The box keeps current + previous for every site.
- **Old build files** (hashed CSS/JS) are kept while a build inside the tier's
  rollback window uses them, then deleted.
- **An owner's photo deletion is permanent.** Photos are not kept for rollback.
- **Rolling back to a build that uses a deleted photo:** the CMS shows a placeholder in
  its place and **blocks save and publish** until the owner replaces it.
- Proposed, part of the deferred content model: each build records its content
  revision; a rollback restores that revision into the draft. If nothing is missing it
  goes live at once (the kept build); otherwise the placeholder rule applies.
- Content model: **deferred** (FRONTEND-CONTENT-MODEL.md §4).

## Edge security

**Agreed:**
- Security group: ports 80/443 only. No SSH; admin access through SSM Session Manager.
  Shield Standard. S3 gateway VPC endpoint.
- Customer-site hosts accept GET/HEAD only and refuse request bodies; short header/idle
  timeouts.
- Per-IP rate limits in Caddy (`caddy-ratelimit`), generous on pages (shared mobile IPs).
- Caddy runs as a non-root user.
- Instance: Amazon Linux 2023 with automatic security updates, IMDSv2 required, encrypted
  EBS, least-privilege IAM role, **CPU credits in "standard" mode**.
- **Automatic recovery:** the box is disposable. An Auto Scaling group of exactly 1, with
  no load balancer; the startup script re-attaches the Elastic IP.
- **S3 is the durable store** for Caddy's certificates (its whole data directory) and the
  allowed-domain list. On boot or restart the box pulls them to local disk before Caddy
  starts, and syncs new or renewed certificates back up. The on-demand TLS "ask" check
  reads the local copy.
- **App-side limits per identity** (login, OTP, AI rewrites, uploads, publishes, forms):
  agreed; **the user writes a custom implementation**, no library fixed.

**Future items:** cost guards (Budgets, CloudWatch alarms, Warden uptime, media CDN on a flat-rate plan).

**Not now:** fail2ban.

**Rejected / dropped:** the emergency runbook (blocking ranges, upsizing during a flood);
Redis as a cache for the domain list or certificates.

**Accepted risk:** a very large flood of real-looking requests from many IPs can still
overwhelm one box.

## Owner login (2026-10-19)

- **Owners sign in to `app.selfsite.in` with Google login and email OTP**, both at
  launch. OTP codes go only to emails that already have an account.
  - **Set up in the Google Cloud Console** (not Firestore/Firebase): a project with an
    OAuth consent screen (basic scopes only: `openid`, `email`, `profile`; published to
    "In production") and a "Web application" OAuth client ID for
    `https://app.selfsite.in`.
  - **No billing account on that project**, so it can never be charged.
  - React shows the "Sign in with Google" button (Google Identity Services); Java
    verifies the ID token (client ID, issuer, expiry, verified email), stores the Google
    user ID (`sub`) and email, and issues **its own session cookie** (HttpOnly, Secure,
    30+ days). Nothing else from Google is stored.
  - The project is owned by a long-lived business Google account with 2-step
    verification, plus a second owner.
  - The consent screen needs privacy policy and terms URLs on selfsite.in. A logo
    (free brand verification, a few days) can wait.
  - The CMS detects in-app browsers (where Google blocks sign-in) and shows
    "Open in Chrome".
  - **If an owner loses access, switching their login must be easy from our side.** How
    the owner is verified before a switch is decided by the user case by case.
  - **The login code and design must be future-proof** (later methods, MFA, staff).
  - Data model, rotation flow and open items: [`AUTH.md`](AUTH.md).

## Tiers and trials (2026-10-19)

- **The tiers exist in the product from launch.** Agency customers are provisioned on a
  tier by hand (admin panel), since they pay offline.
- **When a trial ends:** the site is taken down from selfsite, but the owner can still
  log in. Visitors see a neutral "site unavailable" page.
- **Content and media are kept for 30 days after the trial ends, then deleted** (DB and
  S3). An extension or purchase within those 30 days brings the site straight back.
- **The name (`name.selfsite.in`) is freed for new users after a 30-day cooldown**, so
  old links and QR codes never lead to a stranger's site.
- **Reminder emails** (SES): 3 days before the end and on the day.
- **Trials use `name.selfsite.in` only**; no custom domains.
- **Extensions:** the user extends a trial by hand on request. Nothing automatic.
- **Trial length: not decided yet** (a setting, not a code change).

## AI (2026-10-19)

- **Provider: Gemini on Vertex AI**, low-tier models (Flash-Lite class).
- **The AI service is model- and provider-agnostic, built on an interface**, so the
  provider can change later. It always authenticates with a **key** (server-side secret,
  never in the browser).
- **At launch, AI does anything simple:** rewrite a text field, translate, image alt
  text, write from a few notes, and similar. **Not** the copilot or anything like it.
- **Credits, shown to the owner:**
  - Each action costs a fixed number of credits, shown on the button (weights are config).
  - Each site gets a monthly allowance from its tier; the user can override it per user
    from the admin side.
  - **Unused monthly credits expire at the reset.**
  - Each action's input is length-capped, so one credit can't become an expensive call.
- **Behind the credits, Java meters tokens** for every call, for cost tracking and a
  daily ceiling across the whole service that switches AI off if spend runs away.
- **Credit packs are not at launch.** When they come (with Razorpay), bought credits
  carry over.

## Payments (2026-10-19)

- **Razorpay**, when online payments come.
- **Not at launch:** agency customers pay offline (UPI). Online payments and
  subscriptions come when selling to customers purely online.

## Backups (2026-10-19)

**At launch: only what RDS offers as settings when provisioning.**
- Automated backups with **point-in-time restore, 7 days**; backup window at night IST.
- Deletion protection on; a final snapshot when the instance is deleted; automated
  backups retained after deletion; encryption at rest (chosen at creation); tags copied
  to snapshots. Terraform `prevent_destroy` on the instance.
- Java reads the database host from config, since every restore creates a new instance
  with a new address.

**Later: custom dumps.** `mysqldump` every 6 hours to a dedicated S3 bucket with Object
Lock, kept 30 days (a lifecycle rule deletes them afterwards). Guards: skip if the last
dump is under 5 hours old, refuse and alert if a dump is over ~3× the previous one, and
an AWS Budget alert on S3. Covers a compromised account or mass deletion, which RDS
backups alone don't.

**No S3 versioning on media originals.** A deleted photo is gone for good.

## Media uploads and storage

Fixed decisions, proposals and open items live in [`MEDIA.md`](MEDIA.md) (2026-10-18).

