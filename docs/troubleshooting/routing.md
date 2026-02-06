# Routing Troubleshooting

## Routes return 404 unexpectedly

- Check that layout routes use `route.ts` naming (not `__root.route.ts`)
- Delete `src/routeTree.gen.ts` and restart dev server to regenerate routes
- Verify `createFileRoute()` path matches the actual URL path

## TanStack Router Conventions

**CRITICAL:** Always follow these naming conventions to avoid 404 errors:
- Use `__root.tsx` (not `__root.route.ts`) for the root layout at `src/routes/__root.tsx`
- Child layout routes should be named `route.ts` in their respective folders (e.g., `admin/route.ts`)
- **Never** use `__root` as a folder name - it causes 404 redirects
- Layout folders should use `_` prefix (e.g., `_layout/`) to hide from URL path

## Layout Routes with `_` Prefix

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

## Regenerating Route Tree

When changing route structure, delete the generated file to regenerate:

```bash
rm -f src/routeTree.gen.ts
```
