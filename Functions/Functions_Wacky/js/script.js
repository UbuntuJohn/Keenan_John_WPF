/*

Name: John Keenan
Assignment: Functions Wacky
Date: November 15, 2013

*/

/* -------- Tootsie Pop Licks Percent (According to Purdue University) --------- */

alert("A random Tootsie Pop falls from the sky and lands in front of you! You want to know how many licks it takes to reach center!");
//Asks the user how many licks they have done so far
var tootsieLicks = prompt("How many licks have you performed so far?");

//Function that calculates percentage
function getLicksPercent(tootsieLicks) {
	//The number Purdue University came up with as an average number
	var purdueStudy = 364;
	//If statement to check if licks is larger than study average
	if(tootsieLicks > purdueStudy) {
		//Logs to the console that the tester may already be done or test is just a flop.
		console.log("According to Purdue University, you should already be done... \n Maybe look at one of the other studies?");
		console.log("Note: It should have taken " + purdueStudy + " licks.");
		//Kills the script so the rest doesn't run after this (Note: I know this from PHP)
		die();
		//If the above following isn't true
	} else {
	//The equation that does calculates the percent
	var equation = tootsieLicks / purdueStudy * 100;
	//Returns the value of equation
	return equation;

	} 
}
//Variable that calls upon our function
var percentage = getLicksPercent(tootsieLicks);
//Display the sentence with percentage to the browsers console!
console.log("You are " + percentage + "% to reaching the middle!");