<template>
  <section class="w-full py-4 px-4">
    <div class="mx-auto text-center mb-10">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-800">
        MVP starts at <span class="text-blue-gray-900">$3,999/m</span>.
      </h2>
    </div>
    <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40, scale: 0.95 }"
        :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: index * 0.2 } }"
        :hover="{ scale: 1.03, boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }"
        @mouseenter="activeIndex = index"
        class="p-6 rounded-2xl transition-all duration-300 cursor-pointer"
        :class="[
          activeIndex === index
            ? 'bg-white shadow-md'
            : 'border-2 border-dashed border-gray-300 bg-transparent',
        ]"
      >
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ plan.title }}</h3>
          <p class="text-gray-600 mb-4">{{ plan.price }}</p>
          <p class="text-sm text-gray-500 mb-5">{{ plan.description }}</p>

          <ul class="space-y-3">
            <li
              v-for="(item, i) in plan.features"
              :key="i"
              class="flex items-center text-gray-700 text-sm"
            >
              <i :class="[item.icon, 'text-blue-600 mr-3 text-base']"></i>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-6">
          <button
            v-motion
            :hover="
              activeIndex === index ? { scale: 1.05 } : { scale: 1.03, backgroundColor: '#f3f4f6' }
            "
            class="w-full font-medium py-2.5 rounded-lg transition"
            :class="[
              activeIndex === index
                ? 'bg-gray-800 text-white hover:bg-gray-900'
                : 'border border-gray-300 text-gray-700 bg-white',
            ]"
          >
            {{ plan.button }}
          </button>
          <p class="text-xs text-gray-500 mt-2">{{ plan.footer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeIndex = ref(0)
const plans = computed(() => [
  {
    title: t('plans.monthly.title'),
    price: t('plans.monthly.price'),
    description: t('plans.monthly.description'),
    features: [
      { text: t('plans.monthly.features.weekly'), icon: 'fa-solid fa-check-circle' },
      { text: t('plans.monthly.features.hours'), icon: 'fa-solid fa-clock' },
      { text: t('plans.monthly.features.unlimited'), icon: 'fa-solid fa-infinity' },
      { text: t('plans.monthly.features.support'), icon: 'fa-solid fa-headset' },
    ],
    button: t('plans.monthly.button'),
    footer: t('plans.monthly.footer'),
  },
  {
    title: t('plans.single.title'),
    price: t('plans.single.price'),
    description: t('plans.single.description'),
    features: [
      { text: t('plans.single.features.deliverables'), icon: 'fa-solid fa-box' },
      { text: t('plans.single.features.milestones'), icon: 'fa-solid fa-flag-checkered' },
      { text: t('plans.single.features.duration'), icon: 'fa-solid fa-hourglass-half' },
      { text: t('plans.single.features.monthly'), icon: 'fa-solid fa-calendar-check' },
    ],
    button: t('plans.single.button'),
    footer: t('plans.single.footer'),
  },
])
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}
</style>
