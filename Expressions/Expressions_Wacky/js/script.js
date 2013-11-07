/*

Name: John Keenan
Assignment: Expressions - Wacky
Date: November 7th, 2013

*/
//Age Title Calculator title
console.log("Age Title Calculator");
//Input from the visitor, which asks for name
var yourAge = prompt("What is your age?");

//many if statements that check different values 
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
} else if(yourAge >= 26 && yourAge <= 39) {
console.log("You are an adult... I bet you wished you were a child again.");
} else if(yourAge >= 40 && yourAge <= 59) {
console.log("You are middle aged (adult), sorry, but it's the truth!");
} else if(yourAge >= 60 && yourAge <= 90) {
console.log("You are a senior citizen. Note for developer: Never get old.");
} else if(yourAge > 90) {
console.log("You are a senior citizen. It is truely amazing that you are still alive.");
}



