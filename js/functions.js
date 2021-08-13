"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello (name) {
    return("Hello " + name )
}

console.log(sayHello("codeup"));

//Refactored Code

var storeName = prompt("What is your name?");
alert('Hello ' + storeName + '!');


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Rhiannon");

//console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = ("Rhiannon");

console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(x) {
    return x === 2;
}

isTwo(random);

console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip (x, y) {
return x * y;
}

console.log(calculateTip(0.20, 20));
console.log(calculateTip(0.25, 25.50));
console.log(calculateTip(0.15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var billTotal = prompt("How much was your bill?");
var tip = prompt("What percent do you want to tip?");

var total = billTotal * tip;

alert("Your should tip $" + total + " dollars!");

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(x, y) {
    var calcPercent = (y * x);
    return x - calcPercent;
}
console.log(applyDiscount(100, .2))

//Refactored Code

var ogPrice = prompt("What was the orignal price of your product?")
var discount = prompt("Do you have a coupon code? (convert percent to decimal, please)")

var newPrice = ogPrice - (ogPrice * discount);

alert("Your new, discounted total is $" + newPrice + " dollars!");

/*Code Challenges

   Make a function called returnTwo() that returns the number 2 when called
    Test this function with console.log(returnTwo()) */

function returnTwo() {
    return 2;
}

returnTwo();

console.log(returnTwo());


    /* Make a function called sayHowdy() which console.logs the string “Howdy!”
    Test this function by directly calling sayHowdy() */

function sayHowdy() {
    console.log("Howdy!");
}

sayHowdy();

   /* Remember this function does not need a defined return value
    Make a function called returnName() that returns the string of your name
    Test this function with console.log(returnName()) */

function returnName() {
    return "Rhiannon";
}

console.log(returnName())

  /*  Make a function called addThree() which takes in a number input and returns the number plus 3.
    Test this function with console.log(addThree(5)) */

function addThree(x) {
   return x + 3;
}

console.log(addThree(5));

   /*  Make a function called sayString() which returns the string input passed in.
    Test this function with console.log(sayString('codeup')) */

function sayString(x) {
    return x;
}

console.log(sayString('codeup'))

/*Challenge Function Drills


Write a function called identity(input) that takes in an argument called input and returns that input.*/

function identity(input) {
    return input;
}

/*Write a function called getRandomNumber(min, max) that returns a random number between min and max
values sent to that function call. */

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

/* Write a function called first(input) that returns the first character in the provided string. */

function first(inputF) {
    var inputF = "some string";
    return inputF.charAt(0);
}

 /* Write a function called last(input) that returns the last character of a string */

 function last(inputL) {
    var inputL = "some string";
    return inputL.charAt(inputL.length-1);
}

/* Write a function called rest(input) that returns everything but the first character of a string. */

function rest(inputRes) {
var inputRes = "some string";
return inputRes.substring(1);
}


/* Write a function called reverse(input) that takes a string and returns it reversed. */

function reverse(inputRev) {
    var inputRev = "some string";
    return inputRev.split("").reverse().join("");
}

/* Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric. */

function isNumeric(inputN) {
    if (typeof inputN === "number") {
        return true;
    }
    return false;
}

/*Write a function called count(input) that takes in a string and returns the number of characters. */

function count(inputC) {
    return inputC.length;
}

 /*   Write a function called add(a, b) that returns the sum of a and b */

 function add(a, b) {
     return a + b;
 }

/* Write a function called subtract(a, b) that return the difference between the two inputs. */

 function subtract(c, d) {
     return c + d;
 }

 /* Write multiply(a, b) function that returns the product */

function multiply(e, f) {
    return e * f;
}

/* Write a divide(numerator, denominator) function that returns a divided by b */

function divide(g, h) {
return g / h;
}

/* Write a remainder(number, divisor) function that returns the remainder left over when dividing
number by the divisor. */

function remainder(num, div) {
    return num % div;
}

/* Write the function square(a) that takes in a number and returns the number multiplied by itself. */

function square(s) {
    return s * s;
}

/* Write a function called sumOfSquares(a, b) that uses only your add() function and your square function
    and not + or * operators */



/* Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math
function you want to apply. a and b are the two numbers to run that function on.
 */
