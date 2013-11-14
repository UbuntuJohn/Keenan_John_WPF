/*

Name: John Keenan
Assignment: Conditionals Personal
Date: November 14th, 2013

*/


var currentAmount = prompt("How many foot steps have you walked so far today?");

currentAmount = Number(currentAmount);

var minimumAmount = 2000;

var stepsLeft = minimumAmount - currentAmount;

if(currentAmount <= 0) {
	currentAmount = 0;
	console.log("You haven't started your workout yet! You should get right to it!");

} else if(currentAmount < minimumAmount) {
	console.log("You have a total of " + stepsLeft + " steps to walk until the minimum of " + minimumAmount + " steps.");

} else if(currentAmount > minimumAmount) {
	console.log("Feel free to stop at any time! You have reached your minimum steps for today!");

} else if(currentAmount === minimumAmount) {
	console.log("Rght on the dot! You've reach the minimum requirement for workout today!");
} 





