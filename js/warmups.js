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

/* WARM UP DATE: 9/3/21

You know how old your dog is in human years, but what about dog years? Calculate it!
    Write a function named calculateDogAge that:
       * takes 1 argument: your puppy’s age.
       * calculates your dog’s age based on the conversion rate of 1 human year to 7 dog years.
       * outputs the result to the screen like so: “Your doggie is NN years old in dog years!”
    Call the function three times with different sets of values.
    Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.

 */


/* NOTES FROM ME:

This is the most basic way to do the exercise.

 */


function calculateDogAge(dog, human) {
    var dogAge = dog * 7
    console.log("Your dog is " + dogAge + " in dog years!")

    /* BONUS */

    var humanDogAge = human * 7
    console.log("Your age converted to dog years is " + humanDogAge + " years old!")

}

console.log(calculateDogAge(1, 18))
console.log(calculateDogAge(3, 21))
console.log(calculateDogAge(5, 30))


/* WARM UP DATE: 9/14/21


Given arrays of strings that are orders of food in string form to your
function, write a function named tacoTuesday that returns TRUE or FALSE if
the array provided has any element mention the word ‘taco’ in its value.


 */

var hasTacos = ["blueberry muffin", "banana", "yogurt", "cereal",
"brisket and egg taco"];

var noTacos = ["parfait", "omlette de frumage", "protein shake", "fasting"];
tacoTuesday(hasTacos) //true
tacoTuesday(noTacos) //false

function tacoTuesday(arr) {

    for (var i = 0; i < arr.length; i++) {
//This loop is saying that it NOT go above the length of the input.


        if (arr[i].includes("taco")) {
            return true;
        }
//This is saying while the if is in the loop, it will look through to find
// a taco.


    }
        return false;
}

// It breaks out of the loop once done and returns false.

console.log(tacoTuesday(hasTacos));
console.log(tacoTuesday(noTacos));


