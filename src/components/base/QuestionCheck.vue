<template>
  <div>
    <div class="text-center mt-4 mb-8">
      <h3 class="text-4xl font-bold text-gray-800">
        Questions? <span class="text-gray-600 font-normal">Check these.</span>
      </h3>
    </div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bg-white w-2/3 shadow-sm rounded-xl overflow-hidden border border-gray-200 mb-3 hover:shadow-md transition-all duration-300"
    >
      <!-- HEADER -->
      <button
        @click="toggle(index)"
        class="w-full flex justify-start items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 transform transition-transform duration-300"
            :class="{
              'rotate-45 text-gray-600': openIndex === index,
              'text-gray-400': openIndex !== index,
            }"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span class="font-semibold text-gray-800 text-base">{{ item.title }}</span>
        </div>
      </button>

      <!-- CONTENU -->
      <div
        v-if="openIndex === index"
        v-motion
        :initial="{ opacity: 0, y: -10 }"
        :enter="{ opacity: 1, y: 0 }"
        :leave="{ opacity: 0, y: -10 }"
        class="px-6 pb-5 bg-gray-50 border-t border-gray-100"
      >
        <!-- Si c’est du texte -->
        <p
          v-if="typeof item.content === 'string'"
          class="text-gray-600 leading-relaxed text-sm mt-2"
        >
          {{ item.content }}
        </p>

        <!-- Si c’est une liste -->
        <ul v-else class="mt-2 list-disc list-inside space-y-2 text-gray-700 text-sm">
          <li v-for="(point, i) in item.content" :key="i" class="pl-2">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const openIndex = ref(null)
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const items = computed(() => [
  {
    title: t('faq.q1.title'),
    content: t('faq.q1.content'),
  },
  {
    title: t('faq.q2.title'),
    content: t('faq.q2.content'),
  },
  {
    title: t('faq.q3.title'),
    content: t('faq.q3.content'),
  },
  {
    title: t('faq.q4.title'),
    content: t('faq.q4.content'),
  },
  {
    title: t('faq.q5.title'),
    content: t('faq.q5.content'),
  },
  {
    title: t('faq.q6.title'),
    content: t('faq.q6.content'),
  },
  {
    title: t('faq.q7.title'),
    content: t('faq.q7.content'),
  },
  {
    title: t('faq.q8.title'),
    content: t('faq.q8.content'),
  },
  {
    title: t('faq.q9.title'),
    content: t('faq.q9.content'),
  },
  {
    title: t('faq.q10.title'),
    content: t('faq.q10.content'),
  },
  {
    title: t('faq.q11.title'),
    content: t('faq.q11.content'),
  },
  {
    title: t('faq.q12.title'),
    content: t('faq.q12.content'),
  },
])

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
