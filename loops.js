//    LOOPS
// Allow us to repeat code 
// Types of loops 
// 1.for loop
// 2. while loop
// 3. for... of loop
// 4. for... in loop

//for loop 
for ( let i = 1; i<=10; i++) {
    console.log(i);
};

for (let i=0; i<=20; i++) {
    console.log(i);
};

//for (let i=50; i>=0; i-=10) {
   // console.log(i);
//};
for (let i=50; i<=100; i+=10) {
    console.log(i);
};

//for loops and arrays 
// to loop over an array, start at 0 and continue to the last index (length-1)
const animals = ['lions','tigers', 'bears'];
for (let i=0; i<animals.length; i++) {
    console.log(`animal at index of ${i} is ${animals[i]}`);
}

// nested loops 
let str = 'LOL';
for (let i = 0; i<= 4; i++) {
    console.log('outer:', i);
    for (let j = 0; j< str.length; j++) {
        console.log('   inner:', str[j]);
    }
};

//WHILE LOOPS 
//continues to run as long as its test conditions is true

let num = 0;
while (num< 10){
    console.log(num);
    num++;
}
let target = Math.floor (Math.random()*10);  // generte numbers between 0-10.Cuts off the decimal part 
let guess = Math.floor (Math.random()*10); // 
while ( guess!== target) {
    console.log(`Guessed ${guess}....Incorrect!`);
    guess = Math.floor(Math.random()*10);  // continue guessing until condition is true 
}
console.log(`CORRECT! Guessed: ${guess} and target was: ${target} `); //when the condition is false, now print. When the condition fails,

// for ....of loops 
// a nice and easy way of iterating over arrays i.e  objects and strings 
for ( let std of "yell"){
    console.log(std);

}
//for loops
// let st = "yell";
// for (let i=0; i<st.length; i++){
   // console.log(st[i]);
//}

let subreddits = [ "soccer", "popheads", "cringe","books" ];
for ( let sub of subreddits){
    //do this for every item in the subreddits array
    console.log(`${sub} -www.reddit.com/r/${sub}`);
}

//Nested for...of loops 
const magicSquare = [
    [2, 7, 6 ], // accessing elements in arrays .we use index [ index ]
    [9, 5, 1 ],
    [4, 3, 8 ]
];
for (let row of magicSquare){
    let sum = 0;
    for ( let num of row ){
        sum += num
    }
    console.log(`Row of ${row} sums to ${sum}`);  
};

let fruits = [ "mango", "banana", "apple"];

for (let fr of fruits){
    console.log(fr);
}

// We can loop over keys in an object using Object.keys(). -method
// FOR VARIABLE in objects 
// we use Object.keys()method,. Cannot work with the method.
const movieReviews = {
    Amadeus: 10,
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8
};
for(let movie of Object.keys(movieReviews)){
    // console.log(movie);
    let score = movieReviews[movie];
    console.log(`I rated ${movie} ${score} /10`);
}
// QUIZ
// Create a new object of football teams 
// RESULT: arsenal is position 1 in EPL

const footballTeams ={
    ManchesterUnited: 3,
    PSG: 2,
    Tottenham: 4,
    Arsenal: 1,
    Chelsea:5
};
for (let teams of Object.keys(footballTeams)){
    let position = footballTeams[teams]
    console.log(`${teams} is position ${position} in EPL`);
};

//FOR....IN LOOPS 
// Loops over the keys in an object 
 const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades : 100000
 };
 let total = 0;
  for (let winnings in jeopardyWinnings){
    // console.log(winnings); returns/prints the keys
    total+= jeopardyWinnings[winnings]; // access values in the keys and adds them ..
 };
 console.log(`Kabambe's total winnings is $ ${total} `);
 




