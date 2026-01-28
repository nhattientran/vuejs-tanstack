<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex gap-4">
          <RouterLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">
            Home
          </RouterLink>
          <RouterLink to="/about" class="text-blue-600 hover:text-blue-800 font-medium">
            About
          </RouterLink>
          <RouterLink to="/posts" class="text-blue-600 hover:text-blue-800 font-medium">
            Posts
          </RouterLink>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
      <RouterView />
    </div>
  </div>
</template>
