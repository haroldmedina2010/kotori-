import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

// ===

global.botNumber = "" //Ejemplo: 573171514640

//===

global.owner = ["573171514640", "17853291589"]

global.suittag = ["573171514640"] 
global.prems = [17853291589]

//===

global.libreria = "Baileys Multi Device"
global.vs = "1.0.0"
global.nameqr = "💙🦅⚽ 𝗜𝘀𝗮𝗴𝗶𝗶 🥇🔥
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//===

global.botname = "💙🦅⚽ 𝗜𝘀𝗮𝗴𝗶𝗶 🥇🔥"
global.textbot = "🦅⚽ 𝗜𝘀𝗮𝗴𝗶𝗶 🥇🔥, shoyo With by 𝕳𝖆𝖗𝖔𝖑𝖉🥷🏽"
global.dev = "© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝕳𝖆𝖗𝖔𝖑𝖉🥷🏽"
global.author = "© mᥲძᥱ ᥕі𝗍һ ᑲᥡ 𝕳𝖆𝖗𝖔𝖑𝖉🥷🏽"
global.etiqueta = "💙🦅⚽ 𝗜𝘀𝗮𝗴𝗶𝗶 🥇🔥"
global.currency = "harcoins"
global.banner = "https://files.catbox.moe/jfoupz.jpg"
global.icono = "https://files.catbox.moe/1erdg4.jpg"
global.catalogo = "https://files.catbox.moe/05i7ff.jpg"

//===

global.group = "https://chat.whatsapp.com/E6SGsFtxXXz3VKWZtZFc4J?mode=wwt"
global.community = "https://chat.whatsapp.com/DxyZxnS23UI4pfGxRCWRfM?mode=wwt"
global.chnel= "https://whatsapp.com/channel/0029VbBG4i2GE56rSgXsqw2W"
global.github = "https://github.com/haroldmedina2010/kotori-.git"
global.gmail = "aroldmediana2010@gmail.com"
global.ch = {
ch1: ""
}

//===

global.APIs = {
xyro: { url: "https://api.xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//===

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
