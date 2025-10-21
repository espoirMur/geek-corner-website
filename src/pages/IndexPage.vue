<template>
  <div
    class="min-h-screen bg-gray-200 flex flex-col items-center justify-center text-center text-gray-800 font-sans bg-cover bg-center bg-no-repeat px-4 transition-all duration-500"
    :style="{ backgroundImage: `url('${bgImage}')` }"
  >
    <section class="bb-container space-y-8 py-20 md:py-32">
      <!-- Titre -->
      <div v-motion-slide-bottom>
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 drop-shadow-lg">
          <span class="font-extrabold italic text-gray-900">Refined</span>
          turns your idea into the MVP.
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Fast, affordable, and stress-free.
        </p>
      </div>

      <!-- Boutons -->
      <div v-motion-pop class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <button
          class="px-8 py-3 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all shadow-md"
        >
          Book a call
        </button>
        <button
          class="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-full text-lg font-medium hover:bg-gray-50 transition-all shadow-sm"
        >
          See pricing – $3,999
        </button>
      </div>

      <p v-motion-fade class="mt-6 text-lg md:text-xl text-gray-800 font-medium drop-shadow-sm">
        We’ll build you a complete solution to kick-start your product.
      </p>

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
          class="absolute right-[80px] bg-white shadow-md rounded-lg px-5 py-3 font-mono text-lg text-gray-800 border border-gray-200"
        >
          Your next big thing
        </div>

        <!-- Boîtes latérales -->
        <div
          class="absolute left-[100px] top-[80px] bg-white rounded-lg shadow px-4 py-2 text-gray-800 border border-gray-200"
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
          class="absolute left-[100px] top-[200px] bg-white rounded-lg shadow px-4 py-2 text-gray-800 border border-gray-200"
        >
          <p class="font-semibold">Blog <span class="text-gray-400 font-normal">Traffic</span></p>
        </div>
      </div>
      <div>
        <pricing-plans />
      </div>
      <div>
        <question-check />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QuestionCheck from 'src/components/base/QuestionCheck.vue'
import PricingPlans from 'src/components/base/PricingPlans.vue'

const backgrounds = ['/img/bgr.avif']
const bgImage = ref(backgrounds[Math.floor(Math.random() * backgrounds.length)])
</script>

<style scoped>
.line {
  stroke: #94a3b8;
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
}

.start-point {
  fill: #64748b;
  stroke: white;
  stroke-width: 2;
}

.central-point {
  fill: #64748b;
  stroke: white;
  stroke-width: 3;
}

/* Mobile */
@media (max-width: 768px) {
  svg {
    display: none;
  }

  .absolute {
    position: static !important;
    margin-bottom: 0.75rem;
  }

  .bg-white {
    width: 100%;
    text-align: center;
  }
}
</style>
