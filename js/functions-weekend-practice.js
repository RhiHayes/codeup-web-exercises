console.log("I'm connected!");

/* NOTE FROM ME: I'm going to copy the code from the Functions lesson and
analyze/refactor the code to deepen my understanding of functions.
 */

//someFunction(); // call the function someFunction()

parseInt("42"); // call the parseInt function with an argument of "42"


//NOTE FROM ME: Turned doSomething into a function

function doSomething(a) {
    return a + 10;
}

var result = doSomething(); // Result now holds the value of what doSomething() returns
console.log(doSomething()); // The value doSomething() returns is passed to console.log()



var myString = "42";
var myNumber = parseInt(myString);



// This code will *not* run the function
doSomething;
parseInt;



function myFunction(x) {
    var y = x + 2 /* do something to calculate output */
    return y;
}



function increment(x) {
    return x + 1;
}

var four = increment(3);
var six = increment(increment(increment(3)));


//NOTE FROM ME: ALL of these variables increment until the variable is 6.


var six1 = increment(increment(increment(3)));
var six2 = increment(increment(4));
var six3 = increment(5);
var six4 = 6;



/* NOTE FOR ME: A function only ever executes ONE return statement. That's why
it isn't running. */

function increment2(someNumber) {
    return someNumber + 1;
    console.log('you will never see this.');
    return someNumber + 2; // This will never run
}



function sum(a, b) {
    var result = a + b; // technically the `result` variable is not necessary
    return result;      // instead we could just return a + b directly
    // MY ADD ON: but if you wanted to store the information, it could be useful to store in a var.
}

var x = 3;
var seven = sum(x, 4);



// a function with no return value
//NOTE FROM ME: Because it has no return value!
function shout(message) {
    alert(message.toUpperCase() + "!!!");
}

var returnValue = shout('hello there');
console.log(returnValue); // undefined



/* MORE FUNCTION WEEKEND PRACTICE */



var cupcake = prompt("How many cupcakes do you have?")
var eat = prompt("How many cupcakes did you eat?")


function cupcakeCalc() {
    var cupcakesLeft = cupcake - eat;
    return cupcakesLeft;
}

alert("You have " + cupcakesLeft + " cupcakes left!");

/* NOTE FROM ME:
So I was experimenting with this code...it doesn't work so I''m analyzing it to figure out
why. So it's looking like functions can't do anything with variables outside of it's brackets,
because it can't calculate "cupcake" and "eat". But when I try putting the variables in a function...
 */

function cupcakeCalc2() {
    var cupcake2 = prompt("How many cupcakes do you have?")
    var eat2 = prompt("How many cupcakes did you eat?")
    var cupcakesLeft2 = cupcake2 - eat2;
    return cupcakesLeft2;
}

/* NOTE FROM ME:
It STILL doesn't work! If I try to execute this function it just returns the code! Is it because
my variables are prompts? Do I need to change that? Who knows! I'll keep trying!

UPDATE:
Okay, the "cupcakeCalc2" code actually DOES work, but I forgot the () to call it. Whoops.
 */

function cupcakeCalc3(c, e) {
    var cupcakesLeft3 = c - e;
    return cupcakesLeft3;
}

/* NOTE FROM ME:
The code above works because it's what we've been practicing for the past day. I made this code in
an attempt to figure out where I was going wrong with "cupcakeCalc2", but nothing is wrong with either
"cupcakeCalc2" or "cupcakeCalc3"!
 */

function cupcakeCalc4() {
    var cupcake4 = prompt("How many cupcakes do you have?")
    var eat4 = prompt("How many cupcakes did you eat?")
    var cupcakesLeft4 = cupcake4 - eat4;
    alert("You have " + cupcakesLeft4 + " cupcakes left!");
}

/* NOTE FROM ME:
I added an alert so the user is notified how many cupcakes they have left!
 */
