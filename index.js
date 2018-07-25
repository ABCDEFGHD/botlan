const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("lb!");
var randum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `Manger du bambou | ${prefix}help | ${bot.guilds.size} serveurs`, type: 0}})
    bot.user.setStatus("dnd");
    console.log("Bot Prêt !");
});

bot.login(process.env.TOKEN)
