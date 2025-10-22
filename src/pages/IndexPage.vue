<template>
  <div
    class="bg-gray-200 flex flex-col items-center justify-center text-center text-gray-800 font-sans bg-cover bg-center bg-no-repeat px-4 transition-all duration-500"
    :style="{ backgroundImage: `url('${bgImage}')` }"
  >
    <section class="bb-container">
      <!-- Titre -->
      <div class="py-16 md:py-28 px-4 sm:px-8 text-center" v-motion-slide-bottom>
        <h1
          class="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-snug flex flex-wrap justify-center items-center gap-x-2 gap-y-3"
        >
          <span class="inline-block">
            <img
              src="/img/logo.webp"
              alt="Refined logo"
              class="h-7 sm:h-8 md:h-10 object-contain inline-block align-middle"
            />
            {{ t('hero.tagline_part1') }}
          </span>

          <span class="inline-block">{{ t('hero.tagline_part2') }}</span>

          <span class="inline-block">{{ t('hero.book_call') }}</span>

          <img
            src="/img/cal.webp"
            alt="Cal logo"
            class="h-6 sm:h-7 md:h-8 object-contain inline-block align-middle transform rotate-[-3deg] transition-transform duration-300 hover:scale-105"
          />

          <span class="inline-block">{{ t('hero.or_pricing') }}</span>

          <img
            src="/img/pricing.webp"
            alt="Pricing tag"
            class="h-6 sm:h-7 md:h-8 object-contain inline-block align-middle transform rotate-[2deg] transition-transform duration-300 hover:scale-105"
          />.
        </h1>

        <h1
          class="text-2xl sm:text-3xl md:text-5xl mt-16 font-semibold tracking-tight text-gray-900 leading-snug flex flex-wrap justify-center items-center gap-x-2 gap-y-3"
        >
          {{ t('hero.subtitle') }}
        </h1>
      </div>

      <!-- Mind map -->
      <div class="relative flex items-center justify-center w-full min-h-[300px] p-4">
        <!-- SVG -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none">
          <!-- Lignes + points de départ -->
          <g>
            <circle cx="260" cy="100" r="4" class="start-point" />
            <path d="M260,100 C360,110 420,130 500,150" class="line" />
          </g>
          <g>
            <circle cx="260" cy="160" r="4" class="start-point" />
            <path d="M260,160 C360,155 420,150 500,150" class="line" />
          </g>
          <g>
            <circle cx="260" cy="220" r="4" class="start-point" />
            <path d="M260,220 C360,190 420,165 500,150" class="line" />
          </g>

          <!-- Point central -->
          <circle cx="500" cy="150" r="7" class="central-point" />
        </svg>

        <!-- Boîte centrale -->
        <div
          class="absolute -right-0 bg-white shadow-md rounded-lg px-5 py-3 font-mono text-lg text-gray-800 border border-gray-200"
        >
          Your next big thing
        </div>
        <!-- Boîtes latérales -->
        <div
          class="absolute left-28 top-[80px] bg-white rounded-lg shadow px-4 py-2 text-gray-800 border border-gray-200"
        >
          <p class="font-semibold">
            Web app <span class="text-gray-400 font-normal">Product</span>
          </p>
        </div>

        <div
          class="absolute left-[100px] top-[140px] bg-white rounded-lg shadow px-4 py-2 text-gray-800 border border-gray-200"
        >
          <p class="font-semibold">
            Landing <span class="text-gray-400 font-normal">Sales driver</span>
          </p>
        </div>

        <div
          class="absolute left-36 top-[200px] bg-white rounded-lg shadow px-4 py-2 text-gray-800 border border-gray-200"
        >
          <p class="font-semibold">Blog <span class="text-gray-400 font-normal">Traffic</span></p>
        </div>
      </div>
      <div>
        <how-page />
      </div>
      <div>
        <pricing-plans />
      </div>
      <div>
        <question-check />
      </div>
      <div>
        <last-one />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QuestionCheck from 'src/components/base/QuestionCheck.vue'
import PricingPlans from 'src/components/base/PricingPlans.vue'
import LastOne from 'src/components/base/LastOne.vue'
import HowPage from 'src/components/base/HowPage.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const backgrounds = ['/img/bgr.avif']
const bgImage = ref(backgrounds[Math.floor(Math.random() * backgrounds.length)])
</script>

<style scoped></style>
