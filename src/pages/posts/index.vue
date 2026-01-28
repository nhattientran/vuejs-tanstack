<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useI18n } from 'vue-i18n'
import { http } from '@/lib/axios'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const { t } = useI18n()

interface Post {
  id: number
  title: string
  body: string
}

// Fetch posts using TanStack Query
const { data: posts, isLoading, error } = useQuery<Post[]>({
  queryKey: ['posts'],
  queryFn: () => http.get<Post[]>('/posts?_limit=5')
})
</script>

<template>
  <div class="max-w-4xl space-y-6">
    <h1 class="text-4xl font-bold tracking-tight">
      {{ t('posts.title') }}
    </h1>

    <div v-if="isLoading" class="text-muted-foreground">
      {{ t('posts.loading') }}
    </div>

    <Card v-else-if="error" class="border-destructive bg-destructive/10">
      <CardContent class="pt-6 text-destructive">
        {{ t('posts.errorLoading') }}: {{ (error as Error).message }}
      </CardContent>
    </Card>

    <div v-else-if="posts" class="space-y-4">
      <Card
        v-for="post in posts"
        :key="post.id"
        class="hover:shadow-md transition-shadow"
      >
        <CardHeader>
          <CardTitle class="text-xl">{{ post.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription class="text-base line-clamp-2">
            {{ post.body }}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="link" class="px-0" as-child>
            <a :href="`/posts/${post.id}`">
              {{ t('posts.readMore') }}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>

    <p v-else class="text-muted-foreground">
      {{ t('posts.noPostsFound') }}
    </p>
  </div>
</template>
