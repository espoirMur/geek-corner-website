<template>
  <section class="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16">
    <!-- Info intégration -->
    <div
      class="border-2 font-semibold border-dashed border-gray-300 rounded-xl px-4 py-3 inline-block bg-gray-50 text-gray-600"
    >
      <span class="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>

        {{ t('how.integration') }}
      </span>
    </div>

    <!-- Section "Comment" -->
    <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 mt-10">
      {{ t('how.title') }}
    </h2>

    <ol class="space-y-6 text-lg leading-relaxed text-gray-700">
      <li class="flex items-start gap-4">
        <p>1. {{ t('how.step1') }}</p>
      </li>
      <li class="flex items-start gap-4">
        <p>2. {{ t('how.step2') }}</p>
      </li>
      <li class="flex items-start gap-4">
        <p>3. {{ t('how.step3') }}</p>
      </li>
    </ol>

    <!-- Titre projets récents -->
    <div class="mx-auto text-center mb-10 mt-16">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-800">
        {{ t('how.projects_title') }}
      </h2>
    </div>

    <!-- Image + bouton -->
    <div class="relative group flex justify-center">
      <img
        src="/img/hello.webp"
        alt="Work Preview"
        class="rounded-2xl shadow-lg w-[260px] sm:w-[320px] transition-transform duration-300 group-hover:scale-[1.02]"
      />

      <button
        @click="openModal"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span
          class="bg-gray-800 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-900 transition text-sm"
        >
          {{ t('how.watch_button') }}
        </span>
      </button>
    </div>

    <!-- Modale -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
      >
        <div class="bg-white rounded-2xl p-6 max-w-md w-[90%] shadow-xl relative">
          <button
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ t('how.modal_title') }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ t('how.modal_description') }}
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showModal = ref(false)

const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
