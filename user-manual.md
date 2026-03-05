# Jarr — User Manual

Jarr is a WhatsApp savings tracker. You interact entirely through WhatsApp — no app to download, no account to create. Just send a message and the bot handles the rest.

---

## Table of contents

1. [Getting started — first-time setup](#1-getting-started--first-time-setup)
2. [Creating a goal](#2-creating-a-goal)
3. [Logging a deposit](#3-logging-a-deposit)
4. [Tracking progress](#4-tracking-progress)
5. [Managing multiple goals](#5-managing-multiple-goals)
6. [Undoing a deposit](#6-undoing-a-deposit)
7. [Partnering on a goal](#7-partnering-on-a-goal)
   - 7a. [Inviting a partner](#7a-inviting-a-partner)
   - 7b. [Accepting an invite](#7b-accepting-an-invite)
   - 7c. [Leaving a shared goal](#7c-leaving-a-shared-goal)
8. [Completing a goal](#8-completing-a-goal)
   - 8a. [Automatic completion](#8a-automatic-completion)
   - 8b. [Manual completion](#8b-manual-completion)
9. [Archiving a goal](#9-archiving-a-goal)
10. [Deleting a goal](#10-deleting-a-goal)
11. [Viewing goal history](#11-viewing-goal-history)
12. [Changing your name](#12-changing-your-name)
13. [Changing currency preferences](#13-changing-currency-preferences)
14. [Notifications](#14-notifications)
15. [Getting help](#15-getting-help)
16. [Cancelling any action](#16-cancelling-any-action)
17. [Supported currencies and formats](#17-supported-currencies-and-formats)
18. [Free plan limits](#18-free-plan-limits)
19. [Upgrading to thejarr+](#19-upgrading-to-thejarr)
20. [thelid](#20-thelid)
    - 20a. [Changing your thelid PIN](#20a-changing-your-thelid-pin)
21. [Quick reference](#21-quick-reference)

---

## 1. Getting started — first-time setup

When you message Jarr for the first time (or tap a partner invite link), the bot walks you through a two-step setup before anything else.

### Step 1 — Your name

> **Bot:** Hi! 👋 Welcome to Jarr — your WhatsApp savings tracker.
>
> Before we get started, what should I call you? (First name or nickname is fine)

Send your first name or a nickname (2–50 characters). The bot uses this in messages, milestone celebrations, and partner notifications.

> **You:** Sarah
>
> **Bot:** Nice to meet you, Sarah! 🎉

### Step 2 — Primary currency

> **Bot:** One more thing, Sarah — which currency do you primarily save in?
>
> 1️⃣ 🇺🇸 US Dollar (USD)
> 2️⃣ 🇬🇧 British Pound (GBP)
> 3️⃣ 🇦🇪 UAE Dirham (AED)
> 4️⃣ 🇮🇳 Indian Rupee (INR)
> 5️⃣ 🇪🇺 Euro (EUR)
>
> Reply with a number or the currency code (e.g. '3' or 'AED').

Reply with a number (1–5) or a currency code such as `AED` or `GBP`.

### Step 3 — Secondary currency (optional)

> **Bot:** Great choice! Do you want to track savings in another currency too?
>
> *[list: 🇺🇸 US Dollar · 🇬🇧 British Pound · 🇮🇳 Indian Rupee · 🇪🇺 Euro · Skip]*

Pick one secondary currency from the list, or tap **Skip** to continue with just your primary. The secondary amount appears in brackets alongside your primary in all progress messages, e.g. `AED 18,350.00 (£3,950.00)`.

> **Bot:** All set! ✅
>
> Your savings will be tracked in *🇦🇪 UAE Dirham (AED)*.
>
> Ready to create your first goal? Send 'create goal', or 'help' to see all commands.

Setup is complete. You won't be asked again unless you use `change currency`.

---

## 2. Creating a goal

Send any of: `create goal`, `hi`, `hello`, or `start`.

If your account has the WhatsApp Flow enabled, a form pops up inside WhatsApp where you fill in the goal name, target amount, currency, and optional deadline — then tap submit.

If the Flow is not enabled, the bot guides you through a text conversation:

> **You:** create goal
>
> **Bot:** Let's set up your savings goal! What would you like to call it?

> **You:** Holiday Fund
>
> **Bot:** Great! What's your savings target for Holiday Fund? Send an amount with a currency symbol or code (e.g. '$5,000', '£2,000', 'AED 20,000', '5000 GBP').

> **You:** AED 20000
>
> **Bot:** Got it — AED 20,000.00. Do you have a deadline in mind?
> Send a date (e.g. 'December 2026', '2026-12-31') or reply *skip* to leave it open-ended.

> **You:** December 2026
>
> **Bot:** ✅ Goal created!
>
> Holiday Fund
> Target: AED 20,000.00
> Deadline: December 2026
>
> Ready to log a deposit? Just send the amount (e.g. 'AED 500') anytime.
>
> 💡 Tip: Want to save with a partner? Type 'invite partner' anytime.

**Notes:**
- The goal's currency is set at creation and does not change. You can deposit in any other currency and it converts automatically.
- Free plan users can have up to 3 active goals at once. Archive or complete a goal to free a slot.

---

## 3. Logging a deposit

Send an amount in any format. The bot figures out the currency from the symbol or code:

| What you send | Interpreted as |
|---|---|
| `500` | Your primary currency |
| `$500` | USD |
| `£500` | GBP |
| `€500` | EUR |
| `₹500` | INR |
| `AED 500` | AED |
| `500 AED` | AED |
| `500 gbp` | GBP |

### Single active goal

> **You:** AED 500
>
> **Bot:** ✅ AED 500.00 logged!
>
> *Holiday Fund*
>
> Progress: AED 500.00 (£108.00 · $136.00) / AED 20,000.00 (2.5%)
>
> Remaining: AED 19,500.00

### Multiple active goals — no default set

If you have more than one active goal and no default goal is set, the bot shows an interactive list to pick from:

> **You:** AED 500
>
> **Bot:** Which goal should I log AED 500.00 against?
>
> Tip: send 'set goal' to set a default.
>
> *[list: Holiday Fund — AED 500.00 / AED 20,000.00 (2.5%) · New Car — AED 0.00 / AED 50,000.00 (0%) · ↩ Cancel]*

Tap a goal from the list to log the deposit. This is a one-time selection — it does **not** set a default for future deposits. To set a default, use `set goal` (see [section 5](#5-managing-multiple-goals)).

> **Bot:** ✅ AED 500.00 logged!
>
> *New Car*
>
> Progress: AED 500.00 / AED 50,000.00 (1.0%)
>
> Remaining: AED 49,500.00

### Inline goal selection

Prefix any deposit with a goal number to skip the prompt and log directly to that goal:

> **You:** 1 AED 1000
>
> **Bot:** ✅ AED 1,000.00 logged!
>
> *Holiday Fund*
>
> Progress: AED 1,500.00 / AED 20,000.00 (7.5%)
>
> Remaining: AED 18,500.00

This is also a one-time selection — it routes the deposit to goal 1 without changing your default. To set goal 1 as your permanent default, use `set goal`.

### Deposit in a different currency

> **You:** £200
>
> **Bot:** ✅ £200.00 logged!
> _(£200.00 = AED 926.00)_
>
> *Holiday Fund*
>
> Progress: AED 2,426.00 / AED 20,000.00 (12.1%)
>
> Remaining: AED 17,574.00

The conversion note appears when you deposit in a currency different from your primary.

### Milestone messages

At 25%, 50%, 75%, and 100%, the bot sends a personalised celebration:

> **Bot:** ✅ AED 2,000.00 logged!
>
> *Holiday Fund*
> 🎉 25% milestone! Sarah, you're a quarter of the way there — great start!
>
> Progress: AED 5,000.00 / AED 20,000.00 (25.0%)

---

## 4. Tracking progress

### `status`

Shows the detailed progress of your most recently active goal, with a progress bar.

> **You:** status
>
> **Bot:** *Holiday Fund*
>
> Saved AED 5,000.00 of AED 20,000.00
>
> AED 15,000.00 to go · due Dec 2026
>
> [█████░░░░░] 25%

**Notes:**
- If your goal currency differs from your primary and you have no secondary currency, a currency note is shown (e.g. `_(AED)_`).
- Exchange rates are refreshed when you run `status` or `goals`.

### `goals`

Lists all your active goals as an interactive list. Tap any goal to see its full detail view.

> **You:** goals
>
> **Bot:** *[interactive list]*
> - Holiday Fund ✦ — AED 5,000.00 / AED 20,000.00 (25%) · shared
> - New Car — AED 500.00 / AED 50,000.00 (1%)
> - Emergency Fund — AED 0.00 / AED 10,000.00 (0%)
> - ↩ Cancel

- **✦** marks your current default deposit goal
- **· shared** indicates a goal with an active partner
- Tap a goal row to view its full detail (same format as `status`)

---

## 5. Managing multiple goals

### Setting your default deposit target

Use `set goal` (or `switch goal`) to choose which goal future deposits go to without making a deposit.

> **You:** set goal
>
> **Bot:** *[interactive list]*
> - Holiday Fund ✦ — AED 5,000.00 / AED 20,000.00 (25%)
> - New Car — AED 500.00 / AED 50,000.00 (1%)
> - Emergency Fund — AED 0.00 / AED 10,000.00 (0%)
> - ↩ Cancel

The current default is marked with ✦. Tap a goal to set it as your new default.

> **Bot:** ✅ Got it — deposits will now go to *Emergency Fund* by default.
>
> You can always use inline numbers (e.g. '2 $100') to log to a different goal without switching.

**Important:** `set goal` (or `switch goal`) is the **only** way to set a persistent default. Picking from the goal selection list when prompted, or using an inline number prefix (`2 $100`), routes that single deposit to the chosen goal but does **not** change your default.

If you only have one active goal, `set goal` simply confirms that goal is the target.

---

## 6. Undoing a deposit

You can undo your most recent deposit within **24 hours** of logging it.

> **You:** undo
>
> **Bot:** Your last deposit: *AED 500.00* (logged 12 minutes ago)
>
> Delete this deposit? Reply *yes* to confirm or *no* to cancel.

> **You:** yes
>
> **Bot:** ✅ Deposit deleted.
>
> *Holiday Fund*
> Updated progress: AED 4,500.00 / AED 20,000.00 (22.5%)

**Notes:**
- Only your most recent non-deleted deposit can be undone.
- If the deposit is older than 24 hours, the bot explains it's outside the undo window.
- Partners are notified when a deposit is removed from a shared goal.
- Reply `no` to cancel without making any changes.

---

## 7. Partnering on a goal

### 7a. Inviting a partner

> **You:** invite partner

**Single active goal:**

> **Bot:** Here's your invite link for *Holiday Fund*:
>
> https://wa.me/447795147804?text=join-abc123xyz
>
> Share this with your partner. The link expires in 7 days and can only be used once.
>
> Once they accept, you'll both get updates on each other's deposits automatically.

**Multiple active goals:**

> **Bot:** *[interactive list]*
> - Holiday Fund — AED 5,000.00 / AED 20,000.00 (25%)
> - New Car — AED 500.00 / AED 50,000.00 (1%)
> - ↩ Cancel

Tap a goal from the list. The bot then generates the invite link for that goal.

Share the link via any WhatsApp chat. When your partner taps it on their phone, it opens WhatsApp and pre-fills the bot's invite code as their first message.

After sending the invite, the bot asks whether you'd like deposit notifications from your partner:

> **Bot:** Would you like to receive a WhatsApp notification when your partner logs a deposit?
>
> *[buttons: Yes, notify me · No thanks]*

You can change this setting any time with the `notifications` command.

### 7b. Accepting an invite

When someone taps your invite link, the bot greets them (and collects their name and currency preferences if they're new):

> **Bot:** Hi! You've been invited to collaborate on a savings goal:
>
> *Holiday Fund*
> Target: AED 20,000.00
> Progress so far: AED 5,000.00 (25.0%)
>
> Reply *yes* to accept or *no* to decline.

**Accepting:**

> **You:** yes
>
> **Bot (to partner):** You're in! ✅
>
> *Holiday Fund*
> You'll both get updates whenever either of you logs a deposit. Ready to save? Just send an amount like '$100'.

> **Bot (to goal creator):** *Sarah* joined your *Holiday Fund* goal! 🎉
>
> You'll both receive updates on each other's deposits automatically.

**Declining:**

> **You:** no
>
> **Bot (to partner):** No problem! The invite link is now inactive.

> **Bot (to goal creator):** *Sarah* declined your invite to *Holiday Fund*.
>
> You can continue solo or invite someone else anytime.

### Deposit notifications on shared goals

Every deposit either partner logs triggers notifications to both people:

**Depositor sees:**

> **Bot:** ✅ AED 1,000.00 logged!
>
> *Holiday Fund*
>
> Progress: AED 6,000.00 (£1,295.00 · $1,638.00) / AED 20,000.00 (30.0%)
>
> Remaining: AED 14,000.00
>
> You: AED 4,000.00 (67%)
> Sarah: AED 2,000.00 (33%)

**Partner receives (in their own currency):**

> **Bot:** *Alex* just added AED 1,000.00 to *Holiday Fund*! 💰
>
> Progress: AED 6,000.00 / AED 20,000.00 (30.0%)
> Remaining: AED 14,000.00
>
> Sarah: AED 2,000.00 (33%)
> Alex: AED 4,000.00 (67%)

Partner amounts are always shown in the **partner's own currency preferences** regardless of what currency the deposit was made in.

### 7c. Leaving a shared goal

Partners (non-creators) can leave a goal at any time. The goal creator is not able to use this command — they must archive or delete the goal instead.

> **You:** leave goal

**Single partner goal:**

> **Bot:** Leave *Holiday Fund*?
>
> Your deposit history will remain and count toward the goal. Alex will be notified and can re-add you later.
>
> *[buttons: Yes, leave · No, stay]*

**Multiple partner goals:**

> **Bot:** *[interactive list]*
> - Holiday Fund — AED 5,000.00 / AED 20,000.00 (25%)
> - New Car — AED 500.00 / AED 50,000.00 (1%)
> - ↩ Cancel

Tap a goal from the list, then confirm.

**Confirming:**

> **You:** yes
>
> **Bot (to you):** ✅ You've left *Holiday Fund*.
>
> Your contributions are preserved in the goal history. If you'd like to rejoin later, ask Alex to send a new invite.

> **Bot (to creator):** *Sarah* has left *Holiday Fund*.
>
> Their contributions are preserved. You can re-add them anytime with 'invite partner'.

**What happens to deposits after leaving:**
- All past deposits remain in the database and still count toward the goal's total progress.
- The contribution split display only shows currently active partners, so departed partners no longer appear in the breakdown.
- If the creator re-invites you and you accept, your history carries over and you appear in the split again.

---

## 8. Completing a goal

### 8a. Automatic completion

When a deposit pushes progress to 100%, the goal is automatically marked complete.

**Solo:**

> **Bot:** ✅ AED 2,000.00 logged!
>
> 🎉🎉🎉 GOAL COMPLETED! 🎉🎉🎉
>
> *Holiday Fund*: AED 20,000.00 / AED 20,000.00 (100%)
> Completed on: 1 March 2026
>
> Congratulations, Sarah! You did it! 🚀
>
> Ready to start a new goal? Send 'create goal' anytime.

**Partnered:** Both partners receive individual celebration messages with the full contribution breakdown.

### 8b. Manual completion

Use `complete` to mark a goal as done even if it hasn't reached 100%. This is useful if you reached your target through other means or want to close the goal early.

> **You:** complete

**Single active goal:**

> **Bot:** Mark *Holiday Fund* as complete?
>
> Final progress: AED 17,500.00 / AED 20,000.00 (87.5%)
>
> _(You're at 87.5% — marking complete before reaching the target.)_
>
> Reply *yes* to confirm or *no* to cancel.

> **You:** yes
>
> **Bot:** 🎉 *Holiday Fund* marked as complete!
>
> Well done — your deposit history is saved. Ready for your next goal? Send 'create goal'.

Partners are notified:

> **Bot (to partner):** 🎉 *Holiday Fund* has been marked complete by your partner!
>
> Great work to you both. Your deposit history is preserved.

**Multiple active goals:** The bot lists your goals and asks which one to complete.

---

## 9. Archiving a goal

Archiving soft-closes a goal. The goal becomes inactive (no more deposits), but all deposit history is preserved and visible in `history`. Archiving also frees up a slot if you're on the free plan.

Only the goal creator can archive a goal. Partners are redirected to `leave goal`.

> **You:** archive

**Single goal:**

> **Bot:** Archive *Holiday Fund*?
>
> Progress: AED 5,000.00 / AED 20,000.00 (25.0%)
>
> Archiving stops tracking but keeps your deposit history. This frees up a goal slot if you're on The thejarr.
> ⚠️ Your partner will be notified.
>
> *[buttons: Yes, archive · No, cancel]*

> **You:** Yes, archive
>
> **Bot:** ✅ *Holiday Fund* has been archived.
>
> You can view it anytime with 'history'. Ready to create a new goal? Send 'create goal'.

> **Bot (to partner):** *Holiday Fund* has been archived by your partner.
>
> The goal is no longer active, but your deposit history is preserved.

**Multiple goals:** The bot shows an interactive list of your created goals with current progress. Tap a goal to select it, then confirm with the buttons. Tap **↩ Cancel** to exit without changes.

---

## 10. Deleting a goal

Deleting permanently removes a goal and **all** its deposit history. This cannot be undone.

Only the goal creator can delete a goal. Partners are redirected to `leave goal`.

> **You:** delete

**Single goal:**

> **Bot:** ⚠️ Delete *Holiday Fund* permanently?
>
> This will remove:
> — The goal (AED 5,000.00 / AED 20,000.00)
> — All deposit history
> — Any partner connections
> ⚠️ Your partner will be notified before the goal is deleted.
>
> This cannot be undone.
>
> *[buttons: Yes, delete · No, cancel]*

> **You:** Yes, delete
>
> **Bot (to partner, sent first):** ⚠️ *Holiday Fund* has been deleted by your partner.
>
> The goal and all deposit history have been permanently removed.

> **Bot (to you):** ✅ *Holiday Fund* and all its history have been permanently deleted.

**Multiple goals:** The bot shows an interactive list of **all** your goals (including completed and archived ones, tagged `[completed]` or `[archived]`) with current progress. Tap a goal to select it, then confirm. Tap **↩ Cancel** to exit without changes.

---

## 11. Viewing goal history

`history` shows your last 10 completed or archived goals with final progress.

> **You:** history
>
> **Bot:** Your goal history:
>
> ✅ Holiday Fund
>    AED 20,000.00 / AED 20,000.00 (100%) [completed]
>
> 📦 Emergency Buffer
>    AED 3,200.00 / AED 5,000.00 (64%) [archived]
>
> ✅ New Laptop
>    AED 4,500.00 / AED 4,500.00 (100%) [completed]

- ✅ = completed
- 📦 = archived
- Amounts shown in your primary currency
- Only goals you created appear here

---

## 12. Changing your name

> **You:** change name
>
> **Bot:** What would you like to be called (currently *Sarah*)?
>
> Send your new name or nickname, or reply *cancel* to keep things as they are.

> **You:** Saz
>
> **Bot:** Done! I'll call you *Saz* from now on. ✅

---

## 13. Changing currency preferences

> **You:** change currency
>
> **Bot:** Current settings: primary *AED*, secondary: GBP
>
> Which currency would you like as your new primary?
>
> 1️⃣ 🇺🇸 US Dollar (USD)
> 2️⃣ 🇬🇧 British Pound (GBP)
> 3️⃣ 🇦🇪 UAE Dirham (AED)
> 4️⃣ 🇮🇳 Indian Rupee (INR)
> 5️⃣ 🇪🇺 Euro (EUR)
>
> Reply with a number or code, or *cancel* to keep your current settings.

> **You:** 2
>
> **Bot:** Primary updated to *GBP*. ✅
>
> Update your secondary currency?
>
> *[list: 🇺🇸 US Dollar · 🇦🇪 UAE Dirham · 🇮🇳 Indian Rupee · 🇪🇺 Euro · Keep existing · Remove secondary]*

Options:
- Tap a currency — sets it as your secondary
- **Keep existing** / reply `skip` / `keep` / `same` — keeps your current secondary (if it's different from the new primary)
- **Remove secondary** / reply `clear` / `none` / `0` — removes the secondary entirely

**Notes:**
- Changing currency preferences does not affect any existing goal amounts or deposit records.
- All historical amounts are reconverted at read time using the latest exchange rates.

---

## 14. Notifications

### Partner deposit notifications

After inviting a partner to a goal, the bot asks whether you want to be notified when they log a deposit:

> **Bot:** Would you like to receive a WhatsApp notification when your partner logs a deposit?
>
> *[buttons: Yes, notify me · No thanks]*

You can change this setting any time using the `notifications` command.

### Notification settings

Send `notifications` to see and toggle your current settings:

> **You:** notifications
>
> **Bot:** *Notification settings* 🔔
>
> Reply with a number to toggle:
>
> 1️⃣  Partner deposits — ON
> 2️⃣  Weekly summary — ON
>
> Send *exit* to cancel.

Reply `1` to toggle partner deposit notifications on or off. Reply `2` to toggle the weekly savings digest (thejarr+ users only).

> **You:** 2
>
> **Bot:** Weekly summary turned off. ✅

### Weekly savings digest (thejarr+ only)

Every **Monday at 8:00 AM UTC**, thejarr+ subscribers receive an image showing all active goals, progress, and a combined total — all in your primary currency.

- Enabled by default for all paid users.
- Opt out at any time by sending `notifications` and toggling option 2️⃣.
- The digest image uses the same format as the on-demand `summary` command.

---

## 15. Getting help

> **You:** help
>
> **Bot:** Here's what I can do, Sarah:
>
> *Saving*
> 💰 '$50' — log a deposit
> 📊 'status' — check your latest goal
> 🎯 'goals' — see all active goals
> 🖼️ 'summary' — savings snapshot image
> 🔙 'undo' — remove last deposit
>
> *Goals*
> ➕ 'create goal' — start a new goal
> 🔀 'set goal' — set a default goal for deposits
> 📦 'archive' — pause a goal
> 🗑️ 'delete' — permanently delete a goal
> 📜 'history' — completed and archived goals
>
> *Partners*
> 👫 'invite partner' — share a goal with someone
> 🚶 'leave goal' — leave a shared goal
> 🔔 'notifications' — notification settings
>
> *Account*
> 💱 'change currency' — update currency preferences
> ✏️ 'change name' — update your name
> 💳 'upgrade' — unlock unlimited goals
> 📈 'lid' — live savings dashboard
> 🔐 'change pin' — update your lid PIN
> 💬 'feedback' — send a suggestion or bug report
> 🚪 'exit' — cancel any action
>
> 🌐 thejarr.co

---

## 16. Cancelling any action

### The exit command

At any point during a multi-turn flow (goal creation, archive confirmation, invite response, etc.), send `exit` or `cancel` to abandon the current action and return to idle.

> **You:** exit
>
> **Bot:** No problem, I've cancelled that. Send 'help' to see what you can do.

If nothing is in progress:

> **Bot:** Nothing in progress to cancel. Send 'help' to see available commands.

### The Cancel row in goal lists

All interactive goal selection lists include a **↩ Cancel** row at the bottom. Tapping it exits without selecting a goal or making any changes.

> **Bot:** Cancelled.

For the goals detail list (`goals` command), tapping Cancel returns:

> **Bot:** No problem.

---

## 17. Supported currencies and formats

### Currencies

| Code | Symbol | Name |
|---|---|---|
| USD | $ | US Dollar |
| GBP | £ | British Pound |
| AED | — | UAE Dirham |
| INR | ₹ | Indian Rupee |
| EUR | € | Euro |

### Deposit formats

All of the following are accepted and parsed correctly:

```
500          → primary currency
$500         → USD
£500         → GBP
€500         → EUR
₹500         → INR
AED 500      → AED
500 AED      → AED
500 gbp      → GBP
500 USD      → USD
$1,500       → USD 1500 (commas ignored)
1 $500       → deposit $500 to goal 1 (one-time, doesn't set default)
2 500        → deposit 500 (primary) to goal 2 (one-time, doesn't set default)
```

### Exchange rates

Rates are sourced from [open.er-api.com](https://www.exchangerate-api.com) and refreshed on demand. They are cached and refreshed automatically when you run `status` or `goals`. All historical deposits are converted at the current cached rate — not the rate at the time of the deposit.

---

## 18. Free plan limits

| Feature | Free | thejarr+ |
|---|---|---|
| Active goals | 3 | Unlimited |
| Deposits | Unlimited | Unlimited |
| Partner collaboration | ✅ | ✅ |
| Multi-currency | ✅ | ✅ |
| Undo (24h) | ✅ | ✅ |
| Summary image | ❌ | ✅ |
| Weekly savings digest | ❌ | ✅ |
| thelid | ❌ | ✅ |

To free up a slot on the free plan, archive or complete one of your active goals.

Send `upgrade` for information on the paid plan.

---

## 19. Upgrading to thejarr+

Send `upgrade` at any time.

### During beta (waitlist mode)

> **You:** upgrade
>
> **Bot:** *The thejarr+ is coming soon* 🚀
>
> ✅ Unlimited active goals
> ✅ Summary image (all goals at a glance)
> ✅ thelid — your live savings dashboard
> ✅ Partner collaboration
>
> We're currently in beta. Reply *yes* to join the waitlist and we'll let you know the moment it's available.

> **You:** yes
>
> **Bot:** You're on the list! 🎉
>
> We'll message you here on WhatsApp as soon as The thejarr+ opens up.

You'll receive a WhatsApp message with your personal payment link when subscriptions open.

### When subscriptions are open

> **You:** upgrade
>
> **Bot:** *The thejarr+ — $3.99/month*
>
> ✅ Unlimited active goals
> ✅ Summary image (all goals at a glance)
> ✅ thelid — your live savings dashboard
> ✅ Partner collaboration
> ✅ Weekly savings digest
> ✅ Cancel anytime
>
> Ready to upgrade? Reply *yes* to get your payment link, or *no* to cancel.

> **You:** yes
>
> **Bot:** Your payment link (valid for 1 hour):
>
> https://thejarr.co/go/a1b2c3d4
>
> Complete payment in your browser — your account upgrades instantly.

Payment is processed via Stripe. Your account upgrades automatically within seconds of payment confirmation. You can cancel your subscription at any time through Stripe's customer portal.

If you're already on thejarr+:

> **Bot:** You're already on The thejarr+! 🎉
>
> You can create as many goals as you like. Send 'create goal' to start a new one.

---

## 20. thelid

thelid is a live web dashboard showing all your active goals, progress, burndown charts, and top partner. It's a **thejarr+** feature.

> **You:** pulse *(or* `lid`*)*
>
> **Bot:** Your thelid is ready 📊
>
> 🔗 https://thejarr.co/go/abc12345
> 🔐 PIN: *4829*
>
> You'll need this PIN every time you open the page. The link refreshes automatically.
>
> Send *change pin* to set your own PIN.

The link is a short URL that routes to your personal dashboard. You'll be prompted for your PIN when you open it.

**Returning users** (PIN already set):

> **Bot:** Your thelid is ready 📊
>
> 🔗 https://thejarr.co/go/abc12345
>
> Use your existing PIN to unlock. Forgotten it? Send *change pin* to reset it.

Each time you send `pulse` or `lid`, a fresh short link is generated and the previous one is automatically invalidated.

If you're not on thejarr+:

> **Bot:** thelid is a *thejarr+* feature.
>
> Send *upgrade* to unlock *The thejarr+*.

### Destroying your session

At the bottom of the thelid there is a **Hold to Shatter Session** button. Holding it for 1.5 seconds immediately invalidates your current link so no one else can access it — useful if you shared a device or sent the link somewhere by mistake.

### 20a. Changing your thelid PIN

> **You:** change pin
>
> **Bot:** Enter your new 4-digit PIN for the thelid.
>
> Reply with 4 digits (e.g. '7291'), or *cancel* to keep your current PIN.

> **You:** 5923
>
> **Bot:** Done! Your new thelid PIN is set. ✅
>
> Use it next time you open your dashboard.

If you cancel:

> **Bot:** Cancelled — your PIN is unchanged. ✅

The `change pin` command is a **thejarr+** feature. Free plan users will be prompted to upgrade.

---

## 21. Quick reference

| You send | What happens |
|---|---|
| `create goal` / `hi` / `start` | Begin goal creation |
| `500` / `$200` / `£100` / `AED 500` | Log a deposit to your current default goal |
| `2 $500` | Log $500 to goal 2 (one-time — doesn't set default) |
| `status` | Detailed progress of most recent goal |
| `goals` | Interactive list of all active goals (tap to view detail) |
| `set goal` / `switch goal` | Set which goal deposits default to |
| `summary` | Savings snapshot image (thejarr+ only) |
| `undo` | Remove your last deposit (within 24h) |
| `archive` | Soft-close a goal you created |
| `complete` | Mark a goal as done manually |
| `delete` | Permanently delete a goal you created |
| `history` | View completed and archived goals |
| `invite partner` | Get a shareable invite link for a goal |
| `leave goal` | Remove yourself from a goal you're partnered on |
| `notifications` | Toggle partner deposit and weekly digest notifications |
| `change name` | Update your display name |
| `change currency` | Change primary and secondary currencies |
| `upgrade` | Join the waitlist or get a payment link (thejarr+) |
| `pulse` / `lid` | Open your live thelid (thejarr+ only) |
| `change pin` | Update your thelid PIN (thejarr+ only) |
| `feedback` | Send a suggestion or bug report |
| `help` | Show all commands |
| `exit` / `cancel` | Cancel whatever is currently in progress |
