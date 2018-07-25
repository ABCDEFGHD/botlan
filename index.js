/** Dependencies. */
const Discord = require("discord.js");
const Client  = new Discord.Client();

/** Constants. */
const PREFIX = "&";
const TOKEN  = process.env.TOKEN;

/** Emojis used to stylize the bot. */
const Emojis = {
	"SUCCESS": ":white_check_mark:",
	"FAILURE": ":x:",

	"MUSIC_PLAY": ":arrow_forward:",
	"MUSIC_PAUSE": ":pause:",
	"MUSIC_SKIP": ":track_next:",
	"MUSIC_STOP": ":stop_button:",

	"SETTINGS": ":gear:"
}

/** Some stats about the bot. */
const Stats = {
	"guilds": Client.guilds.size,
	"users": Client.users.size
};

/** Pointers. */
Voice = null;

/**
 * @event ready
 *  Emitted when the bot is connected.
 */
Client.on("ready", () => {
	console.log("[STATUS] Logged in !");
	Client.user.setActivity(`&help | ${Stats.guilds} serveurs | ${Stats.users} utilisateurs`, { type: 0 })
		.then(presence => console.log(`[INFOS] Activity set to ${presence.game ? presence.game.name : 'none'}`))
		.catch(console.error);
	Client.user.setStatus("online")
		.then(() => {
			console.log(`[INFOS] Status set to online.`);
		}).catch(console.error);
});

/**
 * @event message
 *  Emitted whenever a user sends a message.
 */
Client.on("message", Message => {
	const Content = Message.content;

	/** Make sure to only listen to commands. */
	if (Content.startsWith(PREFIX)) {
		if (!Message.guild || Message.author.username == Client.user.username) return;

		/** Decompose the command. */
		CommandParts = Content.substring(PREFIX.length).split(" ");
		CommandName = Commands[0];
		CommandArgs = CommandParts.shift() && CommandParts;

		switch(CommandName) {
			default:
				Message.channel.send("Commande invalide !");
				break;
		}
	}
});


/** Login when all events are binded. */
Client.login(TOKEN);
