# Owner login and accounts (2026-10-19)

From the conversation of 2026-10-19. Status tags: **FIXED** (the user's word) ·
**AGREED** (user said yes to Claude's proposal) · **PROPOSED** (Claude's recommendation,
not yet confirmed) · **LATER** · **OPEN**. The database is the user's to design; table
shapes here are suggestions.

---

## 1. Login methods

- **FIXED:** Google login. Setup is in [`DECISIONS.md`](DECISIONS.md) ("Owner login").
- **FIXED (user, 2026-10-19):** email OTP as a second method at launch. Works in
  in-app browsers and for owners without a Google account. Codes go only to emails that
  already have an account (no open sign-up at launch). Needs SES production access,
  which is needed anyway for alerts and support mail.
- **LATER:** MFA (authenticator app, passkeys), recovery codes, phone OTP.

## 2. Requirements — FIXED (user)

- **If an owner loses access, switching their login must be easy from our side.**
- **The code and the design must be future-proof:** later login methods, MFA and staff
  accounts must come in without rework.

## 3. Data model — PROPOSED

The person, their ways of logging in, and the sites they can edit are kept apart:

| Table | Holds | Why |
|---|---|---|
| `users` | id, name, status (active / suspended) | The person. Never keyed by an email |
| `user_identities` | user_id, type (`google`, `email`; later `totp`, `passkey`, `phone`), subject (Google `sub` or lower-cased email), email, verified_at, last_used_at, revoked_at. Unique on (type, subject) | One user, many logins. New methods are new types, not new columns |
| `site_members` | user_id, site_id, role (`owner`, `editor`, `agency`) | Sites belong to the account, not to a login. Staff, ownership transfer and agency access are rows here |
| `sessions` | hashed token, user_id, created, last_seen, expires, device, IP, revoked_at | Server-side sessions, so one click logs a user out everywhere. Stateless JWTs can't be revoked |
| `otp_codes` | email, hashed code, expires, wrong tries, used | Only if email OTP is in |
| `audit_log` | actor, action, target, before / after, IP, time, note | Every admin action and every login or contact-info change |

- Google is matched on `sub`, never on email (the email on a Google account can change).
- Linking: a Google login joins an existing user only when Google says the email is
  verified and it matches that user's identity. Otherwise it is refused (no open
  sign-up at launch).

## 4. Rotating a lost login — PROPOSED

1. The owner contacts support (phone / WhatsApp).
2. **Identity check — FIXED (user): decided by the user case by case**, no fixed
   checklist in the product. The admin panel asks for a note on how the owner was
   verified, and it goes to the audit log.
3. Admin panel → **"Replace login"**: add the new email or Google account, revoke the old
   identities, **revoke all sessions**, and email both the old and the new address
   ("Your selfsite login was changed").
4. Reversible: the audit log keeps the old identity, so a wrong switch can be undone.

Self-serve while the owner still has access: add a new email (verified by OTP or Google),
then remove the old one.

## 5. Admin side — PROPOSED

- Admins are users with an admin role, and **must use a second factor from day one**
  (TOTP). Building TOTP for admins first is the same code owners get later.
- Agency edits go through an `agency` membership, not by logging in as the owner, so
  every change shows who made it.
- Admin actions: replace login, revoke sessions, suspend a user, suspend a site
  (takedown). All audited.

## 6. Security details — PROPOSED

- Session cookie: HttpOnly, Secure, SameSite=Lax, 30+ days, a new token at every login.
- CSRF protection on every state-changing API call (SameSite plus a custom header or
  token).
- OTP: 6 digits, 10 minutes, single use, stored hashed, a few wrong tries and it's dead,
  per-email and per-IP rate limits.
- Alert emails: new-device login; phone / contact / payment details changed (with a
  "this wasn't me" link).
- Never log OTP codes or session tokens.
- "Log out of all devices" for the owner.

## 7. What "future-proof" buys

| Later | What changes |
|---|---|
| MFA / passkeys / recovery codes | New identity types + a "requires second factor" flag on the user |
| Phone or WhatsApp OTP | A new identity type |
| Staff editors, transfer of ownership | Rows in `site_members` |
| Self-serve sign-up (Plus) | Lift the "existing accounts only" rule |
| Device list for owners | Already in `sessions` |

## 8. Open list

Nothing open. Everything in §3–§6 is Claude's proposal, to be confirmed when the user
designs the database and the backend.
