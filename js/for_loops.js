
console.log("Currently incomplete: for-loops.js");

// Completed Exercise 1-2-5
//Incomplete: Exercise 3-4


function showMultiplicationTable () {

    const number = parseInt(prompt('Enter an integer: '));

    console.log("The number you wanted to multiply was: " + number);

    /* NOTES FROM ME: Exercise 1-2

    First for: i equals one
    Second for: i will continue to go until it equals 10
    Third for: increments i

    Inside the for:

    It will multiply i by the number
    Display result
    Repeat until loop is complete
     */


    for(i = 1; i <= 10; i++) {

        var result = i * number;

        console.log("My multiplication tables: " + result);
    }

}

/* NOTES FROM ME: Exercise 5

    Variable j equals 100

    While Loop:
    while j is less than 0, j equals j minus 5...then console log the result. Then repeat!

     */

function countDown5 () {

    var j = 100;

    while (j > 0) {
        j = j - 5;
        console.log(j);
    }


}



