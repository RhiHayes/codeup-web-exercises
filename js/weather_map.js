console.log("hi")

"use strict"

/* Had to refactor everything and change forecast to oncall... */

$(document).ready(function () {

    /* My map settings */

    mapboxgl.accessToken = "pk.eyJ1IjoicmhpaGF5ZXMiLCJhIjoiY2t1Y3p3dDBpMTV1djJybzF4YjY3Nm1zZyJ9.Bn70REDQYB2_ltESrpDLsQ";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 3,
        center: [-98.4916, 29.4252]
    });

    var weatherOptions = {
            lat: 29.4241,
            lon: -98.4936,
            appid: weatherKey,
            units: 'imperial'
        };


    //New user marker

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);





    //This function allows the user's cords to be picked up/stored, then
    // render weather is called INSIDE THIS FUNCTION to update everything once
    //the marker is dropped.

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        var lat = lngLat.lat
        var lng = lngLat.lng

        weatherOptions.lng = lng
        weatherOptions.lat = lat
        renderWeather()

    }

    marker.on('dragend', onDragEnd);


    //Clicking the button takes and stores the data from search area

    $('#find').click(function (event) {
        alert("Your weather has been updated!")
        var input = document.getElementById('search').value
        console.log(input);


        console.log(geocode(input, mapboxApiKey)); //This gets me the coordinates

        geocode(input, mapboxApiKey).then(function(obj) {

            weatherOptions.lat = obj[0];
            weatherOptions.lng = obj[1];

            renderWeather()

        })

        // var lat2 = input.lat
        // var lng2 = input.lng
        //
        // weatherOptions.lng = lat2
        // weatherOptions.lat = lng2

    });




    // Try to put everything inside a function.

function renderWeather() {

    //This gets the weather data
    $.get("http://api.openweathermap.org/data/2.5/onecall", weatherOptions)

        //When the above is done, post the data

        .done(function (weatherData) {

            console.log(weatherData);

              $('#weather-1').html("");
               $('#weather-2').html("");
               $('#weather-3').html("");
                $('#weather-4').html("");
                 $('#weather-5').html("");


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

            var dayOneDate = parseDate(dayOne.dt) //Not in use
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
            // var latLon = {
            //     lat: weatherData.lat,
            //     lng: weatherData.lon
            // }

            //
            // var location = (reverseGeocode(latLon, mapboxApiKey));
            // console.log(location);
            //
            //Displays title and date

            $("#location").html(location);

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




} //Function ends here

renderWeather(29.4252, -98.4916)  //Makes it start at San Antonio


});




