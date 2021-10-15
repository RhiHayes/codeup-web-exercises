console.log("Hello API")

const API_URL = "https://vagabond-glacier-verse.glitch.me/dogs"

//Get's all the dogs

function getDogs() {
    return fetch(API_URL)
        .then((response) =>
            response.json());
}

// getDogs().then((dogs) => console.log(dogs))


//Gets dog by ID:

function getDog(id) {
    return fetch(`${API_URL}/${dog.id}`)
        .then((Response) => response.json());
}

// getDog(11).then((dog) => console.log(dog))


//Edit a dog by ID.

function editDog(dog) {
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog) //converts the JS Object into a JSON string
        // before sending it up to the server.
    }
    return fetch(`${API_URL}/${dog.id}`, options)
        .then((response) => response.json())
}

let piper = {
    "name": "Piper",
    "isGoodDog": true,
    "id": 11,
    "age": 8};

// editDog(piper).then((data) => console.log(data));

//Delete Dog by ID

function deleteDog(id) {
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
    }
        fetch(`${API_URL}/${dog.id}`, options)
        .then((response) => console.log("Deteleted dog with id:" + id, response))
}

//Create a dog

function createDog(dog) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog) //converts the JS Object into a JSON string
        // before sending it up to the server.
    }
    return fetch(`${API_URL}/${dog.id}`, options)
        .then((response) => response.json())
}

let lilly = {
    name: "Lilly",
    isGoodDog: true,
    age: 11};

// createDog(lilly).then((newDog) => console.log(newDog));