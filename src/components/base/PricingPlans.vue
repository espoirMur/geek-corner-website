<template>
  <section class="w-full py-4 px-4">
    <div class="mx-auto text-center mb-10">
      <h2 class="text-2xl md:text-4xl font-bold text-gray-800">
        MVP starts at <span class="text-blue-gray-900">$3,999/m</span>.
      </h2>
    </div>
    <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <!-- v-motion sur chaque card -->
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
            ? 'bg-white shadow-md '
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
              <span v-html="item.icon" class="w-4 h-4 text-blue-600 mr-2"></span>
              {{ item.text }}
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
import { ref } from 'vue'
const activeIndex = ref(0)

const plans = [
  {
    title: 'Monthly',
    price: '$3,999/m',
    description: 'Flexible plan that fits most projects and covers any development needs.',
    features: [
      {
        text: 'Weekly updates',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`,
      },
      {
        text: '60 hours allocation',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3" /></svg>`,
      },
      {
        text: 'Unlimited requests',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h8m-8 4h8M5 6h14" /></svg>`,
      },
      {
        text: 'Post-launch support',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0 4h-1m0 0V9a1 1 0 011-1h3l3 3v5a1 1 0 01-1 1h-4z" /></svg>`,
      },
    ],
    button: 'Talk to Constantin',
    footer: 'Book a 30-min call with the founder to see what we can offer.',
  },
  {
    title: 'Single project',
    price: '$9,999+',
    description: 'If you have a one-time task, we’ll go with a custom quote.',
    features: [
      {
        text: 'Fixed deliverables',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7" /></svg>`,
      },
      {
        text: 'Fixed milestones',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6M9 8h6" /></svg>`,
      },
      {
        text: '1–2 months to complete',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3" /></svg>`,
      },
      {
        text: 'All in monthly',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16h16V4H4z" /></svg>`,
      },
    ],
    button: 'Discuss your project',
    footer: 'We’ll figure out your needs and estimate the project.',
  },
]
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}
</style>
