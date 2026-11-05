# Engineering and operations setup — proposal (2026-11-04, rev. 2)

**The goal (user, 2026-11-04):** set everything up *before* the build, so that building,
running and supporting selfsite needs as little manual work from you as possible. Ops are
automated. When an incident happens, it is quick to resolve and to recover from. The company
runs as **you + AI agents + automation**, and this document covers all of it: development,
delivery, environments, monitoring, operations, incidents, customers and support, security,
cost, documentation and continuity.

**Everything here is PROPOSED (Claude) unless marked FIXED.** Fixed product decisions stay in
[`DECISIONS.md`](DECISIONS.md); the build plan is [`PLAN.md`](PLAN.md); the decision ledger
and agent automation details are in [`KNOWLEDGE-AND-AUTOMATION.md`](KNOWLEDGE-AND-AUTOMATION.md)
(K&A). Items are numbered per section (§11.3 = section 11, item 3) so each can be kept,
changed or dropped on its own.

**What changed from the first draft:**
- **No AWS Organization.** Becoming a management account reset one of your accounts' credit
  expiry (AWS-COMMAND-CENTER `docs/LESSONS.md`). Guardrails are per account instead (§9).
- **VS Code only, Fedora as the target machine;** IntelliJ dropped (§6).
- **LocalStack dropped:** local adapters for daily work, the dev AWS account for real AWS (§6, §8).
- **Private-repo limits:** GitHub Free has no branch protection on private repos, and
  deployment approvals on private repos need Enterprise. Workarounds in §10.
- **Monitoring: Warden + New Relic, no Sentry** (AGREED 2026-11-04, §11).
- **Student Pack** offers mapped to needs, with exit plans (§19).
- **New:** monitoring (§11), ops automation (§12), incidents and recovery (§13), customers
  and support (§14), continuity (§15), the agent workforce (§18), your remaining job (§0).

---

## 0. The company on one page

Three layers, used in this order:

| Layer | Does | Examples | Never |
|---|---|---|---|
| **1. Automation** (deterministic, no AI) | Anything with a known right answer | CI, deploys, health checks, self-healing, scheduled jobs, backups, reminders, alerts | Judgement calls |
| **2. Agents** | Work that needs judgement but no authority | Build from specs, review, tests, docs, incident triage, support drafts, the morning brief | Merge, deploy to prod, `terraform apply`, touch prod data, send anything to a customer, fix a decision |
| **3. You** | Decisions, authority, trust | Fix decisions, merge, promote releases, apply infra, run the runbook command in an incident, send customer messages, own the accounts | Do the same task by hand twice (§0.3) |

1. **Your remaining job, once this is set up:**

   | When | What |
   |---|---|
   | Daily | Read the morning brief on your phone; answer waiting decisions; review and merge PRs |
   | Per release | One tap to promote the release that passed in dev to prod (§10.6) |
   | Weekly | Read the hygiene issue: drift, stale proposals, noisy alerts, cost, toil |
   | Monthly | Access review, cost review, restore-drill result (all arrive as issues) |
   | On a P1 alert | Read the agent's triage; run the one command it names, or flip a kill switch |
   | Support | Read and send the replies agents drafted |

2. **Everything comes to you; you never go looking.** Warden (phone app) for health, alerts
   and cost; GitHub (phone app) for PRs, issues and decisions; one push channel for alerts
   (§11.9).
3. **Toil rule:** anything you do by hand gets one line in `docs/ops/toil.md` (date, what, how
   long). The weekly hygiene job turns anything done twice into an issue: automate it, hand
   it to an agent, or make it a runbook script. Manual work shrinks by design.
4. **Operability is part of done** (§17.2). A feature isn't finished until it has its
   metrics, alerts, runbook, admin visibility and docs. That is how ops gets set up
   beforehand for features that don't exist yet.

## 1. Principles

1. **One command each:** `mise run setup` a fresh machine, `dev` to run everything locally,
   `check` to run every test and lint, `ops:<name>` for every operational action. The same
   commands on the laptop, on the nightrun box and in CI.
2. **Everything as code:** infrastructure, alert rules, dashboards, runbooks, checklists, CI,
   email templates, editor settings. Nothing that only exists in a console or in someone's head.
3. **Guardrails are automated, not remembered:** hooks, CI checks, architecture tests. This
   matters twice over when agents write most of the code.
4. **Local-first:** every feature runs and is tested on the laptop without AWS.
5. **No surprise costs** (the user's rule from `OCI.md`): free tiers and self-hosted first;
   paid services wait until they're needed.
6. **A decision isn't made until it's in the ledger** (K&A §1).
7. **Recover by rebuilding, not repairing.** Servers are disposable; state lives only in
   RDS, S3 and git. Rebuilding is scripted and exercised every week (§10.8), so it works on
   the bad day.
8. **Every alert has a runbook; every runbook has a script.** Scripts are idempotent, have
   `--dry-run`, are tested in CI and drilled in dev.
9. **Agents look, you touch prod.** Agents are read-only in prod. Every write to prod is
   either automation you approved in code or a command you ran.
10. **Standards at the seams** (FIXED principle: swappable by design): OpenTelemetry and
    Prometheus for signals, OCI images, the S3 API, an interface in front of every external
    service. Any vendor named here can be replaced.

## 2. Monorepo layout

One repo (private, FIXED). Maven for Java, pnpm workspaces for JS/TS, `mise` for tool
versions and tasks (FIXED: this repo's own `mise.toml`). No Nx/Turborepo at the start.

```
maverickcloud/
  apps/
    api/                 Java (Spring Boot, Maven)        → selfsite API + scheduled jobs
    cms/                 React + Vite + TS               → app.selfsite.in
    admin/               React + Vite + TS, PWA          → admin panel (FIXED: its own PWA)
    www/                 Astro                           → selfsite.in, help centre, legal (if in scope, PLAN blocker)
  packages/
    content-model/       JSON Schema of the content JSON + fields.json, golden fixtures, generated TS types
    api-client/          TS client generated from the API's OpenAPI spec
    section-kit/         shared helpers for section components
    templates/<name>/    one template package each: sections + fields.json + theme.css
    emails/              customer email templates (§14.4)
  functions/
    site-builder/        Astro build Lambda
    media-image/         sharp Lambda
    media-video/         ffmpeg Lambda
  infra/
    terraform/
      bootstrap/         state bucket, per-account guardrails (run once per account)
      modules/           network, box, rds, media, lambdas, dns, ses, iam, monitoring (New Relic alerts + dashboards, §11.7)…
      envs/dev/  envs/prod/
    edge/                Caddy build (xcaddy), Caddyfile, systemd units, boot script, OpenTelemetry Collector config
  ops/
    scripts/             one script per runbook step (§12.4), bash, shellchecked
    renewals.yaml        everything that expires (§12.2)
  docs/                  §3
  tools/                 dev scripts (Node or mise tasks)
  .claude/               settings, hooks, skills, agent charters (§18)
  .devcontainer/         the one toolchain image (§6.9)
  .github/               workflows, PR template, issue forms, CODEOWNERS
  .vscode/               recommended extensions, settings, launch configs
  compose.yaml           local services (§6.5)
  mise.toml              tool versions + tasks
  CLAUDE.md              agent entry point (a router, K&A §2)
```

## 3. Documentation and knowledge

1. **The decision ledger, current-truth views, learnings and `STATE.md`:** K&A §1–§3. That
   proposal replaces the old knowledge-layer section here.
2. **Docs tree:**

   | Folder | Holds |
   |---|---|
   | `docs/product/` | Concept, tiers, scope (from the user's part of SCRATCHPAD.md) |
   | `docs/decisions/` | The ledger (K&A §1) |
   | `docs/architecture/` | The LikeC4 model (§4) + one page per area: auth, media, dns, publishing, content model, hosting, monitoring |
   | `docs/runbooks/` | One per scenario (§13.3) |
   | `docs/incidents/` | Postmortems (§13.6) |
   | `docs/ops/` | `estate.md` (§15.6), `toil.md` (§0.3), SLO definitions (§11.10) |
   | `docs/checklists/` | §17.3 |
   | `docs/guides/` | Dev setup, add a template, add a field type, add a scheduled job |
   | `docs/learnings/` | Facts agents discovered (K&A #8) |
   | `docs/archive/` | The agent-written half of SCRATCHPAD.md, OCI.md while parked |

3. **Three audiences, each kept current without you:**

   | Audience | Reads | Kept current by |
   |---|---|---|
   | Agents | `CLAUDE.md` router, `CURRENT.md`, `STATE.md`, area pages | SessionStart hook, `/decide`, nightly drift sweep (K&A) |
   | You | Morning brief, runbooks, estate, postmortems | Agents draft; CI checks links and freshness |
   | Customers | Help centre, changelog, status page, legal pages, emails | Release-notes agent; the support agent proposes a help article when a question repeats |

4. **Generated, never hand-written:** OpenAPI (springdoc), database schema docs with an ER
   diagram (`tbls`), module docs (Spring Modulith, if chosen), architecture views (LikeC4),
   the alert catalogue (from the Terraform alert definitions), the runbook index, the config reference (from
   Spring's configuration metadata). CI fails if any is stale.
5. **Docs CI:** link check (lychee), markdown lint, stale-decision lint (K&A #5), every
   alert names a runbook that exists, every runbook names scripts that exist.
6. **Conventions kept from the first draft:** status tags (FIXED · AGREED · PROPOSED · LATER
   · OPEN · REJECTED), a glossary (`docs/glossary.md`: tenant, site, member, template,
   section, field, draft, build, publish, rollback, credit) whose words the code uses, docs
   change in the same PR as the behaviour, `docs/` optionally opened as an Obsidian vault.

## 4. Architecture docs and diagrams

1. **LikeC4** for the architecture model as code (`docs/architecture/model/*.c4`): system
   context, containers and an AWS deployment view. One model, many views; VS Code extension,
   static export in CI, MIT licence, and an MCP server so agents can query it.
   (Alternative: Structurizr. LikeC4 wins on MCP and editor support.)
2. **Mermaid** inside markdown for flows (login, upload, publish, domain connect, deploy,
   incident). GitHub renders it.
3. **draw.io MCP** for one-off pictures with AWS icons. Optional.
4. Each area page carries a short **threat model** and a **failure model** (what breaks,
   what notices, what recovers it: links into §12 and §13).

## 5. Wireframing and UI design

1. Lo-fi: Excalidraw, or Claude's design canvas.
2. Hi-fi and design system, **choose one:** Figma Professional with one Full seat (the most
   mature design-to-code MCP; shadcn/ui kits exist) or Penpot (free, open source, official
   MCP, less polish).
3. shadcn/ui + its MCP for CMS and admin components, so designs map onto real components.
4. Blocked on an open product question: **phone-first CMS or not** (PLAN.md).

## 6. Developer machine

1. **Target: Fedora KDE** (the user plans the move). On Linux, containers run without a VM,
   so the local stack fits in 16 GB. Until the move, Windows and its limits apply.
2. **VS Code only** (user). `.vscode/extensions.json` recommends: Extension Pack for Java,
   Spring Boot Extension Pack, ESLint, Prettier, EditorConfig, HashiCorp Terraform, LikeC4,
   Playwright, Container Tools, YAML, ShellCheck. `settings.json` and `launch.json` are
   committed (run and debug the API, CMS and tests in one click). Formatting is enforced by
   tools (§8.2), not the editor.
3. **mise** pins every tool (Temurin JDK per the Java-baseline blocker, Node 24, pnpm,
   Terraform, gitleaks, lefthook…). `mise install` gives the right versions; `JAVA_HOME`
   stops mattering inside the repo.
4. **Docker Engine** natively on Fedora (no Desktop): Testcontainers works best with it.
5. **Local services in `compose.yaml`: MySQL 8.4 and Mailpit.** That's all.
6. **Every external dependency has a local adapter** (§16.2), so `mise run dev` needs no
   cloud: files on disk for S3, Mailpit for email, a local process for the Astro build, a
   fake AI provider with canned answers (and an opt-in real key for the dev Google project).
7. **The dev AWS account covers what can't be faked** (§9.1): presigned uploads, SES,
   Lambda builds, Caddy's on-demand TLS. This replaces LocalStack, which now needs an
   account and auth token, and matches "use the credits for a dev account".
8. **Secrets:** `.env.local` (git-ignored) with local-only values. No prod credentials on
   the laptop. Tokens come from the vault at launch (K&A #25).
9. **One devcontainer image** (JDK, Node, pnpm, Terraform, Docker CLI, all linters) used by
   CI, the nightrun box and unattended agents. Optional for you on the laptop, required for
   agents, so "works here, fails at 3 a.m." can't happen. The same image runs in **GitHub
   Codespaces** (Pro-level access through the Student Pack): a cloud dev machine for when
   the laptop is short on RAM or still on Windows.
10. **Seed data:** one sample site loaded by `mise run seed`.

## 7. OS compatibility (dev → Linux arm64 prod)

1. **LF everywhere** via `.gitattributes` (`* text=auto eol=lf`; CRLF only for `.ps1`/`.cmd`).
2. **Lowercase snake_case table and file names.** Windows MySQL ignores case, RDS on Linux
   doesn't; Testcontainers (Linux MySQL) catches mistakes either way.
3. **arm64 builds** on GitHub's arm64 runners (available for private repos since January
   2026; they count against the plan's free minutes). Lambda bundles install sharp for
   `linux-arm64` explicitly.
4. **Box scripts are bash**, shellchecked and boot-tested in an Amazon Linux 2023 container.
5. **UTC and UTF-8:** JVM and MySQL in UTC, shown in IST; `utf8mb4` everywhere.

## 8. Testing

1. **Layers:**

   | Layer | Tools |
   |---|---|
   | Java unit | JUnit 5, AssertJ, Mockito |
   | Java integration | Spring Boot + Testcontainers: MySQL 8.4, S3Mock for the storage adapter; WireMock for Google and Vertex |
   | Real-AWS adapter contracts | Nightly against the dev account: S3 presigned POST, SES (mailbox simulator addresses), the build Lambda |
   | Architecture rules | ArchUnit or Spring Modulith: module boundaries, no controller→repository, tenant scoping, banned APIs |
   | Migrations | Run in every integration test against real MySQL |
   | API contract | springdoc → committed `openapi.json` → generated TS client; oasdiff flags breaking changes |
   | Content contract | One JSON Schema + golden fixtures, validated by both Java and TS |
   | CMS and admin | Vitest + React Testing Library; MSW mocks the API |
   | Sections | Each section rendered with fixture content; preview and build HTML compared; visual snapshots |
   | End to end | Playwright: OTP login (code read from Mailpit) → edit → save → publish, against the local stack; the same suite against dev after every deploy |
   | Published sites | Lighthouse CI + axe on sample sites, budgeted for Indian 4G |
   | Infra | `terraform fmt/validate`, tflint, Trivy config scan, `plan` posted on every PR |
   | Security | A suite proving cross-tenant access fails on every endpoint |
   | Ops | Runbook scripts dry-run in CI; alert definitions validated (Terraform), each naming a runbook that exists; drills in dev (§12.2) |
   | Mutation (weekly) | PIT (Java), Stryker (TS); an agent writes tests for survivors (K&A #37) |
   | Real devices (before go-live) | BrowserStack or LambdaTest (Student Pack, one year): the CMS on real Android and iOS browsers |
   | Load (before go-live) | k6 against the Caddy box |
   | Production | Synthetic checks and the canary site (§11.6): the last test layer |

2. **Formatting and lint:** Spotless (Java), Prettier + ESLint (TS), shellcheck, all run by
   `check` and a lefthook pre-commit hook (one binary, cross-platform).

## 9. Environments and cloud accounts

1. **Three environments:**

   | Env | Where | Data | Deploys | Domain |
   |---|---|---|---|---|
   | local | Laptop | Seed | `mise run dev` | localhost |
   | dev | AWS dev account (FIXED: a separate credit account), same Terraform modules, smallest sizes | Synthetic only, never prod data | Every merge to `main`, automatically | Its own domain (FIXED "possibly"; name OPEN; first year free through the Student Pack, §19.2) |
   | prod | AWS prod account (FIXED: one long-lived account) | Customers | Promoted from dev by you | selfsite.in |

2. **No AWS Organization.** Both accounts stay standalone. Becoming a management account
   reset an account's credit expiry, and joining another organization loses that month's
   credits (AWS-COMMAND-CENTER `docs/LESSONS.md`). Without one there are no SCPs and no
   Identity Center account access (account instances don't support permission sets), so
   the guardrails below are per account.
3. **Human access:** root users have hardware keys, no access keys, break-glass only. You
   have one IAM user per account with hardware-key MFA; the CLI uses `aws login` (short-lived
   credentials from your console sign-in, AWS CLI ≥ 2.32), so no long-lived keys on the
   laptop. Named profiles `selfsite-prod` and `selfsite-dev`, never `default` (that's the
   unrelated work account).
4. **Agent and CI access:** IAM roles only (K&A §5): `agent-readonly` in prod, `agent-dev`
   in dev; GitHub OIDC roles for CI (read-only plan, image push, dev deploy). The prod
   deploy role trusts only the `promote` workflow on `main` (§10.6).
5. **Warden monitors both accounts** through its existing role pair (`./w account add`,
   operator-run).
6. **Day-one guardrails per account** (free or near-free):
   - AWS Budgets at several thresholds + Cost Anomaly Detection.
   - A CloudTrail trail to S3, kept 1 year (CERT-In asks for 180 days in India, §13.4).
   - IAM Access Analyzer (external access), account-wide S3 Block Public Access, EBS
     encryption by default, IMDSv2 as the account default.
   - **Region lock without SCPs:** an IAM policy denying everything outside `ap-south-1` and
     `us-east-1` (ACM for CloudFront, billing), attached to every human, agent and CI role.
     The same policy denies `ec2:ReleaseAddress` on the Elastic IP (DNS.md).
   - EventBridge rules for sensitive events (root sign-in, IAM changes, CloudTrail stopped,
     a security group opened to the world) → alert (§11.8).
7. **Terraform state:** a bootstrap stack per account creates a versioned, encrypted S3
   bucket with S3-native locking (`use_lockfile`). One state per env, shared modules.
8. **Tagging:** `project`, `env`, `component`, `managed-by=terraform`, so cost splits per
   component.
9. **Google Cloud, two projects:** `selfsite-auth` (OAuth, no billing, FIXED) and
   `selfsite-ai` (Vertex AI, billing with a budget alert and quota caps). Dev uses its own
   OAuth client and AI key.
10. **Dev costs:** dev runs on credits; Warden already tracks credit expiry. `mise run
    dev-env down|up` parks it when not needed.
11. **LATER (cost):** GuardDuty, Security Hub, AWS Config.

## 10. Delivery pipeline

1. **GitHub plan.** On a private repo, GitHub Free has **no protected branches or
   rulesets**; GitHub Pro adds them. **The user has the GitHub Student Developer Pack
   (2026-11-04), which includes GitHub Pro** while they're a verified student (§19.2), so
   this costs nothing for now. Keep the repo under the personal account: Pro doesn't cover
   an organization (that needs Team). Deployment approvals (required reviewers) on private
   repos need Enterprise, so prod approval works as in #6 instead.
2. **Trunk-based:** `main` is always deployable; short branches; a PR for every change, even
   solo; squash merges; Conventional Commits. Branch protection on `main`: required checks,
   linear history, no force-push, and the agents' bot can't merge.
3. **Every PR:** `mise run check` (lint, unit, integration, architecture, contract, e2e on
   the compose stack), docs CI (§3.5), gitleaks, Trivy, a `terraform plan` comment, and a
   CMS/admin preview with Playwright screenshots so you can review UI on your phone (K&A #51).
4. **On merge — build once:** images tagged by git SHA, deployed by digest, never `latest`;
   an SBOM and a Trivy scan per image; built on arm64 runners. Registry: Docker Hub or ECR
   (open, PLAN "left for during the build").
5. **Auto-deploy to dev,** then the e2e suite against dev, signing in with a real OTP read
   from a Testmail inbox (Student Pack). A red dev blocks promotion.
6. **Promote to prod = one tap.** A `promote` workflow (run from the GitHub app) checks that
   the actor is you and that dev passed for that exact digest, then deploys it. Release
   notes are drafted for you.
7. **Prod deploy, fully automated:**
   1. RDS snapshot, then Flyway migrate (expand-only, #9).
   2. Start the new container on the spare port; wait for readiness.
   3. Caddy switches its upstream (blue/green on the one box: no downtime); the old
      container drains and stops.
   4. Ten minutes of post-deploy checks: error rate, latency, the canary publish (§11.6).
   5. **Any check fails → automatic rollback** to the previous digest, P2 alert, issue with
      the logs. Safe because migrations are expand/contract.
   6. The result goes to Warden and New Relic (deploy markers, so an error jump lines up
      with its release), a GitHub release and your
      push channel.
8. **Patching doubles as the recovery drill.** AL2023 pins its repository version, so plain
   `dnf-automatic` misses new releases: a daily timer runs `dnf upgrade --releasever=latest
   --security`. Weekly at 03:30 IST an instance refresh moves the box onto the latest AL2023
   arm64 image: the new box boots, restores from S3, takes the Elastic IP, the old one ends.
   The "box died" path runs every week, so it's known to work.
9. **Migrations forward-only, expand/contract:** add → deploy → backfill → remove in a
   later release. Never a destructive migration in the release that stops using the column.
10. **Lambdas:** published versions + a `live` alias; deploy moves the alias, rollback moves
    it back.
11. **Infra:** plan in the PR, apply by you, never console clicks. Weekly `terraform plan`
    in CI reports drift. **Agents never** apply, deploy, touch prod credentials or merge.
12. **Versioned contracts:** template packages by path version (`templates/x/1/`), the
    content JSON carries a schema version, the API is additive-only unless versioned.
13. **Changelog:** release-please from Conventional Commits; an agent writes the
    customer-facing version (K&A #44).

## 11. Monitoring and observability

FIXED (user, 2026-11-04): every detail is logged and monitored; all ops and monitoring are
easy to reach. FIXED: Warden stays, for monitoring only. **AGREED (user, 2026-11-04):
Warden + New Relic, split as in #1. No Sentry.**

1. **The split, with Warden as the front door:**

   | | Warden | New Relic |
   |---|---|---|
   | Watches | Servers and money: AWS resources, the box's host and containers (outpost), RDS, Lambda, SES and S3 via CloudWatch, cost and credits | The inside of the app: each API endpoint, request traces, logs, errors, the CMS and admin in owners' browsers |
   | Does | Headline tiles, **the one alert inbox**, the push channel, actions, the phone app | Deep dives: one request step by step, log search, stack traces |
   | You open it | Daily | Only from a link in Warden, to dig into one problem |

   A Warden `newrelic` plugin reads New Relic's API (NerdGraph, NRQL queries) for the
   headline numbers: error rate, response time, throughput, open errors, CMS load time,
   data ingested this month. They show as tiles on Warden's selfsite page and in the phone
   app, each linking into New Relic. New Relic's alerts arrive in Warden by webhook and go
   out through the same push channel as Warden's own. Warden has no alerting today, so the
   plugin, the alert inbox and the push are new Warden work, done in AWS-COMMAND-CENTER
   under its own rules.
2. **Signals:**

   | Signal | From | Goes to | Kept |
   |---|---|---|---|
   | Traces | API (OpenTelemetry) | New Relic | New Relic's retention |
   | App metrics: rate, errors and latency per endpoint, plus business metrics (#5) | API | New Relic; headline ones as Warden tiles | New Relic's retention |
   | App logs: JSON with trace ID, request ID, site ID, user ID; never emails, OTPs, tokens or cookies | API, scheduled jobs | New Relic (linked to traces and errors) + S3 archive in `ap-south-1` | Archive 1 year (CERT-In: 180 days in India) |
   | Edge logs | Caddy access log and TLS events | S3 archive in full; New Relic gets errors, slow requests and a sample (#3) | Same |
   | Errors, grouped by release | API, CMS and admin (browser errors too) | New Relic errors inbox | New Relic's retention |
   | Browser experience | CMS and admin: page loads, JavaScript errors, slow screens on owners' phones | New Relic browser agent | New Relic's retention |
   | Infra metrics | Outpost (host, containers), CloudWatch via Warden's plugins | Warden's VictoriaMetrics | 90 days |
   | Build and media Lambdas | CloudWatch Logs (retention set, never "never expire"); outcomes reported by the API, which owns them | Warden's Lambda plugin; New Relic through the API | CloudWatch retention |
   | Audit trail: who did what | API: admin and owner actions | MySQL | Per policy (OPEN) |
   | Synthetic checks | Upptime, canary site, login probe (#6) | Warden + your push channel | 90 days |
   | Security events | CloudTrail, EventBridge rules | S3 + Warden's alert inbox | 1 year |
   | Cost | AWS billing, Vertex, Java's token meter | Warden | — |

3. **Instrumentation and shipping:**
   - **OpenTelemetry, not New Relic's own agents** (FIXED principle: swappable). The API
     runs the OpenTelemetry Java agent and sends OTLP to New Relic's endpoint; moving to
     another backend later is an endpoint and key change. The one New Relic-specific piece
     is the browser agent in the CMS and admin, behind a small wrapper.
   - **One collector on the box:** the OpenTelemetry Collector receives the API's traces,
     metrics and logs and tails Caddy's logs. Everything goes to the S3 archive; New Relic
     gets everything except low-value lines (health checks; successful static-file hits on
     customer sites are sampled). A disk buffer keeps data through an outage; a memory limit
     keeps it small on the 2 GB box.
   - **Privacy:** visitor IPs are truncated before leaving the box; full IPs stay only in
     the India archive. Session replay, if turned on, masks all text and inputs, since the
     CMS shows customer content.
   - **Ingest stays free:** New Relic's permanent free tier is 100 GB of data a month and
     one full user; the Student Pack offer sits on top of it, so nothing breaks when that
     ends. A Warden tile shows ingest this month, with a P2 alert at 70%. The account stays
     on the free plan without a card, so it can't bill by surprise. Its data region (US or
     EU) is chosen once, at sign-up.
4. **Health endpoints:** liveness and readiness for deploys, plus a deep `/internal/status`:
   database, S3, SES sending status and quota, Vertex reachable, last successful build,
   certificate-store and domain-list sync age, each scheduled job's last success. Warden's
   plugin reads it; the admin PWA shows it.
5. **Business metrics from day one:** logins by method and failures, OTPs sent and failed,
   publishes (count, duration, failures), uploads and storage per site, AI calls, tokens and
   spend against the daily ceiling, trial starts and expiries, active sites, custom domains
   by status, 4xx/5xx by route, rate-limit hits.
6. **Synthetic checks:**
   - **External probe** from outside AWS on selfsite.in, app.selfsite.in, API health, the
     canary site and a canary custom domain. It also watches Warden. **Upptime** fits:
     GitHub Actions in a small public repo check every 5 minutes, open an issue on downtime
     and publish the status page (§13.5) on GitHub Pages. Free on public repos, not tied to
     the Student Pack.
   - **Login probe:** hourly, the canary owner signs in with a real email code sent to a
     Testmail inbox (Student Pack). Proves Clerk sign-in and Java's session exchange end to
     end. Check that Clerk's bot protection lets the probe through.
   - **Canary site:** a hidden site we own, republished hourly by a scheduled job through
     the normal publish path; a probe checks the new timestamp is live within minutes.
     Proves build → S3 → box → Caddy end to end.
   - **Dead man's switch:** every scheduled job, and Warden itself, pings a heartbeat check
     (Healthchecks.io free plan) on success. Silence = alert. Catches "the job quietly stopped".
   - Upptime and Healthchecks.io alert you **directly**, not through Warden, because they
     also watch Warden.
7. **Alerts and dashboards as code:** New Relic alert conditions and dashboards are
   Terraform (`infra/terraform/modules/monitoring`, New Relic's official provider), applied
   by you like the rest. Warden's server alert rules live in AWS-COMMAND-CENTER. Every
   condition has a severity and a runbook link (CI checks the runbook exists). Dashboards:
   Overview, Edge, Publishing, Tenants, AI and cost, Jobs.
8. **Severity and routing:**

   | Sev | Meaning | Examples | Goes to |
   |---|---|---|---|
   | P1 | Customers affected now | Sites or CMS down, sign-in broken, data at risk, security event | Warden's inbox → loud push (can break through Do Not Disturb) + agent triage starts (§13.1) |
   | P2 | Will affect customers if left | Disk at 85%, certificate renewal failing, bounce rate rising, a job missed, a release rolled back, New Relic ingest at 70% | Warden's inbox → push, quiet hours respected |
   | P3 | Worth knowing | Rate-limit spikes, slow builds, cost trend | Warden's inbox → morning brief only |

9. **Push channel:** ntfy (Android app with priority levels; self-hosted on the Warden hub
   or ntfy.sh) or a Telegram bot (OPEN). Email as the fallback. **Noise rule:** an alert that
   fires twice without anyone acting is fixed or deleted (weekly hygiene).
10. **SLOs** (targets yours to set): sites available, CMS available, publish time p95, OTP
    delivery time, tracked with New Relic's service levels. A monthly report in the brief; when a target is missed, the next nights go
    to reliability work instead of features.

## 12. Operations automation

1. **Self-healing:**

   | Condition | Automatic response | You hear |
   |---|---|---|
   | API container crashes | Restart policy | P1 after 3 restarts in 10 min |
   | Box unhealthy or gone | Auto Scaling replaces it; boot restores certs, sites and the domain list from S3, re-attaches the Elastic IP (FIXED design) | P2 "box replaced"; P1 if not back in 10 min |
   | A release fails its checks | Automatic rollback (§10.7) | P2 + issue |
   | Disk ≥ 80% | Cleanup: builds beyond current + previous, unused images, old journal | P2 if still ≥ 85% |
   | Memory pressure (2 GB box) | JVM heap capped, swap file, OOM → container restart | P2 |
   | Certificate failing for a customer domain | Caddy retries; after 24 h the domain-recheck job emails the owner the fix steps | P3; P1 for `*.selfsite.in` |
   | A customer's DNS moved away | Recheck job marks the domain and emails the owner | P3 |
   | SES bounces or complaints | SES suppression list; rates tracked well before SES's review thresholds | P2 (reminders and notices depend on SES; sign-in codes are Clerk's) |
   | AI spend over the daily ceiling | AI switches off (FIXED) | P2 |
   | Vertex errors | Circuit breaker; the CMS shows "AI unavailable" cleanly | P2 |
   | RDS storage, CPU, connections | Storage autoscaling on; alarms on the rest | P2 |
   | Build Lambda failure rate up | Failing site IDs collected | P2 |
   | A scheduled job missed | Dead man's switch | P2 |

2. **Scheduled ops jobs** (all code, each with a heartbeat and a line in the brief):

   | Job | When | Does |
   |---|---|---|
   | Trial reminders, expiry, deletion, name cooldown, credit reset, domain recheck, media cleanup | Per PLAN.md piece 1 | Product rules (FIXED in DECISIONS) |
   | Domain expiry watch | Daily | RDAP/WHOIS lookup for selfsite.in, maverickcreatives.in and every customer domain we hold; alerts at 60/30/7 days |
   | Renewals watch | Daily | Everything in `ops/renewals.yaml` (Zoho, GitHub plan, Claude plan, Google, the dev account's credits); alerts at 30/7 days |
   | Restore drill | Monthly | A scheduled SSM Automation restores the latest RDS point in time to a temporary instance inside prod, runs sanity queries (row counts, newest timestamps), deletes it |
   | Rebuild drill | Monthly, dev | Rebuilds every dev site from database content, proving the S3 builds can be recreated |
   | Box refresh | Weekly | §10.8 |
   | Access review | Monthly | IAM users, roles and key ages; GitHub collaborators and tokens; Google project members → issue |
   | Secret age | Weekly | Keys older than 90 days → issue |
   | Cost report | Daily (brief), weekly (issue) | Spend by tag against budget, AI spend, credits left |
   | Drift | Weekly | `terraform plan` → issue if not empty |
   | Dependencies | Weekly | Renovate or Dependabot grouped PRs; an agent fixes the ones that break |
   | Log archive check | Weekly | An archive object exists for every day; retention rules in place |

3. **Kill switches** in the admin PWA (no deploy needed, audited): AI off, new trials off,
   publishing paused with a banner, uploads off, a site suspended (FIXED: suspend), CMS
   read-only. They turn a scary incident into a toggle.
4. **Ops commands:** every runbook step is `mise run ops:<name>`: `ops:rollback`,
   `ops:restore-db --to "<time>"`, `ops:replace-box`, `ops:suspend-site`,
   `ops:rotate-db-password`, `ops:rebuild-sites`… Each has `--dry-run`, uses your prod
   profile, and writes to the audit trail. The common ones later become Warden buttons.

## 13. Incidents and recovery

1. **Flow:** alert → **agent triage** (read-only access, within minutes: the alert, New
   Relic's traces, errors and logs, Warden's server view, recent deploys, CloudTrail;
   matches a runbook) → a summary and the runbook command
   on your push channel and in an `incident` issue → **you run the command** or flip a kill
   switch → status page and customer notice from templates (the agent drafts, you send) →
   resolved → the agent drafts the postmortem from the issue timeline → you edit → actions
   become issues, lessons go to the learnings ledger.
2. **Runbooks:** `docs/runbooks/<name>.md` with front matter (alerts it handles, severity,
   scripts, last drilled). Steps call scripts; no copy-paste commands. Drilled in dev; a
   runbook not drilled for 6 months shows up in the weekly hygiene issue.
3. **Starter set:**

   | Scenario | First response (automatic) | Then (runbook) |
   |---|---|---|
   | Box dies | Auto Scaling replaces it | Check it came back; read the cause |
   | Bad release | Automatic rollback | Fix forward in a PR |
   | Bad migration or data bug | Kill switch (read-only) | `ops:restore-db` to a new instance at a point in time, switch the host in config |
   | One site's data deleted by mistake | — | Restore to a temporary instance, copy that site's rows back (script) |
   | S3 builds lost | — | `ops:rebuild-sites` from database content |
   | SES paused | Sign-in unaffected (Clerk sends codes); reminders queue | Fix the cause; switch sender if a second one exists (§16.2) |
   | Clerk down | Signed-in owners keep editing (Java's own sessions); new sign-ins wait | Status page note; nothing to run |
   | Google sign-in broken | Email codes still work | Check the OAuth client (in Clerk) and the consent screen |
   | Vertex down or over budget | AI off cleanly | Wait, or switch provider (behind the interface) |
   | Credentials leaked | — | Rotate script, CloudTrail review, CERT-In clock (§13.4) |
   | Phishing or abuse on a customer site | — | Suspend switch, takedown runbook |
   | Owner lost their login | — | Admin login switch (FIXED: easy from our side) |
   | selfsite.in domain at risk | Expiry watch | DNS.md §1 protections (FIXED) |
   | Warden down | External probe + heartbeat alert you directly | Warden's own runbooks; selfsite unaffected |
   | Your laptop lost | — | Break-glass (§15.7) |
   | Account compromise | — | LATER: custom dumps with Object Lock (FIXED as later) |

   Not included on purpose: a flood/DDoS runbook (REJECTED in DECISIONS; the risk is accepted).
4. **Legal clocks** (Claude's reading of public sources; confirm with a lawyer or CA):
   - **CERT-In directions (2022):** report specified cyber incidents within **6 hours** of
     noticing; keep ICT system logs for **180 days within India** (why logs archive to
     `ap-south-1` for a year).
   - **DPDP Rules 2025** (fiduciary duties apply from **13 May 2027**): on a personal-data
     breach, tell the Data Protection Board and affected people without delay, with a full
     report within **72 hours**.
   The incident template carries both timers.
5. **Status page** hosted outside AWS: Upptime's page on GitHub Pages at `status.selfsite.in`
   (§11.6), linked from the CMS and emails. Incident notes are added from templates.
6. **Postmortems:** blameless template (timeline, impact, cause, what worked, actions),
   drafted by an agent, finished by you.

## 14. Customers and support

Building a CRM is out of scope (FIXED). Customer management here is the admin PWA, the
automation around each stage, and the support inbox.

1. **Lifecycle:**

   | Stage | Automatic | Agent | You |
   |---|---|---|---|
   | Provision (agency customer) | Welcome email; domain checks from DNS.md §4 run and report | — | Create the customer in admin, set tier and domain plan (FIXED: by hand) |
   | Trial | Reminders, expiry, 30-day retention, deletion, name cooldown (FIXED) | — | Extend by hand on request (FIXED) |
   | Active | Storage and credit usage visible; owner emailed at 80% and 100% of quota | — | — |
   | Domain | Expiry watch for domains we hold; DNS recheck emails the owner the fix steps | — | Renewals we pay for |
   | Payment (offline, FIXED) | Renewal reminders | — | Record the payment and tier dates in admin (amounts as you set them) |
   | Support | Ticket context attached (#2) | Drafts the reply | Send |
   | Data request | Export/delete jobs, logged | — | Approve |
   | Leaving | Same path as trial expiry; export offered | — | — |

2. **Support inbox:** support@ on Zoho (FIXED: Zoho Mail is set up). An agent reads new mail,
   drafts replies (K&A #45) from the help centre, runbooks and a read-only, audited support
   view of that customer's account; you send. A **"Report a problem" button** in the CMS
   attaches site, build, browser and recent error IDs, so there's no back-and-forth.
3. **Help centre:** markdown articles in the repo, published with the selfsite.in site
   (wherever it lives, PLAN blocker). The support agent proposes a new article when a
   question repeats.
4. **Customer emails are code** (`packages/emails/`): OTP, welcome, trial reminders, expiry,
   domain problem, quota, incident notice, data export ready. Rendered in tests, previewed
   in Mailpit, sent from `notify.selfsite.in` (DNS.md §6 proposal).
5. **Data rights:** export and delete are scripted jobs (admin button at launch, self-serve
   later), ready before DPDP's May 2027 date.
6. **Abuse:** abuse@ address, the takedown runbook, the suspend switch.
7. **Customer health in admin and the weekly brief:** trials ending, domains expiring, sites
   down, owners inactive for a long time. What to do about them stays yours.

## 15. Security, access and continuity

1. **Baseline:** OWASP ASVS Level 2 for the API, CMS and admin.
2. **Private repo (FIXED).** GitHub's secret scanning and CodeQL are paid add-ons on private
   repos, so free stand-ins: gitleaks (pre-commit + CI), Semgrep CE and SpotBugs with
   FindSecBugs (Java), ESLint security rules, Dependabot alerts (free on private repos) or
   OSV-Scanner, Trivy for images and Terraform. Actions pinned by SHA; pnpm
   `minimumReleaseAge`; Maven Enforcer + BOMs. No account IDs, ARNs or IPs in committed files.
3. **App:** server-side sessions, `__Host-` cookie, CSRF, Java as the gatekeeper for content,
   per-identity limits, audit log (decided or proposed in AUTH.md), a strict CSP on the CMS
   and admin, no PII or tokens in logs (a test checks the log output).
4. **Accounts:** two hardware keys (one spare) on AWS root, GitHub, both Google accounts, the
   registrar, Zoho, the container registry. A password manager with a shared vault for the
   second owner.
5. **Reviews:** the nightly reviewer runs `/security-review` on any PR touching auth, media
   upload, domains or admin; you read it before merging.
6. **Estate inventory** (`docs/ops/estate.md`): every account, domain and service, its owner,
   and how to recover access. No secrets or IDs (those live in the password manager).
7. **Break-glass:** recovery codes sealed offline; two owners on every account; a one-page
   "if I'm unavailable" guide for the second owner: what runs by itself, the kill switches,
   how to read Warden, who to contact.
8. **One switch pauses every agent:** a repository variable (`AGENTS_PAUSED`) that every
   agent workflow and the nightrun driver check first.

## 16. Future-proofing

1. **Modular monolith:** one Java deployable split into feature modules (auth, sites,
   content, media, publish, ai, domains, trials, admin, ops) with enforced boundaries. Spring
   Modulith verifies them and draws module docs; ArchUnit is the lighter option. Splitting a
   module out later = moving a folder. This is also what lets agents work in parallel (K&A #50).
2. **An interface at every external dependency** (FIXED principle), each with a local
   adapter (§6.6) and an outage plan (§13.3): sign-in provider (Clerk; Java keeps its own
   users and sessions, so a switch means a new sign-in front only), AI provider, email sender (SES / Mailpit; a
   second provider as a hot standby is OPEN), object storage, build runner, DNS lookups,
   notifications, payments (Razorpay later).
3. **Config over code:** tiers, credits, rollback depth, trial length and the kill switches
   (§12.3) are data.
4. **Opaque IDs** (UUIDv7 or ULID) in URLs and the API, so tenants can't be enumerated.
5. **Tenant scoping everywhere:** every tenant-owned table carries `site_id`; data access
   requires it; the §8 security suite proves it.
6. **Same image everywhere;** environment values from SSM / env vars. Keeps the parked OCI
   move a config change.

## 17. Development workflow

1. **Specs before code, small phases,** each ending with `mise run check` green. nightrun
   builds them unattended (K&A §8).
2. **Definition of done** (the PR template):
   - Tests added; docs or a decision updated; migration is expand/contract; no secrets;
     screenshots for UI changes.
   - **Operability:** if it can fail at runtime, it has metrics, logs, an alert and a runbook;
     admin can see its state; risky features have a kill switch; scheduled jobs have a
     heartbeat.
3. **Checklists** (`docs/checklists/`):
   - **New endpoint:** authentication, site-membership authorization, input validation,
     per-identity rate limit, audit log for admin actions, OpenAPI updated.
   - **New AWS resource:** tags, encryption, least-privilege IAM, cost note,
     `prevent_destroy`?, backup?, alarm?
   - **New external dependency:** interface + local adapter, outage runbook, cost cap.
   - **New scheduled job:** heartbeat, idempotent, a line in the brief.
   - **New alert:** severity, runbook, unit test.
   - **New customer email:** template in `packages/emails`, rendered test.
   - **Release:** changelog, migration plan, rollback digest noted (automatic, §10.7).
   - **Go-live:** SES production access, consent screen in production, CAA records, budgets,
     restore drill, box-replacement drill and rollback drill each done once by you, status
     page, support inbox and help centre, legal pages.
   - **Customer onboarding:** the domain checks from DNS.md §4.
4. **Agent tooling:** `CLAUDE.md` as a router at the root and per app; `.claude/settings.json`
   (permissions allowlist; hooks that format after edits and block edits to applied
   migrations and prod config); few project MCPs (each costs context): LikeC4, Figma or
   Penpot, shadcn, Playwright, local MySQL read-only, Terraform, AWS Documentation. Details
   and the knowledge MCP: K&A §2 and §5.

## 18. The agent workforce

1. **Roles:** each agent has a charter file (`.claude/agents/<name>.md`: job, inputs, outputs,
   permissions, when to stop):

   | Agent | Trigger | Runs on | Output | Your gate |
   |---|---|---|---|---|
   | Builder | A spec or an `agent-ready` issue | nightrun box | Branch + PR | Merge |
   | Reviewer | PR opened, nightly | Actions | Review comments (code, security, decision conformance) | — |
   | Docs keeper | Nightly | Actions | Drift-sweep PR (generated docs, stale references) | Merge |
   | CI fixer | `main` or a PR goes red | Actions | Fix PR | Merge |
   | Dependency fixer | An update PR fails | Actions | Fix PR | Merge |
   | Test hardener | Weekly | nightrun box | Tests for mutation survivors | Merge |
   | Ops triage | P1 or P2 alert | Actions, read-only prod role | Incident issue + the runbook command | You run it |
   | Support drafter | New support mail | Scheduled | Draft replies, help-article proposals | You send |
   | Postmortem writer | Incident closed | Actions | Draft postmortem | You edit |
   | Release notes | Release | Actions | Customer-facing notes | You publish |
   | Chief of staff | 7 a.m. daily, weekly | Scheduled routine | Morning brief, weekly hygiene issue | — |

2. **Rules for every agent:** its own identity, never yours (K&A §5); a week in report-only
   mode before it may open PRs; spend and attempt budgets per run; the run ledger records
   what it produced and whether you accepted it, so weak agents get fixed or retired; one
   switch pauses all of them (§15.8).
3. **How far unattended goes:** the four-stage ladder in K&A §8.
4. **Where it leads:** customer-facing bots organised as a company, autonomy earned per
   action, a never-stale knowledge base: [`AI-COMPANY.md`](AI-COMPANY.md).

## 19. What to buy or sign up for

The user has the **GitHub Student Developer Pack** (2026-11-04).

1. **Rules for using Student Pack offers** (they're temporary, and selfsite is a commercial
   product):
   - **Check each partner's terms first.** Some licences are for educational,
     non-commercial use only; GitHub says partner terms are the partner's, not GitHub's.
   - **Never in the production request path.** Fine for dev, CI, testing, monitoring
     extras and your own tools; nothing a customer's request waits on.
   - **Every offer has an end date and a replacement**, both in `ops/renewals.yaml`; the
     renewals watch (§12.2) alerts 30 days ahead. GitHub's student verification lasts
     2 years, then you revalidate; many partner offers last 6–24 months.
   - **Swappable** (FIXED principle): when an offer ends, switching is a config change.

2. **What the pack covers:**

   | Need | Student Pack offer | When it ends |
   |---|---|---|
   | Branch protection on the private repo, more Actions minutes (§10.1) | **GitHub Pro**, while a student | Pay for Pro |
   | Cloud dev machine with the devcontainer (§6.9) | **GitHub Codespaces**, Pro level | Laptop only, or pay per hour |
   | App monitoring: traces, logs, errors, browser (§11) | **New Relic**, free while a student | New Relic's permanent free tier (100 GB/month, 1 full user); OpenTelemetry keeps any other backend a config change |
   | Password manager + agent token injection (K&A #25) | **1Password**, free for 2 years incl. developer tools. Check that sharing with the second owner and service accounts (for CI and nightrun) are included | 1Password paid, or Bitwarden |
   | Sign-in (AGREED 2026-11-04, DECISIONS "Owner login") | **Clerk** Pro, while a student | Clerk's free plan (50,000 monthly users) or Pro |
   | Real email-code sign-in in tests and the login probe (§10.5, §11.6) | **Testmail** Essential, while a student | SES receiving into S3 |
   | Real-device testing before go-live (§8) | **BrowserStack** Automate Mobile or **LambdaTest** Live, 1 year | Playwright's device emulation |
   | The dev environment's own domain (§9.1) | **Name.com** (.dev, .app, .software…) or **Namecheap** (.me), first year free | Normal renewal (renewals watch) |
   | Code completions for you in VS Code | **Copilot Student** (unlimited completions; chat and agent use limited) | Optional |
   | Coverage on PRs, code-health hotspots | **Codecov**, **CodeScene** (private repos) | Optional; CI's own coverage gates |

3. **In the pack but not used, and why:**
   - **Datadog** (2 years): New Relic covers the same ground, needs no extra agent on the
     2 GB box, and has a usable free tier after the student offer; Datadog's keeps data a day.
   - **Sentry** (1 year, renewable): New Relic's errors inbox, browser errors and session
     replay cover it (AGREED: no Sentry). Revisit for the CMS only if New Relic's browser
     error detail proves thin.
   - **Doppler**: secrets stay in SSM (FIXED) plus the vault; a third store adds drift.
   - **LocalStack** (free licence): the dev AWS account covers real AWS (§6.7). Worth
     picking up only if offline Lambda tests are ever needed.
   - **DevCycle, ConfigCat** (feature flags): kill switches must work when outside services
     are down, so they live in our own database (§12.3).
   - **Stripe** (Razorpay, FIXED), **Azure, Heroku, MongoDB,
     Appwrite** (not in the stack), **JetBrains** (VS Code only), **Notion** (K&A recommends
     no second copy of decisions), **Termius** (no SSH, SSM only).

4. **Still to buy or set up:**

   | Item | Why | Free? |
   |---|---|---|
   | 2× hardware security keys | Root and owner accounts | No |
   | Figma Professional, 1 Full seat, or Penpot | Hi-fi design + MCP | Penpot: yes |
   | Upptime (public repo + GitHub Pages) | External probe + status page (§11.6) | Yes |
   | Healthchecks.io | Dead man's switch for jobs and Warden | Free plan |
   | ntfy or a Telegram bot | Alert push | Yes |

Dropped from the first draft: IntelliJ IDEA Ultimate (VS Code only), LocalStack, and paying
for GitHub Pro while the pack lasts.

## 20. Decisions this proposal needs from you

1. ~~**GitHub Pro** for branch protection.~~ Covered by the Student Pack (§19.2). Still to
   confirm: the repo lives under your personal account, not an organization.
2. ~~**Monitoring home.**~~ Warden + New Relic, no Sentry (AGREED 2026-11-04, §11).
3. **Build a walking skeleton first** (§21 phase C): recommended.
4. **Alert push:** ntfy (recommended) or Telegram.
5. **Figma or Penpot · LikeC4 · Spring Modulith or ArchUnit · the dev domain's name.**
6. Keep / change / drop on the numbered items.

## 21. Setup order

1. **A. Accounts and safety (before any code):** hardware keys, password manager, GitHub
   plan and the agents' bot, per-account guardrails and IAM (§9), Terraform bootstrap, GCP
   projects, both accounts added to Warden, a New Relic account (free plan, no card, region
   chosen once), Warden's alert inbox and the push channel, heartbeat checks.
2. **B. Repo skeleton:** layout, `mise.toml`, devcontainer, `CLAUDE.md`, the ledger migrated
   (K&A #9), docs tree, PR template and checklists, CI green on empty apps.
3. **C. Walking skeleton, deployed:** a hello-world API, CMS and admin through the whole
   pipeline to dev and prod: promote, blue/green, automatic rollback, box refresh; traces,
   logs and errors in New Relic, tiles and alerts in Warden; the first alerts with
   runbooks; the canary site. **Before any
   feature.** Ops built on an empty app is cheap; retrofitted later it's expensive, and every
   feature after this inherits it.
4. **D. Features** in PLAN.md's order, each meeting the definition of done (§17.2).
5. **E. Go-live:** the go-live checklist, including the drills done once by you.
6. **F. After launch:** ops triage and support agents leave report-only mode; SLO reports;
   GuardDuty and the rest of §9.11 when the budget allows.

## Sources

- [GitHub Student Developer Pack (offers)](https://education.github.com/pack) · [Student Pack terms](https://docs.github.com/en/education/about-github-education/github-education-for-students/github-terms-and-conditions-for-the-student-developer-pack)
- [New Relic free tier](https://newrelic.com/info/blog/decision-guide/what-is-new-relic-s-free-tier-and-what-does-it-include-a5fcbb) · [New Relic OTLP endpoints](https://docs.newrelic.com/docs/opentelemetry/best-practices/opentelemetry-otlp.md)
- [GitHub: managing protected branches (plan availability)](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub changelog: arm64 standard runners in private repositories (2026-01-29)](https://github.blog/changelog/2026-01-29-arm64-standard-runners-are-now-available-in-private-repositories)
- [AWS: `aws login` for console credentials (2025-11)](https://aws.amazon.com/about-aws/whats-new/2025/11/console-credentials-aws-cli-sdk-authentication/)
- [IAM Identity Center: organization vs account instances](https://docs.aws.amazon.com/singlesignon/latest/userguide/identity-center-instances.html)
- [AL2023: managing package and OS updates](https://docs.aws.amazon.com/linux/al2023/ug/managing-repos-os-updates.html) · [Applying security updates in place](https://docs.aws.amazon.com/linux/al2023/ug/security-inplace-update.html)
- [CERT-In directions 2022, overview (PSA Legal)](https://psalegal.com/new-cert-in-directions-overview-and-implications/)
- [DPDP Rules 2025 notified (Mondaq)](https://www.mondaq.com/india/data-protection/1708164/digital-personal-data-protection-rules-2025-notified)
- [LikeC4](https://likec4.dev/) · [Penpot MCP](https://help.penpot.app/mcp/) · [draw.io MCP](https://github.com/jgraph/drawio-mcp)
- [LocalStack: Community edition ended, auth token required](https://blog.localstack.cloud/the-road-ahead-for-localstack/)
- [HashiCorp Terraform MCP](https://github.com/hashicorp/terraform-mcp-server) · [AWS Documentation MCP](https://awslabs.github.io/mcp/servers/aws-documentation-mcp-server)
