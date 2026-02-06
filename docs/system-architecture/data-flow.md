# Data Flow

## Server State Flow (TanStack Query)

```
Component
    │
    ├─► useQuery({ queryKey, queryFn })
    │       │
    │       ▼
    │   Repository Method
    │       │
    │       ▼
    │   HTTP Client (axios)
    │       │
    │       ▼
    │   API Endpoint
    │
◄───┘◄── Cache ◄── Background Refetch
```

## Form Submission Flow (TanStack Form)

```
User Input
    │
    ▼
Form Field (with Zod validation)
    │
    ├─► onChange validation ──► Zod Schema
    │
    ▼
Submit Handler
    │
    ├─► API Call via Repository
    │
    ▼
Success: Invalidate Query Cache ──► Refetch Data
    │
Error: Display Form Errors
```

## Example: Fetching Data

```typescript
// Component
const { data, isLoading, error } = useQuery({
  queryKey: ['posts', { limit: 10 }],
  queryFn: () => postsRepository.getPosts({ _limit: 10 })
});

// Repository
export const postsRepository = {
  async getPosts(params?: { _limit?: number }): Promise<Post[]> {
    const { data } = await http.get<Post[]>('/posts', { params });
    return data;
  }
};

// HTTP Client
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});
```

## Example: Form Submission

```typescript
const form = useForm({
  defaultValues: { email: '', password: '' },
  onSubmit: async ({ value }) => {
    try {
      await authRepository.login(value);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.push('/dashboard');
    } catch (error) {
      form.setError('email', 'Invalid credentials');
    }
  }
});
```