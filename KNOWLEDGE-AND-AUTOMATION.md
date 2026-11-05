# Knowledge, agent access and automation — proposal (2026-11-04)

Companion to [`ENGINEERING-SETUP.md`](ENGINEERING-SETUP.md): it holds the detail behind that
doc's §3 (documentation and knowledge), §17.4 (agent tooling) and §18 (the agent workforce).
The end state it builds toward (customer-facing bots, the company-wide knowledge base) is in
[`AI-COMPANY.md`](AI-COMPANY.md). **Everything here is PROPOSED
(Claude) unless marked otherwise.** Items are numbered so each can be kept, changed or
dropped on its own.

The problem it solves (user, 2026-11-04): a decision gets made or changed, it isn't tracked
properly, and the next agent either builds on the old architecture or rediscovers the change
and infers it again. Both waste a session. The second goal: agents that work unattended
(overnight, and in time whole features), with setup done once, up front.

---

## 0. Why decisions get lost today

1. **Old and new text sit side by side.** DECISIONS.md, AUTH/MEDIA/DNS, SCRATCHPAD.md and
   OCI.md all state architecture. A changed decision is edited in one place; the old wording
   survives in another, and an agent can't tell which one wins.
2. **Nothing links a decision to what it affects.** When "OCI deferred" landed, nothing
   listed the docs, specs and (later) code that assumed OCI.
3. **Agents read code before decisions.** Code shows the *old* architecture until someone
   rewrites it, so a cold agent infers from the code.
4. **Decisions made in chat die with the chat.** Nothing turns "let's go with B" into a
   record unless someone remembers to.
5. **No difference between a decision and a finding.** "We use Lambda for builds" (yours to
   make) and "Testcontainers on Windows needs X" (a fact an agent discovered) are mixed.

The fix is not a smarter memory. It's **one ledger, one generated view of the current truth,
links from each decision to what it affects, and automation that keeps them in step.**

## 1. The decision ledger (source of truth)

1. **One file per decision** in `docs/decisions/`, never edited once agreed: a change is a
   new decision that *supersedes* the old one. Git keeps the history; the ledger keeps the
   *reason*.

   ```yaml
   ---
   id: D-0031
   title: Astro builds run on Lambda
   status: fixed          # open · proposed · agreed · fixed · later · rejected · superseded
   date: 2026-10-19
   decided_by: user       # user | claude (claude may only write open/proposed)
   area: [publishing]
   supersedes: []
   superseded_by: null
   affects:               # files this decision governs (globs)
     - functions/site-builder/**
     - infra/terraform/modules/lambdas/**
     - docs/architecture/publishing.md
   enforced_by:           # tests that fail if the decision is broken (optional)
     - apps/api/src/test/java/in/selfsite/arch/PublishRulesTest.java
   ---
   **Decision.** One or two sentences.
   **Why.** …  **Options considered.** …  **Consequences.** …
   ```

   The status words are the ones already used in AUTH/MEDIA/DNS, plus `superseded`.
2. **Three generated views** (by `mise run decisions`, a small Node script). Agents read these,
   not the folder:
   - `docs/decisions/CURRENT.md`: every fixed/agreed decision that isn't superseded, grouped
     by area, one line each with its ID. Kept small enough to load in full every session.
   - `docs/decisions/OPEN.md`: open questions and proposals waiting on you, oldest first.
   - `docs/decisions/CHANGES.md`: a dated log, e.g. "2026-10-19 · D-0012 → D-0031 · OCI
     deferred; everything stays on AWS". **This is what tells the next agent what changed.**
3. **CI fails if the views are stale** (regenerate and diff), if an ID is reused, or if a
   superseded decision has no `superseded_by`.
4. **Area pages explain *how*; decisions say *what*.** `docs/architecture/publishing.md`
   cites `[D-0031]` instead of restating it. Superseded content is **deleted** from area
   pages (history lives in the ADR and git), not struck through.
5. **Stale-reference lint:** any doc or spec that cites a superseded ID fails CI with
   "cites D-0012, superseded by D-0031". That's the propagation the ledger lacks today.
6. **Decisions become tests where possible** (`enforced_by`): ArchUnit/Modulith rules
   (module boundaries, tenant scoping, no controller→repository), dependency bans (no
   Next.js), Terraform policy checks (region allowlist, tags). An agent can't silently
   build on an old decision if the build fails.
7. **Non-authoritative docs say so.** SCRATCHPAD.md and OCI.md move to `docs/archive/` with
   `authority: none` in their front matter; CLAUDE.md says "never take a fact from
   `docs/archive/`; check CURRENT.md".
8. **Learnings ledger, separate from decisions:** `docs/learnings/L-xxxx.md` with `area`,
   `symptom`, `cause`, `fix`, `verified_on` (date + tool versions). Agents write these
   freely (they're facts, not choices); a weekly job (§6) dedupes and expires stale ones.
   This is where a blocker's resolution lives so the next agent doesn't re-solve it.
9. **One-time migration:** an agent session turns DECISIONS.md and the FIXED/AGREED/OPEN
   items in AUTH, MEDIA, DNS and FRONTEND-CONTENT-MODEL into ledger entries, with a
   conflicts list for you. You review one PR.

## 2. Getting the ledger into every agent's context

10. **SessionStart hook:** loads `CURRENT.md`, the last 14 days of `CHANGES.md` and the
    count of open decisions into every Claude Code session. Phrase: "These override anything
    you read in code or older docs."
11. **Per-file hook:** when an agent edits a file matching an ADR's `affects` glob, a hook
    adds those decisions to its context ("you're editing a file governed by D-0031, D-0044").
    (Check which hook events accept added context in the installed Claude Code version.)
12. **A project MCP server, `maverick-knowledge`** (a ~200-line TS server over the repo
    files, read-only): `current(area)`, `decision(id)`, `changes(since)`, `open()`,
    `learnings(query)`, `state()`. **This is the portable part:** Kiro, Cursor, Claude
    Desktop, claude.ai and nightrun workers all get the same answers through the same tool,
    and the source stays plain markdown in git. Writes go through PRs, never the MCP.
13. **`docs/STATE.md`**: what's done, in progress, next, and known-broken. Every session and
    every nightrun phase updates it at the end (nightrun's docs/handoff phase already does
    the equivalent).
14. **CLAUDE.md shrinks to a router:** commands, the 10 rules that matter, and "read
    CURRENT.md, then STATE.md, then the area page". Procedures move to skills (§3).

## 3. Writing decisions without remembering to

15. **`/decide` skill:** "decide: media stays on CloudFront, no Bunny" → writes the ADR
    (status `fixed`, `decided_by: user`), supersedes the old one, regenerates the views,
    greps `affects` + citations, and fixes or lists every stale doc and spec **in the same
    PR**. One command per decision, from any session.
16. **Decision capture at session end:** a SessionEnd hook runs a cheap model (Haiku) over
    the transcript, looking for decisions you made ("go with B", "fixed", "drop X"), and
    writes drafts to `docs/decisions/inbox/` as `proposed`. The morning brief (§6) lists
    them; `/decide review` accepts, edits or drops each one. Nothing you say in chat gets
    lost, and nothing is fixed without you.
17. **Workers can't decide.** Nightrun and other unattended agents that hit a choice write
    an `open` entry (options + recommendation), stub behind an interface if possible, and
    move on. The run's handoff turns them into `decision-needed` issues.
18. **Answer from your phone:** comment `/decide B` on a `decision-needed` issue in the
    GitHub app → a GitHub Action runs Claude → opens the ADR PR (only for comments by you;
    see §8 #47).
19. **PR check:** a PR touching an `affects` glob must cite the governing decision ID or add
    one ("Decisions: D-0031 unchanged"). Cheap way to force the question "did this change
    the architecture?".

## 4. Task tracking: Jira, Notion, Linear or GitHub

**Recommendation: decisions in the repo, work items in GitHub Issues + Projects, no Jira,
Notion optional as a read-only mirror.**

| | Decisions | Work items | Why |
|---|---|---|---|
| **Repo (markdown + git)** | ✅ source of truth | — | Versioned with the code it governs, works offline and on the nightrun box with no credentials, every tool can read it, portable forever |
| **GitHub Issues + Projects** | links to ADRs | ✅ | Free, same place as PRs ("Fixes #12" closes it), `gh` CLI and GitHub MCP, issue forms, mobile app, Actions triggers |
| Linear | — | alternative | Nicer UI, official MCP; one more system to sync. Worth it with a team, not solo |
| Jira | — | ✗ | Heavy and paid; built for teams with process |
| Notion | ✗ as source | ✗ | A second copy of decisions *is* the drift problem. Fine as a one-way mirror of CURRENT.md for reading on the go |

20. **Labels:** `decision-needed`, `agent-ready`, `blocked`, `needs-review`, `area:*`.
21. **Issue form "Agent task"** with required fields: goal, acceptance criteria, verify
    command, areas, decisions it relies on. An issue missing any of them can't be labelled
    `agent-ready` (an Action checks). This is what makes overnight work safe to queue.
22. **One Project board** with columns: Inbox · Needs decision · Agent-ready · In progress
    (agent) · Review · Done. Agents move cards via `gh`.

## 5. Agent access (set up once, before the build)

From the 2026-11-04 conversation; recorded here so it isn't lost.

23. **Agents have their own identities, never yours:**

    | Area | Identity | Can do |
    |---|---|---|
    | AWS prod | IAM role `agent-readonly` (no AWS Organization, so no Identity Center permission sets: ENGINEERING-SETUP §9.2) (ReadOnlyAccess minus S3 object reads, SSM decryption, secrets) | Look, not touch |
    | AWS dev | `agent-dev` | Anything inside the dev account |
    | GitHub | A bot (GitHub App or machine user `maverick-bot`), this repo only, no admin | Branches, PRs, issues; branch protection blocks merge |
    | Google Cloud | Viewer on `selfsite-ai` | Read quotas, usage, logs |
    | Databases | Local / dev read-only user | Never prod data |
    | Nightrun box | No AWS credentials (IMDS blocked) or a dev-only role; branch-push deploy key | Build a branch |

24. **Profile pinned per project:** `env.AWS_PROFILE=selfsite-agent-ro` in
    `.claude/settings.json` + a PreToolUse hook blocking `aws`/`terraform`/`gcloud` under any
    profile not named `selfsite-agent-*`. **Needed because the laptop's `default` profile is
    the unrelated desk365 work account.**
25. **Tokens in a vault, injected at launch:** `bws run -- claude` (Bitwarden Secrets
    Manager) or `op run -- claude` (1Password); `.mcp.json` only says `${GITHUB_TOKEN}`.
    Nothing secret on disk; the same vault feeds the nightrun box and Actions.
26. **Deny rules:** reading `.env*`, `*.tfstate*`, `*.pem`, `~/.aws/credentials`.
27. **Agents run in a devcontainer** (or WSL2 + Claude Code's sandbox) with a network
    allowlist. The same image is the nightrun box's toolchain, so "works on the laptop,
    fails at 3 a.m." stops happening.
28. **Preflight:** `mise run agent-check` (also the SessionStart hook): SSO valid, vault
    unlocked, Docker up, every MCP server answers, `check` baseline green. Fails loudly
    before work starts, not mid-phase.
29. **Project auto-mode block** describing MaverickCloud (the global one describes only
    AWS-COMMAND-CENTER).
30. **MCP vs CLI:** access is not memory. Persistence comes from §1; MCPs are access paths.
    On the laptop and the box, agents use CLIs (`gh`, `aws`, `terraform`, `gcloud`: no
    context cost). **MCPs are for where there's no shell** (claude.ai, Desktop, phone) and
    for things with no good CLI:

    | MCP | Why | Credential |
    |---|---|---|
    | `maverick-knowledge` (#12) | The ledger, everywhere | none (reads repo) |
    | GitHub (remote) | Issues/PRs from claude.ai and phone | bot token |
    | AWS API (read-only mode), AWS Docs, AWS Billing/Cost | Look at the estate and spend | `agent-readonly` |
    | Context7 | Version-correct docs (Spring Boot, Astro, Caddy, AWS provider) | free key |
    | Terraform, LikeC4, shadcn, Playwright, Chrome DevTools | As in ENGINEERING-SETUP §17.4 | none |
    | Figma or Penpot | Design-to-code | personal token |
    | New Relic | Traces, errors and logs for triage (NerdGraph API; its MCP server if one is available) | read-only user key |

## 6. Automation: where agents run

| Runner | Good for | Cost |
|---|---|---|
| Laptop (interactive Claude Code) | Planning, decisions, review | Plan usage |
| **Nightrun box** (EC2, existing skill) | Long builds that need Docker, Testcontainers, the full toolchain | Instance hours + plan usage |
| **GitHub Actions + `claude-code-action`** | Event-driven: PR opened, issue labelled, CI failed, `/decide` comment | Actions minutes (the plan's free allowance; the repo is private) + API key or subscription token |
| **Claude Code scheduled routines** (`/schedule`) | Light recurring jobs: morning brief, weekly hygiene | Plan usage |

## 7. Use cases, in the order I'd add them

**Now, during the build**

| # | Job | When | Output | Risk |
|---|---|---|---|---|
| 31 | **Spec build** (nightrun as it is) | Night | Branch, PROGRESS, `*-left.md` | Low: branch only |
| 32 | **Nightly review** of the day's PRs: `/code-review`, `/security-review`, and a *decision-conformance* pass (diff vs CURRENT.md) | Night | PR comments | None |
| 33 | **Drift sweep:** regenerate generated docs (OpenAPI, schema docs via `tbls`, Modulith, LikeC4), run the stale-reference lint, compare code against CURRENT.md | Night | One PR | Low |
| 34 | **Morning brief:** what ran, what passed/failed, PRs to review, decisions waiting (incl. #16 inbox), spend (AWS + Claude) | 7 a.m. | Issue / push notification / artifact | None |
| 35 | **CI-failure fixer:** main or a PR goes red → agent diagnoses, opens a fix PR | Event | PR | Low |
| 36 | **Spec drafting:** a feature issue or answered decision → Opus drafts the spec + phases overnight for your morning review | Night | Spec PR | None |
| 37 | **Test hardening:** mutation testing (PIT for Java, Stryker for TS) → agent writes tests for survivors | Weekly night | PR | Very low, high value |
| 38 | **Dependency fixer:** Renovate opens PRs; an agent fixes the ones that break the build | Event | PR | Low |
| 39 | **Research jobs:** "compare X vs Y" runs overnight into `docs/research/`, feeding a `proposed` decision | Night | Doc + proposal | None |
| 40 | **Weekly hygiene:** proposals older than 14 days, learnings dedupe, stale branches, `terraform plan` drift, cost report, LikeC4 diff | Weekly | Issue | None |

**Later, once the product is live**

| # | Job |
|---|---|
| 41 | **Ops triage:** an alarm or error spike → agent (read-only role) gathers logs, matches a runbook, opens an issue with the steps; never acts on prod |
| 42 | **Template factory:** a design in Figma/Penpot → a new template package overnight, checked by visual regression against the design |
| 43 | **Agency drafts (Maverick Creatives):** a client brief → a first-draft site on a branch with preview, for you to handcraft from |
| 44 | **Release notes:** release-please builds the changelog from Conventional Commits; an agent writes the customer-facing version |
| 45 | **Support drafts:** customer emails → drafted replies with the relevant runbook or FAQ, sent by you |

## 8. Toward building the whole app unattended

Unattended quality equals the quality of the verification and the clarity of the decisions;
the model is rarely the limit. So this is a ladder, each rung adding one safeguard:

46. **Stage 1 (now): one spec per night** (nightrun). You write or approve the spec; the
    driver verifies each phase.
47. **Safety rails for every stage:**
    - **Decision gate:** each phase declares its `areas`; the driver won't start a phase
      while OPEN.md has open decisions in those areas. It runs the others instead.
    - **Verify is the contract:** `mise run check` + architecture tests + contract tests +
      e2e. A phase that can't be verified isn't unattended work.
    - **Planner / worker / reviewer split:** Opus plans and reviews, Sonnet builds.
    - **Budgets:** max phases, max attempts, max spend per night; stop and report beyond it.
    - **Human gates stay:** merge, deploy, `terraform apply`, fixing a decision.
    - **Untrusted input:** Actions that run agents trigger only for your user (`github.actor`
      check), never for issues or comments from anyone else (prompt injection), and never on
      fork PRs. Still needed on the private repo: collaborators and bots can comment too.
48. **Stage 2: queue-driven nights.** Nightrun picks `agent-ready` issues (#21) instead of
    hand-written phases; each becomes a branch + PR.
49. **Stage 3: multi-night epics.** Each morning the planner re-plans from STATE.md, the
    review findings and your answers, and queues the next night.
50. **Stage 4: parallel workers** in separate worktrees on separate modules. The modular
    monolith (ENGINEERING-SETUP §16.1) is what makes this possible without merge chaos.

## 9. Pipeline extras that pay off with agents

51. **Per-PR CMS preview** (the CMS is a static SPA: an S3 prefix or a free static host) +
    Playwright screenshots attached to the PR, so you can review agent UI work on your phone.
52. **Visual regression for sections** (Playwright snapshots against fixture content): catches
    an agent breaking a template it didn't mean to touch.
53. **Bot identity on every agent commit and PR** (#23), so you can filter and audit them.
54. **Run ledger:** every unattended run records model, tokens, spend, phases, result
    (nightrun already writes state; warden already shows runs, D45). Feeds the morning brief.
55. **Notifications:** GitHub mobile for PRs and issues; ntfy or a Telegram bot for "run
    finished / failed / needs a decision".

## 10. Decisions this proposal needs from you

1. **Tracker:** GitHub Issues + Projects (recommended), Linear or Jira.
2. **Notion:** skip, or a read-only mirror of CURRENT.md.
3. **Ledger format:** one file per decision with the front matter in #1, keeping your status
   words (+ `superseded`).
4. ~~**Private knowledge:** a private companion repo, or make the main repo private.~~ The
   repo is private (FIXED 2026-11-04). Account IDs and secrets still stay out of it.
5. **Vault:** Bitwarden Secrets Manager or 1Password. 1Password is free for 2 years through
   the user's GitHub Student Pack (ENGINEERING-SETUP §19.2).
6. **Agent sandbox:** devcontainer or WSL2.
7. **Claude auth for Actions:** API key with a spend cap, or a subscription token.
8. **First automations:** recommended #15–16 (decide + capture), #31–34, then #35–36.
9. Keep / change / drop on the numbered items above.

## 11. Setup order

1. Ledger: migrate existing decisions (#9), generator + CI checks (#2–5), archive the
   non-authoritative docs (#7).
2. `/decide` skill, SessionStart hook, decision capture (#10, #15, #16).
3. Agent identities, vault, profile hook, devcontainer, preflight (#23–28).
4. GitHub labels, issue form, Project board (#20–22).
5. `maverick-knowledge` MCP (#12).
6. Nightly review, drift sweep, morning brief (#32–34).
7. Then the rest of §7 one at a time; each new job runs for a week in "report only"
   before it may open PRs.
