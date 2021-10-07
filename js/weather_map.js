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

console.log(dayOneDate)

     //For my reference, all days are logged so I can get information for
     //that particular day.
            console.log("Day One:", dayOne);
            console.log("Day Two:", dayTwo);
            console.log("Day Three:", dayThree);
            console.log("Day Four:", dayFour);
            console.log("Day Five:", dayFive);


    //Displays title and date

            $("#location").html(weatherData.city.name);

            $("#date-2").html(dayTwoDate)
            $("#date-3").html(dayThreeDate)
            $("#date-4").html(dayFourDate)
            $("#date-5").html(dayFiveDate)


//Displays all avg temperatures

            $("#temp").html(Math.round(dayOne.main.temp) + "°")

            $("#temp-2").html(Math.round(dayTwo.main.temp) + "°")

            $("#temp-3").html(Math.round(dayThree.main.temp) + "°")

            $("#temp-4").html( Math.round(dayFour.main.temp) + "°")

            $("#temp-5").html(Math.round(dayFive.main.temp) + "°")


//Displays all min/max temperatures

            $("#min-2").html("Min temp: " + Math.round(dayTwo.main.temp_min) + "°")
            $("#max-2").html("Max temp: " + Math.round(dayTwo.main.temp_max) + "°")

            $("#min-3").html("Min temp: " + Math.round(dayThree.main.temp_min) + "°")
            $("#max-3").html("Max temp: " + Math.round(dayThree.main.temp_max) + "°")

            $("#min-4").html("Min temp: " + Math.round(dayFour.main.temp_min) + "°")
            $("#max-4").html("Max temp: " + Math.round(dayFour.main.temp_max) + "°")

            $("#min-5").html("Min temp: " + Math.round(dayFive.main.temp_min) + "°")
            $("#max-5").html("Max temp: " + Math.round(dayFive.main.temp_max) + "°")


            $("#weather-1").html(dayOne.weather[0].main)
            $("#weather-2").html(dayTwo.weather[0].main)
            $("#weather-3").html(dayThree.weather[0].main)
            $("#weather-4").html(dayFour.weather[0].main)
            $("#weather-5").html(dayFour.weather[0].main)





        })




});




