//Objects are collections of properties
//Properties are a key-value pair
//Carries all types of data i.e strings, numbers, booleans etc
// ALL KEYS ARE CONVERTED INTO STRINGS.

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workOutsThisWeek: "5 of 7",
    avgGoodSleep: "2:3",
    100: "one hundred",
    bestPet : "cat"

};
//accessing data in an object 
console.log(fitBitData.bestPet);
console.log(fitBitData["avgGoodSleep"]); // - must be in a string 
console.log(fitBitData.totalMiles);

// updating properties
fitBitData.workOutsThisWeek = "6 OF 7";
fitBitData.totalSteps += 1000; // fitbitdata.totalsteps = total steps + 1000
fitBitData.totalMiles --; // unary operator i.e has only one side also ++ adds one , or -- subtracts one 
// adding prooperties 
fitBitData.heartStillBeating = true; // adds data at the end of an object /

console.log(fitBitData);

const learner = {
    firstName :"David",
    lastName  : "Jones",
    strenghths : ["Music", "Art"],
    exams : {
        midterm : 92,
        final : 88
    }
   
}
console.log(learner.strenghths.push("GBV"));
// console.log(learner.strenghths.splice(2, 0,"GBV"));
//console.log(learner.strenghths[2]= "GBV");
console.log(learner.strenghths[1]);

// Total Examination marks is: 180.
const totalExam = `The total examination marks is : ${learner.exams.midterm + learner.exams.final}`;
console.log(totalExam);
console.log(learner);

const person = {
    age : 26,
    cohorts : {
        cohortOne : 15,
        cohortTwo :19
    }
};

person.gender = "female";  // adding property 
console.log(person.age); // accessing age in objects ...we use custom keys
person ["city"] = "Eldoret"  // adding a property 
   //
const bothCohorts = `The total number of the two cohorts is : ${person.cohorts.cohortOne +person.cohorts.cohortTwo}!`;
console.log(bothCohorts);
console.log(person);  

const firstNum = {
    one : 1,
    two : 2,
    three: 3
};
const secondNum = {
    one : 1,
    two : 2,
    three: 3
};
console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(firstNum === secondNum);

//Checking for equality of arrays and objects 
// every array /object is assigned their own unique reference addresss.
// console.log(firstNum === secondNum); result is fasle , coz they have different addresses 

