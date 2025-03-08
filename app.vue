<template>
  <div class="app">
    <div class="bg">
      <HeaderComponent />
      <NuxtPage />
      <FooterComponent />
    </div>
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
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.bg {
  position: relative;
  min-height: 100vh;
}

.bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/lobby.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(3px);
  z-index: -1;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
