/**
 * @class Audio
 *  Represents an audio player, with (single) music manipulation :
 * play, pause, stop, forward, ...
 */
module.exports = class {
	/**
	 * @constructor
	 *  Initialize audio variables.
	 *
	 * @param {VoiceConnection} connection
	 * @param {TextChannel} textChannel
	 */
	constructor(connection, textChannel) {
		/**
		 * @type {VoiceConnection}
		 *  Represents the connection to the channel.
		 */
		this.CONNECTION = connection;

		/**
		 * @type {VoiceChannel}
		 *  The channel the bot is currently playing in.
		 */
		this.VOICE_CHANNEL = connection.channel;

		/**
		 * @type {TextChannel}
		 *  The text channel the bot should output results.
		 */
		this.TEXT_CHANNEL = textChannel;

		/**
		 * @type {StreamDispatcher}
		 *  The audio stream being played.
		 */
		this.DISPATCHER = connection.dispatcher;
	}

	/**
	 * @destructor
	 */
	destructor() {
		delete this.CONNECTION;
		delete this.VOICE_CHANNEL;
		delete this.TEXT_CHANNEL;
		delete this.DISPATCHER;
	}

	/**
	 * @function isPaused
	 *  Checks if the stream is paused.
	 *
	 * @return {boolean}
	 */
	isPaused() {
		return this.DISPATCHER.paused;
	}

	/**
	 * @function pause
	 *  Pause a stream.
	 *
	 * @return {void}
	 */
	pause() {
		this.DISPATCHER.pause();
	}

	/**
	 * @function resume
	 *  Resume a paused stream.
	 *
	 * @return {void}
	 */
	resume() {
		this.DISPATCHER.resume();
	}

	/**
	 * @function stop
	 *  Stops the Audio instance.
	 */
	stop() {
		this.DISPATCHER.end();
		this.destructor();
	}

	/**
	 * @function get
	 *  Get `this` properties/
	 */
	get(p) {
		return this[p];
	}
}
