/*

Name: John Keenan
Assignment: Functions Wacky
Date: November 15, 2013

*/

/* -------- Tootsie Pop Licks Percent (According to Purdue University) --------- */

var tootsieLicks = prompt("How many licks have you performed so far?");

function getLicksPercent(tootsieLicks) {
	var purdueStudy = 364;

	if(tootsieLicks > purdueStudy) {
		console.log("According to Purdue University, you should already be done... Maybe look at one of the other studies?");
		die();
	} else {

	var equation = tootsieLicks / purdueStudy * 100;
	return equation;

	} 
}

var percentage = getLicksPercent(tootsieLicks);
console.log("You are " + percentage + "% to reaching the middle!");