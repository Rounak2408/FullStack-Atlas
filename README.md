# FullStack Atlas

<p align="left">
  <img src="https://img.shields.io/badge/Portfolio-Showcase-0ea5e9?style=for-the-badge" alt="Portfolio Showcase" />
  <img src="https://img.shields.io/badge/Level-Staff%20Grade-7c3aed?style=for-the-badge" alt="Staff Grade" />
  <img src="https://img.shields.io/badge/Theme-Dark%20Mode%20First-111827?style=for-the-badge" alt="Dark Mode First" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-16a34a?style=for-the-badge" alt="Production Ready" />
  <a href="https://fullstack-atlas.vercel.app">
    <img src="https://img.shields.io/badge/LIVE%20DEMO-Open%20App-22c55e?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

**FullStack Atlas** is a premium Full Stack Developer Roadmap Platform designed like a real SaaS product.
It combines roadmap guidance, docs-style learning, and progress analytics in one polished experience.

> Product inspiration: roadmap.sh structure, Vercel/Stripe docs clarity, Notion readability, Linear-level polish.

---

## Table of Contents

- [Vision](#vision)
- [What Makes This Senior-Level](#what-makes-this-senior-level)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Design System](#design-system)
- [Local Setup](#local-setup)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Portfolio Positioning](#portfolio-positioning)
- [Next Iterations](#next-iterations)

---

## Vision

Most developer roadmaps fail at execution because they are either too broad or too static.

**FullStack Atlas** solves that by creating a focused product loop:

1. Discover what to learn next,
2. Learn in docs-style modules,
3. Track progress visually,
4. Continue with recommendations.

This is not just a UI project. It is a **productized learning system**.

---

## What Makes This Senior-Level

- **Product-first engineering:** every section maps to a user journey
- **Scalable architecture:** clean folder boundaries and reusable primitives
- **Design consistency:** dark-first tokens, spacing rhythm, hierarchy discipline
- **Interaction quality:** motion is subtle, intentional, and performance-safe
- **Deployment readiness:** typed codebase, production build passing

---

## Core Features

### 1) Premium App Shell
- Sticky navbar
- Collapsible sidebar (docs navigation)
- Main content panel
- Right-side sticky TOC
- Clean footer

### 2) High-Impact Hero
- Heading: **Master Full Stack Development**
- Subheading: **A complete roadmap from zero to job-ready developer.**
- CTA buttons, glowing gradients, stats cards, motion reveal

### 3) Interactive Roadmap
- Stages: Beginner, Frontend, Backend, Database, DevOps, Advanced
- Clickable nodes with visual connections
- Animated progress indicators
- Smooth hover states and selection feedback

### 4) Documentation Engine
- Structured module explanations
- Bullets, semantic callouts (note/tip/warning)
- Code blocks with copy action
- Readable typography and spacing

### 5) Dashboard Widgets
- Learning progress
- Weekly goal
- Completed modules
- Roadmap completion percentage
- Next recommended topic

### 6) UX Enhancements
- Search across roadmap/docs/module context
- Reading progress bar at top
- Mobile advisory banner with continuation option
- Dark mode first visual tuning

---

## Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge

---

## Architecture

```text
src/
  components/   # Reusable UI primitives and shared components
  features/     # Feature modules (extensible boundary)
  layout/       # Layout shell and structural wrappers
  pages/        # Screen-level composition
  data/         # Roadmap domain data/content
  hooks/        # Shared behavior hooks (mobile, reading progress)
  utils/        # Utility helpers (class merge, etc.)
```

### Key Engineering Notes

- Component-driven composition
- Presentation and data model separation
- Minimal prop surface in shared primitives
- Utility-first styling with consistent token usage

---

## Design System

### Spacing
`4, 8, 12, 16, 24, 32, 48`

### Typography
- Hero
- Section title
- Card heading
- Body text
- Caption/meta

### Color Language
- Primary (brand emphasis)
- Muted (secondary copy)
- Accent (focus/highlight)
- Border (depth + structure)
- Semantic callouts (note/tip/warning)

### Reusable UI Primitives
- `Card`
- `Badge`
- `Button`
- `Input`

---

## Local Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Start Development

```bash
npm run dev
```

Open: `http://localhost:5173`

---

## Production Build

```bash
npm run build
npm run preview
```

Build output is generated in `dist/`.

---

## Deployment

Compatible with:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

**Build command**

```bash
npm run build
```

**Publish directory**

```text
dist
```

---

## Screenshots

> Replace these placeholders with actual deployed UI captures after first production deployment.

![FullStack Atlas Hero](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80)
![FullStack Atlas Dashboard](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80)

---

## Portfolio Positioning

When presenting this project in resume/interviews, pitch it as:

**"A product-grade roadmap and documentation platform with dark-first UX, reusable UI architecture, and interactive learning flows."**

Focus on these discussion points:

- Product reasoning behind each feature
- Design system consistency and component strategy
- Scalability choices in folder/module architecture
- Production readiness and polish details

---

## Next Iterations

- Persist user progress (local or backend)
- Auth + personalized track recommendations
- Markdown/MDX docs ingestion pipeline
- Analytics dashboards for learning behavior
- Achievement system and streak mechanics
- Multi-language support

---

## License

Licensed under the MIT License. See `LICENSE`.
