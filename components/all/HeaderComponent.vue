<template>
    <div class="header">
      <div class="left">
        <a href="/" target="_blank" id="logo"></a>
        <a class="text" href="/"><b>Shield-Break.net</b></a>
      </div>
      <div class="right">
        <button @click="navigateTo('/')"><b>HOME</b></button>
        <button @click="navigateTo('/team')"><b>TEAM</b></button>
        <button @click="navigateTo('https://discord.gg/vpvJdQmuRc')" class="discord-button">
          <img src="/icons/discord.svg" class="button-icon" />
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  function navigateTo(route) {
    // Externe Links in einem neuen Tab öffnen
    if (route.startsWith('http')) {
      window.open(route, '_blank');
    } else {
      router.push(route);
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 31px;
    padding: 10px;
    border: 3px solid #4b4b4b8C;
    border-radius: 32px;
    background-color: #49494980;
    filter: drop-shadow(10px 10px 11px #00000062);
  }
  .left {
    display: flex;
    align-items: center;
  }
  #logo {
    background-image: url("/icons/favicon.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 64px;
    height: 64px;
    margin-right: 10px;
  }
  .header .text {
    text-decoration: none;
    color: white;
    font-size: large;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right button {
    background-color: #0A52A5;
    color: white;
    font-size: 16px;
    border: none;
    padding: 12px 24px;
    margin: 5px;
    border-radius: 32px;
    filter: drop-shadow(8px 8px 11px #0000008f);
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  .right button:hover {
    background-color: #084488;
    transform: scale(1.05);
  }
  .discord-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 12px;
  }
  .discord-button .button-icon {
    width: 32px;
    height: 30px;
    filter: invert(1);
  }
  </style>
  