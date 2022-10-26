let animal = "dog";
console.log(animal.length);
// access individual characters in a string
console.log(animal[0])
// string method - changes the case 
let msg = "I am king";
 let yellMsg = msg.toUpperCase(); // I AM KING
console.log(yellMsg);
let angry = "LeaVE Me aLoNe";
let lowAngry = angry.toLowerCase(); // leave me alone
console.log(lowAngry);

//trim method -removes trailing and leading white spaces
let greeting = "  leave me alone plz  ";
console.log(greeting);
let tGreeting = greeting.trim();
console.log(tGreeting);

//indexOf method
let tvShow = "catdog";
console.log(tvShow);
let firstIndex = tvShow.indexOf("cat")
console.log(firstIndex);
let secondIndex = tvShow.indexOf("g");
console.log(secondIndex);
let thirdIndex = tvShow.indexOf("v");
console.log(thirdIndex);

//slice method 
let str = "lokichoggio";
console.log(str);
let partOfStr = str.slice(3, 10);
console.log(partOfStr);

//replace method
let annoyingLaugh = "teehee so funny! teehee!"
console.log(annoyingLaugh);
let replacer = annoyingLaugh.replaceAll("teehee", "haha"); //declaring a new variable so as to store /save it.

//QUIZ
console.log(replacer);
let song = "london calling";
console.log(song);
let capsLondonCalling = song.toUpperCase();
console.log(capsLondonCalling);
let park = "Yellowstone";
const index = park.indexOf("stone")
console.log(index);

//string escapes
// \n  - new line
// \'  - single quote
// \"" - double quotes
// \\  - backslash
let myName ="Shiluli\nAdulu"
console.log(myName);

//template literals - allow for embedding of expressions
let totals =  `we are ${20}`;
console.log(totals);

let cohort1 = 15;
let cohort2 = 20;
let femidevs = `We are ${cohort1+cohort2} in total`;
console.log(femidevs);

let drinks = "Soda";
let quantity = 2;
let price = 970;
// we bought 2 crates soda @1940
let crates = `We bought 2 crates of ${drinks} @ Ksh ${quantity *price}`;
console.log(crates);






