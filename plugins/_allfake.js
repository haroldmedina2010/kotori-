import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) { 
global.canalIdM = ["120363420231014623@newsletter", "120363420231014623@newsletter"]
global.canalNombreM = ["💜̶۫̄͟㉿𓏲𝐊̸͕᥆𝗍͡᥆r̤і̷𓍲̈͜𝗨̴ᥣ̥𝗍̈rᥲ̄𓊓̵̬𝐂h҉𝐚𝐧𝐧ꫀ𝐥么͟͞──", "💜̶۫̄͟㉿𓏲𝐊̸͕᥆𝗍͡᥆r̤і̷𓍲̈͜𝗨̴ᥣ̥𝗍̈rᥲ̄𓊓̵̬𝐂h҉𝐚𝐧𝐧ꫀ𝐥么͟͞──"]
global.channelRD = await getRandomChannel()

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var canal = 'https://whatsapp.com/channel/0029VbBG4i2GE56rSgXsqw2W'  
var comunidad= 'https://chat.whatsapp.com/DxyZxnS23UI4pfGxRCWRfM?mode=wwt'
var git = 'https://whatsapp.com/channel/0029VbBG4i2GE56rSgXsqw2W'
var github = 'https://whatsapp.com/channel/0029VbBG4i2GE56rSgXsqw2W' 
var correo = 'https://whatsapp.com/channel/0029VbBG4i2GE56rSgXsqw2W'
global.redes = [canal, comunidad, git, github, correo].getRandom()

global.nombre = m.pushName || 'Anónimo'
global.packsticker = `°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\nᰔᩚ Usuario: ${nombre}\n❀ Bot: ${botname}\n✦ Fecha: ${fecha}\nⴵ Hora: ${moment.tz('America/Caracas').format('HH:mm:ss')}`
global.packsticker2 = `\n°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n\n${dev}`
  
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: botname, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnail: await (await fetch(icono)).buffer(), sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, mentionedJid: null }}
}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}
