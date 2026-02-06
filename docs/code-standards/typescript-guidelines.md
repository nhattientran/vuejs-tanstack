# TypeScript Guidelines

## Type Conventions

```typescript
// Strict mode enabled - always define types
interface User {
  id: number;
  email: string;
  name: string;
}

// Use type for unions, interface for objects
type Status = 'active' | 'inactive' | 'pending';
type Theme = 'light' | 'dark';

// Explicit return types on exported functions
export async function fetchUser(id: number): Promise<User> {
  // implementation
}

// Enum alternatives: use const assertion
const ROLES = ['admin', 'user', 'guest'] as const;
type Role = typeof ROLES[number];
```

## Function Patterns

```typescript
// Named functions for exports
export function useAuth() {
  // ...
}

// Arrow functions for callbacks
const items = list.map((item) => item.id);

// Async/await for asynchronous code
async function loadData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    handleError(error);
  }
}
```

## Error Handling

```typescript
// Try-catch with typed errors
try {
  const data = await postsRepository.getPosts();
} catch (error) {
  if (axios.isAxiosError(error)) {
    // Handle API error
    console.error('API Error:', error.response?.status);
  } else {
    // Handle unexpected error
    console.error('Unexpected error:', error);
  }
}
```

## Type Exports

```typescript
// Export types alongside implementations
export interface Post {
  id: number;
  title: string;
}

export type CreatePostDto = Omit<Post, 'id'>;

// Re-export from index files
export type { Post, CreatePostDto } from './posts.repository';
```
