console.log("hi")

"use strict"

/* Had to refactor everything and change forecast to oncall... */

$(document).ready(function () {
    //This gets the weather data
    //https://api.openweathermap.org/data/2.5/onecall < url for onecall api path
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: weatherKey,
        lat: 29.424349,
        lon: -98.491142,
        //will need to change to using separate latlong properties [ref docs]
        units: 'imperial'
        })

        //When the above is done, post the data

        .done(function (weatherData) {

            console.log(weatherData);



    //Made New variables for days, had to look through all 40 lists
    //to find the correct dates...

            var dayOne = weatherData.daily[0]
            var dayTwo = weatherData.daily[1]
            var dayThree = weatherData.daily[2]
            var dayFour = weatherData.daily[3]
            var dayFive = weatherData.daily[4]

            //All of these variables take the date,convert it, then store it
            //inside another variable so it can be displayed later

            function parseDate(timestamp) {
                return new Date(timestamp * 1000).toLocaleDateString();
            }

            var dayOneDate = parseDate(dayOne.dt)
            var dayTwoDate = parseDate(dayTwo.dt)
            var dayThreeDate = parseDate(dayThree.dt)
            var dayFourDate = parseDate(dayFour.dt)
            var dayFiveDate = parseDate(dayFive.dt)




     //For my reference, all days are logged so I can get information for
     //that particular day.

            console.log(dayOne)
            console.log(dayTwo)
            console.log(dayThree)
            console.log(dayFour)
            console.log(dayFive)


    //Need to grab and use lat/lon so it can be displayed
       var lat = weatherData.lat
       var lon = weatherData.lon

        var latLonArr = [lat, lon];



    //Displays title and date

            $("#location").html(latLonArr);

            $("#date-2").html(dayTwoDate)
            $("#date-3").html(dayThreeDate)
            $("#date-4").html(dayFourDate)
            $("#date-5").html(dayFiveDate)
//
//
// //Displays all avg temperatures
//
            $("#temp").html(Math.round(dayOne.temp.day) + "°")

            $("#temp-2").html(Math.round(dayTwo.temp.day) + "°")

            $("#temp-3").html(Math.round(dayThree.temp.day) + "°")

            $("#temp-4").html( Math.round(dayFour.temp.day) + "°")

            $("#temp-5").html(Math.round(dayFive.temp.day) + "°")
//
//
// //Displays all min/max temperatures
//
            $("#min-2").html("Min temp: " + Math.round(dayTwo.temp.min) + "°")
            $("#max-2").html("Max temp: " + Math.round(dayTwo.temp.max) + "°")

            $("#min-3").html("Min temp: " + Math.round(dayThree.temp.min) + "°")
            $("#max-3").html("Max temp: " + Math.round(dayThree.temp.max) + "°")

            $("#min-4").html("Min temp: " + Math.round(dayFour.temp.min) + "°")
            $("#max-4").html("Max temp: " + Math.round(dayFour.temp.max) + "°")

            $("#min-5").html("Min temp: " + Math.round(dayFive.temp.min) + "°")
            $("#max-5").html("Max temp: " + Math.round(dayFive.temp.max) + "°")


            $("#weather-1").html(dayOne.weather[0].main)
            $("#weather-2").html(dayTwo.weather[0].main)
            $("#weather-3").html(dayThree.weather[0].main)
            $("#weather-4").html(dayFour.weather[0].main)
            $("#weather-5").html(dayFour.weather[0].main)

        })


    /* My map settings */

    mapboxgl.accessToken = "pk.eyJ1IjoicmhpaGF5ZXMiLCJhIjoiY2t1Y3p3dDBpMTV1djJybzF4YjY3Nm1zZyJ9.Bn70REDQYB2_ltESrpDLsQ";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 7,
        center: [-98.4916, 29.4252]
    });



});




