<template>
  <div class="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
    <!-- Carte oblique à gauche -->
    <div class="relative w-full md:w-1/2 transform -skew-x-3">
      <div
        class="border rounded-lg border-dashed border-gray-400 p-4 md:p-6 font-mono transform skew-x-3 shadow-md"
      >
        <!-- Titre avec bordure et points -->
        <div class="flex items-center border-b border-dashed border-gray-300 pb-2 mb-4">
          <!-- Points colorés -->
          <div class="flex space-x-2 mr-4">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <!-- Titre -->
          <div class="items-center justify-center text-center">
            <h2 class="text-sm font-semibold text-gray-700">Présentation</h2>
          </div>
        </div>

        <!-- Contenu principal -->
        <div class="text-sm md:text-base leading-relaxed whitespace-pre-line">
          <p>
            Hello, I'm Constantin. I went from being a 9-5 developer to launching my own products.
            The first two were quite successful, generating both income and happy users. Amazing
            feeling. Seeing others having great ideas but can't bring them to life, motivated me to
            start Refined. You have an idea, we have coding skills. We build MVPs with just the
            right features for smooth performance and user love.
          </p>
        </div>
      </div>
    </div>

    <!-- Section droite -->
    <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
      <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Ready to kick-start your product?
      </h2>
      <a
        href="#"
        class="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Let’s talk
      </a>
      <footer class="mt-6 text-sm text-gray-500">
        Refined © 2023<br />
        Tools · Blog · Glossary
      </footer>
    </div>
  </div>
</template>
