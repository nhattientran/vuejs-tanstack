<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const { t } = useI18n()

const features = [
  { key: 'typescript' },
  { key: 'tailwind' },
  { key: 'tanstackQuery' },
  { key: 'tanstackRouter' },
] as const
</script>

<template>
  <div class="max-w-4xl space-y-6">
    <h1 class="text-4xl font-bold tracking-tight">
      {{ t('about.title') }}
    </h1>

    <Card>
      <CardHeader>
        <CardDescription class="text-base">
          {{ t('about.description') }}
        </CardDescription>
      </CardHeader>
    </Card>

    <div>
      <h2 class="text-2xl font-semibold mb-4">
        {{ t('about.featuresTitle') }}
      </h2>

      <div class="grid gap-4 md:grid-cols-2">
        <Card v-for="feature in features" :key="feature.key" class="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle class="text-lg">
              {{ t(`about.features.${feature.key}.title`) }}
            </CardTitle>
            <CardDescription>
              {{ t(`about.features.${feature.key}.description`) }}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </div>
</template>
