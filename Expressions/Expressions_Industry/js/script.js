/*

Name: John Keenan
Assignment: Expressions - Industry
Date: November 7th, 2013

*/
//Web Design Total Price Title
console.log("Web Design Total Price Calculator");
//Ask the client how many pages will be needed
var amountPages = prompt("How many pages will your site have?");
//The price set per page
var pricePerPage = 50;
//The math that will perform the design total cost
var totalPrice = amountPages * pricePerPage;
//displays the final price to the client
console.log("Your price for this web design package will be $" + totalPrice + "!");