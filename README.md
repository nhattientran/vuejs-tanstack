# Vue.js Admin Dashboard

A modern admin dashboard built with Vue.js 3, TypeScript, and TanStack ecosystem. Features file-based routing, type-safe API layer, comprehensive form handling, and Tailwind CSS v4 styling.

## Tech Stack

- **Vue 3.5** - Progressive JavaScript framework with Composition API
- **TypeScript 5.6** - Type-safe development with strict mode
- **TanStack Router** - File-based routing with type safety
- **TanStack Query** - Server state management and caching
- **TanStack Form + Zod** - Form handling with schema validation
- **Tailwind CSS v4** - Utility-first styling with Vite plugin
- **shadcn-vue** - Accessible UI components
- **Pinia** - Client state management
- **vue-i18n** - Internationalization (EN/VI)
- **axios** - HTTP client with interceptors

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Development server runs at http://localhost:5173

## Project Structure

```
src/
├── components/
│   └── ui/                 # shadcn-vue components
│       ├── button/
│       ├── card/
│       ├── input/
│       ├── label/
│       └── badge/
├── routes/                 # File-based routing (TanStack Router)
│   ├── __root.tsx         # Root layout
│   ├── index.route.ts     # Home route
│   ├── login.route.ts     # Login page
│   └── _layout/           # Admin layout with sidebar
│       ├── route.ts       # Layout wrapper
│       ├── dashboard.route.ts + dashboard.component.vue
│       ├── employees.route.ts + employees.component.vue
│       ├── departments.route.ts + departments.component.vue
│       ├── attendance.route.ts + attendance.component.vue
│       ├── positions.route.ts + positions.component.vue
│       ├── reports.route.ts + reports.component.vue
│       └── settings.route.ts + settings.component.vue
├── repositories/          # API layer (Repository pattern)
│   ├── posts.repository.ts
│   ├── users.repository.ts
│   └── index.ts
├── composables/           # Reusable logic
│   ├── use-login-form.ts
│   └── useTheme.ts
├── stores/                # Pinia stores (minimal usage)
├── i18n/                  # Internationalization
│   ├── index.ts
│   └── locales/
│       ├── en.json
│       └── vi.json
├── lib/                   # Utilities
│   ├── axios.ts          # HTTP client config
│   └── utils.ts          # Helper functions
├── App.vue               # Root component
├── main.ts               # Entry point
└── style.css             # Global styles + Tailwind theme
```

## Key Features

### File-Based Routing
Routes auto-generated from file structure. Each route requires:
- `.route.ts` - Route configuration
- `.component.vue` - Route component

```typescript
// routes/dashboard.route.ts
import { createFileRoute } from "@tanstack/vue-router";

export const Route = createFileRoute("/_layout/dashboard")({
  component: DashboardComponent,
});
```

### Type-Safe API Layer
Repository pattern with typed HTTP client:

```typescript
import { postsRepository } from '@/repositories'

const { data, isLoading } = useQuery({
  queryKey: ['posts'],
  queryFn: () => postsRepository.getPosts({ _limit: 10 })
})
```

### Form Handling
TanStack Form with Zod validation:

```typescript
import { useForm } from "@tanstack/vue-form"
import { z } from "zod"

const form = useForm({
  defaultValues: { email: "", password: "" },
  onSubmit: async ({ value }) => { /* handle submit */ }
})
```

### UI Components
shadcn-vue components with Tailwind styling:

```vue
<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>
```

## Documentation

| Document | Description |
|----------|-------------|
| [docs/project-overview-pdr.md](./docs/project-overview-pdr.md) | Product requirements and vision |
| [docs/codebase-summary.md](./docs/codebase-summary.md) | Architecture and code organization |
| [docs/code-standards.md](./docs/code-standards.md) | Coding conventions and patterns |
| [docs/system-architecture.md](./docs/system-architecture.md) | System design and data flow |
| [docs/project-roadmap.md](./docs/project-roadmap.md) | Development roadmap and milestones |
| [docs/design-system.md](./docs/design-system.md) | UI/UX guidelines |

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |

## Adding UI Components

```bash
npx shadcn-vue@latest add <component-name>
```

Available components: table, badge, separator, breadcrumb, dialog, dropdown-menu, etc.

## Environment Variables

Create `.env` file:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

Defaults to JSONPlaceholder for demo purposes.

## Resources

- [Vue 3 Docs](https://vuejs.org/)
- [TanStack Router](https://tanstack.com/router/latest)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Form](https://tanstack.com/form/latest)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)
