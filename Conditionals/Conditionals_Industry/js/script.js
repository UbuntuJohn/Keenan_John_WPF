/*

Name: John Keenan
Assignment: Conditionals Industry
Date: November 14th, 2013

*/

var maxWidth = 960;

var spacingBetweenDivs  = prompt("How many pixels will between your two paneled website? (Example: 15)");

var totalWhitespace = spacingBetweenDivs * 3;

var contentSpace = maxWidth - totalWhitespace;


if(maxWidth === 960) {
	if(totalWhitespace < 200 && totalWhitespace >= 0) {
		console.log("You will have a total of " + contentSpace + " pixels to work with!");

	} else if (totalWhitespace > 200) {
		console.log("You may want to resize your whitespace pixel size.");

	} else if(contentSpace > maxWidth) {
		console.log("I see what you tried to do there... nice try though!");
	}
	
} else {
	console.log("Max width must be 960px");
}



