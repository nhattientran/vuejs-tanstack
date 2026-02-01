# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue.js 3 + TypeScript SPA using TanStack Router (file-based routing), TanStack Query for server state, Pinia for client state, and Tailwind CSS v4 for styling.

## Common Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:5173)
pnpm dev

# Type-check and build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Architecture

### File-Based Routing (TanStack Router)

Routes are defined in `src/routes/` using a file-based convention:

- `__root.tsx` - Root route layout (wraps all routes with App.vue)
- `index.route.ts` + `index.component.vue` - Home page at `/`
- `about.route.ts` + `about.component.vue` - About page at `/about`
- `posts/index.route.ts` - Posts list at `/posts`
- `posts/$postId.route.ts` - Post detail at `/posts/:postId` (dynamic route)
- `$.route.ts` - Catch-all 404 page

Each route requires two files:
- `.route.ts` - Route configuration using `createFileRoute('/path')`
- `.component.vue` - The Vue component (must export default)

The route tree is auto-generated at `src/routeTree.gen.ts` when the dev server runs.

### State Management

**Server State:** Use TanStack Query (`@tanstack/vue-query`)
```typescript
import { useQuery } from '@tanstack/vue-query'
import { postsRepository } from '@/repositories'

const { data, isLoading } = useQuery({
  queryKey: ['posts'],
  queryFn: () => postsRepository.getPosts()
})
```

**Client State:** Use Pinia stores in `src/stores/`

### API Layer (Repository Pattern)

API logic is centralized in `src/repositories/`:
- `posts.repository.ts` - Posts CRUD operations
- `users.repository.ts` - User operations
- `index.ts` - Central exports

Use the typed `http` client from `src/lib/axios.ts`:
```typescript
import { http } from '@/lib/axios'

const posts = await http.get<Post[]>('/posts')
```

### UI Components

Uses shadcn-vue components located in `src/components/ui/`:
- `button`, `card`, `input`, `label` are pre-installed
- Add more with: `npx shadcn-vue@latest add <component>`

Import pattern:
```typescript
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
```

### Styling

Tailwind CSS v4 is configured via the Vite plugin (no PostCSS). Theme variables are defined in `src/style.css` using the `@theme` directive. The project supports dark mode through the `useTheme` composable.

### Internationalization

vue-i18n is configured in `src/i18n/` with locales in `src/i18n/locales/`:
- `en.json` - English translations
- `vi.json` - Vietnamese translations

Use the `useI18n` composable in components:
```typescript
const { t, locale } = useI18n()
```

## Key Configuration Files

- `vite.config.ts` - Vite + TanStack Router plugin + Tailwind CSS plugin
- `tsconfig.json` - TypeScript with strict mode, path alias `@/*` → `src/*`
- `components.json` - shadcn-vue configuration

## Important Notes

- The project uses **TanStack Router** (not vue-router). Refer to TanStack Router documentation for routing features.
- Use `Link` component from `@tanstack/vue-router` for navigation (not `RouterLink`)
- Use `Outlet` component instead of `RouterView` for route rendering
- Access route params with `useParams({ from: '/posts/$postId' })` for type safety - params are reactive refs
- This project uses pnpm workspace (see `pnpm-workspace.yaml`)
- The axios instance reads `VITE_API_BASE_URL` env variable, defaulting to `https://jsonplaceholder.typicode.com`.
