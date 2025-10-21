<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <NavBar />
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component" v-if="Component" />
          </transition>
        </router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import NavBar from 'src/components/NavBar/IndexPage.vue'
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
