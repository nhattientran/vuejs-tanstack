<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const route = useRoute()
const postId = route.params.id as string

// Fetch single post using TanStack Query
const { data: post, isLoading, error } = useQuery<Post>({
  queryKey: ['post', postId],
  queryFn: async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (!response.ok) throw new Error('Failed to fetch post')
    return response.json()
  }
})
</script>

<template>
  <div class="max-w-4xl">
    <a href="/posts" class="text-blue-600 hover:text-blue-800 mb-4 inline-block">
      ← Back to Posts
    </a>

    <div v-if="isLoading" class="text-gray-600 mt-4">
      Loading post...
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 mt-4">
      Error loading post: {{ error.message }}
    </div>

    <div v-else-if="post" class="mt-4">
      <div class="bg-white rounded-lg shadow-md p-8">
        <div class="mb-4">
          <span class="text-sm text-gray-500">Post #{{ post.id }}</span>
        </div>

        <h1 class="text-3xl font-bold text-gray-900 mb-6">
          {{ post.title }}
        </h1>

        <div class="prose prose-lg text-gray-700">
          <p>{{ post.body }}</p>
        </div>

        <div class="mt-6 pt-6 border-t border-gray-200">
          <p class="text-sm text-gray-500">
            Author ID: {{ post.userId }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-500 mt-4">
      Post not found
    </div>
  </div>
</template>
