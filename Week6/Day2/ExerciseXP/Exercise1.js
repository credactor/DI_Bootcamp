// With your knewly accumulated knowledge of the Fetch API lets write some cool code!
//     You will work with this part of the documention: https://developers.giphy.com/docs/api/endpoint/#search
//     You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries
//     q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs
//     rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation: https://developers.giphy.com/docs/optional-settings/#rating
//     api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//     Create a program to retrieve the data from the API URL provided above.
//     Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
//     Make sure to check the status of the Response and to catch any occuring errors.

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