import { http } from '@/lib/axios'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface CreatePostPayload {
  userId: number
  title: string
  body: string
}

/**
 * Posts Repository
 * Handles all post-related API calls
 */
export const postsRepository = {
  /**
   * Fetch all posts
   */
  getPosts: (params?: { _limit?: number; _start?: number }) =>
    http.get<Post[]>('/posts', { params }),

  /**
   * Fetch a single post by ID
   */
  getPostById: (id: number) =>
    http.get<Post>(`/posts/${id}`),

  /**
   * Fetch posts by user
   */
  getPostsByUser: (userId: number) =>
    http.get<Post[]>('/posts', { params: { userId } }),

  /**
   * Create a new post
   */
  createPost: (payload: CreatePostPayload) =>
    http.post<Post>('/posts', payload),

  /**
   * Update a post
   */
  updatePost: (id: number, payload: Partial<Post>) =>
    http.put<Post>(`/posts/${id}`, payload),

  /**
   * Delete a post
   */
  deletePost: (id: number) =>
    http.delete<void>(`/posts/${id}`),
}
