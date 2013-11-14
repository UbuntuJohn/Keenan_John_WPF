/*

Name: John Keenan
Assignment: Conditionals Personal
Date: November 14th, 2013

*/


//Asks the visitors how many foot steps they have taken today
var currentAmount = prompt("How many foot steps have you walked so far today?");
//over writes the variable to convert it to a number instead of a string
currentAmount = Number(currentAmount);
//The set minimum of steps per day
var minimumAmount = 2000;
//The amount of steps to reach minimum
var stepsLeft = minimumAmount - currentAmount;

//if current amount is less than 0, make it 0
if(currentAmount <= 0) {
	currentAmount = 0;
	console.log("You haven't started your workout yet! You should get right to it!");
//if current amount of steps is less than 2000
} else if(currentAmount < minimumAmount) {
	console.log("You have a total of " + stepsLeft + " steps to walk until the minimum of " + minimumAmount + " steps.");
//if current amount of steps is greater than 2000
} else if(currentAmount > minimumAmount) {
	console.log("Feel free to stop at any time! You have reached your minimum steps for today!");
//if current amount of steps is exactly 2000
} else if(currentAmount === minimumAmount) {
	console.log("Rght on the dot! You've reach the minimum requirement for workout today!");
} 





