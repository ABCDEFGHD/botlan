const Discord = require('discord.js');
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
const shorten = require('isgd');
const ms = require('parse-ms');
//const db = require('quick-db')

var bot = new Discord.Client();
var prefix = ("lb!");
var randum = 0;


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `Une lan | ${prefix}help`, type: 0}})
    bot.user.setStatus("dnd");
    console.log("Bot Prêt !");
});

bot.login(process.env.TOKEN)
