/*

Name: John Keenan
Assignment: Expressions - Wacky
Date: November 7th, 2013

*/

console.log("Age Title Calculator");
var yourAge = prompt("What is your age?");

if(yourAge <= 0) {
yourAge = 0;
console.log("According to calculations... You are a newborn... sure!");
} else if(yourAge == 1 || yourAge == 2) {
console.log("You are a toddler... how are you operating a computer?");
} else if(yourAge >= 3 && yourAge <= 12) {
console.log("You are a child... are you aware of COPA?");
} else if(yourAge >= 13 && yourAge <= 17) {
console.log("You are a teenager! Remember, school is important.");
} else if(yourAge >=18 && yourAge <= 25) {
console.log("You are a young adult... You're in the same age group of the developer.");
} else if() {

}