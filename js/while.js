console.log("Currently incomplete: While.js")

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
 */

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var boughtCones = Math.floor(Math.random() * 5) + 1;

console.log("There are " + allCones + " cones total.");

do {
    var remainingCones = allCones - boughtCones;
    console.log("There are " + remainingCones + " left.");
} while (allCones <= 0);





