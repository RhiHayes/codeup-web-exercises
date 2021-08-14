console.log("I'm connected!");

/* I'm going to copy the code from the Functions lesson and
analyze/refactor the code to deepen my understanding of functions.
 */

someFunction(); // call the function someFunction()
parseInt("42"); // call the parseInt function with an argument of "42"



var result = doSomething(); // Result now holds the value of what doSomething() returns
console.log(doSomething()); // The value doSomething() returns is passed to console.log()



var myString = "42";
var myNumber = parseInt(myString);



// This code will *not* run the function
doSomething;
parseInt;



function myFunction(input) {
    var output = /* do something to calculate output */
    return output;
}



function increment(x) {
    return x + 1;
}

var four = increment(3);
var six = increment(increment(increment(3)));



var six = increment(increment(increment(3)));
var six = increment(increment(4));
var six = increment(5);
var six = 6;



function increment(someNumber) {
    return someNumber + 1;
    console.log('you will never see this.');
    return someNumber + 2; // This will never run
}



function sum(a, b) {
    var result = a + b; // technically the `result` variable is not necessary
    return result;      // instead we could just return a + b directly
}

var x = 3;
var seven = sum(x, 4);



// a function with no return value
function shout(message) {
    alert(message.toUpperCase() + "!!!");
}

var returnValue = shout('hello there');
console.log(returnValue); // undefined