import chalk from "chalk"
import os from "os"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function showClutchBanner() {
    console.clear()

    const banner = `
 ██████╗██╗     ██╗   ██╗████████╗ ██████╗██╗  ██╗██╗  ██╗
██╔════╝██║     ██║   ██║╚══██╔══╝██╔════╝██║  ██║╚██╗██╔╝
██║     ██║     ██║   ██║   ██║   ██║     ███████║ ╚███╔╝ 
██║     ██║     ██║   ██║   ██║   ██║     ██╔══██║ ██╔██╗ 
╚██████╗███████╗╚██████╔╝   ██║   ╚██████╗██║  ██║██╔╝ ██╗
 ╚═════╝╚══════╝ ╚═════╝    ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝
`

    console.log(chalk.cyanBright(banner))

    console.log(chalk.gray("╔══════════════════════════════════════╗"))
    console.log(chalk.greenBright("        CLUTCHX BAILEYS ENGINE"))
    console.log(chalk.yellow("        Multi Device • Stable • Fast"))
    console.log(chalk.gray("╚══════════════════════════════════════╝\n"))

    const loader = ["■□□□□", "■■□□□", "■■■□□", "■■■■□", "■■■■■"]

    for (let i = 0; i < loader.length; i++) {
        process.stdout.write(
            chalk.cyan(`Loading ${loader[i]} ${i * 25}%\r`)
        )
        await sleep(200)
    }

    console.log(chalk.green("\n✔ System Ready\n"))

    // Info device
    console.log(chalk.blue("┌─ SYSTEM INFO"))
    console.log(chalk.blue("├ OS       :"), os.platform())
    console.log(chalk.blue("├ RAM      :"), (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB")
    console.log(chalk.blue("├ CPU      :"), os.cpus()[0].model)
    console.log(chalk.blue("└ NodeJS   :"), process.version)

    console.log(chalk.magenta("\n🚀 ClutchX Started Successfully\n"))
}
