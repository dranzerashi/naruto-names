var uniqueRandomArray = require('unique-random-array');
var narutoNames = require('./naruto-names.json');
var getRandomItem = uniqueRandomArray(narutoNames);
module.exports = {
	all: narutoNames,
	random: random
};

function random(number){
	if(number==undefined){
		return getRandomItem();
	}
	else{
		var randomItems = [];
		for (var i=0; i < number; i++){
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}
