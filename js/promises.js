console.log("Hi");

fetch('https://api.github.com/users/rhihayes/events/public',
    {headers: {'Authorization': gitKey}})
    .then(function (response) {
        console.log(response);
    })