/*

Name: John Keenan
Assignment: Expressions
Date: Nov. 7th, 2013

*/
console.log("Car Price Calculator");
var carPrice = 14000;
var currentCash = prompt("How much money do you currently have?");

if(currentCash < carPrice) {

var cashLeft = carPrice - currentCash;

console.log("You only need $" + cashLeft + " dollars to buy your new car.");
} else {
	console.log("Congrats! It appears you have enough to buy your new car!");
}