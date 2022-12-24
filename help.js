
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return`━━━❲ SYAH45-𝘽𝙊𝙏 ❳━━━
┏━━━━━━━━━━━━━
┣━( 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 )
┃▤ ID : @${sender.split('@')[0]}
┃▤ Nama : ${namenya}
┃▤ Premium : ${premnya}
┣━━━━━━━━━━━━━━
┣━( 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 )
┃▤ Library : Baileys-MD
┃▤ Time : ${jam} WIB
┃▤ Date : ${tanggal}
┃▤ Terdaftar : ${usernya}
┣━❲ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}addprem
┃▢ ${prefix}delprem
┣━❲ 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}sendbug 628xxx
┃▢ ${prefix}philips 628xxx
┃▢ ${prefix}philips2 628xxx
┃▢ ${prefix}philips3 628xxx
┃▢ ${prefix}santet @tag
┃▢ ${prefix}santet2 @tag
┃▢ ${prefix}santet3 @tag
┃▢ ${prefix}virtex 628xxx
┃▢ ${prefix}virtex2 628xxx
┃▢ ${prefix}virtex3 628xxx
┃▢ ${prefix}bug1 628xxx
┃▢ ${prefix}bug2 628xxx
┃▢ ${prefix}bug3 628xxx
┃▢ ${prefix}bug4 628xxx
┃▢ ${prefix}bug5 628xxx
┗━━━━━━━━━━━━`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: 081548907132
A/N: AnggaJB

*Payment Dana*
Number: 082180238576
A/N: angga gat

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Syahrul
 • *Umur:* 16 tahun
 • *Hoby:* Turu/tiktok
 • *Askot:* Palembang
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 085832261977
 • *Youtube:* Angga_Chenel
 • *Github:* ada
 `
}