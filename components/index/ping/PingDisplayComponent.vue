<script setup>
import { ref, onMounted } from 'vue';

const serverData = ref({
    favicon: '',
    ip: 'shield-break.net',
    playerCount: 'Loading...',
    motdLine1: '',
    motdLine2: ''
});

const fetchServerData = async () => {
    try {
        const response = await fetch("https://api.minipandi.net/mcinfo?address=shield-break.net&bedrock=false");
        const data = await response.json();

        if (data.status === "ok" && data.data) {
            const serverInfo = data.data;

            let motdLines = ['', ''];
            let currentLine = 0;

            const parsePart = (part) => {
                if (!part.text) return '';

                let formattedText = `<span style="color: ${part.color || 'white'};">${part.text}</span>`;

                if (part.clickEvent && part.clickEvent.action === 'open_url') {
                    formattedText = `<a href="${part.clickEvent.value}" target="_blank" style="color: ${part.color || 'white'};">${part.text}</a>`;
                }
                if (part.hoverEvent && part.hoverEvent.action === 'show_text' && part.hoverEvent.value?.text) {
                    formattedText = `<span title="${part.hoverEvent.value.text}">${formattedText}</span>`;
                }
                return formattedText;
            };

            serverInfo.description.extra.forEach(item => {
                if (Array.isArray(item.extra)) {
                    item.extra.forEach(part => {
                        if (part.text === '\n') {
                            currentLine = 1;
                            return;
                        }
                        motdLines[currentLine] += parsePart(part) + ' ';
                    });
                } else {
                    if (item.text === '\n') {
                        currentLine = 1;
                        return;
                    }
                    motdLines[currentLine] += parsePart(item) + ' ';
                }
            });

            serverData.value = {
                favicon: serverInfo.favicon || '',
                ip: "SHIELD-BREAK.NET",
                playerCount: `${serverInfo.players?.online || 0}/${serverInfo.players?.max || 0}`,
                motdLine1: motdLines[0].trim().replace(/<a[^>]*>(.*?)<\/a>/g, '$1'),
                motdLine2: motdLines[1].trim().replace(/<a[^>]*>(.*?)<\/a>/g, '$1')
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
</script>

<template>
    <div class="ping-container">
        <div class="info-row">
            <img :src="serverData.favicon" alt="Server Favicon" class="favicon" />
            <span class="ip-text">{{ serverData.ip }} {{ serverData.playerCount }}</span>
        </div>
        <div class="motd">
            <p class="motd-line1" v-html="serverData.motdLine1"></p>
            <p class="motd-line2" v-html="serverData.motdLine2"></p>
        </div>
    </div>
</template>

<style scoped>
.ping-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 4px solid #4b4b4b8C;
    border-radius: 12px;
    background: #d9d9d92a;
    filter: drop-shadow(10px 10px 11px #000000);
    width: 250px;
    color: white;
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
}

.motd {
    background: #000000;
    padding: 8px;
    border-radius: 6px;
}

.motd-line1, .motd-line2 {
    font-size: 14px;
    text-shadow: 1px 1px 2px #000;
    margin: 2px 0;
    text-align: center;
}
</style>
