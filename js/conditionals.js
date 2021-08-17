console.log("I'm connected");

"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor() {

    var yourColor = prompt("Give me a color!");

    yourColor = yourColor.toLowerCase();

    if (yourColor === "red") {
        alert("Strawberries are red!");
    } else if (yourColor === "blue") {
        alert("Blue is the color of the sky!");
    } else if (yourColor === "cyan") {
        alert("I don't know anything about cyan!");
    } else {
        alert("I don't know anything about this color!")
    }

    console.log(randomColor);

}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor2() {

    switch (randomColor) {
        case "red":
            alert("This is red!");
            break;
        case "orange":
            alert("This is orange");
            break;
        case "yellow":
            alert("This is yellow!");
            break;
        case "green":
            alert("This is green!")
            break;
        case "blue":
            alert("This is blue!")
            break;
        case "indigo":
            alert("This is indigo!")
            break;
        case "violet":
            alert("This is violet!")
        default:
            alert("I don't know this color!")
            break;
    }

    console.log("My random color was " + randomColor + ".");

}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Give me a color!")

function analyzeColor3() {

    userColor = userColor.toLowerCase();

    alert("Your color was " + userColor + "!");

    switch (userColor) {
        case "red":
            alert("This is red!");
            break;
        case "orange":
                alert("This is orange!")
            break;
        case "yellow":
                alert("This is yellow!")
            break;
        case "green":
                alert("This is green!")
            break;
        case "blue":
            alert("This is blue!");
            break;
        case "purple":
            alert("This is purple!");
            break;
        case "pink":
                alert("Pink is my favorite!");
            break;
        default:
            alert("I don't know this color!")
            break;
    }

}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumX, totalAmountX) {

    if (luckyNumX == 0) {
        alert("Your total is $" + totalAmountX + "!");

    } else if (luckyNumX == 1) {
        var dollarsOff1 = .10 * totalAmountX;
        var newAmount1Y = totalAmountX - dollarsOff1;
        alert("You got 10% off! Your new total is: $" + newAmount1Y + " dollars!");

    } else if (luckyNumX == 2) {
        var dollarsOff2 = .25 * totalAmountX;
        var newAmount2Y = totalAmountX - dollarsOff2;
        alert("You got 25% off! Your new total is: $" + newAmount2Y + " dollars!");

    } else if (luckyNumX == 3) {
        var dollarsOff3 = .35 * totalAmountX;
        var newAmount3Y = totalAmountX - dollarsOff3;
        alert("You got 35% off! Your new total is $" + newAmount3Y + " dollars!");
    }

    else if(luckyNumX == 4) {
        var dollarsOff4 = .50 * totalAmountX;
        var newAmount4Y = totalAmountX - dollarsOff4;
        alert("You got 50% off! Your new total is $" + newAmount4Y + " dollars!");
    }

    else if(luckyNumX == 5) {
        alert("Hey, you got 100% off! Your order is FREE!");
    }

    else {
        alert("UH OH! Something went wrong. Please try again.");
    }

}








/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);


function calculateTotal2() {

    var luckyNumberPop = confirm("Your lucky number is: " + luckyNumber + "!");
    var luckyNumR = prompt("Hey, you got lucky a number between 0 and 5! Awesome! Which do you get?")
    var totalAmount = prompt("How much did you spend at Walmart today?")
    alert("Your total is $" + totalAmount + ".")

    if (luckyNumR == 0) {
        alert("Your total is $" + totalAmount + "!");

    } else if (luckyNumR == 1) {
        var dollarsOff1 = .10 * totalAmount;
        var newAmount1 = totalAmount - dollarsOff1;
        alert("You got 10% off! Your new total is: $" + newAmount1 + " dollars!");

    } else if (luckyNumR == 2) {
        var dollarsOff2 = .25 * totalAmount;
        var newAmount2 = totalAmount - dollarsOff2;
        alert("You got 25% off! Your new total is: $" + newAmount2 + " dollars!");

    } else if (luckyNumR == 3) {
        var dollarsOff3 = .35 * totalAmount;
        var newAmount3 = totalAmount - dollarsOff3;
        alert("You got 35% off! Your new total is $" + newAmount3 + " dollars!");
    }

    else if(luckyNumR == 4) {
        var dollarsOff4 = .50 * totalAmount;
        var newAmount4 = totalAmount - dollarsOff4;
        alert("You got 50% off! Your new total is $" + newAmount4 + " dollars!");
    }

    else if(luckyNumR == 5) {
        alert("Hey, you got 100% off! Your order is FREE!");
    }

    else {
        alert("UH OH! Something went wrong. Please try again.");
    }


}


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userEnter = confirm("Would you like to enter a number?");

if (userEnter == true) {
    var userNum = prompt("Enter a number!")

    var number = parseInt(userNum, 10);

    if (isNaN(userNum)) {
        alert("This isn't a number!");

    } else if (number % 2 == 0) {
        alert("Your number is even!")
    } else {
        alert("Your number is odd!")
    }

    if (isNaN(userNum))  {
        alert("Uh oh! Something went wrong!")
    } else {
        var addNum = number + 100;
        alert("Your number plus 100 is " + addNum + "!");
    }

    if (number > 0) {
        alert("Your number is positive!")
    } else if (number < 0) {
        alert("Your number is negative!")
    } else {
        alert("Enter a number next time!")
    }
}

else {
    console.log("User said no.")
}

/* Which Generation Are You?
 * Try finding your ancestors and offspring with code.
 *
 * Create a function that takes a number x and a character y ("m" for male, "f" for female),
 * and returns the name of an ancestor (m/f) or descendant (m/f).
 *
 * If the number is negative, return the related ancestor.
 * If positive, return the related descendant.
 * You are generation 0. In the case of 0 (male or female), return "me!".
 * Examples
 * >> generation(2, "f") ➞ "granddaughter"
 * >> generation(-3, "m") ➞ "great grandfather"
 * >> generation(1, "f") ➞ "daughter"
 *
 * Generation	Male	Female
 * -3	great grandfather	great grandmother
 * -2	grandfather	grandmother
 * -1	father	mother
 * 0	me!	me!
 * 1	son	daughter
 * 2	grandson	granddaughter
 * 3	great grandson	great granddaughter
 *
 */

function ancestors () {

    var genderDecision = prompt("Choose a gender for your ancestor! M or F?");
    var treeDecision = prompt("Choose a generation!");

    var genderDecision = genderDecision.toLowerCase();
    var treeDecision = parseInt(treeDecision, 10);

    if (genderDecision === "m") {
        alert("You're looking for a man on your ancestry tree!")

        if (treeDecision === -3) {
            alert("This is your great grandfather!")
        } else if (treeDecision === -2) {
            alert("This is your grandfather!")
        } else if (treeDecision === -1) {
            alert("This is your father!")
        } else if (treeDecision === 1) {
            alert("This is your son!")
        } else if (treeDecision === 2) {
            alert("This is your grandson!")
        } else if (treeDecision === 3) {
            alert("This is your great grandson!")
        } else if (treeDecision === 0) {
            alert("Hey! This is you!")
        }
    }

    else if (genderDecision === "f") {
        alert("You're looking for a woman on your ancestry tree!")
        if (treeDecision === -3) {
            alert("This is your great grandmother!")
        } else if (treeDecision === -2) {
            alert("This is your grandmother!")
        } else if (treeDecision === -1) {
            alert("This is your mother!")
        } else if (treeDecision === 1) {
            alert("This is your daughter!")
        } else if (treeDecision === 2) {
            alert("This is your granddaughter!")
        } else if (treeDecision === 3) {
            alert("This is your great granddaughter!")
        } else if (treeDecision === 0) {
            alert("Hey! This is you!")
        }
    }

    else {
        console.log("Something went wrong.")
    }

}











/* Say "Hello" Say "Bye"
 * Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
 *
 * Examples
 * >> sayHelloBye("alon", 1) ➞ "Hello Alon"
 * >> sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
 * >> sayHelloBye("jose", 0) ➞ "Bye Jose"
 *
 * Notes
 * The name you return must be capitalized.
 */





/* Tile Teamwork Tactics
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 *
 * Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
 *
 * Examples
 * >> possibleBonus(3, 7) ➞ true
 * >> possibleBonus(1, 9) ➞ false
 * >> possibleBonus(5, 3) ➞ false
 *
 * Notes
 * You cannot move backward (which is why example #3 doesn't work).
 * If you are already on the same tile, return false, as you would be advancing away.
 * Expect only positive integer inputs.
 */

function possibleBonus(a, b) {
    // write your code here
}

/* Integer in Range?
 * Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
 *
 * Examples
 * >> intWithinBounds(3, 1, 9) ➞ true
 * >> intWithinBounds(6, 1, 6) ➞ false
 *
 * >> intWithinBounds(4.5, 3, 8) ➞ false
 *
 * Notes
 * The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
 * Bounds will be always given as integers.
 */

function intWithinBounds(n, lower, upper) {
    // write your code here
}


/* Perimeters with a Catch
 * Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
 *
 * Use the following formulas:
 *
 * Perimeter of a square: 4 * side.
 * Perimeter of a circle: 6.28 * radius.
 * The catch is you can only use arithmetic or comparison operators, which means:
 *
 * No if... else statements.
 * No objects.
 * No arrays.
 * No formatting methods, etc.
 * The goal is to write a short, branch-free piece of code.
 *
 * Examples
 * >> perimeter("s", 7) ➞ 28
 * >> perimeter("c", 4) ➞ 25.12
 * >> perimeter("c", 9) ➞ 56.52
 */








