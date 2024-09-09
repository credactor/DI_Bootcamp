// Use this Giphy API Random documentation: https://developers.giphy.com/docs/api/endpoint/#random
// Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to fetch a gif. Make sure to check the status of the Response and to catch any occuring errors.
// Once the server sends back data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API. 

function fetchGif() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", {method: "GET"})
        .then((res) => {
            return res.json();})
        .then((data) => {
            gifUrl = data.data.images.original.url;
            render(gifUrl);
        })
        .catch((e) => {console.log(e);});
};

const render = (url) => {
    let html = `<img src=${url}"/>`;    
    document.getElementById("container").innerHTML = html;
};

fetchGif();