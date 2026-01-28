<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchLocale = (lang: 'en' | 'vi') => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex gap-4 items-center justify-between">
          <div class="flex gap-4">
            <RouterLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">
              {{ t('nav.home') }}
            </RouterLink>
            <RouterLink to="/about" class="text-blue-600 hover:text-blue-800 font-medium">
              {{ t('nav.about') }}
            </RouterLink>
            <RouterLink to="/posts" class="text-blue-600 hover:text-blue-800 font-medium">
              {{ t('nav.posts') }}
            </RouterLink>
          </div>
          <div class="flex gap-2">
            <button 
              @click="switchLocale('en')"
              :class="locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              EN
            </button>
            <button 
              @click="switchLocale('vi')"
              :class="locale === 'vi' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              VI
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
      <RouterView />
    </div>
  </div>
</template>
