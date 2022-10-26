//If
let rating = 3;   //declare a variable and give it value 
if (rating===3){
    console.log("That is the right rating"); 
};

//Else if 
// 
let answer = 2;   //declare a variable and give it value 
if (answer===2){
    console.log("That is the right answer");
}
else if (answer ===3){
    console.log("That is also correct");
};

//Multiple else ifs
// we can use use the switch statement 
let days = 5;
switch (days) {
    case 1:console.log("Sunday");
    break;
    case 2:console.log("Monday");
    break;
    case 3:console.log("Tuesday");
    break;
    case 4:console.log("Wedsday");
    break;
    case 5:console.log("Thursday");
    break;
    case 6:console.log("Friday");
    break;
    case 7:console.log("Saturday");
    break;

    default:console.log(Invalid); //if condition does not meet
    break;
};

// if (days ===1){
//     console.log("Sunday");
// }
// else if( days===2){
//     console.log("Monday");
// }
// else if( days===3){
//     console.log("Tuesday");
// }
// else if( days===4){
//     console.log("Wednesday");
// }
// else if( days===5){
//     console.log("Thursday");
// }
// else if( days===6){
//     console.log("Friday");
// }
// else if( days===7){
//     console.log("Saturday");
// }

//Else
//else {
//   console.log("Not a valid day");
//};

//      QUIZ
//Declare password variable and give it a value 
//use if statements to ;
// 1. ensure that your password has a length of 6 or more characters 
// 2.check if password has spaces in it
// 3.console.log something if condition is true 

let password = "shiluli"
password.indexOf(" ");
if (password.length>=6){
    if (password.indexOf(" ") === -1)
    console.log("Valid Password");
}
else {
    console.log("Invalid Password");
};

//LOGICAL OPERATORS
   //  &&(and) both sides must be true to be true 
let pasword = "tacco tuesday";
if (pasword.length>=6 && pasword.indexOf(" ") !==-1){
    console.log("VALID PASWORD");
}
else {
    console.log("INVALID PASWORD");
};

     // (or) if one side is true, the expression passes as true
let age = 25;
if (age <6 || age>= 65){
    console.log("You get in for free");
}
else {
    console.log(`You pay Ksh 500`);
};

     //   !(not) expression returns true if the expression is false


     // TERNARY OPERATOR 
let javaScript = "easy";
javaScript === "easy" ? console.log("Okay") :console.log("Not true");

let newPerson = "khjkjjhh";
let name = newPerson === "femidevs" ? "Real Name" : "Wrong Name";
console.log(name);
// if (newPerson === "femidevs") {
  //  console.log("Real Name")
//}
//else {
 //   console.log("Wrong Name");
//}
