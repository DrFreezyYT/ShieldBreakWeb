<template>
  <div class="app">
    <HeaderComponent />
    <NuxtPage />
    <FooterComponent />
  </div>
</template>

<script setup>
import { useHead } from '#app';
import HeaderComponent from '@/components/all/HeaderComponent.vue';
import FooterComponent from '@/components/all/FooterComponent.vue';

useHead({
  link: [
      { rel: 'stylesheet', href: 'https://gfont.minipandi.net/fonts/jetbrainsmono/style.css' }
  ]
});
</script>

<style>
* {
  font-family: 'JetBrains Mono', monospace;
}

html,
body {
  background-image: url("/assets/lobby.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>