const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg) => {
  msg.channel.send("Yapımcım: Xjudl#0001 ")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komut"],
  kategori: "YETKİLİ KOMUTLARI",
  permLevel: 0
};
exports.help = {
  name: "yapımcım",
  description: "Yapımcımı Gösterir.",
  usage: "yapımcım"
};
