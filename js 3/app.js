// Question 1
// var city = prompt("Enter the city name: ");

// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + city);
// }


// Question 2
// var gender = prompt("Enter your gender : ");
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir ");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Maam ");
// } else {
//     alert("Good Morning");
// }


// Question 3
// var remfuel = +prompt("Enter the remaining fuel in your car in litres: ");
// if (remfuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// } else {
//     alert("Refilling fuel is not necssary");
// }


// Question 4
//Part (a) output : displayed because cond is true
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

//Part (b)  output : not displayed because cond is false
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

//Part (c) output : only cond 2 and 4 will displayed 
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if (c === 14){
//     alert("condition 4 is true");
// }

//Part (d) output : displayed because cond is true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

//Part (e) output : The alert for True will be displayed only
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

//Part (f) output : displayed because cond is true
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Question 5
// var secretNum = 7;
// var user = +prompt("Guess the secret number (between 1 to 10): ");
// if (user === secretNum) {
//     alert("Great! its correct answer.");
// } else if (user + 1 === secretNum || user - 1 === secretNum) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert("Sorry, incorrect guess")
// }

// Question 6
// var user = +prompt("Enter a number: ");
// if (user % 3 == 0) {
//     alert(user + " is divisible by 3.");
// } else {
//     alert(user + " is not divisible by 3.");
// }

// Question 7
// var user = +prompt("Enter a number: ");
// if (user % 2 === 0) {
//     alert(user + " is an even number.");
// } else {
//     alert(user + " is an odd number.");
// }


// Question 8
// var temp = +prompt("Enter the temperature: ");
// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's very cold outside.");
// }


// Question 9
// var num1 = +prompt("Enter the first number: ");
// var num2 = +prompt("Enter the second number: ");
// var perform = prompt("Enter the operation (+, -, *, /, %): ");
// var result;
// if (perform === "+") {
//     result = num1 + num2;
// } else if (perform === "-") {
//     result = num1 - num2;
// } else if (perform === "*") {
//     result = num1 * num2;
// } else if (perform === "/") {
//     result = num1 / num2;
// } else if (perform === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation");
// }
// alert("Result: " + result);



