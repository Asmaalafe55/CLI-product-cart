import { reactive, computed } from 'vue'
import { messages, rtlLocales } from './messages'

const STORAGE_KEY = 'splendid-locale'

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), obj)
}

function applyDocumentDirection(locale) {
  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('lang', locale)
  document.documentElement.setAttribute('dir', dir)
}

export function createI18n() {
  const saved = localStorage.getItem(STORAGE_KEY)
  const state = reactive({
    locale: saved && messages[saved] ? saved : 'en'
  })

  applyDocumentDirection(state.locale)

  function t(path, vars = {}) {
    const table = messages[state.locale] || messages.en
    let text = getByPath(table, path)
    if (text == null) text = getByPath(messages.en, path)
    if (text == null) return path
    return String(text).replace(/\{(\w+)\}/g, (_, key) =>
      vars[key] != null ? String(vars[key]) : `{${key}}`
    )
  }

  function setLocale(locale) {
    if (!messages[locale]) return
    state.locale = locale
    localStorage.setItem(STORAGE_KEY, locale)
    applyDocumentDirection(locale)
  }

  const isRtl = computed(() => rtlLocales.includes(state.locale))

  function localize(field) {
    if (!field || typeof field === 'string') return field || ''
    return field[state.locale] || field.en || Object.values(field)[0] || ''
  }

  return {
    state,
    t,
    setLocale,
    isRtl,
    localize,
    locales: [
      { code: 'en', labelKey: 'lang.en' },
      { code: 'he', labelKey: 'lang.he' },
      { code: 'ar', labelKey: 'lang.ar' }
    ]
  }
}
