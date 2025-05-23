const uniqueRandomArray = require('unique-random-array');
const narutoNames = require('./naruto-names.json');
const getRandomItem = uniqueRandomArray(narutoNames);

/**
 * @module naruto-names
 * @description Provides Naruto character names.
 * @property {string[]} all - An array of all Naruto character names.
 * @property {function} random - A function to get random character name(s).
 */
module.exports = {
	all: narutoNames,
	random: random
};

/**
 * Returns random Naruto character name(s).
 * If no number is provided, a single random name is returned.
 * If a number is provided, an array of that many random names is returned.
 * Uses `unique-random-array` to ensure uniqueness when multiple names are requested.
 * 
 * @param {number} [number] - The number of random names to return. Optional.
 * @returns {string|string[]} A single name if no number is specified, or an array of names. Returns an empty array if `number` is 0.
 * @throws {RangeError} If `number` is negative.
 * @throws {RangeError} If `number` exceeds the total number of available names.
 */
function random(number){
	if (number < 0) {
		throw new RangeError('Requested number of items cannot be negative.');
	}
	if(number === undefined){ // Strict equality check
		return getRandomItem();
	}
	else{
		if (number > narutoNames.length) {
			throw new RangeError('Requested number of items exceeds the total number of available names.');
		}
		const randomItems = [];
		for (let i=0; i < number; i++){
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}
