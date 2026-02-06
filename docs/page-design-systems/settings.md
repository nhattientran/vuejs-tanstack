# Settings Page Design System

## Route
`/admin/settings`

## Layout Pattern
```
┌─────────────────────────────────────────────────────────────┐
│ Page Header                                                 │
│ └── Title + Description                                     │
├─────────────────────────────────────────────────────────────┤
│ Settings Tabs                                               │
│ [Profile] [Notifications] [Security] [Appearance]          │
├─────────────────────────────────────────────────────────────┤
│ Settings Content                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  [Form content based on selected tab]                   │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Color Usage
| Element | Color | Token |
|---------|-------|-------|
| Active Tab | #2563EB | `text-primary border-b-2 border-primary` |
| Inactive Tab | #64748B | `text-muted-foreground` |
| Form Label | #374151 | `text-foreground` |
| Form Help | #6B7280 | `text-muted-foreground` |
| Save Button | #2563EB | `bg-primary` |
| Danger Zone | #EF4444 | `border-destructive text-destructive` |

## Component Specs

### Settings Tabs
```vue
<div class="border-b">
  <nav class="flex gap-6">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="[
        'pb-3 text-sm font-medium border-b-2 transition-colors',
        activeTab === tab.id
          ? 'text-primary border-primary'
          : 'text-muted-foreground border-transparent hover:text-foreground'
      ]"
      @click="activeTab = tab.id"
    >
      {{ tab.label }}
    </button>
  </nav>
</div>
```

### Profile Settings Form
```vue
<Card class="border-0 shadow-sm">
  <CardHeader>
    <CardTitle>Profile Information</CardTitle>
    <CardDescription>Update your personal information</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6">
    <!-- Avatar Upload -->
    <div class="flex items-center gap-4">
      <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-medium">
        {{ initials }}
      </div>
      <div class="flex gap-2">
        <Button variant="outline" size="sm">Upload Photo</Button>
        <Button variant="ghost" size="sm" class="text-destructive">Remove</Button>
      </div>
    </div>

    <!-- Form Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="space-y-2">
        <Label for="firstName">First Name</Label>
        <Input id="firstName" v-model="form.firstName" />
      </div>
      <div class="space-y-2">
        <Label for="lastName">Last Name</Label>
        <Input id="lastName" v-model="form.lastName" />
      </div>
    </div>

    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" v-model="form.email" />
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-3 pt-4">
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
    </div>
  </CardContent>
</Card>
```

### Notifications Settings
```vue
<Card class="border-0 shadow-sm">
  <CardHeader>
    <CardTitle>Notification Preferences</CardTitle>
    <CardDescription>Choose how you want to be notified</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6">
    <div
      v-for="setting in notificationSettings"
      :key="setting.id"
      class="flex items-center justify-between py-3 border-b last:border-0"
    >
      <div>
        <p class="font-medium">{{ setting.label }}</p>
        <p class="text-sm text-muted-foreground">{{ setting.description }}</p>
      </div>
      <Switch v-model="setting.enabled" />
    </div>
  </CardContent>
</Card>
```

### Security Settings
```vue
<Card class="border-0 shadow-sm">
  <CardHeader>
    <CardTitle>Change Password</CardTitle>
    <CardDescription>Update your password regularly for security</CardDescription>
  </CardHeader>
  <CardContent class="space-y-4">
    <div class="space-y-2">
      <Label for="currentPassword">Current Password</Label>
      <Input id="currentPassword" type="password" />
    </div>
    <div class="space-y-2">
      <Label for="newPassword">New Password</Label>
      <Input id="newPassword" type="password" />
    </div>
    <div class="space-y-2">
      <Label for="confirmPassword">Confirm New Password</Label>
      <Input id="confirmPassword" type="password" />
    </div>
    <Button>Update Password</Button>
  </CardContent>
</Card>

<!-- Danger Zone -->
<Card class="border-destructive">
  <CardHeader>
    <CardTitle class="text-destructive">Danger Zone</CardTitle>
    <CardDescription>Irreversible actions</CardDescription>
  </CardHeader>
  <CardContent class="space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <p class="font-medium">Delete Account</p>
        <p class="text-sm text-muted-foreground">This action cannot be undone</p>
      </div>
      <Button variant="destructive">Delete Account</Button>
    </div>
  </CardContent>
</Card>
```

### Appearance Settings
```vue
<Card class="border-0 shadow-sm">
  <CardHeader>
    <CardTitle>Appearance</CardTitle>
    <CardDescription>Customize how the dashboard looks</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6">
    <!-- Theme Toggle -->
    <div class="flex items-center justify-between">
      <div>
        <p class="font-medium">Dark Mode</p>
        <p class="text-sm text-muted-foreground">Toggle between light and dark theme</p>
      </div>
      <ThemeToggle />
    </div>

    <!-- Language Select -->
    <div class="space-y-2">
      <Label>Language</Label>
      <select class="w-full max-w-xs px-3 py-2 rounded-md border border-input bg-background">
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  </CardContent>
</Card>
```

## Responsive
- **Layout:** Full width on all screens
- **Form Grid:** `grid-cols-1 md:grid-cols-2` for side-by-side fields
- **Tabs:** Horizontal scroll on mobile if needed
