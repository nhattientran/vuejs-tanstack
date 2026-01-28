<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

// Example query to demonstrate TanStack Query
const { data, isLoading, error } = useQuery({
  queryKey: ['welcome'],
  queryFn: async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    return {
      message: 'Welcome to Vue + TanStack!',
      timestamp: new Date().toISOString()
    }
  }
})
</script>

<template>
  <div class="max-w-4xl">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">
      Home Page
    </h1>

    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        TanStack Query Demo
      </h2>

      <div v-if="isLoading" class="text-gray-600">
        Loading...
      </div>

      <div v-else-if="error" class="text-red-600">
        Error: {{ error.message }}
      </div>

      <div v-else-if="data" class="space-y-2">
        <p class="text-lg text-gray-700">{{ data.message }}</p>
        <p class="text-sm text-gray-500">Loaded at: {{ data.timestamp }}</p>
      </div>
    </div>

    <div class="bg-blue-50 rounded-lg p-6">
      <h3 class="text-xl font-semibold text-blue-900 mb-3">
        Technologies Used
      </h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Vue 3 with Composition API</li>
        <li>TypeScript for type safety</li>
        <li>Tailwind CSS for styling</li>
        <li>TanStack Query for data fetching</li>
        <li>TanStack Router for file-based routing</li>
      </ul>
    </div>
  </div>
</template>
