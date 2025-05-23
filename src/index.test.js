var expect = require('chai').expect;
var naruto = require('./index');
const narutoNamesData = require('./naruto-names.json');

describe('naruto-names',function(){
    it('should work',function(){
        expect(true).to.be.true;
    });
    describe('all',function(){
        it('should be an array of strings',function(){
            expect(naruto.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(function(value){
                    return typeof value === "string";
                });
            }
        });
        it('should contain Naruto Uzumaki',function(){
            expect(naruto.all).to.include("Naruto Uzumaki");
        });
        it('should contain all names from naruto-names.json', function(){
            expect(naruto.all.length).to.equal(narutoNamesData.length);
            expect(naruto.all).to.deep.equal(narutoNamesData);
        });
    });
    describe('random',function(){
        it('should return an item from naruto.all',function(){
            expect(naruto.all).to.include(naruto.random());
        });
        it('should throw a RangeError if passed a negative number', function(){
            expect(function() { naruto.random(-1); }).to.throw(RangeError, "Requested number of items cannot be negative.");
        });
        it('should throw a RangeError if passed a number greater than the total number of names', function(){
            expect(function() { naruto.random(naruto.all.length + 1); }).to.throw(RangeError, "Requested number of items exceeds the total number of available names.");
        });
        it('should return an empty array if passed 0', function(){
            const randomItems = naruto.random(0);
            expect(randomItems).to.be.an('array').that.is.empty;
        });
        it('should return an array of random items from naruto.all if passed a number',function(){
            var randomItems = naruto.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(naruto.all).to.include(item);
            }, this);
        });
    });
});