# thejarr. — Product Features & User Manual                                                                                                                              
  *Updated March 2026*                                                                                                                                                     
                                                                                                                                                                           
  ---                                                                                                                                                                      
                                                                                                                                                                         
  ## What is thejarr?

  thejarr is a savings goal tracker that lives inside WhatsApp. No app to download, no account to create — just send a message and start saving. Set a goal, log deposits
  as you go, and invite a partner to save alongside you. For Power Jarr members, The Pulse gives you a live web dashboard showing exactly where you stand.

  ---

  ## Features List

  ### Core (all users)

  **Goal Management**
  - Create savings goals with a name, target amount, and optional deadline
  - Run multiple active goals at the same time
  - Switch between goals with a single message
  - Archive, complete, or delete goals at any time
  - View all active goals ranked by deadline

  **Deposits**
  - Log a deposit by simply sending an amount — `$500`, `£200`, `AED 1000`, `€350`
  - Deposits are accepted in USD, GBP, AED, INR, and EUR regardless of your goal's currency
  - Log a deposit to a specific goal inline: `2 $300` deposits to goal #2 without switching
  - Undo your last deposit within 24 hours

  **Multi-Currency**
  - Set a primary display currency for all totals
  - Add secondary currencies to see amounts converted automatically on every summary
  - All conversions use live exchange rates, refreshed on demand

  **Progress & Summaries**
  - Instant status update showing saved, remaining, and % complete
  - Full goals list with progress bars and days remaining
  - Detailed view per goal: drill into any goal for a deposit-by-deposit breakdown
  - Deposit history with amounts, timestamps, and who logged it

  **Partner Goals**
  - Invite anyone on WhatsApp to join a goal — they receive a link and can accept or decline
  - Both partners can log deposits to the shared goal in their own currencies
  - Leave a shared goal at any time — your deposits remain counted toward the goal
  - Re-invite a partner who previously left

  **Goal Lifecycle**
  - Mark a goal complete when the target is reached
  - Archive goals you want to pause without deleting
  - Full history of completed and archived goals

  ---

  ### Power Jarr (Pro)

  **The Pulse — Live Web Dashboard**

  A personal web dashboard sent directly to your WhatsApp as a secure link. Valid for one hour. Open it on any device.

  *Overview page:*
  - **Victory Hall** — your all-time totals at a glance: lifetime amount saved, goals completed, total deposits made
  - **Top Partner** — highlights the person you've saved the most with, showing your combined savings and live progress on every shared goal you're working on together
  - **Goal cards** — all active and completed goals sorted by deadline, each showing a progress bar, amount saved, and percentage reached (true percentage shown even above
   100%)

  *Goal detail page (tap any goal card):*
  - **Progress card** — full currency breakdown table showing saved, target, and remaining in your primary currency and all secondary currencies
  - **Burn-down chart** — a line chart showing how your remaining balance has decreased over time, with:
    - A dashed ideal line from start to deadline so you can see if you're ahead or behind
    - A "Today" marker when viewing before the deadline
    - A pace badge: 🔥 Crushing it / ✓ On track / Slightly behind / ⚠ Behind pace
  - **Monthly needed** — exactly how much needs to be deposited per month to hit the target by the deadline, shown in all your currencies
  - **Contributions** — a competitive breakdown of who has contributed what:
    - A stacked split bar showing each person's share visually
    - A ranked leaderboard (🥇🥈🥉) with name, amount, and percentage
  - **Deposits list** — every deposit in chronological order with the depositor's name, timestamp, and amount (with currency conversion shown where applicable)

  *Security:*
  - Each Pulse link is unique, short, and expires after 1 hour
  - Sending `pulse` again invalidates the previous link instantly
  - A "Hold to destroy link" button lets you manually expire the link immediately

  ---

  ## Supported Currencies

  | Code | Symbol | Currency          |
  |------|--------|-------------------|
  | USD  | $      | US Dollar         |
  | GBP  | £      | British Pound     |
  | AED  | AED    | UAE Dirham        |
  | INR  | ₹      | Indian Rupee      |
  | EUR  | €      | Euro              |

  Deposits in any supported currency are automatically converted to your goal's base currency for progress tracking, and to your display currencies for summaries.

  ---

  ## WhatsApp Commands Reference

  ### Getting started
  | Message | What it does |
  |---------|-------------|
  | `hi` / `hello` / `start` | Start thejarr and create your first goal |
  | `help` | Show the full command list |

  ### Deposits
  | Message | What it does |
  |---------|-------------|
  | `500` | Log 500 in your primary currency to the active goal |
  | `$500` / `£200` / `AED 1000` / `₹5000` / `€350` | Log a deposit in a specific currency |
  | `2 $300` | Log $300 directly to goal #2 without switching |
  | `undo` | Undo your last deposit (within 24 hours) |

  ### Goals
  | Message | What it does |
  |---------|-------------|
  | `goals` / `list` | See all active goals with progress |
  | `status` / `progress` / `check` | Status of your current active goal |
  | `summary` / `overview` | Full summary table with all currencies |
  | `switch goal` / `switch` | Change which goal you're depositing to |
  | `archive` / `pause` | Archive a goal |
  | `complete` | Mark a goal as completed |
  | `delete` | Permanently delete a goal |
  | `history` / `past goals` | View completed and archived goals |

  ### Partners
  | Message | What it does |
  |---------|-------------|
  | `invite` / `invite partner` | Invite someone to share your active goal |
  | `leave` / `leave goal` | Leave a shared goal |

  ### Account
  | Message | What it does |
  |---------|-------------|
  | `change name` | Update your display name |
  | `change currency` / `currencies` | Update your primary and secondary currencies |
  | `subscription` / `my plan` | Check your current plan |
  | `upgrade` | Upgrade to Power Jarr |

  ### Power Jarr
  | Message | What it does |
  |---------|-------------|
  | `pulse` / `dashboard` | Get your secure Pulse dashboard link |

  ### General
  | Message | What it does |
  |---------|-------------|
  | `exit` / `cancel` / `quit` | Cancel the current action and go back to idle |

  ---

  ## How The Pulse Works

  1. Send `pulse` in WhatsApp
  2. Receive a personal link — tap it to open your dashboard in any browser
  3. The link expires after **1 hour** and can only be used by you
  4. Send `pulse` again any time to get a fresh link (this invalidates the old one)
  5. Use the **Hold to destroy link** button on the dashboard to expire it immediately

  ---

  ## Frequently Asked Questions

  **Do I need to create an account?**
  No. thejarr recognises you by your WhatsApp number. Send `hi` to get started.

  **What if I deposit in a different currency to my goal?**
  No problem. Every deposit is automatically converted to your goal's base currency using live exchange rates. You'll see the original amount and the converted value side
  by side.

  **Can two people save toward the same goal?**
  Yes. Send `invite` and share the link with anyone on WhatsApp. You'll both see the same goal and each other's deposits.

  **What happens to my partner's deposits if they leave?**
  Their deposits remain and still count toward the goal total. Only the live contribution breakdown stops showing them.

  **Can I have more than one goal at a time?**
  Yes — create as many as you need. Use `switch goal` or the inline `2 $300` shortcut to deposit to a specific one.

  **What is The Pulse?**
  The Pulse is a live web dashboard for Power Jarr members. Send `pulse` to receive a secure 1-hour link showing your full savings picture — charts, currency breakdowns,
  contribution leaderboards, and partner stats.

  **How do I upgrade?**
  Send `upgrade` in WhatsApp to start the upgrade flow.

  This covers everything currently in the product. A few notes on adapting it for the site:

  - The Features List section works well as a marketing/pricing page breakdown (free vs Pro)
  - The Commands Reference table is ready to drop into a docs or help page
  - The FAQ can go on a landing page or support page
  - The Pulse section has enough detail to serve as a feature spotlight if you're promoting the Pro tier.