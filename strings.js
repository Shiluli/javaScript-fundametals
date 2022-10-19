let animal = "dog";
console.log(animal.length);
// access individual characters in a string
console.log(animal[0])
// string method
let msg = "I am king";
 let yellMsg = msg.toUpperCase(); // I AM KING
console.log(yellMsg);
let angry = "LeaVE Me aLoNe";
let lowAngry = angry.toLowerCase(); // leave me alone
console.log(lowAngry);

//trim method
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
