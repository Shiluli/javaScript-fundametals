//    LOOPS
// Allpow us to repeat code 
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
        console.log('inner:', str[j]);
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
let guess = Math.floor (Math.random()*10);
while ( guess!== target) {
    console.log(`Guessed ${guess}....Incorrect!`);
    guess = Math.floor(Math.random()*10);  // continue guessing until condition is true 
}
console.log(`CORRECT! Guessed: ${guess} and target was: ${target} `); //when the condition is false, now print.