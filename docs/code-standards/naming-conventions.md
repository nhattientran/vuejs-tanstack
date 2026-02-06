# Naming Conventions

## General Rules

- **kebab-case** for all files: `my-component.vue`, `use-auth.ts`
- Descriptive names that explain purpose
- Keep names under 40 characters when possible
- No abbreviations except common ones (i18n, api, http)

## File Naming Patterns

| Type | Pattern | Example |
|------|---------|---------|
| Vue Components | PascalCase in code, kebab-case in files | `UserCard.vue` in `user-card.vue` |
| Composables | `use-{feature}.ts` | `use-login-form.ts`, `use-theme.ts` |
| Repositories | `{entity}.repository.ts` | `posts.repository.ts` |
| Routes | `{path}.route.ts` + `{path}.component.vue` | `login.route.ts`, `login.component.vue` |
| Utils | `{purpose}.ts` | `axios.ts`, `utils.ts` |
| Stores | `{store}.store.ts` | `auth.store.ts` |

## Code Naming Conventions

### Variables
```typescript
// camelCase for variables and functions
const userName = ref('');
const isLoading = ref(false);
const fetchData = async () => {};

// PascalCase for types and interfaces
interface UserProfile {}
type Status = 'active' | 'inactive';

// SCREAMING_SNAKE_CASE for constants
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;
```

### Components
```vue
<!-- File: user-profile-card.vue -->
<script setup lang="ts">
// Component name in PascalCase
const props = defineProps<Props>();
</script>
```

### Composables
```typescript
// use-{noun}-{action} or use-{feature}
export function useAuth() {}
export function useLoginForm() {}
export function useTheme() {}
```

## Directory Naming

- All directories: kebab-case
- Feature-based folders: `employee-management/`, `attendance-tracking/`
- No plural names for top-level: `composable/`, `repository/` (but `composables/`, `repositories/` is OK)
