/*

Name: John Keenan
Assignment: Conditionals Wacky
Date: November 14th, 2013

*/

/* ------------ Bad luck cat ------------- */

/* This script checks to see if the visitors cat fits the superstition or not */

//Tells the visitor they now have a cat
alert("You now have a cat!");
//Asks the visitors what color there cat is
var catColor = prompt("What color is your cat?");
//The ternaries that tells the visitors if their cat brings bad luck
(catColor != "black") ? console.log("Your cat doesn't superstitiously bring bad luck.") : console.log("Your cat superstitiously brings bad luck!");