## Phase H — handoff

Write `{{REPORTS}}/handoff.md`: a table with one row per variant N=1..10: whether
`{{REPORTS}}/nightrunN.html` exists and passes `python3 ~/runs/selfsite-wire/check.py N`, its
direction name, file size, and any `*-left.md` notes. Run the check for each yourself; report
what really happened, including failures. Do not create or fix variants in this phase.
