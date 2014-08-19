var toRoman ={};
toRoman.toRoman = function conversorFromArabicToRoman(arabic) {	
	
	if(arabic >= 1000) {
		return"M"+conversorFromArabicToRoman(arabic - 1000);
	} else if(arabic >= 900) {
		return "CM"+conversorFromArabicToRoman(arabic - 900);
	} else if(arabic >= 500) {
		return"D"+conversorFromArabicToRoman(arabic - 500);
	} else if(arabic >= 400) {
		return"CD"+conversorFromArabicToRoman(arabic - 400);
	} else if(arabic >= 100) {
		return "C"+conversorFromArabicToRoman(arabic - 100);
	} else if(arabic >= 90) {
		return"XC"+conversorFromArabicToRoman(arabic - 90);
	} else if(arabic >= 50) {
		return "L"+conversorFromArabicToRoman(arabic - 50);
	} else if(arabic >= 40) {
		return"XL"+conversorFromArabicToRoman(arabic - 40);
	} else if(arabic >= 10) {
		return "X"+conversorFromArabicToRoman(arabic - 10);
	} else if(arabic >= 9) {
		return"IX"+conversorFromArabicToRoman(arabic - 9);
	} else if(arabic >= 5) {
		return "V"+conversorFromArabicToRoman(arabic - 5);
	} else if(arabic >= 4) {
		return"IV"+conversorFromArabicToRoman(arabic - 4);
	} else if(arabic >=1) {
		return "I"+ conversorFromArabicToRoman(arabic - 1);
	} else {
		return "";
	}
	
} 

module.exports = toRoman;