/*

Name: John Keenan
Assignment: Conditionals Worksheet
Date: November 8th, 2013

*/

/* ------------- Celsius to Fahrenheit Converter --------------- */

//the degrees variable collects the temperature from the user
var degrees = prompt("What is the temperature?");
//the unite variable asks if it's F or C
var unit = prompt("F or C?");

//If statement checks to see if F or C was typed
if(unit === "F" || unit === "C") {
	//if F was typed, do the following
	if(unit === "F") {
		//do the conversion from F to C
		//sub is the subtraction: 32 minus from the current degrees
		var sub = degrees - 32;
		//required 5 divided by 9
		var div = 5/9;
		//calculates the conversion of F to C 
		var total = sub * div;
		//our message to the user
		console.log("The temperature is " + total + " degrees Celsius.");
		

	//if C was typed do the following
	} else if(unit === "C") {
		//do the conversion from C to F
		//required division of 9 divided by 5
		var div = 9/5;
		//multiplies the division with the typed degrees of C
		var multi = div * degrees;
		//calculates the conversion of C to F
		var total = multi + 32;
		//our message to the user
		console.log("The temperature is " + total + " degrees Fahrenheit");
	}

//if the user typed in anything other than F or C
} else {
	console.log("Invalid unit type.");
}

/* ------------- Check the Login --------------- */
//username collected from visitor
var username = prompt("Username:");
//password collected from visitor
var password = prompt("Password:");
//site username that must be matched
var username_value = "admin";
//site password that must be matched
var password_value = "password";

//check to see if values are equal
if(username === username_value) {
	//if username values, check to see if password values equal
	if(password === password_value) {
		console.log("Welcome, " + username);
	// if password values do not equal, display the following
	} else {
		console.log("Password does not match our records.");
	}
//if username values don't equal, display the following
} else {
	console.log("User not found. Try again.");
}

/* ------------- Movie Ticket Price --------------- */

//asks the customer what their age is
var yourAge = prompt("What is your age?");
//setting a variable of ticketPrice
var ticketPrice;

//checks to see if the user is under 10
if(yourAge < 10) {
//if so, the price is 7 dollars
ticketPrice = 7;
console.log("The ticket price is $" + ticketPrice);
//checks to see if customer is 55 and older
} else if(yourAge >= 55) {
//ticket price is set to 7 dollars
ticketPrice = 7;
console.log("The ticket price is $" + ticketPrice);
//if visitor does not fit requirements
} else {
//if visitor does not fit requirements, their ticket price is average price
ticketPrice = 12;
console.log("The ticket price is $" + ticketPrice);
}






