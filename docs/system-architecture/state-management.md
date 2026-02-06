# State Management

## Three Types of State

### 1. Server State (TanStack Query)

```typescript
// Automatic caching and synchronization
const { data, isLoading, error } = useQuery({
  queryKey: ['posts', { limit: 10 }],
  queryFn: () => postsRepository.getPosts({ _limit: 10 }),
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

**Characteristics:**
- Fetched from API
- Cached automatically
- Background refetching
- Optimistic updates

### 2. Client State (Pinia - Minimal)

```typescript
// Only for truly global state
const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => !!user.value);

  return { user, isAuthenticated };
});
```

**Use for:**
- Authentication state
- Theme preferences
- Global UI state (sidebar collapsed)

### 3. Local Component State

```typescript
// Component-specific state
const isEditing = ref(false);
const localFilter = ref('');
const showModal = ref(false);
```

**Use for:**
- UI-only state
- Form inputs (before submission)
- Toggle states
- Local filters

## State Management Rules

1. **Start local**: Lift state only when necessary
2. **Server state in TanStack Query**: Don't duplicate in Pinia
3. **Pinia for global UI**: Theme, auth, sidebar
4. **URL for shareable state**: Filters, pagination, search

## Query Key Structure

```typescript
// Hierarchical query keys
['posts']                    // All posts
['posts', { limit: 10 }]     // Paginated posts
['posts', postId]           // Single post
['users']                   // All users
['users', userId]           // Single user
['users', userId, 'posts']  // User's posts
```
