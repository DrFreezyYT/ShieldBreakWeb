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
            <div class="grid-item">
                <h1>This is a work in progress site for the Minecraft server Shield-Break.net! The site is made and
                    maintained by Freezy Studios!</h1>
            </div>
            <div class="grid-item">
                <PingDisplayComponent />
            </div>
            <div class="grid-item">
                <iframe src="https://map.massivecraft.com/" width="500" height="500"
                    allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
            <div class="grid-item">
                <h1>This is a work in progress site for the Minecraft server Shield-Break.net! The site is made and
                    maintained by Freezy Studios!</h1>
            </div>
        </div>
    </div>
</template>

<style>
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
    background-color: #49494980;
    border: 3px solid #4b4b4b8C;
    border-radius: 32px;
    padding: 20px;
    filter: drop-shadow(10px 10px 11px #000000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>