
console.log("For Loops: Complete!");

// Completed Exercise 1-2-4-5
//Incomplete: Exercise 3


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
    while j is less than 0, j equals j minus 5...then console log the result. Then
    repeat!

     */

function countDown5 () {

    var j = 100;

    while (j > 0) {
        j = j - 5;
        console.log(j);
    }


}

//Exercise 4
/* NOTES FOR ME:

Inside the parenthesis, i is turned into a string, then repeated "i"
amount of times. The rest of this makes sense to me, I think. Might need a
refresher.
 */

function oneOneTwoTwos() {

    for (var i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }

}

/*Exercise 3

NOTES FROM ME:

The for loop determines how many random numbers will be generated.

Then the rest is just if and else, which I have more notes on and a better
understanding of. :)

 */

function randNumbers () {

 for (var i = 1; i <=10; i++)   {

     var random = Math.floor(Math.random() * 180) + 20;
     if (random % 2 == 0) {
         console.log(random + " is even.")
     } else {
         console.log(random + " is odd.")
     }

 }

}