<template>
  <transition name="slide-fade">
    <nav
      v-if="showNavbar"
      class="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6"
    >
      <!-- Logo -->
      <!-- <h1 class="text-xl font-bold text-gray-900">Refined</h1> -->

      <!-- Bouton central -->
      <button
        class="px-5 py-2 bg-gray-800 text-white text-semibold rounded-full hover:bg-gray-800 transition-all text-sm sm:text-base"
      >
        {{ t('explore.book') }}
      </button>
      <LangSwitcher />
    </nav>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LangSwitcher from '../LangSwitcher.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showNavbar = ref(false)

const handleScroll = () => {
  showNavbar.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Animation */
.slide-fade-enter-active {
  transition: all 0.25s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
.slide-fade-enter-from {
  transform: translateY(-80%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(-40%);
  opacity: 0;
}
</style>
