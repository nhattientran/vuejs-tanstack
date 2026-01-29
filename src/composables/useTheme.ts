import { watchEffect } from 'vue'
import { useStorage } from '@vueuse/core'

export function useTheme() {
  const theme = useStorage<'light' | 'dark'>('theme', 'light')

  watchEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme.value)
  })

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme
  }
}
