/*

Name: John Keenan
Assignment: Functions Personal
Date: November 15, 2013

*/

/* -------- Drinking Water --------- */

//prompts the user how many bottles of water they drank today
var amountDrank = prompt("How many bottles of water did you drink today?");

//creates the normal function to calculate if amount of water has been drank
function drinkDrunk(bottles) {

	var drinkMinimum = 3;
	var totalMet;

	if(amountDrank < drinkMinimum) {
		totalMet = "No";
		return totalMet;
	} else if(amountDrank >= drinkMinimum) {
		totalMet = "Yes";
		return totalMet;
	}

}

var drank = drinkDrunk(amountDrank);
console.log("Daily requirement met: " + drank);