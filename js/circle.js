(function() {
    "use strict";

    /* NOTES FOR ME:

     This project was VERY confusing to me so I'm going to write out what my code is doing so I can have a better understanding of it/so I can remember what it's doing later.

    ----------

     So for the first function getArea, we make a variable named area, put the math inside of it, then area is returned. Simple enough.

    ---

    The next function is logInfo and the parameter/argument is doRounding. This was a little confusing at first because I thought the function WAS named doRounding, but I was wrong.

    Var area is listed as a variable, but it isn't set as equal to anything yet. That's the if-else statement's job.

    ---

    Now for the if else: so if parameters have doRounding, area is equal to math.round, then add on the getArea function. What this is doing is rounding the number, then putting the new rounded number THROUGH the getArea function.

    ---

    At the end of the logInfo, area is logged.

    ---

    At the bottom of all of this, there is a bunch of console.log's. Raw circle information goes through the code, but doesn't ever touch the if in the if-else. Meanwhile, the console.log saying rounding will be done DOES go through the if in the if-else.

    circle.logInfo(true); === doRounding = true, execute if statement

    circle.logInfo(false); === doRounding = false, execute else statement

    ----------

    For the "to-do" to change the circle radius to 5, everything can just be copy and pasted over with the new circle object having the radius of 5. This saves a lot of time. The code works exactly the same as listed above.

    ----------

    Why was I having trouble? Self Analysis!

    I don't interact with functions like this often, so the setup confused me. I'm used to things like this:

    function getArea() {
    //code here
    }

    NOT

    getArea: function() {
    //code here
    }

    It's strange how I didn't understand the setup was nearly identical, but I understand now that they're basically the same (for what I'm doing today, anyway). Also, because all of these functions are inside an anonymous function, I couldn't really test to see if my code was doing what I wanted it to do in the console (which I do pretty often as well). Other than that, it was easy for me to get the concepts.

    ---

    Moral of the story? Don't get too flustered by different setups. Analyze the code, break it down, and do what you need to do!

    */

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var area = Math.PI * Math.pow(this.radius, 2);

            return area;

            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            var area;

            if(doRounding){
                area = Math.round(this.getArea());
            } else {
                area = this.getArea();
            }


            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var circle = {
        radius: 5,

        getArea: function (){

            var area = Math.PI * Math.pow(this.radius, 2);

            return area;
        },
        logInfo: function (doRounding) {

            var area;

            if(doRounding){
                area = Math.round(this.getArea());
            } else {
                area = this.getArea();

            }


            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    }


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();