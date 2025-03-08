<template>
    <div class="member-head">
        <img :src="imageUrl" alt="HEAD" class="member-avatar" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  uuid: {
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
    imageUrl.value = `https://api.freezy.me/v1/head/getHead?uuid=${props.uuid}&width=${props.width}&height=${props.height}`;
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
}

.member-avatar {
  width: 64px;
  height: 64px;
  border-radius: 6px
}
</style>