<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useI18n } from 'vue-i18n'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const { t } = useI18n()

// Example query to demonstrate TanStack Query
const { data, isLoading, error } = useQuery({
  queryKey: ['welcome'],
  queryFn: async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    return {
      timestamp: new Date().toISOString()
    }
  }
})
</script>

<template>
  <div class="max-w-4xl space-y-6">
    <h1 class="text-4xl font-bold tracking-tight">
      {{ t('home.title') }}
    </h1>

    <Card>
      <CardHeader>
        <CardTitle>{{ t('home.demoTitle') }}</CardTitle>
      </CardHeader>
      <CardContent>
        <div v-if="isLoading" class="text-muted-foreground">
          {{ t('common.loading') }}
        </div>

        <div v-else-if="error" class="text-destructive">
          {{ t('common.error') }}: {{ (error as Error).message }}
        </div>

        <div v-else-if="data" class="space-y-2">
          <p class="text-lg">{{ t('home.welcomeMessage') }}</p>
          <p class="text-sm text-muted-foreground">{{ t('home.loadedAt') }}: {{ data.timestamp }}</p>
        </div>
      </CardContent>
    </Card>

    <Card class="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle class="text-primary">{{ t('home.technologiesTitle') }}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>{{ t('home.technologies.vue') }}</li>
          <li>{{ t('home.technologies.typescript') }}</li>
          <li>{{ t('home.technologies.tailwind') }}</li>
          <li>{{ t('home.technologies.tanstackQuery') }}</li>
          <li>{{ t('home.technologies.tanstackRouter') }}</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</template>
