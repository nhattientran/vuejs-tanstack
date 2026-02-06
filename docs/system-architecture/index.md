# System Architecture

## Overview

Vue.js 3 admin dashboard with file-based routing, type-safe API layer, and comprehensive state management using TanStack ecosystem.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Vue.js 3 Application                  │
├─────────────────────────────────────────────────────────────┤
│  Components │ Composables │ Stores (minimal)                │
│       │            │              │                        │
│       └────────────┼──────────────┘                        │
│                    │                                        │
│         TanStack Router (File-based)                       │
│                    │                                        │
│         TanStack Query (Server State)                      │
│                    │                                        │
│            Repository Layer (API)                          │
│                    │                                        │
│              HTTP Client (axios)                           │
│                    │                                        │
│                REST API                                    │
└─────────────────────────────────────────────────────────────┘
```

## Detailed Documentation

| Topic | Location |
|-------|----------|
| Data Flow | [data-flow.md](./data-flow.md) |
| State Management | [state-management.md](./state-management.md) |
| Routing Architecture | [routing-architecture.md](./routing-architecture.md) |
| API Layer Design | [api-layer-design.md](./api-layer-design.md) |
| Security | [security-architecture.md](./security-architecture.md) |

## Component Hierarchy

```
App (Root)
│
├── __root.tsx (Root Layout)
│   ├── index.route.ts (Home)
│   ├── login.route.ts (Login)
│   └── _layout/ (Admin Layout)
│       ├── route.ts (Layout with Sidebar)
│       ├── dashboard.route.ts
│       ├── employees.route.ts
│       └── ... (other routes)
│
└── $.route.ts (404 Catch-all)
```

## Module Dependencies

```
components/ui/
    ├── Depends on: lib/utils.ts
    └── Used by: All page components

composables/
    ├── use-login-form.ts → login.component.vue
    └── useTheme.ts → App.vue, _layout/route.ts

repositories/
    ├── Depends on: lib/axios.ts
    └── Used by: Components with TanStack Query
```

## Performance Optimizations

1. **Lazy Loading**: Routes auto-lazy-loaded by TanStack Router
2. **Code Splitting**: Repository and composable imports naturally split
3. **Caching**: TanStack Query caches server state
4. **Tree Shaking**: ES modules enable effective tree shaking
5. **Vite**: Fast HMR and optimized builds
