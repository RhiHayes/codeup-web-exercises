console.log("Test")


// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

function timesFour(input) {

    if(isNaN(parseInt(input)) || Array.isArray(input)) {
        return false;
    }

    return input * 4;

}

console.log(timesFour(0)) //0
console.log(timesFour("5")) //20
console.log(timesFour(-5)) //-20
console.log(timesFour('Texas')) //false
console.log(timesFour([2,1,0])) //false
console.log(timesFour(true)) //false
console.log(timesFour(null)) //false

console.log("------------------")


// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

function convertDaystoHours(days) {

    if(isNaN(parseInt(days)) || Array.isArray(days)) {
        return false;
    }

    return days * 24;

}


console.log(convertDaystoHours(0)) //0
console.log(convertDaystoHours('5')) // 120
console.log(convertDaystoHours('Texas')) //false
console.log(convertDaystoHours([2, 1, 0])) //false
console.log(convertDaystoHours(true)) //false
console.log(convertDaystoHours(false)) //false

console.log("------------------")



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false

function calculateTax(totalPaid, taxPercent) {

    if(isNaN(parseInt(totalPaid)) || (isNaN(parseInt(taxPercent)) || Array.isArray(totalPaid || taxPercent))) {
        return false;
    }

    var taxDollars = totalPaid * (taxPercent / 100)
    var newTotal = totalPaid + taxDollars;

    newTotal = newTotal.toFixed(2); // Adds two decimals!

    return "$" + newTotal;

}

console.log(calculateTax(25, 8))				 // “$27.00"
console.log(calculateTax(10, 12))            // “$11.20”
console.log(calculateTax(120, 15.5))			 //	“$138.60"
console.log(calculateTax(120, "10"))			 //	“$138.60"
console.log(calculateTax(10, true))           // false
console.log(calculateTax("Codeup", 100))      // false
console.log(calculateTax([1, 2, 3], 10))      // false
console.log(calculateTax())                                       // false