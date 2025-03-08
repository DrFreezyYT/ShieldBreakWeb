<template>
  <div class="footer">
    <p>&copy; {{ currentYear }} Shield-Break.net | Maintained with ❤️ by Freezy Studios | Made with Nuxt.js</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 20px;
  color: white;
  background-color: #49494980;
  border: 3px solid #4b4b4b8C;
  border-radius: 32px;
  filter: drop-shadow(10px 10px 11px #000000);
  margin: 30px;
}
</style>