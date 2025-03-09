<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

useHead({
  link: [
    { rel: "stylesheet", href: "https://gfont.minipandi.net/fonts/jetbrainsmono/style.css" }
  ]
});

const gridItems = ref([
  {
    id: 'minigames',
    headline: 'MiniGames',
    text: 'MiniGames ist einer unserer Hauptspielmodi. Hier kannst du mit deinen Freunden verschiedene Minispiele spielen. Er ist immer geöffnet und du kannst jederzeit beitreten.',
    images: [
      '/assets/minigames/minigame-iceboat_race.png',
    ]
  },
  {
    id: 'caveattack',
    headline: 'CaveAttack',
    text: 'CaveAttack ist unsere StoneAttack-Variante mit eigenen Villagern und anderen coolen Features. Es findet einmal im Jahr in den Sommerferien statt und ist ein großes Event. Hier kannst du dich hoch grinden und gegen andere Spieler antreten um die meisten Blöcke abzubauen und Preise einzusammeln!',

    images: [
      '/assets/caveattack/lobby-top.png',
      '/assets/caveattack/lobby-down.png',
    ]
  },
  {
    id: 'modded',
    headline: 'Modded',
    text: 'Unser Serverteam spielt gerne modded Minecraft mit technischen Modpacks, welche Mods wie Mekanism, AE2 und Create enthalten. Das Modpack ist auf <a href="https://www.curseforge.com/minecraft/modpacks/shieldbreak-modpack" target="_blank" style="text-decoration: underline; color: #ffffff;">CurseForge</a> und unserem <a href="https://discord.com/invite/vpvJdQmuRc" target="_blank" style="text-decoration: underline; color: #ffffff;">Discord</a> erhältlich!',

    images: [
      '/assets/modded/modded-best.png',
        '/assets/modded/modded-base.png',
        '/assets/modded/modded-ico.png',
    ]
  }
]);

// Variable für die automatische Rotation
const currentImageIndex = ref({});

// Intervall-Variable deklarieren
let interval;

// Initialisiere für jedes Grid-Item den Startindex und starte die automatische Rotation
onMounted(() => {
  gridItems.value.forEach(item => {
    currentImageIndex.value[item.id] = 0;
  });

  interval = setInterval(() => {
    gridItems.value.forEach(item => {
      if (item.images.length > 1) {
        const nextIndex = (currentImageIndex.value[item.id] + 1) % item.images.length;
        currentImageIndex.value[item.id] = nextIndex;
      }
    });
  }, 5000);
});

// Intervall beim Verlassen der Komponente wieder löschen
onUnmounted(() => {
  clearInterval(interval);
});

// Funktion zum manuellen Auswählen eines Bildes über die Indikatoren
const selectImage = (itemId, index) => {
  currentImageIndex.value[itemId] = index;
};
</script>

<template>
  <div class="content">
    <div class="content-grid">
      <template v-for="(item, index) in gridItems" :key="item.id">
        <template v-if="index % 2 === 0">
          <!-- Gerade Indizes: Text zuerst -->
          <div :id="item.id" class="grid-item-transparent text-first">
            <NuxtLink :to="`/gamemodes#${item.id}`" style="text-decoration: none; color: #ffffff;"><h2>{{ item.headline }}</h2></NuxtLink>
            <p id="ptext-1" v-html="item.text"></p>
        </div>
          <div class="grid-item-transparent">
            <div class="image-carousel">
              <div class="image-container">
                <img
                  v-for="(image, imgIndex) in item.images"
                  :key="imgIndex"
                  :src="image"
                  alt="Grid Image"
                  class="grid-image"
                  :class="{ active: currentImageIndex[item.id] === imgIndex }"
                />
              </div>
              <!-- Bildindikatoren -->
              <div v-if="item.images.length > 1" class="carousel-indicators">
                <span
                  v-for="(imgIndex) in item.images"
                  :key="imgIndex"
                  :class="['indicator', { active: currentImageIndex[item.id] === imgIndex }]"
                  @click="selectImage(item.id, imgIndex)"
                ></span>
              </div>
            </div>
          </div>
          <div v-if="index < gridItems.length - 2" class="separator"></div>
        </template>
        <template v-else>
          <!-- Ungerade Indizes: Bild zuerst -->
          <div class="grid-item-transparent">
            <div class="image-carousel">
              <div class="image-container">
                <img
                  v-for="(image, imgIndex) in item.images"
                  :key="imgIndex"
                  :src="image"
                  alt="Grid Image"
                  class="grid-image"
                  :class="{ active: currentImageIndex[item.id] === imgIndex }"
                />
              </div>
              <!-- Bildindikatoren -->
              <div v-if="item.images.length > 1" class="carousel-indicators">
                <span
                  v-for="(imgIndex) in item.images"
                  :key="imgIndex"
                  :class="['indicator', { active: currentImageIndex[item.id] === imgIndex }]"
                  @click="selectImage(item.id, imgIndex)"
                ></span>
              </div>
            </div>
          </div>
          <div :id="item.id" class="grid-item-transparent image-first">
            <NuxtLink :to="`/gamemodes#${item.id}`" style="text-decoration: none; color: #ffffff;"><h2>{{ item.headline }}</h2></NuxtLink>
            <p id="ptext-1" v-html="item.text"></p>
        </div>
          <div v-if="index < gridItems.length - 1" class="separator"></div>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.separator {
  grid-column: 1 / -1;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 20px 0;
}

.image-carousel {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  overflow: hidden;
}

.grid-item-transparent {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Neuerungen: Bilder werden absolut übereinander gestapelt */
.image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%; /* Verhältnis 1:1, kann angepasst werden */
}

.grid-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.grid-image.active {
  opacity: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  z-index: 1;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: white;
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
