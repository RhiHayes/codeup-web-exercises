console.log("Break and Continue: Complete!")

//Completed ALL Exercises!

/* NOTES FROM ME

First, the user enters a number between 1-50. THe while says that
while the string is empty, the prompt will repeat.

The variable userNum is turned into a JS number (so not a string number).

For the for loop, incrementer is equal to 1. Then, it repeats this until it reaches
50. Then increment++ to avoid looping.

The if loop states that if the number has no remainder when divided by 2,
skip it, then the else if states that if the userNum is equal to the incrementer,
console.log a skip statement.


Finally, the else statement console.logs the remaining numbers, which are all odd,
thanks to the for loop!

 */


do {
    var userNum = prompt("Give me a number between 1-50!");
} while (userNum === "")

var userNum = parseInt(userNum, 10);

for (var incrementer = 1; incrementer <= 50; incrementer++) {
    if ( incrementer % 2 === 0) {
        continue;
    }

    else if (incrementer === userNum) {
        console.log("UH OH! I gotta skip " + userNum + "!")
    }

    else {
        console.log("Here is an odd number: " + incrementer);
    }
}

