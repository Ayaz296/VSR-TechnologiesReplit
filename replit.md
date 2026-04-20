# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### VSR Technologies Website (`artifacts/vsr-technologies`)
- **Type**: react-vite, static frontend only, preview at `/`
- **Purpose**: Premium marketing website for VSR Technologies, a physical security infrastructure company
- **Stack**: React + Vite + Tailwind CSS + Framer Motion + React Three Fiber (with CSS fallback)
- **Sections**: Hero (3D animated CCTV camera), Services (8 cards), AI Threat Detection, Industries, Why Choose Us, About, Contact
- **3D**: WebGL-first with a CSS/SVG animated fallback for environments without WebGL support
- **Theme**: Light mode, deep navy primary (#215 70% 25%), muted teal accent (#195 55% 45%)
- **Headless WordPress**: Homepage content can be sourced from a WordPress REST endpoint at `VITE_WORDPRESS_URL/wp-json/vsr/v1/site-content`. The Hostinger-compatible plugin lives at `wordpress/vsr-headless-content/` and provides an editable JSON admin page plus REST endpoint.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
