const Discord = require("discord.js");
const Client = new Discord.Client();

const Ytdl = require("ytdl-core");
const PREFIX = '=';

Client.on("ready", () => {
  console.log("Logged in !");
});

Client.on("message", Message => {
  const Content = Message.content;

  if (Message.guild && Content.startsWith(PREFIX)) {
    console.log(content);
  }
});

Client.login(process.env.TOKEN);
