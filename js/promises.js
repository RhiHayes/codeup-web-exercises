
// fetch('https://api.github.com/users/rhihayes/events',
//     {headers: {'Authorization': gitKey}})
//     .then(function (results) {
//         console.log(results);
//         return results.json()
//     })
//     .then(function (resultsArray) {
//         console.log(resultsArray);
//     })



/*
NOTE FOR ME: My understanding...

This gets the data from github. The profile it's referencing (mine)
is in the fetch event. The results are parsed into json, then passed the results into an
array with callback functions. Then, return array.
 */



function recentDate(username) {

    fetch('https://api.github.com/users/' + username + '/events',
        {headers: {'Authorization': gitKey}})
        .then(function (results) {
            return results.json()
        })
        .then(function (resultsArray) {

            console.log("Getting Date:")
            var date = resultsArray[0].created_at;

            console.log(username + ": " + date)
        });

}


recentDate("rhihayes");

recentDate("maryawhite");

recentDate("jackiedallas");




