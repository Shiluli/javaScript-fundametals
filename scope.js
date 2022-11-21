// scope dictates where a variable will be visible 
//There are 3 types of scopes:1.Function 2. Block 3. Lexical 

//1. Function(global) scope 
let bird = "mandarian duck";
function birdWatch(){
    let bird = "golden pheasant"; //prints golden pheasant 
    console.log(bird);
};
console.log(bird);// prints mandarian duck 
birdWatch();

//2. Block scope 
// are denoted by calibrackets{}
let radius = 8;
if(radius > 0){
    const PI = 3.14;
    let circm = 2* PI *radius;
    console.log(circm); //50.24 
}
console.log(radius);// 8 
// console.log(PI); error because PI is locally scoped hence 

//3.Lexical scope 
//refers to the fact that nested functions are bound to their parent 
// only available in the parent function
// child functions have access to every variabe that a parent function accesses and the reverse is true.
function outer(){ // parent function
    let movie = "Accident Man";
    console.log(movie); // accident man 
function inner(){
    let movie ="From Scratch";
    console.log(movie);// from scratch
function extras(){
    console.log(movie.toUpperCase());
        }
extras(); // looks for the nearest variable i.e FROM SCRATCH
    }
inner();  // From Scratch
    }
outer(); // Accident Man



// FUNCTION EXPRESSION
// There are 2 ways of declaring a function;
//1. Function declaration/ function statement 
//2. Function expression

const square = function(num){
    return num * num;
}
console.log(square(7));
square(7);

//Reasons why functions are stored in a variable
// 1.Functions are objects 
// Advantages :
// This means we can put them in variables 
// we can store alot of them in an array 
// we can even oass them around as arguments 
// console.dir(function name);  proves that a function is an object

function add (x, y){
    return x + y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function subtract(x, y){
    return x - y;
};

const student = {
    age: add
}
console.log(student.age(10, 15));

const arr1 = [add, multiply, divide, subtract];
for( let pdt of arr1){
    let arr2 = pdt(3, 2)
    console.log(arr2);
}



function callTwice(func){
    func();
    func();
}
function laugh(){
    console.log('KICHEEEKKKOOO');
}
callTwice(laugh);

function makerBetweenFunc(min, max){
    return function(val) {
        return val >= min && val <= max;
    }
}
const inAgeRange =makerBetweenFunc(20, 100);
inAgeRange(19);
console.log(inAgeRange(19));
inAgeRange(76);
console.log(inAgeRange(76));

const x = 2;
{
    console.log(x);
}

function rage(){
    console.log('I love Everything');
}
function repeatNTimes(action, num){
    for(let i = 0; i <num; i++){
        action();
    }
}
repeatNTimes(rage, 13);

//HOISTING
//Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
//variables or classes to the top of their scope, prior to execution of the code.

