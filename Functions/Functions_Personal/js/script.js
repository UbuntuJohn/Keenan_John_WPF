/*

Name: John Keenan
Assignment: Functions Personal
Date: November 15, 2013

*/

/* -------- Drinking Water --------- */

var amountDrank = prompt("How many bottles of water did you drink today?");

function drinkDrunk(bottles) {

	var drinkMinimum = 3;
	var totalLeft = drinkMinimum - amountDrank;
	var totalMet;

	if(amountDrank < drinkMinimum) {
		totalMet = "No";
		return totalMet;
	} else if(amountDrank > drinkMinimum) {
		totalMet = "Yes";
		return totalMet;
	}

}

var drank = drinkDrunk(amountDrank);
console.log("Daily requirement met: " + drank);