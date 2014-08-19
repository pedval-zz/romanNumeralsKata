var assert = require("assert");
var toRoman = require("../toRoman.js");

describe("Arabic to Roman", function(){
	it("should have toRoman.js and object toRoman", function(){
		assert.equal(typeof toRoman, 'object');
		assert.equal(typeof toRoman.toRoman, 'function');
	});

	it("Number 1 should be I", function(){
		assert.equal("I", toRoman.toRoman(1));
	});

	it("Number 5 should be V", function(){
		assert.equal("V", toRoman.toRoman(5));
	});

	it("Number 10 should be X", function(){
		assert.equal("X", toRoman.toRoman(10));
	});

	it("Number 50 should be L", function(){
		assert.equal("L", toRoman.toRoman(50));
	});

	it("Number 100 should be C", function(){
		assert.equal("C", toRoman.toRoman(100));
	});

	it("Number 500 should be D", function(){
		assert.equal("D", toRoman.toRoman(500));
	});

	it("Number 1000 should be M", function(){
		assert.equal("M", toRoman.toRoman(1000));
	});

	it("Number 1944 should be MCMXLIV", function(){
		assert.equal("MCMXLIV", toRoman.toRoman(1944));
	});



});