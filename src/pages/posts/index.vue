<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

interface Post {
  id: number
  title: string
  body: string
}

// Fetch posts using TanStack Query
const { data: posts, isLoading, error } = useQuery<Post[]>({
  queryKey: ['posts'],
  queryFn: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (!response.ok) throw new Error('Failed to fetch posts')
    return response.json()
  }
})
</script>

<template>
  <div class="max-w-4xl">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">
      Posts
    </h1>

    <div v-if="isLoading" class="text-gray-600">
      Loading posts...
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
      Error loading posts: {{ error.message }}
    </div>

    <div v-else-if="posts" class="space-y-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          {{ post.title }}
        </h2>
        <p class="text-gray-600">
          {{ post.body }}
        </p>
        <div class="mt-4">
          <a
            :href="`/posts/${post.id}`"
            class="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-500">
      No posts found
    </div>
  </div>
</template>
