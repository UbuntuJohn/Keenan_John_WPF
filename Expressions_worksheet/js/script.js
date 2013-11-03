/*
Name: John Keenan
Date: 11/1/2013
Assignment: Expression Worksheet
*/


/* ------------- Dog Years ------------------ */
//Sparky's age in dog years
var dogs_age = 1;

//Sparky's age in human years
var dogs_age_humanYears = 7;

//printing out sparkys age information
console.log("Sparky is " + dogs_age_humanYears + " human years old which is " + dogs_age + " in dog years.");

/* ------------- Slice of Pie part 1 ------------------ */

//The amount of people at the party
var people_at_party = 16;

//The number of slices per pizza
var slicesPerPizza = 11.24;

//number of total pizzas purchased
var number_of_pizzas = 3;

//Final result of how many pizzas people had
var result = slicesPerPizza * number_of_pizzas / people_at_party;
console.log("Each person ate " + result + " slices of pizza at the party.");

/* ------------- Slice of Pie part 2 ------------------ */

//The whole number of total number of slices per guest
var wholeSlice = parseInt(result);

//Calculation for left overs
var leftOvers = result - wholeSlice;

//Result of Sparkys share
console.log("Sparky got " + leftOvers + " slices of pizza.");

/* ------------- Average Shopping Bill ------------------ */

//money spent per weekly bases
var grocery_prices = [14.95,12.42,11.66,44.12,6.41];

//total for all 5 weeks
var total = grocery_prices[0] + grocery_prices[1] + grocery_prices[2] + grocery_prices[3] + grocery_prices[4];

//average spent on groceries
var average = total / 5;

//console.log for data
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week"); 

/* ------------- Discounts ------------------ */

//price of item
var item_price = 25.00;

//discount of item
var discount = 20;

//discount math
var discountMath = 20 / 100;

//won't in fact calculate correct number
var priceWithDiscount = item_price * discountMath;

//overwriting variable with correct number, this is also the final price without tax
var priceWithDiscount = item_price - priceWithDiscount;

//description of item
var description = "T-Shirt";

//sales tax for philadelphia
var sales_tax = 8 / 100;

//final price with tax, but incorrect
var finalPriceWithTax = priceWithDiscount * sales_tax;

//overwriting for correct value
var finalPriceWithTax = finalPriceWithTax + priceWithDiscount;

//console log result
console.log("Your " + description + " was originally $" + item_price + ", but after a " + discount + "% discount, it is now $" + priceWithDiscount + " without tax, and " + finalPriceWithTax + " with tax.");
