/*

Name: John Keenan
Assignment: Expressions
Date: Nov. 7th, 2013

*/
//Car price calculator title
console.log("Car Price Calculator");

//price of car I want to buy
var carPrice = 14000;
//value of how much money is saved
var currentCash = prompt("How much money do you currently have?");

//if statement that checks to see the differences in values
if(currentCash < carPrice) {

var cashLeft = carPrice - currentCash;

console.log("You only need $" + cashLeft + " dollars to buy your new car.");
} else {
	console.log("Congrats! It appears you have enough to buy your new car!");
}