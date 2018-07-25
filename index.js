const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on("ready", () => {
  console.log("Logged in !");
});

Client.on("message", Message => {

});

Client.login(process.env.TOKEN);
