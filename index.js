/** Dependencies. */
const Discord = require("discord.js");
const Client  = new Discord.Client();

const Ytdl = require("ytdl-core");

/** Constants. */
const PREFIX = "&";
const TOKEN  = process.env.TOKEN;

/** Emojis used to stylize the bot. */
const Emojis = {
	"SUCCESS": ":white_check_mark:",
	"FAILURE": ":x:",
	"WARNING": ":warning:",

	"MUSIC_BACKWARD": ":rewind:",
	"MUSIC_FORWARD": ":fast_forward:",
	"MUSIC_LOOP": ":repeat:",
	"MUSIC_LOOP_ONCE": ":repeat_one:",
	"MUSIC_PAUSE": ":pause:",
	"MUSIC_PLAY": ":arrow_forward:",
	"MUSIC_PREV": ":track_previous:",
	"MUSIC_SHUFFLE": ":twisted_rightwards_arrows:",
	"MUSIC_SKIP": ":track_next:",
	"MUSIC_STOP": ":stop_button:",

	"SEARCH": ":mag_right:",
	"LOADING": ":hourglass:",

	"ACCESS_DENIED": ":no_entry:",
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
			case "channel.join":
				v = Message.member.voiceChannel;
				if (v) {
					v.join().then(Connection => {
						console.log(`[CHANNEL] Connected to ${v.name} !`);
						Message.channel.send(`${Emojis.SUCCESS} Connected to channel **${err}**.`);
						Voice = v;
					}).catch(err => {
						Message.channel.send(`${Emojis.FAILURE} Could not connect to channel : **${err}**.`);
						console.error(err);
					});
				}
				break;

			case "channel.leave":
				if (Voice) {
					Voice.leave().then(() => {
						console.log(`[CHANNEL] Left channel ${v.name}.`);
					}).catch(console.error);
					v = null;
				} else {
					Message.channel.send(`${Emojis.WARNING} The bot is not in a voice channel !`);
				}
				break;

			default:
				Message.channel.send("Commande invalide !");
				break;
		}
	}
});


/** Login when all events are binded. */
Client.login(TOKEN);
