# Common UI Patterns

## Page Header

```vue
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <div>
    <h1 class="text-2xl font-bold text-foreground">Page Title</h1>
    <p class="text-sm text-muted-foreground mt-1">Page description goes here</p>
  </div>
  <div class="flex items-center gap-3">
    <Button variant="outline" size="sm">
      <Icon class="w-4 h-4 mr-2" />
      Secondary Action
    </Button>
    <Button size="sm">
      <Icon class="w-4 h-4 mr-2" />
      Primary Action
    </Button>
  </div>
</div>
```

## Stats Card

```vue
<Card class="border-0 shadow-sm">
  <CardContent class="p-4 flex items-center gap-4">
    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon class="w-6 h-6 text-primary" />
    </div>
    <div>
      <p class="text-sm text-muted-foreground">Label</p>
      <p class="text-2xl font-bold text-foreground">Value</p>
    </div>
  </CardContent>
</Card>
```

## Status Badge

```vue
<!-- Active -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
  Active
</span>

<!-- Inactive -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
  Inactive
</span>

<!-- Warning -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">
  Pending
</span>

<!-- Destructive -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
  Error
</span>
```

## Data Table

```vue
<Card class="border-0 shadow-sm">
  <CardContent class="p-0">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b bg-muted/50">
            <th class="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Column Header
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b last:border-0 hover:bg-muted/50 transition-colors">
            <td class="py-3 px-4">Cell Content</td>
          </tr>
        </tbody>
      </table>
    </div>
  </CardContent>
</Card>
```

## Employee Avatar

```vue
<div class="flex items-center gap-3">
  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
    {{ initials }}
  </div>
  <div>
    <p class="font-medium text-foreground text-sm">{{ name }}</p>
    <p class="text-xs text-muted-foreground">{{ email }}</p>
  </div>
</div>
```

## Search Input

```vue
<div class="relative">
  <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
  <Input v-model="searchQuery" placeholder="Search..." class="pl-10" />
</div>
```

## Empty State

```vue
<Card class="border-0 shadow-sm">
  <CardContent class="py-12 text-center">
    <div class="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
      <Icon class="w-8 h-8 text-muted-foreground" />
    </div>
    <h3 class="text-lg font-medium">No data found</h3>
    <p class="text-sm text-muted-foreground mt-1">Get started by adding your first item</p>
    <Button class="mt-4">Add Item</Button>
  </CardContent>
</Card>
```

## Loading State

```vue
<div class="space-y-4">
  <div v-for="i in 3" :key="i" class="flex items-center gap-4">
    <div class="w-10 h-10 rounded-full bg-muted animate-pulse" />
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-muted rounded w-1/3 animate-pulse" />
      <div class="h-3 bg-muted rounded w-1/2 animate-pulse" />
    </div>
  </div>
</div>
```

## Pagination

```vue
<div class="flex items-center justify-between px-4 py-4 border-t">
  <p class="text-sm text-muted-foreground">
    Showing {{ start }} to {{ end }} of {{ total }} results
  </p>
  <div class="flex items-center gap-2">
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === 1"
      @click="currentPage--"
    >
      <ChevronLeft class="w-4 h-4" />
    </Button>
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === totalPages"
      @click="currentPage++"
    >
      <ChevronRight class="w-4 h-4" />
    </Button>
  </div>
</div>
```

## Animation Standards

### Transition Classes
```css
/* Micro interactions */
.transition-micro {
  @apply transition-all duration-150 ease-in-out;
}

/* Standard transitions */
.transition-standard {
  @apply transition-all duration-200 ease-in-out;
}

/* Smooth transitions */
.transition-smooth {
  @apply transition-all duration-300 ease-in-out;
}
```

### Hover Effects
```css
/* Card hover */
.card-hover {
  @apply transition-shadow duration-200;
}
.card-hover:hover {
  @apply shadow-md;
}

/* Button active */
button:active {
  @apply scale-95;
}

/* Row hover */
.row-hover {
  @apply transition-colors duration-150;
}
```

## Responsive Breakpoints

| Pattern | Desktop (lg+) | Tablet (md) | Mobile (sm) |
|---------|---------------|-------------|-------------|
| Page Header | Row layout | Row layout | Stack layout |
| Stats Cards | 3-4 cols | 2-3 cols | 1 col |
| Data Table | Full columns | Scrollable | Scrollable |
| Form Grid | 2 cols | 2 cols | 1 col |
| Card Grid | 3 cols | 2 cols | 1 col |
