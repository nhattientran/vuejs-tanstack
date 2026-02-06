# Dashboard Page Design System

## Route
`/admin/dashboard`

## Layout Pattern
```
┌─────────────────────────────────────────────────────────────┐
│ Page Header (flex justify-between)                          │
│ ├── Title + Description (left)                              │
│ └── Actions: Date Picker + Export Button (right)            │
├─────────────────────────────────────────────────────────────┤
│ KPI Cards Grid (4 cols desktop, 2 cols tablet, 1 col mobile)│
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                 │
│ │ Total  │ │ Active │ │On Leave│ │Departments              │
│ └────────┘ └────────┘ └────────┘ └────────┘                 │
├─────────────────────────────────────────────────────────────┤
│ Main Content Grid (3 cols: 2 + 1)                           │
│ ┌────────────────────────────────┐ ┌─────────────────────┐  │
│ │                                │ │ Today's Attendance  │  │
│ │   Recent Employees Table       │ ├─────────────────────┤  │
│ │                                │ │ Upcoming Events     │  │
│ └────────────────────────────────┘ └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Color Usage
| Element | Color | Token |
|---------|-------|-------|
| Page Title | #1E293B | `text-foreground` |
| Description | #64748B | `text-muted-foreground` |
| KPI Card Icons | #2563EB, #10B981, #F59E0B, #3B82F6 | `bg-primary`, `bg-success`, `bg-warning` |
| KPI Numbers | #1E293B | `text-foreground` |
| Trend Up | #10B981 | `text-success` |
| Trend Down | #EF4444 | `text-destructive` |

## Component Specs

### KPI Card
```vue
<Card class="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
  <CardContent class="p-6">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm font-medium text-muted-foreground">Title</p>
        <p class="text-3xl font-bold text-foreground mt-2">Value</p>
        <div class="flex items-center gap-1 mt-2">
          <TrendingUp class="w-4 h-4 text-success" />
          <span class="text-sm text-success">+12%</span>
          <span class="text-sm text-muted-foreground ml-1">vs last month</span>
        </div>
      </div>
      <div class="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
        <Icon class="w-6 h-6 text-white" />
      </div>
    </div>
  </CardContent>
</Card>
```

### Data Table
```vue
<Card class="lg:col-span-2 border-0 shadow-sm">
  <CardHeader class="pb-4">
    <div class="flex items-center justify-between">
      <div>
        <CardTitle class="text-lg font-semibold text-foreground">Recent Employees</CardTitle>
        <CardDescription>Latest additions to your team</CardDescription>
      </div>
      <Button variant="ghost" size="sm" class="text-primary">
        View All
        <ArrowUpRight class="w-4 h-4 ml-1" />
      </Button>
    </div>
  </CardHeader>
  <CardContent>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b">
            <th class="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase">
              Employee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b last:border-0 hover:bg-muted/50 transition-colors">
            <td class="py-3 px-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                  AB
                </div>
                <div>
                  <p class="font-medium text-foreground text-sm">Name</p>
                  <p class="text-xs text-muted-foreground">email@example.com</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </CardContent>
</Card>
```

### Attendance Summary
```vue
<Card class="border-0 shadow-sm">
  <CardHeader class="pb-4">
    <CardTitle class="text-lg font-semibold">Today's Attendance</CardTitle>
    <CardDescription>Overview of today's check-ins</CardDescription>
  </CardHeader>
  <CardContent>
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
            <UserCheck class="w-5 h-5 text-success" />
          </div>
          <div>
            <p class="text-sm font-medium">Present</p>
            <p class="text-xs text-muted-foreground">On time arrivals</p>
          </div>
        </div>
        <span class="text-xl font-bold text-success">42</span>
      </div>
    </div>
  </CardContent>
</Card>
```

## Responsive
- **KPI Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Main Grid:** `grid-cols-1 lg:grid-cols-3` with `lg:col-span-2` for table
