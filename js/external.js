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

var taxes = answer * 0.065;

alert("However, $" + taxes.toFixed(2) + " dollars will be added due to taxes. :(");

var newTotal = answer + taxes;

alert("Your new total is $" + newTotal.toFixed(2) + " dollars.")

/* Exercise #2 from yesterday

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook,
6 hours for Google and 4 hours for Amazon.
 */

var googleResponse = prompt("How many hours did you work at Google this week?");
var amazonResponse = prompt("How many hours did you work at Amazon this week?");
var facebookResponse = prompt("How many hours did you work at Facebook this week?");


var google = 400 * googleResponse;
var amazon = 380 * amazonResponse;
var facebook = 350 * facebookResponse;

var answer2 = (google + facebook + amazon);

alert("You earned $" + answer2 + " dollars this week!");

/* Exercise #3 from yesterday

A student can be enrolled in a class only if the class is not full and the class schedule
does not conflict with her current schedule.
 */

alert("My results for Exercise 3 are: var studentEnrolled = classNotFull + currentSchedule; " +
    "+ var studentNotEnrolled = classFull + conflictingSchedule;");

/*Answer for Exercise #3
var studentEnrolled = classNotFull + currentSchedule;
var studentNotEnrolled = classFull + conflictingSchedule;
*/


/* Exercise #4 from yesterday

A product offer can be applied only if a person buys more than 2 items, and the offer has
not expired. Premium members do not need to buy a specific amount of products.
 */

alert("My results for Exercise 4 are: var normalCustomer; var premiumCustomer; var productOfferPrem = premiumCustomer;" +
    " var productOfferNorm = normalCustomer + buy2 + notExpired;");

/* Answer for Exercise #4
var normalCustomer;
var premiumCustomer;

var productOfferPrem = premiumCustomer;
var productOfferNorm = normalCustomer + buy2 + notExpired;
*/
