# API Layer Design

## Repository Pattern

Centralized API logic with consistent interface:

```typescript
// posts.repository.ts
import { http } from '@/lib/axios';

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

## HTTP Client Configuration

```typescript
// lib/axios.ts
import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Request interceptor: Add auth headers
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor: Error handling
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { http };
```

## Repository Structure Rules

1. One repository per domain entity
2. Export types alongside implementations
3. Use consistent naming: `getOne`, `getMany`, `create`, `update`, `delete`
4. Return typed promises
5. Handle errors at component level

## Usage with TanStack Query

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['posts', { limit: 10 }],
  queryFn: () => postsRepository.getPosts({ _limit: 10 })
});

const mutation = useMutation({
  mutationFn: postsRepository.createPost,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  }
});
```
