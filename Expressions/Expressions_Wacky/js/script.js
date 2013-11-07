/*

Name: John Keenan
Assignment: Expressions - Wacky
Date: November 7th, 2013

*/

console.log("Age Title Calculator");
var yourAge = prompt("What is your age?");

if(yourAge <= 0) {
console.log("According to calculations... you aren't born yet");
} else if(yourAge == 1 || yourAge == 2) {
console.log("You are a toddler... how are you operating a computer?");
} else if(yourAge >= 3 && yourAge <= 12) {
console.log("You are a child... are you aware of COPA?");
}