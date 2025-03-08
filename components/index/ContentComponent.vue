<script setup>
import PingDisplayComponent from '@/components/index/ping/PingDisplayComponent.vue';

useHead({
    link: [
        { rel: "stylesheet", href: "https://gfont.minipandi.net/fonts/jetbrainsmono/style.css" }
    ]
});
</script>

<template>
    <div class="content">
        <div class="content-grid">
            <div class="grid-item-transparent">
                <p id="ptext-1">Shield-Break.net ist euer Minecraft Servernetzwerk.</p>
                <p id="ptext-1">Unsere Projekte sind z. B. <a href="/gamemodes#caveattack" style="text-decoration: underline; color: white;">CaveAttack</a> unsere variante von StoneAttack oder <a href="/gamemodes#modded" style="text-decoration: underline; color: white;">Modded</a> welches ein Technik Modpack ist mit großen Mods wie Mekanism und Create ist!</p>
            </div>
            <div class="grid-item-transparent">
                <PingDisplayComponent :scale="2.2" />
            </div>
        </div>
    </div>
</template>

<style>
#ptext-1 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 20px;
    color: white;
}

.content {
    flex: 1;
    display: flex;
    margin: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
}

.grid-item {
    background-color: #00000063;
    border: 4px solid #4b4b4b8C;
    border-radius: 12px;
    padding: 20px;
    filter: drop-shadow(10px 10px 11px #000000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.grid-item-transparent {
    padding: 20px;
    filter: drop-shadow(10px 10px 11px #000000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>