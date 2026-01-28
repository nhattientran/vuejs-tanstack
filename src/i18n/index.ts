import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

export type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'vi'>({
  legacy: false, // Use Composition API mode
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
  },
})

export default i18n
