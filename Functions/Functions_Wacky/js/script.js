/*

Name: John Keenan
Assignment: Functions Wacky
Date: November 15, 2013

*/

/* -------- Tootsie Pop Licks Percent (According to Purdue University) --------- */

//Asks the user how many licks they have done so far
var tootsieLicks = prompt("How many licks have you performed so far?");

//function that calculates percentage
function getLicksPercent(tootsieLicks) {
	//the number Purdue University came up with as an average number
	var purdueStudy = 364;
	//if statement to check if licks is larger than study average
	if(tootsieLicks > purdueStudy) {
		//logs to the console that the tester may already be done or test is just a flop.
		console.log("According to Purdue University, you should already be done... Maybe look at one of the other studies?");
		die();
	} else {

	var equation = tootsieLicks / purdueStudy * 100;
	return equation;

	} 
}

var percentage = getLicksPercent(tootsieLicks);
console.log("You are " + percentage + "% to reaching the middle!");