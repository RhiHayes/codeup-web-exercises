console.log("hi")

"use strict"

$(document).ready(function () {
    //This gets the weather data
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherKey,
        q: "San Antonio, Texas",
        units: 'imperial',
        })

        //When the above is done, post the data

        .done(function (weatherData) {

            console.log("5 day forecast", weatherData);

    //Made New variables for days, had to look through all 40 lists
    //to find the correct dates...

            var dayOne = weatherData.list[0]
            var dayTwo = weatherData.list[2]
            var dayThree = weatherData.list[10]
            var dayFour = weatherData.list[18]
            var dayFive = weatherData.list[26]


    //All of these variables take the date, split it, and store it
    //inside another variable so it can be displayed later

            var dayOneStr = dayOne.dt_txt.split(" ");
            var dayOneDate = dayOneStr[0]

            var dayTwoStr = dayTwo.dt_txt.split(" ");
            var dayTwoDate = dayTwoStr[0]

            var dayThreeStr = dayThree.dt_txt.split(" ");
            var dayThreeDate = dayThreeStr[0]

            var dayFourStr = dayFour.dt_txt.split(" ");
            var dayFourDate = dayFourStr[0]

            var dayFiveStr = dayFive.dt_txt.split(" ");
            var dayFiveDate = dayFiveStr[0]



     //For my reference, all days are logged so I can get information for
     //that particular day.
            console.log("Day One:", dayOne);
            console.log("Day Two:", dayTwo);
            console.log("Day Three:", dayThree);
            console.log("Day Four:", dayFour);
            console.log("Day Four:", dayFive);


    //Displays the data including the date, temp, and name of the city

            $("#location").html(weatherData.city.name)

            $("#temp").html(dayOneDate + ": " + Math.round(dayOne.main.temp) + "°")

            $("#temp-2").html(dayTwoDate + ": "  + Math.round(dayTwo.main.temp) + "°")

            $("#temp-3").html(dayThreeDate + ": " + Math.round(dayThree.main.temp) + "°")

            $("#temp-4").html(dayFourDate + ": " + Math.round(dayFour.main.temp) + "°")

            $("#temp-5").html(dayFiveDate + ": " + Math.round(dayFour.main.temp) + "°")

    })


});




