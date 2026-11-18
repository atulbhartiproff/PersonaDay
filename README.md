# Life RPG

> **Turn your real life into an RPG.** Build your attributes, complete quests, maintain meaningful connections, and create a record of the person you're becoming.

[![Status](https://img.shields.io/badge/status-planning-blue)](#roadmap)
[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-111827)](#tech-stack)
[![Client](https://img.shields.io/badge/client-React%20Native%20%2B%20Expo-4630EB)](#tech-stack)
[![Backend](https://img.shields.io/badge/backend-FastAPI-009688)](#tech-stack)

**Life RPG** is a mobile-first personal development application with game mechanics inspired by the **Persona series**—especially its social attributes, Confidant / Social Link progression, calendar-based daily choices, relationship milestones, and satisfying rank-up moments.

The goal is to bring that feeling into real life: activities develop your character, goals become quests, people you care about become Connections (Confidants), and memories become part of your personal timeline.

> [!IMPORTANT]
> Persona is the creative inspiration and design reference for this project. Life RPG will use its **own name, visual assets, icons, characters, writing, layouts, and implementation**. We want the same broad feeling of stylish menus, meaningful progression, social bonds, and a life-simulation calendar—not copied game assets or an imitation of exact screens.

---

## Contents

- [Vision](#vision)
- [Core gameplay loop](#core-gameplay-loop)
- [Feature map](#feature-map)
- [Persona-inspired design direction](#persona-inspired-design-direction)
- [Tech stack](#tech-stack)
- [Architecture](#architecture)
- [Repository structure](#repository-structure)
- [Feature modules and required functions](#feature-modules-and-required-functions)
  - [Player and attributes](#1-player-and-attributes)
  - [Activities and XP engine](#2-activities-and-xp-engine)
  - [Connections / Confidants](#3-connections--confidants)
  - [Quests and challenges](#4-quests-and-challenges)
  - [Calendar and scheduling](#5-calendar-and-scheduling)
  - [Memories and reflection](#6-memories-and-reflection)
  - [Achievements and rewards](#7-achievements-and-rewards)
  - [Notifications](#8-notifications)
  - [Offline storage and sync](#9-offline-storage-and-sync)
- [Data model](#data-model)
- [API outline](#api-outline)
- [Important business rules](#important-business-rules)
- [Development setup](#development-setup)
- [Testing strategy](#testing-strategy)
- [Roadmap](#roadmap)
- [MVP acceptance checklist](#mvp-acceptance-checklist)
- [Product principles](#product-principles)
- [Future ideas](#future-ideas)

---

## Vision

Most habit trackers record whether a task was completed. Life RPG should show how that action contributes to a larger character journey.

The app has two equally important sides:

1. **Who am I becoming?** Attributes, skills, habits, goals, discipline, and achievements.
2. **Who am I building my life with?** Friendships, meaningful interactions, shared experiences, and memories.

The product should feel like a personal RPG menu—not a spreadsheet with XP bars. Opening the app should make it clear what the player is working towards, what has changed, and what they could do next.

### Product pillars

| Pillar | What it does | Persona inspiration |
|---|---|---|
| Character development | Actions award XP to personal attributes | Social stats and character progression |
| Confidants | People have private connection profiles, bond ranks, and interaction histories | Confidant / Social Link system |
| Calendar | Plan and review how each day is spent | Daily calendar and time choices |
| Quests | Turn long-term goals into smaller objectives | Requests, challenges, and milestones |
| Memories | Save meaningful moments and reflect on progress | Story scenes and relationship memories |
| Presentation | Make progression feel rewarding through motion, typography, sound, and visual feedback | Stylish, high-energy RPG presentation |

---

## Core gameplay loop

```mermaid
flowchart TD
    A[Open Home / daily briefing] --> B[Choose an activity, quest, or connection]
    B --> C[Complete the real-world action]
    C --> D[Log the action]
    D --> E[Validate and calculate rewards]
    E --> F[Update player XP and attributes]
    E --> G[Update quest progress]
    E --> H[Update connection progress when relevant]
    F --> I[Show XP feedback / rank-up]
    G --> I
    H --> I
    I --> J[Update calendar, timeline, and weekly review]
    J --> A
```

1. The player opens the app and sees today's schedule, quests, and current character progress.
2. They choose an activity, work on a quest, or spend time with someone.
3. They record what happened. Logging should be quick and mostly manual in the first release.
4. The progression engine awards XP and updates the relevant systems.
5. The app shows a small reward moment: attribute XP, quest progress, a Confidant update, or a level-up.
6. The activity becomes part of the player's history and can be revisited in the calendar or memory archive.

---

## Feature map

| Feature | MVP priority | Description |
|---|---:|---|
| Player profile and overall level | P0 | Player identity, global XP, and level |
| Personal attributes | P0 | Intellect, Discipline, Charm, Courage, and Kindness |
| Activity catalogue and quick logging | P0 | Prebuilt and custom activities |
| XP and level progression | P0 | Auditable XP awards and attribute level-ups |
| Daily quests | P0 | A small set of actionable daily goals |
| Connections / Confidants | P0 | Add people, log interactions, increase Bond Rank |
| Connection Momentum | P0 | Momentum cools after inactivity based on a chosen frequency |
| Calendar and activity history | P0 | Daily timeline and past activity log |
| Weekly review | P1 | Progress summary and reflection |
| Main quests and questlines | P1 | Long-term goals with stages and objectives |
| Memory journal | P1 | Save notes and moments against dates or people |
| Achievements and titles | P1 | Unlock milestones and profile titles |
| Reconnection prompts | P1 | Optional prompts for connections that have cooled |
| Seasonal challenges | P2 | Time-boxed development arcs |
| Health / calendar integrations | P2 | Optional imports from supported sources |
| AI-generated suggestions | P2 | Optional recommendations based on user-approved data |
| Shared / multiplayer features | Later | Opt-in shared experiences; not part of MVP |

**Priority definitions:** `P0` = core first release, `P1` = next meaningful release, `P2` = later enhancement.

---

## Persona-inspired design direction

Persona is not just a reference for the feature list; it is the main creative reference for how the app should feel. Keep this direction consistent across the app, including empty states, loading screens, celebrations, and navigation.

### Visual language

- **High contrast:** dark surfaces, strong light/dark separation, and one bold accent palette.
- **Expressive typography:** large display headings for player level, quest titles, and rank-up moments; readable body text for notes and settings.
- **Dynamic composition:** angled panels, layered cards, sharp dividers, asymmetric layouts, and deliberate use of negative space.
- **Confident motion:** quick transitions, card reveals, XP fills, and a distinct rank-up animation. Animation must remain optional or reduced-motion friendly.
- **Game-like feedback:** concise status labels, rank emblems, quest banners, attribute icons, and clear reward summaries.
- **Original visual identity:** create a Life RPG logo, custom icons, original illustrations, and its own UI components.

### Suggested starting palette

The exact palette can be tuned during design, but start with a Persona-inspired high-contrast direction:

| Role | Suggested direction | Use |
|---|---|---|
| Base | Near-black / charcoal | Main backgrounds and navigation |
| Surface | Graphite / deep grey | Cards and panels |
| Primary accent | Vivid crimson or vermilion | Main actions, active states, important XP feedback |
| Secondary accent | Warm off-white | Text, contrast, and neutral panels |
| Attribute accents | Distinct muted colours | Attribute identity and charts |

Do not use colour alone to communicate state. Pair it with labels, icons, or shape changes for accessibility.

### Interface rules

- Home should feel like a **daily briefing** in an RPG.
- Attributes should resemble a character status screen.
- Connections should feel like a **Confidant roster** with rank, affinity/momentum, and memories.
- Quests should feel like a mission list or request board.
- Calendar should make the passage of days and the player's choices visible.
- Rank-ups and level-ups should be memorable, but short enough not to slow down routine logging.

### Navigation labels

Use clear, game-flavoured labels without making the app hard to understand:

- **Home** — daily briefing.
- **Status** — player level and attributes.
- **Confidants** — connections and relationship progress.
- **Quests** — goals and objectives.
- **Calendar** — schedule and history.
- **Profile / Archive** — achievements, settings, and memories.

---

## Tech stack

The stack below is the recommended implementation baseline. Keep the first version boring and reliable under the hood; the visual experience can be expressive without making the architecture complicated.

### Mobile application

| Technology | Responsibility | Why it is here |
|---|---|---|
| **React Native** | Cross-platform mobile UI | One codebase for Android and iOS |
| **Expo** | App runtime, build tooling, device APIs | Faster development and simpler native integration |
| **TypeScript** | App language | Typed feature modules and domain models |
| **Expo Router** | Navigation and route structure | File-based navigation for screens and nested flows |
| **TanStack Query** | Server state, request caching, refetching | Keeps remote data fetching consistent |
| **Zustand** | Lightweight local UI state | Modal state, current quick-log draft, filters, and transient UI state |
| **Expo SQLite** | Local persistent database | Offline activity logging and cached app data |
| **Drizzle ORM** | Typed SQLite schema and queries | Safer local data access and migrations |
| **React Native Reanimated** | UI animation | XP bars, transitions, rank-up and level-up effects |
| **Lucide React Native** | Icons | Consistent icon set; custom attribute icons can be added later |
| **Expo Notifications** | Local and push notifications | Reminders and optional quest / connection nudges |

### Backend

| Technology | Responsibility | Why it is here |
|---|---|---|
| **Python** | Backend language | Clear domain logic and strong ecosystem |
| **FastAPI** | REST API | Typed request/response contracts and automatic OpenAPI docs |
| **Pydantic v2** | Request and response validation | Validate incoming data and expose reliable API schemas |
| **SQLAlchemy 2.x** | Database access | Explicit models, transactions, and query control |
| **Alembic** | Database migrations | Versioned schema changes |
| **PostgreSQL** | Primary server database | Reliable relational data and transaction support |
| **Supabase Auth** | Authentication provider | User sign-in and JWT-based identity |
| **Supabase Storage** | Optional media storage | Memory attachments and profile images |
| **Pytest** | Backend testing | Unit and integration tests |

### Supporting tools

| Tool | Use |
|---|---|
| Git + GitHub | Version control, issues, pull requests, project board |
| ESLint + Prettier | TypeScript linting and formatting |
| Ruff | Python linting and formatting |
| Docker Compose | Local PostgreSQL and backend development |
| Maestro | Mobile end-to-end flows |
| React Native Testing Library | Screen and component tests |

> **Architecture choice:** Supabase provides authentication and can host the PostgreSQL database, but **FastAPI owns the application rules**. The mobile app should not directly modify progression tables. All XP, level, quest, and Confidant changes go through the API/domain layer so the rules stay consistent.

---

## Architecture

### High-level architecture

```mermaid
flowchart LR
    subgraph Mobile[React Native / Expo app]
        UI[Expo Router screens]
        State[Zustand + TanStack Query]
        Repo[Repositories]
        Local[(SQLite local database)]
        Queue[Offline outbox / sync queue]
        UI --> State --> Repo
        Repo <--> Local
        Repo --> Queue
    end

    subgraph Backend[FastAPI backend]
        API[REST API / Pydantic schemas]
        Auth[JWT authentication]
        Services[Domain services]
        Repos[SQLAlchemy repositories]
        API --> Auth
        API --> Services --> Repos
    end

    DB[(PostgreSQL)]
    AuthProvider[Supabase Auth]
    Media[Supabase Storage]

    Queue <-->|sync when online| API
    API <--> DB
    Auth <-->|verify access token| AuthProvider
    API <--> Media
```

### Architecture responsibilities

**Mobile app**
- Renders screens and navigation.
- Stores enough data locally to keep core logging usable offline.
- Calls repositories instead of putting raw API calls inside screens.
- Maintains a sync outbox for writes created while offline.
- Never decides authoritative XP, rank, or momentum totals.

**FastAPI backend**
- Authenticates each request using the user's Supabase JWT.
- Validates inputs and ownership of every resource.
- Runs XP, rank, decay, and quest progression rules.
- Writes related changes in database transactions.
- Returns the authoritative updated state to the client.

**PostgreSQL**
- Stores canonical user data and progression history.
- Uses foreign keys and indexes to preserve consistency.
- Stores XP awards as ledger entries so calculations can be audited.

**Supabase services**
- Auth handles identity and session issuance.
- Storage holds optional memory media. Keep media private and use signed URLs or authenticated access.

### Domain architecture

Keep business rules separate from framework code. A route handler should not calculate XP itself.

```mermaid
flowchart TD
    R[FastAPI route] --> S[Domain service]
    S --> V[Validation / policy]
    S --> L[Ledger / state update]
    L --> DB[(Repository + PostgreSQL)]
    S --> E[Domain events]
    E --> Q[Quest progress]
    E --> A[Achievement evaluation]
    E --> N[Notification scheduling]
```

A completed activity can emit an internal event such as `ActivityCompleted`. Other modules can respond to it without the activity route knowing their implementation details.

### Key architecture rules

1. **The backend is authoritative** for XP, levels, Confidant rank, Momentum, and quest completion.
2. **The XP ledger is append-only** for normal operation. Corrections create reversing entries instead of silently editing history.
3. **Screens do not contain business logic.** Put logic in domain services on the backend and small display helpers in the app.
4. **Offline writes are queued.** The client marks local changes as pending until the server confirms them.
5. **Every record is user-scoped.** The server derives the user ID from the verified token, not from a trusted client-supplied field.
6. **Use database transactions** when one action changes several systems.

---

## Repository structure

Recommended monorepo layout:

```text
life-rpg/
├── apps/
│   ├── mobile/                         # Expo / React Native application
│   │   ├── app/                        # Expo Router routes
│   │   │   ├── (tabs)/
│   │   │   │   ├── index.tsx           # Home / daily briefing
│   │   │   │   ├── status.tsx           # Player attributes and level
│   │   │   │   ├── confidants.tsx       # Connections roster
│   │   │   │   ├── quests.tsx          # Quest board
│   │   │   │   └── calendar.tsx        # Calendar and timeline
│   │   │   ├── activity/[id].tsx       # Activity detail / edit
│   │   │   ├── confidant/[id].tsx      # Confidant detail
│   │   │   ├── quest/[id].tsx          # Quest detail
│   │   │   ├── memory/[id].tsx         # Memory detail
│   │   │   └── _layout.tsx             # Root navigation layout
│   │   ├── src/
│   │   │   ├── components/             # Reusable UI components
│   │   │   ├── features/
│   │   │   │   ├── player/
│   │   │   │   ├── activities/
│   │   │   │   ├── attributes/
│   │   │   │   ├── confidants/
│   │   │   │   ├── quests/
│   │   │   │   ├── calendar/
│   │   │   │   ├── memories/
│   │   │   │   └── achievements/
│   │   │   ├── db/                     # SQLite schema, migrations, queries
│   │   │   ├── repositories/           # Local + remote data access
│   │   │   ├── services/               # API client, sync, notifications
│   │   │   ├── store/                  # Zustand UI state
│   │   │   ├── theme/                  # Colours, typography, spacing, motion
│   │   │   ├── hooks/
│   │   │   └── utils/
│   │   ├── assets/                     # Original fonts, images, and sounds
│   │   ├── app.json
│   │   └── package.json
│   │
│   └── api/                            # FastAPI application
│       ├── app/
│       │   ├── main.py
│       │   ├── core/                   # Config, auth, dependencies
│       │   ├── api/v1/                 # Route registration
│       │   ├── modules/
│       │   │   ├── player/
│       │   │   ├── attributes/
│       │   │   ├── activities/
│       │   │   ├── progression/
│       │   │   ├── confidants/
│       │   │   ├── quests/
│       │   │   ├── calendar/
│       │   │   ├── memories/
│       │   │   └── achievements/
│       │   ├── db/                     # SQLAlchemy models and session
│       │   ├── repositories/           # Database queries
│       │   ├── schemas/                # Pydantic request/response models
│       │   └── workers/                # Scheduled tasks, added when needed
│       ├── alembic/
│       ├── tests/
│       ├── pyproject.toml
│       └── Dockerfile
│
├── packages/
│   └── contracts/                     # Shared API contract notes / generated types
├── infra/
│   ├── docker-compose.yml
│   └── scripts/
├── docs/
│   ├── architecture.md
│   ├── xp-and-progression.md
│   └── design-system.md
├── .env.example
├── .gitignore
└── README.md
```

Keep feature code grouped by domain. For example, the Confidants feature should own its screens, components, hooks, and UI-specific types, while its authoritative rules live in the API's `confidants` module.

---

## Feature modules and required functions

This section describes what each module owns and the core functions it needs. Function names are proposed names, not implemented code yet.

### 1. Player and attributes

**Purpose:** Store the player's identity, overall level, attribute levels, and archetype.

**Screens**
- Player status screen.
- Attribute detail screen.
- Player profile and settings.

**Core data**
- Player profile: display name, avatar, timezone, created date.
- Attribute definition: name, description, icon, sort order, active flag.
- Player attribute: current level, XP within level, total lifetime XP.

**Backend functions**

| Function | Responsibility |
|---|---|
| `get_player_profile(user_id)` | Return player details and overall progression |
| `update_player_profile(user_id, payload)` | Update editable profile fields |
| `list_attribute_definitions()` | Return active attribute definitions |
| `get_player_attributes(user_id)` | Return all current attribute levels and XP |
| `calculate_attribute_level(total_xp)` | Convert lifetime attribute XP into level and current-level progress |
| `calculate_player_level(total_xp)` | Calculate overall player level |
| `recalculate_archetype(attribute_totals)` | Derive a descriptive archetype from attribute distribution |

**Client functions / hooks**
- `usePlayerProfile()` — fetch player profile.
- `usePlayerAttributes()` — fetch attribute values.
- `useUpdatePlayerProfile()` — update profile.
- `AttributeCard` — display level and XP bar.
- `PlayerLevelHeader` — display level and overall XP.

**Initial attributes**

| Attribute | Represents | Example activities |
|---|---|---|
| Intellect | Learning and reasoning | Reading, studying, coding, problem solving |
| Discipline | Consistency and self-management | Following plans, maintaining routines, finishing work |
| Charm | Communication and social expression | Networking, meeting people, public speaking |
| Courage | Acting despite uncertainty | Trying new things, initiating difficult conversations |
| Kindness | Empathy and care | Helping, checking in, volunteering, supporting someone |

Physical Fitness and Creativity can be introduced as full attributes after the initial model is validated. Do not keep adding attributes before the XP economy is balanced.

---

### 2. Activities and XP engine

**Purpose:** Let the user log real-world actions and consistently award progression across the app.

**Screens**
- Quick-log bottom sheet / modal.
- Activity catalogue.
- Create/edit activity template.
- Activity history and activity detail.

**Activity template fields**
- `name`, `description`, `category`;
- `base_xp` and `difficulty`;
- primary attribute and optional secondary attribute allocations;
- optional suggested duration;
- recurrence configuration;
- icon, tags, and active state.

**Activity log fields**
- template reference, completion timestamp, duration;
- optional quality / effort selection;
- notes and optional media reference;
- status: pending sync, confirmed, edited, or reversed.

**Backend functions**

| Function | Responsibility |
|---|---|
| `create_activity_template(user_id, payload)` | Create a custom reusable activity |
| `update_activity_template(user_id, template_id, payload)` | Edit an owned template |
| `list_activity_templates(user_id)` | Return default and user-created activities |
| `log_activity(user_id, payload)` | Validate and record a completed activity |
| `calculate_activity_xp(template, effort, quality, history)` | Calculate the XP award using the configured rules |
| `award_xp(user_id, source, allocations)` | Write XP ledger entries and update progression in a transaction |
| `reverse_xp_award(user_id, award_id, reason)` | Correct a mistaken log using reversing ledger entries |
| `get_activity_history(user_id, filters)` | Return filtered activity history |
| `get_daily_activity_summary(user_id, date)` | Return activity and XP totals for a day |

**Client functions / hooks**
- `useActivityTemplates()` — load available quick actions.
- `useLogActivity()` — submit a new activity.
- `useActivityHistory(filters)` — load history.
- `useQuickLogDraft()` — hold unsaved form state.
- `QuickLogSheet` — fast activity entry.
- `XpAwardSummary` — show exactly where XP went.

**Initial XP model**

Use a transparent formula that can be tuned later:

```text
awarded_xp = round(base_xp * difficulty_multiplier * quality_multiplier * repeat_multiplier)
```

Possible initial multipliers:

| Factor | Example values |
|---|---|
| Difficulty | Easy `1.0`, Normal `1.2`, Challenging `1.5`, Major `1.8` |
| Quality / effort | Standard `1.0`, Focused `1.1`, Exceptional `1.2` |
| Repetition | Gradual reduction after repeated identical low-effort logs on the same day |

These are configuration defaults for prototyping, not final balance. Do not award more XP just because a timer ran for a long time. Duration can inform an activity's base reward, but completion, effort, and quality should matter too.

**XP rules**
- Every award must explain the activity and target attribute.
- One activity can award multiple attributes.
- Global player XP is calculated separately from attribute allocations to avoid accidental double counting.
- Store each XP award as a ledger transaction.
- Repeated identical activity logs should have sensible diminishing returns to reduce XP farming.
- Let the user correct or delete a mistaken log; record the corresponding reversal.

---

### 3. Connections / Confidants

**Purpose:** Track the people the user wants to stay connected with, inspired by Persona's Confidant / Social Link system.

This is one of the product's signature features. The user adds people manually, chooses how often they would ideally like to connect, logs interactions, and sees two separate values:

- **Bond Rank:** accumulated relationship history and milestones. It only moves forward through logged progression; it does not decrease just because time passes.
- **Connection Momentum:** a representation of how recently the user has been maintaining the connection. It gradually cools after the user's selected interaction interval passes.

**Screens**
- Confidant roster / Connections list.
- Add or edit connection.
- Confidant detail screen.
- Log interaction sheet.
- Relationship memory timeline.

**Connection profile fields**
- display name and optional avatar;
- relationship category (friend, family, colleague, mentor, acquaintance, custom);
- preferred interaction interval (for example: a few days, weekly, monthly, custom);
- decay enabled / paused / no-decay setting;
- current Bond Rank and Bond XP;
- current Momentum and last interaction date;
- private notes and optional pinned memories.

**Interaction types and example Bond XP**

| Interaction | Example XP |
|---|---:|
| Thoughtful message | +5 |
| Checking in | +8 |
| Phone or video call | +12 |
| Good conversation | +15 |
| Meaningful conversation | +20 |
| Meeting in person | +20 |
| Quality time / shared activity | +25 |
| Supporting someone through a difficult situation | +30 |

The user can choose interaction quality and add a note. These values are starting points for testing, not an objective measure of a relationship. Do not reward message volume or repeated low-effort contact.

**Backend functions**

| Function | Responsibility |
|---|---|
| `create_connection(user_id, payload)` | Add a private connection profile |
| `update_connection(user_id, connection_id, payload)` | Edit name, category, or preferred interval |
| `list_connections(user_id, status)` | Return active, paused, or archived connections |
| `get_connection_detail(user_id, connection_id)` | Return progression, preferences, and recent history |
| `record_connection_interaction(user_id, connection_id, payload)` | Log a real interaction |
| `calculate_bond_xp(interaction_type, quality)` | Calculate Bond XP |
| `award_bond_xp(connection_id, amount)` | Apply Bond XP and evaluate rank-up |
| `calculate_bond_rank(total_bond_xp)` | Calculate rank and progress to next rank |
| `calculate_connection_momentum(connection, now)` | Calculate current Momentum from the chosen rhythm and last meaningful interaction |
| `recalculate_connection_momentum(connection_id, now)` | Persist refreshed Momentum when required |
| `pause_connection(user_id, connection_id)` | Pause decay and reminders |
| `resume_connection(user_id, connection_id)` | Resume tracking from a user-confirmed date |
| `archive_connection(user_id, connection_id)` | Remove from active roster without losing history |
| `create_reconnection_prompt(connection_id)` | Create an optional prompt when Momentum cools |
| `get_connection_timeline(connection_id)` | Return interaction and memory history |

**Client functions / hooks**
- `useConnections()` — load the roster.
- `useConnectionDetail(id)` — load a single Confidant.
- `useCreateConnection()` — add a person.
- `useLogInteraction()` — log an interaction.
- `useUpdateConnectionSettings()` — adjust frequency and decay preferences.
- `ConnectionCard` — avatar, name, rank, Momentum, and last interaction.
- `BondRankBadge` — rank emblem and progress.
- `MomentumMeter` — current connection maintenance indicator.
- `InteractionTimeline` — recent logged interactions.

#### Bond Rank vs. Connection Momentum

| System | Meaning | Can decrease with time? |
|---|---|---:|
| Bond Rank | Accumulated connection history | No |
| Bond XP | Progress towards next rank | No, except explicit correction of a mistaken log |
| Connection Momentum | Current interaction rhythm / maintenance | Yes, when decay is enabled |

**Momentum behaviour**

- Momentum begins at a high value when a connection is created or a meaningful interaction is logged.
- The selected preferred interval determines when the connection starts cooling.
- A short grace period prevents small schedule changes from immediately reducing Momentum.
- After the grace period, Momentum declines progressively. It should feel noticeable, but it must not collapse after a single missed day.
- A new meaningful interaction restores Momentum according to the interaction and the configured rules.
- The user can pause, archive, or disable decay for a particular connection.
- The app must support low-maintenance relationships and intentional distance.

The exact curve should be implemented in one pure domain function and tested against example timelines. A prototype curve can preserve Momentum during the preferred interval, then use a configurable nonlinear decay curve with a floor. Keep the curve configurable so it can be tuned after real use.

**Example weekly connection timeline (illustrative)**

| Time since last interaction | Example Momentum | UI state |
|---|---:|---|
| 0–7 days | 100 | Active |
| 12 days | 85 | Cooling |
| 20 days | 55 | Fading |
| 30 days | 20 | Dormant |

These sample values are examples for design discussion, not hard-coded universal outcomes. A monthly connection should have a different curve from a weekly one.

**Important relationship safeguards**
- Momentum is about the user's chosen maintenance rhythm, not the other person's feelings.
- Bond Rank must never claim to measure trust, affection, or the other person's commitment.
- Never encourage repeated unwanted contact to recover Momentum.
- A prompt should say something neutral, such as: *“You haven't checked in recently. Would you like to reach out, adjust this connection's rhythm, or leave it for now?”*
- No contact list scraping, message reading, call-log scanning, or automatic relationship scoring.

---

### 4. Quests and challenges

**Purpose:** Turn large, vague goals into actionable objectives and visible milestones.

**Quest types**
- `main` — major long-term goal.
- `side` — optional personal goal.
- `daily` — small action for today.
- `weekly` — target across a week.
- `challenge` — time-boxed or milestone-based challenge.

**Quest fields**
- title, description, type, status, start date, due date;
- difficulty and optional reward;
- objectives / stages;
- linked activities and completion criteria;
- optional notes and memory reference.

**Backend functions**

| Function | Responsibility |
|---|---|
| `create_quest(user_id, payload)` | Create a quest and its objectives |
| `update_quest(user_id, quest_id, payload)` | Edit quest details |
| `list_quests(user_id, filters)` | List quests by type and status |
| `get_quest_detail(user_id, quest_id)` | Return quest and objective progress |
| `update_quest_progress(quest_id, objective_id, value)` | Update an objective |
| `update_quests_from_activity(activity_log)` | Apply an activity to matching objectives |
| `complete_quest(quest_id)` | Validate and complete a quest |
| `abandon_or_pause_quest(quest_id, reason)` | Let the user consciously revise a goal |
| `evaluate_quest_rewards(quest_id)` | Award milestone XP or achievement progress |

**Examples**

| Goal | Questline stages |
|---|---|
| Become a stronger software engineer | Study fundamentals → build a substantial project → learn testing → complete interview preparation |
| Improve fitness | Establish a routine → complete a training block → hit a personal milestone |
| Become more socially confident | Initiate conversations → attend an event → practise speaking → reflect on progress |

**Boss challenges** are major real-world objectives, not combat mechanics. A boss challenge could be delivering a presentation, completing a certification, finishing a project, or running a 5K. The user wins by completing the real objective.

---

### 5. Calendar and scheduling

**Purpose:** Show the player's day as a sequence of choices and preserve a browsable history.

**Screens**
- Day timeline.
- Week view.
- Month view.
- Event / planned activity detail.
- Past-day recap.

**Core functions**

| Function | Responsibility |
|---|---|
| `create_schedule_item(user_id, payload)` | Add a planned event or activity |
| `update_schedule_item(user_id, item_id, payload)` | Edit a scheduled item |
| `delete_schedule_item(user_id, item_id)` | Remove an item |
| `get_day_timeline(user_id, date, timezone)` | Return events, quests, and logged activities for a day |
| `get_calendar_range(user_id, start_date, end_date)` | Return calendar summaries for a date range |
| `get_day_recap(user_id, date)` | Summarise completed activities, XP, and memories |

The calendar should support morning, afternoon, evening, and night groupings, but must not force every user into a fixed schedule. Planned events and completed activities should be visually distinct.

**Free time and rest**
- Let users see their planned commitments and remaining open time.
- Do not treat every empty time slot as a productivity failure.
- Rest, recovery, and unscheduled time are valid choices.

---

### 6. Memories and reflection

**Purpose:** Make the app a record of lived experiences, not just a record of completed tasks.

**Memory types**
- Daily note.
- Shared experience linked to a Confidant.
- Achievement or milestone memory.
- Photo / media attachment.
- Weekly reflection.

**Core functions**

| Function | Responsibility |
|---|---|
| `create_memory(user_id, payload)` | Create a text or media memory |
| `update_memory(user_id, memory_id, payload)` | Edit memory contents |
| `delete_memory(user_id, memory_id)` | Delete a memory and associated media references |
| `list_memories(user_id, filters)` | Browse memories by date, person, or type |
| `get_memory_timeline(user_id, date_range)` | Return chronological memories |
| `create_daily_reflection(user_id, date, payload)` | Save an optional daily review |
| `generate_weekly_summary(user_id, week_start)` | Aggregate progress for weekly review |
| `generate_yearly_recap(user_id, year)` | Build a year-in-review from stored user data |

The app can suggest a reflection prompt, but the user controls what is saved. Mood and energy check-ins may be added as optional personal context; they are not medical assessments.

---

### 7. Achievements and rewards

**Purpose:** Recognise milestones across activities, attributes, quests, and connections.

**Examples**
- Read 10 books — `The Scholar`.
- Complete 30 workouts — `Iron Will`.
- Finish a first main quest — `First Chapter`.
- Log 10 meaningful interactions — `Keeping in Touch`.
- Reach a new attribute level — attribute-specific achievement.

**Core functions**

| Function | Responsibility |
|---|---|
| `list_achievement_definitions()` | Return available achievements |
| `evaluate_achievements(user_id, domain_event)` | Check whether an event unlocks an achievement |
| `unlock_achievement(user_id, achievement_id)` | Record an unlock once |
| `list_user_achievements(user_id)` | Return earned achievements |
| `calculate_profile_titles(user_id)` | Derive eligible profile titles |

Achievements should be optional celebrations, not obligations. Avoid achievements that reward spam, excessive app use, or unwanted contact.

---

### 8. Notifications

**Purpose:** Remind users about things they intentionally chose to track.

**Notification categories**
- Scheduled activity reminder.
- Daily quest reminder.
- Weekly review reminder.
- Optional connection reconnection prompt.
- Quest due-date reminder.

**Core functions**
- `get_notification_preferences(user_id)`
- `update_notification_preferences(user_id, payload)`
- `schedule_local_reminder(payload)`
- `cancel_local_reminder(reminder_id)`
- `create_push_notification(user_id, payload)`
- `process_due_reminders(now)`

All reminders are opt-in and adjustable. Provide quiet hours, frequency controls, and a global pause switch. Do not send guilt-based messages such as “You're losing your progress.”

---

### 9. Offline storage and sync

**Purpose:** Make logging reliable even when the phone has no network connection.

**Local-first behaviour**
- The user can view cached player, attribute, activity, quest, and connection information offline.
- New activity and interaction logs are written to SQLite immediately.
- Each offline write is added to an outbox with a unique client-generated ID.
- When connectivity returns, the sync service sends pending operations to the API.
- The server validates and processes the operation, then returns authoritative XP and progression state.
- The client marks the outbox item as synced and refreshes affected queries.

**Core client functions**
- `saveActivityLocally(payload)`
- `saveInteractionLocally(payload)`
- `enqueueSyncOperation(operation)`
- `syncPendingOperations()`
- `applyServerSyncResult(result)`
- `resolveSyncConflict(local, remote)`

Use idempotency keys so retries do not award XP twice. For the first version, favour simple conflict rules: activity and interaction logs are append-oriented, while editable profile fields use the server's latest accepted version. Do not attempt a complicated general-purpose sync engine before it is needed.

---

## Data model

The following is the initial relational model. Exact column types, constraints, and indexes should be finalised during implementation.

```mermaid
erDiagram
    USER ||--|| PLAYER_PROFILE : owns
    USER ||--o{ PLAYER_ATTRIBUTE : has
    ATTRIBUTE_DEFINITION ||--o{ PLAYER_ATTRIBUTE : defines
    USER ||--o{ ACTIVITY_TEMPLATE : creates
    USER ||--o{ ACTIVITY_LOG : records
    ACTIVITY_TEMPLATE ||--o{ ACTIVITY_LOG : used_by
    ACTIVITY_LOG ||--o{ XP_TRANSACTION : generates
    USER ||--o{ CONNECTION : tracks
    CONNECTION ||--o{ CONNECTION_INTERACTION : has
    CONNECTION ||--|| CONNECTION_PROGRESS : tracks
    USER ||--o{ QUEST : creates
    QUEST ||--o{ QUEST_OBJECTIVE : contains
    USER ||--o{ MEMORY : saves
    USER ||--o{ SCHEDULE_ITEM : plans
    USER ||--o{ USER_ACHIEVEMENT : unlocks
    ACHIEVEMENT_DEFINITION ||--o{ USER_ACHIEVEMENT : defines
```

### Main tables

| Table | Important fields | Purpose |
|---|---|---|
| `player_profiles` | `user_id`, `display_name`, `player_level`, `player_xp`, `timezone`, `archetype` | Player identity and overall progression |
| `attribute_definitions` | `id`, `key`, `name`, `description`, `sort_order`, `is_active` | Attribute catalogue |
| `player_attributes` | `user_id`, `attribute_id`, `level`, `current_xp`, `total_xp` | Player's attribute progression |
| `activity_templates` | `id`, `user_id`, `name`, `category`, `base_xp`, `configuration` | Reusable activity definitions |
| `activity_logs` | `id`, `user_id`, `template_id`, `occurred_at`, `duration`, `quality`, `notes`, `client_operation_id` | Completed activity records |
| `xp_transactions` | `id`, `user_id`, `source_type`, `source_id`, `target_type`, `target_id`, `amount`, `reason`, `created_at` | Auditable XP ledger |
| `connections` | `id`, `user_id`, `display_name`, `category`, `preferred_interval_days`, `decay_enabled`, `status` | Private connection profile |
| `connection_interactions` | `id`, `connection_id`, `type`, `occurred_at`, `quality`, `bond_xp`, `notes`, `client_operation_id` | Interaction history |
| `connection_progress` | `connection_id`, `bond_rank`, `bond_xp`, `momentum`, `last_calculated_at` | Cached relationship progress |
| `quests` | `id`, `user_id`, `title`, `type`, `status`, `start_at`, `due_at` | Goal / challenge definition |
| `quest_objectives` | `id`, `quest_id`, `description`, `target_value`, `current_value`, `status` | Quest stages |
| `schedule_items` | `id`, `user_id`, `title`, `start_at`, `end_at`, `linked_type`, `linked_id` | Calendar entries |
| `memories` | `id`, `user_id`, `connection_id`, `occurred_at`, `text`, `media_path`, `type` | Personal memory archive |
| `achievement_definitions` | `id`, `key`, `name`, `description`, `rule_config` | Achievement catalogue |
| `user_achievements` | `user_id`, `achievement_id`, `unlocked_at` | Earned achievements |

### Data-model notes

- `user_id` should reference the authenticated user's stable identity.
- Use UUIDs for application-generated record identifiers.
- Add a unique constraint on `client_operation_id` per user or operation type to make sync idempotent.
- Index common filters: `user_id`, `occurred_at`, `connection_id`, `quest_id`, and status fields.
- Keep the XP ledger as the source of truth; cached level totals can be rebuilt from it.
- Momentum can be cached for fast display, but it must be recalculable from the interaction history and connection preferences.
- Store timestamps in UTC and render in the user's timezone.
- Private notes and memories must be accessible only to their owner.

---

## API outline

All application endpoints use the `/api/v1` prefix and require a valid access token unless explicitly marked public. The backend derives the user identity from the token.

### Player and attributes

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/player` | Get player profile |
| `PATCH` | `/player` | Update player profile |
| `GET` | `/attributes` | Get attribute definitions and player progress |

### Activities

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/activities/templates` | List templates |
| `POST` | `/activities/templates` | Create custom template |
| `PATCH` | `/activities/templates/{template_id}` | Update template |
| `GET` | `/activities` | List activity history |
| `POST` | `/activities` | Log completed activity and award XP |
| `GET` | `/activities/{activity_id}` | Get activity detail |
| `DELETE` | `/activities/{activity_id}` | Reverse / remove mistaken log according to ledger policy |

### Connections / Confidants

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/connections` | List Confidants |
| `POST` | `/connections` | Add a connection |
| `GET` | `/connections/{connection_id}` | Get connection detail and current Momentum |
| `PATCH` | `/connections/{connection_id}` | Update profile or interaction preferences |
| `POST` | `/connections/{connection_id}/interactions` | Log interaction and award Bond XP |
| `GET` | `/connections/{connection_id}/interactions` | Get interaction history |
| `POST` | `/connections/{connection_id}/pause` | Pause Momentum decay |
| `POST` | `/connections/{connection_id}/resume` | Resume Momentum tracking |
| `POST` | `/connections/{connection_id}/archive` | Archive connection |

### Quests, calendar, and memories

| Method | Endpoint | Purpose |
|---|---|---|
| `GET`, `POST` | `/quests` | List or create quests |
| `GET`, `PATCH` | `/quests/{quest_id}` | Get or update quest |
| `POST` | `/quests/{quest_id}/objectives/{objective_id}/progress` | Update objective progress |
| `GET` | `/calendar` | Get calendar range |
| `POST` | `/calendar/items` | Create schedule item |
| `GET`, `POST` | `/memories` | List or create memories |
| `GET`, `PATCH`, `DELETE` | `/memories/{memory_id}` | Manage a memory |

### Sync

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/sync/operations` | Submit queued offline operations idempotently |
| `GET` | `/sync/changes` | Fetch server changes after a cursor / timestamp |

The endpoint list is an initial contract sketch. Request and response schemas should be documented with Pydantic and kept in sync with the generated TypeScript API types.

---

## Important business rules

These rules should be implemented in the domain layer and covered by automated tests.

### Progression

- XP is awarded only after a validated activity or milestone is recorded.
- Attribute XP and global player XP are tracked separately.
- Level-up calculations must be deterministic and testable.
- XP awards are recorded in a ledger; do not silently overwrite past awards.
- Repeated identical activity logging receives diminishing returns according to configurable rules.

### Connections

- Bond Rank and Bond XP never decay with time.
- Connection Momentum may decay only when decay is enabled and the connection is not paused or archived.
- Momentum uses the user's selected interaction interval, not one global schedule.
- Logging an interaction creates a timestamped history record and updates Bond XP / Momentum.
- The user can change an interval, pause tracking, disable decay, archive, or delete a connection.
- A connection record is the user's private tracking note; it does not represent the other person's consent to be tracked or a measurement of their feelings.

### Quests

- Completing an activity can update linked quest objectives.
- Quest completion and rewards must be idempotent: completing the same quest twice must not grant duplicate rewards.
- Users can pause, edit, or abandon a quest without being punished.

### Time and calendar

- Persist timestamps in UTC.
- Calculate daily boundaries using the user's timezone.
- Daylight saving changes and timezone changes must not duplicate or lose activity records.

### Offline sync

- Each client operation has a stable idempotency key.
- Retried operations must never award XP twice.
- Server results override locally predicted progression values.
- Local pending state must be visible to the user where helpful.

---

## Development setup

This is the planned setup. Exact scripts and environment variables will be added when the repository is scaffolded.

### Prerequisites

- Node.js LTS and npm (or pnpm if the monorepo adopts it).
- Python 3.12+.
- Docker and Docker Compose.
- Expo Go for initial device testing, or Android Studio / Xcode for native builds.
- A Supabase project for Auth and managed PostgreSQL, or local PostgreSQL for backend development.

### Environment variables

Create a `.env` file from `.env.example`. Never commit real secrets.

```dotenv
# Mobile
EXPO_PUBLIC_API_URL=http://localhost:8000/api/v1
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=

# API
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/liferpg
SUPABASE_URL=
SUPABASE_JWT_SECRET=
SUPABASE_SERVICE_ROLE_KEY=
ENVIRONMENT=local
```

> `SUPABASE_SERVICE_ROLE_KEY` is backend-only. Never add it to an `EXPO_PUBLIC_*` variable or ship it in the mobile bundle. For production JWT verification, use the project's supported signing/JWKS configuration rather than relying on an exposed secret.

### Planned local development commands

```bash
# Install mobile dependencies
cd apps/mobile
npm install
npx expo start

# Run backend (from a separate terminal)
cd apps/api
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -e .
uvicorn app.main:app --reload --port 8000

# Apply database migrations
alembic upgrade head

# Run backend tests
pytest
```

These commands assume the scaffold uses the paths and tooling shown above. Update them when the project files are created.

---

## Testing strategy

| Layer | Tools | What to test |
|---|---|---|
| Domain unit tests | Pytest | XP, levels, Bond Rank, Momentum decay, quest reward idempotency |
| API integration tests | Pytest + test database | Auth ownership, transactions, validation, endpoint responses |
| Mobile unit tests | Jest + React Native Testing Library | Components, forms, hooks, loading and error states |
| Sync tests | Backend + client tests | Offline queue, retries, duplicate prevention, conflict behaviour |
| End-to-end tests | Maestro | Onboarding, log activity, rank-up, add Confidant, log interaction, create quest |

### Critical test cases

- Awarding XP across an attribute level threshold carries over the remainder correctly.
- A single activity affecting two attributes creates the correct two ledger allocations.
- Replaying the same offline activity operation does not award XP twice.
- A correction creates a reversing ledger entry.
- Bond Rank remains unchanged after a long inactive period.
- Momentum respects a weekly versus monthly preferred interaction interval.
- Paused or no-decay connections do not lose Momentum.
- Archived connections do not generate reconnection prompts.
- Quest completion rewards cannot be granted twice.
- A user cannot read or modify another user's activities, connections, or memories.

---

## Roadmap

### Phase 0 — Foundation

- [ ] Create monorepo and CI basics.
- [ ] Scaffold Expo app and Expo Router.
- [ ] Scaffold FastAPI application.
- [ ] Configure Supabase Auth and PostgreSQL.
- [ ] Add SQLAlchemy models and Alembic migrations.
- [ ] Set up theme tokens and reusable layout components.
- [ ] Define API contracts and typed client.

### Phase 1 — Core RPG MVP

- [ ] Onboarding and player profile.
- [ ] Five starting attributes.
- [ ] Activity template catalogue and custom templates.
- [ ] Quick activity logging.
- [ ] XP calculation and ledger.
- [ ] Attribute levels and overall player level.
- [ ] Daily quests.
- [ ] Activity history and basic calendar.
- [ ] Home / daily briefing screen.
- [ ] Basic weekly progress summary.
- [ ] Local SQLite persistence and initial sync queue.

### Phase 1.5 — Confidants MVP

- [ ] Add and edit private connection profiles.
- [ ] Confidant roster and detail screens.
- [ ] Interaction logging with quality and notes.
- [ ] Bond XP and Bond Rank progression.
- [ ] Per-connection preferred interaction interval.
- [ ] Connection Momentum decay engine.
- [ ] Pause, archive, and no-decay controls.
- [ ] Optional neutral reconnection prompts.
- [ ] Interaction history timeline.

### Phase 2 — Story and memory systems

- [ ] Main quests and side quests.
- [ ] Multi-stage questlines and boss challenges.
- [ ] Memories linked to dates and Confidants.
- [ ] Achievements and titles.
- [ ] Weekly retrospective screen.
- [ ] Daily reflection.
- [ ] Improved calendar and day recap.

### Phase 3 — The living game

- [ ] Seasonal challenges.
- [ ] Balance radar / attribute trends.
- [ ] Yearly recap.
- [ ] Optional energy-aware scheduling.
- [ ] Optional calendar and health integrations.
- [ ] More advanced sync and media handling.
- [ ] Optional AI suggestions using user-approved data.
- [ ] Shared features only if privacy and consent are designed first.

### Not in the first release

- Public leaderboards or global rankings.
- Automatic scraping of messages, calls, or contacts.
- AI scoring of relationships or personality.
- Multiplayer economy, shops, inventory, or collectible systems.
- Mandatory streaks or punitive loss of accumulated levels.
- Complex integrations before local logging and sync are reliable.

---

## MVP acceptance checklist

The first usable version is ready for personal testing when:

- [ ] A user can create a profile and see their player level.
- [ ] The app displays the five starting attributes.
- [ ] A user can create a custom activity and log it in a few taps.
- [ ] The backend awards XP consistently and shows the breakdown.
- [ ] Attribute and player level-ups work across thresholds.
- [ ] Users can view activity history by day.
- [ ] Users can create and complete daily quests.
- [ ] Users can add a person to the Confidant list.
- [ ] Users can log an interaction and see Bond XP / rank progress.
- [ ] Connection Momentum responds to the chosen interaction rhythm.
- [ ] Bond Rank does not decay when Momentum falls.
- [ ] Users can pause or disable Momentum decay.
- [ ] The core logging flow works offline and syncs without duplicate XP.
- [ ] Personal data is private to the authenticated user.

---

## Product principles

1. **Persona-inspired, not Persona-copied.** Keep the Confidant, social-stat, calendar, and rank-up inspiration consistent, but build original assets and product identity.
2. **Real actions first.** XP must map to something the user actually did or intentionally recorded.
3. **Meaning over volume.** A quality interaction matters more than message spam.
4. **Progress should be explainable.** Always show why XP or Momentum changed.
5. **No punishment for living.** Rest, illness, travel, busy periods, and changing priorities are normal.
6. **Relationships are not scores of another person's feelings.** Connection metrics describe the user's own tracking preferences and history only.
7. **Private by default.** Personal notes, memories, and connection lists belong to the user.
8. **Fast logging.** A normal activity should take seconds to record.
9. **Offline resilient.** The user should not need a network connection to record their day.
10. **Build the engine before the spectacle.** Get data, rules, and sync correct before adding elaborate animations and integrations.

---

## Future ideas

These are deliberately out of scope for the first release, but fit the long-term direction:

- **Archetypes:** dynamic labels such as The Scholar, The Connector, The Warrior, or The Strategist based on attribute distribution.
- **Boss battles:** meaningful real-life challenges such as completing a certification, delivering a presentation, or finishing a major project.
- **Seasons:** 30-day development arcs focused on a chosen part of life.
- **Balance radar:** show which attributes have received attention and which may be neglected.
- **Energy and mood check-in:** optional context for planning and reflection, not diagnosis.
- **Year in Review:** a personal recap of attributes, quests, interactions, books, workouts, places, and memories.
- **Integrations:** Google Calendar, Health Connect / Apple Health, and other services only with explicit permission.
- **Shared Confidant experiences:** opt-in shared milestones where both people participate knowingly; never expose a private connection list by default.

---

## Design north star

> **Make real life feel like a journey worth checking in on.**
>
> Borrow Persona's sense of style, social progression, daily choices, and meaningful rank-ups. Build an original RPG system around the user's real actions, goals, friendships, and memories.
