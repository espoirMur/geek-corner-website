<template>
  <div class="relative inline-block text-left">
    <!-- Bouton déclencheur -->
    <div
      @click="toggleDropdown"
      class="flex items-center gap-2 px-2 py-1 md:px-2 md:py-2 bg-gray40 rounded-full text-black cursor-pointer hover:bg-sky-800 transition"
    >
      <slot name="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 md:w-5 md:h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </slot>

      <img :src="languages[locale]?.flag" alt="flag" class="w-4 h-4 md:w-5 md:h-5 rounded-full" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-3 h-3 md:w-4 md:h-4 transform transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
      </svg>
    </div>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-40 bg-blue backdrop-blur-md rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
    >
      <ul class="py-1">
        <li
          v-for="(lang, key) in languages"
          :key="key"
          @click="changeLanguage(key)"
          class="flex items-center px-4 py-2 cursor-pointer hover:bg-white/30 hover:text-sky-900 transition"
        >
          <img :src="lang.flag" alt="flag" class="w-5 h-5 mr-2 rounded-full" />
          <span class="transition-colors text-white duration-200 font-sora">{{ lang.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { LocalStorage } from 'quasar'
import { defineProps } from 'vue'

// Props optionnelles pour surcharge
const props = defineProps({
  availableLanguages: {
    type: Object,
    default: () => ({
      'en-US': { name: 'English', flag: 'https://flagcdn.com/w2560/gb.png' },
      'fr-FR': { name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    }),
  },
})

const { locale } = useI18n()
const isOpen = ref(false)
const languages = props.availableLanguages

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (lang) => {
  locale.value = lang
  isOpen.value = false
  LocalStorage.set('selectedLanguage', lang)
}

onMounted(() => {
  const savedLang = LocalStorage.getItem('selectedLanguage')
  if (savedLang && languages[savedLang]) {
    locale.value = savedLang
  }
})
</script>
