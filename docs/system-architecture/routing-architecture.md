# Routing Architecture

## File-Based Routing (TanStack Router)

### Directory Structure

```
routes/
├── __root.tsx              # Root layout (applies to all routes)
├── $.route.ts              # Catch-all 404 route
├── index.route.ts          # / (home)
├── login.route.ts          # /login
└── _layout/                # Layout route
    ├── route.ts            # Layout wrapper with sidebar
    ├── dashboard.route.ts  # /dashboard
    ├── employees.route.ts  # /employees
    ├── departments.route.ts # /departments
    ├── attendance.route.ts # /attendance
    ├── positions.route.ts  # /positions
    ├── reports.route.ts    # /reports
    └── settings.route.ts   # /settings
```

### Route Configuration Pattern

```typescript
// route.ts (layout)
export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
  beforeLoad: ({ context }) => {
    // Auth guard
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  }
});

// dashboard.route.ts
export const Route = createFileRoute('/_layout/dashboard')({
  component: DashboardComponent, // Lazy loaded automatically
});
```

### Route Guards

```typescript
// Authentication guard
beforeLoad: ({ context }) => {
  if (!context.auth.isAuthenticated) {
    throw redirect({ to: '/login' });
  }
}

// Role-based guard
beforeLoad: ({ context }) => {
  if (!context.auth.hasRole('admin')) {
    throw redirect({ to: '/unauthorized' });
  }
}
```

### Navigation

```vue
<template>
  <!-- Use Link component from TanStack Router -->
  <Link to="/dashboard">Dashboard</Link>
  <Link :to="{ to: '/employees', params: { id: 1 } }">Employee</Link>
</template>
```
