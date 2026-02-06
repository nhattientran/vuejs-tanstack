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

| Pattern | Purpose | Example |
|---------|---------|---------|
| `__root.tsx` | Root route layout | `src/routes/__root.tsx` |
| `route.ts` | Nested layout wrapper | `admin/route.ts` |
| `index.route.ts` + `index.component.vue` | Home page | `/` |
| `path.route.ts` + `path.component.vue` | Standard route | `about.route.ts` |
| `folder/index.route.ts` | Index route | `posts/index.route.ts` → `/posts` |
| `folder/$param.route.ts` | Dynamic route | `posts/$postId.route.ts` → `/posts/:postId` |
| `$.route.ts` | Catch-all 404 | `$.route.ts` |

Each route requires two files:
- `.route.ts` - Route configuration using `createFileRoute('/path')`
- `.component.vue` - The Vue component (must export default)

The route tree is auto-generated at `src/routeTree.gen.ts` when the dev server runs.

### Layout Routes

For nested layouts (e.g., `/admin` with sidebar), create `route.ts` with render function:

```typescript
// src/routes/admin/route.ts
import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/vue-router";
import { computed, ref, h } from "vue";

const AdminLayout = () => {
  const location = useLocation();
  const currentPath = computed(() => location.value.pathname);

  return h("div", { class: "flex" }, [
    h("aside", {}, [/* sidebar */]),
    h("main", {}, [h(Outlet)])
  ]);
};

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});
```

### Route Redirects

```typescript
// src/routes/admin/index.route.ts
import { createFileRoute, redirect } from "@tanstack/vue-router";

export const Route = createFileRoute("/admin/")({
  beforeLoad: () => {
    throw redirect({ to: "/admin/dashboard" });
  },
});
```

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
- Access current location with `useLocation()` - returns `Ref<ParsedLocation>` with `.value.pathname`
- This project uses pnpm workspace (see `pnpm-workspace.yaml`)
- The axios instance reads `VITE_API_BASE_URL` env variable, defaulting to `https://jsonplaceholder.typicode.com`.

## Troubleshooting

### Routes return 404 unexpectedly
- Check that layout routes use `route.ts` naming (not `__root.route.ts`)
- Delete `src/routeTree.gen.ts` and restart dev server to regenerate routes
- Verify `createFileRoute()` path matches the actual URL path

### Layout Routes with `_` Prefix

Use `_layout` folder to create layout wrapper that doesn't appear in URL:

```
src/routes/
├── _layout/
│   ├── route.ts              # Layout component with Outlet
│   ├── dashboard.route.ts    # → URL: /dashboard
│   ├── employees.route.ts    # → URL: /employees
│   └── dashboard.component.vue
└── index.route.ts            # Redirect: / → /dashboard
```

```typescript
// src/routes/_layout/route.ts
export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

// src/routes/_layout/dashboard.route.ts
export const Route = createFileRoute("/_layout/dashboard")({});
```

### Regenerating Route Tree

When changing route structure, delete the generated file to regenerate:
```bash
rm -f src/routeTree.gen.ts
```
