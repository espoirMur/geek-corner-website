<template>
  <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 md:p-12">
    <!-- CARD -->
    <div
      class="bg-white border-2 border-dashed border-gray-300 rounded-xl shadow-sm p-5 w-full max-w-xs md:max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
    >
      <!-- Header -->
      <div class="flex items-center space-x-2 mb-3">
        <span class="w-3 h-3 bg-red-400 rounded-full"></span>
        <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span class="w-3 h-3 bg-green-400 rounded-full"></span>
        <h3 class="text-gray-500 font-mono ml-2 text-sm">about_the_founder.txt</h3>
      </div>

      <!-- Divider -->
      <div class="border-b border-gray-200 mb-3"></div>

      <!-- Text area -->
      <div class="flex items-start">
        <!-- Numéros de lignes -->
        <div
          class="text-gray-400 font-mono text-xs md:text-sm text-right pr-3 select-none leading-[1.6]"
        >
          <div v-for="n in 14" :key="n">{{ n }}</div>
        </div>

        <!-- Texte -->
        <div class="flex-1">
          <p class="text-gray-700 font-mono text-xs md:text-sm leading-[1.6]">
            Hello, I’m Constantin. I went from being a 9-5 developer to launching my own products.
            The first two were quite successful, generating both income and happy users. Amazing
            feeling. Seeing others having great ideas but can’t bring them to life, motivated me to
            start Refined. You have an idea, we have coding skills. We build MVPs with just the
            right features for smooth performance and user love.
          </p>
        </div>
      </div>
    </div>

    <!-- RIGHT TEXT -->
    <div class="flex flex-col justify-center text-center md:text-left max-w-sm md:max-w-md mx-auto">
      <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug md:leading-tight">
        Ready to kick-start your product?
      </h2>
      <a href="#contact" class="block mt-2 text-blue-600 font-medium underline hover:text-blue-800">
        Let’s talk.
      </a>

      <p class="text-gray-500 text-sm mt-8">Refined © 2025.</p>
      <div class="text-gray-400 text-sm space-x-4 mt-2">
        <a href="#" class="hover:text-gray-600">Tools</a>
        <a href="#" class="hover:text-gray-600">Blog</a>
        <a href="#" class="hover:text-gray-600">Glossary</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>
