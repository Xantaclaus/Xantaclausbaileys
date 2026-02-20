const chalk = require("chalk")
const os = require("os")

function showClutchBanner() {
    console.clear()

    console.log(`
 ██████╗██╗     ██╗   ██╗████████╗ ██████╗██╗  ██╗██╗  ██╗
██╔════╝██║     ██║   ██║╚══██╔══╝██╔════╝██║  ██║╚██╗██╔╝
██║     ██║     ██║   ██║   ██║   ██║     ███████║ ╚███╔╝ 
██║     ██║     ██║   ██║   ██║   ██║     ██╔══██║ ██╔██╗ 
╚██████╗███████╗╚██████╔╝   ██║   ╚██████╗██║  ██║██╔╝ ██╗
 ╚═════╝╚══════╝ ╚═════╝    ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝
`)

    console.log("🚀 CLUTCHX BAILEYS ENGINE")
    console.log("⚡ Multi Device • Stable • Fast")

    console.log("\nSystem Info:")
    console.log("OS:", os.platform())
    console.log("CPU:", os.cpus()[0].model)
    console.log("RAM:", (os.totalmem()/1024/1024/1024).toFixed(2) + " GB")
    console.log("Node:", process.version)

    console.log("\n✅ Ready\n")
}

module.exports = { showClutchBanner }
