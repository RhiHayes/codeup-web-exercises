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

