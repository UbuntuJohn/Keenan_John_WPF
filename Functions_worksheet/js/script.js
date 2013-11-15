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
	//returns the value of equation
	return equation;

}

//creating a variable called 'c' which resembles circumference
//Also we plug in 10 as 10 is our radius
var c = circumference(10);
//print our answer to the console.
console.log("The circumference of the circle is " + c);

/* --------- Stung! ---------- */

//creating a function called stung with the parameter of 'pounds'
function stung(pounds) {

	//the amount of stings to kill per pound
	var stings = 8.666666667;
	//this calculates the amount of stings it takes to kill someone or something
	var totalStingsToKill = pounds * stings;
	//returns the functions value
	return totalStingsToKill;

}

var kill = stung(110);
console.log("It takes " + kill + " bee stings to kill this animal.");