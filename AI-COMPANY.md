# The AI company — target state proposal (2026-11-04)

**The goal (user, 2026-11-04):** separate bots that work as a company, to the point where
they serve customer requests; an efficient AI pipeline; and a knowledge base that never goes
stale. Automation should aim there.

This doc is the target the other two build toward. [`ENGINEERING-SETUP.md`](ENGINEERING-SETUP.md)
covers the build and operations; [`KNOWLEDGE-AND-AUTOMATION.md`](KNOWLEDGE-AND-AUTOMATION.md)
(K&A) covers the decision ledger and the dev-time agents. **Everything here is PROPOSED
(Claude) unless marked FIXED.** Items are numbered per section (§3.2 = section 3, item 2).

**What this changes:** ENGINEERING-SETUP §0 says agents never send anything to a customer.
Here that "never" becomes **"not until earned, per action"** (§3). Until you agree, §0 stands.

---

## 0. The shape

```
 Customers ── CMS help · email · WhatsApp (later) ─┐
 You ──────── phone: brief, approvals, decisions ──┤
 Events ───── alerts · CI · product events · cron ─┤
                                                   ▼
                                     Front desk (classify, attach context, route)
                                                   │  every handoff is a ticket
        ┌──────────────┬──────────────┬────────────┼─────────────┬──────────────┐
     Support     Customer success   Content    Engineering      Ops      Knowledge & Audit
        │              │              │            │             │              │
        └──────────── tools, through a policy layer (actions + autonomy levels) ┘
                                                   │
        Product API (as the customer) · read-only ops roles · the repo (branches, PRs)
                                                   │
        Knowledge: ledger · product config · help centre · generated docs · live state via tools
                                                   │
        Control plane: AI gateway · budgets · evals · audit trail · kill switches · run ledger
```

## 1. Principles

1. **Bots are employees with charters:** job, inputs, tools, allowed actions and their
   autonomy level, budget, eval suite, escalation path. One file each, versioned (§6.2).
2. **Bots coordinate through tickets, not conversations.** Every handoff is a durable work
   item with a state, so nothing is lost between bots, sessions or days, and every step is
   auditable. Internal work: GitHub issues. Customer requests: the product's ticket queue (§6.5).
3. **Bots act through the product's API as the customer, never through the database.** A
   support bot that changes a phone number calls the same endpoint the CMS calls, with a
   token scoped to that customer and that action. Tenant isolation stays the API's job,
   already proven by the security suite (ENGINEERING-SETUP §8).
4. **Deterministic first.** If a rule, a template or a script gives the right answer, no bot
   is involved (ENGINEERING-SETUP §0 layer 1). Bots are for judgement.
5. **Autonomy is earned per action, measured, and revocable** (§3).
6. **Knowledge is never copied; it is referenced or generated** (§4). A copied fact is a
   future stale fact.
7. **Every bot is evaluated:** offline evals before any change ships, sampled grading in
   production (§7).
8. **Untrusted input stays data.** Customer messages, site content and emails are never
   instructions; tool permissions bound the damage whatever a bot is talked into (§8).

## 2. The org chart

| Department | Bots | Serves | Starts as | End state |
|---|---|---|---|---|
| **Front desk** | Router: classifies, dedupes, attaches account context, routes | Everyone | Internal only | Every channel |
| **Support** | Answerer (how-to, with citations) · Account actions (does what the customer asks, within policy) · Troubleshooter (site down, domain, email: runs the same checks as the ops jobs) | Customers | Drafts for you (ENGINEERING-SETUP §14.2) | Answers and acts on its own for the safe catalogue |
| **Customer success** | Onboarding guide (domain connect, first publish) · Health watcher (trial ending, quota, inactive) | Customers | Templates you approve | Personalised nudges on its own |
| **Content** | In-CMS AI (FIXED: Gemini on Vertex, a product feature) · Template factory · Agency drafter | Customers, the agency | K&A #42–43 | Template catalogue grows without you |
| **Engineering** | Builder, Reviewer, Docs keeper, CI and dependency fixers, Test hardener | You | ENGINEERING-SETUP §18 | K&A §8 stage 4 |
| **Ops** | Triage, Postmortem writer | You | ENGINEERING-SETUP §13 | Runs kill switches itself for the listed cases |
| **Knowledge** | Librarian: keeps the KB current (§4) · Eval keeper | Every bot | New | — |
| **Audit** | Auditor: samples every bot's output, grades it, proposes promotions and demotions (§3) | You | New | — |
| **Chief of staff** | Morning brief, weekly hygiene, cross-department routing, your inbox | You | ENGINEERING-SETUP §18 | — |
| **Admin** | Renewals, cost, credits watch | You | ENGINEERING-SETUP §12.2 | Payments stay yours (FIXED: offline) |

Out of scope by decision: lead generation and a CRM (DECISIONS: internal tools out).

## 3. Autonomy, per action

1. **Levels:**

   | Level | Name | What happens | Your part |
   |---|---|---|---|
   | L0 | Suggest | The bot drafts; you do it | Everything |
   | L1 | Approve | The bot prepares the exact action; one tap on your phone; the bot executes | One tap |
   | L2 | Act and report | Within policy, reversible, logged; in the daily digest; the auditor samples it | Read the digest |
   | L3 | Autonomous | As L2, no digest line; only for actions with automatic rollback | Nothing |

2. **The action catalogue is code:** `bots/actions.yaml` lists every action a bot can take:
   the API endpoint, whether it's reversible, its **ceiling** level, and its **current** level
   per bot. The policy layer enforces it on every tool call. The auditor proposes level
   changes as PRs, and **your merge is the promotion**, so autonomy is itself a decision in git.
3. **Promotion rule** (numbers yours to set): at least N cases at the current level, at least
   X% accepted without edits, no severe error in the window, the eval suite green.
   **Demotion is automatic** on a severe error or an eval regression.
4. **Ceilings that never rise above L1:** money (credits, refunds, tier changes), deleting
   customer data, legal or compliance messages, security actions, prod infrastructure,
   anything irreversible, any message to all customers.
5. **Starting catalogue (example):**

   | Action | Ceiling | Starts at |
   |---|---|---|
   | Answer a how-to question, citing the help centre | L3 | L0 |
   | Explain a domain or email problem, from live checks | L3 | L0 |
   | Change site content or contact details the customer asked for (the customer confirms the exact change) | L2 | L1 |
   | Re-run a failed publish | L2 | L1 |
   | Extend a trial (FIXED: by hand on request; L1 = your tap) | L1 | L0 |
   | Grant AI credits, change a tier | L1 | L0 |
   | Suspend a site for abuse | L1 | L0 |
   | Delete a site or media | — | Customer only, in the CMS |

## 4. The never-stale knowledge base

Staleness comes from copies: a price in a help article, a limit in a prompt, an architecture
note in an old doc. So each fact has **one home**, and everything else either renders it,
links to it, or fetches it at the moment of the question.

1. **Knowledge tiers:**

   | Tier | Example | Single home | How bots get it | What stops it going stale |
   |---|---|---|---|---|
   | Decisions | "Builds run on Lambda" | The ledger (K&A §1) | `maverick-knowledge` MCP | Supersede + stale-reference lint |
   | Product facts | Tier prices, storage quota, trial length, rollback depth | Product config (`config/product/*.yaml`, the same files the API loads: ENGINEERING-SETUP §16.3) | Pages render `{{ tiers.standard.storage }}`; bots call a tool | One value, nothing to drift |
   | How-to | "Connect your domain" | Help centre markdown + an **executable walkthrough** | Full text (§4.6) | The walkthrough runs nightly against dev; a UI change breaks it; screenshots regenerate |
   | Reference | API, error codes, email texts | Generated from code (OpenAPI, the error catalogue, `packages/emails`) | Tools | CI regenerates (ENGINEERING-SETUP §3.4) |
   | Live state | This customer's site, domain status, last build | The product API | Tools, at question time | **Never stored in the KB** |
   | Ops | Runbooks, incidents, learnings | Git | MCP | Drills, `verified_on`, expiry |
   | Conversations | Resolved tickets | The ticket queue | Mined, never served raw | Become FAQ proposals; personal data stripped |

2. **Every KB page has front matter:** `audience` (customer · internal · agent), `owner` (a
   bot role), `sources` (decision IDs, config keys, code paths), `verified_on`,
   `review_after`. Humans and bots read **the same pages**, filtered by audience.
3. **Change propagation:** when a source changes (a decision superseded, a config key changed,
   a PR merged touching a path in `sources`), every page that depends on it is flagged, and
   the Librarian opens a PR the same night. Customer-facing pages: you merge (L1), later L2.
4. **Prompts hold behaviour, never facts.** A bot's charter says how to act; facts come from
   the KB or a tool. A CI lint flags numbers, prices and limits in charters and prompts.
5. **Cite or escalate:** a customer-facing answer must cite a KB page or a tool result for
   each claim. No source → escalate to you. "If it isn't in the KB or a tool, the bot doesn't
   know it."
6. **Retrieval:** while the help centre is small, the whole customer-facing KB sits in the
   bot's cached prompt prefix (no search to get wrong). Add hybrid search (keywords +
   embeddings, behind a `KnowledgeSearch` interface) only when it outgrows that. The earlier
   advice stands for engineering docs: an index + grep, no vector store.
7. **The gap loop:** every escalation, and every edit you make to a bot's draft, is classified:
   KB gap · KB wrong · bot error · policy question. KB gaps become Librarian drafts; policy
   questions become `open` decisions. Your edits are the best training signal the company has.
8. **Freshness in the brief:** customer pages past `review_after`, pages citing superseded
   decisions, failing walkthroughs, unanswered-question clusters. The target is zero.

## 5. The efficient AI pipeline

1. **One AI gateway** every bot and the product's AI go through (a library in the bots
   runtime, or a proxy such as LiteLLM: OPEN). It does routing (model and effort per route),
   budgets (per bot, per customer, the product's FIXED daily ceiling), prompt layout for
   caching, retries and fallbacks, redaction in logs, and metering into Warden. It keeps the
   FIXED principle: the provider is swappable (Gemini for product AI, Claude for bots today).
2. **Cost levers, cheapest first:**
   1. Deterministic before AI: a rule, regex or template where one works.
   2. **Prompt caching:** stable content first (charter, tools, KB), the ticket last. Cache
      reads cost a small fraction of normal input.
   3. **Batch API for anything not urgent:** half price. Nightly evals, KB rewrites, ticket
      mining, overnight reviews.
   4. **Effort per route:** low for routing and chat, higher for code and review.
   5. **Model per route, measured:** try the stronger model at lower effort before building
      a cheap-model cascade (caches are per model, so cascades lose cache reuse).
   6. Budgets and stop rules per task.
3. **Starting routes** (the evals decide; these are starting points only):

   | Route | Model | Effort |
   |---|---|---|
   | Router, classification, ticket mining | Claude Haiku 4.5 | — |
   | Support answers, account actions, onboarding | Claude Sonnet 5.5 | low → medium |
   | Builder (nightrun) | Claude Sonnet 5.5 | high |
   | Planner, reviewer, auditor, incident triage | Claude Opus 5.5 | high |
   | In-CMS AI for customers | Gemini on Vertex (FIXED) | — |

4. **The unit metric is cost per completed outcome:** per resolved ticket, per merged PR, per
   published template. Not per request. The run ledger (ENGINEERING-SETUP §18.2) tracks it;
   bots that cost more than they save are fixed or retired.

## 6. Runtime

1. **Where bots run:**

   | Bots | Runtime | Why |
   |---|---|---|
   | Engineering | Claude Code: laptop, nightrun box, GitHub Actions | As now (K&A §6) |
   | Scheduled internal (chief of staff, librarian, auditor) | Claude Code routines, or **Claude Managed Agents** scheduled deployments | No server of ours; versioned agent configs; vault-held credentials that never enter the sandbox |
   | Customer-facing (front desk, support, success) | **In our own service**, on the Claude API with a tool runner | Their tools are our API with the customer's scoped token and our policy layer, so they belong in our process; Managed Agents with custom tools is the alternative (OPEN, decide at stage A) |

2. **Charters as code:** `bots/<name>/charter.md` + `config.yaml` (model, effort, tools,
   actions, budget, escalation) + `evals/`. A PR changes a bot; CI runs its evals; the run
   ledger records which version handled what.
3. **Product events from day one:** the API writes domain events through an outbox
   (`site.published`, `publish.failed`, `domain.check_failed`, `trial.ending`,
   `quota.reached`, `ticket.created`…) to a queue. Bots subscribe later without touching
   feature code. Cheap now, expensive to retrofit.
4. **Channels**, each an adapter that creates a ticket: the in-CMS help panel and "Report a
   problem" (ENGINEERING-SETUP §14.2), email (support@ on Zoho, FIXED), the admin PWA for you,
   **WhatsApp Business later** (where Indian small-business owners already are; per-conversation
   fees, so OPEN).
5. **Ticket queue in the product:** a small `tickets` module (state, customer, channel,
   messages, actions taken, bot or human). It's a support queue, not a CRM. Customer data
   never goes into GitHub issues.

## 7. Evals

1. **Per bot, a golden set:** real cases (anonymised) with the expected outcome and a rubric.
   Runs on every change to the charter, the model, or a KB page the bot cites; nightly via the
   Batch API. A regression blocks the PR.
2. **Production grading:** the auditor grades a daily sample (a model as judge) and puts a
   handful in your brief for thumbs up or down. Where you and the judge disagree, the judge's
   rubric is fixed.
3. **KB evals:** for each customer page, a few questions a bot must answer correctly from it.
   Catches a page that became unhelpful after an edit.
4. **Per-bot scorecard:** accepted without edits, escalation rate, time to resolve, cost per
   outcome, severe errors. This is what promotions (§3.3) read.
5. When the first bot is built, the `/claude-api build-eval` flow sets up its eval set.

## 8. Trust, safety and compliance

1. **On-behalf-of tokens:** a bot acting for a customer holds a short-lived token limited to
   that customer's site and the action's scopes. The audit trail records `actor` (the bot and
   its version), `on_behalf_of`, and `approved_by` for L1.
2. **The customer confirms every change** with a button showing exactly what will change, never
   a free-text "yes".
3. **Prompt injection:** customer messages, site content and emails are data. No bot has all
   three of private data, untrusted input and a way to send data out without a gate in
   between. No tool reaches another tenant.
4. **Disclosure:** customers are told they're talking to an AI, and "talk to a person" always
   works (it reaches you).
5. **DPDP:** conversations hold personal data: a retention period, the AI providers named as
   processors in the privacy policy, personal data stripped before anything enters an eval
   set, logs redacted (ENGINEERING-SETUP §11.2).
6. **Kill switches:** per action, per bot, all bots (`AGENTS_PAUSED`, ENGINEERING-SETUP §15.8,
   extended to production bots and an admin PWA toggle).
7. **No promises:** bots never commit to money, legal positions or timelines; those go through
   templates you wrote.

## 9. What to build now, and the stages after

**Now, during the build** (cheap now, expensive to retrofit; these touch the first endpoints,
so they are the urgent ones):

1. **Product facts as config**, rendered into docs and emails (§4.1).
2. **An agent-ready API:** every customer action is an API call; OpenAPI descriptions written
   well (they become tool descriptions); idempotency keys on writes; a preview / dry-run mode
   for writes; machine-readable error codes; **delegated, scoped tokens designed into AUTH**;
   audit entries with actor type and on-behalf-of.
3. **Domain events through an outbox** (§6.3).
4. **The AI gateway interface** with metering and budgets per caller (the product AI is
   already behind an interface; extend it).
5. **Help articles with executable walkthroughs**, from the first feature.
6. **The ledger and KB front matter** (K&A §1).

**Stage A, at launch:** the support drafter at L0 (ENGINEERING-SETUP §14.2), the Router,
Librarian and Auditor; eval sets built from the first real tickets.

**Stage B, after a few weeks of data:** how-to answers at L2; account actions at L1;
onboarding nudges at L2 from templates; WhatsApp if it's worth the fees.

**Stage C:** the reversible action catalogue at L2; the troubleshooter at L2; you handle
exceptions only.

**Stage D, the company:** departments run continuously; you set goals, fix decisions, tap L1
approvals and read the brief.

## 10. Decisions this proposal needs from you

1. **Record the goal** in DECISIONS.md as the company's direction.
2. **Autonomy per action** (§3), with the L1-only list in §3.4.
3. **ENGINEERING-SETUP §0's "agents never send anything to a customer"** becomes "not until
   earned per §3"; nothing changes before stage B.
4. **Ticket queue in the product** (a support queue, not a CRM) or the mailbox only.
5. **The "Now" items in §9** go into the Java baseline and the AUTH design (recommended:
   yes, before the first endpoint).
6. **AI gateway:** our own thin layer or LiteLLM. **Customer-facing runtime:** in our service
   or Managed Agents. Both can wait until stage A.
7. **WhatsApp** as a channel, later.
