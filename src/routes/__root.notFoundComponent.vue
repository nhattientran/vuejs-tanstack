<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Link, useRouter } from '@tanstack/vue-router';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, HomeIcon } from 'lucide-vue-next';

const { t } = useI18n();
const router = useRouter();
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
    <!-- Animated Background Blobs -->
    <div
      class="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-500/30 dark:bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow">
    </div>
    <div
      class="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000">
    </div>

    <!-- Glassmorphism Card -->
    <div class="relative z-10 mx-4 w-full max-w-lg">
      <div
        class="backdrop-blur-2xl bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 text-center">
        <!-- 404 Text with Gradient -->
        <h1
          class="text-9xl font-black tracking-tighter mb-4 select-none bg-linear-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
          404
        </h1>

        <!-- Message -->
        <div class="space-y-4 mb-8">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {{ t('notFound.title') }}
          </h2>
          <p class="text-muted-foreground text-lg max-w-sm mx-auto leading-relaxed">
            {{ t('notFound.message') }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button as-child size="lg"
            class="w-full sm:w-auto font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300">
            <Link to="/">
              <HomeIcon class="mr-2 h-4 w-4" />
              {{ t('notFound.backHome') }}
            </Link>
          </Button>

          <Button variant="ghost" size="lg" class="w-full sm:w-auto" @click="router.history.back()">
            <ArrowLeftIcon class="mr-2 h-4 w-4" />
            {{ t('notFound.goBack') }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1) translateY(-50%);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.1) translateY(-50%);
  }
}
</style>
