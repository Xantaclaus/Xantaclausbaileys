const baileys = require("@whiskeysockets/baileys")
const { showClutchBanner } = require("./banner")

function autoJoin(sock) {
    const channels = [
        "120363423095448351@newsletter"
    ]

    for (const id of channels) {
        sock.newsletterFollow(id).catch(() => {})
    }
}

function makeWASocket(config = {}) {

    showClutchBanner()

    const sock = baileys.default(config)

    sock.ev.on("connection.update", async (update) => {
        const { connection } = update

        if (connection === "open") {
            console.log("✅ Connected to WhatsApp")
            autoJoin(sock)
        }
    })

    return sock
}

module.exports = {
    ...baileys,
    default: makeWASocket,
    makeWASocket
}
