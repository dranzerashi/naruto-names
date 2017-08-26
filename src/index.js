var uniqueRandomArray = require('unique-random-array');
var narutoNames = require('./naruto-names.json');
module.exports = {
	all: narutoNames,
	random: uniqueRandomArray(narutoNames)
}
