const serverData = {
    favicon: '',
    ip: 'shield-break.net',
    playerCount: 'Loading...',
    motdLine1: '',
    motdLine2: ''
};

const fetchServerData = async () => {
    try {
        const response = await fetch("https://api.minipandi.net/mcinfo?address=shield-break.net&bedrock=false");
        const data = await response.json();

        if (data.status === "ok" && data.data) {
            const serverInfo = data.data;
            
            let motdLines = ['', ''];
            if (Array.isArray(serverInfo.description?.extra)) {
                const motdLine1Parts = [];
                const motdLine2Parts = [];
                let isSecondLine = false;

                serverInfo.description.extra.forEach(item => {
                    if (Array.isArray(item.extra)) {
                        item.extra.forEach(part => {
                            if (!part.text) return;
                            if (part.text === '\n' || part.text.trim() === '') {
                                isSecondLine = true;
                                return;
                            }

                            let formattedText = part.text;
                            
                            if (part.clickEvent && part.clickEvent.action === 'open_url') {
                                formattedText = `<a href='${part.clickEvent.value}' target='_blank'>${part.text}</a>`;
                            }
                            if (part.hoverEvent && part.hoverEvent.action === 'show_text' && part.hoverEvent.value?.text) {
                                formattedText = `<span title='${part.hoverEvent.value.text}'>${formattedText}</span>`;
                            }
                            
                            if (isSecondLine) {
                                motdLine2Parts.push(formattedText);
                            } else {
                                motdLine1Parts.push(formattedText);
                            }
                        });
                    }
                });
                
                motdLines = [motdLine1Parts.join(' '), motdLine2Parts.join(' ')];
            }
            
            serverData.value = {
                favicon: serverInfo.favicon || '',
                ip: "SHIELD-BREAK.NET",
                playerCount: `${serverInfo.players?.online || 0}/${serverInfo.players?.max || 0}`,
                motdLine1: motdLines[0],
                motdLine2: motdLines[1]
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

await fetchServerData();

console.log(serverData.value);