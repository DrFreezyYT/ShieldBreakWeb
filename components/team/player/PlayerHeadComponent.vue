<template>
    <div class="member-head">
        <img :src="imageUrl" :alt="name" class="member-avatar" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 64
  },
  height: {
    type: Number,
    default: 64
  }
});

const imageUrl = ref('/assets/player.png'); // Fallback-Bild

async function getPlayerHead() {
  try {
    imageUrl.value = `https://api.freezy.me/v1/head/getHead?name=${props.name}&width=${props.width}&height=${props.height}`;
  } catch (error) {
    console.error('Error fetching player head:', error);
  }
}

onMounted(() => {
  getPlayerHead();
});
</script>

<style scoped>
.member-head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 3px solid #4b4b4b8C;
  background-color: #49494980;
  border-radius: 12px;
}

.member-avatar {
  width: 64px;
  height: 64px;
  border-radius: 12px
}
</style>