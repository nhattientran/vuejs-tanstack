<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { http } from '@/lib/axios'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const { t } = useI18n()

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const route = useRoute()
const postId = computed(() => (route.params as { id: string }).id)

// Fetch single post using TanStack Query
const { data: post, isLoading, error } = useQuery<Post>({
  queryKey: ['post', postId],
  queryFn: () => http.get<Post>(`/posts/${postId.value}`)
})
</script>

<template>
  <div class="max-w-4xl space-y-6">
    <Button variant="ghost" as-child class="gap-2">
      <a href="/posts">
        {{ t('posts.backToPosts') }}
      </a>
    </Button>

    <div v-if="isLoading" class="text-muted-foreground">
      {{ t('posts.loadingPost') }}
    </div>

    <Card v-else-if="error" class="border-destructive bg-destructive/10">
      <CardContent class="pt-6 text-destructive">
        {{ t('posts.errorLoadingPost') }}: {{ (error as Error).message }}
      </CardContent>
    </Card>

    <Card v-else-if="post">
      <CardHeader>
        <CardDescription>{{ t('posts.postNumber') }}{{ post.id }}</CardDescription>
        <CardTitle class="text-3xl">{{ post.title }}</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-lg leading-relaxed">{{ post.body }}</p>
      </CardContent>
      <CardFooter class="border-t pt-6">
        <p class="text-sm text-muted-foreground">
          {{ t('posts.authorId') }}: {{ post.userId }}
        </p>
      </CardFooter>
    </Card>

    <p v-else class="text-muted-foreground">
      {{ t('posts.postNotFound') }}
    </p>
  </div>
</template>
