# Page-Specific Design Systems

Tài liệu design system chi tiết cho từng trang trong Admin Dashboard.

## Các trang

| Trang | Route | File |
|-------|-------|------|
| Dashboard | `/admin/dashboard` | [dashboard.md](./dashboard.md) |
| Employees | `/admin/employees` | [employees.md](./employees.md) |
| Departments | `/admin/departments` | [departments.md](./departments.md) |
| Settings | `/admin/settings` | [settings.md](./settings.md) |
| Common Patterns | - | [common-patterns.md](./common-patterns.md) |

## Cấu trúc chung

Mỗi trang bao gồm:
- **Layout Pattern**: Sơ đồ cấu trúc trang
- **Color Usage**: Bảng màu sử dụng
- **Component Specs**: Code mẫu cho các components
- **Responsive**: Breakpoints và behavior

## Quick Reference

### Page Header
```vue
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <div>
    <h1 class="text-2xl font-bold text-foreground">Page Title</h1>
    <p class="text-sm text-muted-foreground mt-1">Description</p>
  </div>
  <div class="flex items-center gap-3">
    <!-- Actions -->
  </div>
</div>
```

### Stats Card
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

### Status Badge
```vue
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
  Active
</span>
```
