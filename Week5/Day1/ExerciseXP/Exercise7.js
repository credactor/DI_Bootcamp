// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (name) {    
    nav = document.getElementsByTagName("nav")[0];
    div = document.createElement("div");
    const img = document.createElement('img');    
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/John_Goodman_2014_2.jpg/170px-John_Goodman_2014_2.jpg';
    nav.appendChild(img);
    div.textContent = `${name}`;
    nav.appendChild(div);
    })("John");