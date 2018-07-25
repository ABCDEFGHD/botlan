/**
 * @class Queue
 *  Represents a First In First Out (FIFO) collection of elements,
 * used as a list of songs to play.
 */
module.exports = class Queue {
	/**
	 * @constructor
	 *  Creates a Queue instance, empty by default.
	 *
	 * @param {Object[]?} def
	 */
	constructor(def = []) {
		/**
		 * @type {Object[]}
		 *  Stores the metadata of the musics to be played.
		 */
		this.QUEUE = def;

		/**
		 * @type {Int}
		 *  Points to the current song.
		 */
		this.INDEX_POINTER = 0;
	}

	/**
	 * @function add
	 *  Adds a song to the queue.
	 *
	 * @param {object} el
	 * @return {void}
	 */
	add(el) {
		this.QUEUE.push(el);
	}
};
