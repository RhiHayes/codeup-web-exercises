console.log("Hi!");

/* Create a function named rollSixSided that takes in a number as a parameter. Write code within your function that would generate the number between 1 and 6 [the dice] and then console.log the result to the user. Your loop should run the number of times as specified by the argument provided.
    Example:
rollSixSided(10)
Result:
    You rolled a 1
You rolled a 5
You rolled a 2
You rolled a 3
You rolled a 6
You rolled a 6
You rolled a 3
You rolled a 1
You rolled a 6
You rolled a 4

 */

/* NOTES FOR ME:

THE FIRST LOOP I MADE ALL BY MYSELF WITH MINIMAL HELP AND I KNOW WHAT MY CODE IS REALLY DOING!!!! WOOHOO!!

Explanation of how the loop works in case I forget later:


The function rollSixSided takes a number in as an argument; this represents how many times the dice will be rolled.

Next is the for loop! The variable i starts at 0 and i increments. Standard loop stuff. The middle argument is what you need to pay attention to though! As long as i is less than num, the loop will run.

So if I put rollSixSided(4), variable i is still at 0, so the loop activates and runs until is no longer less than 4.


 */

function rollSixSided (num) {

    for (var i = 0; i < num; i++) {
        var dice = Math.floor(Math.random() * (7 - 1) + 1);
        console.log("Your dice roll is: " + dice)
    }

}

 /*WARM UP DATE: 9-2-21


 Why pay a fortune teller when you can just program your fortune yourself?

    Write a function named tellFortune that:
    takes 4 arguments: number of children, partner's name, geographic location, job title.


Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


Call that function 3 times with 3 different values for the arguments.

*/

/* NOTES FROM ME:

This is the most basic way to do the exercise.

 */


function tellFortune(x, y, z, n) {
    return "You will be a " + x + " in " + y + " and married to " + z + " with " + n + " kids."
}

console.log(tellFortune("artist", "new york", "shouta", 0))
console.log(tellFortune("doctor", "texas", "bob", 10))
console.log(tellFortune("warrior", "rome", "athena", 200))




/* NOTES FROM ME:

This is the more user-involved way to complete the exercise.

 */

function tellFortuneAdvanced() {

    var job = prompt("What is your dream job?")
    var location = prompt("Where do you want to live?")
    var marry = prompt("Who would you like to marry?")
    var kids = prompt("How many kids do you want?")

    alert("You will be a " + job + " in " + location + " and married to " + marry + " with " + kids + " kids.");

}

tellFortuneAdvanced();