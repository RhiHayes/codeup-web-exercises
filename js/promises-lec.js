"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?

console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully
//TODO: add a method that runs if the Promise fails
//TODO: In the callback function of the .then method, parse the response into JSON


pokemonAPI.then(function (results) {
    console.log(results);
    // results.text().then((text) =>(console.log(text)))
    results.json().then((resultsObj) => console.log(resultsObj));
}).catch(function(err) {
    console.log(err);
});


/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.

// pokemonAPI.then(function (results) {
//     console.log(results);
//     results.json()
//         .then((resultsObj) => {return resultsObj.results})
//         .then((pokemon) => console.log(pokemon[0]));
// });

fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((jsonData) => jsonData.results)
    .then((results) => results.forEach((result) => console.log(result.name)));

// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

fetch("https://swapi.dev/api/films")
    .then((response) => {
        return response.json();
    }).then((starWarsFilmData) => {
        //starWarsFilmData is the parsed object from the call to response.json()
    console.log(starWarsFilmData.results);
    starWarsFilmData.results.forEach(function (film) {
        console.log(film.title)
    })
    //starWarsFilmData results
});



// TODO: Use Promise chaining to console log the json response

// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race


var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
let starWarsAPI = fetch("https://swapi.dev/api/films");

/* PROMISE.ALL BELOW*/

// Promise.all([pokemonAPI, starWarsAPI])
// .then((responses) => {
// return Promise.all(
//     responses.map((response) => {
//     return response.json();
//         }
//     ))
// }).then((parsedResults) => {
//
//     console.log(parsedResults);
//
// });


Promise.race([pokemonAPI, starWarsAPI])
    .then ((response) => {console.log(response)});
