# Departments Page Design System

## Route
`/admin/departments`

## Layout Pattern
```
┌─────────────────────────────────────────────────────────────┐
│ Page Header                                                 │
│ ├── Title + Description                                     │
│ └── Add Department Button                                   │
├─────────────────────────────────────────────────────────────┤
│ Stats Cards (3 cols)                                        │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│ │ Departments │ │  Employees  │ │  Avg/Dept   │             │
│ └─────────────┘ └─────────────┘ └─────────────┘             │
├─────────────────────────────────────────────────────────────┤
│ Search Card                                                 │
│ └── [Search Input                                    ]      │
├─────────────────────────────────────────────────────────────┤
│ Departments Grid (3 cols desktop, 2 cols tablet, 1 mobile)  │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│ │  [Icon]     │ │  [Icon]     │ │  [Icon]     │             │
│ │  Dept Name  │ │  Dept Name  │ │  Dept Name  │             │
│ │  Employees  │ │  Employees  │ │  Employees  │             │
│ │ [Avatars]   │ │ [Avatars]   │ │ [Avatars]   │             │
│ └─────────────┘ └─────────────┘ └─────────────┘             │
└─────────────────────────────────────────────────────────────┘
```

## Color Usage
| Element | Color | Token |
|---------|-------|-------|
| Card Icon | #2563EB | `bg-primary/10 text-primary` |
| Employee Count | #64748B | `text-muted-foreground` |
| Avatar Stack | Overlapping with border | `border-white dark:border-gray-800` |
| Overflow Count | #F1F5F9 | `bg-muted` |

## Component Specs

### Department Card
```vue
<Card class="border-0 shadow-sm hover:shadow-md transition-shadow">
  <CardHeader class="pb-3">
    <div class="flex items-start justify-between">
      <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Building2 class="w-6 h-6 text-primary" />
      </div>
      <div class="flex gap-1">
        <Button variant="ghost" size="icon" class="h-8 w-8">
          <Pencil class="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" class="h-8 w-8 text-destructive">
          <Trash2 class="w-4 h-4" />
        </Button>
      </div>
    </div>
    <CardTitle class="text-lg font-semibold mt-3">{{ dept.name }}</CardTitle>
    <CardDescription>{{ dept.description }}</CardDescription>
  </CardHeader>
  <CardContent>
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <Users class="w-4 h-4" />
      <span>{{ dept.employees.length }} employees</span>
    </div>
    <div class="mt-4 flex -space-x-2">
      <div
        v-for="emp in dept.employees.slice(0, 5)"
        :key="emp.id"
        class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium border-2 border-background"
        :title="emp.name"
      >
        {{ emp.name.charAt(0) }}
      </div>
      <div
        v-if="dept.employees.length > 5"
        class="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium border-2 border-background"
      >
        +{{ dept.employees.length - 5 }}
      </div>
    </div>
  </CardContent>
</Card>
```

### Stats Cards
```vue
<!-- Departments Count -->
<Card class="border-0 shadow-sm">
  <CardContent class="p-4 flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Building2 class="w-6 h-6 text-primary" />
    </div>
    <div>
      <p class="text-sm text-muted-foreground">Departments</p>
      <p class="text-2xl font-bold">{{ stats.total }}</p>
    </div>
  </CardContent>
</Card>

<!-- Total Employees -->
<Card class="border-0 shadow-sm">
  <CardContent class="p-4 flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
      <Users class="w-6 h-6 text-success" />
    </div>
    <div>
      <p class="text-sm text-muted-foreground">Total Employees</p>
      <p class="text-2xl font-bold text-success">{{ stats.employees }}</p>
    </div>
  </CardContent>
</Card>

<!-- Average per Department -->
<Card class="border-0 shadow-sm">
  <CardContent class="p-4 flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center">
      <Users class="w-6 h-6 text-info" />
    </div>
    <div>
      <p class="text-sm text-muted-foreground">Avg per Dept</p>
      <p class="text-2xl font-bold text-info">{{ stats.avgPerDept }}</p>
    </div>
  </CardContent>
</Card>
```

### Search Bar
```vue
<Card class="border-0 shadow-sm">
  <CardContent class="p-4">
    <div class="relative max-w-md">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input v-model="searchQuery" placeholder="Search departments..." class="pl-10" />
    </div>
  </CardContent>
</Card>
```

## Responsive
- **Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Cards:** Full width on mobile
