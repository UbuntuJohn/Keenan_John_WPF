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

	//my personal minimum each day (usually the limit, too!)
	var drinkMinimum = 3;
	//just declaring a variable that we'll use later
	var totalMet;

	//if statement to check if visitor drank less than 3
	if(amountDrank < drinkMinimum) {
		//if not, the met requirement is set to 'No'
		totalMet = "No";
		//returns the variable value
		return totalMet;
		//else if statement to check if bottle drank amount is greater or equal to minimum/limit
	} else if(amountDrank >= drinkMinimum) {
		//if statement is true, give totalMet the value of "Yes"
		totalMet = "Yes";
		//if totalMet is "Yes" return the value!
		return totalMet;
	}

}

var drank = drinkDrunk(amountDrank);
console.log("Daily requirement met: " + drank);