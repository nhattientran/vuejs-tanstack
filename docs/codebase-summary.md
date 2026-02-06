# Codebase Summary

## Architecture Overview

Vue.js 3 admin dashboard using modern stack with file-based routing, type-safe API layer, and comprehensive form handling. Architecture emphasizes developer experience through strict TypeScript, automated route generation, and centralized state management.

## Project Statistics

- **Source Files**: 51 files (~2,441 LOC)
- **Route Files**: 19 files (1,573 LOC)
- **UI Components**: 5 shadcn-vue components
- **Composables**: 2 reusable logic composables
- **Languages**: TypeScript 5.6, Vue 3.5

## Directory Structure

```
src/
├── components/ui/           # shadcn-vue UI components
│   ├── badge/              # Status badges
│   ├── button/             # Action buttons
│   ├── card/               # Content containers
│   ├── input/              # Form inputs
│   └── label/              # Form labels
│
├── routes/                 # TanStack Router file-based routes
│   ├── __root.tsx         # Root layout component
│   ├── $.route.ts         # Catch-all 404 route
│   ├── $.component.vue    # 404 page component
│   ├── index.route.ts     # Home route config
│   ├── index.component.vue # Home page component
│   ├── login.route.ts     # Login route config
│   ├── login.component.vue # Login page with form
│   └── _layout/           # Admin layout routes
│       ├── route.ts       # Layout wrapper with sidebar
│       ├── dashboard.route.ts + dashboard.component.vue
│       ├── employees.route.ts + employees.component.vue
│       ├── departments.route.ts + departments.component.vue
│       ├── attendance.route.ts + attendance.component.vue
│       ├── positions.route.ts + positions.component.vue
│       ├── reports.route.ts + reports.component.vue
│       └── settings.route.ts + settings.component.vue
│
├── repositories/          # API layer (Repository pattern)
│   ├── index.ts          # Central exports
│   ├── posts.repository.ts    # Posts CRUD operations
│   └── users.repository.ts    # Users CRUD operations
│
├── composables/           # Vue composables
│   ├── use-login-form.ts # Login form logic with TanStack Form
│   └── useTheme.ts       # Dark/light mode management
│
├── stores/                # Pinia stores (minimal usage)
│
├── i18n/                  # Internationalization
│   ├── index.ts          # i18n configuration
│   └── locales/          # Translation files
│       ├── en.json       # English translations
│       └── vi.json       # Vietnamese translations
│
├── lib/                   # Utilities and config
│   ├── axios.ts          # Axios instance with interceptors
│   └── utils.ts          # Helper functions (cn, etc.)
│
├── App.vue               # Root application component
├── main.ts               # Application entry point
├── routeTree.gen.ts      # Auto-generated route tree
└── style.css             # Global styles + Tailwind v4 theme
```

## Key Patterns

### File-Based Routing
TanStack Router generates routes from file structure:
- `route.ts` + `component.vue` pairs
- `_layout/` folders for nested layouts
- `$param.route.ts` for dynamic routes
- `$.route.ts` for 404 catch-all

### Repository Pattern
Centralized API logic with typed interfaces:
- Repository per domain entity
- Typed HTTP client
- Consistent error handling
- Easy mocking for tests

### Composable Pattern
Reusable logic extracted into composables:
- Form logic: `use-login-form.ts`
- Theme management: `useTheme.ts`
- Business logic separation from components

### Component Architecture
shadcn-vue components following design system:
- Atomic design principles
- Copy-paste customization
- Tailwind CSS styling
- Reka UI primitives

## Dependencies Summary

### Core Framework
- `vue` ^3.5.13 - Vue.js framework
- `typescript` ~5.6.2 - TypeScript compiler

### Routing & State
- `@tanstack/vue-router` ^1.157.18 - File-based routing
- `@tanstack/vue-query` ^5.92.9 - Server state management
- `@tanstack/vue-form` ^1.28.0 - Form state management
- `pinia` ^3.0.4 - Client state management

### UI & Styling
- `tailwindcss` ^4.1.18 - Utility CSS framework
- `@tailwindcss/vite` ^4.1.18 - Vite plugin
- `reka-ui` ^2.7.0 - Headless UI primitives
- `lucide-vue-next` ^0.563.0 - Icon library
- `class-variance-authority` ^0.7.1 - Component variants
- `tailwind-merge` ^3.4.0 - Class merging

### Validation & HTTP
- `zod` ^4.3.6 - Schema validation
- `axios` ^1.13.4 - HTTP client

### Utilities
- `@vueuse/core` ^14.1.0 - Vue utilities
- `vue-i18n` ^11.2.8 - Internationalization

## File Organization Principles

1. **Route Colocation**: Route config and component together
2. **Feature Grouping**: Related files in feature folders
3. **Index Barrels**: Central exports in `index.ts` files
4. **Size Limits**: Files kept under 200 lines
5. **Naming Clarity**: Descriptive, kebab-case filenames
