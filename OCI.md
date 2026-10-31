# Oracle Cloud (OCI) for compute and MySQL (2026-10-18)

Moving Java, Caddy and MySQL from AWS to Oracle's Always Free tier, keeping media on AWS,
with a small AWS proxy holding the public IP in front. From the conversations of
2026-10-18 and 2026-10-19. Status tags: **FIXED** (the user's word) · **USER'S
DIRECTION** (the user's idea, not yet fixed) · **AGREED** (user said yes to Claude's
proposal) · **PROPOSED** (Claude's recommendation, not yet confirmed) · **LATER** ·
**OPEN** · **REJECTED**.

> **DEFERRED (user, 2026-10-19):** everything stays on AWS, including MySQL on RDS.
> This document is parked for later.

**This is under review and does not change [`DECISIONS.md`](DECISIONS.md) yet.** If the
user fixes it, it reverses the Hosting and Edge security decisions there (Caddy EC2,
Elastic IP, t4g.small, Auto Scaling group of 1, SSM, instance role, "Terraform provisions
the whole AWS architecture").

---

## 1. Goal

- **FIXED (user): no surprise costs, ever.** Oracle is being considered *because* it's
  free; nothing in the setup may lead to a bill through a misunderstanding. Every choice
  below is judged against that first.

## 2. The shape

- **USER'S DIRECTION:** the OCI Arm VM is "a gold mine": run **Java and Caddy there**,
  attach a reserved public IP and run it for good. **The CDN stays on CloudFront.**
- **USER'S DIRECTION:** MySQL on the OCI Always Free MySQL HeatWave database.
- **USER'S DIRECTION (2026-10-19): a small AWS proxy box holds the public IP.** It keeps
  a fixed Elastic IP **for life** and forwards every request to OCI. Media, the CDN and
  Lambda stay on AWS.
- **USER'S DIRECTION: this whole layout is a proposal and can change.** Moving off OCI
  (e.g. back to AWS) means pointing the proxy at another instance. Customers' DNS never
  changes. That's all there is to it.
- **USER'S DIRECTION:** OCI Object Storage for MySQL backups and similar OCI-side data.

```
selfsite.in, *.selfsite.in, app, sites, customer A records
   → Elastic IP (fixed for life) → AWS proxy, Mumbai (ap-south-1)
        forwards TCP 80/443, no TLS termination (§7)
   → OCI Arm VM, Mumbai (ap-mumbai-1): Caddy + Java
        → MySQL Always Free (same VCN, private subnet, no internet hop)
        → OCI Object Storage (MySQL backups, via service gateway)

media.selfsite.in → CloudFront → S3        (unchanged, see MEDIA.md)
uploads: browser → S3 → Lambda              (unchanged, see MEDIA.md)
```

- The AWS bill shrinks to the proxy box + Elastic IP, S3, CloudFront, Lambda, Route 53
  and SES. No RDS, no app EC2.
- **PROPOSED: one VM at 2 OCPU / 12 GB** at launch, Caddy + Java together (same as the
  one-box launch already in DECISIONS.md). One VM also makes the idle rule (§4) easy:
  each VM is judged on its own, and a Caddy-only VM would struggle to pass 20%.
  - Later: split into two 1 OCPU / 6 GB VMs when Java moves off (still free), but only
    with a plan for the Caddy VM's idle check.
- **REJECTED:** Java on AWS reaching MySQL on OCI. Options looked at: an OCI Network
  Load Balancer locked to the Elastic IP (free, workable), WireGuard to an OCI micro VM,
  AWS Site-to-Site VPN (~$36/month, kills the saving). Superseded by Java moving to OCI.

## 3. Oracle's free limits (checked 2026-10-18)

| Resource | Always Free limit |
|---|---|
| Arm A1 compute | **1,500 OCPU-hours + 9,000 GB-hours/month = 2 OCPU / 12 GB** running all month. Cut from 4 / 24 on **2026-06-15**, with no announcement |
| AMD micro | 2 VMs, 1/8 OCPU, 1 GB each |
| Block storage | 200 GB total (boot + block), **max 5 volume backups** |
| MySQL HeatWave | 1 DB system, `MySQL.Free` shape, 50 GB storage + 50 GB backup, single node |
| Outbound data | 10 TB/month |
| Object Storage | ~20 GB total across tiers, **50,000 API requests/month**. S3-compatible API; instance principals (no stored keys); service gateway (private, free) |
| Public IPs | Free, including a reserved IP left unattached (Oracle VCN FAQ, via search; page blocked direct fetch) |
| Network Load Balancer | Free |
| Monitoring / Notifications | 500M data points; 1,000 emails/month |

- Everything free must be in the **home region**, chosen once at sign-up, **permanent**.
  **PROPOSED: Mumbai (`ap-mumbai-1`).** It has one availability domain and its Arm
  capacity is often full ("Out of host capacity").
- Hours margin is thin: 2 OCPU × 744 h (31 days) = 1,488 of 1,500; 12 GB × 744 h = 8,928
  of 9,000.

### MySQL Always Free, the catches

- Private subnet only, no public endpoint.
- Backups: automatic, **1-day retention**, no manual backups, no point-in-time recovery.
  → our own nightly `mysqldump` (covers checklist item 8, backups + one tested restore),
  stored in **OCI Object Storage (USER'S DIRECTION)**.
  - Claude's caution: backups held only in OCI are lost along with the OCI account, which
    is the main risk this doc guards against. An occasional copy to S3 keeps the AWS exit
    possible (writing to S3 from OCI is free on both sides).
- Version is "latest", **auto-upgraded every maintenance cycle**: no pinning the 8.4 LTS
  the scratchpad assumed. Test Spring Boot + migrations against 9.x.
- No HA, no read replicas, **no SLA, no Oracle support**.
- **PROPOSED:** plain MySQL only, nothing HeatWave-specific, so moving to RDS stays a dump
  and restore.
- No documented idle rule for the free MySQL was found (the 7-day stop / 90-day delete
  rule found in searches belongs to Autonomous Database, not MySQL).

## 4. Idle reclamation

- **Oracle's rule:** a free VM is idle when, over 7 days, **all three** are true: CPU
  (95th percentile) < 20%, network < 20%, memory < 20% (Arm only). Threshold was 15% in
  2023.
- What happens: an email, then the VM is **stopped one week later**. It restarts only
  "as long as the associated compute shape is available in your region", which in
  Mumbai may not be true. A stopped VM may not come back = every customer site down.
- A quiet launch box would trip it.

### PROPOSED: stay free-only and keep memory above 20% (user asked, 2026-10-18)

The user asked whether a script can keep usage above 20%. Only **one** of the three
readings needs to pass, so no CPU-burning script is needed:

- Java starts with a fixed, pre-claimed heap: `-Xms4g -Xmx4g -XX:+AlwaysPreTouch`.
  With the OS and Caddy, memory sits at ~35–40% of 12 GB, at zero CPU cost.
- Keep the **Oracle Cloud Agent** running (its `MemoryUtilization` metric is what Oracle
  reads; missing data may count as idle).
- **OCI Monitoring alarm** on `MemoryUtilization[1h].mean() < 25` → email (free).
- Oracle's own warning email is a second net: a week before any stop.
- **Never stop or delete the VM casually.** Resize in place; rebuild from scripts.

Risks accepted with this: Oracle changes thresholds or measurement silently (it has
before); free accounts are last in line for Arm capacity; this games the idle check even
though the heap size is genuine (no terms found forbidding it, none checked either).

## 5. Pay As You Go (PAYG)

- **What it does:** stops idle reclamation and gives better Arm capacity. Always Free
  resources stay free; Oracle charges "only for resource usage above the Always Free
  limits". No minimum spend, no commitment.
- **What it costs in risk:** the account can now create paid things, so a mistake (or a
  stolen login) becomes a bill instead of an error. On a free-only account Oracle's
  docs say: *"Your credit card will not be charged unless you upgrade your account."*
- **No documented way back** to free-only. Treat it as one-way.
- Card: $100 authorisation at upgrade, reversed. Billing in **USD**; needs a Visa or
  Mastercard **credit** card with international transactions on. RuPay fails.
- Oracle support gave conflicting answers on whether the June A1 cut applies to PAYG
  accounts; the docs say "all tenancies". We design for 2 / 12 either way. If Oracle
  cuts again, the excess on PAYG would bill (≈ $25–28/month for 2 OCPU + 12 GB).
- **PROPOSED: free-only for launch; PAYG + guardrails (§6) once paying customers make an
  outage cost more than the risk of a bill.**

### Where people actually get charged

| Trap | Our answer |
|---|---|
| More than 5 volume backups (Oracle's Bronze/Silver/Gold policies make more) | No backup policies on volumes. The box is disposable; certs in S3 |
| Arm beyond 2 OCPU / 12 GB | Quota (§6) |
| Anything outside the home region | Don't subscribe to other regions |
| Disk beyond 200 GB | One boot volume, ~50 GB |
| Load balancer above 10 Mbps; faster disk performance (VPU) | Not used. Keep default disk performance |
| Paid resources made during the 30-day / $300 trial | They keep running and bill after an upgrade. Free shapes only from day one |

## 6. Guardrails (on day one, free-only or PAYG)

**Quotas are a hard cap** (Oracle refuses to create past them). **Budgets only send
alerts**, evaluated every 24 hours.

```
zero compute-core quotas in tenancy
zero compute-memory quotas in tenancy
set compute-core quota standard-a1-core-count to 2 in tenancy where request.region = ap-mumbai-1
set compute-memory quota standard-a1-memory-count to 12 in tenancy where request.region = ap-mumbai-1
set block-storage quota total-storage-gb to 200 in tenancy where request.region = ap-mumbai-1
set block-storage quota backup-count to 5 in tenancy
```

- Test once: try a 3rd OCPU and a 6th backup; both must be refused.
- **$1 budget**, alerts on actual > $0.01 and on forecast.
- Terraform pins the free shapes (`VM.Standard.A1.Flex` within 2 / 12, `MySQL.Free`);
  nothing made by hand in the console.
- MySQL quota names weren't found, so the Terraform pin + budget are its only guard.
- Quotas can't cap outbound data; 10 TB/month is far above HTML serving.

## 7. The AWS proxy (USER'S DIRECTION, 2026-10-19)

> **Parked brainstorm (2026-10-19):** the user is also leaning towards customers moving
> their nameservers to our Cloudflare instead, which would drop this proxy (OCI direct,
> or AWS later). Not decided; see [`DNS.md` §10](DNS.md).

- **Why:** customers' A records point at an IP in a paid AWS account we control, not at
  Oracle's free tier. If the OCI VM is reclaimed, the account is suspended, or capacity
  runs out, the proxy is pointed at a new box (OCI or AWS) and no customer touches DNS.
- **USER'S DIRECTION: t4g.small at launch** (the user says t4g.small is free until the
  end of 2026), **then downsize to t4g.micro** (stop → change type → start; the Elastic IP
  stays attached).
  - The free hours are per AWS account, shared by every t4g.small in it. The Elastic IP
    and the disk are billed regardless.
- **PROPOSED setup:**
  - **TCP passthrough** (HAProxy, or nginx `stream`) on 80/443. No TLS on the proxy, no
    certificates. Caddy on OCI keeps on-demand TLS, the "ask" check and rate limits.
  - **PROXY protocol v2** from HAProxy; Caddy's `proxy_protocol` listener wrapper, trusted
    only from the Elastic IP. Otherwise Caddy sees one client IP and per-IP rate limits
    break.
  - **OCI security list:** 80/443 from the Elastic IP only. OCI has no public face of its
    own; floods hit AWS (Shield Standard) first.
  - The AWS edge setup in DECISIONS.md carries over: Auto Scaling group of 1 re-attaching
    the Elastic IP, SSM (no SSH), security group 80/443 only, IMDSv2, CPU credits in
    "standard" mode. The proxy is stateless, so it's truly disposable.
  - HAProxy `maxconn` (§8), a per-source-IP connection cap (generous: ~100–200, CGNAT),
    systemd restart policy.
- **Ruled out:** AWS Network Load Balancer (can't target a public-internet IP) and Global
  Accelerator (costs more, also can't target OCI).
- **Costs to watch:** all page traffic leaves through AWS (100 GB/month free, then
  billed; HTML is small, media goes via CloudFront). One extra hop, Mumbai ↔ Mumbai,
  probably a few ms (not measured).

## 8. Specs and limits (Claude's estimates from published specs, not benchmarks)

### AWS proxy (TCP passthrough)

| | t4g.nano | t4g.micro | t4g.small |
|---|---|---|---|
| vCPU / RAM | 2 / 0.5 GB | 2 / 1 GB | 2 / 2 GB |
| Sustained CPU ("standard" credits) | ~10% of one core | ~20% | ~40% |
| Network, sustained (bursts to 5 Gbps for minutes) | ~32 Mbps | ~64 Mbps | ~128 Mbps |
| Page views/sec, sustained* | ~40 | ~80 | ~160 |
| Visitors browsing at once* | ~1,000 | ~2,500 | ~5,000 |
| Crash point (out of memory, if `maxconn` isn't set) | ~7k connections | ~20k | hits the ~28k port limit first (refuses, no crash) |
| `maxconn` to set | 4,000 | 12,000 | 25,000 |
| New connections/sec, credits left | ~20k+ | ~20k+ | ~20k+ |
| Full speed lasts (from a full credit balance) | ~75 min | ~2.5 h | ~6 h |
| New connections/sec, credits gone | ~1–2k | ~2–4k | ~4–8k |

\*~100 KB per page view (HTML + CSS/JS; images on CloudFront), one page every ~30 s per
visitor.

- Under overload it slows, drops packets and refuses connections, but stays up and
  recovers when the load stops. `maxconn` + systemd restart make a crash close to
  impossible.
- A replacement box starts with **no CPU credits** (t4g standard mode, as far as known),
  so one replaced mid-flood runs at its sustained limits at once.
- Flood-only limits: ~28k connections to the single OCI backend address (widen
  `ip_local_port_range` to ~60k); AWS security-group connection tracking
  (`conntrack_allowance_exceeded`).
- Expected launch traffic is ~1,000× below the micro's sustained limits.

### OCI VM

- Arm A1, **2 OCPU (2 full cores) / 12 GB**, ~2 Gbps network (1 Gbps per OCPU). Caddy
  serving static files over HTTPS: likely thousands of requests/sec; TLS handshakes
  ~5–10k/sec (guess). For steady traffic the proxy's bandwidth is the ceiling, not this box.

### OCI MySQL (`MySQL.Free`) vs the user's RDS db.t4g.micro

| | RDS db.t4g.micro | OCI MySQL.Free |
|---|---|---|
| CPU | 2 vCPU, burstable; ~10% each sustained | 1 ECPU (~1 vCPU / half a core*), steady, no credits |
| RAM | 1 GiB | **8 GiB** |
| Network | Up to 5 Gbps burst, low baseline | 1 Gbps |
| Storage | Provisioned (billed) | 50 GB + 50 GB backup |
| Standby / read replicas | Optional (paid) | No |
| Backups | Chosen retention, point-in-time restore | 1 day, no manual, no point-in-time |
| Version | Pinned | "Latest", auto-upgraded |

\*Oracle's docs don't map ECPUs to cores; ~2 ECPU = 1 OCPU is Claude's understanding,
unverified.

- 8 GB RAM is the big win: a small CMS's whole database likely fits in memory. On memory
  it's closer to a db.t4g.large.

### Where the OCI MySQL becomes the bottleneck

**Visitor traffic never reaches MySQL.** Customer sites are static HTML served by Caddy.
MySQL serves only CMS editing, publishing, login/OTP, AI-rewrite bookkeeping and
contact-form submissions. Its load follows **editors working at the same moment**, not
site visitors.

| Work | Rough capacity |
|---|---|
| Simple indexed reads, data in memory | ~3–5k queries/sec |
| Durable writes (bounded by disk latency) | ~500–1,500/sec |
| CMS API requests (~5–10 queries each) | ~300–800/sec read-heavy; ~100–300/sec write-heavy |

- An active editor sends ~1 request every 5–10 s → the CPU limit is **~1,500–3,000
  editors at the same moment**. At 2–5% of customers editing at a busy hour, that's **tens
  of thousands of customers**.
- **The Java side usually gives out first.** Per request, MySQL spends ~0.5 ms (indexed
  lookups from memory) while Java spends ~3–10 ms (HTTP, auth, Spring, Hibernate, JSON).
  Java has 2–4× the CPU but uses 5–10× more per request. It also shares its box with
  Caddy (all visitor traffic) and possibly Astro builds (seconds of full CPU each).
- **What would make MySQL the bottleneck instead:**
  1. Visitor traffic leaking into it: page-view counters, per-identity rate-limit
     counters stored in MySQL (keep them in memory in Java), visitor logs/analytics rows.
     Then load follows site traffic and 1 vCPU runs out fast.
  2. Slow queries: a missing index or N+1 loop can saturate it at ~20 requests/sec.
  3. The **50 GB cap**: content is tiny (<1 MB/site, media in S3); logs, form
     submissions, AI usage rows and old revisions are what grow. Prune or move out.
  4. Too many connections: HikariCP ~5–10 for one vCPU.
- **Upgrade signals:** sustained CPU > ~70% in OCI Monitoring; slow-query log filling;
  storage > ~70% of 50 GB.
- **No in-place upgrade** of the free shape: a paid MySQL shape (needs PAYG) or RDS, both
  by dump and restore. Hence plain MySQL only (§3).

## 9. Open list

1. **Fix or drop the move to OCI** — the user decides; DECISIONS.md changes only then.
2. **Free-only vs PAYG at launch** — Claude proposes free-only (§4).
3. **AWS access from the OCI box** (S3 presigned POSTs, Lambda invoke, SES, Caddy's S3
   sync): IAM Roles Anywhere with our own CA (free) vs a least-privilege access key in
   OCI Vault.
4. **Edge security, OCI versions:** SSM → OCI Bastion (free, no open SSH); security group
   → security list allowing 80/443 only; Caddy rate limits, GET/HEAD-only and non-root
   carry over unchanged.
5. **Recovery of the OCI VM:** no free Auto Scaling equivalent. The 2-OCPU quota and
   Mumbai capacity mean a delete-and-recreate may not get a VM back, so treat the VM as a
   pet: keep Caddy's cert sync, and see the proxy (§7) for moving traffic elsewhere.
6. ~~The reserved IP is the lock-in point~~ **Resolved by the AWS proxy (§7):** customers
   point at the Elastic IP; OCI's IP is never public-facing. Keep the AWS Terraform as a
   tested way out.
7. **Latency** AWS Mumbai ↔ OCI Mumbai (S3, Lambda calls from Java): not measured.
8. **Monitoring:** OCI accepts traffic only from the proxy, so Warden checks end to end
   through the proxy; plus a CloudWatch alarm on the proxy's status checks.
9. **Terraform:** one config with the `aws` and `oci` providers.
10. **MySQL 9.x compatibility** with the Java stack (§3).
11. **Unverified:** whether higher disk performance (VPU) bills on free volumes; whether
    PAYG can be undone; whether a NAT gateway is free (only matters if the VM sits in a
    private subnet).

## 10. Sources

- [OCI MySQL supported shapes (MySQL.Free: 1 ECPU, 8 GiB)](https://docs.oracle.com/iaas/mysql-database/doc/supported-shapes.html) ·
  [Introducing HeatWave Always Free](https://blogs.oracle.com/mysql/post/introducing-heatwave-always-free)
- [OCI Always Free resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)
- [OCI Free Tier overview](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier.htm)
- [Creating an Always Free MySQL DB system](https://docs.oracle.com/en-us/iaas/mysql-database/doc/creating-always-free-db-system.html)
- [MySQL HeatWave features](https://docs.oracle.com/en-us/iaas/mysql-database/doc/features-mysql-heatwave-service.html)
- [Budgets overview](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/budgetsoverview.htm)
- [Sample quotas](https://docs.oracle.com/en-us/iaas/Content/Quotas/Concepts/sample_quotas.htm) ·
  [Compute quotas](https://docs.oracle.com/en-us/iaas/Content/Quotas/Concepts/resourcequotas_topic-Compute_Quotas.htm) ·
  [Block Volume quotas](https://docs.oracle.com/en-us/iaas/Content/Quotas/Concepts/resourcequotas_topic-Block_Volume_Quotas.htm)
- [VCN FAQ (public IP pricing)](https://www.oracle.com/cloud/networking/virtual-cloud-network/faq/)
- [MySQL via Network Load Balancer](https://blogs.oracle.com/mysql/post/connecting-to-a-mysql-heatwave-database-instance-using-an-oci-network-load-balancer)
- [Idle reclamation email (51sec)](https://blog.51sec.org/2023/02/oracle-cloud-cleaning-up-idle-compute.html)
- [A1 cut (InfoQ)](https://www.infoq.com/news/2026/07/oracle-cloud-free-tier-limits/) ·
  [A1 cut and PAYG billing (terminalbytes)](https://terminalbytes.com/oracle-cloud-free-tier-changes-2026/)
- [Backup-count overage charge (scrapbox)](https://scrapbox.io/yokkin/OCI%E3%81%AE%E8%AA%B2%E9%87%91%E9%A1%8D%E3%81%8C1%E5%86%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%9F)
- [Oracle Cloud from India: cards, capacity (dev.to)](https://dev.to/ashish-codejourney/getting-a-free-oracle-cloud-vps-from-india-the-full-guide-and-the-rupay-wall-nobody-warns-you-4p5o)
