"use strict";

console.log("Hello from external JS!");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");

alert("Great, my favorite color is " + favColor + " too!");

/* Exercise #1 from yesterday

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

var littleMerResponse = prompt("How many days did you rent The Little Mermaid for?");
var brotherBResponse = prompt("How many days did you rent Brother Bear for?");
var herculesResponse = prompt("How many days did rent Hercules for?");

var littleMermaid = littleMerResponse * 3;
var brotherBear = brotherBResponse * 3;
var disneyHercules = herculesResponse * 3;

var answer = (littleMermaid + brotherBear + disneyHercules);

alert("You spent $" + answer + " dollars!");

/* Exercise #2 from yesterday

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook,
6 hours for Google and 4 hours for Amazon.
 */

var googleResponse = prompt("How many hours did you work at Google for?");
var amazonResponse = prompt("How many hours did you work at Amazon for?");
var facebookResponse = prompt("How many hours did you work at Facebook for?");


var google = 400 * googleResponse;
var amazon = 380 * amazonResponse;
var facebook = 350 * facebookResponse;

var answer2 = (google + facebook + amazon);

alert("You earned $" + answer2 + " dollars this week!");

