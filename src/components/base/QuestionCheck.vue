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
import { ref } from 'vue'

const openIndex = ref(null)

const items = ref([
  {
    title: 'Can my idea be implemented as an MVP?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'What type of products do you make?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'How long will it take?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'Can you implement my design?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: "I don't have a design. What to do?",
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: "What if I don't need a landing page or blog?",
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'Can I request changes once you start working?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'What do I need to provide to you?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'How do you hand it off to me?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'Can you help me with further development?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'What tech stack do you use?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
  {
    title: 'Do you offer refunds?',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste laudantium deleniti accusantium voluptas nam, in eaque, error nemo reiciendis beatae. Distinctio cumque iste delectus magni, ut optio at atque!',
  },
])

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
/* Optionnel : transition plus fluide */
button:focus {
  outline: none;
}
</style>
