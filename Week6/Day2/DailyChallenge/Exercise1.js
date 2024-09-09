// Use this Giphy API Random documentation: https://developers.giphy.com/docs/api/endpoint/#random
// Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

let counter = 0;

const fetchGif = (e) => {
    e.preventDefault();
    let input = e.target.gif.value;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, {method: "GET"})
        .then((res) => {
            return res.json();})
        .then((data) => {
            let randomIndex = Math.floor(Math.random() * data.data.length);
            gifUrl = data.data[randomIndex].images.original.url;
            render(gifUrl);
        })
        .catch((e) => {console.log(e);});
};

const render = (url) => {
    counter ++;
    let html = `<div id="div${counter}"><img src=${url} id="img${counter}"/><button onclick="deleteDiv(${counter})">Delete</button></div>`;    
    document.getElementById("container").innerHTML += html;
};

const deleteAll = () => {
    counter = 0;
    document.getElementById("container").innerHTML = '';
}

const deleteDiv = (num) => {
    document.getElementById(`div${num}`).remove();
}