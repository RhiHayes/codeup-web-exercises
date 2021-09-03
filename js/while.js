console.log("While Loops: Complete!")

/* NOTES FROM ME:

This all makes sense! I made a loop like this before :)

 */


var num = 1;

while (num < 65536) {
    num = num * 2;
    console.log(num);
}

/*---Do-While Loop---*/

/*An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100
representing the amount of cones to sell before you start your loop. Inside of the
loop your code should generate another random number between 1 and 5, simulating the
amount of cones being bought by her clients. Use a do-while loop to log to the console
the amount of cones sold to each person.

The output should be similar to the following:

5 cones sold...     // if there are enough cones
Cannot sell you 6 cones I only have 3...    // If there are not enough cones
Yay! I sold them all!   // If there are no more cones

 */

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5




function iceCream() {

    console.log("There are " + allCones + " cones total.");

    do {
        var boughtCones = Math.floor(Math.random() * 5) + 1;
        console.log( boughtCones + " have been sold!");
        if(allCones >= boughtCones) {
            allCones = allCones - boughtCones;
            console.log("There are " + allCones + " more cones to sell.");
        }
    } while(allCones > 0);
    console.log("I sold all the cones!");

}

/* Do-while Exercise

NOTES FROM ME:

My old code:

----------------------

console.log("There are " + allCones + " cones total.");

    do {
        var remainingCones = allCones - boughtCones;
        console.log("There are " + remainingCones + " left.");
    } while (allCones <= 0);

----------------------

Where did I go wrong? Self analysis!

I wasn't too far off! I just needed an "if" statement. This code did what I wanted it
to do, but ONLY once! The "if" dictates that I need to keep doing this, based on
the conditions. I didn't give my original code any other conditions, so it just
did the code once. At least, that's my understanding of it.

So if all the cones were greater than the bought cones, repeat all cones minus
bought cones.

The while loop dictates that you need to do this UNTIL it reaches 0.

ANOTHER NOTE:

I realized that when testing, it goes into an infinite loop sometimes. I don't
think I have the knowledge to fix that right now.

NOTE #2:

The variable that determines how many cones a customer buys needs to be declared
INSIDE the do-while loop, not outside of it OR at the bottom. It needs to be done
first in the loop, but it isn't a constant number like the total amount.

 */






