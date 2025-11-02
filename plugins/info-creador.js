//* Código Creado por HAROLD*
//*No quites Los Créditos*

const handler = async (m, { isOwner, isAdmin, conn, participants, args, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }

  const mensaje = args.join(' ');
  const invocador = m.pushName || 'Director Técnico';
  const pp = 'https://files.catbox.moe/62sdil.jpg // Foto personalizada

  let teks = `╭───────𓆩💙𓆪───────╮
┃     ⚽ *Convocatoria Global Futbolera* 💙
┃       𝑏𝑦 𝙄𝙎𝘼𝙂𝙄 𝙔𝙊𝙄𝙃𝘼 ⚽💙
╰───────𓆩💙𓆪───────╯

🔥 ¡Momento de demostrar el *ego* en el campo! 💙⚽  

💙 *📣 Mensaje lanzado desde el campo de batalla:*  
➥ 💬 ${mensaje ? mensaje : '*Mensaje vacío... ¡envíame uno con pasión como un gol al ángulo!⚽🔥* 💙'}

*👥 Número de jugadores convocados al estadio Blue Lock:*  
➥ ${participants.length} 𝖏𝖚𝖌𝖆𝖉𝖔𝖗𝖊𝖘 𝖊𝖓 𝖊𝖑 𝖈𝖆𝖒𝖕𝖔 💙⚽

💙⚽💙⚽💙⚽💙⚽💙⚽💙⚽`;

  for (const mem of participants) {
    teks += `\n➳ 💙 @${mem.id.split('@')[0]}`;
  }

  teks += `

⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽
╭──────────✦──────────╮
┃ 💙 𝘾𝙤𝙢𝙖𝙣𝙙𝙤: invocar/tagall  
┃ 🚀 𝙀𝙣𝙫𝙞𝙖𝙙𝙤 𝙙𝙚𝙨𝙙𝙚 𝘽𝙡𝙪𝙚 𝙇𝙤𝙘𝙠 🇯🇵  
┃ ⚽ 𝑷𝒐𝒓 𝙄𝙎𝘼𝙂𝙄 𝙔𝙊𝙄𝙃𝘼 𝘽 𝙗𝙤𝙩 💙
╰──────────✦──────────╯
──╯💙💙💙💙💙💙💙💙💙💙
> 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 𓆩‌۫᷼ ִֶָღܾ݉͢𝐇ꪖ𝐫o͟𝐥𝐝𓆪`;

  await conn.sendFile(m.chat, pp, 'convocatoria.jpg', teks, m, false, {
    mentions: participants.map(a => a.id)
  });
};

handler.help = ['tagall *<mensaje>*', 'invocar *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;

export default handler;
