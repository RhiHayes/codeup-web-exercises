console.log("hi")

"use strict"

$(document).ready(function () {

    //This gets the weather data
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherKey,
        q: "San Antonio, Texas",
        units: 'imperial'
        })

        //When the above is done, post the data

        .done(function (weatherData) {

            console.log(weatherData);

    //I'm going to mak new variables for everything I want to post

    //This variable is looking inside of the "main" object for
    //the "temp" property ⬇

            var temp = weatherData.main.temp

            var name = weatherData.name


            $("#location").html(name)
            $("#temp").html( Math.round(temp) + "°")

    })




});




