<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center text-center text-gray-800 font-sans bg-cover bg-center bg-no-repeat px-4 transition-all duration-500"
    :style="{ backgroundImage: `url('${bgImage}')` }"
  >
    <!-- Section principale -->
    <section class="max-w-3xl mx-auto space-y-8 py-20 md:py-32">
      <div v-motion-slide-bottom>
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 drop-shadow-lg">
          <span class="font-extrabold italic text-gray-900">Refined</span>
          turns your idea into the MVP.
        </h1>

        <p class="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Fast, affordable, and stress-free.
        </p>
      </div>

      <!-- Boutons centrés -->
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
      <div
        v-motion-slide-top
        class="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 mt-12"
      >
        <div class="flex flex-col space-y-4">
          <div class="bg-white shadow-xl rounded-xl px-4 py-3 text-gray-700 text-lg font-medium">
            Web app <span class="text-gray-400 text-sm font-normal">Product</span>
          </div>
          <div class="bg-white shadow-xl rounded-xl px-4 py-3 text-gray-700 text-lg font-medium">
            Landing <span class="text-gray-400 text-sm font-normal">Sales driver</span>
          </div>
          <div class="bg-white shadow-xl rounded-xl px-4 py-3 text-gray-700 text-lg font-medium">
            Blog <span class="text-gray-400 text-sm font-normal">Traffic</span>
          </div>
        </div>

        <svg
          class="hidden md:block w-40 h-40 absolute -z-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30,100 C60,60 140,60 170,100 C140,140 60,140 30,100 Z"
            fill="none"
            stroke="#CBD5E1"
            stroke-width="2"
          />
        </svg>

        <div class="bg-white shadow-xl rounded-xl px-6 py-4 text-gray-800 text-lg font-semibold">
          Your next big thing
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam recusandae
          magni fugit nesciunt, inventore nisi enim debitis! Saepe commodi dolores non nostrum
          deserunt totam, neque nam excepturi ex doloribus!
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ✅ Images testées et valides
const backgrounds = [
  '/img/bg.avif', // motif wax africain
]

const bgImage = ref(backgrounds[Math.floor(Math.random() * backgrounds.length)])
</script>
