"use strict";
//
//~*~ While Loops ~*~
//

//are we there yet?
var areWeThereYet;

while(!areWeThereYet) {
    areWeThereYet = confirm("HEY! Are we there yet?")
}


// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation. While the condition is not true (!areWeThereYet), do some stuff (from the body of the loop)

var haveToy = confirm("Can I have that toy, please?!");

//Past modules: maybe use the variable into an alert and show that we captured that variable into a value.

//alert("Hey, it is " + haveToy + " that you can have the toy.");

//NOW: How we can use this variable + boolean inside with a while loop?

while(!haveToy) {
    haveToy = confirm("PLEASEEEEEEEEEEEE can I have the toy?!")
}

if(haveToy) {
    alert("Thanks, you're the best! :)");
}



// Notice that much like an if statement, our while loop will only run if the initial condition is met.
// If we give Codie the toy from the get go, we won't see the behavior in the loop at all.

// TODO: Quasar~ create a WHILE loop that runs as long as i is less than 10;
// As long as the var i < 10...console.log information about what's going on?
//AVOID AN INFINITE LOOP - remember you need, in some way, to subtract from i (think like a condition.)

var i = 0

while (i <= 10) {
    console.log("i is now number " + i + ".")
    i++;
}

//While loop down from 10

var j = 10;
while (j>= 0) {
    console.log("j is now number " + j + ".")
    j--;
}

//~*~ Do-While Loops ~*~


// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once
// [do this thing for sure this first time . . then check condition to continue VS. check condition . . will I do this thing at all?]

do {
  //Code to be run.
 } while (condition)

// Consider:

 while (false) {
     console.log("will you ever see me?");
 }

 do {
     console.log("But what about me?");
 } while (false);

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time be for stopping.

//DO-WHILE: At least one time, DO these things.

do {
    var secret = prompt("What is the secret password?");
} while (secret !== "sesame")



/* -----------BARRIER---------- */

if (secret === "sesame") {
    alert("YES! This is the secret password!")
    alert("The door opens.")
}

//You will never see the message below!

while (secret !== "sesame") {
    console.log("You won't see this message! Oops -George")
}

//You'll see this one though!

while (secret == "sesame") {
    alert("I'm changing the password now! it won't be the same when you come back!")
    console.log("George was here. New password is cooldude.")
    secret = "cooldude";
    break;
}

//type "secret" in console! New password is shown.

/* -----------BARRIER---------- */

// We can also use what we've learned above within the body of your functions:

//Multiply by 2 until it is greater that 100
//parameter to accept a num argument when calling. This parameter will be our starting point.

function multiplyByTwoUntilGreaterThanOneHundred (num) {

    while (num <= 100) {
        num = num * 2;
        console.log(num);
    }

}

//How to ask the user for a number!


var userNum = parseInt(prompt("Give me a number under 5 please :)"));


// For loops: Loops that are designed to run a given number of times. Think more math thinking.

for (var incrementer = 1; incrementer <= 10; incrementer++) {
    console.log('This loop has run ' + incrementer + " time(s).");
}

// The for loop has more to it as you can see. Let's break down the arguments:

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.

// Once again, we can use this in a function.

function sayHelloXTimes(num1) {
    for (num1; num1 >= 0; num1--) {
        if (num1 % 5 === 0) {
            console.log("Howdy! Our current number is: " + num1);
        } else {
            console.log("BOOM! Our current number is: " + num1)
        }
    }

}

// And we can use this with conditionals!

for (var i = 1; i < 25; i++){
     if (i % 6 == 0) console.log("Codeup");
     else if (i % 2 == 0) console.log("Code");
     else if (i % 3 == 0) console.log("Up");
     else console.log(i);
 }

// TODO: Quasar, how would we refactor the above back into a WHILE loop as we saw earlier?


// Below is a funky example that works, but will rely on moving between different data types.
 for (var i = "A"; i.length < 8; i = i + "A") {
     console.log("This is a bit of a tricky way to run a for loop, but hey, it works...this is what i looks like: " + i.length);
 }

// We can get a loop to stop using break;

var x = 0;

while (true) {
     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
     x++;
     if (x === 5) {
         alert("LambChop, cut it out!!")
         break;
     }
 }


for (var j = 5; j < 100000; j += 5) {
     if (j === 25) {
         break;
     }
     console.log(j);
 }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.


// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
    for (var i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
    return x;
}

allOddNumbersToX(17);
//allOddNumbersToX(18);


// The above function will only log the odd numbers until the argument passed.