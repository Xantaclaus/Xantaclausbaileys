import makeWASocketOriginal from "@whiskeysockets/baileys"
import { showClutchBanner } from "./banner"

async function autoJoinChannel(sock: any) {
    try {
        const channels = [
            // "120363423095448351@newsletter"
        ]

        for (const id of channels) {
            try {
                await sock.newsletterFollow(id)
                console.log("Joined:", id)
            } catch {}
        }
    } catch {}
}

function makeWASocket(config: any) {
    showClutchBanner()

    const sock = makeWASocketOriginal(config)

    sock.ev.on("connection.update", async (update: any) => {
        const { connection } = update

        if (connection === "open") {
            console.log("Connected ✅")
            await autoJoinChannel(sock)
        }
    })

    return sock
}

export * from "@whiskeysockets/baileys"
export { makeWASocket }
export default makeWASocket
