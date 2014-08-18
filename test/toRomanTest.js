var assert = require("assert");
var toRoman = require("../toRoman.js");

describe("Arabic to Roman", function(){
	it("should have toRoman.js and object toRoman", function(){
		assert.equal(typeof toRoman, 'object');
		assert.equal(typeof toRoman.toRoman, 'function');
	});

	it("Number 1 should be I", function(){
		assert.equal("I", toRoman.toRoman(1));
	})

});