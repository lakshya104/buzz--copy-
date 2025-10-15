# Buzz Codebase Audit

_Audit date: 2025-10-15_

## 1. Product & Architecture Overview
- **Purpose**: Buzz is a brand engagement and rewards platform. Authenticated users consume mixed-media feed items (videos, images, blog articles), answer quizzes to earn points, view leaderboards, redeem rewards, and manage their profile. Privileged users (admin/brand managers) curate feed content and rewards through a back-office dashboard.
- **Runtime & Platform**: Next.js 14 app-router project running on Node.js 18 (see Dockerfile). Styling is driven by TailwindCSS and Shadcn UI primitives; animations via Framer Motion.
- **High-level structure**:
  - `app/(landing)`: unauthenticated marketing/CTA page.
  - `app/(main)`: authenticated user area (feed, leaderboard, rewards, profile, support, T&C).
  - `app/(nested)`: nested dynamic routes for blog detail and quiz experiences.
  - `app/(admin routes)`: admin/brand-manager dashboard for analytics plus CRUD for feed items and rewards.
  - Server actions & data access live in `actions/server-utils.js` and `data/queries.js`, both backed by Prisma ORM (`prisma/schema.prisma`).
- **Authentication & authorization**: NextAuth (v5 beta) with GitHub, Google, and credentials providers. `middleware.js` protects routes at the edge, while admin layouts double-check role-based access (`session.user.role`).
- **Persistence**: PostgreSQL via Prisma. Models cover users, feed items, questions/answers, user answers, rewards, and redemptions. Points are stored on the user record. Prisma client is globally cached (`lib/db.js`).
- **Frontend patterns**: React Server Components for data-fetching routes, `Suspense`/`loading.jsx` for skeletons, client components for interactivity (Roulette, video player, refresh button, etc.). Navigation uses a custom `ProgressBarLink`.

## 2. Setup & Local Development Notes
- **Package manager**: npm (lockfile present). `npm install` completes without issues.
- **Scripts observed**:
  - `npm run dev` – Next.js dev server (verified: boots successfully).
  - `npm run build` – Executes `prisma generate` then `next build`.
  - `npm run lint` – Next.js ESLint preset (passes).
- **Environment requirements**:
  - Database: `DATABASE_URL` and `DATABASE_URL_UNPOOLED` (PostgreSQL). No `.env.example` provided.
  - Auth: NextAuth requires `AUTH_SECRET` (currently hard-coded in `next.config.mjs`), plus optional OAuth credentials `GITHUB_CLIENT_ID/GITHUB_CLIENT_SECRET`, `GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET`.
  - Likely needs `NEXTAUTH_URL` for production.
- **Prisma**: Run `npx prisma migrate deploy` or `prisma migrate dev` against a provisioned database before first launch.
- **Docker**: Provided Dockerfile (Node 18 alpine) runs `npm run dev:docker`; container still expects the env variables above.
- **Blockers / gaps**:
  - No sample env file; secrets currently embedded in source (security risk, see Section 4).
  - Application depends on a populated database. Without seed data most UI surfaces will render empty states.

## 3. Architecture, Data Flow & Third Parties
- **Data access**:
  - `data/queries.js` contains cached server helpers (via `react.cache`) for commonly requested aggregates.
  - `actions/server-utils.js` is a monolithic bundle of server actions handling leaderboard, feed CRUD, questions, and rewards. Many actions perform raw queries and return models directly to the client.
  - Several functions (e.g., `getTotalUsersEngaged`) execute sequential Prisma calls inside loops, creating N+1 query patterns.
- **APIs**: Minimal API routes. `app/api/auth/[...nextauth]` proxies NextAuth handlers. `app/api/getUser` exposes raw user lists with no auth guard (critical issue).
- **Third-party services**:
  - NextAuth providers for GitHub and Google.
  - `@vercel/analytics` and `@vercel/speed-insights` imported but not yet wired.
  - `react-player` for video playback, `react-custom-roulette` for quiz spin mechanic.
- **Client-side state**: Predominantly server-driven with occasional client components using React state hooks.

## 4. Dependencies & Vulnerabilities
- **Core stack**: Next.js `14.1.4`, React `18`, Prisma `5.12.1`, NextAuth `5.0.0-beta.16`, TailwindCSS `3.3.0`, Shadcn UI components.
- **Security advisories** (`npm audit`, Oct 15 2025): 11 total (1 critical, 2 high). Highlights:
  - Next.js <=14.2.31 (multiple cache poisoning and SSRF advisories) – fix by upgrading to ≥14.2.33.
  - `@auth/*` packages depend on vulnerable `cookie`; requires upgrading to newer stable NextAuth.
  - Additional ReDoS vulnerabilities in `brace-expansion`, `braces`, `cross-spawn`, `micromatch`, `nanoid`.
- **Other observations**:
  - `node-gyp` pulled as a runtime dependency (via `sharp`). Ensure build tooling is available in CI/CD.
  - No Dependabot or automated dependency updates configured.

## 5. Code Quality & Reliability Assessment
- **Strengths**:
  - Utilizes Zod schemas for several forms (`schemas/index.js`).
  - ESLint configured (`next/core-web-vitals`) and passing.
  - Server components reduce data fetching boilerplate.
- **Gaps / issues**:
  - **Critical**: Prisma `User` model defaults `role` to `ADMIN`. Any newly registered user gains admin privileges.
  - **Critical**: `next.config.mjs` hard-codes `AUTH_SECRET`. This must be injected via environment variables.
  - **Critical**: `app/api/getUser` returns the full user list without authentication.
  - `auth.js` contains a bug returning `role` (undefined variable) when a user lookup fails.
  - Server actions are exported wholesale; many lack validation and rely on console logging for error handling.
  - `getUserByEmailAction(email)` ignores the `email` argument and instead re-fetches the session user.
  - N+1 queries in engagement metrics (`getTotalUsersEngaged`) and quiz retrieval can degrade performance at scale.
  - Client components call server actions inside `useEffect` without retry/backoff (`PointsTable` leaderboard refresh).
  - No automated tests (unit, integration, or E2E). No coverage tooling configured.
  - Logging is ad-hoc (`console.log`/`console.error`); no structured or centralized logging.

## 6. Risks & Opportunities
- **Security Risks**:
  - Default admin role and unauthenticated user listing endpoint expose sensitive data and control surfaces.
  - Hard-coded secrets would leak in source control; rotation/audit becomes impossible.
  - Reliance on NextAuth beta plus vulnerable dependencies raises maintenance risk.
- **Performance Risks**:
  - Repeated sequential Prisma queries for metrics will not scale with feed volume.
  - Server actions revalidate entire pages without caching strategy.
- **Reliability Gaps**:
  - Lack of tests makes regressions likely.
  - Missing error boundaries and user messaging when server actions fail.
- **Quick wins**:
  - Introduce `.env.example` and move secrets out of code.
  - Patch Prisma role default and tighten access control.
  - Split `server-utils.js` into domain modules with centralized validation.

## 7. Recommended Follow-up Tasks (Prioritized)
| Priority | Size | Title | Rationale & Draft Task Outline |
| --- | --- | --- | --- |
| P0 | M | **Fix user role defaults and admin access** | Update Prisma `User.role` default to `USER`, add migration/seeding to correct existing data, and ensure registration explicitly sets roles. Draft task: "Update schema, regenerate client, add guard tests ensuring only admin/brand manager reach admin routes." |
| P0 | S | **Externalize secrets & provide environment template** | Remove hard-coded `AUTH_SECRET` from `next.config.mjs`, load from env, and add `.env.example` documenting required variables (`DATABASE_URL`, OAuth keys, NextAuth secret). |
| P0 | M | **Lock down user data endpoints and server actions** | Add authentication/authorization to `app/api/getUser` (or remove entirely) and audit server actions to ensure only authorized roles can invoke mutations (e.g., rewards/posts CRUD). |
| P1 | M | **Upgrade framework & auth dependencies** | Bump Next.js to ≥14.2.33 and upgrade NextAuth/@auth packages to latest stable to eliminate current CVEs; run regression testing afterwards. |
| P1 | L | **Modularize server-utils & optimize Prisma queries** | Break `actions/server-utils.js` into feature-focused modules, add Zod validation, convert N+1 loops into aggregated Prisma queries (e.g., using `include`/`count`), and introduce shared error handling. |
| P1 | L | **Establish automated testing and CI** | Introduce unit/integration tests for auth, rewards, and quiz flows (Jest/Playwright); add GitHub Actions (or alternative) to run lint/test on PRs. |
| P2 | M | **Improve monitoring and logging** | Replace `console` statements with structured logging (e.g., `pino` or Next.js logger), and surface toast/error UI when server actions fail. |

_The first three items should be scheduled immediately; they address active security vulnerabilities. Subsequent tasks improve maintainability, performance, and reliability._
