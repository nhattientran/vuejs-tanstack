# Employees Page Design System

## Route
`/admin/employees`

## Layout Pattern
```
┌─────────────────────────────────────────────────────────────┐
│ Page Header                                                 │
│ ├── Title + Description                                     │
│ └── Actions: Export + Add Employee                          │
├─────────────────────────────────────────────────────────────┤
│ Stats Cards (3 cols)                                        │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│ │   Total     │ │   Active    │ │  Inactive   │             │
│ └─────────────┘ └─────────────┘ └─────────────┘             │
├─────────────────────────────────────────────────────────────┤
│ Filters Card                                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [Search Input        ] [Status ▼] [Filter Button]       │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Employees Table                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Employee │ Contact │ Department │ Status │ Actions      │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ [Data rows...]                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Pagination                                                  │
│ └── Showing X to Y of Z results    [<] [>]                  │
└─────────────────────────────────────────────────────────────┘
```

## Color Usage
| Element | Color | Token |
|---------|-------|-------|
| Active Status | #10B981 | `bg-success/10 text-success` |
| Inactive Status | #64748B | `bg-muted text-muted-foreground` |
| Edit Button | #64748B | `text-muted-foreground` |
| Delete Button | #EF4444 | `text-destructive` |

## Component Specs

### Stats Card
```vue
<Card class="border-0 shadow-sm">
  <CardContent class="p-4 flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <UserCheck class="w-6 h-6 text-primary" />
    </div>
    <div>
      <p class="text-sm text-muted-foreground">Total Employees</p>
      <p class="text-2xl font-bold text-foreground">{{ stats.total }}</p>
    </div>
  </CardContent>
</Card>
```

### Filter Bar
```vue
<Card class="border-0 shadow-sm">
  <CardContent class="p-4">
    <div class="flex flex-col sm:flex-row gap-4">
      <div class="relative flex-1">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input v-model="searchQuery" placeholder="Search employees..." class="pl-10" />
      </div>
      <div class="flex gap-2">
        <select v-model="selectedStatus" class="px-4 py-2 rounded-md border border-input bg-background text-sm">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <Button variant="outline" size="icon">
          <Filter class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </CardContent>
</Card>
```

### Employee Table Row
```vue
<tr class="border-b last:border-0 hover:bg-muted/50 transition-colors">
  <td class="py-4 px-4">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
        {{ initials }}
      </div>
      <div>
        <p class="font-medium text-foreground text-sm">{{ employee.name }}</p>
        <p class="text-xs text-muted-foreground">@{{ employee.username }}</p>
      </div>
    </div>
  </td>
  <td class="py-4 px-4">
    <div class="space-y-1">
      <div class="flex items-center gap-2 text-sm text-muted-foreground">
        <Mail class="w-3.5 h-3.5" />
        {{ employee.email }}
      </div>
    </div>
  </td>
  <td class="py-4 px-4">
    <div class="flex items-center gap-2">
      <Building2 class="w-4 h-4 text-muted-foreground" />
      <span class="text-sm">{{ employee.department }}</span>
    </div>
  </td>
  <td class="py-4 px-4">
    <span :class="['inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      isActive ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground']"
    >
      {{ status }}
    </span>
  </td>
  <td class="py-4 px-4 text-right">
    <div class="flex items-center justify-end gap-2">
      <Button variant="ghost" size="icon" class="h-8 w-8">
        <Pencil class="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon" class="h-8 w-8 text-destructive">
        <Trash2 class="w-4 h-4" />
      </Button>
    </div>
  </td>
</tr>
```

### Pagination
```vue
<div class="flex items-center justify-between px-4 py-4 border-t">
  <p class="text-sm text-muted-foreground">
    Showing {{ start }} to {{ end }} of {{ total }} results
  </p>
  <div class="flex items-center gap-2">
    <Button variant="outline" size="sm" :disabled="currentPage === 1" @click="prev">
      <ChevronLeft class="w-4 h-4" />
    </Button>
    <Button variant="outline" size="sm" :disabled="currentPage === totalPages" @click="next">
      <ChevronRight class="w-4 h-4" />
    </Button>
  </div>
</div>
```

## Responsive
- **Stats:** `grid-cols-1 sm:grid-cols-3`
- **Table:** Horizontal scroll on mobile with `overflow-x-auto`
