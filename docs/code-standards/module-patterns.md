# Module Patterns

## Import Order

```typescript
// 1. Vue core
import { ref, computed } from 'vue';

// 2. External libraries
import { useQuery } from '@tanstack/vue-query';
import { z } from 'zod';

// 3. Internal absolute imports (@/)
import { Button } from '@/components/ui/button';
import { http } from '@/lib/axios';

// 4. Internal relative imports (./)
import { helper } from './utils';
import type { User } from './types';
```

## Export Patterns

```typescript
// Named exports for multiple items
export interface User { }
export type Status = 'active' | 'inactive';
export function useAuth() { }

// Default export for single component
export default defineComponent({ });

// Barrel exports (index.ts)
export { postsRepository } from './posts.repository';
export { usersRepository } from './users.repository';
export type { Post, CreatePostDto } from './posts.repository';
```

## Repository Pattern Standards

```typescript
// posts.repository.ts
import { http } from '@/lib/axios';

// Types
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CreatePostDto {
  title: string;
  body: string;
  userId: number;
}

// Repository object
export const postsRepository = {
  async getPosts(params?: { _limit?: number }): Promise<Post[]> {
    const { data } = await http.get<Post[]>('/posts', { params });
    return data;
  },

  async getPostById(id: number): Promise<Post> {
    const { data } = await http.get<Post>(`/posts/${id}`);
    return data;
  },

  async createPost(post: CreatePostDto): Promise<Post> {
    const { data } = await http.post<Post>('/posts', post);
    return data;
  },

  async updatePost(id: number, post: Partial<CreatePostDto>): Promise<Post> {
    const { data } = await http.put<Post>(`/posts/${id}`, post);
    return data;
  },

  async deletePost(id: number): Promise<void> {
    await http.delete(`/posts/${id}`);
  }
};
```
