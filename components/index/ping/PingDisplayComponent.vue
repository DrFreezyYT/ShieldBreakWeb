<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    scale: {
        type: Number,
        default: 1
    },
    transparent: {
        type: Boolean,
        default: false
    }
});

const serverData = ref({
    favicon: 'data:image/png;base64,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',
    ip: 'shield-break.net',
    playerCount: '69/420',
    motdLine1: 'Made with ❤️ by',
    motdLine2: 'Freezy Studios'
});

const fetchServerData = async () => {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${serverData.value.ip}`);
        const data = await response.json();

        if (data.online) {
            const serverInfo = data;

            const motdLines = serverInfo.motd?.html || [];

            const [line1 = '', line2 = ''] = motdLines;

            serverData.value = {
                favicon: serverInfo.icon || '',
                ip: serverData.value.ip,
                playerCount: `${serverInfo.players?.online || 0}/${serverInfo.players?.max || 0}`,
                motdLine1: line1,
                motdLine2: line2
            };
        } else {
            console.error("Server is offline or unreachable.");
            serverData.value = {
                ...serverData.value,
                playerCount: "Offline"
            };
        }
    } catch (error) {
        console.error("Error fetching server data:", error);
        serverData.value = {
            ...serverData.value,
            playerCount: "Error"
        };
    }
};

onMounted(fetchServerData);

const containerStyle = computed(() => ({
    width: 'auto', // Make width dynamic
    maxWidth: '100%', // Ensure it doesn't overflow
    transform: `scale(${props.scale})`,
    transformOrigin: 'center' // Ensure scaling happens from the top-left corner
}));
</script>

<template>
    <div class="scale-wrapper">
        <div class="ping-container" :style="containerStyle">
            <div class="info-row">
                <img :src="serverData.favicon" alt="Server Favicon" class="favicon" />
                <span class="ip-text">{{ serverData.ip }} {{ serverData.playerCount }}</span>
            </div>
            <div class="motd">
                <p class="motd-line1" v-html="serverData.motdLine1"></p>
                <p class="motd-line2" v-html="serverData.motdLine2"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scale-wrapper {
    display: inline-block; /* Ensure the wrapper only takes up as much space as needed */
    transform-origin: top left; /* Ensure scaling happens from the top-left corner */
}

.ping-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 12px;
    color: white;
    width: fit-content; /* Only take up needed space */
    min-width: 300px; /* Minimum width to ensure readability */
    align-items: center;
}

.info-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.favicon {
    width: 30px;
    height: 30px;
}

.ip-text {
    font-size: 14px;
    white-space: nowrap; /* Prevent text from wrapping */
}

.motd {
    background: #00000063;
    padding: 8px;
    border-radius: 6px;
    width: fit-content;
    border: 0.125pc solid #4b4b4b8C; /* Remove !important */
}

.motd-line1,
.motd-line2 {
    font-size: 14px;
    text-shadow: 1px 1px 2px #000;
    margin: 2px 0;
    text-align: center;
    word-wrap: break-word; /* Allow long text to wrap */
    white-space: normal; /* Allow text to wrap */
}
</style>