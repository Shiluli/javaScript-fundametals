function grumpus() {
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}; // defining the function
grumpus(); // running the function/calling/executing to give results 
grumpus();

function greet(name) {// parameter -parameters helps us to store values
    console.log(`Hi,${name}!`);
};
greet('Cindy');// argument -

//mutiply two numbers 
function multiply(x, y){
    console.log(x*y);
};
multiply(2, 3);

//dividing functions
function divide(x, y){
    console.log(x/y);
};
divide(10, 2);

// adding numbe=rs
function add(x, y, z){
    console.log(x + y+ x);
};
add(56, 28, 13);

// square a number 
function square(x){
    console.log(x*x);
}
square(8);

function greet(name){
    console.log(`Hello ${name}`.toUpperCase());
};
greet('femidevs');

//average 
// function avg(x, y, z){
//    console.log((x+y+z)/avg.length);
// };
// avg(20, 25, 30);

function avg(arr){
    let sum = 0;
    for (let r of arr){
        sum += r;
    }
    const average = Math.round(sum / arr.length);
    console.log(average);
};
avg([1, 2,  3, 4, 5, 5,]);


// FIND LARGEST 
function findLargest(x, y){
    if(x>y){
        console.log(`${x} is large`);
    }
    else if( x<y){
        console.log(`${y} is larger`);
    }
    else {
        console.log(`${x} and ${y} are equal`);
    }
};
findLargest(64,64);


//       RETURN IN FUNCTIONS
// Return values can be captured or stored for future use 
// Functions return only 1 value 
// Function can have multiple return statements 
// Return statements ends function execution.

function add(x, y){
    return x + y; // returns only 1 value
    // return[x,y]....returns multiple values..we use an array
};
const total= add(2,3);
console.log(total);

function isPurple(color){
    if (color === 'purple'){
        return true;
    }
    else{
    return false;
};
};
 const colorr= isPurple('purple'); // (declaring a new variable to store the return value)
console.log(colorr);

//QUIZ
//Write a isValidPassword function
// It accepts two parameters, password and username 
// password must ;
  // -be atleast 8 characters long 
  // - cannot contain spaces 
  //- cannot contain the userame 
//If all the requirements are met, return true 
//Otherwise : false .

function isValidPassword(password, username){
    if(password.length <8){
        return false;
    }
    if(password.indexOf(" ") !== -1) {
        return false;
    }
    if(password.indexOf(username) !== -1){
        return false;
    }
    else{
        return true;
    }    
};
const korekt= isValidPassword('shiluli99', 'cynthia');
console.log(korekt);

function isValidPassword(password, username){
    if(password.length < 8 ||
        password.indexOf(" ") !== -1 ||
        password.indexOf(username) !== -1){
        return false;
        }
        else{
            return true;
        }
};
const korektPassword = isValidPassword('shi luli', 'cynthia')
console.log(korektPassword);

function password (password, username){
    const tooShort = password.length< 8;
    const hasSpace = password.indexOf(" ") !== -1;
    const containsUsername = password.indexOf(username) !== -1;

    if( tooShort|| hasSpace|| containsUsername) return false;
    else return true;
};
//or
// if(!tooShort && !hasSpace && !containsUsername) return true;
// return false;

// Simpler method.
// return !tooShort && hasSpace && containsUsername;

//     A PANGRAM
// A pangram is a sentence that contains every letter of the alphabet .
// The quick brown fox jumps over the lazy dog.

//    QUIZ
// Write a function called isPangram ,which checks to see if a given sentence contains every lettter of the alphabet.
//Make sure to ignore string casing.

//SOLUTION 1
function isPangram(sentence){
    let stringCased = sentence.toLowerCase();
    for ( let char of 'abcdefjhijklmnopqrstuvwxyz'){
        if(stringCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
};
const panG = isPangram('the quick brown fox jumps over the lazy dog'); // TRUE
console.log(panG);

// SOLUTION 2
function isPangram(sentence){
    let stringCased = sentence.toLowerCase();
    for ( let char of 'abcdefjhijklmnopqrstuvwxyz'){
        if(!stringCased.includes(char)){
            return false;
        }
    }
    return true;
};
const panGr = isPangram('the quick brown fox jumps over the laby dog'); // false, doesnt have z 
console.log(panGr);












