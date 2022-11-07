function madlib(adjective, noun, verb, adverb){
    console.log(`The ${adjective} ${noun} ${verb} very ${adverb}`);
};
madlib( 'brown', 'fox', 'jumped', 'swiftly');
// return `The ${adjective} ${noun} ${verb} very ${adverb}`;
// let mad = madlib( 'brown', 'fox', 'jumped', 'swiftly');
// console.log(mad);

// write function 
// pass arguments adjective procedence 
// use return function insted of console.log 
// call 3 functions with different sentence 

function madlib(adjective, noun, verb, adverb) {  
    return `The ${adjective} ${noun} ${verb} ${adverb}.`;
};
let mad1 = madlib('lazy', 'cat', 'walked', 'majestically');
console.log(mad1);

let mad2= madlib('fat', 'peacock', 'danced', 'proudly');
console.log(mad2);

let mad3 = madlib('tallest', 'girrafe', 'ate', 'slowly');
console.log(mad3);
