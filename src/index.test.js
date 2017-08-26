var expect = require('chai').expect;
var naruto = require('./index');

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
    });
    describe('random',function(){
        it('should return an item from naruto.all',function(){
            expect(naruto.all).to.include(naruto.random());
        });
    });
});