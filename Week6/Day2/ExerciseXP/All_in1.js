//1
const getGifs = () => {
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", {method: "GET"})
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Something is wrong")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
}

getGifs();

//2
const getSun = () => {
    fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", {method: "GET"})
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Something is wrong")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
}

getSun();

//3
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

//4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // -> calling resolved

