<script setup>
useHead({
    link: [
        { rel: "stylesheet", href: "https://gfont.minipandi.net/fonts/jetbrainsmono/style.css" }
    ]
});
</script>

<template>
    <div class="app">
        <div class="header">
            <div class="left">
                <a href="/" target="_blank" id="logo"></a>
                <!--<img src="/icons/favicon.png" alt="sb" width="64" height="64" />-->
                <a class="text" href="/"><b>Shield-Break.net</b></a>
            </div>
            <div class="right">
                <button @click="navigateTo('/')"><b>HOME</b></button>
                <button @click="navigateTo('/team')"><b>TEAM</b></button>
                <button @click="navigateTo('https://discord.gg/example')" class="discord-button">
                    <img src="../public/icons/discord.svg" class="button-icon" />
                </button>
            </div>
        </div>
        <div class="content">
            <h1>This is a work in progress site for the Minecraft server Shield-Brek.net! The site is made and maintained by Freezy Studios!</h1>
        </div>
        <div class="footer">
            <p>&copy; <span id="current-year"></span> Shield-Break.net | Maintained by Freezy Studios</p>
        </div>
    </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
</script>

<style>
* {
    font-family: 'JetBrains Mono', monospace;
}

html, body {
    background-image: url("/assets/lobby.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

#logo {
    background-image: url("/icons/favicon.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 64px;
    height: 64px;
    margin-right: 10px;
}

/* Header as a flex container */
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 31px;
    padding: 10px;
    border: 3px solid #4b4b4b8C;
    border-radius: 32px;
    background-color: #49494980;
    filter: drop-shadow(10px 10px 11px #000000);
}

.header .text {
    text-decoration: none;
    color: white;
    font-size: large;
}

/* Left side for vertical alignment */
.left {
    display: flex;
    align-items: center;
}

/* Right side text alignment */
.right {
    display: flex;
    align-items: center;
}

/* Button styles */
.right button {
    background-color: #0A52A5;
    color: white;
    font-size: 16px;
    border: none;
    padding: 12px 24px;
    margin: 5px;
    border-radius: 32px;
    filter: drop-shadow(8px 8px 11px #000000);
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.right button:hover {
    background-color: #084488;
    transform: scale(1.05);
}

/* Discord button specific styles */
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

/* Content area */
.content {
    flex: 1;
    display: flex;
    margin: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
}

/* Footer */
.footer {
    width: calc(100% - 62px);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 15px;
    color: white;
}
</style>

<style>
/* Responsive design: Adjust layout for screens 768px wide or less */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: center;
        margin: 20px;
    }

    .left,
    .right {
        width: 100%;
        justify-content: center;
        margin-bottom: 10px;
    }

    .right button {
        font-size: 14px;
        padding: 8px 16px;
    }
}

/* Further adjustments for very small screens (e.g., mobile) */
@media (max-width: 480px) {
    .discord-button .button-icon {
        width: 24px !important;
        height: 24px !important;
    }
}
</style>
