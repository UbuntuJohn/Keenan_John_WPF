/*

Name: John Keenan
Assignment: Functions Worksheet
Date: November 15, 2013

*/

/* --------- Circumference ---------- */

//function called circumference with the parameter of 'radius'
function circumference(radius) {

	//created a variable for pi
	var pi = 3.14;
	//this is the equation to solve for circumference when radius is given
	var equation = 2 * pi * radius;
	return equation;

}

var c = circumference(10);
console.log("The circumference of the circle is " + c);

/* --------- Stung! ---------- */

function stung(pounds) {

	var stings = 8.666666667;
	var totalStingsToKill = pounds * stings;
	return totalStingsToKill;

}

var kill = stung(110);
console.log("It takes " + kill + " bee stings to kill this animal.");