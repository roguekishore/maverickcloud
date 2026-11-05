# MaverickCloud development plan (2026-11-04)

Where things stand, what gets built, a rough order, and the blockers before the build
starts. Fixed decisions stay in [`DECISIONS.md`](DECISIONS.md).

## Where things stand

Design phase, no code yet. `D:\PROJECTS\MAVERICKCLOUD` holds 7 markdown files. Most of the architecture is fixed in `DECISIONS.md`.

- **Fixed:** business, stack, hosting, publishing, edge security, owner login, tiers and trials, AI, payments, backups.
- **Proposed, awaiting confirmation:** most of `AUTH.md`, `MEDIA.md` and `DNS.md`.
- **Parked:** Oracle Cloud (`OCI.md`), who holds customers' DNS.
- **Opened 2026-11-04:** monitoring (every detail logged and monitored, easy to reach). Design next.

## What gets built

Ten pieces live in this repo. Warden stays in `AWS-COMMAND-CENTER/warden` and only monitors.

| # | Piece | What it does |
| --- | --- | --- |
| 1 | selfsite API (Java + MySQL) | Google + email OTP login, server-side sessions, sites and members, draft/published content, upload slots and quota, publish and rollback, AI service and credits, trials, custom-domain checks and the allowed-domain list, admin actions with audit log, scheduled jobs (trial reminders and expiry, credit reset, domain recheck, name cooldown, media cleanup) |
| 2 | CMS (React + Vite + TS, `app.selfsite.in`) | Login, live preview in an iframe, edit forms drawn from `fields.json`, media library, publish/rollback, connect domain |
| 3 | Admin panel (its own PWA) | Put customers on a tier by hand, replace a lost login, suspend, extend trials, override credits |
| 4 | Template / section packages | React section components + `fields.json` + `theme.css`, built into `sections.js`; used by both the CMS preview and the Astro build |
| 5 | Publish pipeline | Astro build on Lambda → S3 → synced to the box; rollback depth per tier |
| 6 | Media Lambdas | sharp for images, ffmpeg for video (arm64) |
| 7 | Edge box | Custom Caddy build (route53 + ratelimit), Caddyfile, systemd units, boot script (pull certs, sites, domain list from S3; attach Elastic IP), cert sync back to S3, health timer |
| 8 | Terraform | VPC, Auto Scaling group of 1 + Elastic IP, RDS, S3 buckets, CloudFront + ACM for media, Route 53, SES, IAM, SSM parameters, Lambdas |
| 9 | CI | GitHub Actions builds images and pushes them to a registry |
| 10 | selfsite.in site + privacy/terms | The Google consent screen needs the legal pages before login goes live |

## Rough build order (suggestion)

Claude's suggested sequence, not agreed yet: the content model first, because the CMS, Java validation and the Astro build all depend on it. Reorder or drop freely.

1. **Settle the blockers** below, then architecture planning.
2. **Repo and machine:** monorepo layout, GitHub remote, JDK, Docker, MySQL 8.4.
3. **Content model + first template:** freeze the JSON, field types, `fields.json` and package format against one sample site with 2–3 sections (one a carousel).
4. **API core:** login (Google + email OTP), sessions, sites and members, content save with validation against `fields.json`.
5. **CMS core:** login, iframe preview from `sections.js`, edit forms, save.
6. **Publish:** Astro build locally first, then on Lambda → S3 → box, with rollback.
7. **Media:** upload slots, presigned POST, sharp and ffmpeg Lambdas, media library.
8. **Infra and edge:** Terraform, the Caddy box, CI. Can run alongside 4–7 once the AWS account is settled.
9. **Product rules:** admin panel, tiers, trials and reminders, AI credits, custom domains, scheduled jobs.
10. **Go-live prep:** selfsite.in site and legal pages, Google consent screen to production, SES production access.

## Blockers before the build starts

Seven questions, each yours to answer.

- [ ] **Java baseline.** Boot/JDK version, Flyway vs `ddl-auto`, base package, time type, error shape (open since 21 Oct). VANTAGE-REWRITE, the style reference, is no longer under `D:\PROJECTS\APPS`: where is it? Other apps run Boot 3.2–4.0.2 on Java 17, no Flyway, no Testcontainers.
- [ ] **Who builds what.** Hand-written, interactive Claude Code, nightrun on a cloud box, or NIGHTSHIFT (`D:\PROJECTS\NIGHTSHIFT` is missing on this machine). Decides how specs are written.
- [ ] **Database schema.** Yours to design. All of it up front, or confirm the `AUTH.md` tables and design the rest per feature?
- [ ] **Content model freeze** (`FRONTEND-CONTENT-MODEL.md` §4). Which sample site: a real first customer or a made-up salon?
- [x] **AWS accounts** (2026-11-04): production in one long-lived account; a separate dev/test credit account, possibly with its own domain. Still to name: which account is which.
- [ ] **Repo shape and scope.** Private (2026-11-04). Still open: one monorepo? Do the selfsite.in marketing site and maverickcreatives.in live here?
- [ ] **Phone-first CMS?** Shapes the CMS layout from the first screen.

## Left for during the build

Docker Hub vs ECR, Caddy as binary or container, canonical host, trial length, rollback depth, reserved names. Also noted: Vertex AI needs billing but the Google login project has none, so AI needs its own Google Cloud project.

## Stack

All fixed in `DECISIONS.md`.

| Part | Choice |
| --- | --- |
| Backend | Java + MySQL (RDS, 8.4) |
| CMS | React + Vite + TypeScript, client-side only |
| Customer sites | Astro static build on Lambda; sections are React components shared with the CMS preview |
| Serving | Caddy on one t4g.small with an Elastic IP; S3 + CloudFront for media |
| Infra and delivery | Terraform; containers built on GitHub Actions; SSM Parameter Store for secrets |
| Services | SES for app mail; Gemini on Vertex AI behind an interface; Razorpay later |

## This machine

Three things to fix before coding: `JAVA_HOME`, Docker's engine, and MySQL 8.4. The machine is x86_64 but everything deploys to arm64, so images build on GitHub's arm runners or with buildx.

| Tool | Found | To do |
| --- | --- | --- |
| JDK | 14, 17, 23; `JAVA_HOME` → 14 | Install the chosen LTS (no 21/25 here), repoint `JAVA_HOME` |
| Docker | Desktop 29.1, engine not running | Start it (Testcontainers, image builds) |
| MySQL | 8.0.39 local service | Upgrade to 8.4 at the weekend (below) |
| Maven | 3.9.11 | — |
| Node / npm / pnpm | 24.21 / 11 / 12 | — |
| Terraform | 1.16.2 | — |
| AWS CLI | 2.34; SSO token expired | Profile for this project once the account is chosen |
| git / gh | 2.52 / 2.100 | — |
| Go | 1.27 | Enough for `xcaddy` later |
| Caddy, ffmpeg, gcloud | Not installed | Not needed yet |

### Weekend: MySQL 8.0 → 8.4

Copy the data folder and upgrade the copy; 8.0 stays untouched for rollback. Checked on 4 Nov: all accounts use `caching_sha2_password`, all tables InnoDB, no removed settings in `my.ini`, no FKs to non-unique keys, no new reserved words. Not yet checked: the 82 routines and 7 triggers.

1. Install MySQL Shell 8.4; run `util checkForServerUpgrade --target-version=8.4`; fix any errors.
2. Extract the 8.4 LTS Windows ZIP to `C:\Program Files\MySQL\MySQL Server 8.4`.
3. `SET GLOBAL innodb_fast_shutdown = 0;` then `net stop MySQL80`.
4. `robocopy` the 8.0 `Data` folder to `C:\ProgramData\MySQL\MySQL Server 8.4\Data` (`/E /COPYALL`, skip the 512 MB general log).
5. Copy `my.ini` to the 8.4 folder; update `datadir` and `secure-file-priv`. Optional: `general-log=0`.
6. `sc config MySQL80 start= disabled`; install the `MySQL84` service with the new `my.ini`; `net start MySQL84`; watch the `.err` log.
7. Check `SELECT VERSION();`, start a Spring app, switch PATH to `8.4\bin`.

**Rollback:** stop `MySQL84`, set `MySQL80` back to auto, start it. Delete the 8.0 data after a week or two without problems.
