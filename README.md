# Vue.js + TanStack Query Project

Dự án Vue.js Client-Side Rendering với TypeScript, Tailwind CSS, TanStack Query và unplugin-vue-router.

## Công nghệ sử dụng

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Query** - Powerful data synchronization for server state
- **Vue Router** - Official router for Vue.js
- **unplugin-vue-router** - Type-safe, file-based routing plugin

## Cài đặt

```bash
pnpm install
```

## Chạy Development Server

```bash
pnpm dev
```

Server sẽ chạy tại: http://localhost:5173

## Build Production

```bash
pnpm build
```

## Preview Production Build

```bash
pnpm preview
```

## Cấu trúc Project

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

unplugin-vue-router tự động generate routes từ thư mục `src/pages`:

### Naming Conventions

- `index.vue` - Trang chủ tại `/`
- `about.vue` - Trang about tại `/about`
- `posts/index.vue` - Danh sách posts tại `/posts`
- `posts/[id].vue` - Chi tiết post tại `/posts/:id` (dynamic route)

### Features

- Type-safe routing với auto-generated types
- Auto-import routes vào Vue Router
- Dynamic routes với `[param]` syntax
- Nested routes support
- Route meta information

### Generated Files

Plugin sẽ tự động generate:
- `typed-router.d.ts` - Type definitions cho routes (đã thêm vào .gitignore)
- Auto-routes được import trong `main.ts`

## TanStack Query

TanStack Query (Vue Query) được cấu hình sẵn để quản lý server state. Xem ví dụ trong:

- `src/pages/index.vue` - Simple query example
- `src/pages/posts/index.vue` - Fetching list data từ API
- `src/pages/posts/[id].vue` - Fetching single item với dynamic params

### Features

- Automatic caching và refetching
- Loading và error states
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

Tailwind đã được cấu hình và sẵn sàng sử dụng. CSS utilities có thể dùng trực tiếp trong templates.

### Configuration

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/style.css` - Global styles với Tailwind directives

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

Project đã được cấu hình với TypeScript strict mode để đảm bảo type safety tối đa.

### Type Safety Features

- Strict type checking enabled
- Auto-generated route types từ unplugin-vue-router
- Type-safe API responses với TanStack Query
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

1. Tạo file `.vue` trong `src/pages/`
2. Routes sẽ tự động được generate
3. Sử dụng `RouterLink` để navigate

Example:
```vue
<!-- src/pages/contact.vue -->
<template>
  <div>Contact Page</div>
</template>
```

Route sẽ tự động available tại `/contact`

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
│   ├── App.vue             # Root component với navigation
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
└── vite.config.ts          # Vite config với unplugin-vue-router
```

## Dependencies

### Production
- `vue` - Vue.js framework
- `vue-router` - Official router
- `@tanstack/vue-query` - Data fetching và caching

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
