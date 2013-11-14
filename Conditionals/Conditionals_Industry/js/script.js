/*

Name: John Keenan
Assignment: Conditionals Industry
Date: November 14th, 2013

*/

/* Checks the specs of the website. The idea is to build the site at 960 pixels and nothing more. */

/* ------------ 960 pixel page size ------------- */

//Max width of the web page
var maxWidth = 960;
//spacing between divs (left, center and right)
var spacingBetweenDivs  = prompt("How many pixels will between your two paneled website? (Example: 15)");
//this takes the left, center and right instances and mutiplies them.
var totalWhitespace = spacingBetweenDivs * 3;
//this displays the space you can display text on
var contentSpace = maxWidth - totalWhitespace;

//checks to see if page size is 960px
if(maxWidth === 960) {
	//if the total white space is less than 200 but more than or equal to 0
	if(totalWhitespace < 200 && totalWhitespace >= 0) {
		console.log("You will have a total of " + contentSpace + " pixels to work with!");
	//checks to see if total white space is greater than 200
	} else if (totalWhitespace > 200) {
		console.log("You may want to resize your whitespace pixel size.");
	//checks to see if content space is larger than 960 pixels
	} else if(contentSpace > maxWidth) {
		console.log("I see what you tried to do there... nice try though!");
	}
	//if site isn't 960px
} else {
	console.log("Max width must be 960px");
}
