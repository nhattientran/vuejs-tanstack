# Vue.js + TanStack Query Project

A Vue.js Client-Side Rendering project with TypeScript, Tailwind CSS v4, TanStack Query, shadcn-vue, and vue-i18n.

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS v4** - Utility-first CSS framework (with Vite plugin)
- **TanStack Query** - Powerful data synchronization for server state
- **Vue Router** - Official router for Vue.js
- **unplugin-vue-router** - Type-safe, file-based routing plugin
- **shadcn-vue** - Re-usable UI components built with Reka UI and Tailwind
- **vue-i18n** - Internationalization plugin for Vue.js
- **axios** - HTTP client for API requests

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
├── components/
│   └── ui/              # shadcn-vue components
│       ├── button/
│       ├── card/
│       ├── input/
│       └── label/
├── i18n/
│   ├── index.ts         # i18n configuration
│   └── locales/
│       ├── en.json      # English translations
│       └── vi.json      # Vietnamese translations
├── lib/
│   ├── axios.ts         # Axios configuration with interceptors
│   └── utils.ts         # Utility functions (cn helper)
├── pages/               # File-based routing
│   ├── index.vue        # Home page (/)
│   ├── about.vue        # About page (/about)
│   └── posts/           # Posts routes
│       ├── index.vue    # Posts list (/posts)
│       └── [id].vue     # Post detail (/posts/:id)
├── repositories/        # API repositories for data fetching
│   ├── index.ts         # Central export for all repositories
│   ├── posts.repository.ts   # Posts API methods
│   └── users.repository.ts   # Users API methods
├── App.vue              # Main app component with layout
├── main.ts              # Application entry point
└── style.css            # Global styles with Tailwind v4 theme
```

## Features

### Internationalization (i18n)

The app supports multiple languages with vue-i18n:

```vue
<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Switch language
const switchLocale = (lang: 'en' | 'vi') => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <p>{{ t('common.loading') }}</p>
</template>
```

### shadcn-vue Components

Pre-installed UI components:

```vue
<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Form</CardTitle>
    </CardHeader>
    <CardContent>
      <Label>Email</Label>
      <Input type="email" placeholder="Enter email" />
      <Button>Submit</Button>
    </CardContent>
  </Card>
</template>
```

Add more components:
```bash
npx shadcn-vue@latest add [component-name]
```

### Repository Pattern for API Calls

API logic is organized using the repository pattern for better maintainability and code reuse:

```typescript
import { postsRepository } from '@/repositories'

// GET all posts
const posts = await postsRepository.getPosts({ _limit: 10 })

// GET single post
const post = await postsRepository.getPostById(1)

// POST new post
const newPost = await postsRepository.createPost({ userId: 1, title: 'New Post', body: 'Content' })

// PUT update post
const updated = await postsRepository.updatePost(1, { title: 'Updated Title' })

// DELETE post
await postsRepository.deletePost(1)
```

Each repository exports typed interfaces and CRUD methods, keeping API logic centralized and components clean.

### Axios HTTP Client

Configured with interceptors for auth and error handling:

```typescript
import { http } from '@/lib/axios'

// Direct HTTP requests (use repositories instead)
const posts = await http.get<Post[]>('/posts')
const newPost = await http.post<Post>('/posts', { title: 'New Post' })
```

### Path Aliases

Use `@` to import from `src/`:

```typescript
import { http } from '@/lib/axios'
import { Button } from '@/components/ui/button'
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

## TanStack Query

TanStack Query (Vue Query) is pre-configured for server state management. Use it with repositories for type-safe data fetching:

```vue
<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { postsRepository } from '@/repositories'

const { data: posts, isLoading, error } = useQuery({
  queryKey: ['posts', { limit: 10 }],
  queryFn: () => postsRepository.getPosts({ _limit: 10 })
})
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>
```

Benefits:
- Type-safe API responses from repositories
- Automatic caching and background synchronization
- Optimistic updates support
- Centralized API logic

## Tailwind CSS v4

Tailwind v4 is configured with the Vite plugin. No PostCSS configuration needed.

### Configuration

- `vite.config.ts` - Tailwind Vite plugin
- `src/style.css` - Theme configuration with `@theme` directive

### Custom Colors (shadcn theme)

```css
@theme {
  --color-background: hsl(0 0% 100%);
  --color-primary: hsl(0 0% 9%);
  --color-muted-foreground: hsl(0 0% 45.1%);
  /* ... */
}
```

## TypeScript

The project is configured with TypeScript strict mode for maximum type safety.

### Type Safety Features

- Strict type checking enabled
- Auto-generated route types from unplugin-vue-router
- Type-safe API responses with TanStack Query
- Vue 3 Composition API types

### Configuration Files

- `tsconfig.json` - Base TypeScript config with path aliases
- `tsconfig.app.json` - App-specific config
- `src/vite-env.d.ts` - Vite environment types

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

### Adding shadcn-vue Components

```bash
npx shadcn-vue@latest add button input card dialog
```

## Dependencies

### Production
- `vue` - Vue.js framework
- `vue-router` - Official router
- `vue-i18n` - Internationalization
- `@tanstack/vue-query` - Data fetching and caching
- `@tanstack/vue-table` - Table component
- `axios` - HTTP client
- `tailwindcss` - CSS framework (v4)
- `@tailwindcss/vite` - Tailwind Vite plugin
- `reka-ui` - Headless UI primitives (for shadcn-vue)

### Development
- `vite` - Build tool
- `typescript` - Type safety
- `unplugin-vue-router` - File-based routing
- `@vitejs/plugin-vue` - Vite Vue plugin

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [TanStack Query (Vue)](https://tanstack.com/query/latest/docs/vue/overview)
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [vue-i18n](https://vue-i18n.intlify.dev/)
- [Vite](https://vitejs.dev/)
