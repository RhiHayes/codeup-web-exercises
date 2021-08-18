console.log("Break and Continue: Complete!")

//Completed ALL Exercises!

do {
    var userNum = prompt("Give me a number between 1-50!");
} while (userNum === "")

var userNum = parseInt(userNum, 10);

for (var incrementer = 1; incrementer <= 50; incrementer++) {
    if ( incrementer % 2  === 0) {
        continue;
    }

    else if (incrementer === userNum) {
        console.log("UH OH! I gotta skip " + userNum + "!")
    }

    else {
        console.log("Here is an odd number: " + incrementer);
    }
}