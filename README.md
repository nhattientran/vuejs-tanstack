# Vue.js + TanStack Query Project

A Vue.js Client-Side Rendering project with TypeScript, Tailwind CSS, TanStack Query, and unplugin-vue-router.

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Query** - Powerful data synchronization for server state
- **Vue Router** - Official router for Vue.js
- **unplugin-vue-router** - Type-safe, file-based routing plugin

## Installation

```bash
pnpm install
```

## Running Development Server

```bash
pnpm dev
```

The server will run at: http://localhost:5173

## Build Production

```bash
pnpm build
```

## Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
src/
├── pages/               # File-based routing
│   ├── index.vue        # Home page (/)
│   ├── about.vue        # About page (/about)
│   └── posts/           # Posts routes
│       ├── index.vue    # Posts list (/posts)
│       └── [id].vue     # Post detail (/posts/:id)
├── App.vue              # Main app component with layout
├── main.ts              # Application entry point
└── style.css            # Global styles with Tailwind
```

## File-based Routing

unplugin-vue-router automatically generates routes from the `src/pages` directory:

### Naming Conventions

- `index.vue` - Home page at `/`
- `about.vue` - About page at `/about`
- `posts/index.vue` - Posts list at `/posts`
- `posts/[id].vue` - Post details at `/posts/:id` (dynamic route)

### Features

- Type-safe routing with auto-generated types
- Auto-import routes into Vue Router
- Dynamic routes with `[param]` syntax
- Nested routes support
- Route meta information

### Generated Files

The plugin automatically generates:
- `typed-router.d.ts` - Type definitions for routes (added to .gitignore)
- Auto-routes imported in `main.ts`

## TanStack Query

TanStack Query (Vue Query) is pre-configured for server state management. See examples in:

- `src/pages/index.vue` - Simple query example
- `src/pages/posts/index.vue` - Fetching list data from API
- `src/pages/posts/[id].vue` - Fetching single item with dynamic params

### Features

- Automatic caching and refetching
- Loading and error states
- Optimistic updates
- Infinite queries support
- Devtools integration (optional)

### Usage Example

```vue
<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { data, isLoading, error } = useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    const response = await fetch('https://api.example.com/posts')
    return response.json()
  }
})
</script>
```

## Tailwind CSS

Tailwind is configured and ready to use. CSS utilities can be used directly in templates.

### Configuration

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/style.css` - Global styles with Tailwind directives

### Usage

```vue
<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-blue-600">
      Hello World
    </h1>
  </div>
</template>
```

## TypeScript

The project is configured with TypeScript strict mode to ensure maximum type safety.

### Type Safety Features

- Strict type checking enabled
- Auto-generated route types from unplugin-vue-router
- Type-safe API responses with TanStack Query
- Vue 3 Composition API types

### Configuration Files

- `tsconfig.json` - Base TypeScript config
- `tsconfig.app.json` - App-specific config
- `src/vite-env.d.ts` - Vite environment types
- `typed-router.d.ts` - Auto-generated route types (created by unplugin-vue-router)

## Development

### Available Scripts

```bash
pnpm dev     # Start dev server
pnpm build   # Build for production
pnpm preview # Preview production build
```

### Adding New Routes

1. Create a `.vue` file in `src/pages/`
2. Routes will be automatically generated
3. Use `RouterLink` to navigate

Example:
```vue
<!-- src/pages/contact.vue -->
<template>
  <div>Contact Page</div>
</template>
```

The route will be automatically available at `/contact`

### Adding Dynamic Routes

```vue
<!-- src/pages/users/[id].vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>
```

## Project Structure Details

```
vuejs-tanstack/
├── src/
│   ├── pages/              # File-based routes
│   ├── assets/             # Static assets
│   ├── App.vue             # Root component with navigation
│   ├── main.ts             # App entry point
│   ├── style.css           # Global styles
│   └── vite-env.d.ts       # Type definitions
├── public/                 # Public static files
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
├── tsconfig.app.json       # App TypeScript config
└── vite.config.ts          # Vite config with unplugin-vue-router
```

## Dependencies

### Production
- `vue` - Vue.js framework
- `vue-router` - Official router
- `@tanstack/vue-query` - Data fetching and caching

### Development
- `vite` - Build tool
- `typescript` - Type safety
- `unplugin-vue-router` - File-based routing
- `tailwindcss` - CSS framework
- `@vitejs/plugin-vue` - Vite Vue plugin

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [TanStack Query (Vue)](https://tanstack.com/query/latest/docs/vue/overview)
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
