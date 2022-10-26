// CREATING ARRAYS
   //empty array (and array methods)
//push-adds an item to the end of your array
// pop- removes the last item from your array.Doesn't take any argument .
// shift - removes items from the start of an array .Doesn't take any argument 
// unshift - adds items to start.
let students = [];
students[0] = "femi";
students[1] = "devs";
students.push ("busia");
students.push ("cohort1")
students.pop ();
students.unshift(2022);
students.shift();
console.log(students);
    //array of strings
let colours = ["red" ,"orange" ,"yellow"];
console.log(colours);

    //array of numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);

    //mixed array
let stuff = [true, 68, "cat" , null];
console.log(stuff);

    // modifying arrays
    let fruits = ["apples", "oranges","bananas"];
    fruits[2] = "milk";
    console.log(fruits);

// concat arrays 
let footballTeams = ["manchster", "arsenal", "chelsea"]
let numOfTeams = [ 4, 1, 6];
let merged = footballTeams.concat(numOfTeams);
console.log(merged);
let newlyMerged = numOfTeams.concat(footballTeams);
console.log(newlyMerged);
 
//join - creates a string from an array
let items = [1, 2, "fruits", false, true];
console.log(items.join("@"));

//includes - looks for a value,returns boolean 
console.log(items.includes("fruits"));
console.log(items);

// reverse -reverses an array
let reversedItem = items.reverse();
console.log(reversedItem);

//slice - copies a specified a portion 
let sliced = items.slice(1, 4);
console.log(sliced);

// splice -remove/replace elements
let splicer = ["orange","apples", "watermelon", "mangoes", "guavas", "bananas"];
// removing an item using splice
splicer.splice(2, 1);
splicer.splice(1, 2);
//adding items using splice 
splicer.splice(0, 0, "grapes", "lemon");
// replacing an item using splice
splicer.splice(1, 2, "appricot", "kiwi");
console.log(splicer);

//sort - sorts an array alphabetically
let sorter = ["crocodile", "lizard", "gecko", "chameleon", "salamander"]
let sorted = sorter.sort();
console.log(sorted);

// nested arrays
const colors = [
    ["red" , "crimson"],
    ["orange", "dark orange"],
    ["yellow", "golden rod"],
    ["green", "olive"],
    ["blue", "navy blue"],
    ["purple", "orchid"]
];
console.log(colors[0]);  //red , crimson
console.log(colors[0][1]);  // crimson
console.log(colors[4][1]);
//colors[6]=["grey", "black"];
colors.push(["grey", "black"]);
//colors.splice(6,0, ["grey", "black"]);
console.log(colors);

let concatenated = colors[2].concat(colors[4]).reverse();
console.log(concatenated.join("/").toUpperCase().repeat(2));

const details = [
    ["age", 20],
    ["city", "tulsa"],
    ["zip", 19003],
    ["Is admin", "true"]
];
const age = details[0].join(":");
console.log(age);
const city = details[1].join(":");
console.log(city);
const zip = details[2].join(":");
console.log(zip);
const admin = details[3].join(":");
console.log(admin);

const newConcat = age.concat(" ").concat(" ").concat(city).concat(" ").concat(" ").concat(zip).concat(" ").concat(" ").concat(admin);
console.log(newConcat);





