// Improve the program below :
//     Create an async function, that will await for the above GET request.
//     The program shouldn’t contain any then() method.
//     Make sure to check the status of the Response and to catch any occuring errors.

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

const starWars = async () => {
    try {
        let response = await fetch("https://www.swapi.tech/api/starships/9/", {method: "GET"});
        let objectStarWars = await response.json();
        console.log(objectStarWars);
    } catch (error) {
        console.log(error);
    }
};

starWars();