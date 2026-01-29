import { http } from '@/lib/axios'

export interface User {
  id: number
  name: string
  username: string
  email: string
  address?: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone?: string
  website?: string
  company?: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface CreateUserPayload {
  name: string
  username: string
  email: string
  phone?: string
  website?: string
}

/**
 * Users Repository
 * Handles all user-related API calls
 */
export const usersRepository = {
  /**
   * Fetch all users
   */
  getUsers: (params?: { _limit?: number; _start?: number }) =>
    http.get<User[]>('/users', { params }),

  /**
   * Fetch a single user by ID
   */
  getUserById: (id: number) =>
    http.get<User>(`/users/${id}`),

  /**
   * Create a new user
   */
  createUser: (payload: CreateUserPayload) =>
    http.post<User>('/users', payload),

  /**
   * Update a user
   */
  updateUser: (id: number, payload: Partial<User>) =>
    http.put<User>(`/users/${id}`, payload),

  /**
   * Delete a user
   */
  deleteUser: (id: number) =>
    http.delete<void>(`/users/${id}`),
}
