// Read carefully the documention to understand all the possible queries that the URL accept: https://developers.giphy.com/docs/api/endpoint/#search
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

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