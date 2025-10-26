import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

// ===

global.botNumber = "" //Ejemplo: 573218138672

//===

global.owner = ["5492281329115", "573235915041"]

global.suittag = ["573196588149"] 
global.prems = []

//===

global.libreria = "Baileys Multi Device"
global.vs = "1.0.0"
global.nameqr = "💜̶۫̄͟㉿𓏲𝐊̸͕᥆𝗍͡᥆r̤і̷𓍲̈͜𝗨̴ᥣ̥𝗍̈rᥲ̄𓊓̵̬𝐁o҉t̸⋆͙̈么͟͞──"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//===

global.botname = "Kotori Itsuka"
global.textbot = "Kotori, Maki With by ⁱᵃᵐYoel Xzsy"
global.dev = "© ⍴᥆ᥕᥱrᥱძ ᑲᥡ ⁱᵃᵐYoel Xzsy"
global.author = "© mᥲძᥱ ᥕі𝗍һ ᑲᥡ ⁱᵃᵐYoel Xzsy"
global.etiqueta = "💜̶۫̄͟㉿𓏲𝐊̸͕᥆𝗍͡᥆r̤і̷𓍲̈͜𝗨̴ᥣ̥𝗍̈rᥲ̄𓊓̵̬𝐁o҉t̸⋆͙̈么͟͞──"
global.currency = "KotoriCoins"
global.banner = "https://kirito.my/media/images/10602321_k.jpg"
global.icono = "https://kirito.my/media/images/30634163_k.jpg"
global.catalogo = "https://kirito.my/media/images/79456519_k.jpg"

//===

global.group = "https://whatsapp.com/channel/0029Vb84Sin6xCSHfIjL7R1N"
global.community = "https://whatsapp.com/channel/0029Vb84Sin6xCSHfIjL7R1N"
global.channel = "https://whatsapp.com/channel/0029Vb84Sin6xCSHfIjL7R1N"
global.github = "https://whatsapp.com/channel/0029Vb84Sin6xCSHfIjL7R1N"
global.gmail = "https://whatsapp.com/channel/0029Vb84Sin6xCSHfIjL7R1N"
global.ch = {
ch1: "120363422299248780@newsletter"
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
