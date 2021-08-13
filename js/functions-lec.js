(function () {


//Define Normal Function

function sayHello() {
    console.log("Hello!");
}

sayHello();

//Define Anonymous Function

var sayHowdy = function() {
    console.log("Howdy!");
}

sayHowdy();

//Define Arguments and Parameters

function add(x, y) {
    return x + y;
}

console.log("Add 2 + 3 = " + add(2, 3) );

function subtract(x, y) {
    return x - y;
}

//Scope

var instructor = "Douglas";
var day = "Friday";

function tellTheDay() {
    return "Tell " + instructor + " it's " + day + "!";
}

//Local Scope

function greeting() {
    var username = "Kenneth";
    return "Hi, " + username;
}

console.log(greeting());
//console.log(username);

//If you write a variable of the same name, it will
// override the global scope.

function checkDay() {
    var day = "Monday"
    return day;
}

console.log("It's " + checkDay());


//The "})()"; down here represent an Immediately Invoked Function!
//Now all my code will execute at once! This also keeps other from
//executing my code. It doesn't mean it's TOTALLY SAFE.
//Now I can't test my code in the console.

})();