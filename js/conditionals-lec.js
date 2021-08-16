console.log("I'm connected");

/* If-Else! */

var isSunny = false;
var haveSunscreen = false

if (isSunny) {
    //Do some stuff
    alert("Don't forget some sunscreen!")
} else {
    alert("Good--too much sun can cause issues as you get older.");
}

//Two conditions in an If-Else statement!

if (isSunny && haveSunscreen) {
    //Do some stuff
    alert("Don't forget some sunscreen!");
} else {
    alert("Well, hopefully it's not too sun for you out there!");
}


/* Put this code into a function! */

function uvAlert() {

    var isSunny2 = confirm("Is it sunny outside?")
    var haveSunscreen2 = confirm("Did you remember your sunscreen?")

    if (isSunny2 && haveSunscreen2) {
        //Do some stuff
        alert("Awesome! Keep your sunscreen on!")
    } else {
        alert("Oh, well have a good day!");
    }

}

/* Adding in an Else-If */

var isSunny2 = confirm("Is it sunny outside?")
var haveSunscreen2 = confirm("Did you remember your sunscreen?")

if (isSunny2 && haveSunscreen2) {
    //Do some stuff
    alert("Awesome! Keep your sunscreen on!")
} else if (isSunny2 && !haveSunscreen2) {
    //With condition 1 being false... IF condition 2 is true:
    alert("Aw man...remember your sunscreen next time then!")
} else {
    alert("Oh, well have a good day!  You'll be alright!");
}

/* If, else-if, else - syntax and example with literal booleans */
/* If true for first condition, condition 1 is true.
If false for first condition but true for second condition, condition
2 is true.
If false for condition 1 and condition 2, else executes.
 */


if (true) {
    //execute if condition 1 is true
    alert("Condition 1 was true!");
} else if (true) {
    //execute if condition 2 is true
    alert("Condition 2 was true!");
} else {
    //execute if all above conditions do not evaluate to true
    alert("None of the other conditions were true.");
}



var trafficLight = "red";

if(trafficLight === "red") {
    alert("Stop! The light is red!");
} else if(trafficLight === "yellow") {
    alert("Slow down! The light is yellow right now!");
} else if (trafficLight === "green") {
    alert("Keep going! The light is green! Go go go!")
} else {
    alert("That isn't a color of a traffic light!")
}



function trafficColor() {

    var userTrafficLight = prompt("What color is the light right now?");

    userTrafficLight = userTrafficLight.toLowerCase();

    if(userTrafficLight === "red") {

        var isBlinking = confirm("Uh oh - is the red light blinking?");

        if(isBlinking) {
            //Nested conditional to trigger IF condition 1 is true...
            //AND this condition is true
            alert("If the red light is blinking, treat it like a stop sign and be cautious!");
        } else {
            alert("Okay, if it was blinking that would be a different story.");
        }

        alert("Stop! The light is red!");
    } else if(userTrafficLight === "yellow") {
        alert("Slow down! The light is yellow right now!");
    } else if (userTrafficLight === "green") {
        alert("Keep going! The light is green! Go go go!")
    } else {
        alert("That isn't a color of a traffic light!")
    }

}


//If/else before a ternary

if(true) {
//execute if condition is true
    console.log("It's sunny!");
} else {
    //execute if condition is false
    console.log("It's not sunny!");
}

//Rewritten the above code as a ternary

(true) ? console.log("This is a sunny day!") : console.log("This is not a sunny day!");


//Switch Statement

function trafficColor2() {

    var userTrafficLight2 = prompt("What color is the light right now?");

    userTrafficLight2 = userTrafficLight2.toLowerCase();

    switch (userTrafficLight2) {
        case "red":
            alert("Stop! The light is red!");
            break;
        case "yellow":
            alert("Slow down! The light is yellow!");
            break;
        case "green":
            alert("Go go go, the light is green!");
            break;
        default:
            alert("This is the default!")
            break;
    }

}
