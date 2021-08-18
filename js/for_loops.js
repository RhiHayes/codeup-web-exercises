
console.log("Currently incomplete: for-loops.js");

// Completed Exercise 1-2
//Incomplete: Exercise 3-5


function showMultiplicationTable () {

    const number = parseInt(prompt('Enter an integer: '));

    console.log("The number you wanted to multiply was: " + number);

    /* First for: i equals one
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




