<script setup lang="ts">
import { Outlet, Link } from "@tanstack/vue-router";
import { useI18n } from "vue-i18n";

import { useTheme } from "@/composables/useTheme";

const { t, locale } = useI18n();
const { theme, toggleTheme } = useTheme();

const switchLocale = (lang: "en" | "vi") => {
  locale.value = lang;
  localStorage.setItem("locale", lang);
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex gap-4 items-center justify-between">
          <div class="flex gap-4">
            <Link
              to="/"
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              {{ t("nav.home") }}
            </Link>
            <Link
              to="/about"
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              {{ t("nav.about") }}
            </Link>
            <Link
              to="/posts"
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              {{ t("nav.posts") }}
            </Link>
          </div>
          <div class="flex gap-2">
            <button
              @click="switchLocale('en')"
              :class="
                locale === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              "
              class="px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              EN
            </button>
            <button
              @click="switchLocale('vi')"
              :class="
                locale === 'vi'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              "
              class="px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              VI
            </button>
            <button
              @click="toggleTheme()"
              class="px-3 py-1 rounded text-sm font-medium transition-colors bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {{ theme === 'dark' ? '🌙' : '☀️' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
      <Outlet />
    </div>
  </div>
</template>
