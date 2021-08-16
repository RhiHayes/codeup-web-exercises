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
