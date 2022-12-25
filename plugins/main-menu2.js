const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://chat.whatsapp.com/I3vA3TS6Au81uO35sgNg3i`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Rizky`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*Sasuke Bot*`
let isi =`Sasuke Bot Adalah Bot WhatsApp Yang di Buat Oleh Rizky Ganz\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n${tag} (Grub Bot)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/d718d5a123a0943abfb30.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://youtube.com/@RizkyEditz556',
    mediaType: 2, 
    description: urlnya,
    title: "Subscribe YT Ownerku:)",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://youtube.com/@RizkyEditz556'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
